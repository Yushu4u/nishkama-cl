"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Glasses,
  CheckSquare,
  Compass,
  ShieldCheck,
  Monitor,
  UserCheck,
  Workflow,
  Rocket,
  Search,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "xr-testing": <Glasses className="h-5 w-5 text-[#2F7CEF]" />,
  "functional-testing": <CheckSquare className="h-5 w-5 text-[#2F7CEF]" />,
  "exploratory-testing": <Compass className="h-5 w-5 text-[#2F7CEF]" />,
  "regression-testing": <ShieldCheck className="h-5 w-5 text-[#2F7CEF]" />,
  "compatibility-testing": <Monitor className="h-5 w-5 text-[#2F7CEF]" />,
  "usability-testing": <UserCheck className="h-5 w-5 text-[#2F7CEF]" />,
  "e2e-testing": <Workflow className="h-5 w-5 text-[#2F7CEF]" />,
  "release-validation": <Rocket className="h-5 w-5 text-[#2F7CEF]" />,
  "quality-audit": <Search className="h-5 w-5 text-[#2F7CEF]" />,
};

interface ServicesDirectoryProps {
  services: ServiceItem[];
}

export function ServicesDirectory({ services }: ServicesDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = () => {
    const nextState: Record<string, boolean> = {};
    filteredServices.forEach((s) => {
      nextState[s.id] = true;
    });
    setOpenItems(nextState);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  const allExpanded =
    filteredServices.length > 0 &&
    filteredServices.every((s) => !!openItems[s.id]);

  return (
    <div className="space-y-6">
      {/* Category Tabs & Expand/Collapse Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-[#2F7CEF] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            All Disciplines ({services.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("immersive")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeCategory === "immersive"
                ? "bg-[#2F7CEF] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            XR & Immersive (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("sprint")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeCategory === "sprint"
                ? "bg-[#2F7CEF] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            Core Sprint QA (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("audit")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeCategory === "audit"
                ? "bg-[#2F7CEF] text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            UX & Quality Audits (3)
          </button>
        </div>

        {/* Global Expand/Collapse Toggle */}
        <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          {allExpanded ? (
            <button
              type="button"
              onClick={handleCollapseAll}
              className="text-[#2F7CEF] hover:underline"
            >
              Collapse all
            </button>
          ) : (
            <button
              type="button"
              onClick={handleExpandAll}
              className="text-[#2F7CEF] hover:underline"
            >
              Expand all
            </button>
          )}
        </div>
      </div>

      {/* Services List (Tests Assured-style dropdown accordion, NO nested boxes) */}
      <div className="space-y-3.5 sm:space-y-4">
        {filteredServices.map((service) => {
          const isOpen = !!openItems[service.id];
          return (
            <article
              key={service.id}
              className={`rounded-2xl border transition-all duration-200 bg-white shadow-xs ${
                isOpen
                  ? "border-[#BFDBFE] ring-1 ring-[#2F7CEF]/15"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Card Header & Toggle Button */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] border border-[#BFDBFE]">
                      {iconMap[service.id] || (
                        <CheckSquare className="h-5 w-5 text-[#2F7CEF]" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E2539]">
                          {service.title}
                        </h2>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                          {service.categoryLabel}
                        </span>
                      </div>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Action Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleItem(service.id)}
                    aria-expanded={isOpen}
                    className="self-start shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-bold text-[#2F7CEF] transition-colors hover:bg-[#EFF6FF] hover:border-[#BFDBFE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7CEF]"
                  >
                    <span>{isOpen ? "Hide capabilities" : "View capabilities"}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Dropdown Capabilities Region - Clean Unboxed 3 Columns */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      {/* 3 Columns of Capabilities */}
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {service.capabilities.map((cap) => (
                          <div key={cap.heading} className="space-y-2.5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0E2539]">
                              {cap.heading}
                            </h3>
                            <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-slate-600">
                              {cap.items.map((item, idx) => (
                                <li key={idx} className="list-disc leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Footer Row: CTA Text & Direct Navigation Links */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
                        <p className="text-slate-600 italic">
                          {service.ctaText}
                        </p>
                        <div className="shrink-0 flex items-center gap-4">
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-1 font-bold text-[#2F7CEF] hover:text-[#1E66D8]"
                          >
                            <span>Dedicated Guide</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 font-bold text-slate-700 hover:text-[#2F7CEF]"
                          >
                            <span>Contact Us</span>
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
