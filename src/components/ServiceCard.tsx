"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof LucideIcons;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName, index }) => {
  // Dynamically resolve the icon
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2, 
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 rounded-3xl glassmorphism border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
    >
      {/* Dynamic Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-[radial-gradient(circle_at_center,var(--cyan)_0%,transparent_70%)] opacity-10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-500">
          {Icon && <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
