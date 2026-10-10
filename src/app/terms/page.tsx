import React from "react";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service (Draft)",
  description: "Draft terms of service and engagement principles for Nishkama CodeLab.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="shell max-w-3xl">
        <p className="eyebrow">Legal &amp; Terms</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#282531]">
          Terms of Service (Draft)
        </h1>
        <p className="mt-2 text-xs text-[#706B78]">
          Last Updated: October 2026 • Document Status: Draft for Business &amp; Legal Review
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-semibold block">Notice to Legal Counsel / Business Owner</span>
            This draft outlines the operational terms and service engagement framework for
            Nishkama CodeLab. Formal legal review and customization is recommended prior to commercial execution.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#706B78] border-t border-[#E8E4DC] pt-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              1. Scope of Services
            </h2>
            <p className="mt-2">
              Nishkama CodeLab provides software quality assurance, product testing, exploratory
              evaluation, and Quality Advocacy consulting services as defined in individual
              Statements of Work (SOWs) and project engagement agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              2. Nature of QA &amp; Testing Findings
            </h2>
            <p className="mt-2">
              Our testing findings, defect logs, and audit summaries reflect empirical observations
              made within specified testing environments and hardware configurations. While we strive
              for comprehensive defect discovery, no QA methodology can guarantee the total absence
              of unforeseen anomalies or future bugs under unobserved configurations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              3. Client Responsibilities
            </h2>
            <p className="mt-2">
              Clients are responsible for providing appropriate staging environments, test accounts,
              and specification context needed for thorough testing execution.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-[#282531]">
              4. Confidentiality &amp; Intellectual Property
            </h2>
            <p className="mt-2">
              Client source code, proprietary algorithms, and internal data remain the sole property
              of the client. Deliverables created specifically for a client become client property
              upon settlement of applicable project invoices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
