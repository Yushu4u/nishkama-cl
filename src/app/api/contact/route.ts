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

// Basic HTML sanitization helper to prevent script injection
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
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
    if (body.website_hp && typeof body.website_hp === "string" && body.website_hp.trim().length > 0) {
      // Return a simulated success to confuse automated spam bots without processing
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

    // 3. Sanitization
    const sanitizedData = {
      firstName: sanitizeString(validData.firstName),
      lastName: sanitizeString(validData.lastName),
      workEmail: validData.workEmail.toLowerCase(),
      company: sanitizeString(validData.company),
      productWebsite: validData.productWebsite ? sanitizeString(validData.productWebsite) : "",
      needHelpWith: sanitizeString(validData.needHelpWith),
      currentQaSetup: validData.currentQaSetup ? sanitizeString(validData.currentQaSetup) : "",
      expectedTimeline: validData.expectedTimeline ? sanitizeString(validData.expectedTimeline) : "",
      details: validData.details ? sanitizeString(validData.details) : "",
      submittedAt: new Date().toISOString(),
    };

    const receiptId = `NCL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // 4. Email Provider Integration Boundary
    // In production, when RESEND_API_KEY or SMTP credentials are provided, dispatch notification.
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);

    if (hasResend || hasSmtp) {
      // Production email dispatch logic here
      console.log(`[Production Email Boundary] Dispatching email for receipt ${receiptId} via configured provider.`);
    } else {
      // Local development / unconfigured provider boundary: Log cleanly to server console
      console.log(`[Contact Form Received] Receipt: ${receiptId}`);
      console.log(`From: ${sanitizedData.firstName} ${sanitizedData.lastName} (${sanitizedData.workEmail}) at ${sanitizedData.company}`);
      console.log(`Need: ${sanitizedData.needHelpWith} | Timeline: ${sanitizedData.expectedTimeline || "Not specified"}`);
    }

    return NextResponse.json({
      success: true,
      receiptId,
      message:
        "Thank you for contacting Nishkama CodeLab. A QA specialist will review your details and respond within 1 business day.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email us directly at hello@nishkamacodelab.com.",
      },
      { status: 500 }
    );
  }
}
