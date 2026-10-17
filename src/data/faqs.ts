export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const homeFaqs: FaqItem[] = [
  {
    id: "automated-vs-qa",
    question: "Why do we need independent QA if our engineers already write automated tests?",
    answer:
      "Automated tests (Playwright, Cypress, Jest) only verify scenarios engineers anticipated when writing the code. They test the 'happy path' and known edge cases. Independent QA simulates unpredictable real-world user behavior, edge-case sequences, flaky cellular networks, browser rendering anomalies, and state race conditions that automated scripts inevitably miss.",
  },
  {
    id: "sprint-integration",
    question: "How does Nishkama CodeLab integrate into our existing sprint workflow?",
    answer:
      "We plug directly into your team's existing ecosystem—Linear, Jira, GitHub, and Slack. We test staging preview deployments, reproduce customer-reported bugs, file actionable tickets with reproduction steps and screen recordings, and provide release go/no-go sign-offs before production pushes.",
  },
  {
    id: "onboarding-turnaround",
    question: "How quickly can we get started, and what is required for onboarding?",
    answer:
      "We can onboard in as little as 24–48 hours. Once an NDA is executed, we complete a 30-minute product architecture walkthrough, receive staging/test credentials, and begin immediately without disrupting your engineering team's focus.",
  },
  {
    id: "devices-platforms",
    question: "Do you test on real physical devices or simulators?",
    answer:
      "We prioritize testing on actual physical iOS and Android hardware across varying OS versions and form factors, alongside cross-browser matrices (Chrome, Safari, Firefox, Edge) to catch genuine touch sensitivity, viewport quirks, and hardware-accelerated rendering issues.",
  },
  {
    id: "engagement-types",
    question: "Can we hire Nishkama CodeLab for a one-off pre-launch audit?",
    answer:
      "Yes. We offer focused 1–2 week intensive Quality Audits designed specifically for teams preparing for public betas, major v2 launches, or investor demos. You receive an exhaustive catalog of bugs, edge cases, and UX friction points without requiring an ongoing commitment.",
  },
];
