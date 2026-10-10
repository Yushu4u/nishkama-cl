import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF8F5] transition-smooth">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#282531] rounded-lg"
              aria-label="Nishkama CodeLab Homepage"
            >
              <span
                className="inline-grid shrink-0 place-items-center rounded-lg bg-[#282531] text-[#FAF8F5]"
                style={{ width: "34px", height: "34px" }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="block w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="26" y1="20" x2="26" y2="80" />
                  <line x1="26" y1="20" x2="74" y2="80" />
                  <line x1="74" y1="20" x2="74" y2="80" />
                  <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-[#282531]">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-4 text-sm font-medium text-[#282531]">
              {siteConfig.tagline}
            </p>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#706B78]">
              We help product teams find what breaks, experience what real users
              experience, and eliminate quality risks before they become customer problems.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.name}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E4DC] bg-white px-4 py-2 text-xs font-medium text-[#282531] transition-smooth hover:bg-[#282531] hover:text-[#FAF8F5]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Services */}
            <div>
              <p className="eyebrow mb-4">Services</p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#706B78] transition-smooth hover:text-[#282531] hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="eyebrow mb-4">Company</p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#706B78] transition-smooth hover:text-[#282531] hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Standards */}
            <div>
              <p className="eyebrow mb-4">Legal & Trust</p>
              <ul className="space-y-2.5">
                {siteConfig.footerLinks.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#706B78] transition-smooth hover:text-[#282531] hover:underline hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-[#282531] transition-smooth hover:text-[#14121A]"
                  >
                    <span>Request NDA / Assessment</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8E4DC] pt-8 text-xs text-[#706B78]">
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
