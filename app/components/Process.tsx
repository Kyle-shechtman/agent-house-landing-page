import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const steps = [
  {
    step: "1",
    title: "Automation blueprint",
    description:
      "We audit your workflows, data sources, and tech stack, then deliver a prioritized roadmap with ROI projections.",
    deliverables: ["Stakeholder interviews", "Process mapping", "Data readiness report"],
  },
  {
    step: "2",
    title: "Design & build",
    description:
      "We prototype AI agents, integrate with your systems, and run sandbox tests before anything hits production.",
    deliverables: ["Integration plan", "Agent playbooks", "Human-in-the-loop QA"],
  },
  {
    step: "3",
    title: "Launch & train",
    description:
      "We deploy your automations, train your team, and capture feedback loops to keep performance trending upward.",
    deliverables: ["Enablement library", "Performance dashboards", "Support playbook"],
  },
  {
    step: "4",
    title: "Optimize & expand",
    description:
      "Ongoing monitoring, A/B testing, and experimentation ensure your automations get smarter as your business grows.",
    deliverables: ["Monthly optimization sprints", "New workflow experiments", "Metrics reporting"],
  },
];

export default function Process() {
  return (
    <section className="section bg-white" id="process">
      <div className="mx-auto max-w-screen-xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 md:max-w-xl">
            <Badge variant="outline" className="w-fit">
              Delivery framework
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Full-service implementation from blueprint to continuous optimization.
            </h2>
            <p className="text-base text-foreground/70 md:text-lg">
              We combine automation engineering, AI model tuning, and change
              management so your team sees value in weeks—not quarters.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ step, title, description, deliverables }) => (
            <Card key={title} className="h-full bg-muted/20">
              <CardHeader className="flex flex-row items-start gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white shadow-sm">
                  {step}
                </span>
                <div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <p className="mt-1 text-sm text-foreground/70">{description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Separator className="bg-border/70" />
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  Deliverables
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
