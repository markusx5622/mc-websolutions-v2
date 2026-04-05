"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Cpu, Rocket } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "1. Briefing Express",
    desc: "Completa un formulario estructurado de 5 minutos. Extraemos la esencia de tu negocio con precisión de ingeniería.",
    icon: ClipboardList,
    color: "cyan"
  },
  {
    id: 2,
    title: "2. Generación IA",
    desc: "Nuestros modelos de IA procesan tus datos para generar una estructura, copy y diseño base altamente optimizados.",
    icon: Cpu,
    color: "purple"
  },
  {
    id: 3,
    title: "3. Despliegue & Curación",
    desc: "Revisión humana experta. Ajustamos detalles visuales, optimizamos el rendimiento y lanzamos tu web al mundo.",
    icon: Rocket,
    color: "cyan"
  }
];

const MethodologyPipeline = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-24">
      {/* Background Pipeline Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 relative z-10">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Step Icon with Glowing Container */}
            <div className="relative mb-8">
              <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 opacity-20 group-hover:opacity-40 bg-${step.color}-500`} />
              <div className="relative w-20 h-20 rounded-2xl bg-card-bg border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                <step.icon className={`w-10 h-10 ${step.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
              </div>

              {/* Connecting Line Snippet */}
              {idx < STEPS.length - 1 && (
                <div className="absolute top-1/2 -right-10 w-20 h-px bg-cyan-500/20 hidden lg:block overflow-hidden">
                  <motion.div 
                    animate={{ x: [-80, 80] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  />
                </div>
              )}
            </div>

            <h3 className="text-xl font-black uppercase tracking-widest text-foreground mb-4">
              {step.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-[280px]">
              {step.desc}
            </p>


          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MethodologyPipeline;
