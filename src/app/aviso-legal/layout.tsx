import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AvisoLegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={spaceGrotesk.variable}
      style={{
        background: "#0A192F",
        minHeight: "100vh",
        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
        color: "#c5c8ce",
      }}
    >
      <Navbar />
      <main style={{ paddingTop: "100px", position: "relative", zIndex: 10 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
