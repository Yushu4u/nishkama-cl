import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Nishkama CodeLab — Quality Advocates for Your Product",
  description:
    "We believe QA should speak for the customer. Nishkama CodeLab provides an independent quality layer for product and engineering teams, looking at software from every critical angle.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0E2539]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(47,124,239,0.06),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR PHILOSOPHY</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0E2539] leading-[1.08]">
              We believe QA should speak for the customer.
            </h1>
            <div className="mt-4 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Nishkama CodeLab is a QA and product quality company built around a simple idea:
                software quality is not only about whether a feature works. It is about whether
                the product works for the people who depend on it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3.5">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  Work With Us
                </Button>
                <Button href="/quality-advocacy" variant="outline" size="lg">
                  Our Advocacy Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE STORY & INDEPENDENT PERSPECTIVE */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="badge-pill">WHY WE EXIST</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#0E2539] leading-[1.1]">
                An independent quality layer for your team.
              </h2>

              <blockquote className="mt-6 rounded-2xl border-l-4 border-[#2F7CEF] bg-white p-6 shadow-sm text-sm sm:text-base font-semibold text-[#0E2539] leading-relaxed">
                &ldquo;We don&apos;t want to be the team that simply says &lsquo;tested.&rsquo; We want
                to be the team that can confidently say, &lsquo;we looked at it from every important
                angle.&rsquo;&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600">
              <p>
                When engineers test their own code, they naturally exercise the paths they built.
                They know the expected shortcuts, the optimal order of operations, and the inputs
                the system likes best.
              </p>
              <p>
                Real users don&apos;t have that insider roadmap. They click back when a modal is loading,
                switch browser tabs mid-transaction, paste unexpected formatting into fields, and run
                into confusing friction that never appeared in the developer&apos;s local environment.
              </p>
              <p>
                We work as an independent quality layer for product and engineering teams — finding
                issues, validating real-world journeys, and turning observations into actionable
                quality improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALLOUT BAND */}
      <section className="relative overflow-hidden bg-[#0E2539] text-white py-12 md:py-16 border-t border-[#2F7CEF]/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(47,124,239,0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Ready for an independent quality partner?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Let&apos;s discuss how Nishkama CodeLab can plug into your release cycles and
            elevate product confidence.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start a QA Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
