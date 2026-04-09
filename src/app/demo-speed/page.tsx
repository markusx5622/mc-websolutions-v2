"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DemoSpeedPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Reveal on Scroll
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Trigger on load

    // Navbar Scroll
    const handleNavScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.pageYOffset > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll);

    // Comparison Slider Logic
    const comparison = document.getElementById('comparison');
    const compAfter = document.getElementById('compAfter');
    
    if (comparison && compAfter) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = comparison.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        compAfter.style.width = `${percent}%`;
      };
      comparison.addEventListener('mousemove', handleMouseMove);
      return () => {
        comparison.removeEventListener('mousemove', handleMouseMove);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleReveal);
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  useEffect(() => {
    // Terminal Simulation
    const terminalLines = [
      "Initializing M&C Optimization Engine...",
      "Scanning DOM structure...",
      "Found 42 unoptimized assets.",
      "Compressing images (WebP)... DONE",
      "Minifying CSS/JS bundles... DONE",
      "Implementing Critical CSS path...",
      "Optimizing Time to Interactive...",
      "Final Score: 99/100",
      "Ready for deployment."
    ];
    let lineIdx = 0;
    const terminalContent = document.getElementById('terminal-content');
    
    const addLine = () => {
      if (terminalContent && lineIdx < terminalLines.length) {
        const line = document.createElement('div');
        line.className = 't-line';
        line.style.cssText = `margin-bottom: 5px; opacity: 0; transform: translateX(-10px); animation: tIn 0.5s forwards; color: ${lineIdx % 2 === 0 ? '#fff' : '#00D1FF'};`;
        line.textContent = `> ${terminalLines[lineIdx]}`;
        terminalContent.appendChild(line);
        lineIdx++;
        setTimeout(addLine, 800);
      }
    };
    const timer = setTimeout(addLine, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tIn { to { opacity: 1; transform: translateX(0); } }
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .demo-speed-body {
            font-family: 'Inter', sans-serif;
            background-color: #050505;
            color: #E0E0E0;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation */
        #navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 0;
            z-index: 1000;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        #navbar.scrolled {
            background: rgba(5, 5, 5, 0.8);
            padding: 15px 0;
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-speed {
            font-weight: 800;
            font-size: 1.5rem;
            color: white;
            text-decoration: none;
            letter-spacing: -1px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-speed span {
            color: #00D1FF;
        }

        .logo-speed::before {
            content: '←';
            font-size: 1rem;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-speed:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #E0E0E0;
            font-size: 0.85rem;
            font-weight: 500;
            opacity: 0.7;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover {
            opacity: 1;
            color: #00D1FF;
        }

        /* Hero Section */
        .hero-speed {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.8)), 
                        url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=90');
            background-size: cover;
            background-position: center;
        }

        .hero-speed-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 60px;
            align-items: center;
        }

        .hero-speed h1 {
            font-size: 4.5rem;
            line-height: 1;
            font-weight: 800;
            margin-bottom: 25px;
            background: linear-gradient(to right, #fff, #00D1FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-speed p {
            font-size: 1.2rem;
            opacity: 0.7;
            margin-bottom: 40px;
        }

        /* Terminal */
        .terminal {
            background: #0a0a0a;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 20px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.8rem;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            height: 300px;
            overflow: hidden;
            position: relative;
        }

        .terminal-header {
            display: flex;
            gap: 6px;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .t-dot { width: 10px; height: 10px; border-radius: 50%; }
        .t-red { background: #ff5f56; }
        .t-yellow { background: #ffbd2e; }
        .t-green { background: #27c93f; }

        /* Comparison Slider */
        .comparison-container {
            position: relative;
            width: 100%;
            height: 400px;
            border-radius: 20px;
            overflow: hidden;
            margin: 60px 0;
            border: 1px solid rgba(255,255,255,0.1);
            cursor: ew-resize;
        }

        .comp-side {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 800;
        }

        .comp-before { 
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=10&blur=50');
            background-size: cover;
            background-position: center;
            color: #fff; 
            z-index: 1; 
        }
        .comp-after { 
            background: linear-gradient(rgba(0, 209, 255, 0.2), rgba(0, 209, 255, 0.2)), 
                        url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90');
            background-size: cover;
            background-position: center;
            color: white; 
            z-index: 2; 
            width: 50%; 
            border-right: 2px solid #00D1FF; 
        }

        /* Score Widget */
        .score-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #111111;
            border: 1px solid #00D1FF;
            padding: 15px 25px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 15px;
            z-index: 100;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.5s ease-out;
        }

        .score-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid #00FF94;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 0.8rem;
            color: #00FF94;
        }

        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        .btn-speed {
            display: inline-block;
            padding: 18px 35px;
            background: #00D1FF;
            color: #000;
            text-decoration: none;
            font-weight: 700;
            border-radius: 8px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(0, 209, 255, 0.3);
            border: none;
            cursor: pointer;
        }
      `}} />

      <div className="demo-speed-body">
        <div className="score-widget" id="scoreWidget">
            <div className="score-circle">98</div>
            <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                Optimization Score
            </div>
        </div>

        <nav id="navbar">
            <div className="container nav-content">
                <Link href="/#portfolio" className="logo-speed" title="Volver a M&C">SPEED<span>FLOW</span></Link>
                <ul className="nav-links">
                    <li><a href="#features">Tecnología</a></li>
                    <li><a href="#ab-test">A/B Testing</a></li>
                    <li><a href="#pricing">Planes</a></li>
                    <li><a href="#contact">Empezar</a></li>
                </ul>
            </div>
        </nav>

        <section className="hero-speed">
            <div className="container">
                <div className="hero-speed-grid">
                    <div className="hero-speed-content">
                        <h1 className="reveal">Velocidad que Convierte.</h1>
                        <p className="reveal">Optimizamos cada milisegundo de tu embudo de ventas. Menos rebote, más ingresos. Garantizado por ingeniería.</p>
                        <a href="#contact" className="btn-speed reveal">Optimizar mi Web</a>
                        
                        <div className="stats-grid reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "80px" }}>
                            <div className="stat-card" style={{ background: "#111111", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <span className="stat-value" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "2.5rem", color: "#00FF94", display: "block", marginBottom: "10px" }}>+45%</span>
                                <span className="stat-label" style={{ fontSize: "0.9rem", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px" }}>Conversión Media</span>
                            </div>
                            <div className="stat-card" style={{ background: "#111111", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <span className="stat-value" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "2.5rem", color: "#00FF94", display: "block", marginBottom: "10px" }}>-0.8s</span>
                                <span className="stat-label" style={{ fontSize: "0.9rem", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px" }}>Tiempo de Carga</span>
                            </div>
                            <div className="stat-card" style={{ background: "#111111", padding: "30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <span className="stat-value" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "2.5rem", color: "#00FF94", display: "block", marginBottom: "10px" }}>99.9</span>
                                <span className="stat-label" style={{ fontSize: "0.9rem", opacity: 0.6, textTransform: "uppercase", letterSpacing: "1px" }}>Score Lighthouse</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual reveal">
                        <div className="terminal" id="terminal">
                            <div className="terminal-header">
                                <div className="t-dot t-red"></div>
                                <div className="t-dot t-yellow"></div>
                                <div className="t-dot t-green"></div>
                            </div>
                            <div id="terminal-content">
                                <div className="t-line" style={{ color: "#00D1FF", marginBottom: "5px" }}>{"> mc-engine --analyze https://client-site.com"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" style={{ padding: "120px 0" }}>
            <div className="container">
                <h2 className="section-title reveal" style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "60px", textAlign: "center" }}>Impacto Visual Inmediato</h2>
                <div className="comparison-container reveal" id="comparison">
                    <div className="comp-side comp-before">
                        WEB ESTÁNDAR (LENTA)
                        <div className="comp-label label-before" style={{ position: "absolute", bottom: "20px", left: "20px", padding: "5px 15px", borderRadius: "4px", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", background: "#222" }}>Antes</div>
                    </div>
                    <div className="comp-side comp-after" id="compAfter">
                        OPTIMIZADA POR M&C
                        <div className="comp-label label-after" style={{ position: "absolute", bottom: "20px", right: "20px", padding: "5px 15px", borderRadius: "4px", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", background: "#00D1FF", color: "#000" }}>Después</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="ab-test" className="section" style={{ padding: "120px 0" }}>
            <div className="container">
                <h2 className="section-title reveal" style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "60px", textAlign: "center" }}>El Poder del A/B Testing</h2>
                <div className="ab-container reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", background: "#111111", padding: "40px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="ab-side" style={{ padding: "30px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                        <h3 style={{ marginBottom: "15px" }}>Versión A (Control)</h3>
                        <div style={{ height: "150px", background: "#222", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button style={{ padding: "10px 20px", background: "#444", border: "none", color: "white" }}>Comprar</button>
                        </div>
                        <p style={{ fontFamily: "var(--font-mono)", color: "#666" }}>Tasa de Conversión: 2.1%</p>
                    </div>
                    <div className="ab-side winner" style={{ padding: "30px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", textAlign: "center", border: "1px solid #00FF94", position: "relative" }}>
                        <div className="winner-badge" style={{ position: "absolute", top: "-15px", right: "-15px", background: "#00FF94", color: "#000", padding: "5px 15px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 800 }}>GANADOR +320%</div>
                        <h3 style={{ marginBottom: "15px" }}>Versión B (M&C Engine)</h3>
                        <div style={{ height: "150px", background: "#222", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button style={{ padding: "12px 25px", background: "#00D1FF", border: "none", color: "#000", fontWeight: 800, boxShadow: "0 0 15px #00D1FF" }}>¡LO QUIERO!</button>
                        </div>
                        <p style={{ fontFamily: "var(--font-mono)", color: "#00FF94" }}>Tasa de Conversión: 8.8%</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="section" style={{ padding: "120px 0" }}>
            <div className="container">
                <h2 className="section-title reveal" style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "60px", textAlign: "center" }}>Empieza a Escalar</h2>
                <div className="form-box reveal" style={{ maxWidth: "600px", margin: "0 auto", background: "#111111", padding: "50px", borderRadius: "20px" }}>
                    <form id="speedForm" onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Tu Nombre" required style={{ width: "100%", padding: "15px", background: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", color: "white", marginBottom: "20px" }} />
                        <input type="url" placeholder="URL de tu Web Actual" required style={{ width: "100%", padding: "15px", background: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", color: "white", marginBottom: "20px" }} />
                        <select required style={{ width: "100%", padding: "15px", background: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", color: "white", marginBottom: "20px" }}>
                            <option value="">Objetivo Principal</option>
                            <option>Más Ventas</option>
                            <option>Menos Rebote</option>
                            <option>Mejor SEO</option>
                        </select>
                        <button type="submit" className="btn-speed" style={{ width: "100%" }}>Analizar mi Web Gratis</button>
                    </form>
                </div>
            </div>
        </section>

        <section className="return-section reveal" style={{ padding: "100px 0", textAlign: "center", background: "linear-gradient(to bottom, transparent, rgba(0, 209, 255, 0.05))" }}>
            <div className="container">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>¿Listo para transformar tu negocio?</h2>
                <p style={{ marginBottom: "50px", opacity: 0.7, maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                    Esta demo es solo una pequeña muestra de lo que nuestra ingeniería puede hacer por tu presencia digital.
                </p>
                <Link href="/#portfolio" className="btn-speed" style={{ borderRadius: "50px", display: "inline-flex", alignItems: "center", gap: "15px", background: "transparent", border: "1px solid #00D1FF", color: "#00D1FF" }}>
                    <span>← Volver a M&C Web Solutions</span>
                </Link>
            </div>
        </section>

        <footer style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", opacity: 0.6, fontSize: "0.9rem" }}>
            <div className="container">
                <p>Demo técnica de Optimización de Conversión por <Link href="/" style={{ color: "#00D1FF", textDecoration: "none" }}>M&C Web Solutions</Link>.</p>
            </div>
        </footer>

        {showSuccess && (
          <div id="successOverlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(5, 5, 5, 0.98)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, textAlign: "center" }}>
              <div className="success-content">
                  <h2 style={{ fontSize: "3.5rem", color: "#00FF94", marginBottom: "20px" }}>¡Análisis Iniciado!</h2>
                  <p>Hemos detectado 12 puntos de mejora crítica. Así es como tus leads verán tu eficiencia.</p>
                  <button onClick={() => setShowSuccess(false)} className="btn-speed" style={{ marginTop: "30px" }}>Cerrar Demo</button>
              </div>
          </div>
        )}
      </div>
    </>
  );
}
