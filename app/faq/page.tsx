import type { Metadata } from "next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Badge } from "@/app/components/ui/badge";

const faqs = [
  {
    question: "What industries do you specialize in for AI automation?",
    answer:
      "We partner primarily with professional services, financial services, healthcare operations, and technology-enabled small businesses. Most engagements involve automating revenue workflows, customer success, or back-office processes.",
  },
  {
    question: "How quickly can we launch an AI automation?",
    answer:
      "Our Automation Blueprint takes 2 weeks. Implementation timelines range from 4–8 weeks depending on integrations. We prioritize quick wins that deliver measurable ROI within the first month of launch.",
  },
  {
    question: "What data security practices do you follow?",
    answer:
      "We enforce least-privilege access, encrypt data in transit and at rest, and can deploy within your secure cloud environment or VPC when required.",
  },
  {
    question: "Do you build custom AI agents or use off-the-shelf tools?",
    answer:
      "Both. We combine best-in-class platforms with custom orchestration and guardrails so each agent is tuned to your workflows, branding, and compliance requirements.",
  },
  {
    question: "How do you ensure our team adopts the new automations?",
    answer:
      "Every engagement includes enablement, internal documentation, training sessions, and clear escalation paths. We also instrument analytics to monitor adoption and iterate quickly.",
  },
  {
    question: "Can you integrate with our existing CRM and finance tools?",
    answer:
      "Yes. We routinely integrate with HubSpot, Salesforce, QuickBooks, Xero, Stripe, Airtable, Google Workspace, Slack, and industry-specific platforms via APIs or RPA connectors.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing depends on scope and support level. Most clients start with a project-based engagement for discovery and build, then move into a monthly optimization subscription for continuous improvements.",
  },
  {
    question: "Do you help with content and knowledge base preparation?",
    answer:
      "Absolutely. We help structure your knowledge base, clean datasets, and create prompt libraries so AI agents stay accurate and on-brand.",
  },
];

export const metadata: Metadata = {
  title: "AI Automation FAQ",
  description:
    "Answers to the most common questions about Data Buddies Solutions, from implementation timelines to integration support.",
  alternates: {
    canonical: "https://databuddiessolutions.com/faq",
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
    <section className="section">
      <div className="mx-auto max-w-screen-xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <Badge variant="outline" className="w-fit uppercase">
            FAQ
          </Badge>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Answers to the questions founders, operators, and RevOps leads ask most.
          </h1>
          <p className="text-base text-foreground/70 md:text-lg">
            Need something specific? Schedule a call and we’ll review your workflow,
            data sources, and desired outcomes.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-white shadow-sm"
        >
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`item-${index + 1}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
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
