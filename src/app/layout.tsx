import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LocalSchema from "@/components/ui/LocalSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro-Tech Sales & Service | Water Pumps & Electric Motors Thunder Bay",
  description: "Northwestern Ontario's largest stocking supplier of water pumps, electric motors, and purification systems. Commercial, Industrial, and Residential sales, service, and installation.",
  keywords: ["water pumps Thunder Bay", "electric motor repair", "water purification Ontario", "industrial pump installation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <LocalSchema />
        {children}
      </body>
    </html>
  );
}
