"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC]/80 transition-smooth">
      <nav
        className="shell flex h-[72px] items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Wordmark & Monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#282531] rounded-lg p-1"
          aria-label="Nishkama CodeLab Homepage"
        >
          <span
            className="inline-grid shrink-0 place-items-center rounded-lg bg-[#282531] text-[#FAF8F5] transition-smooth group-hover:scale-105"
            style={{ width: "34px", height: "34px" }}
            aria-hidden="true"
          >
            {/* Custom geometric NCL monogram */}
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
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-[#282531]">
              Nishkama CodeLab
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#706B78] -mt-1 hidden sm:block">
              Independent QA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-[#282531] bg-[#EFECE4] font-semibold"
                    : "text-[#706B78] hover:text-[#282531] hover:bg-[#FAF8F5]"
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  trackEvent({
                    name: "nav_click",
                    properties: { label: item.label, href: item.href },
                  });
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact?need=assessment"
            className="group inline-flex items-center gap-2 rounded-full bg-[#282531] px-5 py-2.5 text-sm font-medium text-[#FAF8F5] transition-smooth hover:bg-[#14121A] active:scale-[0.98] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#282531]"
            onClick={() => {
              trackEvent({
                name: "cta_click",
                properties: {
                  label: "Get a QA Assessment",
                  location: "Header",
                  destination: "/contact?need=assessment",
                },
              });
            }}
          >
            <span>Get a QA Assessment</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="-mr-2 grid h-11 w-11 place-items-center rounded-lg text-[#282531] lg:hidden hover:bg-[#EFECE4] transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#282531]"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#FAF8F5] border-t border-[#E8E4DC] p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-2">
            <p className="eyebrow px-3 mb-2">Navigation</p>
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-lg font-display font-medium transition-smooth ${
                    isActive
                      ? "bg-[#282531] text-[#FAF8F5]"
                      : "text-[#282531] hover:bg-[#EFECE4]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#E8E4DC] space-y-4">
            <Link
              href="/contact?need=assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#282531] px-6 py-3.5 text-base font-medium text-[#FAF8F5] shadow-sm transition-smooth hover:bg-[#14121A]"
            >
              <span>Get a QA Assessment</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <div className="text-center">
              <p className="text-xs text-[#706B78]">
                Quality Advocates for Your Product
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
