"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DemoCreativePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reset any possible global CSS side-effects
    document.body.style.cursor = 'auto';
    return () => {};
  }, []);

  if (!mounted) return null;

  return (
    <div className="studio-kaizen-scope min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#E0FF00] selection:text-black overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&display=swap');

        .studio-kaizen-scope {
          font-family: 'Inter', sans-serif;
        }
        
        .kaizen-serif {
          font-family: 'Playfair Display', serif;
        }

        .marquee-container {
            width: 100%;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.02);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 20px 0;
            white-space: nowrap;
        }

        .marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Responsive Grid fixes */
        .kaizen-grid {
          display: grid;
          gap: 24px;
        }

        .mask-text {
          overflow: hidden;
          display: block;
        }
      `}} />

      {/* --- TASK 1: NAVBAR --- */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
        <Link href="/#portfolio" className="text-xl md:text-2xl font-black tracking-tighter hover:text-[#E0FF00] transition-colors">
          STUDIO KAIZEN<span className="text-[#E0FF00]">_</span>
        </Link>
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase opacity-70">
          <a href="#work" className="hover:text-[#E0FF00] transition-colors">Work</a>
          <a href="#expertise" className="hover:text-[#E0FF00] transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-[#E0FF00] transition-colors">Contact</a>
        </div>
        <div className="md:hidden text-[#E0FF00] font-bold text-xs uppercase tracking-widest">MENU</div>
      </nav>

      {/* --- TASK 2: HERO & MARQUEE --- */}
      <header className="pt-40 pb-20 px-6 md:px-20 min-h-[70vh] flex flex-col justify-center">
        <div className="mask-text mb-4">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[#E0FF00] font-black tracking-[0.3em] uppercase text-[10px] md:text-xs"
          >
            Digital Excellence Studio — 2026
          </motion.p>
        </div>
        
        <h1 className="text-5xl md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-10">
          We build <br />
          <span className="kaizen-serif italic font-normal text-transparent" style={{ WebkitTextStroke: '1px #F5F5F5' }}>Creative</span> <br />
          Benchmarks.
        </h1>
      </header>

      <div className="marquee-container mb-32">
        <div className="marquee text-4xl md:text-6xl font-black italic tracking-tighter uppercase opacity-20">
          DIGITAL DESIGN — MOTION GRAPHICS — BRAND IDENTITY — FULLSTACK ENGINEERING — 
          DIGITAL DESIGN — MOTION GRAPHICS — BRAND IDENTITY — FULLSTACK ENGINEERING — 
        </div>
      </div>

      {/* --- TASK 3: EXPERTISE --- */}
      <section id="expertise" className="py-24 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold tracking-[0.5em] uppercase opacity-30 mb-20">&gt; Our Expertise.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="expertise-card">
                    <h3 className="text-2xl font-bold mb-6">Digital Design</h3>
                    <p className="text-sm leading-relaxed opacity-50">Crafting high-end user interfaces that bridge the gap between human intuition and technical complex systems.</p>
                </div>
                <div className="expertise-card">
                    <h3 className="text-2xl font-bold mb-6">Motion Graphics</h3>
                    <p className="text-sm leading-relaxed opacity-50">Bringing brands to life through physics-based motion and sophisticated visual storytelling.</p>
                </div>
                <div className="expertise-card">
                    <h3 className="text-2xl font-bold mb-6">Brand Identity</h3>
                    <p className="text-sm leading-relaxed opacity-50">Defining the visual DNA of futuristic companies to ensure absolute market authority and recognition.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TASK 4: SELECTED WORKS (BENTO FIX) --- */}
      <section id="work" className="py-32 px-6 md:px-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Selected <br />Works</h2>
                <div className="hidden md:block text-right opacity-30 text-xs tracking-widest leading-relaxed">
                    [DISPLAYING_LATEST_CASE_STUDIES]<br />
                    M&C_ENGINEERING_CORE_V.2
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <motion.div 
                    whileHover="hover"
                    className="relative h-[450px] overflow-hidden rounded-2xl group border border-white/5"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2059&auto=format&fit=crop" 
                        alt="Project One" 
                        fill 
                        unoptimized={true}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-10 left-10">
                        <span className="text-[#E0FF00] font-bold text-[10px] tracking-widest uppercase mb-2 block">Architecture / 3D</span>
                        <h3 className="text-2xl font-black tracking-tighter uppercase">Minimal_Structure</h3>
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div 
                    whileHover="hover"
                    className="relative h-[450px] overflow-hidden rounded-2xl group border border-white/5 md:translate-y-20"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
                        alt="Project Two" 
                        fill 
                        unoptimized={true}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-10 left-10">
                        <span className="text-[#E0FF00] font-bold text-[10px] tracking-widest uppercase mb-2 block">System / Interface</span>
                        <h3 className="text-2xl font-black tracking-tighter uppercase">Neon_Vanguard</h3>
                    </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div 
                    whileHover="hover"
                    className="relative h-[450px] overflow-hidden rounded-2xl group border border-white/5"
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                        alt="Project Three" 
                        fill 
                        unoptimized={true}
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-10 left-10">
                        <span className="text-[#E0FF00] font-bold text-[10px] tracking-widest uppercase mb-2 block">Botany / Luxury</span>
                        <h3 className="text-2xl font-black tracking-tighter uppercase">Aura_Nature</h3>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* --- TASK 5: FOOTER & CTA --- */}
      <footer id="contact" className="py-40 px-6 md:px-20 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-16">Ready to <br />stand out?</h2>
            <Link href="/#contact" className="inline-block group bg-transparent border-2 border-[#E0FF00] px-12 py-5 rounded-full overflow-hidden relative">
                <span className="relative z-10 text-[#E0FF00] group-hover:text-black font-black uppercase tracking-widest transition-colors duration-300">
                    Start a Project
                </span>
                <div className="absolute inset-0 bg-[#E0FF00] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-[10px] tracking-[0.4em] uppercase gap-10">
                <div>M&C_WEB_SOLUTIONS — 2026</div>
                <Link href="/#portfolio" className="hover:text-[#E0FF00] transition-colors tracking-widest">[BACK_TO_CORE_ENGINE]</Link>
                <div>ALL_RIGHTS_RESERVED</div>
            </div>
        </div>
      </footer>
    </div>
  );
}
