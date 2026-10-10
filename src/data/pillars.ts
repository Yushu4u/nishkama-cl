export interface Pillar {
  id: string;
  number: string;
  action: string; // BREAK IT, USE IT, LISTEN TO IT
  name: string;   // QA Testing, Product Experience, Quality Advocacy
  question: string;
  capabilities: string[];
  message: string;
  href: string;
  accentLabel: string;
}

export const pillars: Pillar[] = [
  {
    id: "qa-testing",
    number: "01",
    action: "BREAK IT",
    name: "QA Testing",
    question: "Does the product work correctly?",
    capabilities: [
      "Functional Testing",
      "Exploratory Testing",
      "Regression Testing",
      "Compatibility Testing",
      "Device QA",
    ],
    message:
      "We systematically validate product behavior and explore where it can fail.",
    href: "/services#functional-testing",
    accentLabel: "Technical Correctness",
  },
  {
    id: "product-experience",
    number: "02",
    action: "USE IT",
    name: "Product Experience",
    question: "Does the product work the way a real person needs it to?",
    capabilities: [
      "Dogfooding",
      "Real User Journeys",
      "Validation",
      "Friction Identification",
      "Cross-Platform Flow",
    ],
    message:
      "We use the product as a real person would, validate important journeys, and identify friction that traditional test execution may miss.",
    href: "/services#usability-testing",
    accentLabel: "Real-World Usability",
  },
  {
    id: "quality-advocacy",
    number: "03",
    action: "LISTEN TO IT",
    name: "Quality Advocacy",
    question: "What are customers experiencing, saying, and struggling with?",
    capabilities: [
      "Customer Feedback",
      "Analysis",
      "Insights",
      "Recurring Pain Points",
      "Actionable Recommendations",
    ],
    message:
      "We look beyond the test environment to understand customer experiences and recurring pain points, then translate those signals into actionable quality insights.",
    href: "/quality-advocacy",
    accentLabel: "Customer Voice",
  },
];
