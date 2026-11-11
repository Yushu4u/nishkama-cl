import React from "react";
import { Bug, Eye, CheckCircle2, type LucideIcon } from "lucide-react";

interface LensItem {
  id: string;
  number: string;
  eyebrow: string;
  pillar: string;
  title: string;
  description: string;
  mandate: string;
  icon: LucideIcon;
}

const lenses: LensItem[] = [
  {
    id: "bug-hunting",
    number: "01",
    eyebrow: "LENS 01",
    pillar: "RESILIENCE",
    title: "Bug Hunting",
    description:
      "Find defects, edge cases, unexpected behavior, and catastrophic failure points. We subject your application to rigorous stress, concurrency spikes, bad inputs, and interrupted states.",
    mandate: "Does the software operate correctly under stress?",
    icon: Bug,
  },
  {
    id: "dogfooding",
    number: "02",
    eyebrow: "LENS 02",
    pillar: "EXPERIENCE",
    title: "Dogfooding",
    description:
      "Walk through realistic customer journeys and experience the product as a real user. We step into the mindset of a customer trying to complete high-value work without developer shortcuts or insider knowledge.",
    mandate: "Does the product feel natural, intuitive, and frictionless?",
    icon: Eye,
  },
  {
    id: "reality-check",
    number: "03",
    eyebrow: "LENS 03",
    pillar: "READINESS",
    title: "Reality Check",
    description:
      "Compare product promises against real-world customer reality. We study real customer signals, telemetry drops, and user feedback to give founders and engineering leads an honest, unvarnished quality verdict.",
    mandate: "Is the product genuinely ready for paying customers?",
    icon: CheckCircle2,
  },
];

export function QualityLensesShowcase() {
  return (
    <section
      id="three-lenses"
      className="scroll-mt-24 relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] py-16 md:py-24"
    >
      {/* Subtle radial spotlight backdrop to elevate the 3 lens cards */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_65%,rgba(47,124,239,0.07),rgba(248,250,252,0))]"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#2F7CEF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            <span className="uppercase tracking-wider font-mono text-[11px]">THE CORE LENSES</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.1]">
            Three lenses that reveal{" "}
            <span className="text-[#2F7CEF]">the complete picture.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            Traditional testing focuses almost exclusively on technical verification.
            Quality Advocacy unites deep bug hunting, continuous dogfooding, and an
            uncompromising reality check.
          </p>
        </div>

        {/* Elevated 3-Column Focal Grid */}
        <div className="mt-10 md:mt-12 grid gap-6 lg:gap-8 lg:grid-cols-3 items-stretch">
          {lenses.map((lens) => {
            const Icon = lens.icon;
            return (
              <article
                key={lens.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 lg:p-9 min-h-[430px] shadow-[0_10px_30px_-10px_rgba(14,37,57,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2F7CEF]/45 hover:shadow-[0_24px_48px_-12px_rgba(47,124,239,0.18)]"
              >
                {/* Top glowing accent rail */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2F7CEF] via-[#60A5FA] to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Subtle concentric optical lens arcs watermark */}
                <svg
                  className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 text-[#2F7CEF]/[0.08] transition-all duration-500 group-hover:scale-105 group-hover:text-[#2F7CEF]/[0.14]"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                {/* Upper Zone: Metadata, Icon Emblem, Title & Summary */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-blue-200/80 bg-[#EFF6FF] px-3 py-1 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                      <span>{lens.eyebrow}</span>
                      <span className="text-blue-300">•</span>
                      <span className="text-[#0E2539]">{lens.pillar}</span>
                    </span>

                    <span
                      className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-200 leading-none select-none transition-colors duration-300 group-hover:text-[#2F7CEF]/25"
                      aria-hidden="true"
                    >
                      {lens.number}
                    </span>
                  </div>

                  {/* Solid Electric-Blue Focal Emblem */}
                  <div className="mt-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#2F7CEF] to-[#1D4ED8] text-white shadow-lg shadow-[#2F7CEF]/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-[1.7rem] font-extrabold tracking-tight text-[#0E2539] transition-colors duration-200 group-hover:text-[#2F7CEF]">
                    {lens.title}
                  </h3>

                  <p className="mt-3.5 text-[15px] leading-[1.7] text-slate-600 font-normal">
                    {lens.description}
                  </p>
                </div>

                {/* Lower Focal Zone: Midnight Navy Core Mandate Spotlight */}
                <div className="relative z-10 mt-8 overflow-hidden rounded-2xl bg-[#0E2539] p-5 sm:p-6 text-white shadow-md transition-all duration-300 group-hover:shadow-lg">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#2F7CEF]/30 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#93C5FD]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
                      <span>CORE MANDATE</span>
                    </div>
                    <p className="mt-2.5 text-sm sm:text-[15.5px] font-semibold leading-snug text-white">
                      &ldquo;{lens.mandate}&rdquo;
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
