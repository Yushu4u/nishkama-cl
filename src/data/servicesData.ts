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
  gist: string;
  summary: string;
  capabilities: CapabilityColumn[];
  ctaText: string;
  href: string;
}

export const allServicesData: ServiceItem[] = [
  {
    id: "xr-testing",
    slug: "xr-testing",
    title: "XR & Spatial Software QA",
    category: "immersive",
    categoryLabel: "XR & Quest Software",
    gist: "Software assurance for Meta Quest (HorizonOS), Unity spatial builds, and WebXR applications.",
    summary:
      "Comprehensive software quality assurance for Meta Quest applications, HorizonOS experiences, Unity 3D builds, and WebXR spatial software.",
    capabilities: [
      {
        heading: "Spatial Interaction & Tracking",
        items: [
          "Hand, head, and controller tracking responsiveness and gesture debounce",
          "Spatial UI comfort zones, boundary handling, and anchor persistence",
          "Pass-through UI alignment and gaze/pinch interaction states",
          "Companion mobile app data sync and session continuity",
        ],
      },
      {
        heading: "Quest Software & Runtimes",
        items: [
          "Meta Quest (HorizonOS) and WebXR browser runtime verification",
          "Spatial audio positioning, UI depth, and 3D scene stability",
          "Multi-user spatial room synchronization and network recovery",
          "Quest Store submission compliance and release readiness checks",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Unity Test Framework & automated spatial smoke checks",
          "ADB, logcat diagnostics, and crash/memory leak isolation",
          "OVR Metrics frame-rate stability and stutter profiling",
          "Structured repro evidence with telemetry and video traces",
        ],
      },
    ],
    ctaText:
      "Need confident Meta Quest or WebXR software assurance? Explore our XR QA approach or reach out to discuss your build.",
    href: "/services/xr-testing",
  },
  {
    id: "functional-testing",
    slug: "functional-testing",
    title: "Functional Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    gist: "Verification of core features, user workflows, and business logic against exact specifications.",
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
    gist: "Unscripted, real-world testing to catch unpredictable edge cases before users reach them.",
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
    gist: "Safeguarding verified features so new commits, upgrades, and hotfixes never break existing flows.",
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
    title: "Compatibility Testing",
    category: "sprint",
    categoryLabel: "Core Sprint QA",
    gist: "Cross-browser and OS validation across iOS, Android, macOS, Windows, and modern browser engines.",
    summary:
      "Thorough software compatibility testing across major desktop and mobile operating systems, modern browser engines, and responsive viewports.",
    capabilities: [
      {
        heading: "Operating Systems & Viewports",
        items: [
          "iOS and Android mobile & tablet viewports",
          "macOS and Windows desktop environments",
          "Linux and enterprise browser configurations",
          "Responsive breakpoints from mobile to wide desktop",
        ],
      },
      {
        heading: "Browsers & Rendering",
        items: [
          "Chromium engines (Chrome, Edge, Brave)",
          "WebKit (Mobile Safari & Desktop Safari)",
          "Gecko engine (Firefox Mobile & Desktop)",
          "Dynamic viewport orientations, zoom, and high-DPI scaling",
        ],
      },
      {
        heading: "How We Test",
        items: [
          "Cross-browser and cross-OS matrix execution",
          "Layout clipping, aspect ratio, and safe-area checks",
          "Touch gestures vs. mouse and keyboard interaction parity",
          "Throttled network behavior and client memory checks",
        ],
      },
    ],
    ctaText:
      "Deliver consistent software experiences across browsers, operating systems, and screen sizes.",
    href: "/services/compatibility-testing",
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    title: "Usability & UX Testing",
    category: "audit",
    categoryLabel: "UX & Quality Audits",
    gist: "Evaluating workflow friction, visual polish, and accessibility for an intuitive user experience.",
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
    gist: "Full-lifecycle checks spanning user interfaces, APIs, databases, and connected third-party services.",
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
    gist: "Pre-deployment release candidate audits delivering decisive go or no-go launch verdicts.",
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
    gist: "Focused 1–2 week diagnostic uncovering coverage gaps, fragile workflows, and release risk.",
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
