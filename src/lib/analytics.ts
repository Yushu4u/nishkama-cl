/**
 * Nishkama CodeLab Analytics Integration Boundary
 *
 * Provides safe event logging without collecting personal identifiable information (PII).
 * If a valid analytics provider (such as Google Tag Manager, Plausible, PostHog, or custom telemetry)
 * is configured via environment variables, events are forwarded.
 * Otherwise, events are logged cleanly to the console in development or safely no-op in production.
 */

export type AnalyticsEvent =
  | { name: "cta_click"; properties: { label: string; location: string; destination: string } }
  | { name: "nav_click"; properties: { label: string; href: string } }
  | { name: "pillar_click"; properties: { pillarId: string; pillarName: string } }
  | { name: "service_card_click"; properties: { serviceId: string; serviceTitle: string } }
  | { name: "contact_form_attempt"; properties: { selectedNeed?: string } }
  | { name: "contact_form_validation_failed"; properties: { errorCount: number; fields: string[] } }
  | { name: "contact_form_success"; properties: { responseTimeMs: number; selectedNeed: string } }
  | { name: "contact_form_error"; properties: { statusCode: number; errorMessage: string } };

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (eventName: string, options?: { props: Record<string, unknown> }) => void;
  }
}

export function trackEvent(event: AnalyticsEvent): void {
  try {
    if (typeof window === "undefined") return;

    // Respect user privacy: Do NOT send PII (names, emails, company names, message text)
    const sanitizedProps = {
      ...("properties" in event ? event.properties : {}),
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
    };

    // Integration Boundary 1: Google Tag Manager / GA4 dataLayer
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: event.name,
        ...sanitizedProps,
      });
    }

    // Integration Boundary 2: Plausible Analytics
    if (typeof window.plausible === "function") {
      window.plausible(event.name, { props: sanitizedProps });
    }

    // Development diagnostic log
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event: ${event.name}]`, sanitizedProps);
    }
  } catch (err) {
    // Analytics failures must NEVER break navigation or user interaction
    console.warn("[Analytics Warning] Failed to dispatch event:", err);
  }
}
