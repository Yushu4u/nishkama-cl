import React from "react";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Notice (Draft)",
  description: "Draft privacy notice and data processing statement for Nishkama CodeLab.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="shell max-w-3xl">
        <p className="eyebrow">Legal &amp; Transparency</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#282531]">
          Privacy Policy (Draft Notice)
        </h1>
        <p className="mt-2 text-xs text-[#706B78]">
          Last Updated: October 2026 • Document Status: Draft for Business &amp; Legal Review
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-semibold block">Notice to Legal Counsel / Business Owner</span>
            This page represents a transparent draft disclosure reflecting current technical
            data handling practices. It must be formally reviewed and approved by legal counsel
            before final production certification.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#706B78] border-t border-[#E8E4DC] pt-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you submit an inquiry through our contact form, we collect the details you
              expressly provide: your first and last name, work email address, company name,
              product website URL, current QA context, and message details.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              2. How We Use Submitted Information
            </h2>
            <p className="mt-2">
              We use this information exclusively to communicate with you regarding your QA
              inquiry, assess project fit, schedule discovery consultations, and execute agreed
              services. We do not sell, rent, or trade your contact information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              3. Client Product Data &amp; Confidentiality
            </h2>
            <p className="mt-2">
              All client testing artifacts, test environments, API credentials, and bug reports
              shared with Nishkama CodeLab during engagements are treated as strictly confidential.
              We execute mutual non-disclosure agreements (NDAs) upon request before reviewing proprietary code.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              4. Analytics &amp; Cookies
            </h2>
            <p className="mt-2">
              Our website uses privacy-respecting, anonymized telemetry strictly to measure site
              performance and aggregate CTA conversion rates. We do not track personal identifying
              information (PII) across third-party websites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              5. Contacting Us
            </h2>
            <p className="mt-2">
              For any privacy questions or requests to delete submitted contact information,
              please reach out directly to{" "}
              <a href="mailto:hello@nishkamacodelab.com" className="font-semibold text-[#282531] underline">
                hello@nishkamacodelab.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
