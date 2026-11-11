import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ServicesDirectory } from "@/components/ServicesDirectory";
import { allServicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "QA Services — Independent Software QA Across 9 Disciplines | Nishkama CodeLab",
  description:
    "Explore Nishkama CodeLab's 9 independent QA disciplines: XR & Spatial QA, Functional Testing, Exploratory Testing, Regression Testing, Compatibility, Usability, E2E, Release Validation, and Quality Audits.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. HERO SECTION (Identical structure & padding to About page hero) */}
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">QA SERVICES CATALOG</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0E2539] leading-[1.08]">
              Independent QA built around product risk.
            </h1>
            <div className="mt-4 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Nishkama CodeLab provides practical, independent QA services across 9 specialized disciplines.
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

      {/* 2. ALL 9 SERVICES DIRECTORY (Tests Assured-style dropdowns, zero boxed content) */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16">
        <div className="shell">
          <div className="max-w-3xl mb-8">
            <span className="badge-pill">OUR 9 DISCIPLINES</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E2539] leading-[1.1]">
              Every layer of product quality, covered.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our complete QA disciplines below. Click any discipline to view testing capabilities, coverage scope, and verification methodologies.
            </p>
          </div>

          <ServicesDirectory services={allServicesData} />
        </div>
      </section>

      {/* 3. CALLOUT BAND (Identical to About page callout) */}
      <section className="bg-[#0E2539] text-white py-12 md:py-16">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            GET IN TOUCH
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
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
