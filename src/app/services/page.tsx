import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceAccordionCard, ServiceCardData } from "@/components/ServiceAccordionCard";

export const metadata: Metadata = {
  title: "QA Services | Tests Assured Independent QA",
  description:
    "Specialized AR/VR/MR/XR testing, smart wearable QA, and automated software testing.",
};

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
              <ServiceAccordionCard key={svc.id} service={svc} />
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
