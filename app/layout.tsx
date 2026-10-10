import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OpeningCurtain } from "../components/ui/OpeningCurtain";

export const viewport: Viewport = {
  themeColor: "#F7F3EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lucky Glamours — Haute Botanical Skincare & Artisan Oils",
  description:
    "Handcrafted small-batch cold-process soaps and slow-infused botanical hair and body oils. Made with cold-pressed plant oils, unrefined shea butter, and natural herbs.",
  keywords: [
    "handmade soap",
    "cold process soap",
    "botanical skincare",
    "hair oil",
    "body oil",
    "Lucky Glamours",
    "artisan soap bar",
    "natural skincare India",
  ],
  openGraph: {
    title: "Lucky Glamours — Haute Botanical Skincare & Artisan Oils",
    description:
      "Discover handmade soaps and thoughtfully crafted oils for your everyday self-care rituals.",
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
      <body className="bg-ivory text-charcoal font-sans antialiased selection:bg-olive selection:text-ivory relative min-h-screen">
        <OpeningCurtain />
        {children}
      </body>
    </html>
  );
}
