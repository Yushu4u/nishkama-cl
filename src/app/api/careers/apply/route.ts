import { NextResponse } from "next/server";
import { careerApplicationSchema } from "@/lib/validation";

// Simple in-memory rate limiter per IP (prevents abusive burst submissions)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

interface ApplicationWebhookPayload {
  receiptId: string;
  submittedAt: string;
  submissionType: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  productWebsite: string;
  needHelpWith: string;
  currentQaSetup: string;
  expectedTimeline: string;
  details: string;
  notifyEmail: string;
}

async function dispatchToGoogleWebhook(
  webhookUrl: string,
  webhookSecret: string | undefined,
  payload: ApplicationWebhookPayload
): Promise<void> {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      secret: webhookSecret || "",
      sendConfirmation: true,
    }),
    redirect: "follow",
    signal: AbortSignal.timeout(10000),
  });

  const rawBody = await response.text();
  let parsed: { ok?: boolean; error?: string } | null = null;
  try {
    parsed = JSON.parse(rawBody) as { ok?: boolean; error?: string };
  } catch {
    parsed = null;
  }

  if (!response.ok || !parsed?.ok) {
    const reason = parsed?.error || `HTTP ${response.status}`;
    throw new Error(`Google application webhook failed: ${reason}`);
  }
}

export async function POST(req: Request) {
  try {
    // 1. IP extraction & rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many applications submitted. Please wait a moment before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    // Bot honeypot check: reject silently with 200
    if (typeof body.website_hp === "string" && body.website_hp.trim().length > 0) {
      return NextResponse.json({
        success: true,
        receiptId: "NCL-APP-RECEIVED",
        message: "Application submitted successfully.",
      });
    }

    // 2. Schema Validation
    const validationResult = careerApplicationSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const pathKey = issue.path[0] ? String(issue.path[0]) : "form";
        if (!fieldErrors[pathKey]) {
          fieldErrors[pathKey] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          error: "Please correct the highlighted fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;
    const receiptId = `NCL-APP-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const notifyEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || "hello@nishkamacodelab.com";

    const detailsParts = [
      `Application Type: QA Role Application`,
      `Role: ${validData.role}`,
      `Experience: ${validData.experienceYears}`,
      `Resume / Portfolio URL: ${validData.resumeUrl}`,
      validData.linkedinUrl ? `LinkedIn: ${validData.linkedinUrl}` : null,
      validData.phone ? `Phone: ${validData.phone}` : null,
      validData.noticePeriod ? `Notice Period: ${validData.noticePeriod}` : null,
      validData.coverNote ? `\nCandidate Note:\n${validData.coverNote}` : null,
    ].filter(Boolean);

    const payload: ApplicationWebhookPayload = {
      receiptId,
      submittedAt: new Date().toISOString(),
      submissionType: "job_application",
      firstName: validData.firstName,
      lastName: validData.lastName,
      workEmail: validData.email.toLowerCase(),
      company: validData.currentCompany || "Independent Candidate",
      productWebsite: validData.resumeUrl,
      needHelpWith: `[Career Application] ${validData.role}`,
      currentQaSetup: `Experience: ${validData.experienceYears}${
        validData.phone ? ` • Phone: ${validData.phone}` : ""
      }`,
      expectedTimeline: validData.noticePeriod || "Not specified",
      details: detailsParts.join("\n"),
      notifyEmail,
    };

    // 3. Google Workspace Webhook Delivery
    const webhookUrl = process.env.GOOGLE_CONTACT_WEBHOOK_URL?.trim();
    const webhookSecret = process.env.GOOGLE_CONTACT_WEBHOOK_SECRET?.trim();

    if (webhookUrl) {
      await dispatchToGoogleWebhook(webhookUrl, webhookSecret, payload);
    } else if (process.env.NODE_ENV === "production") {
      console.error("[Career API Error]: GOOGLE_CONTACT_WEBHOOK_URL is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Application submission is being finalized. Please email your resume directly to hello@nishkamacodelab.com.",
        },
        { status: 503 }
      );
    } else {
      console.log(`[Career Application Local Dev Log] Receipt: ${receiptId}`);
      console.log(
        `From: ${payload.firstName} ${payload.lastName} (${payload.workEmail}) for ${validData.role}`
      );
      console.log(`Resume: ${validData.resumeUrl}`);
    }

    return NextResponse.json({
      success: true,
      receiptId,
      message:
        "Your application has been received. Our engineering team reviews all candidate submissions within 2 business days.",
    });
  } catch (error) {
    console.error("[Career API Route Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to process your application at this moment. Please email your resume directly to hello@nishkamacodelab.com.",
      },
      { status: 500 }
    );
  }
}
