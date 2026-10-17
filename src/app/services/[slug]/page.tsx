import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileCheck2,
  Bug,
  Layers,
} from "lucide-react";
import { detailedServices } from "@/data/services";
import { Button } from "@/components/Button";

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
    title: `${service.title} — QA Services | Nishkama CodeLab`,
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
      url: `https://nishkamacodelab.com/services/${service.slug}`,
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
            Services
          </Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-[#0E2539]">{service.title}</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-[#EFF6FF]/50 via-white to-white py-14 sm:py-20">
        <div className="shell">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge-pill">
                SERVICE {service.number}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Independent QA Discipline
              </span>
            </div>

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

      {/* 3. WHY IT MATTERS CALLOUT */}
      <section className="border-b border-slate-200/80 bg-slate-50/60 py-12 sm:py-16">
        <div className="shell">
          <div className="rounded-2xl border border-[#BFDBFE] bg-white p-7 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F7CEF]">
                Business &amp; Product Impact
              </span>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0E2539]">
                Why {service.title} matters for your release
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.whyItMatters}
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 shrink-0 text-xs text-slate-600 space-y-1.5 md:w-64">
              <span className="font-bold text-[#0E2539] block">Recommended Context:</span>
              <p>{service.recommendedFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GROUPED CAPABILITIES */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <div className="shell">
          <div className="max-w-2xl mb-12">
            <span className="badge-pill mb-3">
              Deep Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2539] tracking-tight">
              What we validate in {service.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Structured inspection across core system logic, edge states, and data consistency.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.capabilitiesGrouped.map((grp) => (
              <div
                key={grp.heading}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-sm hover:border-[#BFDBFE] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                  <Layers className="h-4 w-4 text-[#2F7CEF] shrink-0" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0E2539]">
                    {grp.heading}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {grp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F7CEF] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRACTICAL CHECKLIST */}
      <section className="border-b border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="badge-pill mb-3">
                Real Scenarios
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2539] tracking-tight">
                Practical verification checklist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Here are examples of real real-world verification paths our QA specialists execute during this engagement.
              </p>

              <div className="mt-8 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF]/60 p-6">
                <div className="flex items-center gap-2 mb-2 text-[#2F7CEF] font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Quality Guarantee</span>
                </div>
                <p className="text-xs text-[#0E2539] leading-relaxed">
                  Every check is validated with environment metadata, reproducible instructions, and cross-browser confirmation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <ul className="space-y-4">
                  {service.whatWeCheck.map((check, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <CheckCircle2 className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DELIVERABLES & TYPICAL DEFECTS CAUGHT */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Deliverables */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <FileCheck2 className="h-5 w-5 text-[#2F7CEF]" />
                <h3 className="text-lg font-bold text-[#0E2539]">
                  Deliverables &amp; Artifacts
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Defects Caught */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-7 sm:p-8">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                <Bug className="h-5 w-5 text-rose-600" />
                <h3 className="text-lg font-bold text-[#0E2539]">
                  Sample Bugs Caught in this Discipline
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {service.typicalBugsCaught.map((bug) => (
                  <li key={bug} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{bug}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXECUTION WORKFLOW */}
      <section className="border-b border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-pill mb-3">
              Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2539] tracking-tight">
              How we execute {service.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A disciplined four-step cadence ensuring seamless integration with your engineers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.executionSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#2F7CEF] font-mono">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-[#0E2539]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXPLORE RELATED SERVICES */}
      <section className="border-b border-slate-200/80 bg-white py-16">
        <div className="shell">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#0E2539]">
                Explore Other QA Services
              </h3>
              <p className="text-xs text-slate-500">
                Discover complementary testing disciplines for comprehensive coverage.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-[#2F7CEF] hover:text-[#1E66D8] flex items-center gap-1"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="rounded-xl border border-slate-200/80 bg-white p-5 hover:border-[#BFDBFE] hover:shadow-md transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  SERVICE {rel.number}
                </span>
                <h4 className="mt-1 text-sm font-bold text-[#0E2539] group-hover:text-[#2F7CEF] transition-colors">
                  {rel.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                  {rel.shortDescription}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#2F7CEF]">
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALLOUT BANNER */}
      <section className="bg-[#0E2539] py-16 sm:py-20 text-white">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="badge-pill bg-[#163A57] text-[#BFDBFE] border-[#2F7CEF]/40 mb-4">
            Get Started
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to integrate {service.title} into your next release?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us about your upcoming milestones and tech stack. We&apos;ll scope a custom testing engagement tailored to your risk profile.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              href={`/contact?need=${service.slug}`}
              variant="dark"
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
