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

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#112240] shadow-2xl z-[1000] p-8 md:hidden flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button onClick={() => setIsMenuOpen(false)} className="text-accent">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.hash}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link 
                      href={item.hash}
                      onClick={() => setIsMenuOpen(false)}
                      className="mono-text block text-xl"
                      style={{ letterSpacing: '4px' }}
                    >
                      <span className="text-accent text-sm mr-4">0{i+1}.</span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto border-t border-white/5 pt-8">
                <Link 
                  href="/briefing" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-solid w-full block text-center"
                >
                  Iniciar Proyecto
                </Link>
                <div className="flex justify-center gap-6 mt-8 text-muted text-sm">
                   <span>ES</span>
                   <span className="opacity-30">EN</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
