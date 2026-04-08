"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuContent = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-full h-[100dvh] z-[5000] md:hidden flex flex-col items-center justify-start overflow-y-auto pt-32 pb-12 overscroll-contain"
          style={{ 
            backgroundColor: '#020c1b',
            backgroundImage: 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
          }}
        >
          {/* Backdrop Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-xl pointer-events-none" />

          {/* Top Bar inside Menu (Sticky-like for easy access) */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[5001] bg-[#020c1b]/80 backdrop-blur-md">
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

          {/* Scrollable Navigation Area */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <nav className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.hash}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link 
                    href={item.hash}
                    onClick={() => setIsMenuOpen(false)}
                    className="mono-text group flex flex-col items-center py-2"
                  >
                    <span className="text-accent text-[0.6rem] tracking-[0.4em] mb-2 opacity-50 uppercase font-bold">Protocolo 0{i+1}</span>
                    <span className="text-3xl font-extrabold tracking-[0.25em] relative uppercase text-white hover:text-accent transition-colors">
                      {item.name}
                      <span className="block h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full mx-auto mt-1 shadow-[0_0_10px_var(--accent)]"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Actions Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-12 px-8 w-full max-w-xs flex flex-col items-center gap-8"
            >
              <Link 
                href="/briefing" 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-solid w-full block text-center !py-4 text-sm tracking-[0.3em] uppercase font-black"
              >
                PROYECTO_START 🚀
              </Link>
              
              <div className="flex gap-10 text-muted/40 text-[0.7rem] mono-text tracking-[0.4em] font-black italic">
                 <span className="text-accent cursor-pointer">ES_INTL</span>
                 <span className="hover:text-accent transition-colors cursor-pointer">GLOBAL_EN</span>
              </div>
            </motion.div>
          </div>

          {/* Technical Ambient Lights */}
          <div className="fixed -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
      </header>

      {/* Mobile Menu Overlay - Portal for absolute scroll stability */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
};

export default Navbar;
