import type { Metadata } from "next";

import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const team = [
  {
    name: "Kyle Shechtman",
    role: "CEO",
    initials: "KS",
    bio: "Hi, I'm Kyle, the CEO of Data Buddies. I love talking with business owners, learning what slows them down, and building better ways to get things done. I track new technology closely and enjoy turning big ideas into something real alongside the team. For me, work should feel less complicated and more meaningful, whether that means sharper systems, smarter tools, or a fresh perspective. When I'm away from the laptop, you'll find me outside hiking, playing sports, exploring new places, and staying curious about what's next.",
    twitter: "_kyleshechtman",
  },
  {
    name: "Chase Fagen",
    role: "CTO",
    initials: "CF",
    bio: "I'm a lifelong learner and adventurer, fascinated by how ideas move from circuits and code to things that actually make a difference in people's lives. I love all sports and competition, from snowboarding to soccer to padel, I have tried it all. I see movement in sport the same way I see it in business: it's about flow, timing, and adaptability. That same competitive spirit drives me to find better ways for small businesses to win, because when their tools move with them instead of against them, that's a victory we share.",
    twitter: "chasef07",
  },
];

const philosophy = [
  {
    title: "Ship, learn, iterate",
    description:
      "We launch quickly, listen closely, and polish the experience so wins keep stacking up.",
  },
  {
    title: "Build for business impact",
    description:
      "We only build when the outcome is clear: more revenue, fewer hours, or smoother scale, so every automation pulls its weight.",
  },
  {
    title: "Keep it effortless",
    description:
      "We involve the people doing the work so every automation stays simple, seamless, and clearly on your side.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Data Buddies Solutions, the AI automation team behind workflow blueprints, agent orchestration, and continuous optimization for growing businesses.",
  alternates: {
    canonical: "https://databuddiessolutions.com/about",
  },
};

export default function AboutPage() {
  return (
    <section className="section bg-muted/40">
      <div className="mx-auto max-w-screen-xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
          <Badge variant="outline" className="w-fit uppercase">
            About Us
          </Badge>
          <h1 className="text-3xl font-semibold md:text-4xl">
            We left big tech so small businesses can own the AI era.
          </h1>
          <p className="text-base text-foreground/70 md:text-lg">
            Data Buddies helps lean teams boost revenue, clear bottlenecks, and win back time with AI that feels simple,
            useful, and human.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl border border-border/60 bg-white/95 p-10 shadow-sm">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Meet the team</h2>
            <p className="text-base text-foreground/75">
              We started Data Buddies after years inside fast-moving teams. We know the grind of manual work, and we build
              automations that feel supportive, not stressful.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {team.map(({ name, role, initials, bio, twitter }) => (
              <Card key={name} className="border border-border/60 bg-neutral-50/90 shadow-sm">
                <CardContent className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-border/70 bg-white text-lg font-semibold text-foreground/60">
                      {initials}
                    </div>
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{name}</h3>
                      <p className="text-sm font-medium uppercase tracking-wide text-foreground/60">{role}</p>
                      {twitter && (
                        <a
                          href={`https://x.com/${twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-sm text-blue-600 hover:underline"
                        >
                          @{twitter}
                        </a>
                      )}
                    </div>
                    <p className="text-base leading-relaxed text-foreground/75">{bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8 rounded-3xl border border-border/60 bg-white/95 p-10 shadow-sm">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Our philosophy</h2>
            <p className="text-base text-foreground/75">
              These principles keep every automation grounded in business impact and human adoption even as tools change
              and your priorities evolve.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {philosophy.map(({ title, description }) => (
              <Card key={title} className="border border-border/60 bg-white/95 text-left shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-foreground/70">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
