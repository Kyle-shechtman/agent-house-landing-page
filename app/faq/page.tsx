import type { Metadata } from "next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Badge } from "@/app/components/ui/badge";
import { SITE_CONFIG } from "@/lib/config";

const faqs = [
  {
    question: "What small businesses do you work for?",
    answer:
      "We work with any small business looking to unlock revenue through AI and automation, from medical practices to lawn care companies.",
  },
  {
    question: "How quickly can we launch an AI automation?",
    answer:
      "We move fast. Most automations launch in 4–8 weeks, and we prioritize quick wins that deliver measurable ROI within the first month.",
  },
  {
    question: "How much internal AI or data expertise do we need?",
    answer:
      "None. We translate business goals into AI use cases, handle the technical plumbing, and build enablement so your team knows exactly how to use the new automation.",
  },
  {
    question: "Do you build custom AI agents or use off-the-shelf tools?",
    answer:
      "Both. We combine best-in-class platforms with custom orchestration and guardrails so each agent is tuned to your workflows, branding, and compliance requirements.",
  },
  {
    question: "Can you integrate with our existing CRM and finance tools?",
    answer:
      "Yes. We can connect to any external tool with an API, from scheduling software to finance platforms. Our agents thrive on external context.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most clients start with a project-based engagement, then move to a monthly subscription for ongoing improvements.",
  },
];

export const metadata: Metadata = {
  title: "AI Automation FAQ",
  description:
    "Answers to the most common questions about Data Buddies Solutions, from implementation timelines to integration support.",
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/faq`,
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section className="section bg-muted/40">
      <div className="mx-auto max-w-screen-xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <Badge variant="outline" className="w-fit uppercase">
            FAQ
          </Badge>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Answers to the questions small business owners struggle with most.
          </h1>
          <p className="text-base text-foreground/70 md:text-lg">
            Need something specific? Schedule a call and we'll review your workflows,
            data, and goals together and recommend the right next step.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl space-y-4"
        >
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`item-${index + 1}`}
              className="overflow-hidden rounded-2xl border border-border/60 bg-white/95 shadow-sm transition hover:border-accent/40 hover:shadow-md last:border-b"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-foreground hover:text-accent">
                {question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-foreground/75">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
