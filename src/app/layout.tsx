import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M&C Web Solutions | Architecting the Digital Future",
  description: "High-end engineering and digital solutions for the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased`}>
      <body className="bg-background text-foreground min-h-screen selection:bg-cyan-500/30">
        <div className="grid-background" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
