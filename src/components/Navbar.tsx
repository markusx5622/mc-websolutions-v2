"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[1000] glassmorphism transition-all duration-300 px-6 ${
        scrolled ? 'py-3 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]' : 'py-5 shadow-none'
      } flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-xl font-black tracking-widest text-white uppercase cursor-pointer hover:opacity-90 transition-opacity no-underline"
        >
          M&C<span className="text-cyan-400">.</span> <span className="text-zinc-500 font-medium tracking-tight">Web Solutions</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: 'ADN', hash: '#dna' },
          { name: 'Método', hash: '#methodology' },
          { name: 'Demos', hash: '#demos' },
          { name: 'Precios', hash: '#pricing' },
          { name: 'Contacto', hash: '#contact' }
        ].map((item) => (
          <Link 
            key={item.hash}
            href={item.hash} 
            className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-all"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/briefing" className="px-6 py-2 text-[10px] items-center gap-2 font-black uppercase tracking-[0.2em] rounded-full bg-cyan-500 text-background hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all">
          Iniciar proyecto
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
