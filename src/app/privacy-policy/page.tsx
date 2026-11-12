import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and data handling practices for Nishkama CodeLab.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 py-16 md:py-24 text-slate-900">
      <div className="shell max-w-3xl">
        <span className="badge-pill">LEGAL &amp; TRANSPARENCY</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-slate-500 font-medium">
          Effective Date: November 2026 • Last Updated: November 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600 border-t border-slate-200 pt-8">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Who We Are
            </h2>
            <p className="mt-2">
              This website (<code>www.nishkamacodelab.com</code>) is operated by{" "}
              <strong className="text-slate-800">{siteConfig.name}</strong>, operating from India.
              We provide independent software quality assurance, product testing, and Quality
              Advocacy services. If you have any privacy questions, you can reach us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2F7CEF] font-bold underline hover:text-[#1E66D8]"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p className="mt-2">
              When you submit an inquiry through our contact form, we collect the information you
              voluntarily provide: your first and last name, work email address, company name,
              optional product or website URL, selected QA service need, optional current QA setup
              notes, expected timeline, and any additional message details.
            </p>
            <p className="mt-2">
              To protect our inquiry endpoint against automated spam and abuse, our server also
              processes the requesting IP address transiently in memory for rate-limiting purposes
              without writing IP logs to a marketing database.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              3. How We Use Submitted Information
            </h2>
            <p className="mt-2">
              We use the information you submit solely to review and respond to your inquiry,
              evaluate project fit, schedule discovery conversations, deliver agreed QA services,
              and safeguard website availability. We do not sell, rent, or trade your contact
              details to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              4. Client Product Data &amp; Confidentiality
            </h2>
            <p className="mt-2">
              All client testing artifacts, test environments, staging credentials, and defect
              reports shared during engagements are treated as confidential client property. Mutual
              non-disclosure agreements (NDAs) are executed prior to repository, build, or staging
              environment access.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              5. Cookies, Telemetry &amp; Service Infrastructure
            </h2>
            <p className="mt-2">
              We do not use cross-site advertising trackers or behavioral profiling cookies. Any
              client-side UI interaction events are structured to exclude personally identifiable
              information (such as names, email addresses, or message text). Standard web hosting,
              TLS delivery, and operational request handling are provided via Vercel, and email
              correspondence is handled via Google Workspace.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              6. Data Retention &amp; Your Rights
            </h2>
            <p className="mt-2">
              We retain contact inquiries only for as long as reasonably necessary to respond to
              your request, manage ongoing or prospective engagements, or meet applicable legal
              obligations (and up to 24 months for inactive inquiries unless earlier deletion is
              requested). You may request access to, correction of, or deletion of your submitted
              contact information at any time by emailing{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2F7CEF] font-bold underline hover:text-[#1E66D8]"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              7. Policy Updates &amp; Contact
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy as our services or infrastructure evolve. Changes
              take effect when posted on this page with an updated revision date. Questions or
              requests may be sent to{" "}
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
