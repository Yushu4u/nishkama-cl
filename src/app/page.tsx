import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { PillarSection } from "@/components/PillarSection";
import { WhatWeTestGrid } from "@/components/WhatWeTestGrid";
import { detailedServices } from "@/data/services";
import { advocacyFramework } from "@/data/framework";
import { qaExpertiseList } from "@/data/qaExpertise";
import { audienceProfiles } from "@/data/whoWeHelp";
import { processStages } from "@/data/howWeWork";
import { engagementModels } from "@/data/engagementModels";
import { whyNishkamaPoints } from "@/data/whyNishkama";
import { demonstrationSamples } from "@/data/proofDemonstrations";

const marqueeDomains = [
  "Fintech & Payments",
  "SaaS & B2B Platforms",
  "Mobile Apps (iOS & Android)",
  "HealthTech & Patient Portals",
  "Developer Tools & APIs",
  "E-Commerce & Marketplaces",
  "Multi-Tenant Portals",
  "IoT & Connected Devices",
  "DeepTech & AI Interfaces",
  "Enterprise Workflows",
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center bg-white lg:min-h-[80vh] border-b border-slate-200/80">
        <div className="shell w-full">
          <div className="pb-16 pt-12 sm:pb-20 sm:pt-16 md:pt-20 lg:pb-28 lg:pt-24 max-w-4xl">
            {/* Eyebrow */}
            <span className="badge-pill">
              INDEPENDENT QA &amp; PRODUCT QUALITY
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-slate-900 leading-[1.05]">
              Quality Advocates for Your Product.
            </h1>

            {/* Supporting Copy */}
            <div className="mt-6 max-w-2xl sm:mt-8">
              <p className="text-base sm:text-xl leading-relaxed text-slate-600">
                We help engineering and product teams find what breaks, experience what real
                users experience, and uncover critical quality risks before they become customer problems.
              </p>

              {/* Action CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                <Button
                  href="/contact?need=assessment"
                  variant="primary"
                  size="lg"
                  withArrow
                  trackingLabel="Get a QA Assessment"
                  trackingLocation="Hero"
                >
                  Get a QA Assessment
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  withArrow
                  trackingLabel="Explore Our Services"
                  trackingLocation="Hero"
                >
                  Explore QA Services
                </Button>
              </div>
            </div>

            {/* Quality Commitment Badges / Stat Ticker */}
            <ul className="mt-12 divide-y divide-slate-100 border-t border-slate-100 text-xs uppercase tracking-wider text-slate-500 sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:divide-y-0 sm:pt-6 font-bold">
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" aria-hidden="true" />
                <span>Zero Happy-Path Assumption Bias</span>
              </li>
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" aria-hidden="true" />
                <span>100% Independent QA Perspective</span>
              </li>
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="h-2 w-2 rounded-full bg-[#2F7CEF]" aria-hidden="true" />
                <span>End-to-End User Journey Validation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="pointer-events-none absolute bottom-6 left-0 hidden w-full lg:block"
          aria-hidden="true"
        >
          <div className="shell">
            <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider text-slate-400 font-bold">
              Explore
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </span>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE TICKER: TESTED ACROSS DOMAINS */}
      <section
        aria-label="Platforms and domains tested"
        className="border-b border-slate-200/80 bg-slate-50/70 py-6 overflow-hidden"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <span className="shrink-0 px-5 text-xs font-bold uppercase tracking-wider text-slate-500 sm:pl-8 sm:pr-0">
            Tested Across
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="animate-marquee flex items-center gap-8">
              {[...marqueeDomains, ...marqueeDomains].map((domain, i) => (
                <span
                  key={`${domain}-${i}`}
                  className="whitespace-nowrap text-xs font-bold uppercase tracking-wider text-slate-600"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE QUALITY BLINDSPOT</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Your product can pass automated tests and still fail real users.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              A build may satisfy every unit test on paper while still frustrating customers.
              Subtle state collisions, interrupted checkout flows, cross-browser regressions,
              and confusing errors happen outside the happy path. NCL provides the independent
              advocacy needed to catch what internal teams miss.
            </p>
          </div>

          {/* 4 Problem Breakdown Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#2F7CEF]">
                  PROBLEM 01
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Bugs escaping planned test suites
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Automated checks only verify scenarios engineers anticipated. Concurrency bugs,
                  corrupted local caches, and unexpected user navigation slip past untouched.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#2F7CEF]">
                  PROBLEM 02
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Unvalidated real-world journeys
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Developers intuitively know how their software should work. Real users bring
                  confusing inputs, flakey mobile cellular connections, and non-linear workflows.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#2F7CEF]">
                  PROBLEM 03
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Silent regressions in frequent releases
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  High-velocity sprints mean new features ship before adjacent flows are re-tested.
                  A billing tweak unexpectedly breaks team invitations two screens away.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#2F7CEF]">
                  PROBLEM 04
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Customer friction invisible to devs
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Most frustrated users simply churn rather than filing tickets. Traditional QA
                  ignores UX signals, app store reviews, and confusing error recovery paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE-PILLAR ARCHITECTURE */}
      <PillarSection />

      {/* 5. SERVICES GRID WITH DIRECT LINKS TO 8 DEDICATED SUB-PAGES */}
      <section
        id="services-overview"
        aria-label="QA Services Catalog"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="badge-pill">OUR QA SERVICES</span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Specialized QA disciplines for every stage of your build.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Explore our full suite of testing capabilities. Each discipline features a dedicated
                deep-dive guide with sample checklists, workflows, and deliverables.
              </p>
            </div>
            <Button href="/services" variant="primary" withArrow>
              Browse Full Services Catalog
            </Button>
          </div>

          {/* 8 Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {detailedServices.map((svc) => (
              <Link
                key={svc.id}
                href={`/services/${svc.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#2F7CEF]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-[#2F7CEF] uppercase tracking-wider">
                      SERVICE {svc.number}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#2F7CEF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-[#2F7CEF] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {svc.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Key Checks:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {svc.whatWeCheck.slice(0, 3).map((c: string) => (
                        <li key={c} className="flex items-center gap-1.5 truncate">
                          <span className="h-1 w-1 rounded-full bg-[#2F7CEF] shrink-0" />
                          <span className="truncate">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#2F7CEF] flex items-center justify-between">
                  <span>View Sub-Page</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALITY ADVOCACY FRAMEWORK */}
      <section
        id="framework"
        aria-label="Quality Advocacy Framework"
        className="border-b border-slate-200/80 bg-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR METHODOLOGY</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              We don&apos;t just test. We advocate.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              A four-stage framework designed to examine software quality from every critical angle.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advocacyFramework.map((stage) => (
              <div
                key={stage.stage}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                    <span className="text-xs font-bold tracking-wider text-slate-400">
                      STAGE {stage.number}
                    </span>
                    <span className="text-xs font-bold text-[#2F7CEF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]/60">
                      {stage.stage}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {stage.tagline}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <p className="text-[10px] uppercase font-bold text-slate-700 mb-2 tracking-wider">
                    Core Focus
                  </p>
                  <ul className="space-y-1.5">
                    {stage.focusAreas.slice(0, 2).map((fa) => (
                      <li key={fa} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#2F7CEF]" />
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0E2539] p-6 text-center text-white shadow-sm border border-[#2F7CEF]/30">
            <p className="text-base sm:text-lg font-bold text-white">
              Then we REPORT the evidence and ADVOCATE for the <span className="text-[#2F7CEF]">user-facing improvements</span> that matter.
            </p>
          </div>
        </div>
      </section>

      {/* 7. QA EXPERTISE DOMAINS */}
      <section
        id="expertise"
        aria-label="QA Expertise"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">PRACTICAL DEPTH</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Practical QA expertise for products that need to work in the real world.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Covering functional behavior, exploratory discovery, multi-device compatibility,
              and pre-release validation.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {qaExpertiseList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-sm hover:border-slate-300"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F7CEF]">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHAT WE TEST */}
      <section
        id="what-we-test"
        aria-label="Platforms and Interfaces Covered"
        className="border-b border-slate-200/80 bg-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">FULL-STACK COVERAGE</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Testing across every touchpoint of your product.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              We validate across web applications, mobile platforms, desktop binaries, APIs,
              and interconnected system workflows.
            </p>
          </div>

          <div className="mt-12">
            <WhatWeTestGrid />
          </div>
        </div>
      </section>

      {/* 9. WHO WE HELP */}
      <section
        id="who-we-help"
        aria-label="Who We Help"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">AUDIENCE FIT</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Built for teams that care deeply about product quality.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Whether you are preparing for your first public beta or scaling frequent production releases.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audienceProfiles.map((aud) => (
              <div
                key={aud.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold tracking-wider text-slate-400">
                    {aud.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {aud.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        The Challenge
                      </span>
                      <p className="text-xs leading-relaxed text-slate-600 mt-1">
                        {aud.challenge}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F7CEF]">
                        How NCL Solves It
                      </span>
                      <p className="text-xs leading-relaxed text-slate-800 font-medium mt-1">
                        {aud.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOW WE WORK OVERVIEW */}
      <section
        id="how-we-work-overview"
        aria-label="How We Work Overview"
        className="border-b border-slate-200/80 bg-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">STRUCTURED PROCESS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Simple process. Clear evidence. Actionable outcomes.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              A structured six-stage execution model ensuring full visibility from kickoff to release sign-off.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processStages.map((stg) => (
              <div
                key={stg.step}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                    <span className="text-xs font-bold tracking-wider text-[#2F7CEF]">
                      STEP {stg.step}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {stg.name}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {stg.headline}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {stg.purpose}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <p className="text-[10px] uppercase font-bold text-slate-700 mb-2 tracking-wider">
                    Key Outputs
                  </p>
                  <ul className="space-y-1">
                    {stg.outputs.slice(0, 2).map((out) => (
                      <li key={out} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-[#2F7CEF] shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/how-we-work" variant="primary" size="lg" withArrow>
              Learn More About Our 6-Stage Process
            </Button>
          </div>
        </div>
      </section>

      {/* 11. ENGAGEMENT MODELS */}
      <section
        id="engagement-models"
        aria-label="Engagement Models"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">FLEXIBLE PARTNERSHIPS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Start small. Scale when you need us.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Four clear ways to partner with Nishkama CodeLab based on where your product is today.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((em) => (
              <div
                key={em.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold tracking-wider text-slate-400">
                      MODEL {em.number}
                    </span>
                    <span className="text-xs font-bold text-[#2F7CEF] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]/60">
                      {em.timeline}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {em.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#2F7CEF]">
                    {em.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {em.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[10px] uppercase font-bold text-slate-700 mb-2 tracking-wider">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-1.5">
                      {em.highlights.map((hl) => (
                        <li key={hl} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-[#2F7CEF] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Button
                    href={`/contact?need=${em.id.replace("-qa", "").replace("-partner", "")}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    withArrow
                  >
                    {em.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY NISHKAMA */}
      <section
        id="why-nishkama"
        aria-label="Why Nishkama CodeLab"
        className="border-b border-slate-200/80 bg-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE NCL DIFFERENCE</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              An independent quality voice for your product.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              We operate as a committed quality ownership layer — providing the objectivity and
              verifiable evidence that product teams need to release with certainty.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyNishkamaPoints.map((pt) => (
              <div
                key={pt.number}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#2F7CEF]">
                    {pt.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PROOF AND DEMONSTRATIONS */}
      <section
        id="proof-demonstrations"
        aria-label="Proof and Demonstrations"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">SAMPLE ARTIFACTS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              See quality through the eyes of an independent QA team.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Illustrative demonstrations of how NCL structures defect discovery, edge-case
              investigation, and actionable engineering evidence.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {demonstrationSamples.map((sample) => (
              <div
                key={sample.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div>
                    <span className="badge-pill">
                      {sample.tag}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{sample.subtitle}</p>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded">
                    {sample.sampleType}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {sample.overview}
                </p>

                {/* Findings Table */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-900">
                    <thead className="bg-slate-50 border-y border-slate-200 uppercase tracking-wider text-slate-500 font-bold">
                      <tr>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Observation</th>
                        <th className="py-3 px-4">Impact</th>
                        <th className="py-3 px-4">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sample.findings.map((f, i) => (
                        <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                            {f.category}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 max-w-xs">{f.observation}</td>
                          <td className="py-3.5 px-4 text-slate-900 whitespace-nowrap font-medium">
                            {f.impact}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 max-w-sm">{f.recommendation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Evidence Artifacts */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-slate-800">Included Artifacts:</span>
                    {sample.verifiableArtifacts.map((art, j) => (
                      <span
                        key={j}
                        className="rounded-md bg-slate-50 border border-slate-200 px-2.5 py-0.5 font-medium text-slate-700"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] italic">
                    Sample format illustrative of standard NCL engagement deliverable.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL HERO CTA SECTION */}
      <section
        id="final-cta"
        aria-label="Get Started"
        className="bg-slate-900 text-white py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
              TAKE THE NEXT STEP
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Let&apos;s find what your product is missing.
            </h2>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              Tell us about your product, release schedule, or current QA bottlenecks.
              We&apos;ll help identify where an independent quality perspective can make an immediate difference.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                trackingLabel="Talk to a QA Expert"
                trackingLocation="Final CTA"
              >
                Talk to a QA Expert
              </Button>
              <Button
                href="/contact?need=assessment"
                variant="dark"
                size="lg"
                withArrow
                trackingLabel="Request a QA Assessment"
                trackingLocation="Final CTA"
              >
                Request a QA Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
