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
          className="group relative flex flex-col justify-between rounded-xl border border-[#E8E4DC] bg-[#FFFFFF] p-6 transition-smooth hover:border-[#282531]/40 hover:shadow-sm"
        >
          <div>
            <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-lg bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC] transition-smooth group-hover:bg-[#282531] group-hover:text-[#FAF8F5]">
              {iconMap[item.iconKey] || <Globe className="h-5 w-5" />}
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-[#282531]">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#706B78]">
              {item.description}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#E8E4DC]">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-[#706B78] mb-2">
              Representative Coverage
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.examples.map((ex) => (
                <span
                  key={ex}
                  className="rounded-md bg-[#FAF8F5] border border-[#E8E4DC] px-2 py-0.5 text-[10px] text-[#282531] font-medium"
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
