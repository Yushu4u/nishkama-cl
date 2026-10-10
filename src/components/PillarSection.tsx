import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Eye, Users } from "lucide-react";
import { pillars } from "@/data/pillars";

const pillarIcons = {
  "qa-testing": Shield,
  "product-experience": Eye,
  "quality-advocacy": Users,
};

export function PillarSection() {
  return (
    <section
      id="pillars"
      aria-label="Three-Pillar Quality Architecture"
      className="border-b border-slate-200/80 bg-white py-16 md:py-24"
    >
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="badge-pill">OUR CORE ARCHITECTURE</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E2539] leading-[1.1]">
            Three Ways We Advocate for Your Product.
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
            From discovering deep technical regressions to understanding real customer frustration,
            NCL approaches software quality from three interconnected vantage points. We don&apos;t just test code &mdash; we advocate for the people who rely on it.
          </p>
        </div>

        {/* Visual Connector Breadcrumb */}
        <div className="mt-8 mb-10 hidden md:flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border border-slate-200 bg-slate-50 rounded-full px-5 py-2.5 w-max">
          <span className="text-[#0E2539] font-bold">Connected Quality Loop:</span>
          <span className="text-[#2F7CEF] font-bold">1. QA Testing</span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-slate-700 font-bold">2. Product Experience</span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-[#2F7CEF] font-bold bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
            3. Quality Advocacy
          </span>
        </div>

        {/* The 3 Connected Pillars Grid */}
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[pillar.id as keyof typeof pillarIcons] || Shield;
            const isHighlighted = pillar.id === "quality-advocacy";

            return (
              <div
                key={pillar.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-8 transition-all hover:shadow-md ${
                  isHighlighted
                    ? "border-[#BFDBFE] bg-gradient-to-b from-[#EFF6FF]/60 via-white to-white shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Pillar Top Header */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2F7CEF]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                        PILLAR {pillar.number}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isHighlighted
                          ? "bg-[#2F7CEF] text-white"
                          : "bg-slate-100 text-[#0E2539]"
                      }`}
                    >
                      {pillar.action}
                    </span>
                  </div>

                  {/* Pillar Title & Question */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-[#0E2539]">
                      {pillar.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold italic text-[#2F7CEF]">
                      &ldquo;{pillar.question}&rdquo;
                    </p>
                  </div>

                  {/* Message */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {pillar.message}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-xs uppercase tracking-wider font-bold text-slate-700 mb-3">
                      Core Activities
                    </p>
                    <ul className="space-y-2">
                      {pillar.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-xs text-slate-600"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-[#2F7CEF] mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href={pillar.href}
                    className="group/link inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#0E2539] transition-colors hover:text-[#2F7CEF]"
                  >
                    <span>Explore {pillar.name}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover/link:text-[#2F7CEF] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                {/* Desktop arrow linking step 1->2 and 2->3 */}
                {idx < 2 && (
                  <div
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-sm pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
