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
    image: "/images/qa-telemetry-workstation.jpg",
    alt: "Nishkama CodeLab Technical QA and Root-Cause Telemetry Workstation",
    href: "/services",
    tag: "TECHNICAL RIGOR",
  },
  {
    title: "Multi-Platform & Spatial QA",
    desc: "Real physical device testing across iOS, Android, web, and spatial computing headsets (Apple Vision Pro, Meta Quest) with zero emulation shortcuts.",
    image: "/images/qa-device-lab.jpg",
    alt: "Nishkama CodeLab Physical Device Farm and Spatial XR Testing Bench",
    href: "/services/xr-testing",
    tag: "PHYSICAL HARDWARE",
  },
  {
    title: "Quality Advocacy & User Experience",
    desc: "Bridging engineering defects with real customer frustration — investigating root causes, non-linear edge journeys, and business impact.",
    image: "/images/quality-advocacy-showcase.jpg",
    alt: "Nishkama CodeLab Quality Advocacy and User Experience Testing Workspace",
    href: "/quality-advocacy",
    tag: "ADVOCACY & UX",
  },
];

export function FeaturedCardsSection() {
  return (
    <section id="building" className="py-14 sm:py-20 border-b border-slate-200/80 bg-white">
      <div className="shell">
        {/* Section Header (Tests Assured Style) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-2">
            CORE QA ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0E2539]">
            See what we&apos;re building.
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            From technical defect discovery and physical hardware testing to product-minded user advocacy, explore our core quality disciplines.
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

        {/* Rest of Two Tiles Kept in Last */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-3.5">
          <Link
            href="/quality-advocacy"
            className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 hover:border-[#2F7CEF] hover:text-[#2F7CEF] transition-all shadow-sm"
          >
            Quality Advocacy
          </Link>
          <Link
            href="/contact?need=assessment"
            className="rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg hover:shadow-[#2F7CEF]/30 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Get a QA Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
