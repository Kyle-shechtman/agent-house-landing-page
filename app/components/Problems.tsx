import { AlarmClock, BarChart3, ClipboardList } from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const challenges = [
  {
    icon: AlarmClock,
    title: "Discover the potential of AI",
    description:
      "We help teams understand AI capabilities and uncover the highest-impact use cases.",
  },
  {
    icon: BarChart3,
    title: "Insights buried in databases",
    description:
      "Gold mines of intelligence are waiting to be unlocked to boost revenue.",
  },
  {
    icon: ClipboardList,
    title: "Teams stuck in repetitive admin",
    description:
      "Reduce mundane manual labor and work alongside experts who understand AI.",
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
            We audit your workflows, quantify the opportunity, and design AI
            automations that eliminate the friction eating into your margins.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full bg-white">
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-foreground/75">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
