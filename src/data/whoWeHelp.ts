export interface AudienceProfile {
  number: string;
  title: string;
  challenge: string;
  solution: string;
}

export const audienceProfiles: AudienceProfile[] = [
  {
    number: "01",
    title: "Startups Validating Their First Product",
    challenge:
      "Engineers are testing their own code while trying to hit critical MVP launch milestones.",
    solution:
      "We provide an objective, rapid quality sweep to catch critical launch-blocking bugs and ensure a polished first impression.",
  },
  {
    number: "02",
    title: "Growing Teams with QA Bottlenecks",
    challenge:
      "Feature velocity is outpacing test coverage, leading to delayed sprints and release hesitation.",
    solution:
      "We integrate as an elastic QA layer, executing structured regression passes and unblocking engineers to build.",
  },
  {
    number: "03",
    title: "Engineering Teams Shipping Major Releases",
    challenge:
      "High-stakes releases (re-architectures, migrations, tier upgrades) where defect leakage would damage brand trust.",
    solution:
      "We run focused release smoke suites, multi-platform compatibility sweeps, and go/no-go readiness assessments.",
  },
  {
    number: "04",
    title: "Companies Seeking an External QA Partner",
    challenge:
      "Building and managing an in-house QA organization requires overhead, management bandwidth, and time.",
    solution:
      "We act as your dedicated quality ownership team with proven testing infrastructure and senior expertise.",
  },
  {
    number: "05",
    title: "Product Teams Seeking a Real-User Perspective",
    challenge:
      "Products pass automated tests, but customers churn or complain about clunky UX and confusing workflows.",
    solution:
      "Our Quality Advocacy lens dogfoods real customer journeys to surface friction points before they become customer attrition.",
  },
  {
    number: "06",
    title: "Teams Needing a Focused QA Audit",
    challenge:
      "Leadership lacks clear visibility into test gaps, brittle modules, and why bugs are escaping to production.",
    solution:
      "A concentrated 1–2 week Quality Audit delivers a transparent defect register and actionable process improvement plan.",
  },
];
