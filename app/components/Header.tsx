import Image from "next/image";
import Link from "next/link";

import { buttonVariants, Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#problems", label: "Why Teams Call Us" },
  { href: "/#process", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
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
        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link
            href="https://cal.com/kyle-shechtman-7ydquo/15min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Strategy Call
          </Link>
        </Button>
      </div>
    </header>
  );
}
