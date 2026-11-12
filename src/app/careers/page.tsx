import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Careers — QA Engineers & Quality Advocates | Nishkama CodeLab",
  description:
    "Join Nishkama CodeLab's 18 open roles: QA Engineer (1–2 yrs), Senior QA Engineer (3–5 yrs), and Lead QA Engineer (9+ yrs) — all operating with a Quality Advocate mindset.",
};

interface Role {
  id: string;
  title: string;
  advocateTrack: string;
  openings: string;
  openingsCount: number;
  experience: string;
  meta: string;
  icon: typeof Terminal;
  summary: string;
  skills: string[];
  deliverables: string[];
  mailtoSubject: string;
}

const openRoles: Role[] = [
  {
    id: "qa-engineer",
    title: "QA Engineer",
    advocateTrack: "Quality Advocate Track",
    openings: "15 Openings",
    openingsCount: 15,
    experience: "1–2 Years Exp.",
    meta: "Full-Time • Remote / Hybrid",
    icon: Terminal,
    summary:
      "Own functional, exploratory, and regression cycles across web, mobile, and REST APIs — catching edge failures before users do.",
    skills: [
      "Functional QA",
      "Jira / Linear",
      "Postman",
      "DevTools",
      "SQL",
      "Git",
    ],
    deliverables: [
      "Test real-device flows beyond scripted happy paths",
      "Validate REST APIs and backend data with SQL",
      "File deterministic bug reports with video & HAR logs",
    ],
    mailtoSubject: "Application for QA Engineer (1-2 Years Experience)",
  },
  {
    id: "senior-qa-engineer",
    title: "Senior QA Engineer",
    advocateTrack: "Senior Quality Advocate",
    openings: "2 Openings",
    openingsCount: 2,
    experience: "3–5 Years Exp.",
    meta: "Full-Time • Remote / Hybrid",
    icon: ShieldCheck,
    summary:
      "Build Playwright E2E and API automation suites integrated into CI/CD while isolating complex edge defects across sprints.",
    skills: [
      "Playwright",
      "TypeScript / JS",
      "API Automation",
      "GitHub Actions",
      "Cross-Device QA",
      "SQL",
    ],
    deliverables: [
      "Architect reliable UI & API test suites in Playwright",
      "Wire automated regression gates into CI/CD pipelines",
      "Debug race conditions, auth state, and network drops",
    ],
    mailtoSubject: "Application for Senior QA Engineer (3-5 Years Experience)",
  },
  {
    id: "lead-qa-engineer",
    title: "Lead QA Engineer",
    advocateTrack: "Principal Quality Advocate",
    openings: "1 Opening",
    openingsCount: 1,
    experience: "9+ Years Exp.",
    meta: "Full-Time • Remote / Hybrid",
    icon: Compass,
    summary:
      "Define test architecture, mentor QA engineers, and deliver objective Go/No-Go release verdicts for product leadership.",
    skills: [
      "Test Architecture",
      "Playwright",
      "CI/CD & Docker",
      "k6 / JMeter",
      "Risk Audits",
      "Mentorship",
    ],
    deliverables: [
      "Design QA roadmaps, risk matrices, and coverage KPIs",
      "Mentor engineers on exploratory depth & reporting rigor",
      "Own pre-launch audits and production RCA sign-offs",
    ],
    mailtoSubject: "Application for Lead QA Engineer (9+ Years Experience)",
  },
];

export default function CareersPage() {
  const totalOpenings = openRoles.reduce((sum, r) => sum + r.openingsCount, 0);

  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(47,124,239,0.06),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0E2539] leading-[1.08]">
            Join Nishkama as a{" "}
            <span className="text-[#2F7CEF] whitespace-nowrap">Quality Advocate.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Standard engineering titles powered by a Quality Advocate mindset. Hiring{" "}
            <strong className="text-[#0E2539] font-bold">
              {totalOpenings} QA Engineers
            </strong>{" "}
            focused on real-world users, technical depth, and zero-fluff bug evidence.
          </p>
        </div>
      </section>

      {/* 2. OPEN ROLES (3-Column Compact Architecture) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(47,124,239,0.06),rgba(248,250,252,0))]"
          aria-hidden="true"
        />

        <div className="shell relative z-10">
          <div className="mb-10 pb-5 border-b border-slate-200/70">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
              OPEN ROLES • {totalOpenings} POSITIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
              Build your career in real-world QA.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7 items-stretch">
            {openRoles.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_28px_-10px_rgba(14,37,57,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2F7CEF]/45 hover:shadow-[0_22px_44px_-12px_rgba(47,124,239,0.16)]"
                >
                  {/* Top glowing electric-blue accent rail */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2F7CEF] via-[#60A5FA] to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Top Row: Icon + Vacancy Pill */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#2F7CEF] to-[#1D4ED8] text-white shadow-md shadow-[#2F7CEF]/25">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="inline-flex items-center rounded-full border border-blue-200/80 bg-[#EFF6FF] px-3 py-1 text-[11px] font-mono font-bold text-[#2F7CEF] whitespace-nowrap">
                        {role.openings}
                      </span>
                    </div>

                    {/* Authentic Title + Advocate Identity Track */}
                    <div className="mt-5">
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block">
                        {role.advocateTrack}
                      </span>
                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0E2539]">
                        {role.title}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500">
                        <span className="text-[#0E2539]">{role.experience}</span>
                        <span>•</span>
                        <span>{role.meta}</span>
                      </div>
                    </div>

                    {/* Crisp 2-line Role Summary */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 lg:min-h-[68px]">
                      {role.summary}
                    </p>

                    {/* Required Stack & Skills */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        REQUIRED SKILLS &amp; STACK
                      </span>
                      <div className="flex flex-wrap content-start gap-1.5 lg:min-h-[68px]">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3 Concise Ownership Bullets */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        WHAT YOU WILL OWN
                      </span>
                      <ul className="space-y-2 text-[13px] text-slate-600 leading-snug">
                        {role.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Direct Apply Button */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                        role.mailtoSubject
                      )}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E2539] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-[#2F7CEF] hover:shadow-md hover:shadow-[#2F7CEF]/20"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALLOUT BAND */}
      <section className="relative overflow-hidden bg-[#0E2539] text-white py-12 md:py-16 border-t border-[#2F7CEF]/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(47,124,239,0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1]">
            Ready to advocate for product quality?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Send your resume and one memorable production bug or UX edge case you caught to{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=QA Engineering Application`}
              className="text-white font-semibold underline underline-offset-4 hover:text-[#60A5FA] transition-colors"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
