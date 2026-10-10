export interface DetailedService {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  capabilities: string[];
  deliverables: string[];
  recommendedFor: string;
}

export interface ServiceOverview {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  points: string[];
}

export const detailedServices: DetailedService[] = [
  {
    id: "functional-testing",
    number: "01",
    title: "Functional Testing",
    shortDescription:
      "Systematic validation of product behavior, core features, and edge scenarios against business logic.",
    longDescription:
      "We verify that every feature behaves as intended under expected conditions and handles unexpected inputs gracefully. Our team builds comprehensive test matrices covering positive paths, boundary conditions, and failure modes to ensure reliable software behavior.",
    capabilities: [
      "Feature validation against requirements & specifications",
      "Positive and negative scenarios testing",
      "Business-rule validation and edge-case execution",
      "Error handling and exception response verification",
      "Data validation, form processing, and payload integrity",
    ],
    deliverables: [
      "Structured Test Matrices & Verification Runs",
      "Reproducible Defect Tickets with Environment Metadata",
      "Pass/Fail Trend Reports & Functional Coverage Notes",
    ],
    recommendedFor: "New feature releases, complex workflows, and data-critical products.",
  },
  {
    id: "exploratory-testing",
    number: "02",
    title: "Exploratory Testing",
    shortDescription:
      "Unscripted, risk-driven investigation to uncover defects that pre-scripted tests routinely miss.",
    longDescription:
      "Automated and scripted tests only verify what someone already anticipated. Exploratory testing pairs senior QA intuition with active hypothesis testing to probe edge cases, boundary collisions, interrupted states, and subtle interaction bugs before your users stumble on them.",
    capabilities: [
      "Time-boxed exploratory sessions targeting high-risk areas",
      "Edge-case discovery and unexpected path navigation",
      "Unscripted user journeys and stress-testing state transitions",
      "Risk-focused investigation around state mutations and concurrency",
      "Relentless bug hunting with real-world user curiosity",
    ],
    deliverables: [
      "Session-Based Test Management (SBTM) Charters & Logs",
      "Documented Edge-Case Scenarios & Anomaly Proofs",
      "Video recordings and step-by-step reproduction guides",
    ],
    recommendedFor: "Products preparing for public beta, major overhauls, or fast-moving MVPs.",
  },
  {
    id: "regression-testing",
    number: "03",
    title: "Regression Testing",
    shortDescription:
      "Protect existing functionality and verify that new deployments never break what previously worked.",
    longDescription:
      "As codebases grow and release cadences accelerate, regressions become the number one driver of customer churn. We create targeted, modular regression suites that validate critical customer flows, verify bug fixes, and ensure stability across continuous delivery pipelines.",
    capabilities: [
      "Release regression sweeps before production rollouts",
      "Feature regression focused on adjacent functional boundaries",
      "Critical-path regression protecting revenue-generating journeys",
      "Fix validation and retesting of resolved issues",
      "Smoke testing suites for rapid go/no-go release decisions",
    ],
    deliverables: [
      "Critical-Path Regression Checklists & Traceability",
      "Pre-Release Smoke Test Verdicts",
      "Regression Risk Summaries for Product & Engineering leads",
    ],
    recommendedFor: "Weekly or bi-weekly shipping teams with active feature additions.",
  },
  {
    id: "compatibility-testing",
    number: "04",
    title: "Compatibility Testing",
    shortDescription:
      "Verification across diverse operating systems, browsers, screen resolutions, and physical devices.",
    longDescription:
      "Modern users access software across an increasingly fragmented ecosystem of hardware, screen sizes, browser engines, and operating systems. We validate your product across real physical devices and operating environments to eliminate platform-specific anomalies.",
    capabilities: [
      "Browser coverage (Chrome, Safari, Firefox, Edge, Chromium variants)",
      "OS coverage across macOS, Windows, Linux, iOS, and Android",
      "Device coverage spanning modern mobile, tablet, and desktop hardware",
      "Screen/resolution coverage, responsive breakpoints, and scaling checks",
      "Environment-specific issues including network throttling and permissions",
    ],
    deliverables: [
      "Cross-Platform Compatibility Matrix",
      "Resolution & Breakpoint Anomaly Documentation",
      "Device-Specific Performance & Layout Observations",
    ],
    recommendedFor: "Public SaaS platforms, customer-facing web apps, and mobile applications.",
  },
  {
    id: "usability-testing",
    number: "05",
    title: "Usability & Product Experience",
    shortDescription:
      "Evaluate software through the eyes of real users to identify cognitive friction and workflow obstacles.",
    longDescription:
      "A feature can technically function while remaining confusing or frustrating to the person paying to use it. We step into the shoes of first-time and seasoned customers, identifying ambiguous prompts, cumbersome navigation, unhelpful error states, and UX rough edges.",
    capabilities: [
      "Navigation and flow assessment across realistic user goals",
      "Friction points identification in multi-step workflows",
      "Error messaging clarity and recovery pathway evaluation",
      "Clarity of interactions, visual feedback, and affordances",
      "Real-world usage scenarios executed without developer bias",
    ],
    deliverables: [
      "UX Friction & Usability Audit Report",
      "Clarity & Error Message Enhancement Suggestions",
      "User Journey Heatmap of Points of Confusion",
    ],
    recommendedFor: "Onboarding funnels, checkout processes, and enterprise workflows.",
  },
  {
    id: "e2e-testing",
    number: "06",
    title: "End-to-End Testing",
    shortDescription:
      "Validate complete customer workflows traversing multiple services, APIs, and data layers.",
    longDescription:
      "Isolated unit tests cannot guarantee that data flows seamlessly from a frontend trigger through third-party webhooks, background queues, and database updates. We stress-test entire business journeys from initial signup through final invoice generation.",
    capabilities: [
      "Critical user journeys verified across multiple systems",
      "Cross-feature workflows spanning notifications and third-party tools",
      "Integrations validation with payment gateways, CRMs, and email providers",
      "Data flow integrity and consistency across asynchronous workers",
      "Customer-to-completion journeys ensuring business continuity",
    ],
    deliverables: [
      "End-to-End Journey Map & Test Run Logs",
      "Integration Edge Case & Asynchronous Race Condition Notes",
      "Downstream Data Integrity Verification",
    ],
    recommendedFor: "Multi-tiered SaaS architectures, e-commerce checkouts, and fintech integrations.",
  },
  {
    id: "release-validation",
    number: "07",
    title: "Release Validation",
    shortDescription:
      "Decisive go/no-go quality gates and release smoke testing before software reaches end users.",
    longDescription:
      "Release day should not be accompanied by anxiety. We provide dedicated pre-flight release validation sweeps, executing sanity suites, checking migration side-effects, verifying critical operational paths, and providing executive leadership with clear release confidence.",
    capabilities: [
      "Release smoke testing on staging, pre-prod, and production-candidate environments",
      "Critical journey validation immediately prior to deployment cutover",
      "Regression assessment tailored to release changelogs",
      "Known-risk review and rollback criteria evaluation",
      "Release readiness summary providing clear go/no-go guidance",
    ],
    deliverables: [
      "Release Readiness Executive Summary",
      "Pre-Flight Smoke Verification Checklist",
      "Known Issues & Acceptable Risk Register",
    ],
    recommendedFor: "Teams launching major version updates or enterprise customer deliverables.",
  },
  {
    id: "quality-audit",
    number: "08",
    title: "Quality Audit",
    shortDescription:
      "A concentrated 1–2 week assessment uncovering coverage gaps, process bottlenecks, and product defects.",
    longDescription:
      "When you need an unbiased evaluation of where your product currently stands, our Quality Audit delivers rapid clarity. We perform an intensive audit across test coverage, product health, bug leakage patterns, and release hygiene, giving your team a prioritized remediation roadmap.",
    capabilities: [
      "Coverage gaps identification in existing automated & manual suites",
      "Risk areas mapping across brittle or historically bug-prone modules",
      "Process observations evaluating QA velocity and handoff friction",
      "Product issues catalog with reproduction proofs and severity rankings",
      "Prioritized recommendations structured by urgency and engineering effort",
    ],
    deliverables: [
      "Comprehensive Quality Audit Report",
      "Prioritized Defect Backlog with Impact Ratings",
      "QA Process & Automation Maturity Roadmap",
    ],
    recommendedFor: "Leadership seeking independent visibility into software stability before scaling.",
  },
];

export const homeServiceOverviews: ServiceOverview[] = [
  {
    id: "qa-testing",
    number: "01",
    title: "QA Testing",
    description:
      "Functional, exploratory, regression, compatibility, usability, and release validation built around product risk.",
    href: "/services#functional-testing",
    points: [
      "Functional & Regression Testing",
      "Exploratory Bug Hunting",
      "Cross-Browser & Device QA",
      "Go / No-Go Release Validation",
    ],
  },
  {
    id: "product-qa",
    number: "02",
    title: "Product QA",
    description:
      "Ongoing independent QA support seamlessly integrated with your development sprints and release cycles.",
    href: "/services#regression-testing",
    points: [
      "Embedded in your sprint cadence",
      "Daily defect triage & fix verification",
      "Continuous regression coverage",
      "Direct engineer-to-QA collaboration",
    ],
  },
  {
    id: "quality-audit",
    number: "03",
    title: "Quality Audit",
    description:
      "A focused, time-boxed assessment of product stability, coverage gaps, and release process hygiene.",
    href: "/services#quality-audit",
    points: [
      "Deep-dive inspection in 1–2 weeks",
      "Critical defect discovery",
      "Test coverage gap analysis",
      "Actionable engineering remediation plan",
    ],
  },
  {
    id: "quality-advocacy",
    number: "04",
    title: "Quality Advocacy",
    description:
      "Holistic validation through the lens of real users, customer experience signals, and business risk.",
    href: "/quality-advocacy",
    points: [
      "Real-world dogfooding journeys",
      "Customer friction & churn risk analysis",
      "Signal-to-insight translation",
      "Voice of the user for product teams",
    ],
  },
];
