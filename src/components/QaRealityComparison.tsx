"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldAlert,
  ArrowRight,
  Flame,
  Terminal,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  tag: string;
  happyPath: {
    title: string;
    status: string;
    steps: string[];
    summary: string;
  };
  realityCheck: {
    title: string;
    severity: string;
    trigger: string;
    outcome: string;
    impact: string;
    recommendation: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "checkout",
    title: "Checkout & Payment Flow",
    tag: "Transactional Risk",
    happyPath: {
      title: "Automated Happy Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Enter test card credentials",
        "2. Click 'Complete Purchase'",
        "3. Gateway responds 200 OK in 140ms",
        "4. Order success view rendered",
      ],
      summary: "Synthetic test completes cleanly with zero errors.",
    },
    realityCheck: {
      title: "NCL Real-World Exploratory Run",
      severity: "CRITICAL P0 DEFECT",
      trigger: "Spotty 4G connection + user double-taps submit while session token refreshes.",
      outcome: "Duplicate transaction charged; frontend gets stuck in infinite loading deadlock.",
      impact: "Customer charged twice, abandons cart, files bank chargeback.",
      recommendation: "Implement frontend debounce + backend idempotency key validation.",
    },
  },
  {
    id: "auth-sync",
    title: "Multi-Device Session & Auth",
    tag: "Session State",
    happyPath: {
      title: "Automated Happy Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Login on Chrome desktop",
        "2. Verify JWT token stored",
        "3. Navigate to protected dashboard",
        "4. Session state active",
      ],
      summary: "Single-device authentication script passes seamlessly.",
    },
    realityCheck: {
      title: "NCL Real-World Exploratory Run",
      severity: "HIGH P1 REGRESSION",
      trigger: "User logs in on mobile app while active desktop session revokes refresh token.",
      outcome: "Desktop tab silently writes stale state to IndexedDB, desyncing user edits.",
      impact: "Customer loses 45 minutes of unsaved work without any error alert.",
      recommendation: "Add cross-tab broadcast channel sync with graceful session recovery.",
    },
  },
  {
    id: "onboarding",
    title: "Team Invite & Permissions",
    tag: "RBAC & UX Friction",
    happyPath: {
      title: "Automated Happy Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Admin sends workspace invite",
        "2. Mock recipient clicks link",
        "3. User accepts role: Member",
        "4. User listed in workspace table",
      ],
      summary: "Linear invite acceptance verified against schema.",
    },
    realityCheck: {
      title: "NCL Real-World Exploratory Run",
      severity: "MEDIUM P2 EXPERIENCE FRICTION",
      trigger: "Invitee has existing account under another company domain on same browser.",
      outcome: "Link redirects to 403 Forbidden without explaining the session mismatch.",
      impact: "52% of invited team members abandon signup thinking product is broken.",
      recommendation: "Provide context-aware switch-account prompt with direct invite token claim.",
    },
  },
];

export function QaRealityComparison() {
  const [activeScenario, setActiveScenario] = useState("checkout");
  const current = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 mb-4">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-wider font-mono text-[11px]">THE QUALITY GAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.1]">
            Your product can pass tests and still fail users.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A product may meet technical specifications and still frustrate customers. Bugs, edge cases, broken journeys, inconsistent experiences, and release risks often appear outside the happy path.
          </p>
        </div>

        {/* Scenario Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {scenarios.map((s) => {
            const isActive = s.id === activeScenario;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScenario(s.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all border ${
                  isActive
                    ? "bg-[#0E2539] text-white border-[#0E2539] shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>{s.title}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {s.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Reality Artifact Split Screen */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Panel: The Internal Happy Path */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50/70 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  INTERNAL PERSPECTIVE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{current.happyPath.status}</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0E2539]">
                {current.happyPath.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 font-mono">
                Scripted happy-path assertion suite
              </p>

              {/* Execution Steps */}
              <div className="mt-6 space-y-2.5 font-mono text-xs">
                {current.happyPath.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 flex items-center justify-between"
                  >
                    <span>{st}</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/90 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Assumption: </span>
              {current.happyPath.summary}
            </div>
          </div>

          {/* Right Panel: The Nishkama Reality Check (High-Contrast Midnight Card) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#0B1E30] p-7 sm:p-9 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background Texture with Perfect Scrim Overlay (Zero Formatting Disruption) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/ncl-perspective-bg.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-65 mix-blend-screen scale-105"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#0B1E30]/85 via-[#0E2539]/80 to-[#081524]/90"
                aria-hidden="true"
              />
            </div>

            {/* Subtle glow effect */}
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2F7CEF]/25 blur-3xl pointer-events-none z-0"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                  NCL INDEPENDENT PERSPECTIVE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full animate-pulse">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                  <span>{current.realityCheck.severity}</span>
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-white tracking-tight">
                {current.realityCheck.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 font-mono">
                Real-world exploratory journey &amp; non-linear stress testing
              </p>

              {/* Defect Telemetry Box */}
              <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5 space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-semibold mb-1">
                    Hidden Trigger:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {current.realityCheck.trigger}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block font-semibold mb-1">
                    Actual Failure Outcome:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.realityCheck.outcome}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 block font-semibold mb-1">
                    Customer &amp; Business Impact:
                  </span>
                  <p className="text-xs text-amber-200 font-medium leading-relaxed">
                    {current.realityCheck.impact}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 text-xs">
              <div className="text-slate-300">
                <span className="font-semibold text-white">NCL Advocacy: </span>
                <span>{current.realityCheck.recommendation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Problem Pillars from Document */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-6">
            FOUR RECURRING BLIND SPOTS WE DIAGNOSE
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-mono font-bold text-[#2F7CEF]">01</span>
              <h4 className="mt-2 text-sm font-bold text-[#0E2539]">
                Bugs that escape planned test cases
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Edge cases, unexpected customer inputs, and non-linear paths that scripted happy-path suites do not anticipate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-mono font-bold text-[#2F7CEF]">02</span>
              <h4 className="mt-2 text-sm font-bold text-[#0E2539]">
                Real-world journeys not fully validated
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Multi-step customer workflows interrupted by patchy mobile connections, device orientation changes, and background tasks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-mono font-bold text-[#2F7CEF]">03</span>
              <h4 className="mt-2 text-sm font-bold text-[#0E2539]">
                Regression risks inside frequent releases
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Small dependency bumps or rapid sprint features that quietly break critical checkout, login, or billing pipelines.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-mono font-bold text-[#2F7CEF]">04</span>
              <h4 className="mt-2 text-sm font-bold text-[#0E2539]">
                Frustration that never reaches engineering
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Micro-friction, dead ends, and confusing error states where users quietly churn without ever filing a bug ticket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
