import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { PillarSection } from "@/components/PillarSection";
import { WhatWeTestGrid } from "@/components/WhatWeTestGrid";
import { homeServiceOverviews } from "@/data/services";
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
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col justify-center bg-[#FAF8F5] lg:min-h-[82vh] border-b border-[#E8E4DC]">
        <div className="shell w-full">
          <div className="pb-14 pt-10 sm:pb-16 sm:pt-12 md:pt-16 lg:pb-24 lg:pt-20">
            {/* Eyebrow */}
            <p className="eyebrow">INDEPENDENT QA &amp; PRODUCT QUALITY</p>

            {/* Headline */}
            <h1 className="mt-5 max-w-[18ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:mt-8 sm:text-6xl sm:leading-[0.98] lg:text-[5.5rem] text-[#282531]">
              Quality Advocates for Your Product.
            </h1>

            {/* Supporting Copy */}
            <div className="mt-6 max-w-2xl sm:mt-8">
              <p className="text-base leading-relaxed text-[#706B78] sm:text-xl">
                We help product teams find what breaks, experience what real users
                experience, and uncover quality risks before they become customer problems.
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
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Quality Commitment Badges / Stat Ticker */}
            <ul className="mt-12 divide-y divide-[#E8E4DC] border-t border-[#E8E4DC] text-xs uppercase tracking-[0.14em] text-[#706B78] sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:divide-y-0 sm:pt-6 font-semibold">
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="h-2 w-2 rounded-full bg-[#282531]" aria-hidden="true" />
                <span>Zero Happy-Path Bias</span>
              </li>
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="hidden h-1 w-1 rounded-full bg-[#706B78]/40 sm:block" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-[#282531] sm:hidden" aria-hidden="true" />
                <span>100% Independent QA Perspective</span>
              </li>
              <li className="flex items-center gap-2.5 py-3 sm:py-0">
                <span className="hidden h-1 w-1 rounded-full bg-[#706B78]/40 sm:block" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-[#282531] sm:hidden" aria-hidden="true" />
                <span>Full Journey User Validation</span>
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
            <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-[#706B78]/60 font-semibold">
              Scroll
              <ArrowDown className="h-3.5 w-3.5 animate-scroll-bounce" />
            </span>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE TICKER: TESTED ACROSS PLATFORMS */}
      <section
        aria-label="Platforms and domains tested"
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-6 sm:py-7 overflow-hidden"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <span className="shrink-0 px-5 text-xs font-bold uppercase tracking-[0.18em] text-[#282531]/70 sm:pl-8 sm:pr-0">
            Validated Across
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="animate-marquee flex items-center gap-10">
              {/* Duplicate array for seamless infinite loop */}
              {[...marqueeDomains, ...marqueeDomains].map((domain, i) => (
                <span
                  key={`${domain}-${i}`}
                  className="whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.12em] text-[#282531]/75"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">The Quality Blindspot</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Your product can pass tests and still fail users.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              A product may meet every technical specification on paper and still frustrate
              customers. Bugs, edge cases, broken journeys, inconsistent experiences, and
              release risks often appear outside the happy path. NCL brings an independent
              quality perspective to help teams see what internal processes miss.
            </p>
          </div>

          {/* 4 Problem Breakdown Cards */}
          <div className="mt-14 grid border-t border-[#E8E4DC] md:grid-cols-2">
            <div className="border-b border-[#E8E4DC] py-10 md:py-12 md:pr-10">
              <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#282531]/40">
                PROBLEM 01
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531]">
                Bugs that escape planned test cases.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#706B78]">
                Scripted suites only verify what engineers already imagined. Subtle state
                collisions, concurrent user actions, and interrupted workflows slip past
                happy-path suites straight into production.
              </p>
            </div>

            <div className="border-b border-[#E8E4DC] py-10 md:py-12 md:border-l md:border-[#E8E4DC] md:pl-10">
              <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#282531]/40">
                PROBLEM 02
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531]">
                Real-world journeys that are not fully validated.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#706B78]">
                Developers naturally navigate their own software with insider intuition.
                Real customers bring confusing edge inputs, spotty mobile network connections,
                and unexpected multi-step journeys.
              </p>
            </div>

            <div className="border-b border-[#E8E4DC] py-10 md:py-12 md:pr-10">
              <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#282531]/40">
                PROBLEM 03
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531]">
                Regression risks hidden inside frequent releases.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#706B78]">
                Fast sprint cycles often mean features ship before adjacent systems are retested.
                A fix in the billing modal silently breaks user invitation acceptance three
                screens away.
              </p>
            </div>

            <div className="border-b border-[#E8E4DC] py-10 md:py-12 md:border-l md:border-[#E8E4DC] md:pl-10">
              <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#282531]/40">
                PROBLEM 04
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531]">
                Customer frustration that never reaches engineering.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#706B78]">
                For every user who files a support ticket, dozens simply leave. Traditional QA
                ignores support ticket signals, app store reviews, and user friction, leaving
                product teams in the dark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE-PILLAR ARCHITECTURE (P0 Business Requirement, prominent near top) */}
      <PillarSection />

      {/* 5. SERVICES OVERVIEW (Interactive hover-invert rows matching Fibi Labs) */}
      <section
        id="services-overview"
        aria-label="Services Overview"
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Services Overview</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Quality from more than one perspective.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Our services combine structured QA, exploratory thinking, real-world product usage,
              and customer-focused quality analysis.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[#E8E4DC]">
          {homeServiceOverviews.map((svc) => (
            <div key={svc.id} className="border-b border-[#E8E4DC]">
              <Link
                href={svc.href}
                className="group block transition-smooth hover:bg-[#282531] hover:text-[#FAF8F5]"
              >
                <div className="shell grid items-baseline gap-4 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <span className="font-display text-sm font-medium tracking-[0.12em] text-[#706B78] transition-smooth group-hover:text-[#FAF8F5]/50 md:col-span-2">
                    {svc.number}
                  </span>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#282531] transition-smooth group-hover:text-[#FAF8F5] sm:text-3xl">
                      {svc.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm leading-relaxed text-[#706B78] transition-smooth group-hover:text-[#FAF8F5]/80">
                      {svc.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {svc.points.map((pt) => (
                        <span
                          key={pt}
                          className="text-[11px] font-medium text-[#282531] bg-[#EFECE4] px-2 py-0.5 rounded transition-smooth group-hover:bg-[#3D3949] group-hover:text-[#FAF8F5]"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex md:col-span-1 md:justify-end">
                    <ArrowUpRight className="h-6 w-6 text-[#282531] transition-smooth group-hover:text-[#FAF8F5] group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="shell mt-10 flex justify-end">
          <Button href="/services" variant="primary" withArrow>
            View All 8 Detailed Services
          </Button>
        </div>
      </section>

      {/* 6. QUALITY ADVOCACY FRAMEWORK */}
      <section
        id="framework"
        aria-label="Quality Advocacy Framework"
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Methodology</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              We don&apos;t just test. We advocate.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              A four-stage framework designed to examine software quality from every critical angle.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-4">
            {advocacyFramework.map((stage) => (
              <div
                key={stage.stage}
                className="border-b border-[#E8E4DC] py-10 sm:p-8 lg:border-r lg:border-[#E8E4DC] lg:last:border-r-0 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
                    <span className="font-display text-xs font-semibold tracking-wider text-[#706B78]">
                      STAGE {stage.number}
                    </span>
                    <span className="font-display text-sm font-bold tracking-tight text-[#282531] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8E4DC]">
                      {stage.stage}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[#282531]">
                    {stage.tagline}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#706B78]">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
                  <p className="text-[10px] uppercase font-semibold text-[#282531] mb-2 tracking-wider">
                    Core Focus
                  </p>
                  <ul className="space-y-1.5">
                    {stage.focusAreas.slice(0, 2).map((fa) => (
                      <li key={fa} className="text-[11px] text-[#706B78] flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#282531]" />
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#282531] bg-[#282531] p-6 text-center text-[#FAF8F5]">
            <p className="font-display text-lg font-semibold sm:text-xl">
              Then we REPORT the evidence and ADVOCATE for the improvements that matter.
            </p>
          </div>
        </div>
      </section>

      {/* 7. QA EXPERTISE DOMAINS */}
      <section
        id="expertise"
        aria-label="QA Expertise"
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Practical Depth</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Practical QA expertise for products that need to work in the real world.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Covering functional behavior, exploratory discovery, multi-device compatibility,
              and pre-release validation.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {qaExpertiseList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FFFFFF] p-5 transition-smooth hover:border-[#282531]/40 hover:shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#706B78]">
                    {item.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-[#282531]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#706B78]">
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
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Full-Stack Coverage</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Across the product experience.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              We validate across web applications, mobile platforms, desktop binaries, APIs,
              and interconnected system workflows.
            </p>
          </div>

          <div className="mt-14">
            <WhatWeTestGrid />
          </div>
        </div>
      </section>

      {/* 9. WHO WE HELP */}
      <section
        id="who-we-help"
        aria-label="Who We Help"
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Audience Fit</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Built for teams that care about product quality.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Whether you are preparing for your first public beta or scaling frequent production releases.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-3">
            {audienceProfiles.map((aud) => (
              <div
                key={aud.number}
                className="border-b border-[#E8E4DC] py-10 sm:p-8 lg:odd:border-r lg:border-[#E8E4DC]"
              >
                <span className="font-display text-xs font-semibold tracking-wider text-[#282531]/40">
                  {aud.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-[#282531]">
                  {aud.title}
                </h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#706B78]">
                      The Challenge
                    </span>
                    <p className="text-xs leading-relaxed text-[#706B78] mt-0.5">
                      {aud.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#282531]">
                      How NCL Solves It
                    </span>
                    <p className="text-xs leading-relaxed text-[#282531] mt-0.5">
                      {aud.solution}
                    </p>
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
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Structured Process</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Simple process. Clear evidence. Actionable outcomes.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              A structured six-stage execution model ensuring full visibility from kickoff to release sign-off.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processStages.map((stg) => (
              <div
                key={stg.step}
                className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-7 transition-smooth hover:border-[#282531]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
                    <span className="font-display text-sm font-semibold tracking-wider text-[#706B78]">
                      STEP {stg.step}
                    </span>
                    <span className="font-display text-base font-bold text-[#282531]">
                      {stg.name}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-[#282531]">
                    {stg.headline}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#706B78]">
                    {stg.purpose}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
                  <p className="text-[10px] uppercase font-semibold text-[#282531] mb-2 tracking-wider">
                    Key Outputs
                  </p>
                  <ul className="space-y-1">
                    {stg.outputs.slice(0, 2).map((out) => (
                      <li key={out} className="text-xs text-[#706B78] flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-[#282531] shrink-0" />
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
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Flexible Partnerships</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Start small. Scale when you need us.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Four clear ways to partner with Nishkama CodeLab based on where your product is today.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((em) => (
              <div
                key={em.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8 transition-smooth hover:border-[#282531]/40 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
                    <span className="font-display text-xs font-semibold tracking-wider text-[#706B78]">
                      MODEL {em.number}
                    </span>
                    <span className="text-xs font-medium text-[#282531] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8E4DC]">
                      {em.timeline}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-[#282531]">
                    {em.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-[#282531]">
                    {em.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#706B78]">
                    {em.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E8E4DC]">
                    <p className="text-[10px] uppercase font-semibold text-[#282531] mb-2.5 tracking-wider">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-1.5">
                      {em.highlights.map((hl) => (
                        <li key={hl} className="text-xs text-[#706B78] flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-[#282531] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E8E4DC]">
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

      {/* 12. WHY NISHKAMA (The 6 Differentiators) */}
      <section
        id="why-nishkama"
        aria-label="Why Nishkama CodeLab"
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">The NCL Difference</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              An independent quality voice for your product.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              We operate as a committed quality ownership layer — providing the objectivity and
              evidence product teams need.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#E8E4DC] md:grid-cols-2">
            {whyNishkamaPoints.map((pt, index) => (
              <div
                key={pt.number}
                className={`border-b border-[#E8E4DC] py-10 md:py-12 ${
                  index % 2 === 1
                    ? "md:border-l md:border-[#E8E4DC] md:pl-10"
                    : "md:pr-10"
                }`}
              >
                <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#282531]/40">
                  {pt.number}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-[#282531]">
                  {pt.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#706B78]">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. PROOF AND DEMONSTRATIONS (Illustrative Samples, Strictly labeled without fake claims) */}
      <section
        id="proof-demonstrations"
        aria-label="Proof and Demonstrations"
        className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Sample Artifacts</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              See quality through the eyes of an independent QA team.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Illustrative demonstrations of how NCL structures defect discovery, edge-case
              investigation, and actionable engineering evidence.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {demonstrationSamples.map((sample) => (
              <div
                key={sample.id}
                className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8 md:p-10 transition-smooth"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
                  <div>
                    <span className="rounded-full bg-[#FAF8F5] border border-[#E8E4DC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#282531]">
                      {sample.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#282531]">
                      {sample.title}
                    </h3>
                    <p className="text-xs text-[#706B78] mt-1">{sample.subtitle}</p>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#706B78] bg-[#EFECE4] px-3 py-1 rounded">
                    {sample.sampleType}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
                  {sample.overview}
                </p>

                {/* Findings Table / Grid */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-xs text-[#282531]">
                    <thead className="bg-[#FAF8F5] border-y border-[#E8E4DC] uppercase tracking-wider text-[#706B78]">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Category</th>
                        <th className="py-3 px-4 font-semibold">Observation</th>
                        <th className="py-3 px-4 font-semibold">Impact</th>
                        <th className="py-3 px-4 font-semibold">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E4DC]">
                      {sample.findings.map((f, i) => (
                        <tr key={i} className="hover:bg-[#FAF8F5]/50 transition-smooth">
                          <td className="py-3.5 px-4 font-semibold text-[#282531] whitespace-nowrap">
                            {f.category}
                          </td>
                          <td className="py-3.5 px-4 text-[#706B78] max-w-xs">{f.observation}</td>
                          <td className="py-3.5 px-4 text-[#282531] whitespace-nowrap font-medium">
                            {f.impact}
                          </td>
                          <td className="py-3.5 px-4 text-[#706B78] max-w-sm">{f.recommendation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Evidence Artifacts */}
                <div className="mt-6 pt-5 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-4 text-xs text-[#706B78]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#282531]">Included Artifacts:</span>
                    {sample.verifiableArtifacts.map((art, j) => (
                      <span
                        key={j}
                        className="rounded bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] italic text-[#706B78]">
                    Sample format illustrative of standard NCL engagement deliverable.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL HERO CTA SECTION (High-contrast dark section matching Fibi Labs) */}
      <section
        id="final-cta"
        aria-label="Get Started"
        className="bg-[#282531] py-20 text-[#FAF8F5] md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5]/50">
              Take the Next Step
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.5rem] text-[#FAF8F5]">
              Let&apos;s find what your product is missing.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#FAF8F5]/70 sm:text-lg">
              Tell us about your product, release cycle, or current QA challenge.
              We&apos;ll help identify where an independent quality perspective can make a difference.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button
                href="/contact"
                variant="dark"
                size="lg"
                withArrow
                trackingLabel="Talk to a QA Expert"
                trackingLocation="Final CTA"
              >
                Talk to a QA Expert
              </Button>
              <Button
                href="/contact?need=assessment"
                variant="outline"
                size="lg"
                className="border-[#FAF8F5]/30 text-[#FAF8F5] hover:bg-[#FAF8F5]/10"
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
