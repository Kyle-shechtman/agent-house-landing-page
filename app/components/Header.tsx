"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { buttonVariants, Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#problems", label: "Why Teams Call Us" },
  { href: "/#process", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Data Buddies Solutions home">
          <Image
            src="/favicon.png"
            alt="Data Buddies Solutions logo"
            width={112}
            height={112}
            className="h-24 w-24 origin-left scale-110 object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "rounded-full px-5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link
              href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Strategy Call
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm md:hidden"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
          >
            {isMobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMobileNavOpen ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-full max-w-screen-sm flex-col justify-between px-6 py-8">
              <nav className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }),
                      "w-full justify-start rounded-2xl bg-white/80 px-5 text-base font-semibold text-foreground shadow-sm transition hover:bg-white"
                    )}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-2xl text-base"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Link
                    href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Strategy Call
                  </Link>
                </Button>
              </nav>
              <p className="text-xs text-foreground/60">
                Your business buddy that never sleeps. We keep the busywork handled so you can stay focused on growth.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
