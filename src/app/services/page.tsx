"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface CapabilityColumn {
  heading: string;
  items: string[];
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  capabilities: CapabilityColumn[];
  ctaText: string;
  ctaHref: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: "xr-spatial",
    title: "AR/VR/MR/XR Testing Services",
    description:
      "Since We’ve been testing AR, VR, and MR devices for a while now, we're experts at testing headsets, tracking systems, spatial apps, the full stack. Whether it’s a product still in development or one that’s already shipped, we know how to break it, find what’s wrong, and help you fix it before your users do.",
    capabilities: [
      {
        heading: "Hardware Testing",
        items: [
          "VR/AR headsets, displays, and optics",
          "Hand, face, eye, and body tracking",
          "Camera and sensor systems",
          "Motion capture system validation",
        ],
      },
      {
        heading: "Software Testing",
        items: [
          "VR/AR OS platforms and store applications",
          "Streaming and third-party app compatibility",
          "Spatial computing and metaverse environments",
          "Avatar functionality and API regression testing",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Unity and Unreal Engine programming expertise",
          "Python scripting and custom test frameworks",
          "Performance, latency, and cross-platform testing",
          "Identity and security testing",
        ],
      },
    ],
    ctaText:
      "We couldn’t fit everything here, but if you’re looking for something specific we’d love to walk you through our full capabilities.",
    ctaHref: "/contact",
  },
  {
    id: "wearables-software",
    title: "AI/AR Smart Wearable Glasses and Watches Testing",
    description:
      "Smart glasses, watches, and wearables come with their own set of challenges such as sensors, connectivity, battery life, companion apps. We test across the entire ecosystem, from the hardware on someone’s wrist to the app on their phone, making sure everything works together the way it should.",
    capabilities: [
      {
        heading: "Hardware Testing",
        items: [
          "Biometric, accelerometer, gyroscope, and health sensors",
          "GPS and location tracking",
          "Camera, display, and battery management",
          "Bluetooth, WiFi, and device pairing connectivity",
        ],
      },
      {
        heading: "Software Testing",
        items: [
          "Mobile companion apps and OTA updates",
          "Wearable OS and data synchronization",
          "Cross-platform and third-party app compatibility",
          "API regression and backend data pipeline testing",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Firmware testing and validation",
          "Power consumption and battery life engineering",
          "Python scripting and custom test frameworks",
          "Genuine multi-device physical lab sweeps",
        ],
      },
    ],
    ctaText:
      "Every wearable has its quirks — tell us what you’re building and we’ll show you how we’d test it.",
    ctaHref: "/contact",
  },
];

function ServiceCard({ service }: { service: ServiceCardData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/60 to-white p-7 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#0E2539]">
        {service.title}
      </h2>

      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 text-sm sm:text-base">
        {service.description}
      </p>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#2F7CEF] transition-colors hover:text-[#1E66D8] focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>View capabilities</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 grid gap-4 pb-2 md:grid-cols-3">
            {service.capabilities.map((cap) => (
              <div
                key={cap.heading}
                className="rounded-xl border border-slate-200/70 bg-[#fafafa] p-5"
              >
                <h3 className="mb-3 text-base font-bold text-[#0E2539]">
                  {cap.heading}
                </h3>
                <ul className="space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-full mt-2">
              <p className="text-sm leading-relaxed text-slate-600">
                {service.ctaText}
              </p>
              <Link
                href={service.ctaHref}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#2F7CEF] hover:text-[#1E66D8]"
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
      <main>
        {/* Main Header & 2 Service Cards (Exact Tests Assured Structure) */}
        <div className="mx-auto w-[min(1140px,92%)] py-12 sm:py-14">
          <h1 className="mb-10 text-3xl font-extrabold text-[#0E2539]">
            QA Services
          </h1>

          <div className="space-y-6">
            {servicesData.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
        </div>

        {/* Want to Learn More? (Exact Tests Assured Bottom CTA) */}
        <section className="py-14 border-t border-slate-200/80 bg-slate-50/50">
          <div className="mx-auto w-[min(1140px,92%)] text-center">
            <h2 className="text-2xl font-bold text-[#0E2539]">
              Want to learn more?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 leading-relaxed">
              We&apos;re always happy to talk. Reach out and let&apos;s see how we can help.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-[#2F7CEF] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1E66D8]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
