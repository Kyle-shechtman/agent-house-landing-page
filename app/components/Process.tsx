import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const steps = [
  {
    step: "1",
    title: "Understand & plan",
    description:
      "We sit with your team, map what slows you down, and sketch a simple plan that shows where automation can help first.",
    deliverables: ["Team conversations", "Workflow sketch", "Priority shortlist"],
  },
  {
    step: "2",
    title: "Build & test",
    description:
      "We connect the tools, build the automations, and test them in a safe space so everything feels right before launch.",
    deliverables: ["Connection checklist", "Step-by-step guides", "Dry-run feedback"],
  },
  {
    step: "3",
    title: "Launch & coach",
    description:
      "We roll out the new workflows, sit alongside your team, and answer every question until it feels natural.",
    deliverables: ["Quick-start videos", "Live training sessions", "Friendly support channel"],
  },
  {
    step: "4",
    title: "Tune & grow",
    description:
      "We check in regularly, tweak what needs love, and add new automations once the first wins are humming.",
    deliverables: ["Monthly check-ins", "New idea backlog", "Progress snapshots"],
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
              A friendly, end-to-end path from idea to daily use.
            </h2>
            <p className="text-base text-foreground/70 md:text-lg">
              No jargon, no overwhelm—just a clear rhythm that gets automations working fast and keeps them priceless.
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
