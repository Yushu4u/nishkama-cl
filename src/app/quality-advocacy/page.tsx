import type { Metadata } from "next";
import { Bug, Eye, CheckCircle2 } from "lucide-react";
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
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">QUALITY ADVOCACY</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Don&apos;t just test the product. Advocate for the person using it.
            </h1>
            <div className="mt-4 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Quality Advocacy is Nishkama CodeLab&apos;s differentiated approach to product quality.
                We combine testing discipline with real-world product usage and customer perspective
                to help teams see issues from outside their development bubble.
              </p>
              <div className="mt-6 flex flex-wrap gap-3.5">
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
        className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16"
      >
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE CORE LENSES</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Three lenses that reveal the complete picture.
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Traditional testing focuses almost exclusively on technical verification.
              Quality Advocacy unites deep bug hunting, continuous dogfooding, and an uncompromising reality check.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Lens 1: BUG HUNTING */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LENS 01
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-[#2F7CEF] border border-[#BFDBFE]">
                    <Bug className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Bug Hunting
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Find defects, edge cases, unexpected behavior, and catastrophic failure points.
                  We subject your application to rigorous stress, concurrency spikes, bad inputs,
                  and interrupted states.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 min-h-[58px] flex items-center text-xs font-semibold text-[#2F7CEF] leading-relaxed">
                Mandate: &ldquo;Does the software operate correctly under stress?&rdquo;
              </div>
            </div>

            {/* Lens 2: DOGFOODING */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LENS 02
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-[#2F7CEF] border border-[#BFDBFE]">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Dogfooding
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Walk through realistic customer journeys and experience the product as a real user.
                  We step into the mindset of a customer trying to complete high-value work without
                  developer shortcuts or insider knowledge.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 min-h-[58px] flex items-center text-xs font-semibold text-[#2F7CEF] leading-relaxed">
                Mandate: &ldquo;Does the product feel natural, intuitive, and frictionless?&rdquo;
              </div>
            </div>

            {/* Lens 3: REALITY CHECK */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[#BFDBFE] transition-all">
              <div>
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LENS 03
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFF6FF] text-[#2F7CEF] border border-[#BFDBFE]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Reality Check
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Compare product promises against real-world customer reality. We study real customer
                  signals, telemetry drops, and user feedback to give founders and engineering leads an
                  honest, unvarnished quality verdict.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 min-h-[58px] flex items-center text-xs font-semibold text-[#2F7CEF] leading-relaxed">
                Mandate: &ldquo;Is the product genuinely ready for paying customers?&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW OBSERVATIONS BECOME ACTIONABLE EVIDENCE */}
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="badge-pill">THE TRANSLATION PIPELINE</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              From raw observations to engineering action.
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              We never dump vague opinions on product managers. Our Quality Advocacy methodology
              follows a rigorous evidentiary standard.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-bold tracking-wider text-[#2F7CEF] uppercase">
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-bold tracking-wider text-[#2F7CEF] uppercase">
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-bold tracking-wider text-[#2F7CEF] uppercase">
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
      <section className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16">
        <div className="shell">
          <div className="max-w-4xl">
            <span className="badge-pill">DIRECT COMPARISON</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] md:whitespace-nowrap">
              Traditional QA vs. <span className="text-[#2F7CEF] whitespace-nowrap">Quality Advocacy</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              Why adding a customer-centric advocacy lens transforms product release outcomes.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="py-3.5 px-6">Dimension</th>
                  <th className="py-3.5 px-6">Traditional QA</th>
                  <th className="py-3.5 px-6 bg-[#EFF6FF] text-[#2F7CEF] font-bold">
                    NCL Quality Advocacy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-6 font-bold text-slate-900">Primary Mandate</td>
                  <td className="py-3.5 px-6 text-slate-600">Verify specifications and close tickets</td>
                  <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    Advocate for the user experience &amp; eliminate product risk
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold text-slate-900">Testing Approach</td>
                  <td className="py-3.5 px-6 text-slate-600">Rigid scripted checklists &amp; happy-path suites</td>
                  <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    Risk-based exploratory probing, dogfooding &amp; unscripted edge cases
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold text-slate-900">Customer Feedback</td>
                  <td className="py-3.5 px-6 text-slate-600">Ignored; seen as customer support&apos;s job</td>
                  <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    Systematically analyzed for recurring quality defects and churn signals
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold text-slate-900">Bug Reporting</td>
                  <td className="py-3.5 px-6 text-slate-600">Isolated tickets without customer context</td>
                  <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    Reproducible evidence with severity, blast radius, and UX impact
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold text-slate-900">Fix Verification</td>
                  <td className="py-3.5 px-6 text-slate-600">Basic retest of ticket step</td>
                  <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                    Deep regression sweep around adjacent systems and workflow sanity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CALLOUT CTA */}
      <section className="bg-[#0E2539] text-white py-12 md:py-16 border-t border-[#2F7CEF]/20">
        <div className="shell text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1 text-xs font-semibold text-slate-300">
            EXPERIENCE THE DIFFERENCE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Put Your Product Through a Quality Reality Check.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Let us inspect your core journeys, find what breaks, and show you what
            your customers are experiencing before your next release.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/contact?need=advocacy" variant="primary" size="lg" withArrow>
              Start a Quality Advocacy Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
