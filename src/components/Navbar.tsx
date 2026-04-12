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
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
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
          className="fixed inset-0 w-full h-[100dvh] z-[5000] md:hidden flex flex-col items-center justify-start overflow-y-auto pt-72 pb-12 overscroll-contain"
          style={{ 
            backgroundColor: '#020c1b',
            backgroundImage: 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
          }}
        >
          {/* Backdrop Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-xl pointer-events-none" />

          {/* Top Bar inside Menu (Sticky-like for easy access) */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[5001] bg-[#020c1b]/95 backdrop-blur-md border-b border-white/10">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="brand-wrapper !opacity-100 flex items-center gap-3">
              <motion.img 
                src="/logo.svg" 
                alt="Logo" 
                className="w-10 h-10"
                animate={{ 
                  rotate: 360,
                  filter: ["drop-shadow(0 0 2px var(--accent))", "drop-shadow(0 0 10px var(--accent))", "drop-shadow(0 0 2px var(--accent))"]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
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
          <div className="relative z-10 w-full flex flex-col items-center px-6">
            {/* Substantial Safety Spacer for the first link */}
            <div className="h-12 w-full" aria-hidden="true" />

            <nav className="flex flex-col items-center gap-10 w-full max-w-xs">
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
                    <span className="text-accent text-[0.65rem] tracking-[0.5em] mb-3 opacity-60 uppercase font-black">PROTOCOLO 0{i+1}</span>
                    <span className="text-4xl font-extrabold tracking-[0.25em] relative uppercase text-white hover:text-accent transition-colors leading-tight">
                      {item.name}
                      <span className="block h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full mx-auto mt-2 shadow-[0_0_20px_var(--accent)]"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="h-[50px] w-full" aria-hidden="true" />

            {/* Actions Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-24 px-8 w-full max-w-xs flex flex-col items-center gap-8"
            >
              <Link 
                href="/briefing" 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-solid w-full block text-center !py-4 text-sm tracking-[0.3em] uppercase font-black"
              >
                INICIAR PROYECTO 🚀
              </Link>
              

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
              <motion.img 
                src="/logo.svg" 
                alt="M&C Logo" 
                className="brand-logo-img" 
                animate={{ 
                  rotate: isMobile ? 360 : 0,
                  filter: isMobile 
                    ? ["drop-shadow(0 0 2px var(--accent))", "drop-shadow(0 0 10px var(--accent))", "drop-shadow(0 0 2px var(--accent))"] 
                    : "drop-shadow(0 0 8px rgba(100, 255, 218, 0.3))"
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <div className="brand-info">
                <motion.span 
                  className="brand-name"
                  animate={isMobile ? {
                    textShadow: [
                      "0 0 0px var(--accent)",
                      "0 0 20px var(--accent)",
                      "0 0 0px var(--accent)"
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  M&C<span style={{ color: "var(--accent)" }}>.</span>
                </motion.span>
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
