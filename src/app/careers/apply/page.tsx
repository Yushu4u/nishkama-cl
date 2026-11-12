import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Mail } from "lucide-react";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Apply Now — Careers | Nishkama CodeLab",
  description:
    "Apply for open QA roles at Nishkama CodeLab. Submit your profile, resume, and experience to join our team of Quality Advocates.",
};

interface ApplyPageProps {
  searchParams: Promise<{ role?: string }>;
}

async function ApplicationFormWrapper({ searchParams }: ApplyPageProps) {
  const resolvedParams = await searchParams;
  return <CareerApplicationForm initialRole={resolvedParams.role} />;
}

export default async function ApplyPage(props: ApplyPageProps) {
  return (
    <div className="bg-[#FAFBFD] text-[#0E2539] min-h-screen">
      {/* Top Banner / Back Link */}
      <section className="border-b border-slate-200/80 bg-white py-6">
        <div className="shell flex items-center justify-between">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#2F7CEF] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Open Roles</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting Applications</span>
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="shell">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              JOIN OUR ENGINEERING TEAM
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.12]">
              Submit Your QA Application
            </h1>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We look for engineers who care about real-world user friction, explore beyond the happy path, and communicate bug evidence with technical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 cols: Application Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-400">
                    Loading application form...
                  </div>
                }
              >
                <ApplicationFormWrapper searchParams={props.searchParams} />
              </Suspense>
            </div>

            {/* Right 5 cols: Context & Process Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Our Hiring Process */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] mb-4">
                  <Sparkles className="h-4 w-4" />
                  <span>Transparent Hiring Process</span>
                </div>
                <h2 className="text-lg font-bold text-[#0E2539] tracking-tight mb-4">
                  What to expect after you apply
                </h2>

                <ol className="space-y-4 text-xs text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2F7CEF] font-mono font-bold text-[11px] border border-blue-200">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Profile &amp; Background Review
                      </strong>
                      <span className="leading-relaxed">
                        Within 2 business days, an engineering lead reviews your testing experience and problem-solving background.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2F7CEF] font-mono font-bold text-[11px] border border-blue-200">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Hands-On Exploratory Exercise (45 mins)
                      </strong>
                      <span className="leading-relaxed">
                        A focused session exploring a staging application. No theoretical trivia—just real bug hunting and log capture.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2F7CEF] font-mono font-bold text-[11px] border border-blue-200">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-semibold">
                        Technical Deep-Dive &amp; Offer
                      </strong>
                      <span className="leading-relaxed">
                        A conversation on test architecture, defect triage communication, compensation, and team culture.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Card 2: What We Value */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0E2539] mb-4">
                  <ShieldCheck className="h-4 w-4 text-[#2F7CEF]" />
                  <span>The Quality Advocate Mindset</span>
                </div>
                <h2 className="text-lg font-bold text-[#0E2539] tracking-tight mb-3">
                  What we look for in our team
                </h2>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                    <span>Evidence-first bug reports with deterministic repro steps, network logs, and device details.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                    <span>Genuine empathy for how real end users encounter friction and silent edge failures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                    <span>Reliable automation architecture that prevents test flakiness and speeds up release cycles.</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Direct Email Fallback */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-[#0E2539]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0E2539]">Prefer Direct Email?</p>
                    <p className="text-[11px] text-slate-500">Send your resume and notes to our inbox.</p>
                  </div>
                </div>
                <a
                  href={`mailto:${siteConfig.email}?subject=Job%20Application%20-%20Nishkama%20CodeLab`}
                  className="shrink-0 text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] underline underline-offset-4"
                >
                  Email Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
