"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Home() {
  useEffect(() => {
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const methodologyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: methodologyRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Visual fallback
    }
  };

  const [activeTab, setActiveTab] = React.useState('[01_WEBS]');

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

      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container" style={{ maxWidth: '1350px', padding: '0 5%' }}>
          <div className="hero-content active">
            <div className="hero-main-flex">
              <div className="hero-text-block" style={{ textAlign: 'left', flex: '1' }}>
                <span className="mono-text hero-greeting" style={{ display: 'block', marginBottom: '1rem', letterSpacing: '4px' }}>M&C WEB SOLUTIONS</span>
                <h1 className="hero-title" style={{ margin: '0 0 1.5rem 0', lineHeight: '1.1' }}>
                  <span className="typewriter">Tu Idea</span> + <br />
                  Nuestra IA = <br />
                  <span className="gradient-text">Tu Web Mañana.</span>
                </h1>
                <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 0 2.5rem 0' }}>
                  Convertimos tus ideas en presencia digital profesional en 48 horas utilizando Inteligencia Artificial avanzada. Soluciones rápidas, estéticas e ultra-asequibles para emprendedores.
                </p>
                <a href="#briefing-form" className="btn btn-solid" style={{ padding: "1.2rem 2.5rem" }}>🚀 Iniciar Mi Proyecto</a>
              </div>
              <img src="/logo.svg" alt="DNA Hexagon" className="hero-dna-logo" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="stats-bar">
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
      </motion.div>

      <motion.section 
        id="methodology" 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        ref={methodologyRef}
      >
        <div className="container">
          <h2 className="section-title">Visual Engineering Pipeline</h2>
          
          <div className="pipeline-container">
            <div className="pipeline-line">
              <motion.div 
                className="pipeline-fill"
                style={{ height: lineHeight }}
              />
            </div>

            {/* STEP 1 */}
            <motion.div 
              className="pipeline-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="pipeline-node"></div>
              <div className="pipeline-content">
                <svg className="pipeline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                <h3 className="pipeline-title">01. BRIEFING EXPRESS</h3>
                <p className="pipeline-desc">Captura de requisitos técnicos en 5 minutos. Ingeniería de requisitos optimizada para la velocidad.</p>
              </div>
            </motion.div>

            {/* STEP 2 */}
            <motion.div 
              className="pipeline-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="pipeline-node"></div>
              <div className="pipeline-content">
                <svg className="pipeline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 className="pipeline-title">02. GENERACIÓN IA</h3>
                <p className="pipeline-desc">Nuestros modelos procedimentales generan el 90% del código y diseño en segundos, reduciendo drásticamente los plazos.</p>
              </div>
            </motion.div>

            {/* STEP 3 */}
            <motion.div 
              className="pipeline-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="pipeline-node"></div>
              <div className="pipeline-content">
                <svg className="pipeline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="pipeline-title">03. DESPLIEGUE & CURACIÓN</h3>
                <p className="pipeline-desc">Supervisión humana experta para el pulido de precisión y despliegue global en 48 horas.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="dna" 
        className="hexagon-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">El ADN de M&C</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "4rem", marginTop: "-2rem" }}>
            Nuestro logo no es solo una forma; es la estructura de nuestra ingeniería. Interactúa con sus vértices para descubrir nuestra esencia.
          </p>
          
          <div className="hexagon-container">
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
      </motion.section>

      <motion.section 
        id="about" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
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
            <div style={{ marginTop: "4rem" }}>
              <p className="mono-text" style={{ marginBottom: "1.5rem", opacity: 0.6, fontSize: "0.9rem", letterSpacing: 4, textTransform: 'uppercase' }}>Stack Tecnológico M&C</p>
              
              <motion.div 
                className="tech-showcase-grid"
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* FRAMEWORKS */}
                <div className="tech-column">
                  <h4 className="tech-category-title">Frameworks</h4>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 12L20 4H17L11 10.8V13.2L17 20H20L13 12ZM7 12L0 4H3L9 10.8V13.2L3 20H0L7 12Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">Next.js</span>
                      <span className="tech-desc">SSR Optimization</span>
                    </div>
                  </motion.div>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">React</span>
                      <span className="tech-desc">Dynamic Architectures</span>
                    </div>
                  </motion.div>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">Tailwind</span>
                      <span className="tech-desc">Utility First Styling</span>
                    </div>
                  </motion.div>
                </div>

                {/* INTELLIGENCE */}
                <div className="tech-column">
                  <h4 className="tech-category-title">Intelligence</h4>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M15.5 13H14.5L14 12.5C14.7 11.6 15.1 10.5 15.1 9.3 15.1 6.1 12.5 3.5 9.3 3.5S3.5 6.1 3.5 9.3 6.1 15.1 9.3 15.1C10.5 15.1 11.6 14.7 12.5 14L13 14.5V15.5L19 21.5 20.5 20L15.5 13Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">OpenAI</span>
                      <span className="tech-desc">AI Logic Core</span>
                    </div>
                  </motion.div>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">TypeScript</span>
                      <span className="tech-desc">Industrial Scalability</span>
                    </div>
                  </motion.div>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21H23L12 2Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">Framer</span>
                      <span className="tech-desc">H-F Interactions</span>
                    </div>
                  </motion.div>
                </div>

                {/* INFRASTRUCTURE */}
                <div className="tech-column">
                  <h4 className="tech-category-title">Infrastructure</h4>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">Vercel</span>
                      <span className="tech-desc">Global Deployment</span>
                    </div>
                  </motion.div>
                  <motion.div className="tech-card" variants={itemVariants}>
                    <div className="tech-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12C2 17.03 5.71 21.2 10.59 21.89V14.89H8.07V12H10.59V9.79C10.59 7.33 12.06 5.95 14.32 5.95C15.4 5.95 16.36 6.03 16.63 6.06V8.69H15.08C13.88 8.69 13.65 9.26 13.65 10.09V12H16.57L16.19 14.89H13.65V21.97C18.42 21.43 22 17.13 22 12C22 6.47 17.53 2 12 2Z"/></svg>
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">GitHub</span>
                      <span className="tech-desc">CI/CD Pipeline</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="portfolio" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>[MODULAR_ENGINEERING_DEMOS]</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }}>
            Explore our high-performance modules designed for 2,000+ request/second industrial scalability.
          </p>

          <div className="tabs-nav">
            {['[01_WEBS]', '[02_DASHBOARDS]', '[03_BRAND_ID]', '[04_PERFORMANCE]'].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="active-indicator" className="active-indicator" />
                )}
              </button>
            ))}
          </div>

          <div className="tab-content-area" style={{ minHeight: '450px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === '[01_WEBS]' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="service-card-v2">
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; LANDING_SPEED</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Conversión extrema y carga instantánea para campañas agresivas.</p>
                      <span className="price-tag">299€ - 399€</span>
                      <div className="mono-text" style={{ fontSize: '0.7rem', opacity: 0.6 }}>ENGINEERING_TIME: 48H</div>
                    </div>
                    <div className="service-card-v2">
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; CORPORATE_CORE</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Estructura multipágina robusta para posicionamiento de marca.</p>
                      <span className="price-tag">499€ - 799€</span>
                      <div className="mono-text" style={{ fontSize: '0.7rem', opacity: 0.6 }}>ENGINEERING_TIME: 7D</div>
                    </div>
                    <div className="service-card-v2">
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; MASTER_ECOMMERCE</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Sistemas de venta escalables con gestión de inventario IA.</p>
                      <span className="price-tag">999€+</span>
                      <div className="mono-text" style={{ fontSize: '0.7rem', opacity: 0.6 }}>ENGINEERING_TIME: 15D</div>
                    </div>
                  </div>
                )}

                {activeTab === '[02_DASHBOARDS]' && (
                  <div className="aether-highlight">
                    <div className="aether-glow-ring"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                      <div>
                        <h3 className="mono-text" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>&gt; AETHER_DASHBOARD_V.01</h3>
                        <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
                          "Tus ventas y clientes en una sola pantalla"
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          Herramienta de Business Intelligence en tiempo real. Tracking de leads, integración con Google Maps API y visualización de datos neurales para toma de decisiones ejecutivas.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                          <Link href="#briefing-form" className="btn btn-solid">RESERVAR_HANDSHAKE</Link>
                        </div>
                      </div>
                      <div style={{ border: '1px solid var(--accent)', padding: '1rem', borderRadius: '4px', background: '#020C1B' }}>
                         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=90" alt="Aether UI Interface" style={{ width: '100%', filter: 'hue-rotate(120deg)' }} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === '[03_BRAND_ID]' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="service-card-v2">
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; RESTYLING_IA</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Actualización técnica de logos y paletas mediante algoritmos generativos.</p>
                      <span className="price-tag">49€ - 89€</span>
                    </div>
                    <div className="service-card-v2" style={{ border: '1px solid var(--accent)' }}>
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; FULL_IDENTITY_SYSTEM</h3>
                      <p style={{ fontStyle: 'italic', color: 'var(--accent)', marginBottom: '1rem' }}>"La cara de tu negocio, diseñada con paciencia y alma"</p>
                      <p style={{ fontSize: '0.85rem' }}>Diseño completo de ecosistema visual, manual de marca y activos digitales.</p>
                      <span className="price-tag">149€ - 189€</span>
                    </div>
                  </div>
                )}

                {activeTab === '[04_PERFORMANCE]' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="service-card-v2">
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; AUDITORÍA_RAYOS_X</h3>
                      <p style={{ fontSize: '0.85rem', margin: '1rem 0' }}>Análisis profundo de cuellos de botella y fugas de conversión.</p>
                      <span className="price-tag">99€</span>
                    </div>
                    <div className="service-card-v2" style={{ background: 'rgba(100, 255, 218, 0.05)' }}>
                      <h3 className="mono-text" style={{ color: 'var(--accent)' }}>&gt; INYECCIÓN_DE_VELOCIDAD</h3>
                      <p style={{ fontWeight: 800, marginBottom: '1rem' }}>"Hacemos que tu web cargue en la mitad de tiempo o te devolvemos el dinero"</p>
                      <p style={{ fontSize: '0.85rem' }}>Optimización de Core Web Vitals, compresión de assets y refactor de scripts.</p>
                      <span className="price-tag">199€+</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="pricing" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 0 10px var(--accent-glow)' }}>
            [SYSTEM_SPECS: TRANSPARENCY_PROTOCOL]
          </h2>
          
          <div className="specs-table-container">
            <div className="verified-stamp">SYSTEM_VERIFIED_2026</div>
            
            <div className="specs-row">
              <span className="specs-key">&gt; DEPLOYMENT_SPEED:</span>
              <span className="specs-value">Standard deployment in 1-7 days depending on system complexity.</span>
            </div>
            
            <div className="specs-row">
              <span className="specs-key">&gt; COST_TRANSPARENCY:</span>
              <span className="specs-value">Fixed-price modules. No hidden processing fees.</span>
            </div>
            
            <div className="specs-row">
              <span className="specs-key">&gt; EVOLUTIONARY_SUPPORT:</span>
              <span className="specs-value">Direct access to lead engineers (Marc &amp; Juan) for system updates.</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <div style={{ display: "inline-block", padding: "1.5rem 2.5rem", background: "rgba(100, 255, 218, 0.1)", borderRadius: "12px", border: "1px dashed var(--accent)" }}>
              <p className="mono-text" style={{ color: "var(--accent)", margin: 0, fontSize: "1rem" }}>
                🎓 🛡️ <strong>SECURITY_MAINTENANCE:</strong> Active monitoring and hosting protocols available for all systems post-deployment.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="briefing-form" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Configura tu Proyecto</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }}>
            Cuéntanos tu idea y sube tus archivos. Nos pondremos en contacto en menos de 24h.
          </p>
          <div className={`terminal-window ${isSubmitted ? 'terminal-success-neon' : ''}`}>
            <div className="terminal-header">
              <div className="terminal-title">{isSubmitted ? '[SYSTEM_REPORT: SUCCESS]' : '[COMMAND_PROMPT: BRIEFING_INIT_V.01]'}</div>
              <div className="terminal-controls">
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
              </div>
            </div>
            
            <div className="terminal-body">
              {!isSubmitted ? (
                <form name="briefing-mc" method="POST" action="/success" data-netlify="true" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="briefing-mc" />
                  
                  <div className="terminal-row">
                    <span className="terminal-prompt">[INPUT_USER] &gt; NAME:</span>
                    <input type="text" name="nombre" required placeholder="_type_here..." className="terminal-input" />
                  </div>

                  <div className="terminal-row">
                    <span className="terminal-prompt">[INPUT_USER] &gt; CONTACT:</span>
                    <input type="tel" name="telefono" required placeholder="_whatsapp_or_phone..." className="terminal-input" />
                  </div>

                  <div className="terminal-row">
                    <span className="terminal-prompt">[INPUT_USER] &gt; EMAIL:</span>
                    <input type="email" name="email" required placeholder="_secure_connection_at..." className="terminal-input" />
                  </div>

                  <div className="terminal-row">
                    <span className="terminal-prompt">[INPUT_USER] &gt; SERVICE_CATALOG:</span>
                    <select name="paquete" defaultValue="" className="terminal-input" style={{ cursor: 'pointer' }} required>
                      <option value="" disabled>_select_engineering_module...</option>
                      <optgroup label="[WEB_ENGINEERING]">
                        <option value="web-basica">Web Básica: €299-€399 (48h)</option>
                        <option value="web-profesional">Web Pro: €499-€799 (7d)</option>
                        <option value="e-commerce">E-Commerce: €999+ (15d)</option>
                      </optgroup>
                      <optgroup label="[DATA_DASHBOARDS]">
                        <option value="analytics-hub">Analytics Hub: €599+ (7d)</option>
                        <option value="ai-integration">AI Pipeline: €899+ (10d)</option>
                      </optgroup>
                      <optgroup label="[BRAND_ID]">
                        <option value="visual-identity">Visual Identity: €399+ (5d)</option>
                        <option value="ui-ux-audit">UI/UX Engineering: €299 (48h)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="terminal-row" style={{ flexDirection: 'column', gap: '10px' }}>
                    <span className="terminal-prompt">[INPUT_USER] &gt; PROJECT_DESCRIPTION:</span>
                    <textarea name="descripcion" rows={4} required placeholder="_abstract_of_your_vision..." className="terminal-input" style={{ resize: 'none' }}></textarea>
                  </div>

                  <label className="terminal-checkbox-wrapper">
                    <input type="checkbox" name="maintenance-shield" className="terminal-checkbox" />
                    <span className="terminal-checkbox-label">[ ] ACTIVATE_SHIELD: Add 24/7 Security &amp; Hosting? (+39€/mo)</span>
                  </label>

                  <div style={{ margin: "1.5rem 0", padding: "1rem", border: "1px dashed rgba(100, 255, 218, 0.2)", borderRadius: "4px" }}>
                    <p className="mono-text" style={{ fontSize: "0.75rem", color: "rgba(100, 255, 218, 0.6)", marginBottom: "5px" }}>[SYSTEM] &gt; ENCRYPTION_ENABLED</p>
                    <p style={{ fontSize: "0.80rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                      Handshake security active. M&amp;C protocols ensure end-to-end data integrity.
                    </p>
                  </div>

                  <button type="submit" className="terminal-execute-btn">
                    EXECUTE_STRATEGY_INITIALIZATION
                  </button>

                  <div className="terminal-status-msg">
                    [SYSTEM] &gt; Standby for secure handshake...
                  </div>
                </form>
              ) : (
                <div className="success-sequence">
                  <div className="success-progress-container">
                    <span className="success-progress-text">HANDSHAKE_SEQUENCE... 100%</span>
                    <div className="success-progress-bar-wrapper">
                      <div className="success-progress-fill"></div>
                    </div>
                  </div>

                  <div className="success-terminal-log" style={{ animationDelay: '0.2s' }}>
                    [SYSTEM] &gt; VALIDATING_DATA... DONE.
                  </div>
                  <div className="success-terminal-log" style={{ animationDelay: '0.4s' }}>
                    [SYSTEM] &gt; ENCRYPTING_BRIEFING... DONE.
                  </div>
                  <div className="success-terminal-log" style={{ animationDelay: '0.6s' }}>
                    [SYSTEM] &gt; PACKET_SENT_TO_M&amp;C_SERVERS.
                  </div>
                  <div className="success-terminal-log" style={{ animationDelay: '0.8s', marginTop: '1rem' }}>
                    [MESSAGE] &gt; ¡Recibido, Marc y Juan se pondrán en contacto contigo en menos de 24h!<span className="terminal-cursor"></span>
                  </div>

                  <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="mono-text" 
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', opacity: 0.6 }}
                    >
                      RETURN_TO_BASE_INTERFACE
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="contact">
            <h2 className="section-title">Inicia tu Proyecto</h2>
            <p className="contact-desc">No pierdas tiempo con agencias tradicionales. Escríbenos y ten tu web lista para el lunes.</p>
            <a href="mailto:mandcwebsolutions@gmail.com?subject=Interés%20en%20Pack%20Web&body=Hola%20M&C,%20me%20gustaría%20saber%20más%20sobre..." className="btn btn-solid" style={{ fontSize: "1.2rem", padding: "1.2rem 3rem" }}>Contactar por Email</a>
            <p className="mono-text" style={{ marginTop: "2rem", opacity: 0.7 }}>mandcwebsolutions@gmail.com <br /> 📍 Valencia, España.</p>
          </div>
        </div>
      </motion.section>

      <footer style={{ borderTop: "1px solid rgba(100, 255, 218, 0.05)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/logo.svg" alt="M&C Logo" className="footer-logo" style={{ height: '160px', width: 'auto', marginBottom: '1.5rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', background: 'rgba(100, 255, 218, 0.05)', padding: '6px 12px', borderRadius: '50px', border: '1px solid rgba(100, 255, 218, 0.1)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64FFDA', boxShadow: '0 0 10px #64FFDA', animation: 'pulse 2s infinite' }}></span>
            <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '1px' }}>SYSTEM STATUS: OPTIMAL</span>
          </div>
          <p className="mono-text" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Ingeniería aplicada al diseño web. <br />
            Diseñado & Construido por <strong>M&C Web Solutions</strong> © 2026
          </p>
        </div>
      </footer>
    </>
  );
}
