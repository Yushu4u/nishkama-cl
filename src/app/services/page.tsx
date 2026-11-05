import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Glasses,
  CheckSquare,
  Compass,
  ShieldCheck,
  Monitor,
  UserCheck,
  Workflow,
  Rocket,
  Search,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Globe,
  Cpu,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";
import { detailedServices } from "@/data/services";

export const metadata: Metadata = {
  title: "QA Services & Testing Disciplines | Nishkama CodeLab",
  description:
    "Explore Nishkama CodeLab's engineering-grade QA services: XR & spatial testing, functional testing, exploratory QA, regression testing, compatibility, usability, E2E validation, release readiness, and quality audits.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "xr-testing": <Glasses className="h-5 w-5 text-[#2F7CEF]" />,
  "functional-testing": <CheckSquare className="h-5 w-5 text-[#2F7CEF]" />,
  "exploratory-testing": <Compass className="h-5 w-5 text-[#2F7CEF]" />,
  "regression-testing": <ShieldCheck className="h-5 w-5 text-[#2F7CEF]" />,
  "compatibility-testing": <Monitor className="h-5 w-5 text-[#2F7CEF]" />,
  "usability-testing": <UserCheck className="h-5 w-5 text-[#2F7CEF]" />,
  "e2e-testing": <Workflow className="h-5 w-5 text-[#2F7CEF]" />,
  "release-validation": <Rocket className="h-5 w-5 text-[#2F7CEF]" />,
  "quality-audit": <Search className="h-5 w-5 text-[#2F7CEF]" />,
};

const serviceCategories: Record<string, string> = {
  "xr-testing": "SPATIAL & IMMERSIVE",
  "functional-testing": "CORE LOGIC",
  "exploratory-testing": "DEFECT HUNTING",
  "regression-testing": "RELEASE SAFETY",
  "compatibility-testing": "MULTI-DEVICE",
  "usability-testing": "USER ADVOCACY",
  "e2e-testing": "DATA & WORKFLOWS",
  "release-validation": "PRE-FLIGHT GATE",
  "quality-audit": "STRATEGIC AUDIT",
};

const platforms = [
  {
    title: "Spatial & XR Computing",
    icon: <Glasses className="h-5 w-5 text-[#2F7CEF]" />,
    tag: "visionOS & Meta Quest",
    desc: "Apple Vision Pro, Meta Quest 3/Pro, WebXR, and 3D spatial engines (Unity/Unreal).",
    checks: ["Motion-to-photon latency", "Hand & eye tracking debounce", "Spatial UI comfort", "Room boundary persistence"],
  },
  {
    title: "Mobile Applications",
    icon: <Smartphone className="h-5 w-5 text-[#2F7CEF]" />,
    tag: "iOS & Android",
    desc: "Native Swift/Kotlin, React Native, and Flutter across physical flagship and legacy hardware.",
    checks: ["Device fragmentation", "Battery & thermal draw", "Background app lifecycle", "Offline store-and-forward"],
  },
  {
    title: "Modern Web Applications",
    icon: <Globe className="h-5 w-5 text-[#2F7CEF]" />,
    tag: "Next.js & SPAs",
    desc: "Full browser engine matrix testing across Safari WebKit, Chrome Chromium, and Firefox Gecko.",
    checks: ["Engine rendering parity", "State persistence", "DOM hydration & performance", "Responsive viewports"],
  },
  {
    title: "Wearables & Companion Hardware",
    icon: <Cpu className="h-5 w-5 text-[#2F7CEF]" />,
    tag: "BLE & Sensors",
    desc: "Smart glasses, companion wearables, health sensors, and Bluetooth peripheral synchronization.",
    checks: ["BLE handshake resilience", "OTA firmware verification", "Sensor telemetry accuracy", "Companion app syncing"],
  },
  {
    title: "APIs & Connected Backends",
    icon: <Server className="h-5 w-5 text-[#2F7CEF]" />,
    tag: "REST, GraphQL, WebSockets",
    desc: "End-to-end data contracts, third-party webhooks, authentication flows, and queue processing.",
    checks: ["Webhook delivery & retry", "Schema error contracts", "Latency under concurrency", "Database state integrity"],
  },
];

const lifecycleSteps = [
  {
    number: "01",
    title: "Scope & Risk Modeling",
    desc: "We analyze PRDs, architectural diagrams, high-stakes customer paths, and defect history before writing test plans.",
  },
  {
    number: "02",
    title: "Multi-Environment Sweeps",
    desc: "Execution on genuine devices, browsers, and real-world network conditions—pushing past happy paths into negative edge cases.",
  },
  {
    number: "03",
    title: "Evidence-Backed Bug Logging",
    desc: "Reproduction steps, video proof, console traces, network payloads, and severity classifications filed directly into your tracker.",
  },
  {
    number: "04",
    title: "Release Readiness Scorecard",
    desc: "A definitive go/no-go verdict with open blocker ledgers, resolved verification, and residual risk documentation.",
  },
];

const engagementModels = [
  {
    title: "Pre-Launch & MVP Readiness",
    badge: "NEW LAUNCHES",
    desc: "For teams preparing to launch new web, mobile, or XR products requiring full-surface defect sweeps and a decisive release verdict.",
    deliverables: ["Full functional & compatibility sweep", "Critical path user flow validation", "Go/no-go executive scorecard"],
    href: "/contact?need=Pre-Launch%20Assessment",
  },
  {
    title: "Continuous Sprint Validation",
    badge: "ACTIVE SPRINTS",
    desc: "For fast-moving engineering teams shipping weekly updates who need fast regression safety nets and deep exploratory edge-case hunting.",
    deliverables: ["Weekly regression passes", "Targeted exploratory test charters", "Same-day fix retesting & verification"],
    href: "/contact?need=Continuous%20Sprint%20QA",
  },
  {
    title: "Quality Audit & Diagnostic",
    badge: "1–2 WEEK SPRINT",
    desc: "For established applications experiencing user churn, regression leaks, or teams seeking an objective architectural review of test coverage.",
    deliverables: ["Defect escape pattern audit", "Test coverage gap mapping", "90-day actionable quality roadmap"],
    href: "/contact?need=Quality%20Audit",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-[#0E2539]">
      {/* 1. HERO SECTION (Tests Assured Signature Minimalist Centered Layout) */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <div className="shell text-center max-w-4xl mx-auto">
          {/* Centered Eyebrow */}
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-3">
            QA SERVICES &amp; TESTING SOLUTIONS
          </span>

          {/* Centered Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0E2539] leading-[1.08]">
            Engineering-Grade QA Across{" "}
            <span className="text-[#2F7CEF] whitespace-nowrap">Web, Mobile &amp; Spatial</span> Platforms.
          </h1>

          {/* Centered Subhead */}
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Independent verification built to eliminate defect risk, uncover edge cases, and validate real-world user journeys before production cutover.
          </p>

          {/* Action Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              href="/contact?need=consultation"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Schedule QA Consultation
            </Link>
            <Link
              href="#disciplines"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Explore 9 Disciplines
            </Link>
            <Link
              href="#platforms"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Platform Coverage
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-500">
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
      </section>

      {/* 2. PLATFORM & HARDWARE COVERAGE (Tests Assured Style) */}
      <section id="platforms" className="py-16 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              COVERAGE SPECTRUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Tested Across Genuine Hardware &amp; Runtimes
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              From Apple Vision Pro and Meta Quest to high-traffic web APIs, we execute against genuine devices, operating systems, and network conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#2F7CEF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E2539]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                    {p.checks.map((check) => (
                      <div key={check} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF] shrink-0" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Consultation Highlight Card */}
            <div className="rounded-2xl border border-dashed border-[#2F7CEF]/50 bg-[#EFF6FF]/40 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF] bg-white border border-[#BFDBFE] px-2.5 py-1 rounded-md inline-block mb-4">
                  CUSTOM SCOPING
                </span>
                <h3 className="text-lg font-bold text-[#0E2539]">
                  Need a Specialized Testing Matrix?
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  We configure bespoke test environments tailored to your analytics—targeting exact OS versions, device tiers, and regional network constraints.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#BFDBFE]/60">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1.5"
                >
                  <span>Build custom device matrix</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE QA DISCIPLINES GRID (Minimalistic, Accurate, Scan-Friendly) */}
      <section id="disciplines" className="py-16 sm:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              CORE QA DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Nine Specialized Testing Disciplines
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Granular, independent quality engineering designed to catch defects before your users do. Click any discipline to inspect detailed workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#2F7CEF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Number + Category */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center shrink-0 group-hover:bg-[#2F7CEF] transition-colors">
                      <span className="group-hover:text-white transition-colors">
                        {serviceIcons[svc.slug] || <CheckSquare className="h-5 w-5 text-[#2F7CEF]" />}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {serviceCategories[svc.slug] || "QA"}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {svc.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Concise Summary */}
                  <h3 className="text-lg font-bold text-[#0E2539] group-hover:text-[#2F7CEF] transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {svc.shortDescription}
                  </p>

                  {/* Key Highlights / Checks */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                    {svc.whatWeCheck.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 leading-tight">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF] mt-1 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link Arrow */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2F7CEF]">
                  <span>Explore Discipline</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4-STAGE QA DELIVERY LIFECYCLE (Minimalistic Process) */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-slate-50/50">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              HOW WE DELIVER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Predictable QA Architecture from Scope to Sign-Off
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every engagement follows our structured verification standard—giving your engineering team clear, reproducible bug reports without management overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="h-9 w-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-mono font-bold text-[#2F7CEF] text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-[#0E2539]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT PACKAGES BY PRODUCT STAGE */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Flexible QA Engagements Tailored to Your Release Cycle
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Whether you need rapid pre-launch certification, ongoing sprint regression coverage, or an objective quality audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm hover:shadow-lg hover:border-[#2F7CEF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded-md inline-block mb-3">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#0E2539]">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link
                    href={pkg.href}
                    className="rounded-xl border border-slate-300 bg-white hover:border-[#2F7CEF] hover:text-[#2F7CEF] px-5 py-2.5 text-xs font-bold text-slate-700 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request this model</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MINIMALIST BOTTOM CTA (Tests Assured Navy Card) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="shell">
          <div className="rounded-3xl bg-[#0E2539] text-white p-10 sm:p-16 text-center max-w-4xl mx-auto border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-3">
                READY FOR STRONGER COVERAGE?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Put your software through an independent QA review.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Connect with our QA engineering team to review release milestones, scope target device matrices, and uncover release risks before your users do.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
                <Link
                  href="/contact?need=consultation"
                  className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  Schedule QA Consultation
                </Link>
                <Link
                  href="/quality-advocacy"
                  className="rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-3.5 text-sm font-bold text-white hover:bg-slate-800 hover:border-slate-600 transition-all shadow-sm"
                >
                  Explore Quality Advocacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
