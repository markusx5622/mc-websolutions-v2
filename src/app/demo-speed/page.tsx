"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Plus,
  Minus,
  BarChart3,
  Clock,
  Layout,
  Play
} from 'lucide-react';

// --- Types ---
interface PlanProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00D1FF] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <Zap className="text-black fill-current" size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">Velocis</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Tecnología', 'Impacto', 'Testimonios', 'Precios'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#00D1FF] transition-colors">{item}</a>
          ))}
          <Link href="#contact" className="px-5 py-2 bg-[#00D1FF] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all">Empezar</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {['Tecnología', 'Impacto', 'Testimonios', 'Precios'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-white/70" onClick={() => setMobileMenuOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#00D1FF]/30 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center mb-6 text-[#00D1FF]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-sm text-white/50 leading-relaxed">{description}</p>
  </motion.div>
);

const PricingPlan = ({ name, price, features, recommended }: PlanProps) => (
  <div className={`p-8 rounded-3xl border ${recommended ? 'border-[#00D1FF] bg-[#00D1FF]/5' : 'border-white/5 bg-white/[0.02]'} flex flex-col items-start relative`}>
    {recommended && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00D1FF] text-black text-[10px] font-black uppercase tracking-widest rounded-full">Recomendado</span>
    )}
    <h4 className="text-xs font-bold uppercase tracking-[4px] text-[#00D1FF] mb-4">{name}</h4>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-black text-white">{price}</span>
      <span className="text-sm text-white/40">/mes</span>
    </div>
    <div className="flex flex-col gap-4 mb-10 w-full">
      {features.map((f, i) => (
        <div key={i} className="flex gap-3 text-sm text-white/70">
          <CheckCircle2 size={16} className="text-[#00D1FF] shrink-0" />
          <span>{f}</span>
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${recommended ? 'bg-[#00D1FF] text-black hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]' : 'bg-white/5 text-white hover:bg-white/10'}`}>
      Seleccionar Plan
    </button>
  </div>
);

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-6">
      <button 
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-white">{title}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#00D1FF]' : 'text-white/40'}`}>
          <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-white/50 text-sm leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Page Main ---

export default function VelocisPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('speed');

  return (
    <div className="bg-[#050505] text-[#E0E0E0] selection:bg-[#00D1FF] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Abstract BG */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#00D1FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-[#00D1FF]/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00FF94]">Infrastructure version 4.2.0 deployed</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]"
            >
              Carga al Instante.<br />
              <span className="text-[#00D1FF] italic">Venta Directa.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
            >
              Velocis es la infraestructura de optimización definitiva. Reducimos el tiempo de carga de 3.5s a 0.8s, eliminando la fricción y maximizando el ROI de tu tráfico.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#contact" className="px-10 py-5 bg-[#00D1FF] text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,209,255,0.2)]">
                Optimizar mi web
              </Link>
              <a href="#tecnologia" className="px-10 py-5 bg-white/5 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                Ver tecnología
              </a>
            </motion.div>
          </div>

          {/* Hero Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black relative z-0">
               <Image 
                src="/demos/velocis-hero.png" 
                alt="Velocis Dashboard" 
                width={1200} 
                height={800} 
                className="w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Float Stats overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 md:right-10 p-6 bg-[#111] border border-[#00FF94]/30 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full border-4 border-[#00FF94] flex items-center justify-center text-[#00FF94] font-black text-xs">99</div>
                <div className="text-left">
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Lighthouse</div>
                  <div className="text-white font-bold">Performance</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Logo Bar */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <p className="text-[10px] text-center uppercase tracking-[5px] text-white/30 font-bold mb-12">Infraestructura probada en</p>
            <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-30 grayscale items-center">
              {['TECH_CORE', 'VALENCIA_LUXE', 'HEALTH_SYNC', 'B2B_CONNECT', 'ESTATE_GO'].map((l) => (
                <span key={l} className="text-lg font-black italic tracking-tighter">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Section */}
      <section id="tecnologia" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[6px] text-[#00D1FF] mb-4">Ingeniería de Flujo</h2>
            <p className="text-4xl font-bold text-white tracking-tight leading-tight">La velocidad no es solo un número, es una estrategia de retención.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Globe size={24} />} 
              title="Global Edge" 
              description="Despliegue automático en 64 regiones con latencia sub-20ms mediante nuestro motor de replicación inteligente."
            />
            <FeatureCard 
              icon={<Cpu size={24} />} 
              title="Image Crush" 
              description="Procesamiento en tiempo real que reduce el peso de los assets en un 90% sin pérdida perceptible de calidad."
            />
            <FeatureCard 
              icon={<Shield size={24} />} 
              title="Smart Cache" 
              description="Algoritmos de precarga predictivos que anticipan el movimiento del usuario, cargando contenido antes del click."
            />
            <FeatureCard 
              icon={<Zap size={24} />} 
              title="Core Clean" 
              description="Reducción drástica del JavaScript bloqueante para alcanzar tiempos de CPU Interactiva inigualables."
            />
          </div>
        </div>
      </section>

      {/* Comparison Slider Section */}
      <section id="impacto" className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
             <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Menos rebote,<br />más rentabilidad.</h2>
                <div className="space-y-8">
                   <div className="flex gap-4">
                      <div className="w-1.5 h-12 bg-[#00FF94] rounded-full" />
                      <div>
                        <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Impacto Directo</div>
                        <p className="text-lg text-white/80 font-medium">Un aumento del 40% en conversiones al reducir solo 0.5s en dispositivos móviles.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-1.5 h-12 bg-[#00D1FF] rounded-full" />
                      <div>
                        <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">SEO Boost</div>
                        <p className="text-lg text-white/80 font-medium">Mejora inmediata en los rankings de búsqueda al superar todos los Core Web Vitals.</p>
                      </div>
                   </div>
                </div>
                <div className="mt-12 flex gap-4">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex-1">
                      <div className="text-3xl font-black text-white mb-1">0.6s</div>
                      <div className="text-[10px] uppercase text-white/40 tracking-wider">FCP Promedio</div>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex-1">
                      <div className="text-3xl font-black text-[#00FF94] mb-1">100%</div>
                      <div className="text-[10px] uppercase text-white/40 tracking-wider">Uptime Garantizado</div>
                   </div>
                </div>
             </div>
             
             {/* Simple Comparison Grid instead of manual slider for professional look */}
             <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[400px]">
                <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden flex flex-col p-6 items-center justify-center text-center gap-4 relative">
                   <div className="absolute top-4 left-4 text-[10px] font-bold text-white/20 tracking-tighter uppercase">Web Estándar</div>
                   <Clock className="text-white/10" size={64} />
                   <div className="text-3xl font-black text-rose-500 opacity-50">3.8s</div>
                   <p className="text-xs text-white/30 uppercase tracking-widest">Pérdida de usuarios crítica</p>
                </div>
                <div className="bg-[#00D1FF]/5 rounded-2xl border border-[#00D1FF]/30 overflow-hidden flex flex-col p-6 items-center justify-center text-center gap-4 relative">
                   <div className="absolute top-4 left-4 text-[10px] font-bold text-[#00D1FF] tracking-tighter uppercase">Velocis Infra</div>
                   <Zap className="text-[#00D1FF]" size={64} fill="currentColor" />
                   <div className="text-4xl font-black text-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.4)]">0.7s</div>
                   <p className="text-xs text-[#00D1FF] uppercase tracking-widest font-black">Satisfacción Instantánea</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[8px] text-[#00D1FF] mb-20">Voces de Autoridad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "Velocis no solo mejoró nuestra carga, redujo nuestro gasto en servidor a la mitad. Es una herramienta de ingeniería pura.", 
                author: "M. Rodríguez", 
                role: "CTO @ TechFlow",
                sector: "Sinergia Tecnológica"
              },
              { 
                text: "La experiencia de compra ahora es instantánea. Nuestras ventas en móvil han subido un 28% en el primer mes de integración.", 
                author: "Elena Sanz", 
                role: "Marketing Director @ LuxeWear",
                sector: "E-Commerce Premium"
              },
              { 
                text: "Habíamos probado todo para mejorar el SEO. Velocis fue el único que nos puso en verde en todos los indicadores.", 
                author: "Dr. Roberto Gil", 
                role: "Founder @ HealthSync",
                sector: "Salud Digital"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-left relative h-full flex flex-col">
                <span className="text-4xl text-[#00D1FF] font-black absolute top-5 right-8 opacity-20">"</span>
                <p className="text-lg text-white/80 leading-relaxed italic mb-8 flex-1">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{t.role}</div>
                  <div className="mt-4 px-3 py-1 bg-[#00D1FF]/10 text-[#00D1FF] text-[9px] font-black inline-block rounded-md tracking-widest uppercase">{t.sector}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Escalabilidad Garantizada</h2>
            <p className="text-white/50 max-w-xl mx-auto">Selecciona el plan que mejor se adapte a tu volumen de tráfico y necesidades técnicas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPlan 
              name="Starter"
              price="49€"
              features={['Hasta 50k visitas/mes', 'Optimización Automática', 'CDN Global (Basic)', 'Soporte vía Ticket']}
            />
            <PricingPlan 
              recommended
              name="Professional"
              price="149€"
              features={['Hasta 500k visitas/mes', 'Prioridad de CPU en Edge', 'Compresión Multi-formato', 'A/B Testing Integrado', 'Soporte 24/7']}
            />
            <PricingPlan 
              name="Enterprise"
              price="Custom"
              features={['Tráfico Ilimitado', 'Multicloud Infrastructure', 'Ingeniero Dedicado', 'SLA 99.99%', 'Auditoría Mensual']}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-center text-4xl font-bold text-white mb-20">Consultas Comunes</h2>
          <div className="flex flex-col">
            <AccordionItem 
              title="¿Cuánto tiempo tarda la integración?" 
              content="En la mayoría de los casos, la configuración inicial toma menos de 48 horas. Una vez activado, los resultados de rendimiento son visibles de forma inmediata en herramientas como PageSpeed Insights." 
            />
            <AccordionItem 
              title="¿Es compatible con mi plataforma actual?" 
              content="Velocis es agnóstico a la tecnología de origen. Funciona a nivel de infraestructura, por lo que es compatible con WordPress, Next.js, Shopify, Laravel y desarrollos a medida." 
            />
            <AccordionItem 
              title="¿Cómo afecta esto a mi SEO?" 
              content="Google utiliza la velocidad de carga (Core Web Vitals) como un factor de ranking directo. Velocis asegura que tu web cumpla con todos los requisitos técnicos para maximizar tu visibilidad orgánica." 
            />
            <AccordionItem 
              title="¿Hay compromiso de permanencia?" 
              content="Nuestros planes estándar son mensuales y puedes cancelarlos en cualquier momento sin penalización. Creemos en la fidelización a través de resultados técnicos excepcionales." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA Contact */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00D1FF] opacity-5 saturate-[0.5] mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">¿Hablamos de Rendimiento?</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setShowSuccess(true); }}>
              <input type="email" placeholder="email@compañia.com" required className="w-full px-6 py-5 bg-black/40 border border-white/10 rounded-2xl text-white focus:border-[#00D1FF] outline-none transition-all placeholder:text-white/20" />
              <button type="submit" className="w-full py-5 bg-[#00D1FF] text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-all">
                Reserva Análisis Gratuito
              </button>
            </form>
            <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">Recibe un reporte de performance completo en 24h</p>
          </div>
        </div>
      </section>

      {/* Bottom Return To Agency */}
      <div className="py-20 text-center border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity">
        <Link href="/#portfolio" className="text-white/40 hover:text-[#00D1FF] flex items-center justify-center gap-2 group text-sm font-bold tracking-widest uppercase">
          <ArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" size={16} />
          Volver a Portfolio Principal
        </Link>
      </div>

      <footer className="py-12 text-center text-[10px] font-bold uppercase tracking-[4px] text-white/20">
        <div className="container mx-auto px-6">
          <p>© 2026 Velocis Performance. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full"
            >
              <div className="w-20 h-20 bg-[#00FF94]/10 rounded-3xl flex items-center justify-center text-[#00FF94] mx-auto mb-8 mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl font-black text-white mb-4 leading-tight italic">Análisis en Proceso.</h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed mb-10">
                Hemos recibido tu solicitud. Uno de nuestros ingenieros de rendimiento revisará tu infraestructura y contactará contigo en menos de 24 horas.
              </p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl"
              >
                Cerrar Notificación
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
