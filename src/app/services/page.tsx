import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Layers,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { detailedServices } from "@/data/services";

export const metadata: Metadata = {
  title: "QA & Product Quality Services",
  description:
    "Explore Nishkama CodeLab's comprehensive QA testing services: functional testing, exploratory testing, regression testing, compatibility QA, usability, E2E testing, release validation, and quality audits.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* 1. SERVICES HERO */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow">Services Catalog</p>
          <h1 className="mt-5 max-w-[20ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-[4rem] text-[#282531]">
            Independent QA services built around your product risk.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
            NCL provides practical QA services for teams that need stronger coverage,
            independent validation, and clearer release confidence. We don&apos;t apply
            generic checklists; we evaluate where your software fractures under real-world use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact?need=assessment" variant="primary" withArrow>
              Get a QA Assessment
            </Button>
            <Button href="#service-list" variant="outline">
              Browse All Services
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES QUICK ANCHOR BAR */}
      <nav
        aria-label="Services Jump Navigation"
        className="sticky top-[72px] z-30 border-b border-[#E8E4DC] bg-[#FFFFFF]/90 backdrop-blur-md hidden sm:block"
      >
        <div className="shell flex items-center gap-6 overflow-x-auto py-3 text-xs font-medium text-[#706B78]">
          <span className="font-semibold text-[#282531] uppercase tracking-wider shrink-0">
            Jump to:
          </span>
          {detailedServices.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="whitespace-nowrap transition-smooth hover:text-[#282531]"
            >
              {svc.title}
            </a>
          ))}
        </div>
      </nav>

      {/* 3. DETAILED SERVICES LIST (Varied layouts with deep capability breakdowns) */}
      <div id="service-list" className="divide-y divide-[#E8E4DC]">
        {detailedServices.map((svc, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={svc.id}
              id={svc.id}
              className={`scroll-mt-32 py-16 md:py-24 transition-smooth ${
                isEven ? "bg-[#FAF8F5]" : "bg-[#FFFFFF]"
              }`}
            >
              <div className="shell">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5">
                    <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#706B78]">
                      SERVICE {svc.number}
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] text-[#282531] sm:text-4xl">
                      {svc.title}
                    </h2>
                    <p className="mt-3 font-medium text-sm text-[#282531]">
                      {svc.shortDescription}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
                      {svc.longDescription}
                    </p>

                    <div className="mt-6 rounded-xl border border-[#E8E4DC] bg-[#FAF8F5] p-4 text-xs">
                      <span className="font-semibold text-[#282531] block mb-1">
                        Best suited for:
                      </span>
                      <span className="text-[#706B78]">{svc.recommendedFor}</span>
                    </div>

                    <div className="mt-8">
                      <Button
                        href={`/contact?need=${svc.id}`}
                        variant="primary"
                        size="sm"
                        withArrow
                      >
                        Inquire About {svc.title}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Deliverables Cards */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                    {/* Capabilities Card */}
                    <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
                      <div className="flex items-center gap-2 pb-4 border-b border-[#E8E4DC]">
                        <Layers className="h-4 w-4 text-[#282531]" />
                        <h3 className="font-display text-base font-semibold text-[#282531]">
                          Core Testing Activities
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {svc.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2.5 text-xs text-[#706B78] leading-relaxed"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#282531] mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Card */}
                    <div className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-6 sm:p-8">
                      <div className="flex items-center gap-2 pb-4 border-b border-[#E8E4DC]">
                        <FileCheck2 className="h-4 w-4 text-[#282531]" />
                        <h3 className="font-display text-base font-semibold text-[#282531]">
                          Tangible Deliverables
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {svc.deliverables.map((del) => (
                          <li
                            key={del}
                            className="flex items-start gap-2.5 text-xs text-[#282531] font-medium leading-relaxed"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#282531] mt-1.5 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. CALLOUT BAND */}
      <section className="bg-[#282531] py-16 md:py-24 text-[#FAF8F5]">
        <div className="shell text-center max-w-3xl mx-auto">
          <p className="eyebrow text-[#FAF8F5]/60">Start With Confidence</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl text-[#FAF8F5]">
            Unsure which service matches your current release?
          </h2>
          <p className="mt-5 text-base text-[#FAF8F5]/70 leading-relaxed sm:text-lg">
            Book a 30-minute discovery session with an NCL QA expert. We&apos;ll review
            your roadmap, tech stack, and risk profile to tailor an appropriate testing scope.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" variant="dark" size="lg" withArrow>
              Talk to a QA Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
