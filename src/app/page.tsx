import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Layers,
  Code2,
  Glasses,
  Shield,
  Sparkles,
} from "lucide-react";
import { QuickEstimateCard } from "@/components/QuickEstimateCard";
import { QaRealityComparison } from "@/components/QaRealityComparison";
import { PillarSection } from "@/components/PillarSection";

const platforms = [
  {
    num: "01",
    name: "Web Applications",
    desc: "Next.js, React, PWAs, high-concurrency client portals",
    icon: Globe,
  },
  {
    num: "02",
    name: "Mobile iOS & Android",
    desc: "Native Swift/Kotlin, Flutter, React Native on real devices",
    icon: Smartphone,
  },
  {
    num: "03",
    name: "SaaS Platforms",
    desc: "Multi-tenant RBAC, billing lifecycles, seat licensing",
    icon: Layers,
  },
  {
    num: "04",
    name: "APIs & Integrations",
    desc: "REST, GraphQL, async webhooks, payment gateways",
    icon: Code2,
  },
  {
    num: "05",
    name: "Spatial & XR Apps",
    desc: "VisionOS, Meta Quest, WebXR spatial gesture interactions",
    icon: Glasses,
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION (Centrally Justified Authority, Tests Assured-Style) */}
      <section className="relative border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28">
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

          {/* Official Doc Headline (Centrally Justified & Commanding) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.06] max-w-4xl mx-auto">
            Quality Advocates for{" "}
            <span className="text-[#2F7CEF]">Your Product.</span>
          </h1>

          {/* Official Doc Subhead (Centered) */}
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
          </p>

          {/* Action Buttons (Centered) */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              href="/contact?need=assessment"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:shadow-lg hover:shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get a QA Assessment
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Explore Our Services
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

      {/* 2. THE PROBLEM: HAPPY PATH VS. NCL REALITY ARTIFACT */}
      <QaRealityComparison />

      {/* 3. CORE ARCHITECTURE: THE 3 CONNECTED PILLARS (P0 Founder Directive) */}
      <PillarSection />

      {/* 4. COVERAGE SPECTRUM (5 CATEGORIES IN COLUMN) + QA ASSESSMENT INTAKE (RIGHT) */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Eyebrow, Title, Description & 5 Categories Stacked Vertically */}
            <div className="lg:col-span-6 flex flex-col justify-start text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
                COVERAGE SPECTRUM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539] leading-tight">
                Across Modern Digital Platforms
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                From high-scale SaaS architectures to native mobile touchpoints and emerging spatial interfaces, we systematically validate your product across its target user ecosystem.
              </p>

              {/* 5 Categories in a Left-Justified Column */}
              <div className="space-y-3">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.name}
                      className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-[#2F7CEF]/50 hover:shadow-xs transition-all text-left"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2F7CEF] border border-blue-100/80 group-hover:bg-[#2F7CEF] group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#0E2539] truncate">{p.name}</h4>
                          <p className="text-xs text-slate-500 truncate">{p.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400 pl-3 shrink-0">
                        {p.num}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors"
                >
                  <span>Explore All 8 Testing Disciplines</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-slate-400">Zero Happy-Path Bias</span>
              </div>
            </div>

            {/* Right Column: QA Assessment Intake Form */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <QuickEstimateCard />
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK & ENGAGEMENT QUICK STRIP */}
      <section className="py-14 border-b border-slate-200/80 bg-slate-50/60">
        <div className="shell flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
              FLEXIBLE ENGAGEMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E2539]">
              Simple 6-Stage Process. Clear Evidence.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              From focused pre-launch audits to continuous embedded sprint QA, we adapt to your release cadence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/how-we-work"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-xs"
            >
              Our 6-Stage Process →
            </Link>
            <Link
              href="/contact?need=assessment"
              className="rounded-xl bg-[#2F7CEF] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1E66D8] transition-all shadow-xs"
            >
              Book an Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CLEAN CTA (Tests Assured-style punchy closing) */}
      <section className="py-16 md:py-20 bg-[#0E2539] text-white relative overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#2F7CEF]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="shell text-center max-w-2xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s find what your product is missing.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Tell us about your product, release cycle, or upcoming sprint timeline. We onboard under full NDA in as little as 24–48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact?need=assessment"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get a QA Assessment
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3 text-sm font-bold text-slate-200 hover:border-slate-500 transition-all shadow-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
