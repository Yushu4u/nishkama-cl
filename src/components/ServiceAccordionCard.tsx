"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface CapabilityColumn {
  heading: string;
  items: string[];
}

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  capabilities: CapabilityColumn[];
  ctaText: string;
  ctaHref: string;
}

export function ServiceAccordionCard({ service }: { service: ServiceCardData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#0E2539]">
        {service.title}
      </h2>

      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 text-sm sm:text-base">
        {service.description}
      </p>

      {/* Dropdown Button */}
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

      {/* Dropdown Content - Clean unboxed columns matching Tests Assured */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 grid gap-6 pb-2 md:grid-cols-3 pt-4 border-t border-slate-100">
            {service.capabilities.map((cap) => (
              <div key={cap.heading} className="space-y-2">
                <h3 className="text-sm font-bold text-[#0E2539]">
                  {cap.heading}
                </h3>
                <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-slate-600">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-full mt-4 pt-3 border-t border-slate-100">
              <p className="text-sm text-slate-600">
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
