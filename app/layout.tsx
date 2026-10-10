import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OpeningCurtain } from "../components/ui/OpeningCurtain";

export const viewport: Viewport = {
  themeColor: "#0E0D0C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LuckyGlamours — Haute Beauté & Aesthetic Atelier",
  description:
    "An original, ultra-luxury digital brand experience for LuckyGlamours. Haute couture bridal, red carpet aesthetic sculpting, and biological dermal luminescence.",
  keywords: [
    "haute beautician",
    "luxury beauty studio",
    "couture bridal makeup",
    "editorial makeup artist",
    "LuckyGlamours",
    "brow architecture",
    "glass skin treatment",
  ],
  openGraph: {
    title: "LuckyGlamours — Haute Beauté & Aesthetic Atelier",
    description:
      "Where artistry, precision and individuality converge. Discover the transformative world of LuckyGlamours.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-canvas-light text-noir font-sans antialiased selection:bg-noir selection:text-canvas-light relative min-h-screen">
        <div className="pointer-events-none fixed inset-0 z-40 editorial-grain opacity-40" />
        <OpeningCurtain />
        {children}
      </body>
    </html>
  );
}
