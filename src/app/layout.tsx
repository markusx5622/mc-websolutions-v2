import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "M&C Web Solutions",
    template: "%s | M&C Web Solutions",
  },
  description: "Diseño y desarrollo web profesional en 48 horas con IA avanzada. Ingeniería digital premium en Valencia, España.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} dark antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
