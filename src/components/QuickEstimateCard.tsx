"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Glasses,
  Monitor,
  Smartphone,
  Layers,
  Lock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Cpu,
} from "lucide-react";

interface PlatformScope {
  id: string;
  label: string;
  icon: typeof Monitor;
  badges: string[];
}

const platforms: PlatformScope[] = [
  {
    id: "web-app",
    label: "Web Apps",
    icon: Monitor,
    badges: ["Cross-Browser Matrix", "Critical Regression Gates", "Form & Payment Edges"],
  },
  {
    id: "mobile-app",
    label: "Mobile Apps",
    icon: Smartphone,
    badges: ["Real Device Matrix", "Network Interruption", "Push & Background Sync"],
  },
  {
    id: "saas-cloud",
    label: "SaaS Platforms",
    icon: Layers,
    badges: ["Multi-Tenant RBAC", "API & Webhook Contracts", "Billing Edge Cases"],
  },
  {
    id: "spatial-xr",
    label: "Spatial & XR",
    icon: Glasses,
    badges: ["6DoF Gesture Debounce", "Frame Stability / FPS", "VisionOS & Quest Apps"],
  },
];

export function QuickEstimateCard() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState("web-app");
  const [projectUrl, setProjectUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const params = new URLSearchParams({
      platform: selectedPlatform,
      project: projectUrl,
      email: email,
      need: "assessment",
    });

    router.push(`/contact?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      {/* Ambient tech glow */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#2F7CEF]/20 via-[#2F7CEF]/10 to-transparent blur-xl opacity-75"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/60 backdrop-blur-sm">
        {/* Card Header with Technical Telemetry */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F7CEF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F7CEF]" />
            </span>
            <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#2F7CEF]">
              QA ASSESSMENT INTAKE
            </span>
          </div>
          <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded">
            24-HR EVALUATION
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold tracking-tight text-[#0E2539]">
            Request a QA Assessment
          </h3>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            Tell us about your build. Our QA engineers evaluate your scope under NDA and deliver an actionable quality plan within 24 hours.
          </p>
        </div>

        {/* Mini Intake Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {/* Platform Selector Pills (Adaptive grid) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
              Select Target Platform:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
              {platforms.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedPlatform === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPlatform(p.id)}
                    className={`flex items-center justify-center sm:justify-start gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all border ${
                      isSelected
                        ? "bg-[#EFF6FF] border-[#2F7CEF] text-[#2F7CEF] shadow-xs ring-1 ring-[#2F7CEF]"
                        : "bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${isSelected ? "text-[#2F7CEF]" : "text-slate-400"}`} />
                    <span className="truncate">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Scope Checklist Preview */}
          <div className="rounded-xl border border-blue-100 bg-[#FAFBFD] p-3 text-[11px]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
              Live Scope Inspector:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentPlatform.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1 rounded-md bg-white border border-blue-200/80 px-2 py-0.5 font-medium text-slate-700 text-[10px] shadow-2xs"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#2F7CEF]" />
                  <span>{b}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Project URL & Email Inputs (2 Columns on Desktop) */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="hero-project" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                App Name or Staging URL:
              </label>
              <input
                id="hero-project"
                type="text"
                placeholder="e.g. Acme App / app.acme.com"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#2F7CEF] focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="hero-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email:
              </label>
              <input
                id="hero-email"
                type="email"
                required
                placeholder="founder@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#2F7CEF] focus:outline-none focus:ring-2 focus:ring-[#2F7CEF]/20 transition-colors"
              />
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F7CEF] py-3.5 px-4 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/25 hover:bg-[#1E66D8] hover:shadow-lg hover:shadow-[#2F7CEF]/30 active:scale-[0.99] transition-all disabled:opacity-75"
            >
              <span>Get a QA Assessment</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Reassurance Footer */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 font-medium text-slate-600">
            <Lock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Strict NDA on Day 1</span>
          </div>
          <span>No spam • 24–48h Onboarding</span>
        </div>
      </div>
    </div>
  );
}
