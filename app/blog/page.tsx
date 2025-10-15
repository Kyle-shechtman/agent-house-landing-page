import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Automation Insights & Playbooks",
  description:
    "Deep dives, frameworks, and checklists for building AI automations that help small businesses scale.",
};

export default function BlogPage() {
  return (
    <div className="section bg-muted/20">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <Badge className="w-fit mx-auto">Automation insights</Badge>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Playbooks for launching AI automations that move the needle.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 md:text-lg">
            Every article is built from real implementation experience, covering
            tooling, governance, prompts, and adoption strategies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(({ slug, title, description, readingTime, date, tags }) => (
            <Card key={slug} className="flex h-full flex-col bg-white">
              <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4 text-sm text-foreground/70">
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-foreground/50">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {readingTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="secondary" className="mt-3 w-full">
                  <Link href={`/blog/${slug}`}>
                    Read article
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-foreground/60">
          Looking for something specific? Email{" "}
          <Link href="mailto:databuddiessolutions@gmail.com" className="text-accent hover:text-accent-hover">
            databuddiessolutions@gmail.com
          </Link>{" "}
          with your topic request.
        </p>
      </div>
    </div>
  );
}
