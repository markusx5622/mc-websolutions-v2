"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import PortfolioBento from '@/components/PortfolioBento';
import ContactForm from '@/components/ContactForm';

type Service = {
  title: string;
  description: string;
  iconName: 'Cpu' | 'Layers' | 'Activity';
};

const SERVICES: Service[] = [
  {
    title: 'Digital Ecosystems',
    description: 'We architect high-performance platforms using Next.js 16 and modern engineering principles for maximum scalability.',
    iconName: 'Cpu',
  },
  {
    title: 'Industrial UX/UI',
    description: 'Specialized design systems for complex industrial workflows, focusing on efficiency, data density, and user performance.',
    iconName: 'Layers',
  },
  {
    title: 'Data-Driven Solutions',
    description: 'Advanced analytics dashboards and predictive intelligence modules integrated into your core business operations.',
    iconName: 'Activity',
  },
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the Glow Blob
  const springConfig = { damping: 25, stiffness: 150 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half of blob size (approx)
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 overflow-hidden">
        {/* Reactive Glow Blob */}
        <motion.div
          style={{
            x: blobX,
            y: blobY,
          }}
          className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-cyan-500/10 pointer-events-none z-0"
        />
        
        {/* Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center max-w-5xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-6"
          >
            WE ARCHITECT THE <br />
            <span className="text-gradient">DIGITAL FUTURE</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            Engineering high-end digital experiences with precision and intelligence. 
            The next era of web solutions starts here.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group relative px-8 py-4 rounded-full bg-cyan-500 text-black font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Start Project
            </button>
            <button className="px-8 py-4 rounded-full border border-purple-500/50 text-white font-bold transition-all hover:bg-purple-500/10 hover:border-purple-500 active:scale-95">
              Our Solutions
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Systems Engineering for the Web
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section id="lab" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            02 // Innovation Lab
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Engineering <span className="text-zinc-500">Excellence.</span>
          </motion.h2>
        </div>

        <PortfolioBento />
      </section>

      {/* Command Center Section */}
      <section id="contact" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
            >
              03 // Command Center
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Ready to optimize your <span className="text-gradient">digital ecosystem?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-md"
            >
              Let's engineer something great together. Our team is ready to deploy specialized solutions for your most complex challenges.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.2em] font-bold text-zinc-600 uppercase">
            © 2026 M&C Web Solutions | Engineered by Marc & Juan
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] font-bold text-zinc-600 uppercase hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.2em] font-bold text-zinc-600 uppercase hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-[10px] tracking-[0.2em] font-bold text-zinc-600 uppercase hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
