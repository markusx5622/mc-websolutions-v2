"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <header 
      id="header" 
      style={{
        padding: scrolled ? "1rem 0" : "1.5rem 0",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)" : "none",
        transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
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
            }}
            className="brand-wrapper cursor-pointer hover:opacity-90 transition-opacity no-underline"
          >
            <img src="/logo.svg" alt="M&C Logo" className="brand-logo-img" />
            <div className="brand-info">
              <span className="brand-name">M&C<span style={{ color: "var(--accent)" }}>.</span></span>
              <span className="brand-tagline">Web Solutions</span>
            </div>
          </Link>

          {/* New navigation sections - styled to match brand-tagline/btn */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'ADN', hash: '/#dna' },
              { name: 'MÉTODO', hash: '/#methodology' },
              { name: 'DEMOS', hash: '/#demos' },
              { name: 'PRECIOS', hash: '/#pricing' },
              { name: 'CONTACTO', hash: '/#contact' }
            ].map((item) => (
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

        <Link 
          href="/briefing" 
          className="btn btn-primary" 
          style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
        >
          Empieza ya
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
