import React from "react";
import { Clock, ShieldAlert, MonitorCheck, Compass } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "48h",
    label: "Rapid Audit Kickoff",
    subtext: "From NDA execution to first triage report",
  },
  {
    icon: ShieldAlert,
    value: "99.2%",
    label: "Defect Interception",
    subtext: "Pre-release escape rate reduction",
  },
  {
    icon: MonitorCheck,
    value: "100+",
    label: "Device & OS Matrices",
    subtext: "Validated on physical hardware",
  },
  {
    icon: Compass,
    value: "0%",
    label: "Happy-Path Bias",
    subtext: "100% independent end-user advocacy",
  },
];

export function MetricsBar() {
  return (
    <section
      aria-label="Key Performance Indicators"
      className="border-b border-slate-200/80 bg-white py-10 md:py-12"
    >
      <div className="shell">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-[#2F7CEF]/40 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="h-8 w-8 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2F7CEF]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    {m.value}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-slate-900">{m.label}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-normal">{m.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
