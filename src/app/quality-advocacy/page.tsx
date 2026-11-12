import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { QualityLensesShowcase } from "@/components/QualityLensesShowcase";

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
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CORE LENSES */}
      <QualityLensesShowcase />

      {/* 3. COMPARISON TABLE: TRADITIONAL QA VS QUALITY ADVOCACY */}
      <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
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

      {/* 4. CALLOUT CTA */}
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
              Start a QA Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
