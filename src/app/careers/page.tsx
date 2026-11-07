import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Careers — Join the Quality Advocates | Nishkama CodeLab",
  description:
    "We don't hire test runners; we hire Quality Advocates. Explore our 13 active openings: Quality Advocate (1–2 yrs), Senior Quality Advocate (2–3 yrs), and Lead Quality Advocate (9+ yrs).",
};

interface Role {
  id: string;
  advocacyTitle: string;
  openings: string;
  openingsCount: number;
  experience: string;
  type: string;
  location: string;
  icon: typeof ShieldCheck;
  highlight: string;
  description: string;
  advocacyFocus: string[];
  mailtoSubject: string;
}

const openAdvocacyRoles: Role[] = [
  {
    id: "quality-advocate",
    advocacyTitle: "Quality Advocate",
    openings: "10 Openings",
    openingsCount: 10,
    experience: "1–2 Years Experience",
    type: "Full-Time",
    location: "Remote",
    icon: ShieldCheck,
    highlight: "Core Real-World Verification",
    description:
      "Advocate for the end-user by conducting unscripted exploratory journeys, user flow stress-testing, and functional verification across physical iOS, Android, and web platforms. You will hunt the edge-case blind spots and confusing friction that automated scripts miss.",
    advocacyFocus: [
      "Rigorous functional & exploratory test execution on physical silicon",
      "Crafting crystal-clear repro steps backed by logs, traces, and video proofs",
      "Zero happy-path bias — relentlessly testing error states, network drops, and boundary inputs",
    ],
    mailtoSubject: "Application for Quality Advocate (1-2 Years Experience)",
  },
  {
    id: "senior-quality-advocate",
    advocacyTitle: "Senior Quality Advocate",
    openings: "2 Openings",
    openingsCount: 2,
    experience: "2–3 Years Experience",
    type: "Full-Time",
    location: "Remote",
    icon: Award,
    highlight: "Regression & Technical Telemetry",
    description:
      "Own critical user-journey regression suites, API contract telemetry, and cross-platform compatibility matrices. Working alongside engineering sprint teams, you will isolate complex race conditions, trace failing payloads, and safeguard system health across rapid release cycles.",
    advocacyFocus: [
      "Deep network payload inspection (DevTools, Postman, Proxyman) and schema verification",
      "Designing robust regression smoke suites integrated into CI/CD deployment pipelines",
      "Multi-device ecosystem sweeps across flagship smartphones, foldables, and spatial hardware",
    ],
    mailtoSubject: "Application for Senior Quality Advocate (2-3 Years Experience)",
  },
  {
    id: "lead-quality-advocate",
    advocacyTitle: "Lead Quality Advocate",
    openings: "1 Opening",
    openingsCount: 1,
    experience: "9+ Years Experience",
    type: "Full-Time",
    location: "Remote / Hybrid",
    icon: Users,
    highlight: "Quality Strategy & Governance",
    description:
      "Set the holistic quality standard across our client engagements, mentor our advocate community, and partner directly with engineering leaders and founders. You will define release readiness frameworks, conduct forensic quality audits, and serve as the objective go/no-go quality conscience.",
    advocacyFocus: [
      "Architecting enterprise quality frameworks, diagnostic scorecards, and coverage roadmaps",
      "Coaching and leveling up advocates in investigative testing and technical communications",
      "High-stakes go/no-go release governance and executive stakeholder advisories",
    ],
    mailtoSubject: "Application for Lead Quality Advocate (9+ Years Experience)",
  },
];

export default function CareersPage() {
  const totalOpenings = openAdvocacyRoles.reduce(
    (sum, r) => sum + r.openingsCount,
    0
  );

  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. HERO SECTION (Minimalist, respectful, non-bloated) */}
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="badge-pill">CAREERS AT NISHKAMA CODELAB</span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0E2539] leading-[1.08]">
            We don&apos;t hire test runners.
            <br />
            We hire <span className="text-[#2F7CEF]">Quality Advocates.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            At Nishkama CodeLab, we believe QA exists to defend the customer experience.
            We don&apos;t reduce our team to mechanical script operators — we empower you as
            an independent quality advocate. We are currently welcoming{" "}
            <strong className="text-[#0E2539] font-bold">
              {totalOpenings} Quality Advocates
            </strong>{" "}
            across three experience tiers.
          </p>

          {/* Quick Summary Pill Bar */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-[#EFF6FF] px-4 py-1.5 text-[#2F7CEF] font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              {totalOpenings} Active Openings
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              Full-Time Roles
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              Remote First
            </span>
          </div>
        </div>
      </section>

      {/* 2. THE 3 OPEN ADVOCACY TIERS (Clean, unbloated, high-dignity presentation) */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16">
        <div className="shell max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="badge-pill">CURRENT OPENINGS</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2539]">
              Find Your Place on the Team
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every opening carries the title and dignity of a Quality Advocate, aligned with your depth of craft.
            </p>
          </div>

          <div className="space-y-4">
            {openAdvocacyRoles.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:border-[#BFDBFE] hover:shadow-sm transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2F7CEF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E2539]">
                            {role.advocacyTitle}
                          </h3>
                          <span className="rounded-md bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-bold text-[#2F7CEF]">
                            {role.openings}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                          <span className="font-semibold text-slate-700">
                            {role.experience}
                          </span>
                          <span>•</span>
                          <span>{role.type}</span>
                          <span>•</span>
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                        role.mailtoSubject
                      )}`}
                      className="self-start shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#2F7CEF] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#1E66D8] transition-all"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600">
                    {role.description}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Advocacy Focus:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {role.advocacyFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALLOUT BAND (Matching About and Services) */}
      <section className="bg-[#0E2539] text-white py-12 md:py-16">
        <div className="shell text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            HOW TO APPLY
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1]">
            Ready to advocate for product quality?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Send your resume and a short note detailing a critical bug or user friction you caught before production to{" "}
            <span className="text-white font-semibold underline underline-offset-4">
              {siteConfig.email}
            </span>
            . We review applications continuously.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href={`mailto:${siteConfig.email}?subject=Quality Advocate General Application`}
              variant="primary"
              size="lg"
              withArrow
            >
              Email Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
