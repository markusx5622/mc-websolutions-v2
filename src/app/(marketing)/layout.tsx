import Navbar from "@/components/Navbar";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid-background" aria-hidden="true" />
      <Navbar />
      {children}
    </>
  );
}
