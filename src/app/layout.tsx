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
  title: "Pro-Tech Sales & Service | 99.99% Water Purity & Industrial Uptime",
  description: "North West Ontario’s premier authority on water and power solutions. Largest stocking supplier of Canadian-made pumps and electric motors. Authorized Excalibur, Pompco, and Leeson dealer.",
  keywords: [
    "Industrial air compressor repair Thunder Bay", 
    "Authorized Pompco dealer ON", 
    "Electric motor repair shop Thunder Bay",
    "Water filtration Thunder Bay",
    "UV water treatment systems North West Ontario",
    "Sewage pump installation",
    "Water softener repair 807"
  ],
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
