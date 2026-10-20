export interface ProcessStage {
  step: string;
  name: string;
  headline: string;
  purpose: string;
  activities: string[];
  outputs: string[];
}

export interface QAQualityPrinciple {
  title: string;
  description: string;
}

export const processStages: ProcessStage[] = [
  {
    step: "01",
    name: "Discover",
    headline: "Understand product, architecture, release cycles, and business concerns.",
    purpose:
      "Deeply understand what the product does, who uses it, how your team builds, and where failure creates the highest business risk.",
    activities: [
      "Review functional specifications, wireframes, and user persona definitions",
      "Inspect testing environments, staging builds, and third-party dependencies",
      "Conduct walkthrough with product managers and engineering leads",
      "Identify high-risk failure zones, historical bug clusters, and compliance constraints",
    ],
    outputs: [
      "Product Knowledge Charter",
      "Environment & Access Checklist",
      "Initial Quality Risk Profile",
    ],
  },
  {
    step: "02",
    name: "Plan",
    headline: "Define scope, priorities, risks, test approach, and success criteria.",
    purpose:
      "Establish unambiguous testing parameters so both engineering and product teams know exactly what is being validated and how.",
    activities: [
      "Define test matrix: supported devices, browsers, and operating systems",
      "Formulate exploratory charters and structured verification scripts",
      "Establish severity classification thresholds (Critical, High, Medium, Low)",
      "Align on communication channels (Slack, Jira, Linear, GitHub issues)",
    ],
    outputs: [
      "Risk-Based Test Strategy",
      "Coverage Matrix & Device Plan",
      "Sprint/Engagement Milestone Schedule",
    ],
  },
  {
    step: "03",
    name: "Test",
    headline: "Execute structured and exploratory testing based on product risk.",
    purpose:
      "Systematically probe system logic and aggressively search for unscripted failure points across all supported environments.",
    activities: [
      "Execute structured test cases for core business workflows and data inputs",
      "Conduct time-boxed exploratory bug hunting targeting edge cases and interruptions",
      "Verify cross-platform compatibility across browsers and physical devices",
      "Inspect network payload failures, timeout states, and boundary conditions",
    ],
    outputs: [
      "Live Test Execution Ledger",
      "Daily Defect Logs with Full Reproduction Evidence",
      "Blocker Alerts for Immediate Triage",
    ],
  },
  {
    step: "04",
    name: "Experience",
    headline: "Validate important journeys from a real-user perspective.",
    purpose:
      "Step outside the technical verification checklist to experience the product as an authentic, demanding customer.",
    activities: [
      "Conduct dogfooding runs on primary user onboarding and checkout funnels",
      "Evaluate UI microcopy, error message clarity, and actionable guidance",
      "Identify cognitive friction, awkward transitions, and unexpected dead ends",
      "Synthesize real-world user sentiment and UX coherence",
    ],
    outputs: [
      "User Experience Friction Log",
      "Journey Completion Time & Confusion Points",
      "Product Clarity Recommendations",
    ],
  },
  {
    step: "05",
    name: "Report",
    headline: "Deliver reproducible findings, evidence, severity, impact, and recommendations.",
    purpose:
      "Provide engineering and product leadership with actionable, reproducible evidence instead of vague bug claims.",
    activities: [
      "File defect reports with exact step-by-step reproduction instructions",
      "Attach video recordings, console logs, network har files, and device metadata",
      "Classify issues by business impact and user frequency",
      "Deliver executive summaries and release readiness scorecards",
    ],
    outputs: [
      "Comprehensive QA Assessment Report",
      "Ready-to-Import Defect Tickets (Jira/Linear/GitHub)",
      "Release Readiness Executive Summary",
    ],
  },
  {
    step: "06",
    name: "Improve",
    headline: "Retest fixes and help the team move toward a stronger release.",
    purpose:
      "Ensure resolved issues stay fixed, prevent regressions, and refine quality practices for the next iteration.",
    activities: [
      "Perform fix validation on resolved tickets in staging and test builds",
      "Execute targeted regression sweeps around modified code paths",
      "Participate in retrospective reviews to identify why bugs escaped initially",
      "Update long-term test suites and quality documentation",
    ],
    outputs: [
      "Fix Verification Sign-Off",
      "Final Release Go/No-Go Decision Memo",
      "Process Optimization Recommendations",
    ],
  },
];

export const qaPrinciples: QAQualityPrinciple[] = [
  {
    title: "Risk-Based Testing",
    description:
      "We allocate testing effort based on where failure causes real financial or customer harm, rather than blindly following a generic checklist.",
  },
  {
    title: "Clear Scope & Success Criteria",
    description:
      "Every testing cycle begins with explicit boundaries, unambiguous acceptance thresholds, and mutual expectations.",
  },
  {
    title: "Reproducible Bug Reports",
    description:
      "Every issue we file includes deterministic reproduction steps, device specifications, console logs, network traces, and video proof so developers never waste time guessing.",
  },
  {
    title: "Evidence-Based Findings",
    description:
      "We never present subjective assumptions as defects. Every finding is grounded in observed behavior, reproducible telemetry, and concrete customer impact.",
  },
  {
    title: "Severity & Impact Prioritization",
    description:
      "We distinguish critical launch-blockers from minor cosmetic inconsistencies, helping your engineering team focus their immediate bandwidth effectively.",
  },
  {
    title: "Rigorous Fix Verification",
    description:
      "A bug is only closed once verified in a clean build, accompanied by adjacent regression checks to ensure the fix introduced no side effects.",
  },
  {
    title: "Actionable Recommendations",
    description:
      "We do not merely point out what is broken; we deliver pragmatic, engineering-friendly recommendations on how to strengthen reliability.",
  },
];
