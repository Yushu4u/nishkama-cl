import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ShowcaseCard {
  title: string;
  desc: string;
  image: string;
  alt: string;
  href: string;
  tag: string;
  dotColor: string;
}

const cards: ShowcaseCard[] = [
  {
    title: "Technical QA & Edge Discovery",
    desc: "Systematic functional validation, regression gates, and deep network payload inspection to uncover defects before code reaches production.",
    image: "/images/technical-qa-suite.jpg",
    alt: "Nishkama CodeLab Software QA Telemetry & Test Execution Platform UI",
    href: "/services",
    tag: "TECHNICAL RIGOR",
    dotColor: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
  },
  {
    title: "Multi-Platform & Spatial QA",
    desc: "Cross-platform software validation across web browsers, desktop and mobile OS environments, WebXR, and AR, VR & MR devices.",
    image: "/images/spatial-hardware-testing.jpg",
    alt: "Multi-platform software and spatial XR/MR QA validation interface",
    href: "/services/xr-testing",
    tag: "PLATFORM COVERAGE",
    dotColor: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
  },
  {
    title: "Quality Advocacy & User Experience",
    desc: "Bridging engineering defects with real customer frustration — investigating root causes, non-linear edge journeys, and business impact.",
    image: "/images/quality-advocacy-report.jpg",
    alt: "Customer Journey Flow & User Experience Quality Friction Intelligence Board",
    href: "/quality-advocacy",
    tag: "ADVOCACY & UX",
    dotColor: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]",
  },
];

export function FeaturedCardsSection() {
  return (
    <section id="building" className="py-12 sm:py-16 border-b border-slate-200/80 bg-[#FAFBFD]">
      <div className="shell">
        {/* Sleek Asymmetric Anchor Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-slate-200/70">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
              CORE QA ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0E2539]">
              Specialized Testing Disciplines
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors group"
          >
            <span>Explore All 9 Services</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Card Signature Grid (4:3 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_-2px_rgba(14,37,57,0.04),0_12px_24px_-4px_rgba(14,37,57,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-12px_rgba(47,124,239,0.18)] hover:border-[#2F7CEF]/40 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top ambient glow line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F7CEF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/5 relative ring-1 ring-slate-900/5">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    priority
                  />
                  {/* Glass Tag Badge with live glowing status pip */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#0E2539]/85 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-sm">
                    <span className={`h-1.5 w-1.5 rounded-full ${c.dotColor}`} />
                    <span>{c.tag}</span>
                  </div>
                </div>

                <div className="pt-5 px-1">
                  <h3 className="text-lg sm:text-[19px] font-extrabold text-[#0E2539] group-hover:text-[#2F7CEF] transition-colors duration-200 leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 px-1 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs sm:text-[13px] font-bold text-[#2F7CEF] group-hover:text-[#1E66D8] transition-colors">
                  Explore Discipline
                </span>
                <span className="h-7 w-7 rounded-full bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-[#2F7CEF] group-hover:bg-[#2F7CEF] group-hover:text-white group-hover:border-[#2F7CEF] transition-all duration-300 shadow-xs">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
