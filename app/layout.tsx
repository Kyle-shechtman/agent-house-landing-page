import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: "Data Buddies Solutions - Your Business Buddy That Never Sleeps",
  description: "We build AI agents that handle your workflows so you can focus on what matters. Get insights from your data, automate scheduling, and handle admin tasks.",
  keywords: ["AI agents", "business automation", "data insights", "workflow automation", "small business AI"],
  authors: [{ name: "Data Buddies Solutions" }],
  creator: "Data Buddies Solutions",
  publisher: "Data Buddies Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://databuddiessolutions.com",
    title: "Data Buddies Solutions - Your Business Buddy That Never Sleeps",
    description: "We build AI agents that handle your workflows so you can focus on what matters",
    siteName: "Data Buddies Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Buddies Solutions - Your Business Buddy That Never Sleeps",
    description: "We build AI agents that handle your workflows so you can focus on what matters",
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
