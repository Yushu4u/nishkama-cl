export interface QAExpertiseItem {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const qaExpertiseList: QAExpertiseItem[] = [
  {
    id: "functional",
    name: "Functional Testing",
    category: "Core Verification",
    description: "Systematic verification of feature logic, data integrity, business rules, and error handling against expected specifications.",
  },
  {
    id: "exploratory",
    name: "Exploratory Testing",
    category: "Risk Discovery",
    description: "Unscripted, intuition-led investigation designed to uncover edge cases and failure modes that checklists never predict.",
  },
  {
    id: "regression",
    name: "Regression Testing",
    category: "Release Safety",
    description: "Targeted verification of critical paths and adjacent components to ensure code changes introduce zero unintended breakages.",
  },
  {
    id: "compatibility",
    name: "Compatibility Testing",
    category: "Cross-Platform",
    description: "Rigorous testing across browsers, operating systems, hardware form factors, and screen densities for universal consistency.",
  },
  {
    id: "usability",
    name: "Usability Testing",
    category: "Product Experience",
    description: "Identifying points of user friction, cognitive overload, ambiguous system prompts, and confusing multi-step workflows.",
  },
  {
    id: "e2e",
    name: "End-to-End Testing",
    category: "Full Journey",
    description: "Validating complete customer workflows traversing frontends, backend APIs, message queues, and external payment processors.",
  },
  {
    id: "release-validation",
    name: "Release Validation",
    category: "Pre-Flight",
    description: "Decisive pre-deployment smoke suites and sanity gates providing engineering leadership with release confidence.",
  },
  {
    id: "bug-hunting",
    name: "Bug Hunting",
    category: "Adversarial",
    description: "Focused sessions probing edge states, rapid inputs, boundary mutations, and concurrent user sessions for hidden defects.",
  },
  {
    id: "product-qa",
    name: "Product QA",
    category: "Embedded Partnership",
    description: "Continuous quality ownership integrated directly into your agile sprints, PR triage, and daily engineering standups.",
  },
  {
    id: "quality-audit",
    name: "Quality Audit",
    category: "Strategic Evaluation",
    description: "A focused assessment diagnosing test coverage gaps, process blind spots, and product vulnerabilities with prioritized remedies.",
  },
];
