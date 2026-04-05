import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Aura Wellness & Spa — Experiencia Premium en Valencia",
  description: "Centro de bienestar premium en Valencia. Masajes terapéuticos, tratamientos faciales y rituales de spa con productos naturales de alta gama.",
};

export default function DemoPremiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
