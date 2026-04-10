import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mcwebsolutions.dev"),
  title: "M&C Web Solutions | Tu web profesional en 48 horas",
  description: "Creamos tu página web en Valencia desde 199€. Diseño moderno, optimizada para Google y lista en 48 horas. ¡Impulsa tu negocio hoy mismo!",
  openGraph: {
    title: "M&C Web Solutions | Tu web profesional en 48 horas",
    description: "Creamos tu página web en Valencia desde 199€. Diseño moderno, optimizada para Google y lista en 48 horas. ¡Impulsa tu negocio hoy mismo!",
    url: "https://mcwebsolutions.dev",
    siteName: "M&C Web Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M&C Web Solutions - Diseño Web Profesional",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&C Web Solutions | Tu web profesional en 48 horas",
    description: "Creamos tu página web en Valencia desde 199€. Diseño moderno, optimizada para Google y lista en 48 horas. ¡Impulsa tu negocio hoy mismo!",
    images: ["/og-image.png"],
  },
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
