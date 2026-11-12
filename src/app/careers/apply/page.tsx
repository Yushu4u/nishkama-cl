import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <section className="border-b border-slate-200/80 bg-white py-5">
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
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              JOIN OUR ENGINEERING TEAM
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.12]">
              Submit Your QA Application
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Fill in your details below and our engineering team will review your profile.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Suspense
              fallback={
                <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-400">
                  Loading application form...
                </div>
              }
            >
              <ApplicationFormWrapper searchParams={props.searchParams} />
            </Suspense>

            <div className="mt-8 text-center text-xs text-slate-500">
              Prefer direct email? You can also send your resume to{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=Job%20Application%20-%20Nishkama%20CodeLab`}
                className="text-[#2F7CEF] font-semibold underline underline-offset-2 hover:text-[#1E66D8]"
              >
                {siteConfig.email}
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
