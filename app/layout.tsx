import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Dev | Hani Zahran",
  description: "Next Generation Web Development & Design built with precision.",
  metadataBase: new URL("https://aura-dev.net"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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