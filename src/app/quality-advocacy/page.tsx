import type { Metadata } from "next";
import { Ear, Hammer, Eye } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Quality Advocacy — Quality from the User's Perspective | Nishkama CodeLab",
  description:
    "Discover Quality Advocacy: Nishkama CodeLab's differentiated approach uniting technical QA, real-world dogfooding, and customer feedback analysis into actionable product excellence.",
};

export default function QualityAdvocacyPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">OUR DIFFERENTIATOR</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Don&apos;t just test the product. Advocate for the person using it.
            </h1>
            <div className="mt-6 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
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
        </div>
      </section>

      {/* 2. THE THREE CORE LENSES */}
      <section
        id="three-lenses"
        className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE CORE LENSES</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Three lenses that reveal the complete picture.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Traditional testing focuses almost exclusively on technical verification.
              Quality Advocacy layers experiential validation and customer telemetry on top.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Lens 1: BREAK IT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LENS 01
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                    BREAK IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Adversarial QA
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Find defects, edge cases, unexpected behavior, and catastrophic failure points.
                  We subject your application to rigorous stress, concurrency spikes, bad inputs,
                  and interrupted states.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <p className="font-bold text-slate-800">Key Investigative Focus:</p>
                  <p>• State collision across simultaneous tabs and devices</p>
                  <p>• Malformed network payloads &amp; edge validations</p>
                  <p>• Memory leaks &amp; slow-degradation bottlenecks</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-600">
                Mandate: &ldquo;Does the software operate correctly under stress?&rdquo;
              </div>
            </div>

            {/* Lens 2: USE IT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LENS 02
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-800">
                    USE IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Product Dogfooding
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Walk through realistic customer journeys and experience the product as a real user.
                  We step into the mindset of a customer trying to complete high-value work without
                  developer shortcuts or insider knowledge.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <p className="font-bold text-slate-800">Key Investigative Focus:</p>
                  <p>• First-time onboarding cognitive friction</p>
                  <p>• Vague error dialogs leaving users stranded</p>
                  <p>• Awkward multi-step workflows &amp; form friction</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-600">
                Mandate: &ldquo;Does it feel natural and frictionless?&rdquo;
              </div>
            </div>

            {/* Lens 3: LISTEN TO IT */}
            <div className="rounded-2xl border border-indigo-200 bg-gradient-to-b from-indigo-50/50 via-white to-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-indigo-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    LENS 03 (Differentiator)
                  </span>
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                    LISTEN TO IT
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm">
                    <Ear className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Customer Signals
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Study customer pain points, support tickets, reviews, and telemetry to identify
                  recurring experience problems. We turn quiet customer attrition into concrete
                  engineering priorities.
                </p>

                <div className="mt-6 pt-5 border-t border-indigo-100 space-y-2 text-xs text-slate-600">
                  <p className="font-bold text-slate-800">Key Investigative Focus:</p>
                  <p>• Recurring support ticket patterns &amp; root causes</p>
                  <p>• Churn feedback &amp; negative review sentiment</p>
                  <p>• Dropped funnel telemetry &amp; abandoned workflows</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-indigo-100 text-xs font-bold text-indigo-700">
                Mandate: &ldquo;What are customers actively struggling with?&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW OBSERVATIONS BECOME ACTIONABLE EVIDENCE */}
      <section className="border-b border-slate-200/80 bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE TRANSLATION PIPELINE</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              From raw observations to engineering action.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              We never dump vague opinions on product managers. Our Quality Advocacy methodology
              follows a rigorous evidentiary standard.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
              <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
                STEP 01
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                1. Empirical Evidence
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Every observation is captured with verifiable proof: screen recordings,
                reproducible step sequences, network inspects, and system environment state.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
              <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
                STEP 02
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                2. User Impact Synthesis
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We contextualize the defect against real business metrics: Does this block
                onboarding? Does it risk checkout failure? Does it erode trust for enterprise buyers?
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8">
              <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
                STEP 03
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                3. Actionable Remedies
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                We partner with engineering to recommend pragmatic solutions — from input masks
                and state locks to improved error states and API idempotency guards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE: TRADITIONAL QA VS QUALITY ADVOCACY */}
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">DIRECT COMPARISON</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Traditional QA vs. Quality Advocacy
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Why adding a customer-centric advocacy lens transforms product release outcomes.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-4 px-6">Dimension</th>
                  <th className="py-4 px-6">Traditional QA</th>
                  <th className="py-4 px-6 bg-indigo-50/70 text-indigo-700 font-bold">
                    NCL Quality Advocacy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Primary Mandate</td>
                  <td className="py-4 px-6 text-slate-600">Verify specifications and close tickets</td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30">
                    Advocate for the user experience &amp; eliminate product risk
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Testing Approach</td>
                  <td className="py-4 px-6 text-slate-600">Rigid scripted checklists &amp; happy-path suites</td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30">
                    Risk-based exploratory probing, dogfooding &amp; unscripted edge cases
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Customer Feedback</td>
                  <td className="py-4 px-6 text-slate-600">Ignored; seen as customer support&apos;s job</td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30">
                    Systematically analyzed for recurring quality defects and churn signals
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Bug Reporting</td>
                  <td className="py-4 px-6 text-slate-600">Isolated tickets without customer context</td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30">
                    Reproducible evidence with severity, blast radius, and UX impact
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Fix Verification</td>
                  <td className="py-4 px-6 text-slate-600">Basic retest of ticket step</td>
                  <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30">
                    Deep regression sweep around adjacent systems and workflow sanity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CALLOUT CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            EXPERIENCE THE DIFFERENCE
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Put Your Product Through a Quality Reality Check.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Let us inspect your core journeys, find what breaks, and show you what
            your customers are experiencing before your next release.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact?need=advocacy" variant="primary" size="lg" withArrow>
              Start a Quality Advocacy Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
