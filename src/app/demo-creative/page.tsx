"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// --- CURSOR COMPONENT ---
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        left: -10,
        top: -10,
      }}
      animate={{
        scale: isPointer ? 3 : 1,
        backgroundColor: isPointer ? '#E0FF00' : '#F5F5F5',
      }}
      className="fixed pointer-events-none z-[9999] w-5 h-5 rounded-full mix-blend-difference"
    />
  );
};

// --- MAGNETIC BUTTON ---
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default function DemoCreativePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide default cursor in this route
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="creative-v2-scope min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#E0FF00] selection:text-black">
      <CustomCursor />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,900;1,400;1,900&display=swap');

        .creative-v2-scope {
          font-family: 'Inter', sans-serif;
        }
        
        .creative-serif {
          font-family: 'Playfair Display', serif;
        }

        .marquee {
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 250px;
          gap: 20px;
        }

        .mask-text {
          overflow: hidden;
          display: block;
        }

        /* Standard CSS Overrides for this Demo */
        .creative-v2-scope * {
          cursor: none !important;
        }
      `}} />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50">
        <Link href="/#portfolio" className="text-xl font-black tracking-tighter hover:text-[#E0FF00] transition-colors">
          VISIONARY<span className="text-[#E0FF00]">.</span>
        </Link>
        <div className="flex gap-12 text-sm font-bold tracking-widest uppercase opacity-40">
          <span className="hover:opacity-100 transition-opacity">Work</span>
          <span className="hover:opacity-100 transition-opacity">Studio</span>
          <span className="hover:opacity-100 transition-opacity">Contact</span>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="h-[90vh] flex flex-col justify-center px-4 md:px-20">
        <div className="mask-text">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="creative-serif text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase"
          >
            Creative
          </motion.h1>
        </div>
        <div className="mask-text ml-[10%]">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="creative-serif text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic text-transparent"
            style={{ WebkitTextStroke: '2px #F5F5F5' }}
          >
            Visionary
          </motion.h1>
        </div>
        <div className="mask-text ml-[20%]">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="creative-serif text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase text-[#E0FF00]"
          >
            System.
          </motion.h1>
        </div>
      </header>

      {/* --- MARQUEE --- */}
      <section className="py-12 border-y border-[#F5F5F5]/10 overflow-hidden">
        <div className="marquee text-4xl md:text-6xl font-black italic tracking-widest uppercase opacity-20">
          ART DIRECTION — 3D MOTION — WEB EXPERIENCES — BRAND IDENTITY — BRUTALIST AESTHETICS — 
          ART DIRECTION — 3D MOTION — WEB EXPERIENCES — BRAND IDENTITY — BRUTALIST AESTHETICS — 
        </div>
      </section>

      {/* --- BENTO GALLERY --- */}
      <section className="py-32 px-4 md:px-20">
        <div className="bento-grid">
          {/* Item 1 */}
          <motion.div 
            whileHover="hover"
            className="col-span-2 row-span-2 relative overflow-hidden group border border-[#F5F5F5]/10"
          >
            <motion.div variants={{ hover: { scale: 1.05 } }} className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90" 
                alt="Architecture" fill unoptimized className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <h3 className="creative-serif text-3xl font-black">Minimal Complexity</h3>
              <p className="text-sm opacity-60 mb-4">Architecture / 2026</p>
              <button className="bg-[#E0FF00] text-black text-xs font-bold px-6 py-2 w-max">VIEW CASE</button>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            whileHover="hover"
            className="col-span-1 row-span-1 relative overflow-hidden group border border-[#F5F5F5]/10"
          >
            <motion.div variants={{ hover: { scale: 1.05 } }} className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=90" 
                alt="UI" fill unoptimized className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-center items-center text-center">
              <h3 className="creative-serif text-xl font-bold">Liquid Interface</h3>
              <button className="text-[#E0FF00] text-[10px] font-black mt-2 tracking-widest">DISCOVER</button>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            whileHover="hover"
            className="col-span-1 row-span-2 relative overflow-hidden group border border-[#F5F5F5]/10"
          >
            <motion.div variants={{ hover: { scale: 1.05 } }} className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=90" 
                alt="Product" fill unoptimized className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <h3 className="creative-serif text-2xl font-bold">Industrial Soul</h3>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div 
            whileHover="hover"
            className="col-span-1 row-span-1 relative overflow-hidden group border border-[#F5F5F5]/10"
          >
            <motion.div variants={{ hover: { scale: 1.05 } }} className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=90" 
                alt="Abstract" fill unoptimized className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="h-screen flex flex-col justify-center items-center text-center gap-12 border-t border-[#F5F5F5]/05">
        <div className="mask-text">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="creative-serif text-[8vw] font-black leading-none"
          >
            HAVE A VISION?
          </motion.h2>
        </div>
        
        <MagneticButton className="group relative px-20 py-10 bg-[#F5F5F5] text-black creative-serif text-4xl font-black italic transform transition-colors hover:bg-[#E0FF00] overflow-hidden">
          <span className="relative z-10 transition-transform group-hover:scale-110 block">LET&apos;S TALK</span>
          <motion.div className="absolute inset-0 bg-[#FF3366] opacity-0 group-hover:opacity-10 transition-opacity" />
        </MagneticButton>

        <div className="mt-20 opacity-30 text-xs font-bold tracking-[0.3em] uppercase">
          M&C WEB SOLUTIONS — 2026 REWRITING THE CODE
        </div>

        <Link href="/#portfolio" className="text-sm border border-[#F5F5F5]/20 px-8 py-3 hover:bg-[#F5F5F5] hover:text-black transition-all">
          ← BACK TO CORE
        </Link>
      </footer>
    </div>
  );
}
