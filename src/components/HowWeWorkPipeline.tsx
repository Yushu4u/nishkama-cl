"use client";

import React from "react";
import {
  Compass,
  FileCheck,
  Zap,
  Eye,
  FileText,
  Repeat,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Step {
  step: string;
  name: string;
  action: string;
  description: string;
  deliverable: string;
  icon: typeof Compass;
}

const steps: Step[] = [
  {
    step: "01",
    name: "Discover",
    action: "ALIGN",
    description: "Understand your product architecture, users, release cycle, environments, and core quality concerns.",
    deliverable: "Quality Topology Map",
    icon: Compass,
  },
  {
    step: "02",
    name: "Plan",
    action: "SCOPE",
    description: "Define scope, technical priorities, risk boundaries, test matrix approach, and objective success criteria.",
    deliverable: "Risk-Based Test Matrix",
    icon: FileCheck,
  },
  {
    step: "03",
    name: "Test",
    action: "EXECUTE",
    description: "Execute deep structured regression and unscripted exploratory testing focused on where code breaks under pressure.",
    deliverable: "Exploratory Test Execution",
    icon: Zap,
  },
  {
    step: "04",
    name: "Experience",
    action: "DOGFOOD",
    description: "Validate important customer journeys and friction points from the unbiased vantage point of an actual end user.",
    deliverable: "Real-User Journey Audit",
    icon: Eye,
  },
  {
    step: "05",
    name: "Report",
    action: "EVIDENCE",
    description: "Deliver reproducible findings, video traces, network logs, severity ratings, and actionable engineering impact.",
    deliverable: "Defect Dossier + HAR Traces",
    icon: FileText,
  },
  {
    step: "06",
    name: "Improve",
    action: "VERIFY",
    description: "Re-test developer fixes, verify zero new regressions, and help the team move toward a confident production release.",
    deliverable: "Release Go/No-Go Verdict",
    icon: Repeat,
  },
];

export function HowWeWorkPipeline() {
  return (
    <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="shell">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-bold text-[#2F7CEF] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
            <span className="uppercase tracking-wider font-mono text-[11px]">OUR CADENCE • 6 STAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.1]">
            Simple process. Clear evidence. Actionable outcomes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            An independent, structured cadence designed to integrate seamlessly into your existing development and release cycle.
          </p>
        </div>

        {/* The Visual Horizontal Stepper Pipeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="group relative rounded-3xl border border-slate-200/90 bg-white p-7 flex flex-col justify-between hover:border-[#BFDBFE] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-[#2F7CEF] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      STAGE {st.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {st.action}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0E2539] group-hover:bg-[#2F7CEF] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0E2539]">
                      {st.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                {/* Tangible Deliverable Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" />
                    <span className="truncate">{st.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
