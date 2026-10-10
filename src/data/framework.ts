export interface FrameworkStage {
  number: string;
  stage: string;
  tagline: string;
  description: string;
  focusAreas: string[];
}

export const advocacyFramework: FrameworkStage[] = [
  {
    number: "01",
    stage: "UNDERSTAND",
    tagline: "Learn the product, users, workflows, business context, and critical journeys.",
    description:
      "Before filing a single ticket, we immerse ourselves in your product context: who relies on it, what tasks they are trying to accomplish, and what downtime or bugs cost your business.",
    focusAreas: [
      "Target persona goals & core value moments",
      "Business risk mapping and failure blast radius",
      "Key conversion funnels and administrative workflows",
      "Technical architecture boundaries & external integrations",
    ],
  },
  {
    number: "02",
    stage: "BREAK",
    tagline: "Explore beyond the happy path and investigate unexpected failures and edge cases.",
    description:
      "We apply adversarial, risk-based thinking to find where software fractures: race conditions, concurrency bugs, unexpected payloads, network drops, and corrupted state.",
    focusAreas: [
      "Negative testing and boundary value probing",
      "Session interruptions, offline states, and packet throttling",
      "State mutations across browser tabs and devices",
      "Data validation flaws and permission boundary leaks",
    ],
  },
  {
    number: "03",
    stage: "USE",
    tagline: "Experience the product like a real customer across realistic scenarios.",
    description:
      "Passing tests does not mean the user journey feels intuitive. We dogfood the application as authentic users with real-world goals, highlighting friction, unhelpful errors, and confusing layouts.",
    focusAreas: [
      "End-to-end task completion without insider shortcuts",
      "First-time user onboarding and cognitive friction",
      "Clarity of system feedback and contextual messaging",
      "Real-world device ergonomics and responsiveness",
    ],
  },
  {
    number: "04",
    stage: "LISTEN",
    tagline: "Study customer pain points and feedback to identify quality issues traditional testing may miss.",
    description:
      "Customer complaints, support tickets, and review sentiment hold crucial quality clues that never show up in test plans. We connect customer feedback back to root quality defects.",
    focusAreas: [
      "Support ticket pattern analysis & churn signals",
      "Review feedback and recurring user complaints",
      "Telemetry on dropped workflows and user dead-ends",
      "Synthesizing customer frustration into product evidence",
    ],
  },
];
