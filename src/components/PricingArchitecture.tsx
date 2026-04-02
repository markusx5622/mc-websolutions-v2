"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, GraduationCap } from 'lucide-react';

const PACKS = [
  {
    id: "emprendedor",
    title: "Pack Emprendedor",
    price: 100,
    features: [
      "Landing Page (1 página)",
      "Diseño Responsive",
      "IA Copywriting Core",
      "Formulario Contacto",
      "Entrega 48h Reales"
    ],
    recommended: false
  },
  {
    id: "profesional",
    title: "Pack Profesional",
    price: 250,
    features: [
      "Web Multi-página (hasta 4)",
      "Diseño Premium Personalizado",
      "Optimización SEO Básica",
      "Integración WhatsApp/Redes",
      "Entrega 72h Reales"
    ],
    recommended: true
  }
];

const PricingArchitecture = () => {
  const [isStudent, setIsStudent] = useState(false);

  const calculatePrice = (price: number) => {
    return isStudent ? Math.floor(price * 0.8) : price;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24">
      {/* Student Advantage Toggle */}
      <div className="flex justify-center mb-16">
        <motion.button 
          onClick={() => setIsStudent(!isStudent)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-4 px-8 py-4 rounded-full border transition-all duration-500 ${isStudent ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_30px_rgba(100,255,218,0.1)]' : 'bg-white/5 border-white/10'}`}
        >
          <div className={`p-2 rounded-full ${isStudent ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white/50'}`}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className={`block text-xs font-black uppercase tracking-widest ${isStudent ? 'text-cyan-400' : 'text-zinc-500'}`}>
              Beca M&C (UEV Advantage)
            </span>
            <span className="text-[10px] text-zinc-500">¿Eres estudiante de la Universidad Europea?</span>
          </div>
          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isStudent ? 'bg-cyan-500' : 'bg-white/10'}`}>
            <motion.div 
              animate={{ x: isStudent ? 24 : 0 }}
              className="w-4 h-4 bg-white rounded-full shadow-lg"
            />
          </div>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PACKS.map((pack) => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative group p-10 rounded-[2.5rem] bg-card-bg border ${pack.recommended ? 'border-cyan-500/30' : 'border-white/5'} transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]`}
          >
            {pack.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-background px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(100,255,218,0.4)]">
                Recomendado
              </span>
            )}

            <h3 className="text-2xl font-black uppercase tracking-widest text-foreground mb-8">
              {pack.title}
            </h3>

            <div className="flex items-end gap-2 mb-10 overflow-hidden h-[60px]">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={calculatePrice(pack.price)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`text-6xl font-black ${isStudent ? 'text-cyan-400' : 'text-foreground'}`}
                >
                  {calculatePrice(pack.price)}€
                </motion.span>
              </AnimatePresence>
              <span className="text-zinc-500 text-xs mb-2 uppercase tracking-widest font-bold">Pago Único</span>
              {isStudent && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded text-[8px] font-bold mb-8 uppercase"
                >
                  -20% UEV
                </motion.span>
              )}
            </div>

            <ul className="space-y-4 mb-12">
              {pack.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted">
                  <Check className="w-4 h-4 text-cyan-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${pack.recommended ? 'bg-cyan-500 text-background hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] hover:scale-[1.02]' : 'bg-white/5 text-foreground hover:bg-white/10'}`}>
              Configurar Proyecto
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 opacity-30 hover:opacity-100 transition-opacity">
              <Info className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-widest uppercase">No recurring fees. Pure Ownership.</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingArchitecture;
