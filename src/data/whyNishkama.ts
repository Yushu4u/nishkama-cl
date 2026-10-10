export interface WhyNishkamaItem {
  number: string;
  title: string;
  description: string;
}

export const whyNishkamaPoints: WhyNishkamaItem[] = [
  {
    number: "01",
    title: "Independent Perspective",
    description:
      "When internal teams test their own features, cognitive confirmation bias is inevitable. An external, independent quality lens sees the blind spots, hidden assumptions, and unhandled edge cases.",
  },
  {
    number: "02",
    title: "Risk-Based Thinking",
    description:
      "Not all bugs are created equal. We prioritize our investigation based on actual business risk, financial transactions, brand impact, and customer friction, rather than running mindless checklist repetitions.",
  },
  {
    number: "03",
    title: "Real-World Validation",
    description:
      "Software behaves differently in the hands of real users under spotty cellular networks, interrupted workflows, and unconventional inputs than it does on a developer's high-spec workstation.",
  },
  {
    number: "04",
    title: "Evidence-Driven Reporting",
    description:
      "No vague defect reports or hand-wavy claims. Every finding comes with step-by-step reproduction instructions, system logs, screenshots, and video proof that engineers can act on immediately.",
  },
  {
    number: "05",
    title: "Flexible Engagement",
    description:
      "From a focused two-week QA Assessment to an embedded ongoing testing team, our engagement models adapt to your release rhythm, stack, and operational cadence without friction.",
  },
  {
    number: "06",
    title: "Quality Ownership",
    description:
      "We do not merely run tests and close tickets. We advocate for product excellence, stay accountable through fix validation, and care deeply about the customer who ultimately uses your product.",
  },
];
