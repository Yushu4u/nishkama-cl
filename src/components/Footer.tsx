import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0E2539] text-slate-300 transition-smooth">
      <div className="shell py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Software QA Services Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software QA Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              {siteConfig.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal &amp; Trust
            </h3>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={`Email ${siteConfig.name}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-[#2F7CEF] hover:text-white whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-[#2F7CEF] shrink-0" aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              All inquiries reviewed within 1 business day under strict confidentiality.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 space-y-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.brand.assets.iconSquare}
                alt="Nishkama CodeLab Mark"
                width={22}
                height={22}
                className="h-5 w-5 rounded-md object-contain"
              />
              <p>
                &copy; {currentYear} {siteConfig.name}. All rights reserved.
              </p>
            </div>
            <p className="text-slate-500 text-[11px]">
              Independent QA &bull; Product Experience &bull; Quality Advocacy
            </p>
          </div>
          <p className="border-t border-slate-800/50 pt-4 text-[11px] text-slate-500/90 leading-relaxed text-center sm:text-left">
            All third-party product names, logos, and trademarks mentioned on this website are the property of their respective owners and are used solely to identify supported platforms and engineering integrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
