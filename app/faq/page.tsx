import type { Metadata } from "next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Badge } from "@/app/components/ui/badge";

const faqs = [
  {
    question: "Where does AI automation create the most value for small businesses?",
    answer:
      "We focus on revenue, customer success, and operations—places where manual work gums up growth. We help you automate follow-up, reporting, and service workflows that directly improve retention and cash flow.",
  },
  {
    question: "How quickly can we launch an AI automation?",
    answer:
      "Our Automation Blueprint takes 2 weeks. Implementation timelines range from 4–8 weeks depending on integrations. We prioritize quick wins that deliver measurable ROI within the first month of launch.",
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
    question: "How do we make sure the team actually uses the automation?",
    answer:
      "Every launch includes enablement, training sessions, and clear escalation paths. We instrument analytics to monitor adoption and user feedback so we can iterate quickly.",
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
    question: "How do we measure success once the automation is live?",
    answer:
      "We define the KPIs up front—think response time, meetings booked, invoices processed—and set up dashboards so you can see ROI within the first few weeks.",
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
            Need something specific? Schedule a call—we’ll review your workflows,
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
