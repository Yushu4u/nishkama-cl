"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Eye,
  Users,
  Terminal,
  Activity,
  Sparkles,
  MessageSquare,
  Workflow,
  Search,
} from "lucide-react";
import { pillars } from "@/data/pillars";

export function PillarSection() {
  const [activeTab, setActiveTab] = useState<string>("quality-advocacy");

  return (
    <section
      id="pillars"
      aria-label="Three-Pillar Quality Architecture"
      className="border-b border-slate-200/80 bg-[#FAFBFD] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Subtle ambient grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-size:24px_24px] [background-image:linear-gradient(to_right,#0E2539_1px,transparent_1px),linear-gradient(to_bottom,#0E2539_1px,transparent_1px)]"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-bold text-[#2F7CEF] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            <span className="uppercase tracking-wider font-mono text-[11px]">
              FOUNDER CORE ARCHITECTURE • P0
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.1]">
            Three Ways We Advocate for Your Product.
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            From technical defect discovery to understanding real customer frustration, NCL approaches software quality from three interconnected vantage points. We don&apos;t just test code &mdash; we advocate for the people who rely on it.
          </p>
        </div>

        {/* Visual Strategic Connector Flow (Doc Section 15.6) */}
        <div className="mt-8 mb-10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 border border-slate-200 bg-white rounded-2xl p-3 sm:px-5 sm:py-3 shadow-2xs w-full max-w-3xl">
          <span className="text-[#0E2539] font-extrabold text-[11px] sm:text-xs">THE QUALITY LOOP:</span>
          <span className="text-[#2F7CEF] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            1. TECHNICAL QA (BREAK IT)
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
          <span className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            2. EXPERIENCE (USE IT)
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            3. ADVOCATE (LISTEN TO IT)
          </span>
        </div>

        {/* The 3 Connected Pillars Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {/* Pillar 1: BREAK IT (QA Testing) */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 truncate">
                  PILLAR 01 // TECHNICAL
                </span>
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#2F7CEF] border border-blue-200 shrink-0 whitespace-nowrap">
                  BREAK IT
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#0E2539]">
                  Technical QA
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-semibold italic text-[#2F7CEF]">
                  &ldquo;Does the product work correctly?&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  We systematically validate whether the product behaves as expected and aggressively explore where it can fail.
                </p>
              </div>

              {/* Technical Telemetry Mini Widget */}
              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200/60 mb-2">
                  <span>METHOD: SYSTEMATIC &amp; RISK-BASED</span>
                  <span className="text-emerald-600 font-bold">● ACTIVE</span>
                </div>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex justify-between">
                    <span>Functional Validation</span>
                    <span className="font-semibold text-[#0E2539]">100% Core Flows</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exploratory Bug Hunting</span>
                    <span className="font-semibold text-[#2F7CEF]">Zero Script Bias</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regression Safety Gates</span>
                    <span className="font-semibold text-slate-700">Pre-Deploy Lock</span>
                  </div>
                </div>
              </div>

              {/* Core Activities Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 font-mono">
                  Core Technical Activities
                </p>
                <ul className="space-y-2">
                  {pillars[0].capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                href="/services#functional-testing"
                className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#0E2539] hover:text-[#2F7CEF] transition-colors"
              >
                <span>Explore Technical QA</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: USE IT (Product Experience) */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 truncate">
                  PILLAR 02 // USABILITY
                </span>
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 shrink-0 whitespace-nowrap">
                  USE IT
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-extrabold tracking-tight text-[#0E2539]">
                  Product Experience
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-semibold italic text-[#2F7CEF]">
                  &ldquo;Does it work the way a real person needs it to?&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  We use the product as a real person would, validate important journeys, and identify friction that traditional test execution may miss.
                </p>
              </div>

              {/* Journey Stepper Mini Widget */}
              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200/60 mb-2">
                  <span>LENS: REAL-USER DOGFOODING</span>
                  <span className="text-blue-600 font-bold">● SIMULATED</span>
                </div>
                <div className="space-y-1.5 text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">1.</span>
                    <span>Sign-up &amp; Team Onboarding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">2.</span>
                    <span>Flaky WiFi Session Interruption</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0E2539] font-semibold">
                    <span className="text-[#2F7CEF]">3.</span>
                    <span>Friction &amp; Dead-End Audit</span>
                  </div>
                </div>
              </div>

              {/* Core Activities Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 font-mono">
                  Experience Validation
                </p>
                <ul className="space-y-2">
                  {pillars[1].capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <Link
                href="/services#usability-testing"
                className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#0E2539] hover:text-[#2F7CEF] transition-colors"
              >
                <span>Explore Product Experience</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: LISTEN TO IT (Quality Advocacy - Crown Jewel / Premium Card) */}
          <div className="rounded-3xl border border-[#BFDBFE] bg-gradient-to-br from-[#EFF6FF]/70 via-white to-blue-50/40 p-7 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden ring-1 ring-[#2F7CEF]/20">
            {/* Subtle glow accent */}
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2F7CEF]/15 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-blue-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] truncate">
                  PILLAR 03 // ADVOCACY
                </span>
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2F7CEF] text-white shadow-xs shrink-0 whitespace-nowrap">
                  LISTEN TO IT
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0E2539]">
                    Quality Advocacy
                  </h3>
                  <Sparkles className="h-5 w-5 text-[#2F7CEF]" />
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold italic text-[#2F7CEF]">
                  &ldquo;What are customers struggling with?&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                  We look beyond the test environment to understand what customers experience, complain about, and value &mdash; then turn those signals into actionable quality insights.
                </p>
              </div>

              {/* Signal to Code Translation Mini Widget */}
              <div className="mt-6 rounded-xl bg-white border border-blue-200/90 p-3.5 font-mono text-[11px] shadow-2xs">
                <div className="flex items-center justify-between text-[#2F7CEF] pb-2 border-b border-blue-100 mb-2 font-bold">
                  <span>CUSTOMER SIGNAL → CODE ACTION</span>
                  <span>INSIGHT</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 italic bg-slate-50 p-1.5 rounded border border-slate-100">
                    &ldquo;I thought the app crashed after upload...&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-800 font-semibold flex items-start gap-1">
                    <span className="text-emerald-600 font-bold">↳ Fix:</span>
                    <span>Optimistic progress state + background retry logic.</span>
                  </p>
                </div>
              </div>

              {/* Core Activities Checklist */}
              <div className="mt-6 pt-5 border-t border-blue-100">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#2F7CEF] mb-3 font-mono">
                  Advocacy Deliverables
                </p>
                <ul className="space-y-2">
                  {pillars[2].capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-blue-100">
              <Link
                href="/quality-advocacy"
                className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#2F7CEF] hover:text-[#1E66D8] transition-colors"
              >
                <span>Read Quality Advocacy Deep Dive</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
