import Link from "next/link";
import type { SVGProps } from "react";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Data Buddies Solutions</h3>
          <p className="text-sm leading-relaxed text-foreground/70">
            Your always-on business buddy that clears repetitive work and keeps operations humming.
            We blend automation engineering, AI expertise, and change management so you can focus on growth.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-foreground/70">
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <Link href="mailto:databuddiessolutions@gmail.com" className="mt-1 inline-flex items-center gap-2 text-accent">
              databuddiessolutions@gmail.com
            </Link>
            <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
              Response time &lt; 24 hours
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/data-buddies-solutions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Data Buddies Solutions on LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-foreground/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Data Buddies Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#top" className="hover:text-accent">
              Back to top
            </Link>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
