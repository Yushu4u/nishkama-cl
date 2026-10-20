import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FeaturedCardsSection } from "@/components/FeaturedCardsSection";

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION (Centrally Justified Authority, Tests Assured-Style) */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="shell text-center">
          {/* Preserved Eyebrow Badge (Centered) */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs shadow-xs mb-8 mx-auto">
            <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" />
            <span className="font-extrabold text-[#0E2539] text-xs tracking-tight">Nishkama CodeLab</span>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F7CEF]">
              Independent Software QA
            </span>
          </div>

          {/* Official Doc Headline (Centrally Justified & Single-Line on Desktop) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.1] max-w-6xl mx-auto">
            Quality Advocates for{" "}
            <span className="text-[#2F7CEF] whitespace-nowrap">Your Product.</span>
          </h1>

          {/* Official Doc Subhead (Centered) */}
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
          </p>

          {/* Action Buttons (Centered, Tests Assured Style) */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <a
              href="#building"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              See what we&apos;re building ↓
            </a>
            <Link
              href="/services"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Our Expertise
            </Link>
            <Link
              href="/contact?need=assessment"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:shadow-lg hover:shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get a QA Assessment
            </Link>
          </div>

          {/* Trust Indicators (Centered Row) */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-500">
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
        </div>
      </section>

      {/* 2. TESTS ASSURED SIGNATURE: 3-CARD SHOWCASE ("See what we're building") */}
      <FeaturedCardsSection />
    </div>
  );
}
