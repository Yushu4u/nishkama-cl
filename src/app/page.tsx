import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FeaturedCardsSection } from "@/components/FeaturedCardsSection";
import { HowWeWorkPipeline } from "@/components/HowWeWorkPipeline";

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="shell text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs shadow-xs mb-5 mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F7CEF]">
              Independent Software QA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.1] max-w-6xl mx-auto">
            Quality Advocates for{" "}
            <span className="text-[#2F7CEF] whitespace-nowrap">Your Product.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
          </p>

          {/* Clean 2-Action Hierarchy */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              href="/services"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg hover:shadow-[#2F7CEF]/30 transition-all hover:-translate-y-0.5"
            >
              Explore QA Services
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
              <span>Independent QA Perspective</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
              <span>Real-World User Journeys</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
              <span>Zero Happy-Path Bias</span>
            </div>
          </div>

          {/* Validated Environments Strip */}
          <div className="mt-9 pt-7 border-t border-slate-100 max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Validated across:</span>
            <span className="text-slate-700 font-semibold">Web &amp; SaaS</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">iOS &amp; Android</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">Spatial &amp; XR</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold">REST &amp; GraphQL APIs</span>
          </div>
        </div>
      </section>

      {/* 2. CORE QA ARCHITECTURE: 3-CARD SHOWCASE */}
      <FeaturedCardsSection />

      {/* 3. HOW WE WORK: 6-STAGE CADENCE */}
      <HowWeWorkPipeline />

      {/* 4. CALLOUT BANNER (Pre-Footer Consultation) */}
      <section className="bg-[#0E2539] text-white py-14 sm:py-16 border-t border-[#2F7CEF]/20">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            PARTNER WITH QUALITY ADVOCATES
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build release confidence before your next deployment.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a confidential consultation with our QA team. We&apos;ll discuss your product architecture, risk zones, and devise an independent test strategy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              href="/contact"
              className="rounded-xl bg-[#2F7CEF] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg hover:shadow-[#2F7CEF]/30 transition-all hover:-translate-y-0.5"
            >
              Start a QA Conversation
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-6 py-3.5 text-sm font-bold text-slate-200 hover:border-slate-500 hover:text-white transition-all shadow-sm"
            >
              Explore All 9 Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
