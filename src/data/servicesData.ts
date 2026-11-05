export interface CapabilityColumn {
  heading: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "immersive" | "sprint" | "audit";
  categoryLabel: string;
  summary: string;
  capabilities: CapabilityColumn[];
  ctaText: string;
  href: string;
}

export const allServicesData: ServiceItem[] = [
  {
    id: "xr-testing",
    slug: "xr-testing",
    title: "XR & Spatial Computing QA",
    category: "immersive",
    categoryLabel: "Immersive & Hardware",
    summary:
      "Comprehensive testing for AR, VR, and MR headsets, spatial tracking systems, optics, and 3D spatial applications across VisionOS, Meta Quest, and WebXR.",
    capabilities: [
      {
        heading: "Hardware & Optics",
        items: [
          "VR/AR headsets, displays, and micro-OLED optics",
          "Hand, eye, head, and full-body spatial tracking",
          "Pass-through latency and camera sensor calibration",
          "Thermal throttling & battery degradation under load",
        ],
      },
      {
        heading: "Spatial Software",
        items: [
          "VisionOS, HorizonOS, and WebXR browser runtimes",
          "Spatial audio positioning and 3D physics fidelity",
          "Guardian boundary drift & collision detection",
          "Multi-user avatar synchronization & networking",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Native Unity & Unreal Engine test automation rigs",
          "Physical spatial lab testing in varying lighting conditions",
          "Automated telemetry capture and frame-rate profiling",
          "Genuine hardware sweeps with zero software emulation",
        ],
      },
    ],
    ctaText:
      "Need deep XR validation? Explore our dedicated spatial testing methodology or get in touch for custom lab setup.",
    href: "/services/xr-testing",
  },
  {
    id: "functional-testing",
    slug: "functional-testing",
    title: "Functional Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    summary:
      "Rigorous verification of core features, state transitions, user workflows, and complex business logic against exact functional specifications.",
    capabilities: [
      {
        heading: "Specification QA",
        items: [
          "User stories, acceptance criteria, and edge states",
          "Role-based access control (RBAC) and permissions",
          "Form validation, boundary values, and input sanitization",
          "State persistence across app reloads and session expiry",
        ],
      },
      {
        heading: "Data & Integrations",
        items: [
          "CRUD operations and database write consistency",
          "Third-party payment gateways (Stripe, PayPal, etc.)",
          "Webhook delivery handling and retry mechanics",
          "REST & GraphQL API response schema verification",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Black-box and grey-box test suite execution",
          "Equivalence partitioning and boundary value sweeps",
          "Sprint-aligned QA embedded directly into Jira/Linear",
          "Deterministic bug repro reports with payload traces",
        ],
      },
    ],
    ctaText:
      "Protect your core business logic with zero-leakage functional test cycles.",
    href: "/services/functional-testing",
  },
  {
    id: "exploratory-testing",
    slug: "exploratory-testing",
    title: "Exploratory Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    summary:
      "Unscripted, intuitive bug hunting that simulates real, unpredictable human behavior to uncover critical corner cases before real users do.",
    capabilities: [
      {
        heading: "Real-World Journeys",
        items: [
          "Chaotic navigation and rapid back-forward button clicking",
          "Multi-tab concurrency and unexpected interruptions",
          "Copy-pasting malformed emojis, Unicode, and oversized payloads",
          "Network throttling, packet loss, and offline transitions",
        ],
      },
      {
        heading: "Failure Modes",
        items: [
          "Race conditions in asynchronous UI state updates",
          "Uncaught exception popups and blank screen states",
          "Local cache corruption after partial updates",
          "Memory bloat during extended continuous user sessions",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Time-boxed charter sessions focused on high-risk surfaces",
          "Heuristic bug-hunting methodologies (James Bach / Cem Kaner)",
          "Screen recordings and complete console telemetry for every bug",
          "Persona-based non-linear customer testing",
        ],
      },
    ],
    ctaText:
      "Uncover the edge bugs that automated scripts never see with exploratory charters.",
    href: "/services/exploratory-testing",
  },
  {
    id: "regression-testing",
    slug: "regression-testing",
    title: "Regression Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    summary:
      "Targeted and comprehensive test cycles ensuring new commits, dependency bumps, and hotfixes never break existing, verified functionality.",
    capabilities: [
      {
        heading: "Suite Architecture",
        items: [
          "P0/P1 critical user flow smoke suites",
          "Sprint-over-sprint automated and manual test runs",
          "Pre-deployment staging and production release gates",
          "Post-incident regression tests preventing bug recurrence",
        ],
      },
      {
        heading: "Dependency & Upgrades",
        items: [
          "Third-party SDK and library version upgrades",
          "Database migration backward-compatibility checks",
          "Framework bumps (Next.js, React, Node runtime updates)",
          "Configuration flag changes and environment parity",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Code diff and PR impact analysis before testing starts",
          "Automated regression CI runner triggers",
          "Rapid 2-hour smoke gates for emergency hotfixes",
          "Zero happy-path bias across legacy features",
        ],
      },
    ],
    ctaText:
      "Ship frequent commits with full confidence that existing workflows remain untouched.",
    href: "/services/regression-testing",
  },
  {
    id: "compatibility-testing",
    slug: "compatibility-testing",
    title: "Compatibility & Device Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    summary:
      "Comprehensive testing on physical iOS, Android, macOS, and Windows hardware across all modern browser engines without relying solely on emulators.",
    capabilities: [
      {
        heading: "Physical Hardware",
        items: [
          "Modern flagship and mid-tier iPhones and Androids",
          "Foldable devices, iPads, tablets, and rugged displays",
          "Apple Silicon and Intel macOS workstations",
          "Windows 10/11 and popular Linux distributions",
        ],
      },
      {
        heading: "Browsers & Viewports",
        items: [
          "Chromium engines (Chrome, Edge, Brave, Opera)",
          "WebKit (Mobile Safari & Desktop Safari)",
          "Gecko engine (Firefox Mobile & Desktop)",
          "Dynamic viewport breakpoints, orientations, and scaling",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Tested on real physical devices, never emulators alone",
          "Screen resolution, aspect ratio, and notch adaptations",
          "Touch gestures vs. mouse hover state interactions",
          "Battery drain, memory consumption, and thermal checks",
        ],
      },
    ],
    ctaText:
      "Validate user experiences across hundreds of real-world device-browser combinations.",
    href: "/services/compatibility-testing",
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    title: "Usability & UX Testing",
    category: "audit",
    categoryLabel: "UX & Quality Audits",
    summary:
      "Evaluating user flows, cognitive friction, visual polish, microcopy clarity, and WCAG accessibility standards to ensure an intuitive product experience.",
    capabilities: [
      {
        heading: "Journey Polish",
        items: [
          "Onboarding completion rates and drop-off friction points",
          "Form field ergonomics and helpful validation messaging",
          "Checkout, signup, and settings flow clarity",
          "Information hierarchy and intuitive next actions",
        ],
      },
      {
        heading: "Accessibility (a11y)",
        items: [
          "WCAG 2.1 Level AA color contrast compliance",
          "Keyboard-only navigation and focus ring visibility",
          "Screen reader accessibility (VoiceOver, NVDA)",
          "Touch target sizing and dynamic text zoom support",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Cognitive walkthroughs and heuristic inspections",
          "Task completion timing and user error tracking",
          "Actionable UX audit scorecard with priority rankings",
          "Microcopy recommendations and clarity audits",
        ],
      },
    ],
    ctaText:
      "Eliminate customer frustration before it impacts retention and conversion rates.",
    href: "/services/usability-testing",
  },
  {
    id: "e2e-testing",
    slug: "e2e-testing",
    title: "End-to-End (E2E) Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    summary:
      "Full lifecycle validation spanning frontend user interfaces, backend workers, distributed microservices, databases, and third-party APIs.",
    capabilities: [
      {
        heading: "Multi-System Flows",
        items: [
          "Signup → Email verification → Profile setup",
          "Shopping cart → Stripe checkout → Webhook → Invoice email",
          "Role invitations, team onboarding, and subscription tiers",
          "Real-time websockets, chat sync, and push notifications",
        ],
      },
      {
        heading: "Data Consistency",
        items: [
          "Database state changes across multiple microservices",
          "Event queue propagation (Kafka, RabbitMQ, SQS)",
          "Cache invalidation (Redis) upon record mutation",
          "File uploads to S3/Cloud Storage and thumbnail pipeline",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Playwright, Cypress, and custom automation runners",
          "Deterministic staging environments with seed test data",
          "Trace viewer artifacts for failing headless test runs",
          "Zero flakiness monitoring and auto-retries",
        ],
      },
    ],
    ctaText:
      "Verify connected architectures where failure at any seam causes customer loss.",
    href: "/services/e2e-testing",
  },
  {
    id: "release-validation",
    slug: "release-validation",
    title: "Release Validation & Go/No-Go",
    category: "audit",
    categoryLabel: "UX & Quality Audits",
    summary:
      "Pre-deployment staging audits, release candidate verification, and definitive go/no-go quality verdicts for engineering and product leadership.",
    capabilities: [
      {
        heading: "Launch Guardrails",
        items: [
          "Pre-flight staging vs. production parity checklist",
          "Database migration dry-run sign-off",
          "Feature flag state verification in staging & canary",
          "Zero-downtime deployment rollback plan validation",
        ],
      },
      {
        heading: "Quality Scorecards",
        items: [
          "Comprehensive blocker, critical, and minor defect list",
          "Residual risk assessment for executive stakeholders",
          "Clear binary Go / No-Go deployment recommendation",
          "Launch-day war room monitoring and rapid triage",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Strict sign-off protocols before code hits production",
          "Post-deployment smoke testing on live production URL",
          "Real-time error tracking monitoring (Sentry, Datadog)",
          "Post-launch retrospective quality reports",
        ],
      },
    ],
    ctaText:
      "Gain objective, board-ready confidence before pressing the deploy button.",
    href: "/services/release-validation",
  },
  {
    id: "quality-audit",
    slug: "quality-audit",
    title: "Quality Audit & Diagnostic",
    category: "audit",
    categoryLabel: "UX & Quality Audits",
    summary:
      "A comprehensive 1–2 week deep-dive diagnostic of test coverage gaps, fragile workflows, defect leakages, and team QA velocity.",
    capabilities: [
      {
        heading: "Diagnostic Scope",
        items: [
          "Full inspection of manual test cases and automated suites",
          "Defect leakage analysis from past production incidents",
          "QA velocity and sprint bottleneck identification",
          "CI/CD pipeline test execution speed and flakiness audit",
        ],
      },
      {
        heading: "Audit Deliverables",
        items: [
          "Executive quality maturity scorecard (1–5 scale)",
          "Prioritized 30/60/90-day quality improvement roadmap",
          "Architectural recommendations for test automation",
          "Quick-win bug discoveries identified during diagnostic",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Independent, zero-stake objective evaluation",
          "Interviews with product managers, QA, and lead developers",
          "Deep dive into git commit history and bug tracking logs",
          "Actionable presentation delivered directly to your leadership",
        ],
      },
    ],
    ctaText:
      "Discover hidden quality vulnerabilities before they surface in production.",
    href: "/services/quality-audit",
  },
];
