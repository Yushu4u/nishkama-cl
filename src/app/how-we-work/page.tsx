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
  title: "How We Work — Collaborative, Evidence-Driven QA",
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
    <div>
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow">Our Process</p>
          <h1 className="mt-5 max-w-[20ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-[4.25rem] text-[#282531]">
            Simple process. Clear evidence. Actionable outcomes.
          </h1>
          <div className="mt-6 max-w-2xl sm:mt-8">
            <p className="text-base leading-relaxed text-[#706B78] sm:text-xl">
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
      </section>

      {/* 2. CORE QUALITY PRINCIPLES */}
      <section className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Guiding Standards</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              How we approach every test cycle.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Seven non-negotiable principles that shape the rigor and clarity of our work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qaPrinciples.map((prin) => (
              <div
                key={prin.title}
                className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 transition-smooth hover:border-[#282531]/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4 text-[#282531]" />
                  <h3 className="font-display text-base font-semibold text-[#282531]">
                    {prin.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-[#706B78]">
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
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">End-to-End Workflow</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              From first discovery to release sign-off.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Every stage has an unambiguous purpose, concrete activities, and tangible outputs.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {processStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8 md:p-10 shadow-sm transition-smooth hover:border-[#282531]/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC]">
                      {stageIcons[idx] || <Search className="h-5 w-5" />}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#706B78]">
                        STAGE {stage.step}
                      </span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-[#282531]">
                        {stage.name}
                      </h3>
                    </div>
                  </div>

                  <p className="font-medium text-xs sm:text-sm text-[#282531] max-w-md">
                    {stage.headline}
                  </p>
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-12">
                  {/* Purpose */}
                  <div className="lg:col-span-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706B78] mb-2">
                      Purpose
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#282531]">
                      {stage.purpose}
                    </p>
                  </div>

                  {/* Activities */}
                  <div className="lg:col-span-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706B78] mb-3">
                      Core Activities
                    </h4>
                    <ul className="space-y-2">
                      {stage.activities.map((act) => (
                        <li key={act} className="flex items-start gap-2 text-xs text-[#706B78]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#282531] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outputs */}
                  <div className="lg:col-span-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#706B78] mb-3">
                      Expected Outputs
                    </h4>
                    <div className="space-y-2">
                      {stage.outputs.map((out) => (
                        <div
                          key={out}
                          className="rounded-lg bg-[#FAF8F5] border border-[#E8E4DC] p-2.5 text-xs font-medium text-[#282531]"
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
      <section className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Engagement Options</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              How we engage with your team.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Whether you need a two-week assessment sprint or a dedicated QA partner embedded in your team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((em) => (
              <div
                key={em.id}
                className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E8E4DC]">
                    <span className="font-display text-xs font-semibold text-[#706B78]">
                      {em.timeline}
                    </span>
                    <span className="text-xs font-bold text-[#282531]">{em.number}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#282531]">
                    {em.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#706B78]">
                    {em.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
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
      <section className="bg-[#282531] py-16 md:py-24 text-[#FAF8F5]">
        <div className="shell text-center max-w-3xl mx-auto">
          <p className="eyebrow text-[#FAF8F5]/60">Ready to Partner?</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl text-[#FAF8F5]">
            Let&apos;s build release confidence together.
          </h2>
          <p className="mt-5 text-base text-[#FAF8F5]/70 leading-relaxed sm:text-lg">
            Schedule a walkthrough with our testing team. We&apos;ll discuss your product
            architecture and design an engagement that delivers immediate results.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="dark" size="lg" withArrow>
              Plan Your QA Engagement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
