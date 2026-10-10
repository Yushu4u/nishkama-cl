export interface EngagementModel {
  id: string;
  number: string;
  title: string;
  timeline: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  highlights: string[];
  ctaLabel: string;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "qa-assessment",
    number: "01",
    title: "QA Assessment",
    timeline: "1–2 Weeks",
    subtitle: "Focused baseline evaluation of product stability and risk.",
    description:
      "A fast, comprehensive diagnostic sprint where a dedicated QA specialist audits your product, executes exploratory testing across critical flows, and provides a clear risk scorecard.",
    suitableFor: "Pre-launch products, new codebases, or teams considering an ongoing QA partnership.",
    highlights: [
      "1–2 weeks dedicated evaluation sprint",
      "Executive bug audit & coverage gap analysis",
      "Immediate high-severity issue identification",
      "Actionable roadmap for ongoing testing strategy",
    ],
    ctaLabel: "Request an Assessment",
  },
  {
    id: "project-qa",
    number: "02",
    title: "Project QA",
    timeline: "Milestone-Based",
    subtitle: "Targeted QA support for a specific release, feature, or deadline.",
    description:
      "On-demand testing capacity designed around specific product milestones: a major version release, multi-platform migration, or quarterly feature launch.",
    suitableFor: "Teams with seasonal release spikes or high-risk feature rollouts requiring extra hands.",
    highlights: [
      "Flexible start and end dates tied to your timeline",
      "Deep feature validation & edge-case discovery",
      "Cross-platform device & browser test sweeps",
      "Go/no-go release readiness verification",
    ],
    ctaLabel: "Plan a Project",
  },
  {
    id: "ongoing-qa-partner",
    number: "03",
    title: "Ongoing QA Partner",
    timeline: "Monthly Retainer",
    subtitle: "Continuous quality ownership integrated with your sprints.",
    description:
      "Our team becomes your embedded QA organization, participating in sprint planning, testing pull requests, maintaining regression suites, and certifying every deployment.",
    suitableFor: "Growing engineering teams that need dedicated QA ownership without hiring overhead.",
    highlights: [
      "Direct integration into Slack, Jira, GitHub, or Linear",
      "Daily defect triage, fix verification, and sanity runs",
      "Continuous regression coverage as features ship",
      "Scalable capacity as your product surface expands",
    ],
    ctaLabel: "Partner With Us",
  },
  {
    id: "quality-advocacy",
    number: "04",
    title: "Quality Advocacy",
    timeline: "Strategic Immersion",
    subtitle: "Holistic quality leadership combining testing, dogfooding, and user signals.",
    description:
      "Our most comprehensive engagement model: we combine technical QA discipline with deep product dogfooding, customer feedback synthesis, and quality culture advocacy across your organization.",
    suitableFor: "Product-led companies striving for category-defining user experience and customer retention.",
    highlights: [
      "Triple-pillar execution (QA Testing, Product Experience, Advocacy)",
      "Customer feedback & support ticket telemetry analysis",
      "UX friction audits and onboarding journey optimization",
      "Strategic quality counsel for CPOs and Engineering VPs",
    ],
    ctaLabel: "Discuss Advocacy",
  },
];
