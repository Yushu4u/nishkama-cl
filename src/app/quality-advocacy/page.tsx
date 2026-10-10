import React from "react";
import type { Metadata } from "next";
import { Ear, Hammer, Eye } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Quality Advocacy — Quality from the User's Perspective",
  description:
    "Discover Quality Advocacy: Nishkama CodeLab's differentiated approach uniting technical QA, real-world dogfooding, and customer feedback analysis into actionable product excellence.",
};

export default function QualityAdvocacyPage() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-24">
        <div className="shell">
          <p className="eyebrow">Our Differentiator</p>
          <h1 className="mt-5 max-w-[20ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-[4.25rem] text-[#282531]">
            Don&apos;t just test the product. Advocate for the person using it.
          </h1>
          <div className="mt-6 max-w-2xl sm:mt-8">
            <p className="text-base leading-relaxed text-[#706B78] sm:text-xl">
              Quality Advocacy is Nishkama CodeLab&apos;s differentiated approach to product quality.
              We combine testing discipline with real-world product usage and customer perspective
              to help teams see issues from outside their development bubble.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?need=advocacy" variant="primary" size="lg" withArrow>
                Put Your Product Through a Quality Reality Check
              </Button>
              <Button href="#three-lenses" variant="outline" size="lg">
                Explore the Three Lenses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE LENSES */}
      <section
        id="three-lenses"
        className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">The Core Lenses</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Three lenses that reveal the complete picture.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Traditional testing focuses almost exclusively on technical verification.
              Quality Advocacy layers experiential validation and customer telemetry on top.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Lens 1: BREAK IT */}
            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#706B78]">
                    LENS 01
                  </span>
                  <span className="rounded-full bg-[#EFECE4] px-3 py-1 text-xs font-bold text-[#282531]">
                    BREAK IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#282531] text-[#FAF8F5]">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#282531]">
                    Adversarial QA
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
                  Find defects, edge cases, unexpected behavior, and catastrophic failure points.
                  We subject your application to rigorous stress, concurrency spikes, bad inputs,
                  and interrupted states.
                </p>

                <div className="mt-6 pt-5 border-t border-[#E8E4DC] space-y-2 text-xs text-[#706B78]">
                  <p className="font-semibold text-[#282531]">Key Investigative Focus:</p>
                  <p>• State collision across simultaneous tabs and devices</p>
                  <p>• Malformed network payloads &amp; edge validations</p>
                  <p>• Memory leaks &amp; slow-degradation bottlenecks</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E4DC] text-xs font-medium text-[#282531]">
                Question: &ldquo;Does the software operate correctly?&rdquo;
              </div>
            </div>

            {/* Lens 2: USE IT */}
            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FAF8F5] p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#706B78]">
                    LENS 02
                  </span>
                  <span className="rounded-full bg-[#EFECE4] px-3 py-1 text-xs font-bold text-[#282531]">
                    USE IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#282531] text-[#FAF8F5]">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#282531]">
                    Product Dogfooding
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
                  Walk through realistic customer journeys and experience the product as a real user.
                  We step into the mindset of a customer trying to complete high-value work without
                  developer bias or shortcuts.
                </p>

                <div className="mt-6 pt-5 border-t border-[#E8E4DC] space-y-2 text-xs text-[#706B78]">
                  <p className="font-semibold text-[#282531]">Key Investigative Focus:</p>
                  <p>• First-time onboarding cognitive friction</p>
                  <p>• Vague error dialogs leaving users stranded</p>
                  <p>• Awkward multi-step workflows &amp; form friction</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E4DC] text-xs font-medium text-[#282531]">
                Question: &ldquo;Does it feel natural and frictionless?&rdquo;
              </div>
            </div>

            {/* Lens 3: LISTEN TO IT */}
            <div className="rounded-2xl border border-[#282531] bg-[#282531] p-8 text-[#FAF8F5] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#FAF8F5]/15">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/60">
                    LENS 03 (Differentiator)
                  </span>
                  <span className="rounded-full bg-[#FAF8F5] px-3 py-1 text-xs font-bold text-[#282531]">
                    LISTEN TO IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FAF8F5] text-[#282531]">
                    <Ear className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#FAF8F5]">
                    Customer Signals
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#FAF8F5]/80">
                  Study customer pain points, support tickets, reviews, and telemetry to identify
                  recurring experience problems. We turn quiet customer attrition into concrete
                  engineering priorities.
                </p>

                <div className="mt-6 pt-5 border-t border-[#FAF8F5]/15 space-y-2 text-xs text-[#FAF8F5]/70">
                  <p className="font-semibold text-[#FAF8F5]">Key Investigative Focus:</p>
                  <p>• Recurring support ticket patterns &amp; root causes</p>
                  <p>• Churn feedback &amp; negative review sentiment</p>
                  <p>• Dropped funnel telemetry &amp; abandoned workflows</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#FAF8F5]/15 text-xs font-medium text-[#FAF8F5]">
                Question: &ldquo;What are customers actively struggling with?&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW OBSERVATIONS BECOME ACTIONABLE EVIDENCE */}
      <section className="border-b border-[#E8E4DC] bg-[#FAF8F5] py-16 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">The Translation Pipeline</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              From raw observations to engineering action.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              We never dump vague opinions on product managers. Our Quality Advocacy methodology
              follows a rigorous evidentiary standard.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <span className="font-display text-sm font-semibold tracking-wider text-[#706B78]">
                STEP 01
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-[#282531]">
                1. Empirical Evidence
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#706B78]">
                Every observation is captured with verifiable proof: screen recordings,
                reproducible step sequences, network inspects, and system environment state.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <span className="font-display text-sm font-semibold tracking-wider text-[#706B78]">
                STEP 02
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-[#282531]">
                2. User Impact Synthesis
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#706B78]">
                We contextualize the defect against real business metrics: Does this block
                onboarding? Does it risk checkout failure? Does it erode trust for enterprise buyers?
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] p-8">
              <span className="font-display text-sm font-semibold tracking-wider text-[#706B78]">
                STEP 03
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-[#282531]">
                3. Actionable Remedies
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#706B78]">
                We partner with engineering to recommend pragmatic solutions — from input masks
                and state locks to improved error states and API idempotency guards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE: TRADITIONAL QA VS QUALITY ADVOCACY */}
      <section className="border-b border-[#E8E4DC] bg-[#FFFFFF] py-16 md:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Direct Comparison</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-[3.25rem] text-[#282531]">
              Traditional QA vs. Quality Advocacy
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#706B78] sm:text-lg">
              Why adding a customer-centric advocacy lens transforms product outcomes.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-[#E8E4DC] bg-[#FFFFFF] shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-[#E8E4DC] bg-[#FAF8F5] text-xs font-semibold uppercase tracking-wider text-[#706B78]">
                <tr>
                  <th className="py-4 px-6">Dimension</th>
                  <th className="py-4 px-6">Traditional QA</th>
                  <th className="py-4 px-6 bg-[#EFECE4]/60 text-[#282531] font-bold">
                    NCL Quality Advocacy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4DC]">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#282531]">Primary Mandate</td>
                  <td className="py-4 px-6 text-[#706B78]">Verify specifications and close tickets</td>
                  <td className="py-4 px-6 font-medium text-[#282531] bg-[#FAF8F5]/50">
                    Advocate for the user experience &amp; eliminate product risk
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#282531]">Testing Approach</td>
                  <td className="py-4 px-6 text-[#706B78]">Rigid scripted checklists &amp; happy-path suites</td>
                  <td className="py-4 px-6 font-medium text-[#282531] bg-[#FAF8F5]/50">
                    Risk-based exploratory probing, dogfooding &amp; unscripted edge cases
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#282531]">Customer Feedback</td>
                  <td className="py-4 px-6 text-[#706B78]">Ignored; seen as customer support&apos;s job</td>
                  <td className="py-4 px-6 font-medium text-[#282531] bg-[#FAF8F5]/50">
                    Systematically analyzed for recurring quality defects and churn signals
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#282531]">Bug Reporting</td>
                  <td className="py-4 px-6 text-[#706B78]">Isolated tickets without customer context</td>
                  <td className="py-4 px-6 font-medium text-[#282531] bg-[#FAF8F5]/50">
                    Reproducible evidence with severity, blast radius, and UX impact
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#282531]">Fix Verification</td>
                  <td className="py-4 px-6 text-[#706B78]">Basic retest of ticket step</td>
                  <td className="py-4 px-6 font-medium text-[#282531] bg-[#FAF8F5]/50">
                    Deep regression sweep around adjacent systems and workflow sanity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CALLOUT CTA */}
      <section className="bg-[#282531] py-16 md:py-24 text-[#FAF8F5]">
        <div className="shell text-center max-w-3xl mx-auto">
          <p className="eyebrow text-[#FAF8F5]/60">Experience the Difference</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl text-[#FAF8F5]">
            Put Your Product Through a Quality Reality Check.
          </h2>
          <p className="mt-5 text-base text-[#FAF8F5]/70 leading-relaxed sm:text-lg">
            Let us inspect your core journeys, find what breaks, and show you what
            your customers are experiencing before your next release.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact?need=advocacy" variant="dark" size="lg" withArrow>
              Start a Quality Advocacy Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
