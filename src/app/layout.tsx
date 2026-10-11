import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

// Basic-latin files used above the fold; latin-ext loads on demand
const PRELOAD_FONTS = [
  "/fonts/instrument-sans-400-700-latin.woff2",
  "/fonts/playfair-display-400-500-latin.woff2",
  "/fonts/ibm-plex-mono-400-latin.woff2",
];

const siteUrl = "https://www.jacekkozlowski.com";
const siteTitle = "Jacek Kozłowski Portfolio";
const siteDescription =
  "AI engineer and fullstack developer - machine learning, deep learning, NLP and vector search, grounded in real-world product engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {PRELOAD_FONTS.map((href) => (
          <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        {/* Reveal animations are JS-driven, so keep content visible without it */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="bg-ink text-cream antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
