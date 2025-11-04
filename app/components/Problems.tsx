import { AlarmClock, BarChart3, ClipboardList } from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const challenges = [
  {
    icon: AlarmClock,
    title: "Discover AI opportunities",
    description:
      "We identify high-impact use cases specific to your business.",
  },
  {
    icon: BarChart3,
    title: "Insights buried in databases",
    description:
      "Your data holds revenue opportunities waiting to be discovered.",
  },
  {
    icon: ClipboardList,
    title: "Eliminate repetitive work",
    description:
      "Free your team from manual tasks that slow growth.",
  },
];

export default function Problems() {
  return (
    <section className="section bg-muted/40" id="problems">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <Badge variant="outline" className="text-sm font-medium uppercase">
            Why teams call us
          </Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">
            The hidden costs of running without automation.
          </h2>
          <p className="text-base text-foreground/70 md:text-lg">
            We audit your workflows and build AI automations that eliminate friction and boost revenue.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {challenges.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full bg-white">
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/70">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
