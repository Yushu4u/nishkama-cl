"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { DetailedService } from "@/data/services";

interface ServiceCardProps {
  service: DetailedService;
  defaultExpanded?: boolean;
}

export function ServiceCard({ service, defaultExpanded = false }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <article className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-all">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="badge-pill">
          SERVICE {service.number}
        </span>
        <span className="text-xs font-semibold text-slate-500">
          Best for: {service.recommendedFor.split(",")[0]}
        </span>
      </div>

      {/* Title & Tagline */}
      <h3 className="mt-4 text-2xl font-bold text-[#0E2539] tracking-tight">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-3xl">
        {service.longDescription}
      </p>

      {/* Accordion Toggle (Inspired by Tests Assured) */}
      <div className="mt-5 flex items-center justify-between flex-wrap gap-4 pt-2">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2F7CEF] hover:text-[#1E66D8] transition-colors focus:outline-none"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? "Hide capabilities" : "View capabilities"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {/* Direct Link to Dedicated Sub-Page */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#2F7CEF] transition-colors"
        >
          <span>Full Dedicated Page</span>
          <ArrowRight className="h-4 w-4 text-[#2F7CEF]" aria-hidden="true" />
        </Link>
      </div>

      {/* Expandable Capabilities Grid */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilitiesGrouped.map((group) => (
              <div
                key={group.heading}
                className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  {group.heading}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
            <span className="text-slate-500 italic">
              Need custom scoping for this testing discipline?
            </span>
            <div className="flex items-center gap-4">
              <Link
                href={`/services/${service.slug}`}
                className="font-bold text-[#2F7CEF] hover:text-[#1E66D8] underline underline-offset-4"
              >
                Read deep dive guide →
              </Link>
              <Link
                href={`/contact?need=${service.slug}`}
                className="rounded-full bg-[#2F7CEF] px-4 py-1.5 text-white font-bold hover:bg-[#1E66D8] transition-colors shadow-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
