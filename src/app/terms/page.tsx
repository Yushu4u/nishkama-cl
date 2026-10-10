import React from "react";
import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service (Draft) | Nishkama CodeLab",
  description: "Draft terms of service and engagement principles for Nishkama CodeLab.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 text-slate-900">
      <div className="shell max-w-3xl">
        <span className="badge-pill">LEGAL &amp; TERMS</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Terms of Service (Draft)
        </h1>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Last Updated: October 2026 • Document Status: Draft for Business &amp; Legal Review
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-bold block">Notice to Legal Counsel / Business Owner</span>
            This draft outlines the operational terms and service engagement framework for
            Nishkama CodeLab. Formal legal review and customization is recommended prior to commercial execution.
          </div>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Scope of Services
            </h2>
            <p className="mt-2">
              Nishkama CodeLab provides software quality assurance, product testing, exploratory
              evaluation, and Quality Advocacy consulting services as defined in individual
              Statements of Work (SOWs) and project engagement agreements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
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
            <h2 className="text-lg font-bold text-slate-900">
              3. Client Responsibilities
            </h2>
            <p className="mt-2">
              Clients are responsible for providing appropriate staging environments, test accounts,
              and documentation required to conduct testing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              4. Intellectual Property &amp; Confidentiality
            </h2>
            <p className="mt-2">
              All proprietary systems, source code, and confidential commercial data shared with
              Nishkama CodeLab remain the exclusive property of the client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
