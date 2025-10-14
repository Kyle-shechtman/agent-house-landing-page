import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#problems", label: "Why Teams Call Us" },
  { href: "#process", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-base font-bold text-white">
            DB
          </span>
          <span className="hidden sm:inline-flex">Data Buddies Solutions</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
