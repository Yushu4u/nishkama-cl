"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface CapabilitySection {
  heading: string;
  items: string[];
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  capabilities: CapabilitySection[];
  ctaText: string;
  ctaHref: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: "xr-spatial",
    title: "AR/VR/MR/XR & Spatial Testing Services",
    description:
      "Since spatial computing requires more than standard 2D screen checks, we test spatial apps, headsets, tracking systems, and the full runtime stack. Whether it’s a product still in development or one that’s already shipped, we know how to break it, measure latency and comfort, and help you fix issues before your users do.",
    capabilities: [
      {
        heading: "Hardware & Spatial Testing",
        items: [
          "Apple Vision Pro, Meta Quest 3/Pro, and spatial headsets",
          "Hand, face, eye, and controller tracking responsiveness",
          "Motion-to-photon latency and 90Hz/120Hz frame budgets",
          "Virtual boundary safety and spatial anchor persistence",
        ],
      },
      {
        heading: "Software Testing",
        items: [
          "visionOS, Quest OS platforms, and spatial store applications",
          "Unity and Unreal Engine spatial build verification",
          "Companion mobile app data synchronization and BLE pairing",
          "WebXR experiences, streaming, and API regression testing",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Unity and Unreal Engine gauntlet and test framework expertise",
          "Python scripting, ADB input-injection, and automated sweeps",
          "OVR Metrics, Instruments, and perceptual latency profiling",
          "Spatial comfort, disorientation stress, and multi-user sync",
        ],
      },
    ],
    ctaText:
      "We couldn't fit everything here, but if you're looking for something specific we'd love to walk you through our full spatial testing capabilities.",
    ctaHref: "/contact?need=XR%20Testing",
  },
  {
    id: "software-qa",
    title: "Web & Mobile Application Quality Assurance",
    description:
      "Modern web and mobile applications face fragmented devices, flaky network transitions, and aggressive deployment schedules. We provide thorough functional, exploratory, regression, and cross-platform testing across genuine devices so your team ships with complete confidence.",
    capabilities: [
      {
        heading: "Hardware & Device Matrix",
        items: [
          "Physical iOS & Android flagships and legacy hardware lab",
          "Safari (WebKit), Chrome (Chromium), Firefox, and Edge parity",
          "Screen breakpoints, dynamic islands, and responsive viewports",
          "Offline store-and-forward, packet loss, and throttled networks",
        ],
      },
      {
        heading: "Software Testing",
        items: [
          "Core business logic, permission boundaries, and checkout funnels",
          "Pull request changelog blast-radius regression passes",
          "Time-boxed unscripted exploratory edge-case hunting",
          "API contract validation, asynchronous queues, and webhooks",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Genuine physical device bench testing (zero emulators for releases)",
          "Playwright, Appium, and automated regression test harnesses",
          "High-fidelity bug reports with video repros and console traces",
          "Clear go/no-go release readiness scorecards for leads",
        ],
      },
    ],
    ctaText:
      "Need targeted coverage for an upcoming release candidate? Tell us your tech stack and we'll map out a test plan.",
    ctaHref: "/contact?need=Web%20and%20Mobile%20QA",
  },
  {
    id: "quality-advocacy",
    title: "Quality Advocacy & UX Reality Testing",
    description:
      "Testing only against the happy path misses the friction real customers feel. Quality Advocacy unites technical defect discovery with deep user empathy, heuristic evaluation, and product reality checks to catch issues before they impact adoption and churn.",
    capabilities: [
      {
        heading: "Experiential Dogfooding",
        items: [
          "Real-world end-to-end customer journey walkthroughs",
          "Usability friction, confusing prompts, and hesitation mapping",
          "Microcopy clarity and interface feedback responsiveness",
          "Error recovery states, timeout handling, and graceful degradation",
        ],
      },
      {
        heading: "Quality Audits & Diagnostics",
        items: [
          "1–2 week intensive diagnostic of coverage gaps",
          "Defect escape history and regression root-cause analysis",
          "Test documentation, test case hygiene, and pipeline review",
          "Actionable 90-day quality roadmap for engineering leads",
        ],
      },
      {
        heading: "How We Deliver",
        items: [
          "Annotated UI scorecards with usability severity ratings",
          "Executive release memos with explicit blocker ledgers",
          "Collaborative Jira/Linear bug logging with repro steps",
          "Direct Slack/async alignment with product managers and engineers",
        ],
      },
    ],
    ctaText:
      "Looking to give your product a thorough quality reality check before launch? Let's talk.",
    ctaHref: "/contact?need=Quality%20Advocacy",
  },
];

function ServiceCard({ service, defaultOpen }: { service: ServiceCardData; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  return (
    <article className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-[#F0F6FE]/60 via-white to-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl sm:text-[1.65rem] font-bold text-[#0E2539] tracking-tight">
        {service.title}
      </h2>

      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 text-sm sm:text-base">
        {service.description}
      </p>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{isOpen ? "Hide capabilities" : "View capabilities"}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Expandable Capabilities Grid (Tests Assured Style) */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 grid gap-4 md:grid-cols-3 pt-2">
            {service.capabilities.map((cap) => (
              <div
                key={cap.heading}
                className="rounded-xl border border-slate-200/70 bg-[#F8FAFC] p-5 flex flex-col"
              >
                <h3 className="mb-3 text-base font-bold text-[#0E2539]">
                  {cap.heading}
                </h3>
                <ul className="space-y-2 pl-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-full mt-3 pt-3 border-t border-slate-100">
              <p className="text-sm leading-relaxed text-slate-600">
                {service.ctaText}
              </p>
              <Link
                href={service.ctaHref}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors"
              >
                <span>Get in touch</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-[#0E2539]">
      {/* 1. MINIMALISTIC PAGE TITLE (Tests Assured Style) */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10">
        <div className="shell max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E2539]">
            QA Services
          </h1>
        </div>
      </section>

      {/* 2. CORE SERVICE ARTICLES (Tests Assured Clean Card List) */}
      <section className="pb-16 sm:pb-24">
        <div className="shell max-w-5xl">
          <div className="space-y-6">
            {servicesData.map((svc, index) => (
              <ServiceCard key={svc.id} service={svc} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WANT TO LEARN MORE? (Exact Tests Assured Bottom CTA) */}
      <section className="py-16 sm:py-20 border-t border-slate-200/80 bg-[#F8FAFC]">
        <div className="shell max-w-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2539]">
            Want to learn more?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We&apos;re always happy to talk. Reach out and let&apos;s see how we can help.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-[#2F7CEF] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2F7CEF]/20 hover:bg-[#1E66D8] hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
