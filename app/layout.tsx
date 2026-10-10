import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OpeningCurtain } from "../components/ui/OpeningCurtain";

export const viewport: Viewport = {
  themeColor: "#F7F3EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lucky Glamours — Beauty Artistry, Bridal, Academy & Botanical Skincare",
  description:
    "Professional makeup artistry, bridal & groom styling, beauty skill training courses, and handcrafted small-batch soaps & oils. All inquiries & orders fulfilled via WhatsApp.",
  keywords: [
    "bridal makeup",
    "groom makeup",
    "engagement makeup",
    "beauty academy",
    "makeup courses",
    "brow shaping course",
    "handmade soap",
    "hair oil",
    "Lucky Glamours",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.png",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Lucky Glamours — Beauty Artistry, Bridal, Academy & Botanical Skincare",
    description:
      "Your beauty, beautifully expressed. From bridal and occasion makeup to professional beauty training and handmade botanical soaps and oils.",
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
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
