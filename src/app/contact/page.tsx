import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, ShieldCheck, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Nishkama CodeLab — Start a QA Conversation",
  description:
    "Tell us where quality hurts. Request a QA assessment, discuss ongoing testing support, or consult with an independent QA expert at Nishkama CodeLab.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 md:py-24">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading, Supporting Copy, Trust Notes */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Get in Touch</p>
            <h1 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-[3.75rem] text-[#282531]">
              Tell us where quality hurts.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#706B78] sm:text-lg">
              Share a few details about your product, current QA setup, release cycle,
              or the specific quality problem you&apos;re trying to solve. An NCL QA specialist
              will review your submission and follow up directly.
            </p>

            {/* Trust and Response Guarantees */}
            <div className="mt-10 space-y-5 rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC] shrink-0 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#282531]">
                    Rapid Response
                  </h2>
                  <p className="text-xs text-[#706B78] mt-0.5">
                    We review all incoming inquiries and respond within 1 business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC] shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#282531]">
                    Strict Confidentiality
                  </h2>
                  <p className="text-xs text-[#706B78] mt-0.5">
                    We respect the confidentiality of product and business information shared with us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC] shrink-0 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#282531]">
                    Direct Email
                  </h2>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs text-[#282531] font-semibold underline underline-offset-4 hover:text-[#706B78]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-[#706B78]">
              Prefer an initial exploratory chat? We can sign a standard mutual NDA prior to code or staging access walkthroughs.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-12 text-center text-sm text-[#706B78]">
                  Loading form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
