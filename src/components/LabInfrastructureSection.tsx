"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Cpu,
  Terminal,
  Glasses,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Monitor,
  Activity,
  Layers,
} from "lucide-react";

interface LabView {
  id: "device-lab" | "telemetry";
  tabLabel: string;
  imageSrc: string;
  imageAlt: string;
  telemetryTag: string;
  badges: string[];
}

const views: LabView[] = [
  {
    id: "device-lab",
    tabLabel: "Physical Device Matrix",
    imageSrc: "/images/qa-device-lab.jpg",
    imageAlt:
      "Nishkama CodeLab physical device testing bench with iPhone 15 Pro, Android flagship, iPad Pro, and Apple Vision Pro headset running active test telemetry",
    telemetryTag: "PHYSICAL LAB MATRIX • REAL SILICON",
    badges: ["iOS 17+ & Android 14+", "iPadOS & Tablet Matrix", "VisionOS & Meta Quest 3"],
  },
  {
    id: "telemetry",
    tabLabel: "Root-Cause Telemetry",
    imageSrc: "/images/qa-telemetry-workstation.jpg",
    imageAlt:
      "Nishkama CodeLab dual-monitor QA engineering workstation with live e-commerce test app, API request inspector, and terminal error logs",
    telemetryTag: "ROOT-CAUSE WORKSTATION • API LOG INSPECTOR",
    badges: ["Live Network Payload Tracing", "Async Race Condition Catch", "JSON Schema Drift"],
  },
];

export function LabInfrastructureSection() {
  const [activeViewId, setActiveViewId] = useState<"device-lab" | "telemetry">("device-lab");

  const currentView = views.find((v) => v.id === activeViewId) || views[0];

  return (
    <section className="py-20 border-b border-slate-200/80 bg-[#FAFBFD] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#2F7CEF]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-bold text-[#2F7CEF] mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            <span className="uppercase tracking-wider font-mono text-[11px]">
              LAB INFRASTRUCTURE &amp; PHYSICAL DEVICE MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.12]">
            Real Silicon. Real Network Drops.{" "}
            <span className="text-[#2F7CEF]">Zero Emulation Shortcuts.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Automated simulators miss touch response latency, low-memory crashes, thermal throttling, and spatial tracking drift. We run your release candidates on dedicated physical hardware under enterprise NDA.
          </p>
        </div>

        {/* 2-Column Main Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Visual Showcase (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* View Switcher Pills */}
            <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs w-fit">
              {views.map((v) => {
                const isActive = v.id === activeViewId;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveViewId(v.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#0E2539] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {v.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Framed Editorial Photograph Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-[#0E2539] shadow-xl shadow-slate-200/60 aspect-[16/10] group">
              <Image
                src={currentView.imageSrc}
                alt={currentView.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />

              {/* Gradient Scrim for Overlaid Telemetry */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0E2539]/90 via-[#0E2539]/20 to-[#0E2539]/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Header Badge Overlay */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-[11px] font-mono">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0E2539]/80 backdrop-blur-md border border-white/20 px-3 py-1 text-white shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-semibold">{currentView.telemetryTag}</span>
                </div>
                <span className="hidden sm:inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-slate-200 text-[10px]">
                  STRICT NDA FACILITY
                </span>
              </div>

              {/* Bottom Feature Badges Overlay */}
              <div className="absolute bottom-3.5 inset-x-3.5">
                <div className="flex flex-wrap gap-2">
                  {currentView.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#0E2539]/85 backdrop-blur-md border border-white/15 px-2.5 py-1 text-xs font-semibold text-white shadow-sm"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Footnote / Legend */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 px-1 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Isolated hardware sandboxes wiped between client release runs</span>
              </span>
              <span className="text-slate-400">Zero Emulation Bias</span>
            </div>
          </div>

          {/* Right Column: 3 Tangible Engineering Capabilities (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Capability 1: Physical Device Matrix */}
            <div
              onClick={() => setActiveViewId("device-lab")}
              className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                activeViewId === "device-lab"
                  ? "bg-white border-[#2F7CEF] shadow-md shadow-[#2F7CEF]/5 ring-1 ring-[#2F7CEF]"
                  : "bg-white/70 border-slate-200/90 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2F7CEF] border border-blue-100">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    CAPABILITY 01
                  </span>
                  <h3 className="text-base font-bold text-[#0E2539]">
                    Physical Device Matrix
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real iPhones, iPads, and Android flagships tested on actual LTE/5G and degraded Wi-Fi. We uncover real touch-target misses, keyboard obstruction, and background state crashes that synthetic emulators miss.
              </p>
            </div>

            {/* Capability 2: Root-Cause Telemetry Workstation */}
            <div
              onClick={() => setActiveViewId("telemetry")}
              className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                activeViewId === "telemetry"
                  ? "bg-white border-[#2F7CEF] shadow-md shadow-[#2F7CEF]/5 ring-1 ring-[#2F7CEF]"
                  : "bg-white/70 border-slate-200/90 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2F7CEF] border border-blue-100">
                  <Terminal className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    CAPABILITY 02
                  </span>
                  <h3 className="text-base font-bold text-[#0E2539]">
                    Root-Cause Engineering Telemetry
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We don&apos;t simply file &ldquo;Button doesn&apos;t click&rdquo; reports. Our dual-monitor workstations inspect real-time network payloads, status codes, and console logs to isolate the exact failing API contract.
              </p>
            </div>

            {/* Capability 3: Spatial & XR Testing Rig */}
            <div
              onClick={() => setActiveViewId("device-lab")}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white/70 hover:bg-white hover:border-slate-300 transition-all text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2F7CEF] border border-blue-100">
                  <Glasses className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    CAPABILITY 03
                  </span>
                  <h3 className="text-base font-bold text-[#0E2539]">
                    Spatial &amp; XR Rig
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated testing rigs for Apple Vision Pro and Meta Quest. We evaluate 6DoF hand-tracking latency, field-of-view comfort, spatial audio sync, and frame-rate stability over long sessions.
              </p>
            </div>

            {/* Section CTA */}
            <div className="pt-2">
              <Link
                href="/contact?need=assessment"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#0E2539] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#1E66D8] transition-all"
              >
                <span>Request a Lab Assessment for Your Build</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
