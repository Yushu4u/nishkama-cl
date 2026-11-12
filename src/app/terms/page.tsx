import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and client engagement principles for Nishkama CodeLab.",
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 text-slate-900">
      <div className="shell max-w-3xl">
        <span className="badge-pill">LEGAL &amp; TERMS</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Effective Date: November 2026 • Last Updated: November 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Acceptance &amp; Scope of Services
            </h2>
            <p className="mt-2">
              By accessing <code>www.nishkamacodelab.com</code>, you agree to these Terms of
              Service with <strong className="text-slate-800">{siteConfig.name}</strong> (operating
              from India). {siteConfig.name} provides independent software quality assurance,
              product testing, exploratory evaluation, and Quality Advocacy consulting services.
              Commercial engagements, deliverables, timelines, and pricing are governed by
              individually executed Statements of Work (SOWs) or Master Services Agreements (MSAs),
              which prevail over these website terms in the event of any conflict.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              2. Nature of QA &amp; Testing Findings
            </h2>
            <p className="mt-2">
              Our testing findings, defect logs, and quality audit summaries reflect empirical
              observations made within agreed scope, test builds, environments, and device
              configurations at the time of testing. While we apply disciplined and adversarial QA
              practices, software evolves continuously and no testing methodology can guarantee the
              complete absence of unforeseen defects in untested environments or future releases.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              3. Client Responsibilities
            </h2>
            <p className="mt-2">
              Clients are responsible for providing authorized access to staging environments, test
              accounts, relevant documentation, and builds required to perform agreed QA work safely
              and lawfully.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              4. Intellectual Property, Confidentiality &amp; Website Use
            </h2>
            <p className="mt-2">
              All proprietary client source code, applications, test data, and confidential
              commercial materials shared with {siteConfig.name} remain the exclusive property of
              the client. Conversely, all text, graphics, brand marks, and materials published on
              this website are the property of {siteConfig.name} and may not be scraped, copied, or
              republished commercially without prior written permission. All third-party product
              names and trademarks referenced on this site belong to their respective owners.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              5. Disclaimer &amp; Limitation of Liability
            </h2>
            <p className="mt-2">
              General information on this website is provided on an &ldquo;as is&rdquo; basis for
              informational purposes without implied warranties of any kind. To the fullest extent
              permitted by applicable law, {siteConfig.name} shall not be liable for any indirect,
              incidental, or consequential damages arising from general website browsing; liability
              for paid client engagements is governed exclusively by the applicable signed SOW or
              MSA.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              6. Governing Law
            </h2>
            <p className="mt-2">
              These Terms of Service are governed by and construed in accordance with the laws of
              India, without regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              7. Contact
            </h2>
            <p className="mt-2">
              For questions regarding these Terms of Service or client engagements, please contact{" "}
              {siteConfig.name} at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2F7CEF] font-bold underline hover:text-[#1E66D8]"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
