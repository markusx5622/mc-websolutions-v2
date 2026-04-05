import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M&C Web Solutions | Tu web profesional en 48 horas",
  description: "Creamos páginas web profesionales para tu negocio en 48 horas desde 299€. Diseño moderno, precio cerrado, sin complicaciones. Valencia, España.",
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
