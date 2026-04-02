"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Coffee, Sparkles } from 'lucide-react';

const DEMOS = [
  {
    id: "speed",
    title: "SpeedFlow SaaS",
    type: "Optimización Crítica",
    desc: "Velocidad que convierte leads en ingresos reales.",
    icon: Zap,
    gridClass: "lg:col-span-2 lg:row-span-2",
    gradient: "from-cyan-500/20 to-blue-600/20",
    border: "border-cyan-500/30",
    tag: "High Performance"
  },
  {
    id: "studio",
    title: "Studio Vision",
    type: "Portfolio Creativo",
    desc: "Diseño impecable para marcas personales.",
    icon: Target,
    gridClass: "lg:col-span-1 lg:row-span-1",
    gradient: "from-purple-500/20 to-blue-600/20",
    border: "border-purple-500/30",
    tag: "Aesthetic Core"
  },
  {
    id: "cafe",
    title: "Café Origen",
    type: "Negocio Local",
    desc: "Presencia digital auténtica para el comercio local.",
    icon: Coffee,
    gridClass: "lg:col-span-1 lg:row-span-1",
    gradient: "from-orange-500/20 to-red-600/20",
    border: "border-orange-500/30",
    tag: "Local Impact"
  },
  {
    id: "aura",
    title: "Aura Wellness",
    type: "Proyecto Premium",
    desc: "Experiencia de lujo y bienestar digital total.",
    icon: Sparkles,
    gridClass: "lg:col-span-2 lg:row-span-1",
    gradient: "from-teal-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    tag: "Premium Quality"
  }
];

const DemoEcosystem = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {DEMOS.map((demo, idx) => (
        <motion.div
          key={demo.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`${demo.gridClass} group relative overflow-hidden rounded-[2.5rem] bg-card-bg border ${demo.border} flex flex-col justify-end p-8 min-h-[300px] hover:shadow-[0_0_40px_rgba(100,255,218,0.1)] transition-all duration-500`}
        >
          {/* Background Gradient & Pattern */}
          <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
          <div className="absolute inset-0 opacity-[0.03] pattern-grid pointer-events-none" />

          {/* Icon Overlay */}
          <div className="absolute top-8 right-8">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
              <demo.icon className="w-6 h-6 text-white opacity-60" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 rounded-full">
                {demo.tag}
              </span>
            </div>
            
            <h3 className="text-3xl font-black text-white tracking-tight leading-none mt-4 group-hover:translate-x-2 transition-transform duration-500">
              {demo.title}
            </h3>
            
            <p className="text-muted text-sm max-w-[300px] leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-500">
              {demo.desc}
            </p>

            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-cyan-400 transition-colors">
              Explorar Demo <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtle bottom shine */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent translate-y-[1px] group-hover:translate-y-0 transition-transform duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default DemoEcosystem;
