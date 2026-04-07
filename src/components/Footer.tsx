"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid rgba(100, 255, 218, 0.05)", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <img src="/logo.svg" alt="M&C Logo" className="footer-logo" style={{ height: '160px', width: 'auto', marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', background: 'rgba(100, 255, 218, 0.05)', padding: '6px 12px', borderRadius: '50px', border: '1px solid rgba(100, 255, 218, 0.1)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64FFDA', boxShadow: '0 0 10px #64FFDA', animation: 'pulse 2s infinite' }}></span>
          <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '1px' }}>Disponibles para tu proyecto</span>
        </div>
        <p className="mono-text" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
          Diseño web profesional para tu negocio. <br />
          Diseñado &amp; Construido por <strong>M&amp;C Web Solutions</strong> © 2026
        </p>
        <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#8a8f98" }}>
          <Link href="/aviso-legal" style={{ color: "#8a8f98", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#c5c8ce")} onMouseLeave={e => (e.currentTarget.style.color = "#8a8f98")}>Aviso Legal</Link>
          {" · "}
          <Link href="/privacidad" style={{ color: "#8a8f98", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#c5c8ce")} onMouseLeave={e => (e.currentTarget.style.color = "#8a8f98")}>Privacidad</Link>
          {" · "}
          <Link href="/cookies" style={{ color: "#8a8f98", textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.color = "#c5c8ce")} onMouseLeave={e => (e.currentTarget.style.color = "#8a8f98")}>Cookies</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
