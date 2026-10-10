import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  ShieldCheck,
  Search,
  ListTodo,
  Terminal,
  Eye,
  FileCheck2,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/Button";
import { processStages, qaPrinciples } from "@/data/howWeWork";
import { engagementModels } from "@/data/engagementModels";

export const metadata: Metadata = {
  title: "How We Work — Collaborative, Evidence-Driven QA | Nishkama CodeLab",
  description:
    "Learn about Nishkama CodeLab's 6-stage testing process: Discover, Plan, Test, Experience, Report, and Improve. Built around product risk, reproducible bug reports, and clear release evidence.",
};

const stageIcons = [
  <Search key="1" className="h-5 w-5" />,
  <ListTodo key="2" className="h-5 w-5" />,
  <Terminal key="3" className="h-5 w-5" />,
  <Eye key="4" className="h-5 w-5" />,
  <FileCheck2 key="5" className="h-5 w-5" />,
  <RefreshCw key="6" className="h-5 w-5" />,
];

export default function HowWeWorkPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR PROCESS</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Simple process. Clear evidence. Actionable outcomes.
            </h1>
            <div className="mt-6 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Quality engineering should accelerate your delivery, not slow it down.
                We provide a disciplined, transparent testing workflow that fits into your sprint
                cadence and gives product leaders absolute release clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Talk to a QA Expert
                </Button>
                <Button href="#six-stages" variant="outline" size="lg">
                  View 6 Stages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE QUALITY PRINCIPLES */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">GUIDING STANDARDS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              How we approach every test cycle.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Seven non-negotiable principles that shape the rigor and clarity of our work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qaPrinciples.map((prin) => (
              <div
                key={prin.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2F7CEF]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {prin.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  {prin.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SIX STAGES IN DETAIL */}
      <section
        id="six-stages"
        className="border-b border-slate-200/80 bg-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">END-TO-END WORKFLOW</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              From first discovery to release sign-off.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Every stage has an unambiguous purpose, concrete activities, and tangible outputs.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {processStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-7 md:p-8 shadow-sm hover:border-[#2F7CEF]/40 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#EFF6FF] text-[#2F7CEF] border border-[#BFDBFE]">
                      {stageIcons[idx] || <Search className="h-5 w-5" />}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF]">
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                        {stage.name}
                      </h3>
                    </div>
                  </div>

                  <p className="font-semibold text-xs sm:text-sm text-slate-700 max-w-md">
                    {stage.headline}
                  </p>
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-12">
                  {/* Purpose */}
                  <div className="lg:col-span-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Purpose
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      {stage.purpose}
                    </p>
                  </div>

                  {/* Activities */}
                  <div className="lg:col-span-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Activities
                    </h4>
                    <ul className="space-y-2">
                      {stage.activities.map((act) => (
                        <li key={act} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outputs */}
                  <div className="lg:col-span-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Expected Outputs
                    </h4>
                    <div className="space-y-2">
                      {stage.outputs.map((out) => (
                        <div
                          key={out}
                          className="rounded-lg bg-white border border-slate-200/80 p-2.5 text-xs font-semibold text-slate-800"
                        >
                          {out}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT MODELS RECAP */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">ENGAGEMENT OPTIONS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              How we engage with your team.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Whether you need a two-week assessment sprint or a dedicated QA partner embedded in your team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((em) => (
              <div
                key={em.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-400">
                      {em.timeline}
                    </span>
                    <span className="text-xs font-bold text-[#2F7CEF]">{em.number}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {em.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {em.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button
                    href={`/contact?need=${em.id.replace("-qa", "").replace("-partner", "")}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    withArrow
                  >
                    Select Model
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALLOUT BANNER */}
      <section className="bg-[#0E2539] text-white py-16 md:py-24 border-t border-[#2F7CEF]/20">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            READY TO PARTNER?
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Let&apos;s build release confidence together.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a walkthrough with our testing team. We&apos;ll discuss your product
            architecture and design an engagement that delivers immediate results.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Plan Your QA Engagement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
