import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Nishkama CodeLab — Quality Advocates for Your Product",
  description:
    "We believe QA should speak for the customer. Nishkama CodeLab provides an independent quality layer for product and engineering teams, looking at software from every critical angle.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR PHILOSOPHY</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              We believe QA should speak for the customer.
            </h1>
            <div className="mt-6 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Nishkama CodeLab is a QA and product quality company built around a simple idea:
                software quality is not only about whether a feature works. It is about whether
                the product works for the people who depend on it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="badge-pill">WHY WE EXIST</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                An independent quality layer for your team.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
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

              <blockquote className="rounded-2xl border-l-4 border-indigo-600 bg-white p-6 shadow-sm text-base font-semibold text-slate-900">
                &ldquo;We don&apos;t want to be the team that simply says &lsquo;tested.&rsquo; We want
                to be the team that can confidently say, &lsquo;we looked at it from every important
                angle.&rsquo;&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE BELIEFS */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR CONVICTIONS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Three convictions that guide our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:border-indigo-200 transition-all">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. Independence Breeds Honesty
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                True QA requires an objective vantage point unclouded by internal sprint
                pressures or code author bias. We advocate solely for product health.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:border-indigo-200 transition-all">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. Beyond The Happy Path
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                Software reputation is won or lost in edge states: dropped wifi, concurrent updates,
                unusual device viewports, and unexpected user mistakes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm hover:border-indigo-200 transition-all">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. Evidence Over Opinions
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                We don&apos;t file vague complaints. We provide reproducible steps, console logs,
                network traces, and video proofs so engineers can fix issues fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALLOUT BAND */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            GET IN TOUCH
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Ready for an independent quality partner?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Let&apos;s discuss how Nishkama CodeLab can plug into your release cycles and
            elevate product confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Start a QA Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
