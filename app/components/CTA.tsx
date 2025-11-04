import Link from "next/link";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SITE_CONFIG } from "@/lib/config";
import BookCallButton from "./BookCallButton";

export default function CTA() {
  return (
    <section className="section bg-gradient-to-br from-accent/15 via-background to-background">
      <div className="mx-auto max-w-screen-xl rounded-3xl border border-border bg-white/80 px-6 py-16 shadow-xl backdrop-blur sm:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Badge className="w-fit">Ready to automate?</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Start your AI automation roadmap with a tailored blueprint.
          </h2>
          <p className="text-base text-foreground/70 md:text-lg">
            We'll map quick wins, review your data, and build a clear roadmap. You'll get a prioritized plan and ROI model within one week.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BookCallButton />
            <Button asChild variant="secondary" size="lg">
              <Link href={`mailto:${SITE_CONFIG.email}`}>Email our team</Link>
            </Button>
          </div>
          <p className="text-sm text-foreground/60">
            Prefer async? We’ll record a walkthrough with personalized automation
            ideas after reviewing your intake form.
          </p>
        </div>
      </div>
    </section>
  );
}
