import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
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
import { detailedServices } from "@/data/services";
import { allServicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/Button";

const serviceIconMap: Record<string, LucideIcon> = {
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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return detailedServices.map((svc) => ({
    slug: svc.slug,
  }));
}

export const instant = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Software QA Services`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} QA`,
      "software testing services",
      "independent QA",
      "Nishkama CodeLab",
    ],
    openGraph: {
      title: `${service.title} | Nishkama CodeLab`,
      description: service.shortDescription,
      url: `${siteConfig.canonicalUrl}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = detailedServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. BREADCRUMBS BAR */}
      <nav
        aria-label="Breadcrumbs"
        className="border-b border-slate-200/80 bg-slate-50/70 py-3 text-xs text-slate-500"
      >
        <div className="shell flex items-center gap-1.5">
          <Link href="/" className="hover:text-slate-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link href="/services" className="hover:text-slate-800 transition-colors">
            Software QA Services
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-[#0E2539]">{service.title}</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(47,124,239,0.06),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold text-[#0E2539] tracking-tight sm:text-5xl sm:leading-[1.1]">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg font-bold text-[#2F7CEF] leading-relaxed">
              {service.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              {service.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={`/contact?need=${service.slug}`}
                variant="primary"
                size="lg"
                withArrow
                trackingLabel={`Get Started - ${service.title}`}
                trackingLocation="Service Hero"
              >
                Inquire About {service.title}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                trackingLabel="Talk to a Specialist"
                trackingLocation="Service Hero"
              >
                Talk to a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT & FIT SUMMARY */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] py-10 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(47,124,239,0.05),rgba(248,250,252,0))]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
          <div className="grid lg:grid-cols-12 rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
            <div className="lg:col-span-8 p-7 sm:p-8 flex flex-col justify-center">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF]">
                Why It Matters
              </span>
              <h2 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-[#0E2539]">
                Release &amp; user impact
              </h2>
              <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                {service.whyItMatters}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0E2539] text-white p-7 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-800">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                Best Fit For
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-200 font-medium">
                {service.recommendedFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE RELATED SERVICES */}
      <section className="border-b border-slate-200/80 bg-white py-14 sm:py-16">
        <div className="shell">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-5 border-b border-slate-200/70">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2F7CEF] block mb-1">
                COMPLEMENTARY DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0E2539]">
                Explore Other Software QA Services
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Pair disciplines to match your release cadence, architecture, and risk profile.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-[#0E2539] hover:border-[#2F7CEF] hover:bg-[#EFF6FF] hover:text-[#2F7CEF] transition-all whitespace-nowrap shrink-0"
            >
              <span>View All 9 Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {relatedServices.map((rel) => {
              const Icon = serviceIconMap[rel.slug] || CheckSquare;
              const catalogMeta = allServicesData.find((item) => item.slug === rel.slug);
              return (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_28px_-10px_rgba(14,37,57,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2F7CEF]/45 hover:shadow-[0_22px_44px_-12px_rgba(47,124,239,0.16)]"
                >
                  {/* Top electric-blue accent rail */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2F7CEF] via-[#60A5FA] to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Subtle top-right ambient glow */}
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2F7CEF]/[0.05] blur-2xl transition-colors duration-300 group-hover:bg-[#2F7CEF]/[0.12]"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#2F7CEF] to-[#1D4ED8] text-white shadow-md shadow-[#2F7CEF]/25 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      {catalogMeta?.categoryLabel && (
                        <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-slate-600">
                          {catalogMeta.categoryLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#0E2539] group-hover:text-[#2F7CEF] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {rel.shortDescription}
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
        </div>
      </section>

      {/* 5. BOTTOM CALLOUT BANNER */}
      <section className="relative overflow-hidden bg-[#0E2539] py-12 sm:py-16 text-white border-t border-[#2F7CEF]/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(47,124,239,0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to integrate {service.title} into your next release?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us about your upcoming milestones and tech stack. We&apos;ll scope a testing engagement mapped to your release risks.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Button
              href={`/contact?need=${service.slug}`}
              variant="primary"
              size="lg"
              withArrow
              trackingLabel={`Bottom CTA - ${service.title}`}
              trackingLocation="Service Page Bottom"
            >
              Start {service.title} Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
