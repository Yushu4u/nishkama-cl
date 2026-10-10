import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { pillars } from "@/data/pillars";

export function PillarSection() {
  return (
    <section
      id="pillars"
      aria-label="Three-Pillar Quality Architecture"
      className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28 transition-smooth"
    >
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Our Core Architecture</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
            Three Ways We Advocate for Your Product.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
            From finding technical defects to understanding real customer frustration,
            NCL looks at product quality from multiple angles. We don’t just test software — we advocate for the people who rely on it.
          </p>
        </div>

        {/* Visual Connector Breadcrumb (QA TESTING → PRODUCT EXPERIENCE → QUALITY ADVOCACY) */}
        <div className="mt-10 mb-8 hidden md:flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#706B78] border border-[#E8E4DC] bg-[#FAF8F5] rounded-full px-5 py-3 w-max">
          <span className="text-[#282531] font-bold">Connected Quality Loop:</span>
          <span className="text-[#282531]">QA Testing</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#706B78]" aria-hidden="true" />
          <span className="text-[#282531]">Product Experience</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#706B78]" aria-hidden="true" />
          <span className="text-[#282531] font-bold bg-[#EFECE4] px-2 py-0.5 rounded-full">
            Quality Advocacy
          </span>
        </div>

        {/* The 3 Connected Pillars Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`group relative flex flex-col justify-between rounded-2xl border p-8 transition-smooth ${
                pillar.id === "quality-advocacy"
                  ? "border-[#282531] bg-[#FAF8F5] shadow-sm"
                  : "border-[#E8E4DC] bg-[#FFFFFF] hover:border-[#282531]/40 hover:bg-[#FAF8F5]/50"
              }`}
            >
              {/* Pillar Top Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
                  <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#706B78]">
                    PILLAR {pillar.number}
                  </span>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full ${
                      pillar.id === "quality-advocacy"
                        ? "bg-[#282531] text-[#FAF8F5]"
                        : "bg-[#EFECE4] text-[#282531]"
                    }`}
                  >
                    {pillar.action}
                  </span>
                </div>

                {/* Pillar Title & Question */}
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531] sm:text-[1.75rem]">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium italic text-[#706B78]">
                    &ldquo;{pillar.question}&rdquo;
                  </p>
                </div>

                {/* Message */}
                <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
                  {pillar.message}
                </p>

                {/* Capabilities Checklist */}
                <div className="mt-6 pt-6 border-t border-[#E8E4DC]">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#282531] mb-3">
                    Core Capabilities
                  </p>
                  <ul className="space-y-2">
                    {pillar.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2.5 text-xs text-[#706B78]"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0 text-[#282531] mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-6 border-t border-[#E8E4DC]">
                <Link
                  href={pillar.href}
                  className="group/link inline-flex items-center justify-between w-full text-sm font-medium text-[#282531] transition-smooth hover:text-[#14121A]"
                >
                  <span>Explore {pillar.name}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Desktop arrow linking step 1->2 and 2->3 */}
              {idx < 2 && (
                <div
                  className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E8E4DC] items-center justify-center text-[#282531] shadow-sm pointer-events-none"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
