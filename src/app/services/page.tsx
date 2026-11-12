import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ServicesDirectory } from "@/components/ServicesDirectory";
import { allServicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Software QA Services — 9 Testing Disciplines",
  description:
    "Explore Nishkama CodeLab's 9 independent software QA disciplines: XR & Spatial QA, Functional Testing, Exploratory Testing, Regression Testing, Compatibility, Usability, E2E, Release Validation, and Quality Audits.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. HERO SECTION (Identical structure & padding to About page hero) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(47,124,239,0.06),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
          <div className="max-w-3xl">
            <span className="badge-pill">SOFTWARE QA SERVICES</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0E2539] leading-[1.08]">
              Independent Software QA built around product risk.
            </h1>
            <div className="mt-4 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Nishkama CodeLab provides practical, independent software QA services across 9 specialized disciplines.
                We uncover critical edge cases, eliminate happy-path bias, and deliver verifiable release confidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3.5">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Work With Us
                </Button>
                <Button href="/quality-advocacy" variant="outline" size="lg">
                  Our Advocacy Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL 9 SERVICES SHOWCASE (3x3 Visual Offering Grid) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(47,124,239,0.06),rgba(248,250,252,0))]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
          <div className="max-w-3xl mb-10 md:mb-12">
            <span className="badge-pill">OUR 9 DISCIPLINES</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539] leading-[1.1]">
              Every layer of product quality,{" "}
              <span className="text-[#2F7CEF]">covered.</span>
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nine focused QA offerings engineered around product risk, physical device reality, and release confidence.
            </p>
          </div>

          <ServicesDirectory services={allServicesData} />
        </div>
      </section>

      {/* 3. CALLOUT BAND (Identical to About page callout) */}
      <section className="relative overflow-hidden bg-[#0E2539] text-white py-12 md:py-16 border-t border-[#2F7CEF]/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(47,124,239,0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Ready for an independent quality partner?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Let&apos;s discuss how Nishkama CodeLab can plug into your release cycles and
            elevate product confidence across all 9 disciplines.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start a QA Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
