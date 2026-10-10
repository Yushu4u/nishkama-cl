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
    <div className="bg-slate-50 min-h-screen py-16 md:py-24 text-slate-900">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading, Supporting Copy, Trust Notes */}
          <div className="lg:col-span-5">
            <span className="badge-pill">GET IN TOUCH</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Tell us where quality hurts.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              Share a few details about your product, current QA setup, release cycle,
              or the specific quality problem you&apos;re trying to solve. An NCL QA specialist
              will review your submission and follow up directly.
            </p>

            {/* Trust and Response Guarantees */}
            <div className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Rapid Response
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We review all incoming inquiries and respond within 1 business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Strict Confidentiality
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We respect the confidentiality of product and business information shared with us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Direct Email
                  </h2>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs text-indigo-600 font-bold underline underline-offset-4 hover:text-indigo-700"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              Prefer an initial exploratory chat? We can sign a standard mutual NDA prior to code or staging access walkthroughs.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-500">
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
