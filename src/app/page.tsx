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
  { name: "Web Applications", desc: "Next.js, React, PWAs", icon: Globe },
  { name: "Mobile iOS & Android", desc: "Native, Flutter, React Native", icon: Smartphone },
  { name: "SaaS Platforms", desc: "RBAC, multi-tenant, billing", icon: Layers },
  { name: "APIs & Integrations", desc: "REST, GraphQL, Webhooks", icon: Code2 },
  { name: "Spatial & XR Apps", desc: "VisionOS, Meta Quest, WebXR", icon: Glasses },
];

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION (Concise, Authoritative) */}
      <section className="relative border-b border-slate-200/80 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Positioning */}
            <div className="lg:col-span-7 max-w-2xl">
              {/* Preserved Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs shadow-xs mb-6">
                <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" />
                <span className="font-extrabold text-[#0E2539] text-xs tracking-tight">Nishkama CodeLab</span>
                <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F7CEF]">
                  Independent Software QA
                </span>
              </div>

              {/* Official Doc Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.08]">
                Quality Advocates for{" "}
                <span className="text-[#2F7CEF]">Your Product.</span>
              </h1>

              {/* Official Doc Subhead */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?need=assessment"
                  className="rounded-xl bg-[#2F7CEF] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:shadow-lg hover:shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Get a QA Assessment
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
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

            {/* Right Column: Rapid QA Assessment Intake Card */}
            <div className="lg:col-span-5 w-full">
              <QuickEstimateCard />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM: HAPPY PATH VS. NCL REALITY ARTIFACT */}
      <QaRealityComparison />

      {/* 3. CORE ARCHITECTURE: THE 3 CONNECTED PILLARS (P0 Founder Directive) */}
      <PillarSection />

      {/* 4. WHAT WE TEST: COMPACT 1-ROW PLATFORM STRIP */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
                COVERAGE SPECTRUM
              </span>
              <h3 className="text-2xl font-extrabold text-[#0E2539]">
                Across Modern Digital Platforms
              </h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors"
            >
              <span>Explore All 8 Testing Disciplines</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4 transition-all hover:bg-white hover:border-[#BFDBFE] hover:shadow-xs"
                >
                  <Icon className="h-5 w-5 text-[#2F7CEF] mb-2.5" />
                  <h4 className="text-xs font-bold text-[#0E2539]">{p.name}</h4>
                  <p className="mt-1 text-[11px] text-slate-500 truncate">{p.desc}</p>
                </div>
              );
            })}
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
