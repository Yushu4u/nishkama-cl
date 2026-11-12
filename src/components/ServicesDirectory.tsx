import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Glasses,
  CheckSquare,
  Compass,
  ShieldCheck,
  Monitor,
  UserCheck,
  Workflow,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

const iconMap: Record<string, LucideIcon> = {
  "xr-testing": Glasses,
  "functional-testing": CheckSquare,
  "exploratory-testing": Compass,
  "regression-testing": ShieldCheck,
  "compatibility-testing": Monitor,
  "usability-testing": UserCheck,
  "e2e-testing": Workflow,
  "release-validation": Rocket,
  "quality-audit": Search,
};

interface ServicesDirectoryProps {
  services: ServiceItem[];
}

export function ServicesDirectory({ services }: ServicesDirectoryProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 items-stretch">
      {services.map((service, index) => {
        const Icon = iconMap[service.id] || CheckSquare;
        const numberLabel = String(index + 1).padStart(2, "0");

        return (
          <Link
            key={service.id}
            href={service.href}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_8px_28px_-10px_rgba(14,37,57,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2F7CEF]/45 hover:shadow-[0_22px_44px_-12px_rgba(47,124,239,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7CEF]"
          >
            {/* Top glowing electric-blue accent edge */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2F7CEF] via-[#60A5FA] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            {/* Subtle top-right ambient radial glow */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#2F7CEF]/[0.05] blur-2xl transition-colors duration-300 group-hover:bg-[#2F7CEF]/[0.12]"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Top Row: Solid Gradient Emblem + Architectural Index */}
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#2F7CEF] to-[#1D4ED8] text-white shadow-md shadow-[#2F7CEF]/25 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <span
                  className="text-3xl sm:text-4xl font-black tracking-tighter text-slate-200 leading-none select-none transition-colors duration-300 group-hover:text-[#2F7CEF]/25"
                  aria-hidden="true"
                >
                  {numberLabel}
                </span>
              </div>

              {/* Category Pill */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-blue-200/80 bg-[#EFF6FF] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF]" />
                  <span>{service.categoryLabel}</span>
                </span>
              </div>

              {/* Enhanced Display Title */}
              <h3 className="mt-3.5 text-xl sm:text-[1.4rem] sm:min-h-[3.6rem] font-extrabold tracking-tight text-[#0E2539] leading-snug transition-colors duration-200 group-hover:text-[#2F7CEF]">
                {service.title}
              </h3>

              {/* Small Concise Gist */}
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600 font-normal">
                {service.gist}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2F7CEF]">
              <span>Explore Discipline</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
