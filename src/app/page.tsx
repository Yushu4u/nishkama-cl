import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Glasses,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Monitor,
  Smartphone,
  Eye,
  Activity,
  Sparkles,
  Lock,
  Layers,
  Flame,
  CheckSquare,
} from "lucide-react";
import { QuickEstimateCard } from "@/components/QuickEstimateCard";

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Subtle modern ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. ASYMMETRIC DUAL HERO */}
      <section className="relative border-b border-slate-200/80 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Authoritative Messaging */}
            <div className="lg:col-span-7 max-w-2xl">
              {/* Distinct Eyebrow Badge with Brand & Tagline Hierarchy */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs shadow-xs mb-6">
                <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" />
                <span className="font-extrabold text-[#0E2539] text-xs tracking-tight">Nishkama CodeLab</span>
                <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2F7CEF]">
                  Independent Software QA
                </span>
              </div>

              {/* Bold, Distinctive Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.08]">
                Precision Software QA for{" "}
                <span className="text-[#2F7CEF]">Spatial XR</span> &amp; Modern Platforms.
              </h1>

              {/* Sub-headline */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                From immersive 3D spatial applications on VisionOS and Meta Quest to high-scale web and mobile ecosystems, Nishkama CodeLab provides unbiased, manual and automated software testing. We uncover what automated tests miss before your users ever see it.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?need=assessment"
                  className="rounded-xl bg-[#2F7CEF] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:shadow-lg hover:shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Test Your App
                </Link>
                <Link
                  href="/services/xr-testing"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
                >
                  Explore XR Software QA
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
                  <span>100% Software-Focused QA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
                  <span>VisionOS, Meta Quest &amp; WebXR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2F7CEF]" />
                  <span>Zero Happy-Path Bias</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick 24-Hr Estimate Card (High Conversion) */}
            <div className="lg:col-span-5 w-full">
              <QuickEstimateCard />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE OFFERINGS: THE ORIGINAL BENTO LAB GRID */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
                OUR CORE DOMAINS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
                Two Specialized Core Domains. One Rigorous Standard.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Whether you are pioneering spatial computing applications or scaling multi-tenant web platforms, our dedicated QA engineers bring deep domain expertise.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors shrink-0"
            >
              <span>View All 9 QA Disciplines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Card 1: Spatial Computing & XR Lab (Heroic 7-Column Tile) */}
            <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-[#0B1E30] via-[#0E2539] to-[#081524] p-7 sm:p-9 text-white border border-slate-800 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    1ST • SPATIAL &amp; XR SOFTWARE
                  </span>
                  <Glasses className="h-6 w-6 text-[#60A5FA]" />
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Immersive Spatial Computing &amp; XR Software QA
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Spatial software introduces complex edge cases standard web QA cannot diagnose—gesture occlusion, UI drift, frame drops causing nausea, and spatial audio misalignment. We provide specialized manual exploratory testing and custom automation across VisionOS, Meta Quest, WebXR, and 3D engines.
                </p>

                {/* Key Capabilities Pills */}
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10 font-medium">
                    VisionOS &amp; Quest Apps
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10 font-medium">
                    Unity &amp; Unreal Automation
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10 font-medium">
                    6DoF Gesture Debounce
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10 font-medium">
                    WebXR &amp; 3D Portals
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Manual &amp; automated spatial test suites
                </span>
                <Link
                  href="/services/xr-testing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] hover:text-white transition-colors"
                >
                  <span>Explore XR Capabilities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 2: Full-Stack Web & Mobile QA (5-Column Tile) */}
            <div className="md:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                    2ND • WEB &amp; MOBILE SOFTWARE QA
                  </span>
                  <Monitor className="h-6 w-6 text-[#2F7CEF]" />
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-[#0E2539]">
                  Web, Mobile &amp; API Software Testing
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep functional verification, multi-device cross-browser matrices, and critical regression safety nets. We protect transactional checkouts, multi-tenant permissions, and complex API flows before every deployment.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium">
                    React &amp; Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium">
                    iOS &amp; Android Apps
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium">
                    API &amp; Webhook Flows
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium">
                    Regression Gates
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  8 Specialized Disciplines
                </span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors"
                >
                  <span>Browse Catalog</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 3: Quality Advocacy (Full-Width 12-Column Banner) */}
            <div className="md:col-span-12 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 border border-blue-200/80 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F7CEF]">
                    THE NISHKAMA PRINCIPLE
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-medium">
                    Ego-Free Independent Quality Ownership
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E2539]">
                  Why Independent QA Catches What Internal Teams Miss
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When software creators evaluate their own features, cognitive confirmation bias is natural. <em>Nishkama</em> stands for selfless, objective action—we advocate relentlessly for the actual end-user experience, testing non-linear journeys, unexpected inputs, and flaky network conditions.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quality-advocacy"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all text-center"
                >
                  Learn How We Advocate
                </Link>
                <Link
                  href="/how-we-work"
                  className="rounded-xl bg-[#2F7CEF] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1E66D8] transition-all text-center"
                >
                  Our 6-Stage Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AGILE ENGAGEMENT PATHWAYS */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-slate-50/70">
        <div className="shell">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
              FLEXIBLE COLLABORATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0E2539]">
              How Engineering Teams Partner with NCL
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 01</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Pre-Launch Quality Audit</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Intensive 1–2 week diagnostic audit before a major public beta, v2 launch, or investor demo. You receive an actionable defect catalog and release go/no-go verdict.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href="/contact?need=audit"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Request Pre-Launch Audit</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 02</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Embedded Sprint QA</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Continuous QA embedded inside your Linear, Jira, GitHub, and Slack workflows. We test staging preview builds and validate releases on a weekly or bi-weekly cadence.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href="/contact?need=sprint-qa"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Embed Sprint QA</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 03</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Dedicated XR QA Lead</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Specialized senior QA engineers dedicated to your spatial roadmap—handling Unity/Unreal test automation, spatial UI regression, and 3D build validation.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100">
                <Link
                  href="/contact?need=xr-qa"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Book XR QA Lead</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CLEAN CTA */}
      <section className="py-16 md:py-20 bg-[#0E2539] text-white">
        <div className="shell text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to validate your next release?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Tell us about your spatial application, web platform, or upcoming sprint timeline. We onboard in as little as 24–48 hours under full NDA.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#2F7CEF] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-3.5 text-sm font-bold text-slate-200 hover:border-slate-500 transition-all"
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
