"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, CheckSquare, Compass, ShieldCheck, Monitor, UserCheck, Workflow, Rocket, Search } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { trackEvent } from "@/lib/analytics";

const serviceIcons: Record<string, React.ReactNode> = {
  "functional-testing": <CheckSquare className="h-4 w-4 text-indigo-600" />,
  "exploratory-testing": <Compass className="h-4 w-4 text-indigo-600" />,
  "regression-testing": <ShieldCheck className="h-4 w-4 text-indigo-600" />,
  "compatibility-testing": <Monitor className="h-4 w-4 text-indigo-600" />,
  "usability-testing": <UserCheck className="h-4 w-4 text-indigo-600" />,
  "e2e-testing": <Workflow className="h-4 w-4 text-indigo-600" />,
  "release-validation": <Rocket className="h-4 w-4 text-indigo-600" />,
  "quality-audit": <Search className="h-4 w-4 text-indigo-600" />,
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-smooth">
      <nav
        className="shell flex min-h-[72px] items-center justify-between gap-6"
        aria-label="Main Navigation"
      >
        {/* Brand Wordmark & Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg"
          aria-label="Nishkama CodeLab Homepage"
        >
          <span
            className="inline-grid shrink-0 place-items-center rounded-xl bg-slate-900 text-white shadow-sm transition-transform group-hover:scale-105"
            style={{ width: "36px", height: "36px" }}
            aria-hidden="true"
          >
            {/* Custom geometric NCL monogram with subtle indigo center */}
            <svg
              viewBox="0 0 100 100"
              className="block w-5 h-5 text-indigo-400"
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
          <div className="flex flex-col">
            <span className="font-sans text-lg font-bold tracking-tight text-slate-900">
              Nishkama <span className="text-indigo-600">CodeLab</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 -mt-1 hidden sm:block">
              Independent QA &amp; Testing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/"
                ? "text-indigo-600 bg-indigo-50/70"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Services with Hover/Click Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                pathname.startsWith("/services")
                  ? "text-indigo-600 bg-indigo-50/70"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-indigo-600" : "text-slate-400"
                }`}
                aria-hidden="true"
              />
            </Link>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                className="absolute left-0 top-full pt-2 w-[540px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl grid grid-cols-2 gap-2">
                  <div className="col-span-2 pb-2 px-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      QA &amp; Testing Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                      <span>Overview Hub</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                  {siteConfig.serviceSubPages.map((sub) => {
                    const slug = sub.href.replace("/services/", "");
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 shrink-0 group-hover/item:bg-indigo-100 transition-colors">
                          {serviceIcons[slug] || <CheckSquare className="h-4 w-4 text-indigo-600" />}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover/item:text-indigo-600 transition-colors">
                            {sub.label}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 leading-normal">
                            {sub.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/quality-advocacy"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/quality-advocacy"
                ? "text-indigo-600 bg-indigo-50/70"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Quality Advocacy
          </Link>

          <Link
            href="/how-we-work"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/how-we-work"
                ? "text-indigo-600 bg-indigo-50/70"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            How We Work
          </Link>

          <Link
            href="/about"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/about"
                ? "text-indigo-600 bg-indigo-50/70"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
              pathname === "/contact"
                ? "text-indigo-600 bg-indigo-50/70"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact?need=assessment"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
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
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
          className="-mr-2 grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white border-t border-slate-200 p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-4">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/services" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                All Services Overview
              </Link>
            </div>

            {/* Mobile Sub-pages Accordion/List */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 pb-1">
                Individual Service Pages
              </p>
              {siteConfig.serviceSubPages.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  • {sub.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <Link
                href="/quality-advocacy"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/quality-advocacy" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Quality Advocacy
              </Link>
              <Link
                href="/how-we-work"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/how-we-work" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                How We Work
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/about" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                  pathname === "/contact" ? "bg-indigo-50 text-indigo-600" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <Link
              href="/contact?need=assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow transition-colors hover:bg-indigo-700"
            >
              <span>Get a QA Assessment</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="text-center text-xs text-slate-500">
              Quality Advocates for Your Product
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
