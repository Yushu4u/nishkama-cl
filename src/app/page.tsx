import React from "react";
import Link from "next/link";
import { FeaturedCardsSection } from "@/components/FeaturedCardsSection";

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
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs shadow-xs mb-4 sm:mb-5 mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#2F7CEF] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2F7CEF]">
              Independent Software QA
            </span>
          </div>

          {/* Headline (Crisp, High-Impact Typography) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.35rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.08] max-w-5xl mx-auto">
            Quality Advocates for{" "}
            <span className="text-[#2F7CEF] whitespace-nowrap">Your Product.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-normal">
            We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
          </p>

          {/* Centered Primary Action Button */}
          <div className="mt-7 sm:mt-8 flex justify-center items-center">
            <Link
              href="/services"
              className="rounded-2xl bg-[#2F7CEF] px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white shadow-md shadow-[#2F7CEF]/25 hover:bg-[#1E66D8] hover:shadow-lg hover:shadow-[#2F7CEF]/35 transition-all hover:-translate-y-0.5 active:scale-98"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Validated Environments Strip */}
          <div className="mt-10 sm:mt-12 pt-7 sm:pt-8 border-t border-slate-100 max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] font-medium text-slate-500">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Validated across:
            </span>
            <span className="text-slate-800 font-bold">Web &amp; SaaS</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-800 font-bold">iOS &amp; Android</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-800 font-bold">Spatial &amp; XR</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-800 font-bold">REST &amp; GraphQL APIs</span>
          </div>
        </div>
      </section>

      {/* 2. CORE QA ARCHITECTURE: 3-CARD SHOWCASE */}
      <FeaturedCardsSection />

      {/* 3. CALLOUT BANNER (Pre-Footer Consultation) */}
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
