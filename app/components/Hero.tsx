import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, LineChart } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const proofPoints = [
  { icon: LineChart, label: "Automations live in weeks—not quarters" },
  { icon: Clock, label: "Teams regain 40+ hours every month" },
];

export default function Hero() {
  return (
    <section className="section" id="top">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:gap-16">
        <div className="space-y-8">
          <Badge className="w-fit bg-accent/15 text-sm font-semibold text-accent">
            Your business buddy that never sleeps
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem]">
              AI automation that handles the busywork so you can focus on growth.
            </h1>
            <p className="text-lg text-foreground/75 md:text-xl">
              We design and launch lightweight AI agents that follow up with leads,
              tidy up your data, and keep operations moving while you sleep.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link
                href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a strategy call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#process">See how it works</Link>
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {proofPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm font-medium text-foreground/75">{label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white/60 shadow-xl">
            <Image
              src="/hero-isometric-removebg-preview.png"
              width={680}
              height={680}
              alt="Dashboard showing AI automation insights for a small business"
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

