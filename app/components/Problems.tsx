import {
  AlarmClock,
  BarChart3,
  Briefcase,
  Cable,
  ClipboardList,
  Headset,
} from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const challenges = [
  {
    icon: AlarmClock,
    title: "Lead follow-up slips through the cracks",
    description:
      "Manual reminders and missed handoffs cost SMBs up to 30% of pipeline each quarter.",
  },
  {
    icon: BarChart3,
    title: "Insights buried in spreadsheets",
    description:
      "Customer and operations data lives in silos, making it hard to forecast demand or react quickly.",
  },
  {
    icon: ClipboardList,
    title: "Teams stuck in repetitive admin",
    description:
      "Invoicing, scheduling, and reporting steal hours that could fuel growth initiatives.",
  },
  {
    icon: Cable,
    title: "Disconnected tools create chaos",
    description:
      "Legacy systems and modern SaaS rarely talk to each other and generate costly errors.",
  },
  {
    icon: Headset,
    title: "Customer experience feels impersonal",
    description:
      "Without AI co-pilots, support teams can’t provide real-time, data-backed answers.",
  },
  {
    icon: Briefcase,
    title: "No internal AI expertise",
    description:
      "Hiring experienced automation engineers is expensive—and the need to compete with AI is immediate.",
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

