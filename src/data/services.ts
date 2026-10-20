export interface CapabilityGroup {
  heading: string;
  items: string[];
}

export interface DetailedService {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  whyItMatters: string;
  iconKey: string;
  capabilitiesGrouped: CapabilityGroup[];
  whatWeCheck: string[];
  deliverables: string[];
  typicalBugsCaught: string[];
  recommendedFor: string;
  executionSteps: { step: string; title: string; desc: string }[];
}

export interface ServiceOverview {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  points: string[];
}

export const detailedServices: DetailedService[] = [
  {
    id: "xr-testing",
    slug: "xr-testing",
    number: "01",
    title: "XR & Spatial Software QA",
    tagline: "Manual and automated QA engineering for immersive spatial applications, Unity/Unreal builds, VisionOS apps, and WebXR experiences.",
    shortDescription: "End-to-end software testing across VisionOS, Meta Quest, and WebXR—validating spatial UI interaction, frame rates, 3D engines, and custom test automation.",
    longDescription:
      "Nishkama CodeLab delivers deep manual and automated quality engineering for spatial computing applications and immersive software. From hand-tracking gesture debounce and motion-to-photon latency on Apple Vision Pro and Meta Quest to companion-app synchronization for smart wearables, our QA engineers ensure comfortable, stutter-free, and immersive user experiences.",
    whyItMatters:
      "Unlike traditional 2D screens, software defects in XR cause physiological discomfort—motion sickness, eye strain, and disorienting UI drift. Precision software QA is vital to shipping spatial products that users love and trust.",
    iconKey: "glasses",
    capabilitiesGrouped: [
      {
        heading: "Spatial UI, Gestures & Tracking Interaction",
        items: [
          "6DoF head, hand, and eye-tracking UI responsiveness and gesture debounce",
          "Virtual boundary safety, object clipping, and spatial anchor persistence",
          "Gaze, pinch, and controller input handling across spatial interfaces",
          "Companion mobile app data synchronization and companion software flows",
        ],
      },
      {
        heading: "Spatial Engines & Graphics Performance",
        items: [
          "Stable 90Hz / 120Hz frame rates and motion-to-photon latency audits",
          "Unity and Unreal Engine spatial build verification and regression",
          "Stereoscopic rendering, depth buffer clipping, and FOV edge artifacts",
          "Spatial audio occlusion, acoustic positioning, and haptic feedback",
        ],
      },
      {
        heading: "XR Test Automation & CI/CD",
        items: [
          "Automated smoke tests within Unity Test Framework & Unreal Gauntlet",
          "ADB, Python, and custom input-injection scripts for headless regression",
          "Multi-user spatial room synchronization and networking stress tests",
          "App Store compliance: Quest Store, VisionOS App Store, and enterprise releases",
        ],
      },
    ],
    whatWeCheck: [
      "Motion-to-photon latency, frame drops, and reprojection artifacts",
      "Hand tracking pinch precision, occlusion handling, and gesture debounce",
      "Spatial UI layer depth, text readability, and comfort zones",
      "Network synchronization across multi-user immersive sessions",
    ],
    deliverables: [
      "Perceptual latency and FPS telemetry benchmarks (OVR Metrics / Instruments)",
      "High-resolution 4K stereoscopic bug recordings and logcat traces",
      "Spatial comfort and interaction UX audit scorecards",
      "Automated CI/CD spatial regression test scripts",
    ],
    typicalBugsCaught: [
      "Sudden frame drops triggering reprojection shudder when complex shaders compile",
      "Spatial anchor drift causing UI elements to float away through physical walls",
      "Memory leaks in 3D scene transitions causing headset crashes after 20 minutes",
      "Hand tracking losing pinch state when hands cross or drop near waistline",
    ],
    recommendedFor:
      "Spatial app developers, VisionOS engineering teams, XR gaming studios, enterprise 3D training platforms, and WebXR creators.",
    executionSteps: [
      { step: "01", title: "Target Environment & SDK Mapping", desc: "Select target spatial runtimes, OS versions, SDKs, and boundary environments." },
      { step: "02", title: "Performance Profiling", desc: "Attach GPU/CPU profilers to establish baseline frame times, memory usage, and shader budgets." },
      { step: "03", title: "Spatial Stress & Exploratory QA", desc: "Execute rapid gesture sequences, boundary transitions, network drops, and prolonged play sessions." },
      { step: "04", title: "Automated Suite Execution", desc: "Run custom scripted regression passes for core spatial flows and multiplayer synchronization." },
    ],
  },
  {
    id: "functional-testing",
    slug: "functional-testing",
    number: "02",
    title: "Functional Testing",
    tagline: "Systematic validation of product behavior, core features, and edge scenarios against business logic.",
    shortDescription: "Validate every feature behaves as intended under expected conditions and handles unexpected inputs gracefully.",
    longDescription:
      "We verify that every feature behaves as intended under expected conditions and handles unexpected inputs gracefully. Our team builds comprehensive test matrices covering positive paths, boundary conditions, and failure modes to ensure reliable software behavior across every release.",
    whyItMatters:
      "A single broken business rule in production can stall checkout, corrupt customer records, or trigger high-priority escalations. Functional testing guarantees that your software executes its primary promises consistently.",
    iconKey: "check-square",
    capabilitiesGrouped: [
      {
        heading: "Feature & Logic Validation",
        items: [
          "Requirements verification against product specs & Figma files",
          "Positive path workflow validation and state transitions",
          "Business rule execution across user tiers and permissions",
          "Calculations, currency conversions, and numeric thresholds",
        ],
      },
      {
        heading: "Error Handling & Boundary QA",
        items: [
          "Negative input processing and malicious character escaping",
          "Graceful exception handling and meaningful error copy",
          "Boundary value analysis (min, max, zero, empty, overflow)",
          "Timeout resilience and network retry behavior",
        ],
      },
      {
        heading: "Data Integrity & Forms",
        items: [
          "Multi-step form submissions and draft persistence",
          "CRUD operation integrity across database models",
          "Asynchronous webhook and background task confirmations",
          "File upload validations (MIME types, size caps, corruption)",
        ],
      },
    ],
    whatWeCheck: [
      "User registration, login, session timeout, and password recovery flows",
      "Billing, subscription upgrades, cancellations, and tax calculations",
      "Role-based access control (Admin, Member, Viewer, Guest permissions)",
      "Form validation states with inline guidance and submit guards",
      "Search, sorting, pagination, and multi-filter queries",
      "Data export formatting (CSV, PDF, JSON) and report generation",
    ],
    deliverables: [
      "Structured Test Matrices & Verification Runs",
      "Reproducible Defect Tickets with Environment Metadata",
      "Pass/Fail Trend Reports & Functional Coverage Notes",
    ],
    typicalBugsCaught: [
      "Missing error handling on timeout leaving users on infinite loaders",
      "Negative currency values accepted in billing calculations",
      "Role privilege escalation via direct API parameter tampering",
      "Corrupted multi-byte characters in unicode form fields",
    ],
    recommendedFor: "New feature releases, complex workflows, and data-critical products.",
    executionSteps: [
      { step: "01", title: "Specification Walkthrough", desc: "Align with PMs and designers on business logic and edge-case assumptions." },
      { step: "02", title: "Test Matrix Design", desc: "Construct comprehensive scenarios spanning positive, negative, and boundary states." },
      { step: "03", title: "Rigorous Execution", desc: "Execute suites across supported browsers with deep defect logging." },
      { step: "04", title: "Fix Verification", desc: "Retest resolved tickets and perform adjacent regression sweeps." },
    ],
  },
  {
    id: "exploratory-testing",
    slug: "exploratory-testing",
    number: "02",
    title: "Exploratory Testing",
    tagline: "Unscripted, risk-driven investigation to uncover defects that pre-scripted tests routinely miss.",
    shortDescription: "Pair senior QA intuition with active hypothesis testing to probe edge cases and subtle interaction bugs.",
    longDescription:
      "Automated and scripted tests only verify what someone already anticipated. Exploratory testing pairs senior QA intuition with active hypothesis testing to probe edge cases, boundary collisions, interrupted states, and subtle interaction bugs before your users stumble on them in production.",
    whyItMatters:
      "Real users don't follow scripts. They double-click buttons, open five tabs simultaneously, go offline on subways, and enter unexpected inputs. Exploratory testing mirrors real human behavior.",
    iconKey: "compass",
    capabilitiesGrouped: [
      {
        heading: "Session-Based Charters",
        items: [
          "Time-boxed exploratory charters targeting high-risk modules",
          "Persona-driven testing mirroring varied user temperaments",
          "Hypothesis testing around fragile state machines",
          "Adversarial bug hunting without predetermined scripts",
        ],
      },
      {
        heading: "State & Concurrency Stress",
        items: [
          "Multi-tab concurrency and race condition discovery",
          "Mid-workflow back button navigation and page refreshes",
          "Network throttling, packet loss, and airplane mode recovery",
          "Rapid repeat clicks and keyboard shortcut hammering",
        ],
      },
      {
        heading: "Heuristic Evaluation",
        items: [
          "SFDIPOT heuristic coverage (Structure, Function, Data, Interfaces, Platform, Operations, Time)",
          "Cognitive friction identification during complex tasks",
          "Visual glitches, layout breaks, and overflow flaws",
          "System feedback responsiveness under load",
        ],
      },
    ],
    whatWeCheck: [
      "Rapid tab switching during transactional operations",
      "Copy-pasting unexpected formatting, emojis, or code snippets into inputs",
      "Interrupted sessions (app backgrounding, device sleep, network drops)",
      "Uncommon browser zoom levels (67%, 125%, 175%) and window resizes",
      "Simultaneous edits by two distinct user accounts",
      "Edge-case cancellation flows mid-checkout or mid-upload",
    ],
    deliverables: [
      "Session-Based Test Management (SBTM) Charters & Logs",
      "Documented Edge-Case Scenarios & Anomaly Proofs",
      "Video recordings and step-by-step reproduction guides",
    ],
    typicalBugsCaught: [
      "Race condition triggering double charges on rapid checkout clicks",
      "Draft data loss when switching browser tabs before autosave fires",
      "Unresponsive layout when pasting 10,000 character strings into descriptions",
      "Ghost notification badges remaining after dismissing alerts",
    ],
    recommendedFor: "Products preparing for public beta, major overhauls, or fast-moving MVPs.",
    executionSteps: [
      { step: "01", title: "Charter Formulation", desc: "Identify high-risk surfaces, fragile integrations, and critical failure modes." },
      { step: "02", title: "Time-Boxed Sessions", desc: "Conduct 60-90 minute deep-dive sessions with live exploratory note-taking." },
      { step: "03", title: "Defect Synthesis", desc: "Capture reproducible proofs, console traces, and severity blast radiuses." },
      { step: "04", title: "Insight Debrief", desc: "Review anomalies with engineering leads to prioritize remediation." },
    ],
  },
  {
    id: "regression-testing",
    slug: "regression-testing",
    number: "03",
    title: "Regression Testing",
    tagline: "Protect existing functionality and verify that new deployments never break what previously worked.",
    shortDescription: "Targeted, modular regression suites that validate critical customer flows and verify bug fixes.",
    longDescription:
      "As codebases grow and release cadences accelerate, regressions become the number one driver of customer churn. We create targeted, modular regression suites that validate critical customer flows, verify bug fixes, and ensure stability across continuous delivery pipelines.",
    whyItMatters:
      "Shipping a shiny new feature is meaningless if it silently breaks the login screen or disables invoice downloads. Regression testing protects your core revenue and brand trust.",
    iconKey: "shield-check",
    capabilitiesGrouped: [
      {
        heading: "Release Regression Sweeps",
        items: [
          "Pre-flight verification sweeps before production rollouts",
          "Changelog-directed testing targeting modified code surfaces",
          "Adjacent component verification and boundary ripple checks",
          "Smoke test automation maintenance and sanity gates",
        ],
      },
      {
        heading: "Critical Journey Protection",
        items: [
          "Core revenue workflows (onboarding, upgrade, checkout, renewal)",
          "Data export and mission-critical administrative actions",
          "Key third-party webhook receivers and webhook triggers",
          "Authentication tokens and SSO session renewals",
        ],
      },
      {
        heading: "Defect Verification",
        items: [
          "Verification of resolved Jira / Linear tickets in clean builds",
          "Adversarial fix testing ensuring root causes are eradicated",
          "Side-effect inspection on neighboring components",
          "Updating regression libraries with newly uncovered test cases",
        ],
      },
    ],
    whatWeCheck: [
      "All primary navigation routes and user dashboards post-deployment",
      "Core conversion and payment processing pathways",
      "Database read/write consistency after migration scripts run",
      "Notification triggers (emails, push alerts, in-app badges)",
      "Permissions hierarchy across enterprise workspaces",
      "API response schemas ensuring backward compatibility",
    ],
    deliverables: [
      "Critical-Path Regression Checklists & Traceability",
      "Pre-Release Smoke Test Verdicts",
      "Regression Risk Summaries for Product & Engineering leads",
    ],
    typicalBugsCaught: [
      "New stylesheet overwriting modal styles on unrelated screens",
      "Database schema migration silently nullifying legacy user preferences",
      "Third-party library upgrade breaking authentication token refreshes",
      "Previously resolved bug resurfacing due to unmerged branch drift",
    ],
    recommendedFor: "Weekly or bi-weekly shipping teams with active feature additions.",
    executionSteps: [
      { step: "01", title: "Changelog Audit", desc: "Analyze commits and PRs to map the blast radius of new deployments." },
      { step: "02", title: "Suite Execution", desc: "Run prioritized smoke and regression passes across target environments." },
      { step: "03", title: "Bug Isolation", desc: "Identify regressions, bisect origin commits, and file reproducible tickets." },
      { step: "04", title: "Release Certification", desc: "Provide executive go/no-go recommendation based on remaining risk." },
    ],
  },
  {
    id: "compatibility-testing",
    slug: "compatibility-testing",
    number: "04",
    title: "Compatibility Testing",
    tagline: "Verification across diverse operating systems, browsers, screen resolutions, and physical devices.",
    shortDescription: "Validate your product across real physical devices and operating environments to eliminate anomalies.",
    longDescription:
      "Modern users access software across an increasingly fragmented ecosystem of hardware, screen sizes, browser engines, and operating systems. We validate your product across real physical devices and operating environments to eliminate platform-specific anomalies.",
    whyItMatters:
      "Your web app might look pristine on an engineer's M3 MacBook Pro running Chrome, but broken on an Android tablet or Safari on iOS 16. Platform-specific glitches create instant bounce rates.",
    iconKey: "monitor",
    capabilitiesGrouped: [
      {
        heading: "Browser Engines",
        items: [
          "Chromium engines (Google Chrome, Microsoft Edge, Brave)",
          "WebKit (macOS Safari, iOS Safari, iPadOS Safari)",
          "Gecko (Mozilla Firefox across desktop OSs)",
          "Legacy browser support checks if required by enterprise contracts",
        ],
      },
      {
        heading: "Mobile Hardware & OS",
        items: [
          "Real device testing across Apple iPhones & iPads (current & n-2 iOS)",
          "Android device fragmentation (Samsung, Google Pixel, Motorola)",
          "Orientation changes (portrait to landscape) and dynamic island/notch handling",
          "Mobile touch target ergonomics and virtual keyboard behavior",
        ],
      },
      {
        heading: "Display & Resolution",
        items: [
          "Responsive breakpoints from 320px mobile to 4K desktop screens",
          "OS scaling factors (125%, 150%, 200% Retina displays)",
          "Dark mode / Light mode visual contrast and asset rendering",
          "Foldable devices and dual-screen form factors",
        ],
      },
    ],
    whatWeCheck: [
      "Navigation header collapse and drawer behavior on mobile viewports",
      "Font rendering, SVG scaling, and high-DPI icon sharpness",
      "Dropdown menus, tooltips, and popovers positioning near viewport edges",
      "Datepicker, file uploader, and native form input styling across OSs",
      "Web audio, video playback, and camera permissions across browsers",
      "Network latency behavior on real 3G/4G/5G mobile carriers",
    ],
    deliverables: [
      "Cross-Platform Compatibility Matrix",
      "Resolution & Breakpoint Anomaly Documentation",
      "Device-Specific Performance & Layout Observations",
    ],
    typicalBugsCaught: [
      "iOS Safari 100vh viewport bug causing buttons to hide behind the URL bar",
      "Date pickers failing to open on Firefox due to WebKit-only CSS properties",
      "Horizontal scrollbars appearing unexpectedly on Windows high-DPI laptops",
      "Touch event collisions preventing map panning on Android tablets",
    ],
    recommendedFor: "Public SaaS platforms, customer-facing web apps, and mobile applications.",
    executionSteps: [
      { step: "01", title: "Device Matrix Definition", desc: "Select device/browser tiers based on your Google Analytics user breakdown." },
      { step: "02", title: "Physical & Virtual Sweeps", desc: "Execute core journeys on real hardware and certified device labs." },
      { step: "03", title: "Visual & Functional Audits", desc: "Document breakpoint flaws, clipped controls, and rendering inconsistencies." },
      { step: "04", title: "Resolution Guide", desc: "Deliver actionable CSS/JS fix recommendations tailored to each engine." },
    ],
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    number: "05",
    title: "Usability & Product Experience",
    tagline: "Evaluate software through the eyes of real users to identify cognitive friction and workflow obstacles.",
    shortDescription: "Step into the shoes of authentic customers, identifying ambiguous prompts, awkward flows, and UX rough edges.",
    longDescription:
      "A feature can technically function while remaining confusing or frustrating to the person paying to use it. We step into the shoes of first-time and seasoned customers, identifying ambiguous prompts, cumbersome navigation, unhelpful error states, and UX rough edges.",
    whyItMatters:
      "If a user can't figure out how to configure their team or finish checkout in 30 seconds, they churn. Usability QA ensures your software is delightfully intuitive, not just technically compliant.",
    iconKey: "user-check",
    capabilitiesGrouped: [
      {
        heading: "Workflow & Navigation Flow",
        items: [
          "First-time onboarding time-to-value assessment",
          "Information hierarchy and visual affordance clarity",
          "Dead-end screens and missing forward-action guidance",
          "Multi-step wizard clarity and back-navigation preservation",
        ],
      },
      {
        heading: "Microcopy & System Guidance",
        items: [
          "Clarity of empty states and instructional prompts",
          "Human-friendly error dialogs that explain how to self-recover",
          "Tooltip relevance and contextual helper text",
          "Confirmation modals for destructive or high-impact actions",
        ],
      },
      {
        heading: "Friction & Ergonomics",
        items: [
          "Click/tap counts required to achieve frequent daily goals",
          "Keyboard accessibility (Tab order, Enter, Escape shortcuts)",
          "Visual feedback on button clicks, saves, and loading states",
          "Legibility, color contrast, and font hierarchy evaluation",
        ],
      },
    ],
    whatWeCheck: [
      "Can a first-time user complete the primary product hook in under 3 minutes?",
      "Do error banners specify what field was wrong and how to fix it?",
      "Are loading states communicative, or do they look like frozen screens?",
      "Is destructive action confirmation clear and difficult to trigger by accident?",
      "Are standard keyboard shortcuts and form navigation keys respected?",
      "Does the interface gracefully handle empty accounts with clear next steps?",
    ],
    deliverables: [
      "UX Friction & Usability Audit Report",
      "Clarity & Error Message Enhancement Suggestions",
      "User Journey Heatmap of Points of Confusion",
    ],
    typicalBugsCaught: [
      "Users abandoning onboarding because form labels use internal engineering jargon",
      "Confusing 'Delete' confirmation button styled in bright green instead of red warning",
      "Users losing draft settings because clicking outside a modal dismisses it without saving",
      "Tab index jumping erratically across form fields instead of flowing top-to-bottom",
    ],
    recommendedFor: "Onboarding funnels, checkout processes, and enterprise workflows.",
    executionSteps: [
      { step: "01", title: "Persona Persona Walkthrough", desc: "Establish customer goals, expectations, and context of use." },
      { step: "02", title: "Friction Point Mapping", desc: "Record every hesitation, confusing prompt, and repetitive step." },
      { step: "03", title: "Heuristic Review", desc: "Grade interface against Nielsen Norman usability heuristics." },
      { step: "04", title: "Actionable Enhancement Deck", desc: "Provide annotated UI screenshots and copy recommendations." },
    ],
  },
  {
    id: "e2e-testing",
    slug: "e2e-testing",
    number: "06",
    title: "End-to-End Testing",
    tagline: "Validate complete customer workflows traversing multiple services, APIs, and data layers.",
    shortDescription: "Stress-test entire business journeys from initial signup through final invoice generation and third-party syncs.",
    longDescription:
      "Isolated unit tests cannot guarantee that data flows reliably from a frontend trigger through third-party webhooks, background queues, and database updates. We stress-test entire business journeys from initial signup through final invoice generation.",
    whyItMatters:
      "Modern architectures involve microservices, third-party payment gateways, asynchronous email services, and analytics hooks. E2E testing ensures the entire chain holds under real pressure.",
    iconKey: "workflow",
    capabilitiesGrouped: [
      {
        heading: "Cross-System Workflows",
        items: [
          "Complete signup -> invite member -> project setup -> export workflows",
          "Third-party integrations (Stripe, Slack, Salesforce, SendGrid)",
          "Single Sign-On (Google Workspace, Okta SAML, Azure AD)",
          "Webhook event triggering, parsing, and failure retries",
        ],
      },
      {
        heading: "Asynchronous Data Consistency",
        items: [
          "Background message queue processing and eventual consistency checks",
          "File processing pipelines (upload -> transcode/parse -> database save)",
          "Email notification dispatch and verification link delivery",
          "Real-time websocket subscriptions and live collaborative updates",
        ],
      },
      {
        heading: "State Across Boundaries",
        items: [
          "Frontend form state correctly mutating downstream tables",
          "Audit trail and access log generation accuracy",
          "Multi-currency conversion and invoice reconciliation",
          "Multi-tenant data isolation verification",
        ],
      },
    ],
    whatWeCheck: [
      "Customer signs up, enters payment, upgrades plan, and verifies correct Stripe invoice",
      "Admin invites colleague via email, colleague clicks link, verifies correct role permissions",
      "File uploaded to S3 triggers Lambda worker, updates progress bar, and displays parsed data",
      "User edits shared document in one browser; second user sees update via WebSockets",
      "Integration with Google Calendar correctly syncs scheduled events and handles cancellations",
      "API webhook failure retries with exponential backoff without duplicating transactions",
    ],
    deliverables: [
      "End-to-End Journey Map & Test Run Logs",
      "Integration Edge Case & Asynchronous Race Condition Notes",
      "Downstream Data Integrity Verification",
    ],
    typicalBugsCaught: [
      "Payment succeeded on Stripe but webhook dropped, leaving customer in free tier",
      "Invite link expired after 10 minutes instead of stated 7 days",
      "WebSocket connection silent drop leaving user typing in disconnected document",
      "Worker queue race condition causing duplicate record creation on bulk upload",
    ],
    recommendedFor: "Multi-tiered SaaS architectures, e-commerce checkouts, and fintech integrations.",
    executionSteps: [
      { step: "01", title: "Workflow Mapping", desc: "Map complete data flow across frontends, APIs, third-parties, and datastores." },
      { step: "02", title: "Environment Orchestration", desc: "Configure connected staging test harnesses and mock API endpoints." },
      { step: "03", title: "Full-Journey Execution", desc: "Execute end-to-end user paths and inspect downstream data integrity." },
      { step: "04", title: "Pipeline Documentation", desc: "Document failure modes, timeout gates, and resilience checkpoints." },
    ],
  },
  {
    id: "release-validation",
    slug: "release-validation",
    number: "07",
    title: "Release Validation",
    tagline: "Decisive go/no-go quality gates and release smoke testing before software reaches end users.",
    shortDescription: "Pre-flight release sweeps, checking migrations, verifying critical operational paths, and providing go/no-go clarity.",
    longDescription:
      "Release day should not be accompanied by anxiety. We provide dedicated pre-flight release validation sweeps, executing sanity suites, checking migration side-effects, verifying critical operational paths, and providing executive leadership with clear release confidence.",
    whyItMatters:
      "Once an update hits production, rollback is costly, stressful, and brand-damaging. Release validation gives engineering VPs and founders an unbiased sanity gate before pushing the button.",
    iconKey: "rocket",
    capabilitiesGrouped: [
      {
        heading: "Pre-Flight Verification",
        items: [
          "Release smoke testing on staging, pre-prod, and production-candidate environments",
          "Changelog coverage verification ensuring all merged PRs are accounted for",
          "Database migration dry-runs and seed data verification",
          "Cache invalidation and static asset CDN propagation verification",
        ],
      },
      {
        heading: "Risk & Readiness Scoring",
        items: [
          "Known-risk register evaluation and acceptable defect thresholds",
          "Rollback criteria definition and emergency rollback validation",
          "Third-party dependency status and API rate limit checks",
          "Executive go/no-go readiness recommendation",
        ],
      },
      {
        heading: "Post-Deployment Sanity",
        items: [
          "Live production smoke testing immediately following cutover",
          "Health check endpoint telemetry and error spike monitoring",
          "Critical path transaction validation with test credentials",
          "Rapid alerting to on-call engineering leads if anomalies occur",
        ],
      },
    ],
    whatWeCheck: [
      "Can new users sign up and existing users log in on the live production candidate?",
      "Did database migration scripts complete cleanly without table locks or latency spikes?",
      "Are static assets loading from new CDN hashed filenames without 404 cache issues?",
      "Do critical payment and checkout flows process test charges successfully?",
      "Are error logging tools (Sentry, Datadog) capturing clean telemetry without error floods?",
      "Is the rollback procedure verified and ready if an unrecoverable blocker is found?",
    ],
    deliverables: [
      "Release Readiness Executive Summary",
      "Pre-Flight Smoke Verification Checklist",
      "Known Issues & Acceptable Risk Register",
    ],
    typicalBugsCaught: [
      "Environment variable missing on production server causing 500 error on checkout",
      "Cached CDN assets serving outdated JavaScript bundles causing client crashes",
      "Database migration lock taking down production API during peak hours",
      "Broken third-party API key committed in staging build not overridden in production",
    ],
    recommendedFor: "Teams launching major version updates or enterprise customer deliverables.",
    executionSteps: [
      { step: "01", title: "Release Scope Lockdown", desc: "Freeze release candidate build and review ticket changelogs." },
      { step: "02", title: "Pre-Flight Smoke Sweeps", desc: "Execute rapid high-priority sanity suites on production-candidate." },
      { step: "03", title: "Readiness Memo", desc: "Deliver explicit go/no-go recommendation with verified risk ledger." },
      { step: "04", title: "Post-Cutover Sanity", desc: "Execute live production smoke tests to verify clean deployment." },
    ],
  },
  {
    id: "quality-audit",
    slug: "quality-audit",
    number: "08",
    title: "Quality Audit",
    tagline: "A concentrated 1–2 week assessment uncovering coverage gaps, process bottlenecks, and product defects.",
    shortDescription: "An intensive audit across test coverage, product health, bug leakage patterns, and release hygiene.",
    longDescription:
      "When you need an unbiased evaluation of where your product currently stands, our Quality Audit delivers rapid clarity. We perform an intensive audit across test coverage, product health, bug leakage patterns, and release hygiene, giving your team a prioritized remediation roadmap.",
    whyItMatters:
      "If bugs keep escaping into production, engineering velocities are slowing, or you're preparing for due diligence or enterprise sales, you need an independent audit of your software quality posture.",
    iconKey: "search",
    capabilitiesGrouped: [
      {
        heading: "Coverage & Architecture Audit",
        items: [
          "Automated vs. manual test coverage gap analysis",
          "Historical defect clustering and brittle code module identification",
          "CI/CD pipeline test execution speed and flakiness assessment",
          "Device and browser test matrix adequacy review",
        ],
      },
      {
        heading: "Product Health Inspection",
        items: [
          "Intensive exploratory defect hunting across all core workflows",
          "Error handling resilience and session crash vulnerability scan",
          "Customer support ticket pattern review to identify recurring bugs",
          "Usability friction and onboarding drop-off point catalog",
        ],
      },
      {
        heading: "Process & Maturity Roadmap",
        items: [
          "Engineering-to-QA handoff efficiency and ticket clarity evaluation",
          "Bug triage speed, severity classification, and retest hygiene",
          "Prioritized remediation backlog ranked by urgency vs. engineering effort",
          "Executive maturity scorecard and 90-day quality improvement plan",
        ],
      },
    ],
    whatWeCheck: [
      "Where are bugs consistently escaping to production, and why?",
      "Are your automated tests testing real user journeys or superficial snapshots?",
      "How long does it take for a bug fix to be verified and deployed safely?",
      "Are customer complaints and support tickets informing your QA priorities?",
      "Does your current test coverage protect your most critical revenue workflows?",
      "What is the cost of defect leakage to your engineering velocity?",
    ],
    deliverables: [
      "Comprehensive Quality Audit Report",
      "Prioritized Defect Backlog with Impact Ratings",
      "QA Process & Automation Maturity Roadmap",
    ],
    typicalBugsCaught: [
      "Entire modules operating with 0% regression coverage",
      "Critical customer complaints recurring for months without engineering awareness",
      "Brittle flaky test suites running for 45 minutes and slowing PR merges",
      "Security and data permission inconsistencies between admin and member tiers",
    ],
    recommendedFor: "Leadership seeking independent visibility into software stability before scaling.",
    executionSteps: [
      { step: "01", title: "Discovery & Access", desc: "Gain environment access, review test suites, and interview key leads." },
      { step: "02", title: "Diagnostic Testing", desc: "Execute intensive bug hunting sweeps and analyze defect escape history." },
      { step: "03", title: "Synthesis & Scoring", desc: "Categorize coverage gaps, calculate defect risk, and grade maturity." },
      { step: "04", title: "Executive Debrief", desc: "Present comprehensive report with prioritized 90-day action items." },
    ],
  },
];

export const homeServiceOverviews: ServiceOverview[] = [
  {
    id: "functional-testing",
    slug: "functional-testing",
    number: "01",
    title: "Functional Testing",
    description: "Systematic validation of product behavior, core features, and edge scenarios against business logic.",
    href: "/services/functional-testing",
    points: ["Positive & Negative Scenarios", "Business Rule Logic", "Boundary Conditions", "Data Integrity"],
  },
  {
    id: "exploratory-testing",
    slug: "exploratory-testing",
    number: "02",
    title: "Exploratory Testing",
    description: "Unscripted, risk-driven investigation to uncover defects that pre-scripted tests routinely miss.",
    href: "/services/exploratory-testing",
    points: ["Session-Based Charters", "Edge-Case Hunting", "Concurrency Testing", "State Collisions"],
  },
  {
    id: "regression-testing",
    slug: "regression-testing",
    number: "03",
    title: "Regression Testing",
    description: "Protect existing functionality and verify that new deployments never break what previously worked.",
    href: "/services/regression-testing",
    points: ["Critical-Path Regression", "Pre-Release Smoke Sweeps", "Fix Verification", "Zero Leakage"],
  },
  {
    id: "compatibility-testing",
    slug: "compatibility-testing",
    number: "04",
    title: "Compatibility Testing",
    description: "Verification across diverse operating systems, browsers, screen resolutions, and physical devices.",
    href: "/services/compatibility-testing",
    points: ["Cross-Browser Matrix", "iOS & Android Hardware", "Responsive Breakpoints", "High-DPI Displays"],
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    number: "05",
    title: "Usability & UX Testing",
    description: "Evaluate software through the eyes of real users to identify cognitive friction and workflow obstacles.",
    href: "/services/usability-testing",
    points: ["Onboarding Flow Friction", "Error Copy Clarity", "Navigation Ergonomics", "Accessibility Sanity"],
  },
  {
    id: "e2e-testing",
    slug: "e2e-testing",
    number: "06",
    title: "End-to-End Testing",
    description: "Validate complete customer workflows traversing multiple services, APIs, and data layers.",
    href: "/services/e2e-testing",
    points: ["Cross-Service Workflows", "Stripe & Webhook Integrations", "Data Flow Integrity", "Asynchronous Queues"],
  },
  {
    id: "release-validation",
    slug: "release-validation",
    number: "07",
    title: "Release Validation",
    description: "Decisive go/no-go quality gates and release smoke testing before software reaches end users.",
    href: "/services/release-validation",
    points: ["Pre-Flight Smoke Sweeps", "Migration Dry-Runs", "Rollback Criteria", "Go / No-Go Decision"],
  },
  {
    id: "quality-audit",
    slug: "quality-audit",
    number: "08",
    title: "Quality Audit",
    description: "A concentrated 1–2 week assessment uncovering coverage gaps, process bottlenecks, and product defects.",
    href: "/services/quality-audit",
    points: ["1–2 Week Intensive Sprint", "Defect Risk Scorecard", "Coverage Gap Mapping", "Remediation Roadmap"],
  },
];
