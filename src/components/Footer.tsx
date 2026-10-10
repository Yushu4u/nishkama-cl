import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300 transition-smooth">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label="Nishkama CodeLab Homepage"
            >
              <span
                className="inline-grid shrink-0 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm"
                style={{ width: "36px", height: "36px" }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="block w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="26" y1="20" x2="26" y2="80" />
                  <line x1="26" y1="20" x2="74" y2="80" />
                  <line x1="74" y1="20" x2="74" y2="80" />
                  <circle cx="50" cy="50" r="7" fill="white" stroke="none" />
                </svg>
              </span>
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                Nishkama <span className="text-indigo-400">CodeLab</span>
              </span>
            </Link>

            <p className="mt-3 text-sm font-semibold text-slate-200">
              {siteConfig.tagline}
            </p>

            <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-400">
              We help product teams find what breaks, experience what real users
              experience, and eliminate quality risks before they become customer problems.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.name}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-indigo-500 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Services with all 8 dedicated sub-pages */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                QA Services
              </p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-slate-400 transition-colors hover:text-indigo-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Company
              </p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-slate-400 transition-colors hover:text-indigo-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Standards */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Legal &amp; Trust
              </p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-slate-400 transition-colors hover:text-indigo-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact?need=assessment"
                    className="group inline-flex items-center gap-1 text-xs font-bold text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    <span>Request Assessment</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Quality Advocates for Your Product.
          </p>
          <p className="text-right">
            Independent QA &amp; Product Quality Services
          </p>
        </div>
      </div>
    </footer>
  );
}
