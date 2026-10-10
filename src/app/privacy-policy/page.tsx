import React from "react";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Notice (Draft) | Nishkama CodeLab",
  description: "Draft privacy notice and data processing statement for Nishkama CodeLab.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 text-slate-900">
      <div className="shell max-w-3xl">
        <span className="badge-pill">LEGAL &amp; TRANSPARENCY</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Privacy Policy (Draft Notice)
        </h1>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Last Updated: October 2026 • Document Status: Draft for Business &amp; Legal Review
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-bold block">Notice to Legal Counsel / Business Owner</span>
            This page represents a transparent draft disclosure reflecting current technical
            data handling practices. It must be formally reviewed and approved by legal counsel
            before final production certification.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              When you submit an inquiry through our contact form, we collect the details you
              expressly provide: your first and last name, work email address, company name,
              product website URL, current QA context, and message details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              2. How We Use Submitted Information
            </h2>
            <p className="mt-2">
              We use this information exclusively to communicate with you regarding your QA
              inquiry, assess project fit, schedule discovery consultations, and execute agreed
              services. We do not sell, rent, or trade your contact information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              3. Client Product Data &amp; Confidentiality
            </h2>
            <p className="mt-2">
              All client testing artifacts, test environments, API credentials, and bug reports
              are treated as strictly confidential client intellectual property. Standard mutual
              NDAs are executed prior to deep repository or staging environment access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              4. Cookies &amp; Tracking
            </h2>
            <p className="mt-2">
              This website uses minimal essential telemetry to assess page load performance
              and understand user interest across service disciplines. We do not engage in
              cross-site tracking or advertising profiling.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              5. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions about this privacy statement or our data handling
              practices, please contact us at{" "}
              <a href="mailto:privacy@nishkama.tech" className="text-indigo-600 font-bold underline">
                privacy@nishkama.tech
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
