"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
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
  );
}
