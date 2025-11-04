import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle } from "./ui/card";

const steps = [
  {
    step: "1",
    title: "Understand & plan",
    description:
      "We hear your problems, discover where bottlenecks are, and use our AI expertise to see where we can help.",
  },
  {
    step: "2",
    title: "Build & test",
    description:
      "We connect the tools, build the automations, and test them in a safe space so everything feels right before launch.",
  },
  {
    step: "3",
    title: "Launch & coach",
    description:
      "We deploy the automation, train your team, and provide support until adoption is seamless.",
  },
  {
    step: "4",
    title: "Tune & grow",
    description:
      "We monitor performance, optimize what's working, and scale with new automations.",
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
              Discovery to deployment in four steps.
            </h2>
            <p className="text-base text-foreground/70 md:text-lg">
              A clear process that gets AI automations working fast.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ step, title, description }) => (
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
