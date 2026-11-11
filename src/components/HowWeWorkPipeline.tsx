"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GitPullRequest,
  Smartphone,
  Bug,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Clock,
  Activity,
  WifiOff,
  Layers,
  Sparkles,
  FileCode,
  Check,
  Radio,
  PlayCircle,
  FileText,
  AlertTriangle,
  Cpu,
} from "lucide-react";

type ChaosScenario = "packet_loss" | "offline_drop" | "background_kill";
type TicketTab = "steps" | "logs" | "advocacy";

export function HowWeWorkPipeline() {
  const [chaosScenario, setChaosScenario] = useState<ChaosScenario>("packet_loss");
  const [activeTicketTab, setActiveTicketTab] = useState<TicketTab>("steps");

  const chaosDetails = {
    packet_loss: {
      title: "Subway 3G Tunnel • 12% Packet Loss",
      badge: "LATENCY SPIKE & RETRY RACE",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      description:
        "Triggered rapid network drops right during token handshake. Intercepted double-tap race conditions and infinite loading spinner deadlocks that automated mock tests missed.",
      impact: "Intercepted: Duplicate charge risk & payment lockups",
    },
    offline_drop: {
      title: "Sudden Airplane Mode • Offline Cache Sync",
      badge: "DIRTY LOCAL STATE",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      description:
        "Simulated connectivity sever while user was editing cart items. Intercepted SQLite database write conflict and unsynced state rollback upon reconnect.",
      impact: "Intercepted: Silent cart data loss on connection drop",
    },
    background_kill: {
      title: "OS Low-Memory • Background App Eviction",
      badge: "LIFECYCLE RESUMPTION",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      description:
        "Backgrounded app mid-checkout while opening camera. OS reclaimed memory; app crashed with unhandled null pointer upon reopening rather than restoring step.",
      impact: "Intercepted: P0 fatal crash on app resume",
    },
  };

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAFBFD] relative overflow-hidden" id="pipeline">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#2F7CEF]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-[#2F7CEF] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF] animate-pulse" />
            <span className="uppercase tracking-wider font-mono text-[11px]">THE 48-HOUR RELEASE CADENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.12]">
            Engineered to fit your sprint. <br className="hidden sm:inline" />
            <span className="text-[#2F7CEF]">Not slow you down.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Zero bureaucratic onboarding. We plug straight into your build pipelines, test across real physical devices, and deliver developer-ready tickets with zero fluff.
          </p>
        </div>

        {/* 4-Stage Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          {/* ========================================================= */}
          {/* BENTO CELL 1: Zero-Friction Ingestion (Span 7)            */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F7CEF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                  STAGE 01 • INGESTION
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  <Clock className="h-3 w-3 text-[#2F7CEF]" />
                  <span>KICKOFF &lt; 4H</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#0E2539] tracking-tight">
                Plug directly into your build
              </h3>
              <p className="mt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                Invite us to your TestFlight, PR deploy URL, or APK drop. We configure environments, test parameters, and data seeds immediately without legal or setup drag.
              </p>

              {/* Visual Mini-Mockup: Ingestion Stack */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-[#0E1726] text-white p-4 sm:p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    ENVIRONMENT DISCOVERY PIPELINE
                  </span>
                  <span className="text-emerald-400 font-semibold">SYNCED</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <GitPullRequest className="h-4 w-4 text-[#60A5FA]" />
                      <span className="text-xs font-medium">PR #284 Preview Deploy</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                      LIVE INGESTED
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="h-4 w-4 text-[#A78BFA]" />
                      <span className="text-xs font-medium">iOS TestFlight Build v2.4.1</span>
                    </div>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded font-bold">
                      MATRIX READY
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Scope: 9 Core Flows Mapped</span>
                  <span className="text-emerald-400 font-bold">First Cycle: T+03h:42m</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Zero SDK dependencies required</span>
              <span className="text-[#2F7CEF] font-bold">Mutual NDA on Day 1</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CELL 2: Chaos & Physical Lab (Span 5)                */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F7CEF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                  STAGE 02 • PHYSICAL STRESS
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-1 rounded-full">
                  <Activity className="h-3 w-3 text-amber-500" />
                  <span>CHAOS LAB</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#0E2539] tracking-tight">
                Real hardware. Real network chaos.
              </h3>
              <p className="mt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                We test beyond synthetic emulators — throttling connections to spotty subway networks, forcing low-memory background suspensions, and dirty state mutations.
              </p>

              {/* Interactive Scenario Buttons */}
              <div className="mt-5 flex gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setChaosScenario("packet_loss")}
                  className={`px-2.5 py-1 rounded-lg transition-all text-xs font-semibold shrink-0 cursor-pointer ${
                    chaosScenario === "packet_loss"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Subway 3G
                </button>
                <button
                  type="button"
                  onClick={() => setChaosScenario("offline_drop")}
                  className={`px-2.5 py-1 rounded-lg transition-all text-xs font-semibold shrink-0 cursor-pointer ${
                    chaosScenario === "offline_drop"
                      ? "bg-rose-500 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Airplane Mode
                </button>
                <button
                  type="button"
                  onClick={() => setChaosScenario("background_kill")}
                  className={`px-2.5 py-1 rounded-lg transition-all text-xs font-semibold shrink-0 cursor-pointer ${
                    chaosScenario === "background_kill"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  OS Memory Eviction
                </button>
              </div>

              {/* Dynamic Stress Card */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <WifiOff className="h-3.5 w-3.5 text-slate-600" />
                    {chaosDetails[chaosScenario].title}
                  </span>
                  <span
                    className={`font-mono text-[9.5px] font-bold px-2 py-0.5 rounded border ${chaosDetails[chaosScenario].badgeColor}`}
                  >
                    {chaosDetails[chaosScenario].badge}
                  </span>
                </div>
                <p className="mt-2 text-[11.5px] text-slate-600 leading-snug">
                  {chaosDetails[chaosScenario].description}
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-200/80 font-mono text-[10.5px] font-bold text-slate-800">
                  {chaosDetails[chaosScenario].impact}
                </div>
              </div>

              {/* Real Hardware Matrix Chips */}
              <div className="mt-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  PHYSICAL LAB DEVICES
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                    iPhone 16 Pro (iOS 18)
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                    Pixel 9 (Android 15)
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                    Vision Pro (visionOS 2)
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium">
                    iPad Pro (M4)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Zero synthetic simulator bias</span>
              <span className="text-amber-600 font-bold">Physical Glass Only</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CELL 3: Developer-Ready Defect Dossier (Span 6)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F7CEF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                  STAGE 03 • ACTIONABLE DOSSIER
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-rose-700 bg-rose-50 border border-rose-200/70 px-2.5 py-1 rounded-full">
                  <Bug className="h-3 w-3 text-rose-500" />
                  <span>DIRECT TO LINEAR / JIRA</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#0E2539] tracking-tight">
                Tickets your engineers will love
              </h3>
              <p className="mt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                No vague bug reports. Every defect arrives with a 3-step reproduction, a 4-second MP4 video replay, console stack traces, and complete network payload dumps.
              </p>

              {/* Interactive Mini-Linear Ticket Preview */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/90 p-4 font-mono text-xs shadow-xs">
                {/* Ticket Header Bar */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">NCL-104</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-rose-600 font-bold bg-rose-100/90 px-2 py-0.5 rounded text-[10px]">
                      CRITICAL P0
                    </span>
                  </div>
                  <span className="text-slate-500 text-[10px]">Synced to Linear</span>
                </div>

                <div className="text-slate-900 font-bold text-xs leading-snug">
                  Double-tap submit during token refresh triggers duplicate charge deadlock
                </div>

                {/* Evidence Artifact Pills */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center text-slate-700 font-semibold shadow-2xs">
                    <span className="block text-blue-600 font-bold">▶ 00:04</span>
                    <span>MP4 Replay</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center text-slate-700 font-semibold shadow-2xs">
                    <span className="block text-emerald-600 font-bold">.HAR</span>
                    <span>Payload Trace</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-center text-slate-700 font-semibold shadow-2xs">
                    <span className="block text-amber-600 font-bold">3 Steps</span>
                    <span>100% Repro</span>
                  </div>
                </div>

                {/* Interactive Ticket Tabs */}
                <div className="mt-3.5 pt-3 border-t border-slate-200">
                  <div className="flex gap-2 mb-2 text-[10.5px]">
                    <button
                      type="button"
                      onClick={() => setActiveTicketTab("steps")}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeTicketTab === "steps"
                          ? "bg-slate-900 text-white font-bold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Repro Steps
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTicketTab("logs")}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeTicketTab === "logs"
                          ? "bg-slate-900 text-white font-bold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Network Log (.HAR)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTicketTab("advocacy")}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeTicketTab === "advocacy"
                          ? "bg-slate-900 text-white font-bold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Advocacy Fix
                    </button>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-200 p-2.5 text-[11px] leading-relaxed">
                    {activeTicketTab === "steps" && (
                      <ol className="list-decimal list-inside space-y-1 text-slate-700 font-sans">
                        <li>Open checkout sheet with active items in cart.</li>
                        <li>Double-tap &apos;Confirm &amp; Pay&apos; precisely at JWT token expiry.</li>
                        <li>UI deadlocks in infinite spinner while backend charges twice.</li>
                      </ol>
                    )}
                    {activeTicketTab === "logs" && (
                      <div className="font-mono text-[10px] text-slate-800 space-y-1">
                        <div className="text-rose-600 font-bold">
                          POST /api/v2/charge → 409 Conflict (Idempotency Collision)
                        </div>
                        <div className="text-slate-500">
                          Uncaught (in promise) TransactionLockException at checkout.tsx:142
                        </div>
                      </div>
                    )}
                    {activeTicketTab === "advocacy" && (
                      <div className="text-slate-700 font-sans text-[11px]">
                        <span className="font-bold text-[#2F7CEF]">Advocacy Suggestion: </span>
                        Attach idempotent UUID upon checkout modal mount and debounce tap event handler on client. Fixable in ~15 mins.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Ready for engineers to resolve</span>
              <span className="text-[#2F7CEF] font-bold">Zero Back-and-Forth</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BENTO CELL 4: Pre-Release Go / No-Go Verdict (Span 6)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-[#0E2539] p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Blue Backlight */}
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#2F7CEF]/25 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                  STAGE 04 • RELEASE VERDICT
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span>48H TURNAROUND</span>
                </span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Definitive release confidence before deploy
              </h3>
              <p className="mt-2 text-xs sm:text-[13.5px] text-slate-300 leading-relaxed">
                A conclusive, unhedged quality sign-off certifying zero critical defects escaped, regression boundaries held, and customer journeys are battle-tested before production deployment.
              </p>

              {/* Visual Mini-Mockup: Verdict Sign-Off Dossier */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 font-mono text-xs backdrop-blur-md space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    AUDIT SIGN-OFF VERDICT
                  </span>
                  <span className="text-[11px] font-bold bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    PRODUCTION: GO ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base sm:text-xl font-bold text-white">0</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Critical Escapes</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base sm:text-xl font-bold text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Core Flows Safe</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base sm:text-xl font-bold text-[#60A5FA]">48h</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Full Turnaround</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-300 leading-relaxed font-sans">
                  <span className="text-emerald-300 font-bold font-mono">Executive Summary: </span>
                  All payment, multi-device auth, and onboarding pipelines verified under load. Greenlit for App Store &amp; production release.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 relative z-10">
              <span>Executive &amp; Tech Lead Deliverable</span>
              <span className="text-emerald-400 font-bold">Ready to Ship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
