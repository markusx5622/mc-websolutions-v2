"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Animation logic
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load

    // Header Scroll Effect
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
          header.style.padding = "1rem 0";
        } else {
          header.style.boxShadow = "none";
          header.style.padding = "1.5rem 0";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Typewriter Effect
    const textStr = "Tu Idea";
    const el = document.querySelector('.typewriter');
    if (el) {
      let i = 0;
      el.textContent = '';
      const typeWriter = () => {
        if (i < textStr.length) {
          el.textContent += textStr.charAt(i);
          i++;
          setTimeout(typeWriter, 150);
        }
      };
      setTimeout(typeWriter, 500);
    }

    // Hexagon Interaction Logic
    const points = document.querySelectorAll('.hexagon-point');
    const hexTitle = document.getElementById('hex-title');
    const hexDesc = document.getElementById('hex-desc');
    
    if (hexTitle && hexDesc) {
      hexTitle.style.transition = 'opacity 0.3s ease';
      hexDesc.style.transition = 'opacity 0.3s ease';
    }

    const handleMouseEnter = (e: Event) => {
      const point = e.currentTarget as HTMLElement;
      points.forEach(p => p.classList.remove('active'));
      point.classList.add('active');
      
      if (hexTitle && hexDesc) {
        hexTitle.style.opacity = '0';
        hexDesc.style.opacity = '0';
        
        setTimeout(() => {
          hexTitle.innerText = point.getAttribute('data-title') || '';
          hexDesc.innerText = point.getAttribute('data-desc') || '';
          hexTitle.style.opacity = '1';
          hexDesc.style.opacity = '1';
        }, 200);
      }
    };

    points.forEach(point => {
      point.addEventListener('mouseenter', handleMouseEnter);
    });

    // Re-initialize particles on client-side navigation
    if ((window as any).particlesJS) {
      initParticles();
    }

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", handleScroll);
      points.forEach(point => point.removeEventListener('mouseenter', handleMouseEnter));
    };
  }, []);

  const initParticles = () => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || "#64FFDA";
      (window as any).particlesJS("particles-js", {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": accentColor },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.35, "random": false },
          "size": { "value": 3, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": accentColor, "opacity": 0.2, "width": 1 },
          "move": { "enable": true, "speed": 1.2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
          "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
        },
        "retina_detect": true
      });
    }
  };

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
        onLoad={initParticles}
      />
      
      <div id="particles-js" suppressHydrationWarning></div>

      <header id="header">
        <div className="container header-content">
          <Link href="/" className="brand-wrapper">
            <img src="/logo.svg" alt="M&C Logo" className="brand-logo-img" />
            <div className="brand-info">
              <span className="brand-name">M&C<span style={{ color: "var(--accent)" }}>.</span></span>
              <span className="brand-tagline">Web Solutions</span>
            </div>
          </Link>
          <a href="#contact" className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>Empieza ya</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content reveal active" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px', textAlign: 'center' }}>
            <div className="hero-branding-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
              <div className="md-flex-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
                <img src="/logo.svg" alt="DNA Hexagon" className="hero-dna-logo" />
                <div className="hero-text-container" style={{ textAlign: 'center' }}>
                  <span className="mono-text hero-greeting" style={{ display: 'block', marginBottom: '1rem', letterSpacing: '4px' }}>M&C WEB SOLUTIONS</span>
                  <h1 className="hero-title" style={{ margin: 0 }}>
                    <span className="typewriter">Tu Idea</span> + <br />
                    Nuestra IA = <br />
                    <span className="gradient-text">Tu Web Mañana.</span>
                  </h1>
                </div>
              </div>
              <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                Convertimos tus ideas en presencia digital profesional en 48 horas utilizando Inteligencia Artificial avanzada. Soluciones rápidas, estéticas e ultra-asequibles para emprendedores.
              </p>
              <a href="#briefing-form" className="btn btn-solid" style={{ padding: "1.2rem 2.5rem" }}>🚀 Iniciar Mi Proyecto</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats-bar reveal">
          <div style={{ textAlign: "center" }}>
            <span className="stat-number">48h</span>
            <span className="stat-label">Tiempo Medio de Entrega</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-number">100%</span>
            <span className="stat-label">Optimización Responsive</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-number">0€</span>
            <span className="stat-label">Coste de Mantenimiento</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-number">IA+</span>
            <span className="stat-label">Tecnología de Vanguardia</span>
          </div>
        </div>
      </div>

      <section id="methodology" className="section">
        <div className="container">
          <h2 className="section-title reveal">Nuestra Metodología</h2>
          <div className="steps-grid">
            <div className="step-card reveal">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              <h3 className="step-title">1. Briefing Express</h3>
              <p className="step-desc">Completa un formulario estructurado de 5 minutos. Extraemos la esencia de tu negocio con precisión de ingeniería.</p>
            </div>
            <div className="step-card reveal">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <h3 className="step-title">2. Generación IA</h3>
              <p className="step-desc">Nuestros modelos de IA procesan tus datos para generar una estructura, copy y diseño base altamente optimizados.</p>
            </div>
            <div className="step-card reveal">
              <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <h3 className="step-title">3. Despliegue & Curación</h3>
              <p className="step-desc">Revisión humana experta. Ajustamos detalles visuales, optimizamos el rendimiento y lanzamos tu web al mundo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="dna" className="hexagon-section">
        <div className="container">
          <h2 className="section-title reveal">El ADN de M&C</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "4rem", marginTop: "-2rem" }} className="reveal">
            Nuestro logo no es solo una forma; es la estructura de nuestra ingeniería. Interactúa con sus vértices para descubrir nuestra esencia.
          </p>
          
          <div className="hexagon-container reveal">
            <div className="hexagon-bg-text">ENGINEERING</div>
            <div className="hexagon-wrapper">
              <svg className="main-hexagon" viewBox="0 0 100 100">
                <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" />
              </svg>
              <div className="hexagon-point p1 active" data-title="Precisión" data-desc="Como ingenieros, cada línea de código tiene un propósito. No dejamos nada al azar."></div>
              <span className="point-label l1">Precisión</span>
              <div className="hexagon-point p2" data-title="Velocidad" data-desc="Entregas en 48 horas reales. Optimizamos procesos para que tu negocio no espere."></div>
              <span className="point-label l2">Velocidad</span>
              <div className="hexagon-point p3" data-title="Innovación" data-desc="IA de vanguardia integrada en el flujo de trabajo para resultados imposibles hace un año."></div>
              <span className="point-label l3">Innovación</span>
              <div className="hexagon-point p4" data-title="Eficiencia" data-desc="Máximo valor con el mínimo desperdicio de recursos. Ingeniería de organización pura."></div>
              <span className="point-label l4">Eficiencia</span>
              <div className="hexagon-point p5" data-title="Estética" data-desc="Lo funcional debe ser bello. Diseño minimalista que potencia la experiencia de usuario."></div>
              <span className="point-label l5">Estética</span>
              <div className="hexagon-point p6" data-title="Escalabilidad" data-desc="Webs preparadas para crecer contigo. Código limpio y modular para el futuro."></div>
              <span className="point-label l6">Escalabilidad</span>
              <div className="hexagon-content">
                <h3 id="hex-title" className="hexagon-info-title">Precisión</h3>
                <p id="hex-desc" className="hexagon-info-desc">Como ingenieros, cada línea de código tiene un propósito. No dejamos nada al azar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h2 className="section-title">Ingeniería en cada Píxel</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              M&C Web Solutions nace en las aulas de la <span style={{ color: "var(--accent)", fontWeight: 600 }}>Universidad Europea de Valencia</span>. Como alumnos de Ingeniería en Organización Industrial, no solo diseñamos webs; optimizamos tu presencia digital para que sea eficiente, rápida y rentable.
            </p>
            <div style={{ background: "rgba(100, 255, 218, 0.05)", padding: "2.5rem", borderRadius: "12px", border: "1px dashed var(--accent)" }}>
              <p style={{ color: "var(--text-main)", lineHeight: 1.8 }}>
                <strong>¿Nuestra filosofía?</strong> Menos burocracia, más resultados. Utilizamos herramientas de IA de última generación para reducir costes y tiempos de entrega, sin perder el criterio técnico de un ingeniero. <br />
                <strong>Tu web en 48 horas. Sin excusas.</strong>
              </p>
            </div>
            <div style={{ marginTop: "4rem" }} className="reveal">
              <p className="mono-text" style={{ marginBottom: "2rem", opacity: 0.6, fontSize: "0.9rem", letterSpacing: 2 }}>STACK TECNOLÓGICO DE M&C:</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
                <div className="tech-badge"><span>⚡</span> HTML5 / CSS3</div>
                <div className="tech-badge"><span>🤖</span> Google AI Studio</div>
                <div className="tech-badge"><span>🚀</span> Vercel / Netlify</div>
                <div className="tech-badge"><span>📱</span> Mobile First Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title reveal">Demostración</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }} className="reveal">
            Explora nuestras capacidades técnicas a través de proyectos reales optimizados.
          </p>
          <div className="portfolio-grid">
            <Link href="/demo-speed" className="portfolio-card reveal" style={{ textDecoration: "none", display: "block" }}>
              <div className="browser-frame">
                <div className="dot"></div><div className="dot yellow"></div><div className="dot green"></div>
              </div>
              <div className="portfolio-item">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=90" alt="Landing Speed" className="portfolio-img" referrerPolicy="no-referrer" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">Landing "Speed"</h3>
                  <span className="mono-text">Optimización de Conversión</span>
                </div>
              </div>
            </Link>
            <Link href="/demo-creative" className="portfolio-card reveal" style={{ textDecoration: "none", display: "block" }}>
              <div className="browser-frame">
                <div className="dot"></div><div className="dot yellow"></div><div className="dot green"></div>
              </div>
              <div className="portfolio-item">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=90" alt="Portfolio Creativo" className="portfolio-img" referrerPolicy="no-referrer" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">Portfolio Creativo</h3>
                  <span className="mono-text">Fotógrafos / Diseñadores</span>
                </div>
              </div>
            </Link>
            <Link href="/demo-local" className="portfolio-card reveal" style={{ textDecoration: "none", display: "block" }}>
              <div className="browser-frame">
                <div className="dot"></div><div className="dot yellow"></div><div className="dot green"></div>
              </div>
              <div className="portfolio-item">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=90" alt="Negocio Local" className="portfolio-img" referrerPolicy="no-referrer" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">Negocio Local</h3>
                  <span className="mono-text">Cafeterías / Tiendas</span>
                </div>
              </div>
            </Link>
            <Link href="/demo-premium" className="portfolio-card reveal" style={{ textDecoration: "none", display: "block" }}>
              <div className="browser-frame">
                <div className="dot"></div><div className="dot yellow"></div><div className="dot green"></div>
              </div>
              <div className="portfolio-item">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=90" alt="Aura Wellness & Spa" className="portfolio-img" referrerPolicy="no-referrer" />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">Aura Wellness & Spa</h3>
                  <span className="mono-text">Proyecto Premium Real</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <h2 className="section-title reveal">Transparencia Total</h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <h3 className="pricing-title">Pack Emprendedor</h3>
              <div className="pricing-price">100€<span>/pago único</span></div>
              <ul className="pricing-features">
                <li>Landing Page (1 página)</li>
                <li>Diseño Responsive</li>
                <li>Copywriting generado por IA</li>
                <li>Formulario de Contacto</li>
                <li>Entrega en 48 horas</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ width: "100%" }}>Seleccionar</a>
            </div>
            <div className="pricing-card featured reveal">
              <h3 className="pricing-title">Pack Profesional</h3>
              <div className="pricing-price">250€<span>/pago único</span></div>
              <ul className="pricing-features">
                <li>Web Multi-página (hasta 4)</li>
                <li>Diseño Premium Personalizado</li>
                <li>Optimización SEO Básica</li>
                <li>Integración WhatsApp/Redes</li>
                <li>Entrega en 72 horas</li>
              </ul>
              <a href="#contact" className="btn btn-solid" style={{ width: "100%" }}>Seleccionar</a>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", padding: "1.5rem 2.5rem", background: "rgba(100, 255, 218, 0.1)", borderRadius: "50px", border: "1px solid var(--accent)" }}>
              <p className="mono-text" style={{ color: "var(--accent)", margin: 0, fontSize: "1rem" }}>
                🎓 <strong>BECA M&C:</strong> ¿Compañero de la UEV o marca personal emergente? <br />
                Tenemos un descuento especial del <strong>20%</strong> para proyectos universitarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="briefing-form" className="section">
        <div className="container">
          <h2 className="section-title reveal">Configura tu Proyecto</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }}>
            Cuéntanos tu idea y sube tus archivos. Nos pondremos en contacto en menos de 24h.
          </p>
          <form name="briefing-mc" method="POST" action="/success" data-netlify="true" style={{ maxWidth: "800px", margin: "0 auto", background: "var(--bg-color)", padding: "3rem", borderRadius: "12px", border: "1px solid rgba(100, 255, 218, 0.1)" }}>
            <input type="hidden" name="form-name" value="briefing-mc" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "25px" }}>
              <div className="form-group">
                <label style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", display: "block", marginBottom: "8px" }}>NOMBRE COMPLETO</label>
                <input type="text" name="nombre" required style={{ width: "100%", padding: "12px", background: "var(--bg-light)", border: "1px solid #233554", color: "white", borderRadius: "4px" }} />
              </div>
              <div className="form-group">
                <label style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", display: "block", marginBottom: "8px" }}>WHATSAPP / TELÉFONO</label>
                <input type="tel" name="telefono" required style={{ width: "100%", padding: "12px", background: "var(--bg-light)", border: "1px solid #233554", color: "white", borderRadius: "4px" }} />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: "25px" }}>
              <label style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", display: "block", marginBottom: "8px" }}>EMAIL DE CONTACTO</label>
              <input type="email" name="email" required style={{ width: "100%", padding: "12px", background: "var(--bg-light)", border: "1px solid #233554", color: "white", borderRadius: "4px" }} />
            </div>
            <div className="form-group" style={{ marginBottom: "25px" }}>
              <label style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", display: "block", marginBottom: "8px" }}>PAQUETE SELECCIONADO</label>
              <select name="paquete" defaultValue="emprendedor" style={{ width: "100%", padding: "12px", background: "var(--bg-light)", border: "1px solid #233554", color: "white", borderRadius: "4px" }}>
                <option value="emprendedor">Pack Emprendedor (100€)</option>
                <option value="profesional">Pack Profesional (250€)</option>
                <option value="beca-uev">Beca M&C (Descuento Colega)</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: "25px" }}>
              <label style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", display: "block", marginBottom: "8px" }}>CUÉNTANOS TU IDEA (DESCRIPCIÓN)</label>
              <textarea name="descripcion" rows={5} required placeholder="¿Qué quieres conseguir con tu web? ¿Qué secciones necesitas?" style={{ width: "100%", padding: "12px", background: "var(--bg-light)", border: "1px solid #233554", color: "white", borderRadius: "4px", resize: "none" }}></textarea>
            </div>
            <div className="form-group" style={{ marginBottom: "35px", border: "1px dashed var(--accent)", padding: "25px", borderRadius: "8px", textAlign: "center", background: "rgba(100, 255, 218, 0.02)" }}>
              <p className="mono-text" style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Envío de Recursos</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Para garantizar la máxima calidad visual, por favor envía tus recursos directamente a <a href="mailto:mandcwebsolutions@gmail.com" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>mandcwebsolutions@gmail.com</a> tras completar este formulario.
              </p>
            </div>
            <button type="submit" className="btn btn-solid" style={{ width: "100%", letterSpacing: "2px" }}>ENVIAR BRIEFING A M&C</button>
          </form>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact reveal">
            <h2 className="section-title">Inicia tu Proyecto</h2>
            <p className="contact-desc">No pierdas tiempo con agencias tradicionales. Escríbenos y ten tu web lista para el lunes.</p>
            <a href="mailto:mandcwebsolutions@gmail.com?subject=Interés%20en%20Pack%20Web&body=Hola%20M&C,%20me%20gustaría%20saber%20más%20sobre..." className="btn btn-solid" style={{ fontSize: "1.2rem", padding: "1.2rem 3rem" }}>Contactar por Email</a>
            <p className="mono-text" style={{ marginTop: "2rem", opacity: 0.7 }}>mandcwebsolutions@gmail.com <br /> 📍 Valencia, España.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/logo.svg" alt="M&C Logo" className="footer-logo" style={{ height: '160px', width: 'auto', marginBottom: '1.5rem' }} />
          <p className="mono-text" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Ingeniería aplicada al diseño web. <br />
            Diseñado & Construido por <strong>M&C Web Solutions</strong> © 2026
          </p>
        </div>
      </footer>
    </>
  );
}
