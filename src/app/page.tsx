"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

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
          <h2 className="section-title">Demostración</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }}>
            Explora nuestras capacidades técnicas a través de proyectos reales optimizados.
          </p>
          <div className="portfolio-grid">
            <Link href="/demo-speed" className="portfolio-card" style={{ textDecoration: "none", display: "block" }}>
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
            <Link href="/demo-creative" className="portfolio-card" style={{ textDecoration: "none", display: "block" }}>
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
            <Link href="/demo-local" className="portfolio-card" style={{ textDecoration: "none", display: "block" }}>
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
            <Link href="/demo-premium" className="portfolio-card" style={{ textDecoration: "none", display: "block" }}>
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
      </motion.section>

      <motion.section 
        id="pricing" 
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Transparencia Total</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
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
            <div className="pricing-card featured">
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
          <div style={{ textAlign: "center", marginTop: "4rem", marginBottom: "4rem" }}>
            <div style={{ display: "inline-block", padding: "1.5rem 2.5rem", background: "rgba(100, 255, 218, 0.1)", borderRadius: "50px", border: "1px solid var(--accent)" }}>
              <p className="mono-text" style={{ color: "var(--accent)", margin: 0, fontSize: "1rem" }}>
                🎓 <strong>BECA M&C:</strong> ¿Compañero de la UEV o marca personal emergente? <br />
                Tenemos un descuento especial del <strong>20%</strong> para proyectos universitarios.
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
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">[COMMAND_PROMPT: BRIEFING_INIT_V.01]</div>
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
                    <span className="terminal-prompt">[INPUT_USER] &gt; PACKAGE:</span>
                    <select name="paquete" defaultValue="emprendedor" className="terminal-input" style={{ cursor: 'pointer' }}>
                      <option value="emprendedor">Pack Emprendedor (100€)</option>
                      <option value="profesional">Pack Profesional (250€)</option>
                      <option value="beca-uev">Beca M&C (Descuento Colega)</option>
                    </select>
                  </div>

                  <div className="terminal-row" style={{ flexDirection: 'column', gap: '10px' }}>
                    <span className="terminal-prompt">[INPUT_USER] &gt; PROJECT_DESCRIPTION:</span>
                    <textarea name="descripcion" rows={4} required placeholder="_abstract_of_your_vision..." className="terminal-input" style={{ resize: 'none' }}></textarea>
                  </div>

                  <div style={{ margin: "2rem 0", padding: "1.5rem", border: "1px dashed rgba(100, 255, 218, 0.2)", borderRadius: "4px" }}>
                    <p className="mono-text" style={{ fontSize: "0.75rem", color: "rgba(100, 255, 218, 0.6)", marginBottom: "10px" }}>[SYSTEM] &gt; ENCRYPTION_ENABLED</p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>
                      Please transmit all high-resolution visual assets to <a href="mailto:mandcwebsolutions@gmail.com" style={{ color: "var(--accent)" }}>mandcwebsolutions@gmail.com</a> post-initialization.
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
                  <div className="terminal-title" style={{ marginBottom: '1.5rem', color: '#64FFDA' }}>[SYSTEM_REPORT: SUCCESS]</div>
                  
                  <div className="success-progress-container">
                    <span className="success-progress-text">INITIALIZING_DECRYPTION_PROTOCOL... 100%</span>
                    <div className="success-progress-bar-wrapper">
                      <div className="success-progress-fill"></div>
                    </div>
                  </div>

                  <div className="success-terminal-log" style={{ animationDelay: '0.2s' }}>
                    &gt; DATA_PACKET_SENT: TARGET_M&amp;C_SERVERS
                  </div>
                  <div className="success-terminal-log" style={{ animationDelay: '0.4s' }}>
                    &gt; ENCRYPTION_KEY: VERIFIED
                  </div>
                  <div className="success-terminal-log" style={{ animationDelay: '0.6s' }}>
                    &gt; STATUS: CONNECTION_ESTABLISHED. WE WILL CONTACT YOU SHORTLY.<span className="terminal-cursor"></span>
                  </div>

                  <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="mono-text" 
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', opacity: 0.6 }}
                    >
                      RETURN_TO_TERMINAL_INPUT
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
