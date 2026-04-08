"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'MÉTODO', hash: '/#methodology' },
    { name: 'ADN', hash: '/#dna' },
    { name: 'DEMOS', hash: '/#portfolio' },
    { name: 'PRECIOS', hash: '/#pricing' },
    { name: 'FAQ', hash: '/#faq' },
    { name: 'CONTACTO', hash: '/#contact' }
  ];

  return (
    <header 
      id="header" 
      style={{
        padding: scrolled ? "1rem 0" : "1.5rem 0",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)" : "none",
        transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
        background: scrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none"
      }}
    >
      <div className="container header-content">
        <div className="flex items-center gap-12">
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setIsMenuOpen(false);
            }}
            className="brand-wrapper cursor-pointer hover:opacity-90 transition-opacity no-underline"
          >
            <img src="/logo.svg" alt="M&C Logo" className="brand-logo-img" />
            <div className="brand-info">
              <span className="brand-name">M&C<span style={{ color: "var(--accent)" }}>.</span></span>
              <span className="brand-tagline">Web Solutions</span>
            </div>
          </Link>

          {/* New navigation sections - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link 
                key={item.hash}
                href={item.hash} 
                className="mono-text"
                style={{ 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px', 
                  fontWeight: 500,
                  opacity: 0.8,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/briefing" 
            className="btn btn-primary hidden sm:inline-block" 
            style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
          >
            Empieza ya
          </Link>

          {/* Hamburger Menu Trigger */}
          <button 
            className="md:hidden text-accent p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="fixed inset-0 w-full h-full z-[2000] md:hidden flex flex-col items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
              backdropFilter: 'blur(15px)'
            }}
          >
            {/* Top Bar inside Menu */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="brand-wrapper !opacity-100">
                <span className="brand-name">M&C<span style={{ color: "var(--accent)" }}>.</span></span>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-accent p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Cerrar Menú"
              >
                <X size={32} />
              </button>
            </div>

            {/* Centered Navigation */}
            <nav className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.hash}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="overflow-hidden"
                >
                  <Link 
                    href={item.hash}
                    onClick={() => setIsMenuOpen(false)}
                    className="mono-text group flex items-center justify-center flex-col"
                  >
                    <span className="text-accent text-[0.6rem] tracking-[0.3em] mb-2 opacity-60">0{i+1}</span>
                    <span className="text-3xl font-bold tracking-[0.2em] relative">
                      {item.name}
                      <span className="block h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 px-8 w-full max-w-xs flex flex-col items-center gap-8"
            >
              <Link 
                href="/briefing" 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-solid w-full block text-center !py-4 text-sm tracking-widest"
              >
                PROYECTO_START
              </Link>
              
              <div className="flex gap-8 text-muted/60 text-[0.7rem] mono-text tracking-widest font-bold">
                 <span className="text-accent cursor-pointer">ES_EUROPA</span>
                 <span className="hover:text-accent transition-colors cursor-pointer">GLOBAL_EN</span>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
