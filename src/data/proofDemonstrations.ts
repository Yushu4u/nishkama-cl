export interface DemonstrationSample {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  overview: string;
  sampleType: "NCL Framework Sample" | "Illustrative QA Artifact" | "Exploratory Charter Sample";
  findings: {
    category: string;
    observation: string;
    impact: string;
    recommendation: string;
  }[];
  verifiableArtifacts: string[];
}

export const demonstrationSamples: DemonstrationSample[] = [
  {
    id: "sample-qa-audit",
    tag: "QA Audit Sample",
    title: "SaaS Multi-Tenant Onboarding & Billing Audit",
    subtitle: "Illustrative breakdown of an NCL comprehensive quality review",
    overview:
      "This illustrative sample shows how NCL structures a focused QA audit for a subscription SaaS product. The focus is on session state preservation, webhook race conditions, and user onboarding friction.",
    sampleType: "NCL Framework Sample",
    findings: [
      {
        category: "Session State & Edge Case",
        observation: "Concurrent invite acceptance in separate browser tabs leads to orphaned team memberships.",
        impact: "High — Users see empty workspaces and require manual customer support intervention.",
        recommendation: "Implement atomic idempotency keys on organization invitation acceptance endpoints.",
      },
      {
        category: "Cross-Device Checkout Flow",
        observation: "Mobile Safari autofill triggers premature form submission before payment tokenization resolves.",
        impact: "Critical — Interrupted checkout and failed conversion tracking.",
        recommendation: "Enforce explicit client-side validation lock until payment gateway handshake completes.",
      },
      {
        category: "User Experience Friction",
        observation: "Generic 'Something went wrong' dialog appears when password fails complexity policy without field guidance.",
        impact: "Medium — Increased user abandonment during self-serve registration.",
        recommendation: "Provide real-time password requirement checklist indicators directly below input field.",
      },
    ],
    verifiableArtifacts: [
      "Reproducible video captures with network waterfall inspects",
      "Environment matrix (iOS Safari 17.4, Chrome 124, Firefox 125)",
      "Severity rating: 1 Critical, 1 High, 1 Medium",
    ],
  },
  {
    id: "sample-exploratory-charter",
    tag: "Exploratory Charter",
    title: "Session-Based Exploratory Charter: Workspace File Uploads",
    subtitle: "Demonstration charter showing unscripted risk-based bug hunting",
    overview:
      "A sample exploratory testing charter targeting asynchronous file processing, network drops during multipart uploads, and invalid MIME type handling.",
    sampleType: "Exploratory Charter Sample",
    findings: [
      {
        category: "Network Resilience",
        observation: "Simulated packet loss at 85% upload progress causes progress bar to freeze without retry prompt.",
        impact: "High — User assumes system has stalled and navigates away, losing drafted form contents.",
        recommendation: "Introduce exponential backoff auto-retry with explicit 'Connection interrupted — Retrying' UI state.",
      },
      {
        category: "Payload Boundary",
        observation: "Files with double extensions (report.pdf.exe) bypass initial client MIME filter and fail silently on S3 upload.",
        impact: "Medium — File appears uploaded in UI but fails downstream processing without error banner.",
        recommendation: "Add server-side magic number byte header inspection before emitting success events.",
      },
    ],
    verifiableArtifacts: [
      "Time-boxed 90-minute SBTM session log with hypothesis outcomes",
      "Network throttling simulation profiles (Slow 3G, Packet Loss 15%)",
      "Step-by-step reproduction instructions with cURL payloads",
    ],
  },
];
