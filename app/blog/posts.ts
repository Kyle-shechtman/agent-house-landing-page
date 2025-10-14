export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  date: string;
  tags: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  takeaway: string;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-automation-blueprint-small-business",
    title: "The AI Automation Blueprint for Small Businesses",
    description:
      "A step-by-step guide for assessing workflows, prioritizing use cases, and launching AI automation within 60 days.",
    readingTime: "8 min read",
    date: "2025-10-01",
    tags: ["AI automation", "SMB strategy"],
    sections: [
      {
        heading: "Map the workflow landscape",
        paragraphs: [
          "Interview stakeholders to surface the most repetitive, error-prone tasks across sales, operations, finance, and customer support.",
          "Score each workflow across effort, impact, data readiness, and compliance risk. Use this to prioritize a balanced roadmap.",
        ],
        bullets: [
          "Workflow inventory spreadsheet",
          "Automation potential scoring matrix",
          "Stakeholder signoff on priorities",
        ],
      },
      {
        heading: "Establish clean data foundations",
        paragraphs: [
          "Identify the systems of record (CRM, ERP, billing, support) and create a plan for structured data syncs or API integrations.",
          "Introduce data contracts where necessary and align on metrics definitions so downstream analytics stay consistent.",
        ],
      },
      {
        heading: "Prototype, test, and launch",
        paragraphs: [
          "Start with a sandbox agent that mirrors the highest priority workflow. Measure performance against a manual control group.",
          "Roll out to production with human-in-the-loop approvals, logs, and monitoring so the team trusts the automation on day one.",
        ],
        bullets: [
          "Prompt library and escalation matrix",
          "User training and documentation",
          "Adoption KPIs and experiment backlog",
        ],
      },
    ],
    takeaway:
      "With a clear blueprint, SMBs can deploy AI automations in weeks—not months—while staying compliant and building stakeholder trust.",
  },
  {
    slug: "build-ai-sales-follow-up-system",
    title: "How to Build an AI Sales Follow-Up System That Converts",
    description:
      "Combine CRM data, AI orchestration, and compliance guardrails to boost lead-to-meeting rates.",
    readingTime: "6 min read",
    date: "2025-09-12",
    tags: ["Revenue automation", "CRM"],
    sections: [
      {
        heading: "Unify your revenue data",
        paragraphs: [
          "Sync CRM, marketing automation, and product usage data into a unified warehouse. Maintain enrichment for industry, size, and lifecycle stage.",
          "Set service-level agreements for updates so your AI agent acts on accurate, timely information.",
        ],
      },
      {
        heading: "Design the engagement flow",
        paragraphs: [
          "Map out touchpoints from demo request through closed won. Define branching logic based on persona, deal size, and engagement level.",
          "Use AI to generate personalized emails, route tasks, and book meetings directly on rep calendars.",
        ],
      },
      {
        heading: "Measure and iterate",
        paragraphs: [
          "Track reply rate, meetings booked, and pipeline velocity. Compare cohorts against manual control groups to quantify lift.",
          "Instrument guardrails that flag edge cases to human reps and continuously feed successful prompts back into the system.",
        ],
      },
    ],
    takeaway:
      "Automated follow-up drives responsiveness and consistency, while reps stay focused on high-value conversations.",
  },
  {
    slug: "ai-customer-success-copilot",
    title: "Designing a Customer Success Co-Pilot with AI Guardrails",
    description:
      "Build AI copilots that deliver on-brand, policy-compliant assistance for customer success teams.",
    readingTime: "9 min read",
    date: "2025-08-20",
    tags: ["Customer success", "AI agents"],
    sections: [
      {
        heading: "Centralize your knowledge base",
        paragraphs: [
          "Aggregate documentation, troubleshooting guides, policies, and product updates into a searchable vector index.",
          "Assign content owners to keep the corpus fresh and align tone and terminology.",
        ],
      },
      {
        heading: "Craft safe and effective prompts",
        paragraphs: [
          "Design prompts that incorporate context (account stage, plan type) and apply policy filters before answers are returned.",
          "Provide fallback responses for low-confidence answers and route complex cases to human agents.",
        ],
      },
      {
        heading: "Monitor quality and adoption",
        paragraphs: [
          "Set up dashboards that track resolution time, customer satisfaction, and deflection rates.",
          "Regularly review transcripts to refine prompts, update knowledge sources, and celebrate wins.",
        ],
      },
    ],
    takeaway:
      "A governed copilot augments your CS team, ensuring every customer interaction is informed, compliant, and on brand.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

