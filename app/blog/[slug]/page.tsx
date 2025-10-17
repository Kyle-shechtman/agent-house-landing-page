import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from "lucide-react";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

import { getPostBySlug, posts } from "../posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `https://databuddiessolutions.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Data Buddies Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Data Buddies Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://databuddiessolutions.com/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://databuddiessolutions.com/blog/${post.slug}`,
    },
  };

  return (
    <article className="section bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 sm:px-6 lg:px-0">
        <div className="space-y-6">
          <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit">
            <Link href="/blog">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to blog
            </Link>
          </Button>
          <div className="space-y-4">
            <Badge className="w-fit">{formattedDate}</Badge>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="text-base text-foreground/70 md:text-lg">{post.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" aria-hidden />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readingTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-foreground/50">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Separator className="bg-border/70" />
        <div className="space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 border-l-2 border-accent/50 pl-4 text-sm text-foreground/75">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <Card className="border-accent/30 bg-accent/10">
          <CardContent className="space-y-4 p-6">
            <h3 className="text-xl font-semibold text-accent">
              Key takeaway
            </h3>
            <p className="text-base text-foreground/80">{post.takeaway}</p>
            <Button asChild size="lg" className="w-fit bg-accent text-white hover:bg-accent-hover">
              <Link
                href="https://cal.com/data-buddies-solutions/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a strategy session
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </article>
  );
}
