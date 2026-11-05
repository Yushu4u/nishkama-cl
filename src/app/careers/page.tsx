import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  Glasses,
  Terminal,
  Search,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Users,
  Sparkles,
  MapPin,
  Clock,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Careers | Nishkama CodeLab — Join the Quality Advocates",
  description:
    "Explore career opportunities at Nishkama CodeLab. We are hiring senior QA engineers, exploratory bug hunters, and spatial computing quality advocates.",
};

const openRoles = [
  {
    id: "senior-qa-spatial-mobile",
    title: "Senior QA Engineer — Spatial & Mobile",
    team: "Hardware Lab & Mobile Testing",
    location: "Remote / Hybrid Lab",
    type: "Full-Time",
    experience: "4+ Years QA Experience",
    description:
      "Lead multi-device quality verification across Apple Vision Pro, Meta Quest, iOS, and flagship Android ecosystems on real physical silicon.",
    responsibilities: [
      "Design unscripted exploratory test charters for 6DoF spatial gestures, hand tracking, and spatial audio sync.",
      "Execute deep compatibility matrices across device fragmentation, OS upgrades, and network interruption modes.",
      "Isolate frame-rate jitter, thermal throttling, and battery drain using native profiling instruments.",
      "Work directly with client founders and engineering leads to file root-cause defect reports.",
    ],
    requirements: [
      "Demonstrated experience testing XR headsets (VisionOS, Quest) and native iOS/Android applications on physical devices.",
      "Deep understanding of mobile OS lifecycle, background state handling, push sync, and offline persistence.",
      "Relentless edge-case mindset with zero tolerance for superficial happy-path testing.",
    ],
  },
  {
    id: "technical-qa-api-web",
    title: "Technical QA Specialist — SaaS & APIs",
    team: "Web & Backend Verification",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years QA Experience",
    description:
      "Inspect API contract integrity, multi-tenant RBAC boundaries, and client state synchronizations across complex Next.js and React SaaS platforms.",
    responsibilities: [
      "Perform deep network telemetry inspection using browser DevTools, Charles/Proxyman, and Postman.",
      "Uncover async race conditions, JSON schema drifts, state hydration mismatches, and webhook failures.",
      "Validate complex enterprise permission matrices, invitation flows, and seat licensing lifecycle edges.",
      "Synthesize clear, reproducible engineering bug reports with network payloads and console logs.",
    ],
    requirements: [
      "Hands-on expertise testing modern single-page apps (Next.js, React) and distributed REST/GraphQL APIs.",
      "Strong debugging literacy (inspecting HTTP status codes, payload structures, session cookies, and JWTs).",
      "High communication standards — ability to write crisp, reproduction-ready bug reports.",
    ],
  },
  {
    id: "quality-advocate-exploratory",
    title: "Product Quality Advocate — UX & Usability",
    team: "Quality Advocacy & Experience",
    location: "Remote",
    type: "Full-Time / Contract",
    experience: "3+ Years Product / QA",
    description:
      "Bridge technical testing with real customer behavior. Experience what real users experience and surface friction, confusion, and drop-off risks before launch.",
    responsibilities: [
      "Conduct non-linear exploratory user journeys that challenge assumed user flows and happy paths.",
      "Identify microcopy ambiguity, unhelpful error messages, broken empty states, and cognitive friction.",
      "Provide actionable advocacy synthesis on whether a feature is genuinely ready for paying customers.",
      "Collaborate with design and product teams to translate quality findings into usability enhancements.",
    ],
    requirements: [
      "Proven track record in exploratory testing, user research, or product QA.",
      "Empathy-first thinking combined with sharp analytical rigor.",
      "Ability to articulate not just *what* failed, but *why* it degrades the customer experience and business trust.",
    ],
  },
];

const perks = [
  {
    title: "Real Silicon, Zero Emulation",
    desc: "Work with real Apple Vision Pro, Meta Quest, flagship iPhones, Pixels, and iPads in dedicated test sandboxes.",
    icon: Smartphone,
  },
  {
    title: "Direct Founder & Team Influence",
    desc: "Your quality insights directly impact release decisions at high-growth tech companies and funded startups.",
    icon: Users,
  },
  {
    title: "Zero Check-the-Box Culture",
    desc: "We don't celebrate running 500 green tests that find nothing. We celebrate finding the catastrophic blind spots.",
    icon: ShieldCheck,
  },
  {
    title: "Deep Technical Telemetry",
    desc: "Elevate your craft beyond surface manual testing into root-cause API tracing, payload inspection, and performance profiling.",
    icon: Terminal,
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-24">
        {/* Ambient background mesh */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[500px] -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,239,0.08),rgba(255,255,255,0))]"
          aria-hidden="true"
        />

        <div className="shell text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold text-[#2F7CEF] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              CAREERS AT NISHKAMA CODELAB
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0E2539] leading-[1.08]">
            Quality Advocates{" "}
            <span className="text-[#2F7CEF]">Wanted.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t check boxes or run mindless scripts. We hunt edge cases, experience what users experience, and protect product teams from blind-spot catastrophes. If you love finding what others miss, you belong here.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href="#open-roles"
              className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg transition-all"
            >
              Explore Open Roles ↓
            </a>
            <Link
              href="/about"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
            >
              Our Philosophy &amp; Mission
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY NCL / CULTURE */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="shell">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
              WHY BUILD YOUR CRAFT WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              A Culture Built Around True Craftsmanship.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Most QA roles reduce engineers to test script maintenance. At NCL, we treat Quality as an investigative discipline and an advocate for human users.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFBFD] p-6 flex flex-col justify-between hover:border-[#2F7CEF]/50 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2F7CEF] border border-blue-100 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0E2539]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OPEN ROLES */}
      <section id="open-roles" className="py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
                OPEN OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2539]">
                Current Openings
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              We review applications on a rolling basis. All roles require strong problem-solving instinct and excellent technical communication.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:border-[#2F7CEF]/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="rounded-md bg-blue-50 border border-blue-100 text-[#2F7CEF] px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider">
                        {role.team}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500 text-xs font-medium">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500 text-xs font-medium">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {role.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E2539]">
                      {role.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${siteConfig.email}?subject=Application for ${encodeURIComponent(
                      role.title
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F7CEF] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#1E66D8] transition-all shrink-0"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-6 grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      What You&apos;ll Do:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {role.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      What You Bring:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {role.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GENERAL APPLICATION CALLOUT */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="shell">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#0B1E30] to-[#0E2539] p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="max-w-xl relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block mb-2">
                OPEN TALENT NETWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Don&apos;t see an exact match?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you are a passionate QA investigator, automation architect, or spatial product tester, tell us about yourself. Send us your resume and a short note on a catastrophic bug you discovered before launch.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href={`mailto:${siteConfig.email}?subject=General Application / Talent Network`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0E2539] hover:bg-slate-100 transition-all shadow-md"
              >
                <Mail className="h-4 w-4 text-[#2F7CEF]" />
                <span>Email {siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
