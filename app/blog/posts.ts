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
    slug: "foundation-holds-you-back",
    title: "When the Foundation Holds You Back: Why Small Business Owners Struggle to Unlock AI",
    description:
      "Without a solid data foundation, AI agents can’t deliver the value business owners expect. Here’s how to get the infrastructure right.",
    readingTime: "2 min read",
    date: "2025-10-15",
    tags: ["AI readiness", "Data infrastructure"],
    sections: [
      {
        heading: "The AI dream vs. the data reality",
        paragraphs: [
          "We’re seeing an exciting trend: small business owners are eager to use AI, but too often lack the proper infrastructure to support it.",
          "Think of it like building a house. You can dream of a stunning rooftop deck, but you can’t build it if the foundation isn’t solid. In the world of AI, that foundation is your data pipeline.",
        ],
      },
      {
        heading: "AI agents need unified context",
        paragraphs: [
          "AI agents thrive on context. They can make decisions, draw insights, and automate tasks, but only if they have reliable, unified data.",
          "Unfortunately, many businesses still store information in silos, or worse, on paper. Disconnected data is the reason promising AI initiatives stall.",
        ],
      },
      {
        heading: "Lay the groundwork before you sprint",
        paragraphs: [
          "Before you can run with AI, you must crawl. Build the right infrastructure: clean data, shared systems, documented processes. Then AI suddenly becomes repeatable and scalable.",
          "Once you shore up the foundation, you can deploy agents confidently and finally see the payoff you imagined.",
        ],
      },
    ],
    takeaway:
      "Shore up your data foundation first, and AI becomes the growth engine it was meant to be.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
