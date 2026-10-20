import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Compass,
  ShieldAlert,
  Frown,
  Workflow,
  Search,
  FileText,
  Repeat,
  Sparkles,
  Layers,
  ShieldCheck,
  Eye,
  Users,
  Target,
} from "lucide-react";
import { QuickEstimateCard } from "@/components/QuickEstimateCard";
import { PillarSection } from "@/components/PillarSection";
import { WhatWeTestGrid } from "@/components/WhatWeTestGrid";

export default function HomePage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Subtle modern ambient background mesh */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION (Doc Section 01) */}
      <section className="relative border-b border-slate-200/80 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="shell">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Authoritative Messaging */}
            <div className="lg:col-span-7 max-w-2xl">
              {/* Preserved Eyebrow Badge with Brand & Tagline Hierarchy */}
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

              {/* Official Doc Sub-headline */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                We help product teams find what breaks, experience what users experience, and uncover quality risks before they become customer problems.
              </p>

              {/* Action Buttons (Doc Section 01 CTAs) */}
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

      {/* 2. THE PROBLEM (Doc Section 02) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              THE QUALITY GAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Your product can pass tests and still fail users.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              A product may meet technical requirements and still frustrate customers. Bugs, edge cases, broken journeys, inconsistent experiences, and release risks often appear outside the happy path. NCL brings an independent quality perspective to help teams see what their internal process may miss.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E2539]">
                  Bugs that escape planned test cases
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Defects that emerge only through unscripted exploration, non-linear workflows, and unexpected customer inputs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 text-[#2F7CEF] flex items-center justify-center mb-4">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E2539]">
                  Real-world journeys not fully validated
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Complex multi-step flows broken by network fluctuations, device interruptions, and realistic environment conditions.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="h-10 w-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E2539]">
                  Regression risks inside frequent releases
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Unintended side-effects and quiet breakages introduced into mission-critical flows during rapid agile cycles.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="h-10 w-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-4">
                  <Frown className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#0E2539]">
                  Frustration that never reaches engineering
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Subtle UX friction, confusing error messages, and usability dead-ends that quietly cause customer churn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE: THE 3 CONNECTED PILLARS (Doc Section 15 - P0 Priority) */}
      <PillarSection />

      {/* 4. WHAT WE TEST (Doc Section 06) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/70">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
                COVERAGE SPECTRUM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
                Across the product experience.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Independent QA testing and quality validation across web applications, mobile builds, SaaS platforms, APIs, and connected digital experiences.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors shrink-0"
            >
              <span>Explore All 8 QA Disciplines</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <WhatWeTestGrid />
        </div>
      </section>

      {/* 5. HOW WE WORK (Doc Section 08) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Simple process. Clear evidence. Actionable outcomes.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              An independent, structured cadence designed to integrate seamlessly with your product and engineering workflow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">01</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Discover</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Understand your product, users, release cycle, environments, and quality concerns.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">02</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Plan</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Define scope, priorities, risks, test approach, and clear success criteria.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">03</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Test</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Execute structured and exploratory testing based on technical and business risk.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">04</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Experience</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Validate important customer journeys and friction points from a real-user perspective.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">05</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Report</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Deliver reproducible findings, video evidence, severity ratings, and impact analysis.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded">06</span>
              <h3 className="mt-4 text-lg font-bold text-[#0E2539]">Improve</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Re-test fixes and help the team move toward a stronger, more confident release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT MODELS (Doc Section 09) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/70">
        <div className="shell">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Start small. Scale when you need us.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Flexible collaboration options tailored to your release cycle, engineering team capacity, and product roadmap.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 01</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">QA Assessment</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Focused short engagement to evaluate product quality, identify critical bugs, and pinpoint coverage gaps.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/contact?need=assessment"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Request Assessment</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 02</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Project QA</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Targeted QA capacity for a specific product milestone, major feature launch, or critical release.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/contact?need=project"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Scope a Project</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 03</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Ongoing QA Partner</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Recurring independent QA capacity embedded into your weekly or bi-weekly development and release sprints.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/contact?need=partner"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Embed a QA Team</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <span className="text-xs font-mono font-bold text-[#2F7CEF]">MODEL 04</span>
                <h3 className="mt-2 text-lg font-bold text-[#0E2539]">Quality Advocacy</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Deeper engagement combining technical testing discipline, real-world user perspective, and customer feedback.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/quality-advocacy"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1"
                >
                  <span>Learn How We Advocate</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY NISHKAMA (Doc Section 10) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              WHY NISHKAMA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              An independent quality voice for your product.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Independent Perspective</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We bring fresh eyes rather than assuming the product works because the team built it.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Risk-Based Thinking</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We prioritize testing where failure matters most to customers and business operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Real-World Validation</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We go beyond scripted checks and consider how customers actually use the product.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Evidence-Driven Reporting</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Clear, reproducible findings with video evidence, logs, and actionable engineering impact.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Flexible Engagement</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We can support a focused pre-launch audit, a milestone release, or an ongoing QA function.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50">
              <h3 className="font-bold text-[#0E2539]">Quality Ownership</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                We stay focused on the user outcome, not just the number of test cases executed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Doc Section 12) */}
      <section className="py-16 md:py-20 bg-[#0E2539] text-white">
        <div className="shell text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s find what your product is missing.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Tell us about your product, release cycle, or current QA challenge. We&apos;ll help identify where an independent quality perspective can make a difference.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?need=assessment"
              className="rounded-xl bg-[#2F7CEF] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2F7CEF]/30 hover:bg-[#1E66D8] transition-all hover:-translate-y-0.5"
            >
              Get a QA Assessment
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-3.5 text-sm font-bold text-slate-200 hover:border-slate-500 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
