import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Buddies Solutions",
  url: "https://databuddiessolutions.com",
  logo: "https://databuddiessolutions.com/favicon.svg",
  description:
    "Data Buddies Solutions builds AI automation for small and midsize businesses, delivering workflow orchestration, intelligent agents, and analytics.",
  email: "databuddiessolutions@gmail.com",
  sameAs: ["https://www.linkedin.com/company/data-buddies-solutions"],
  serviceType: [
    "AI automation consulting",
    "Workflow automation",
    "AI agent development",
    "Customer success automation",
    "Data analytics automation",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  offers: {
    "@type": "Service",
    name: "AI automation blueprint",
    description:
      "Assessment, roadmap, and implementation plan for AI automation initiatives tailored to small business workflows.",
    priceRange: "$$",
    url: "https://databuddiessolutions.com",
  },
  founder: {
    "@type": "Person",
    name: "Data Buddies Team",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://databuddiessolutions.com"),
  title: {
    default: "AI Automation for Small Businesses | Data Buddies Solutions",
    template: "%s | Data Buddies Solutions",
  },
  description:
    "Data Buddies Solutions designs, builds, and maintains AI automations for small businesses. Launch AI agents for lead follow-up, customer success, analytics, and back-office workflows within weeks.",
  keywords: [
    "AI automation for small business",
    "business process automation services",
    "AI agent development",
    "workflow automation",
    "AI customer success copilot",
    "affordable AI automation",
    "hire AI automation consultant",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  authors: [{ name: "Data Buddies Solutions" }],
  creator: "Data Buddies Solutions",
  publisher: "Data Buddies Solutions",
  category: "Automation Services",
  alternates: {
    canonical: "https://databuddiessolutions.com/",
    languages: {
      "en-US": "https://databuddiessolutions.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://databuddiessolutions.com/",
    title: "AI Automation for Small Businesses | Data Buddies Solutions",
    description:
      "Partner with Data Buddies Solutions to deploy AI agents, automate workflows, and launch analytics copilots tailored to your business.",
    siteName: "Data Buddies Solutions",
    images: [
      {
        url: "/hero-isometric-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "AI automation dashboard for small businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Small Businesses",
    description:
      "Workflow automation and AI agents that help small businesses scale without adding headcount.",
    images: ["/hero-isometric-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}

