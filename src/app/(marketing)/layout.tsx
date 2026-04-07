import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid-background" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
