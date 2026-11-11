"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap } from "lucide-react";

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
      title: "Automated Happy-Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Enter test card credentials",
        "2. Click 'Complete Purchase'",
        "3. Gateway responds 200 OK in 140ms",
        "4. Order success view rendered",
      ],
      summary: "Synthetic script completes cleanly under ideal conditions with zero latency.",
    },
    realityCheck: {
      title: "NCL Exploratory Reality Check",
      severity: "CRITICAL P0 DEFECT",
      trigger: "Spotty 4G connection + user double-taps submit while session token refreshes.",
      outcome: "Duplicate transaction charged; frontend gets stuck in infinite loading deadlock.",
      impact: "Customer is billed twice, abandons cart, and files a bank chargeback.",
      recommendation: "Implement frontend action debouncing + backend idempotency key validation.",
    },
  },
  {
    id: "auth-sync",
    title: "Multi-Device Session & Auth",
    tag: "Session State",
    happyPath: {
      title: "Automated Happy-Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Login on Chrome desktop",
        "2. Verify JWT token stored",
        "3. Navigate to protected dashboard",
        "4. Session state active",
      ],
      summary: "Single-device authentication script passes schema and route checks seamlessly.",
    },
    realityCheck: {
      title: "NCL Exploratory Reality Check",
      severity: "HIGH P1 REGRESSION",
      trigger: "User logs in on mobile app while active desktop session revokes refresh token.",
      outcome: "Desktop tab silently writes stale state to IndexedDB, desyncing user edits.",
      impact: "Customer loses 45 minutes of unsaved work with zero warning or recovery prompt.",
      recommendation: "Add cross-tab broadcast channel sync with graceful token recovery.",
    },
  },
  {
    id: "onboarding",
    title: "Team Invite & Permissions",
    tag: "RBAC & UX Friction",
    happyPath: {
      title: "Automated Happy-Path Test",
      status: "PASS (200 OK)",
      steps: [
        "1. Admin sends workspace invite",
        "2. Mock recipient clicks link",
        "3. User accepts role: Member",
        "4. User listed in workspace table",
      ],
      summary: "Linear invite acceptance verified cleanly against backend database schema.",
    },
    realityCheck: {
      title: "NCL Exploratory Reality Check",
      severity: "MEDIUM P2 EXPERIENCE FRICTION",
      trigger: "Invitee already has an active session under another company domain in browser.",
      outcome: "Link redirects to generic 403 Forbidden without explaining the session mismatch.",
      impact: "Over 50% of invited enterprise users abandon signup assuming the platform is broken.",
      recommendation: "Provide context-aware switch-account prompt with direct invite token claim.",
    },
  },
];

export function QualityGapShowcase() {
  const [activeScenario, setActiveScenario] = useState("checkout");
  const current = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-14 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-bold text-[#2F7CEF] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            <span className="uppercase tracking-wider font-mono text-[11px]">THE QUALITY GAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-[#0E2539] leading-[1.12]">
            Automated tests verify syntax. <br className="hidden sm:inline" />
            <span className="text-[#2F7CEF]">We verify reality.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            A test suite can report 100% green checkmarks while real users encounter deadlocks, silent data loss, and checkout churn outside the happy path.
          </p>
        </div>

        {/* Scenario Selector Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {scenarios.map((s) => {
            const isActive = s.id === activeScenario;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveScenario(s.id)}
                className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? "bg-[#0E2539] text-white border-[#0E2539] shadow-sm shadow-[#0E2539]/20"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <span>{s.title}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  {s.tag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Dual-Perspective Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Panel: The Synthetic Happy Path */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  SYNTHETIC PERSPECTIVE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{current.happyPath.status}</span>
                </span>
              </div>

              <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#0E2539]">
                {current.happyPath.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500 font-mono">
                Scripted assertion suite (ideal network)
              </p>

              {/* Execution Steps */}
              <div className="mt-5 space-y-2 font-mono text-xs">
                {current.happyPath.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 flex items-center justify-between shadow-xs"
                  >
                    <span>{st}</span>
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/90 text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Assumption: </span>
              {current.happyPath.summary}
            </div>
          </div>

          {/* Right Panel: The Nishkama Reality Check (Dark Navy Terminal Card) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#0B1E30] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2F7CEF]/25 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                  NCL INDEPENDENT PERSPECTIVE
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                  <span>{current.realityCheck.severity}</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {current.realityCheck.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400 font-mono">
                Real-world exploratory journey &amp; edge condition stress
              </p>

              {/* Defect Telemetry Box */}
              <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3.5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-semibold mb-1">
                    Hidden Trigger:
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                    {current.realityCheck.trigger}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block font-semibold mb-1">
                    Actual Failure Outcome:
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    {current.realityCheck.outcome}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300 block font-semibold mb-1">
                    Customer &amp; Business Impact:
                  </span>
                  <p className="text-xs sm:text-[13px] text-amber-200 font-medium leading-relaxed">
                    {current.realityCheck.impact}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 text-xs">
              <div className="text-slate-300">
                <span className="font-semibold text-white">NCL Advocacy: </span>
                <span>{current.realityCheck.recommendation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
