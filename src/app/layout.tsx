import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E2539",
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
    "functional testing",
    "exploratory testing",
    "regression testing",
    "compatibility QA",
    "usability testing",
    "product QA",
    "quality audit",
    "independent QA",
    "Quality Advocacy",
  ],
  authors: [{ name: "Nishkama CodeLab" }],
  creator: "Nishkama CodeLab",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: siteConfig.brand.assets.iconSquare, sizes: "1024x1024", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    title: "Nishkama CodeLab | Quality Advocates for Your Product",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.brand.assets.logoBanner,
        width: 1024,
        height: 320,
        alt: "Nishkama CodeLab — Quality Advocates for Your Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishkama CodeLab | Quality Advocates for Your Product",
    description: siteConfig.description,
    images: [siteConfig.brand.assets.logoBanner],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-[#0E2539]">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
