import type { Metadata } from "next";
import { Instrument_Sans, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

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
      <body
        className={twMerge(
          instrumentSans.variable,
          playfair.variable,
          plexMono.variable,
          "bg-ink text-cream antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
