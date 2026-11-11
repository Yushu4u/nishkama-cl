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
}

const cards: ShowcaseCard[] = [
  {
    title: "Technical QA & Edge Discovery",
    desc: "Systematic functional validation, regression gates, and deep network payload inspection to uncover defects before code reaches production.",
    image: "/images/technical-qa-suite.jpg",
    alt: "Nishkama CodeLab Software QA Telemetry & Test Execution Platform UI",
    href: "/services",
    tag: "TECHNICAL RIGOR",
  },
  {
    title: "Multi-Platform & Spatial QA",
    desc: "Real physical device testing across iOS, Android, web, and spatial headsets (Apple Vision Pro, Meta Quest) under real-world conditions.",
    image: "/images/spatial-hardware-testing.jpg",
    alt: "Multi-platform device testing across mobile, tablet, and spatial headsets",
    href: "/services/xr-testing",
    tag: "DEVICE COVERAGE",
  },
  {
    title: "Quality Advocacy & User Experience",
    desc: "Bridging engineering defects with real customer frustration — investigating root causes, non-linear edge journeys, and business impact.",
    image: "/images/quality-advocacy-report.jpg",
    alt: "Customer Journey Flow & User Experience Quality Friction Intelligence Board",
    href: "/quality-advocacy",
    tag: "ADVOCACY & UX",
  },
];

export function FeaturedCardsSection() {
  return (
    <section id="building" className="py-10 sm:py-14 border-b border-slate-200/80 bg-white">
      <div className="shell">
        {/* Section Header (Tests Assured Style) */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
            CORE QA ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
            Quality Disciplines Across Platforms
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            From technical defect discovery and multi-device testing to product-minded user advocacy, explore our core quality disciplines.
          </p>
        </div>

        {/* 3-Card Signature Grid (4:3 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#2F7CEF]/40 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 relative">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0E2539]/60 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-[#0E2539]/85 backdrop-blur-md border border-white/20 px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-xs">
                    {c.tag}
                  </span>
                </div>

                <div className="pt-4 px-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0E2539] group-hover:text-[#2F7CEF] transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 px-1 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2F7CEF]">
                <span>Explore Discipline</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
