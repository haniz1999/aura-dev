import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Dev | Engineering Digital Excellence",
  description: "High-performance web applications and mobile experiences where clean code meets exceptional design. Now accepting new clients for 2026.",
  metadataBase: new URL("https://aura-dev.net"),
  keywords: ["Web Development", "UI/UX Design", "AI Solutions", "Next.js Developer", "Hani Zahran"],
  authors: [{ name: "Hani Zahran" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Aura Dev | Engineering Digital Excellence",
    description: "We build the future of digital experiences. Let’s build your vision.",
    url: "https://aura-dev.net",
    siteName: "Aura Dev",
    images: [
      {
        url: "/aura-banner2.png", // Uses your project banner as the preview image
        width: 1200,
        height: 630,
        alt: "Aura Dev Digital Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Dev | Hani Zahran",
    description: "Next Generation Web Development & Design built with precision.",
    images: ["/aura-banner2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}