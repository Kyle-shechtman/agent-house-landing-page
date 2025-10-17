import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="section" id="top">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem]">
              Your <span className="text-accent">Business Buddy</span> That Never Sleeps
            </h1>
            <p className="text-lg text-foreground/75 md:text-xl">
              Your AI buddy clears repetitive tasks so you can focus on the work that grows profit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link
                href="https://cal.com/data-buddies-solutions/30min"
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
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />
          <Image
            src="/hero-isometric-removebg-preview.png"
            width={680}
            height={680}
            alt="Dashboard showing AI automation insights for a small business"
            priority
            className="relative rounded-3xl object-cover opacity-95 mix-blend-multiply"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
