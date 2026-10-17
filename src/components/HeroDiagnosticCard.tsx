import React from "react";
import { AlertCircle, CheckCircle2, ShieldCheck, Terminal, Smartphone, FileVideo, Layers } from "lucide-react";

export function HeroDiagnosticCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Decorative Glow */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#2F7CEF]/20 via-[#2F7CEF]/10 to-transparent blur-xl opacity-70"
        aria-hidden="true"
      />

      {/* Main Card Container */}
      <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/50 backdrop-blur-sm">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-slate-700 uppercase">
              DEFECT REPORT #NCL-842
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 text-[11px] font-bold text-rose-700">
            <AlertCircle className="h-3 w-3" />
            SEV-1 CRITICAL
          </span>
        </div>

        {/* Issue Title & Summary */}
        <div className="mt-4">
          <h4 className="text-base font-bold text-slate-900 leading-snug">
            Race condition in checkout allows duplicate charge during cellular throttling
          </h4>
          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
            Automated Playwright tests passed (happy path with instant local network).
            Real-world exploratory stress test exposed idempotent key omission on slow 3G.
          </p>
        </div>

        {/* Reproduction Steps Box */}
        <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-xs text-slate-700 font-mono space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-200/50">
            <span>Reproduction Sequence</span>
            <span className="text-[#2F7CEF]">100% Deterministic</span>
          </div>
          <div className="flex items-start gap-2 pt-1 text-[11px]">
            <span className="text-slate-400 font-bold">01.</span>
            <span>Simulate intermittent 3G network latency (~1,200ms RTT)</span>
          </div>
          <div className="flex items-start gap-2 text-[11px]">
            <span className="text-slate-400 font-bold">02.</span>
            <span>Double-tap &apos;Complete Order&apos; button within 400ms interval</span>
          </div>
          <div className="flex items-start gap-2 text-[11px]">
            <span className="text-slate-400 font-bold">03.</span>
            <span className="text-rose-600 font-bold">Dual authorization webhooks emitted to Stripe API</span>
          </div>
        </div>

        {/* Verification & Metadata Pills */}
        <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5">
            <Smartphone className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
            <span className="truncate">iPhone 15 Pro • iOS 18.2</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5">
            <FileVideo className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
            <span className="truncate">4K Screen Proof + HAR log</span>
          </div>
        </div>

        {/* Resolution Advocacy Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>NCL Advocacy: Patch Verified</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Exported to Linear &amp; Slack
          </span>
        </div>
      </div>
    </div>
  );
}
