import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { QualityLensesShowcase } from "@/components/QualityLensesShowcase";

export const metadata: Metadata = {
  title: "Quality Advocacy — Quality from the User's Perspective",
  description:
    "Discover Quality Advocacy: Nishkama CodeLab's differentiated approach uniting technical QA, real-world dogfooding, and customer feedback analysis into actionable product excellence.",
};

const comparisonRows = [
  {
    dimension: "Primary Mandate",
    traditional: "Verify specifications and close tickets",
    advocacy: "Advocate for the user experience & eliminate product risk",
  },
  {
    dimension: "Testing Approach",
    traditional: "Rigid scripted checklists & happy-path suites",
    advocacy: "Risk-based exploratory probing, dogfooding & unscripted edge cases",
  },
  {
    dimension: "Customer Feedback",
    traditional: "Ignored; seen as customer support's job",
    advocacy: "Systematically analyzed for recurring quality defects and churn signals",
  },
  {
    dimension: "Bug Reporting",
    traditional: "Isolated tickets without customer context",
    advocacy: "Reproducible evidence with severity, blast radius, and UX impact",
  },
  {
    dimension: "Fix Verification",
    traditional: "Basic retest of ticket step",
    advocacy: "Deep regression sweep around adjacent systems and workflow sanity",
  },
];

export default function QualityAdvocacyPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(47,124,239,0.06),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10">
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

          {/* Mobile Stacked Comparison Cards (no horizontal swipe needed) */}
          <div className="mt-8 space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.dimension}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs"
              >
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                  {row.dimension}
                </div>
                <div className="divide-y divide-slate-100 text-xs leading-relaxed">
                  <div className="px-4 py-3">
                    <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                      Traditional QA
                    </span>
                    <p className="mt-1 text-slate-600">{row.traditional}</p>
                  </div>
                  <div className="bg-[#EFF6FF]/45 px-4 py-3">
                    <span className="block text-[10.5px] font-bold uppercase tracking-wider text-[#2F7CEF]">
                      NCL Quality Advocacy
                    </span>
                    <p className="mt-1 font-medium text-slate-900">{row.advocacy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Comparison Table */}
          <div className="mt-8 hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
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
                {comparisonRows.map((row) => (
                  <tr key={row.dimension}>
                    <td className="py-3.5 px-6 font-bold text-slate-900">{row.dimension}</td>
                    <td className="py-3.5 px-6 text-slate-600">{row.traditional}</td>
                    <td className="py-3.5 px-6 font-medium text-slate-900 bg-[#EFF6FF]/40">
                      {row.advocacy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CALLOUT CTA */}
      <section className="relative overflow-hidden bg-[#0E2539] text-white py-12 md:py-16 border-t border-[#2F7CEF]/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(47,124,239,0.14),transparent)]"
          aria-hidden="true"
        />
        <div className="shell relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
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
