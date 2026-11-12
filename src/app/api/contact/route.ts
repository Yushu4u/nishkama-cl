import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

// Simple in-memory rate limiter per IP (prevents abusive rapid burst submissions)
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

interface ContactWebhookPayload {
  receiptId: string;
  submittedAt: string;
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
  payload: ContactWebhookPayload
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
    throw new Error(`Google contact webhook failed: ${reason}`);
  }
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a minute and try again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 1. Spam Honeypot Check: If the invisible field contains any characters, it is a bot
    if (
      "website_hp" in body &&
      typeof body.website_hp === "string" &&
      body.website_hp.trim().length > 0
    ) {
      return NextResponse.json({
        success: true,
        receiptId: `NCL-SPAM-${Date.now().toString(36).toUpperCase()}`,
        message: "Your message has been received.",
      });
    }

    // 2. Schema Validation
    const validationResult = contactFormSchema.safeParse(body);

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
    const receiptId = `NCL-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const notifyEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || "hello@nishkamacodelab.com";

    const payload: ContactWebhookPayload = {
      receiptId,
      submittedAt: new Date().toISOString(),
      firstName: validData.firstName,
      lastName: validData.lastName,
      workEmail: validData.workEmail.toLowerCase(),
      company: validData.company,
      productWebsite: validData.productWebsite || "",
      needHelpWith: validData.needHelpWith,
      currentQaSetup: validData.currentQaSetup || "",
      expectedTimeline: validData.expectedTimeline || "",
      details: validData.details || "",
      notifyEmail,
    };

    // 3. Google Workspace Webhook Delivery (Sheet Log + Notification Email + Auto-Confirmation)
    const webhookUrl = process.env.GOOGLE_CONTACT_WEBHOOK_URL?.trim();
    const webhookSecret = process.env.GOOGLE_CONTACT_WEBHOOK_SECRET?.trim();

    if (webhookUrl) {
      await dispatchToGoogleWebhook(webhookUrl, webhookSecret, payload);
    } else if (process.env.NODE_ENV === "production") {
      console.error("[Contact API Error]: GOOGLE_CONTACT_WEBHOOK_URL is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Contact form delivery is being finalized. Please email us directly at hello@nishkamacodelab.com.",
        },
        { status: 503 }
      );
    } else {
      console.log(`[Contact Form Local Dev Log] Receipt: ${receiptId}`);
      console.log(
        `From: ${payload.firstName} ${payload.lastName} (${payload.workEmail}) at ${payload.company}`
      );
      console.log(
        `Need: ${payload.needHelpWith} | Timeline: ${payload.expectedTimeline || "Not specified"}`
      );
    }

    return NextResponse.json({
      success: true,
      receiptId,
      message:
        "Thank you for contacting Nishkama CodeLab. A confirmation email has been sent to your inbox, and a QA specialist will respond within 1 business day.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your inquiry right now. Please try again or email us directly at hello@nishkamacodelab.com.",
      },
      { status: 500 }
    );
  }
}
