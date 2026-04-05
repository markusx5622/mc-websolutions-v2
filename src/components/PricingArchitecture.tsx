"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, GraduationCap, Clock, Globe, ShoppingCart } from 'lucide-react';

const PACKS = [
  {
    id: "basica",
    title: "Web Básica",
    price: "desde 299€",
    delivery: "Entrega en 48 horas",
    pages: "1 a 3 páginas",
    icon: Globe,
    features: [
      "Diseño personalizado y moderno",
      "Adaptada a móvil y tablet",
      "Formulario de contacto",
      "SEO básico para Google",
      "Hosting gratuito incluido",
    ],
    recommended: false,
    cta: "Empezar con lo básico"
  },
  {
    id: "pro",
    title: "Web Pro",
    price: "desde 499€",
    delivery: "Entrega en 7 días",
    pages: "4 a 8 páginas",
    icon: Clock,
    features: [
      "Todo lo de Web Básica",
      "Hasta 8 páginas o secciones",
      "Galería, blog o catálogo",
      "Integración WhatsApp y redes",
      "Google Analytics configurado",
    ],
    recommended: true,
    cta: "Elegir Web Pro"
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    price: "desde 999€",
    delivery: "Entrega en 15 días",
    pages: "Tienda online completa",
    icon: ShoppingCart,
    features: [
      "Todo lo de Web Pro",
      "Tienda online con carrito de compra",
      "Pasarela de pago integrada",
      "Gestión de productos y stock",
      "Panel de administración",
    ],
    recommended: false,
    cta: "Montar mi tienda"
  }
];

const PricingArchitecture = () => {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {/* Student Toggle */}
      <div className="flex justify-center mb-14">
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
              Descuento Estudiantes UEV
            </span>
            <span className="text-[10px] text-zinc-500">¿Eres estudiante de la Universidad Europea de Valencia? — 20% dto.</span>
          </div>
          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isStudent ? 'bg-cyan-500' : 'bg-white/10'}`}>
            <motion.div
              animate={{ x: isStudent ? 24 : 0 }}
              className="w-4 h-4 bg-white rounded-full shadow-lg"
            />
          </div>
        </motion.button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {PACKS.map((pack) => {
          const Icon = pack.icon;
          return (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative group p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col ${
                pack.recommended
                  ? 'border-cyan-500/40 bg-cyan-500/5 hover:border-cyan-500/70'
                  : 'border-white/5 bg-white/[0.02] hover:border-white/15'
              }`}
            >
              {pack.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-[#0A192F] px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(100,255,218,0.4)]">
                  Más popular
                </span>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${pack.recommended ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                  <Icon className={`w-6 h-6 ${pack.recommended ? 'text-cyan-400' : 'text-zinc-400'}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-1">{pack.title}</h3>
                <p className="text-zinc-500 text-xs">{pack.pages}</p>
              </div>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isStudent ? 'student' : 'normal'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-end gap-2"
                  >
                    <span className={`text-3xl font-black ${pack.recommended ? 'text-cyan-400' : 'text-white'}`}>
                      {pack.price}
                    </span>
                    {isStudent && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded text-[9px] font-bold mb-1 uppercase"
                      >
                        −20%
                      </motion.span>
                    )}
                  </motion.div>
                </AnimatePresence>
                <p className="text-zinc-500 text-xs mt-1 font-semibold">{pack.delivery}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/briefing"
                className={`mt-auto block w-full py-3.5 rounded-xl font-black uppercase tracking-widest text-xs text-center transition-all duration-300 ${
                  pack.recommended
                    ? 'bg-cyan-500 text-[#0A192F] hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] hover:scale-[1.02]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {pack.cta}
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Nota mantenimiento */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center py-4 px-6 rounded-2xl border border-white/5 bg-white/[0.02]"
      >
        <p className="text-zinc-500 text-sm">
          🛡️ <span className="text-zinc-300 font-semibold">Mantenimiento y soporte: 39€/mes</span>{' '}
          <span className="text-zinc-600">(opcional)</span> — Incluye hosting premium, actualizaciones, soporte técnico y copias de seguridad.
        </p>
      </motion.div>
    </div>
  );
};

export default PricingArchitecture;
