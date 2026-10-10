export interface PlatformCoverage {
  id: string;
  title: string;
  description: string;
  examples: string[];
  iconKey: string;
}

export const platformCoverages: PlatformCoverage[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Modern single-page applications, responsive web portals, and server-rendered web apps tested for functionality, performance, and cross-browser consistency.",
    examples: ["Next.js & React Apps", "Vue / Svelte Portals", "Responsive PWAs"],
    iconKey: "globe",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description:
      "Native iOS and Android apps, cross-platform builds (Flutter, React Native), and mobile responsive views tested on real physical hardware.",
    examples: ["iOS (iPhone, iPad)", "Android (Multiple OEMs)", "React Native & Flutter"],
    iconKey: "smartphone",
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    description:
      "Electron apps, native desktop software, and system utilities tested across macOS, Windows, and Linux operating systems.",
    examples: ["Electron & Tauri Apps", "macOS & Windows Native", "Cross-OS Packaging"],
    iconKey: "laptop",
  },
  {
    id: "apis-integrations",
    title: "APIs & Integrations",
    description:
      "RESTful, GraphQL, and webhook interfaces tested for contract fidelity, authentication limits, payload edge cases, and asynchronous reliability.",
    examples: ["REST & GraphQL Endpoints", "Webhooks & Event Handlers", "Third-Party Connectors"],
    iconKey: "code",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Experiences",
    description:
      "Products that span mobile, web, and hardware, requiring synchronized state, push notifications, and seamless device handoff.",
    examples: ["Multi-Device Sessions", "Sync & Offline Queues", "Push Notification Handlers"],
    iconKey: "layers",
  },
  {
    id: "portals",
    title: "Customer & Admin Portals",
    description:
      "Role-based permission systems, tenant isolation, reporting consoles, billing management, and administrative configuration suites.",
    examples: ["Role-Based Access Control", "Billing & Invoice Dashboards", "Tenant Settings"],
    iconKey: "shield",
  },
  {
    id: "saas-platforms",
    title: "Digital Products & SaaS Platforms",
    description:
      "B2B and B2C SaaS platforms featuring team collaboration, permission tiers, subscription gates, and high-frequency release cycles.",
    examples: ["Subscription Lifecycle", "Multi-Seat Workspaces", "Self-Serve Onboarding"],
    iconKey: "cloud",
  },
  {
    id: "connected-workflows",
    title: "Software Products with Connected Workflows",
    description:
      "Complex operational software orchestrating background tasks, file transformations, database syncs, and human-in-the-loop approvals.",
    examples: ["Multi-Step Pipelines", "Document & Asset Processing", "Transactional Approvals"],
    iconKey: "git-branch",
  },
];
