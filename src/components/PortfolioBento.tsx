"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Terminal, Cpu, Layers, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  size: 'large' | 'medium' | 'small';
  side: 'left' | 'right';
}

const PROJECTS: Project[] = [
  {
    id: 'aether',
    title: 'Aether Dashboard',
    description: 'High-performance real-time predictive analytics engine with multi-agent coordination systems.',
    category: 'Architecture // AI',
    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    size: 'large',
    side: 'left',
  },
  {
    id: 'engine',
    title: 'M&C Engine V1',
    description: 'Autonomous multi-agent framework for automated web development and systems engineering.',
    category: 'Automation // Core',
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    size: 'medium',
    side: 'right',
  },
  {
    id: 'smart',
    title: 'Smart Systems',
    description: 'Workflow automation and industrial optimization for decentralized infrastructure.',
    category: 'Optimization // Node',
    icon: <Layers className="w-5 h-5 text-cyan-300" />,
    size: 'small',
    side: 'left',
  },
];

const PortfolioBento = () => {
  const cardVariants: Variants = {
    hiddenLeft: { x: -50, opacity: 0 },
    hiddenRight: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[300px]">
      {PROJECTS.map((project, idx) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          initial={project.side === 'left' ? 'hiddenLeft' : 'hiddenRight'}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: idx * 0.1 }}
          className={`
            group relative glassmorphism border border-white/10 rounded-[2rem] p-8 overflow-hidden flex flex-col justify-between
            ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
            ${project.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
            ${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
          `}
        >
          {/* Scanline Animation Overlay */}
          <div className="scanline group-hover:bg-cyan-500/30 group-hover:h-1 transition-all duration-700" />
          
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                {project.icon}
              </div>
              <span className="text-[10px] tracking-[0.2em] font-bold text-zinc-500 uppercase">
                {project.category}
              </span>
            </div>
            
            <h3 className={`font-black text-white leading-tight ${project.size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            
            <p className="mt-4 text-zinc-400 text-sm max-w-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300"
            >
              View Specs
            </motion.button>
            <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioBento;
