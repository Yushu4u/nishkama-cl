import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: "Nishkama CodeLab | Quality Advocates for Your Product",
    template: "%s | Nishkama CodeLab",
  },
  description: siteConfig.description,
  keywords: [
    "QA services",
    "software testing services",
    "QA testing company",
    "software QA partner",
    "exploratory testing",
    "regression testing",
    "product QA",
    "quality audit",
    "independent QA",
    "product quality testing",
    "Quality Advocacy",
  ],
  authors: [{ name: "Nishkama CodeLab" }],
  creator: "Nishkama CodeLab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "Nishkama CodeLab | Quality Advocates for Your Product",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishkama CodeLab | Quality Advocates for Your Product",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#FAF8F5] text-[#282531]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
