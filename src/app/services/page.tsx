import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { detailedServices } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "QA Services & Testing Disciplines | Nishkama CodeLab",
  description:
    "Explore Nishkama CodeLab's comprehensive QA testing services: functional testing, exploratory testing, regression testing, compatibility QA, usability, E2E testing, release validation, and quality audits.",
};

const serviceTiers = [
  {
    title: "Pre-Launch & MVP Readiness",
    description:
      "For teams launching new web or mobile applications needing end-to-end defect discovery, multi-device confidence, and a decisive release verdict.",
    services: ["functional-testing", "compatibility-testing", "release-validation"],
  },
  {
    title: "Continuous Sprint Validation",
    description:
      "For active product teams shipping weekly or bi-weekly updates who require fast regression safety nets and deep exploratory edge-case hunting.",
    services: ["regression-testing", "exploratory-testing", "e2e-testing"],
  },
  {
    title: "User Experience & Strategy Audits",
    description:
      "For products experiencing customer drop-offs, UX friction, or teams looking to establish mature testing standards and documentation.",
    services: ["usability-testing", "quality-audit"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-[#0E2539]">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">
              QA SERVICES CATALOG
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0E2539] leading-[1.08]">
              Comprehensive QA testing built around your product risk.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              NCL provides practical, independent QA services for software teams that need
              stronger coverage, zero happy-path bias, and verifiable release confidence. Explore
              our 8 specialized testing disciplines below or jump straight into dedicated deep-dive guides.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Button href="/contact?need=assessment" variant="primary" withArrow>
                Test Your App
              </Button>
              <Button href="#catalog" variant="outline">
                Browse 8 Testing Disciplines
              </Button>
            </div>
          </div>

          {/* Quick Metrics / Guarantees Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl font-bold text-[#0E2539]">8</span>
              <span className="text-xs text-slate-500 font-medium">Specialized QA Disciplines</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl font-bold text-[#2F7CEF]">100%</span>
              <span className="text-xs text-slate-500 font-medium">Independent Perspective</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl font-bold text-[#0E2539]">Zero</span>
              <span className="text-xs text-slate-500 font-medium">Happy-Path Assumption Bias</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="block text-2xl font-bold text-[#0E2539]">24-48h</span>
              <span className="text-xs text-slate-500 font-medium">Rapid Kickoff Timelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES QUICK JUMP BAR */}
      <nav
        aria-label="Services Sub-Pages Navigation"
        className="sticky top-[72px] z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md hidden md:block"
      >
        <div className="shell flex items-center gap-2 overflow-x-auto py-3 text-xs font-semibold text-slate-600">
          <span className="text-slate-400 uppercase tracking-wider text-[11px] shrink-0 mr-2">
            Jump to discipline:
          </span>
          {detailedServices.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.slug}`}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-slate-100 hover:text-[#2F7CEF] whitespace-nowrap"
            >
              {svc.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* 3. MAIN SERVICES CATALOG */}
      <section id="catalog" className="py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="badge-pill">OUR QA DISCIPLINES</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2539]">
                Explore testing disciplines &amp; capabilities
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Click &ldquo;View capabilities&rdquo; on any service to inspect granular testing
                breakdowns, or click &ldquo;Full Dedicated Page&rdquo; to read comprehensive workflows,
                sample checklists, and typical defects uncovered.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full w-max">
              Showing all {detailedServices.length} QA Services
            </span>
          </div>

          <div className="space-y-6">
            {detailedServices.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                defaultExpanded={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION PAIRINGS */}
      <section className="border-y border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-pill">TAILORED SCOPES</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2539]">
              Common testing combinations by product stage
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Not sure which single discipline to choose? Most high-impact engagements pair 2-3
              services together for maximum release protection.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceTiers.map((tier) => (
              <div
                key={tier.title}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-7 flex flex-col justify-between hover:bg-slate-50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0E2539]">
                    {tier.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {tier.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                      Recommended Services:
                    </span>
                    <ul className="space-y-2">
                      {tier.services.map((slug) => {
                        const s = detailedServices.find((item) => item.slug === slug);
                        if (!s) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="group flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#2F7CEF] p-2 rounded-lg bg-white border border-slate-200/60 transition-all hover:border-[#BFDBFE]"
                            >
                              <span>{s.title}</span>
                              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#2F7CEF] group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/60">
                  <Link
                    href={`/contact?need=${encodeURIComponent(tier.title)}`}
                    className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] inline-flex items-center gap-1.5"
                  >
                    <span>Request this package</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE DELIVER QUALITY */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="max-w-2xl mb-12">
            <span className="badge-pill">OUR PROCESS</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2539]">
              The NCL QA standard: zero guesswork, full visibility
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Every service engagement follows our structured verification lifecycle so your engineering
              team gets clear, reproduceable bug reports without overhead.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold text-[#2F7CEF] text-sm">
                01
              </div>
              <h3 className="mt-4 font-bold text-base text-[#0E2539]">Risk Assessment</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We review your PRDs, tech architecture, user personas, and high-stakes user journeys before writing a single test case.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold text-[#2F7CEF] text-sm">
                02
              </div>
              <h3 className="mt-4 font-bold text-base text-[#0E2539]">Realistic Execution</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Testing happens on genuine devices, browsers, and real-world network conditions. We push past happy paths into edge cases.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold text-[#2F7CEF] text-sm">
                03
              </div>
              <h3 className="mt-4 font-bold text-base text-[#0E2539]">Actionable Logging</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every bug report includes exact steps to reproduce, video proof, network logs, console traces, and severity ranking.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold text-[#2F7CEF] text-sm">
                04
              </div>
              <h3 className="mt-4 font-bold text-base text-[#0E2539]">Release Decision</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                You receive a transparent release readiness scorecard outlining known blockers, resolved tickets, and remaining risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="bg-[#0E2539] text-white py-16 md:py-24">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            START YOUR QA PARTNERSHIP
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Ready to give your product dedicated quality advocacy?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a 30-minute discovery session with our QA engineers. We&apos;ll assess your
            release timeline, tech stack, and testing bottlenecks without sales friction.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact?need=consultation" variant="primary" size="lg" withArrow>
              Schedule QA Strategy Call
            </Button>
            <Button href="/how-we-work" variant="dark" size="lg">
              Learn How We Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
