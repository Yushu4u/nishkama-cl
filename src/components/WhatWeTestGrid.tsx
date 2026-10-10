import React from "react";
import {
  Globe,
  Smartphone,
  Laptop,
  Code2,
  Layers,
  ShieldCheck,
  Cloud,
  GitBranch,
} from "lucide-react";
import { platformCoverages, PlatformCoverage } from "@/data/whatWeTest";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-5 w-5" />,
  smartphone: <Smartphone className="h-5 w-5" />,
  laptop: <Laptop className="h-5 w-5" />,
  code: <Code2 className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />,
  shield: <ShieldCheck className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  "git-branch": <GitBranch className="h-5 w-5" />,
};

interface WhatWeTestGridProps {
  limit?: number;
  className?: string;
}

export function WhatWeTestGrid({ limit, className = "" }: WhatWeTestGridProps) {
  const items = limit ? platformCoverages.slice(0, limit) : platformCoverages;

  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((item: PlatformCoverage) => (
        <div
          key={item.id}
          className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all hover:border-[#BFDBFE] hover:shadow-md"
        >
          <div>
            <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-[#2F7CEF] border border-[#BFDBFE] transition-colors group-hover:bg-[#2F7CEF] group-hover:text-white">
              {iconMap[item.iconKey] || <Globe className="h-5 w-5" />}
            </div>
            <h3 className="text-base font-bold tracking-tight text-[#0E2539]">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">
              Representative Coverage
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.examples.map((ex) => (
                <span
                  key={ex}
                  className="rounded-md bg-slate-50 border border-slate-200/60 px-2 py-0.5 text-[10px] text-slate-700 font-medium"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
