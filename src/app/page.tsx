"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import DNAHexagon from '@/components/DNAHexagon';
import MethodologyPipeline from '@/components/MethodologyPipeline';
import DemoEcosystem from '@/components/DemoEcosystem';
import PricingArchitecture from '@/components/PricingArchitecture';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import { GraduationCap, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="flex flex-col w-full bg-background selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Background Interactive Blob */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-cyan-500/5 pointer-events-none z-0"
      />

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Beca UEV Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md mb-8"
          >
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Beca UEV Activa: -20% Descuento</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8"
          >
            TU IDEA + NUESTRA IA = <br />
            <span className="text-gradient">TU WEB MAÑANA.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12"
          >
            Convertimos tus ideas en presencia digital profesional en 48 horas utilizando Inteligencia Artificial avanzada. 
            Soluciones rápidas, estéticas y ultra-asequibles.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="px-10 py-5 rounded-full bg-cyan-500 text-background font-black uppercase tracking-widest text-xs hover:shadow-[0_0_40px_rgba(100,255,218,0.4)] transition-all hover:scale-105 active:scale-95">
              Empieza Mi Proyecto
            </button>
            <button className="px-10 py-5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all active:scale-95">
              Explorar Demos
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
          <div className="w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent" />
        </div>
      </main>

      {/* DNA Section */}
      <section id="dna" className="relative z-10 py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">01 // Engineering DNA</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">El Diseño es <span className="text-muted">Ingeniería.</span></h2>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              Nuestro logo no es solo una forma; es la estructura de nuestra eficiencia. 
              Cada vértice representa un pilar crítico de la optimización digital que desplegamos en cada proyecto.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-cyan-400 font-bold text-2xl">48h</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Tiempo de Entrega</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-cyan-400 font-bold text-2xl">0€</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Mantenimiento</span>
              </div>
            </div>
          </div>
          <DNAHexagon />
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="relative z-10 py-24 md:py-32 bg-white/[0.02]">
        <div className="container max-w-7xl mx-auto px-6 text-center mb-20">
          <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">02 // Industrial Process</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Metodología de <span className="text-muted">Alta Precisión</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Hemos industrializado el diseño web. Pasamos del briefing al despliegue en un pipeline optimizado que garantiza resultados profesionales a una velocidad imposible.
          </p>
        </div>
        <MethodologyPipeline />
      </section>

      {/* Demo Ecosystem */}
      <section id="demos" className="relative z-10 py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-6 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">03 // Demo Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Capacidades <span className="text-muted">Desplegadas.</span></h2>
              <p className="text-muted text-lg">Explora cómo nuestra ingeniería se adapta a diferentes necesidades de mercado.</p>
            </div>
            <button className="flex items-center gap-3 text-cyan-400 font-black uppercase tracking-widest text-xs hover:translate-x-2 transition-transform">
              Ver Todas <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <DemoEcosystem />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 md:py-32 bg-white/[0.02]">
        <div className="container max-w-7xl mx-auto px-6 text-center mb-20">
          <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">04 // Transparencia Total</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Precios Sin <span className="text-muted">Sorpresas.</span></h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Ingeniería de organización aplicada a la logística de precios. Máximo valor con el mínimo desperdicio de recursos.
          </p>
        </div>
        <PricingArchitecture />
      </section>

      {/* Command Center */}
      <section id="contact" className="relative z-10 py-24 md:py-32 overflow-hidden">
        {/* Decorative Grid Over Command Center */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <span className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">05 // Command Center</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Inicia la <span className="text-muted">Operación.</span></h2>
            <p className="text-muted text-lg leading-relaxed mb-12 max-w-md">
              No pierdas tiempo con agencias tradicionales. Nuestro pipeline está listo para procesar tu visión y desplegarla en 48 horas.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, text: "Garantía de Entrega 48h" },
                { icon: Zap, text: "Optimización por M&C Engine" },
                { icon: Globe, text: "Hosting & Dominio Incluidos" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-400">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="relative z-10 py-20 border-t border-white/5 mx-6">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5">
                 <span className="text-cyan-400 font-black text-xl">M</span>
               </div>
               <span className="text-xl font-black tracking-tight text-white uppercase">M&C Web Solutions</span>
             </div>
             <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-600">Ingeniería Digital • Valencia, ES</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Diseñado & Construido por M&C Web Solutions © 2026</p>
            <p className="text-[10px] font-mono tracking-widest uppercase text-cyan-500/40 italic">In IA we trust. In Engineering we deliver.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
