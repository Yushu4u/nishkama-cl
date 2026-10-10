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
    <div>
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow">Our Philosophy</p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-[4.25rem] text-[#282531]">
            We believe QA should speak for the customer.
          </h1>
          <div className="mt-6 max-w-2xl sm:mt-8">
            <p className="text-base leading-relaxed text-[#706B78] sm:text-xl">
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
      </section>

      {/* 2. THE CORE STORY & INDEPENDENT PERSPECTIVE */}
      <section className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Why We Exist</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl text-[#282531]">
                An independent quality layer for your team.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base leading-relaxed text-[#706B78]">
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

              <blockquote className="rounded-2xl border-l-4 border-[#282531] bg-[#FAF8F5] p-6 text-base font-display font-medium text-[#282531]">
                &ldquo;We don&apos;t want to be the team that simply says &lsquo;tested.&rsquo; We want
                to be the team that can confidently say, &lsquo;we looked at it from every important
                angle.&rsquo;&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE BELIEFS */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Convictions</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Three convictions that guide our work.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#282531]">
                1. Independence Breeds Honesty
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#706B78]">
                True QA requires an objective vantage point unclouded by internal sprint
                pressures or code author bias. We advocate solely for product health.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC]">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#282531]">
                2. Beyond The Happy Path
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#706B78]">
                Software reputation is won or lost in edge states: dropped wifi, concurrent updates,
                unusual device viewports, and unexpected user mistakes.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-[#FAF8F5] text-[#282531] border border-[#E8E4DC]">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#282531]">
                3. Evidence Over Opinions
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#706B78]">
                We don&apos;t file vague complaints. We provide reproducible steps, console logs,
                network traces, and video proofs so engineers can fix issues fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALLOUT BAND */}
      <section className="bg-[#282531] py-16 md:py-24 text-[#FAF8F5]">
        <div className="shell text-center max-w-3xl mx-auto">
          <p className="eyebrow text-[#FAF8F5]/60">Get In Touch</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl text-[#FAF8F5]">
            Ready for an independent quality partner?
          </h2>
          <p className="mt-5 text-base text-[#FAF8F5]/70 leading-relaxed sm:text-lg">
            Let&apos;s discuss how Nishkama CodeLab can plug into your release cycles and
            elevate product confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="dark" size="lg" withArrow>
              Start a QA Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
