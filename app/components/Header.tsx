"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { buttonVariants, Button } from "./ui/button";
import { cn } from "@/lib/utils";
import BookCallButton from "./BookCallButton";

const navLinks = [
  { href: "/#problems", label: "Why Teams Call Us" },
  { href: "/#process", label: "How It Works" },
  { href: "/about", label: "About Us" },
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
            src="/logono.png"
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
          <BookCallButton
            size="sm"
            iconVariant="none"
            className="hidden md:inline-flex"
          >
            Book a Strategy Call
          </BookCallButton>
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
          <div
            className="fixed inset-0 z-40 bg-white"
            onClick={() => setMobileNavOpen(false)}
          >
            <div
              className="mx-auto flex min-h-full w-full max-w-screen-sm flex-col gap-6 bg-white px-6 py-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setMobileNavOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-10 w-10 rounded-full border border-border bg-white text-foreground shadow-sm"
                  )}
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }),
                      "w-full justify-start rounded-2xl bg-neutral-50 px-5 text-base font-semibold text-foreground shadow-sm transition hover:bg-white"
                    )}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <BookCallButton
                  size="lg"
                  iconVariant="none"
                  className="w-full rounded-2xl text-base"
                >
                  Book a Strategy Call
                </BookCallButton>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
