"use client";

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

function SpeedAuditWidget() {
  const [status, setStatus] = React.useState('idle');
  const [progress, setProgress] = React.useState(0);

  const startAudit = () => {
    setStatus('scanning');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('results');
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="aether-highlight" style={{ minHeight: '300px' }}>
      <div className="flex flex-col items-center">
        {status === 'idle' && (
           <div className="text-center">
             <h3 className="mono-text" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>&gt; X-RAY_SPEED_ANALYZER</h3>
             <button onClick={startAudit} className="terminal-execute-btn" style={{ padding: '1rem 3rem' }}>
                EXECUTE_X-RAY_AUDIT
             </button>
             <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
               Hacemos que tu web cargue en la mitad de tiempo o te devolvemos el dinero.
             </p>
           </div>
        )}

        {status === 'scanning' && (
          <div className="w-full max-w-lg text-center relative py-12">
            <div className="scan-line"></div>
            <h3 className="mono-text" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>ANALYZING_CORE_WEB_VITALS...</h3>
            <div className="progress-bar-container">
              <div className="progress-bar-fill-active" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="mono-text" style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--accent)' }}>PROGRESS: {progress}%</p>
          </div>
        )}

        {status === 'results' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center"
          >
            <h3 className="mono-text" style={{ color: 'var(--accent)', marginBottom: '3rem' }}>AUDIT_REPORT_V.01: HANDSHAKE_SECURITY_READY</h3>
            
            <div className="flex justify-center gap-12 flex-wrap items-center">
              <div className="result-before text-center">
                <div className="score-circle" style={{ color: '#ff4d4d', margin: '0 auto 1rem' }}>42</div>
                <p className="mono-text" style={{ fontSize: '0.7rem' }}>BEFORE_OPTIMIZATION</p>
              </div>

              <div className="mono-text" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>➤</div>

              <div className="result-after text-center">
                <div className="score-circle" style={{ color: 'var(--accent)', margin: '0 auto 1rem', boxShadow: '0 0 10px var(--accent-glow)' }}>100</div>
                <p className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>AFTER_M&amp;C_ENGINEERING</p>
              </div>
            </div>

            <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>OPTIMIZATION_DELTA: +138% PERFORMANCE_GAIN</p>
            
            <button onClick={() => setStatus('idle')} className="mono-text" style={{ marginTop: '2rem', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline', opacity: 0.6 }}>
               RESTART_AUDIT
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const MODULAR_ENGINEERING_DEMOS = [
  {
    title: "Landing de marketing",
    subtitle: "Web de una página · Máxima conversión",
    description: "Web de una página diseñada para maximizar conversiones en campañas de publicidad.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "/demo-speed"
  },
  {
    title: "Web B2B / Industria",
    subtitle: "Empresas · Catálogo de productos",
    description: "Web para empresas con catálogo de productos, logística y formulario de contacto profesional.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    link: "/demo-creative"
  },
  {
    title: "Negocio local",
    subtitle: "Cafeterías y comercios · SEO local",
    description: "Web para cafeterías y comercios de barrio con posicionamiento en Google Maps y SEO local.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    link: "/demo-local"
  },
  {
    title: "Centro de bienestar",
    subtitle: "Spas · Yoga · Salud",
    description: "Web premium para spas, centros de yoga y bienestar con reservas online y diseño exclusivo.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    link: "/demo-premium"
  },
  {
    title: "Moda / Atelier",
    subtitle: "Moda · Diseño · Gestión de citas",
    description: "Web para moda y diseño con catálogo de colecciones y sistema de gestión de citas.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop&v=1",
    link: "/demo-sastre"
  },
  {
    title: "Club deportivo",
    subtitle: "Clubes de pádel · Reservas online",
    description: "Web para clubes de pádel con reserva de pistas online, estadísticas y comunidad deportiva.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800",
    link: "/demo-padel"
  }
];

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

    // Typewriter Effect (Consolidated to prevent text duplication)
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


  const methodologyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: methodologyRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('[01_WEBS]');

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
                <a href="/briefing" className="btn btn-solid" style={{ padding: "1.2rem 2.5rem" }}>🚀 Iniciar Mi Proyecto</a>
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
            <span className="stat-label">Sin cuotas obligatorias</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="stat-number">IA+</span>
            <span className="stat-label">Tecnología de última generación</span>
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
          <h2 className="section-title">Nuestra Metodología de Trabajo</h2>
          
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
            <h2 className="section-title">¿Quiénes somos?</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              M&C Web Solutions nace en las aulas de la <span style={{ color: "var(--accent)", fontWeight: 600 }}>Universidad Europea de Valencia</span>. Somos ingenieros especializados en diseño web que combinamos tecnología, estética y velocidad para darte la web que tu negocio merece.
            </p>
            <div style={{ background: "rgba(100, 255, 218, 0.05)", padding: "2.5rem", borderRadius: "12px", border: "1px dashed var(--accent)" }}>
              <p style={{ color: "var(--text-main)", lineHeight: 1.8 }}>
                Usamos las mismas tecnologías que <strong>Netflix, Uber y Airbnb</strong>. Tu web será rápida, segura, moderna y siempre visible en Google. <br />
                <strong style={{ color: "var(--accent)" }}>Tu web en 48 horas. Sin sorpresas de precio.</strong>
              </p>
            </div>
            <div style={{ marginTop: "4rem" }}>
              <p className="mono-text" style={{ marginBottom: "1.5rem", opacity: 0.6, fontSize: "0.9rem", letterSpacing: 4, textTransform: 'uppercase' }}>Tecnología que usamos</p>
              
              <div className="tech-card" style={{ justifyContent: 'center', textAlign: 'center', padding: '2rem', flexDirection: 'column', gap: '1rem' }}>
                <div className="flex gap-6 justify-center flex-wrap" style={{ fontSize: '2rem' }}>
                  <span title="Next.js">⚛️</span>
                  <span title="React">🔷</span>
                  <span title="Vercel">▲</span>
                  <span title="TypeScript">🛡️</span>
                  <span title="OpenAI">🤖</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                  Usamos las mismas tecnologías que <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Netflix, Uber y Airbnb</span>.
                  Tu web será rápida, segura y moderna.
                </p>
              </div>
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
          <h2 className="section-title" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>[NUESTRO_PORTFOLIO]</h2>
          <p style={{ textAlign: "center", color: "var(--text-muted)", marginBottom: "3rem", marginTop: "-2rem" }}>
            Explora nuestros proyectos de alto rendimiento diseñados para máxima escalabilidad y conversión.
          </p>

          <div className="tabs-nav">
            {['[01_WEBS]', '[02_PLATAFORMAS]', '[03_IDENTIDAD]', '[04_RENDIMIENTO]'].map((tab) => (
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
                  <div>
                    <div className="mono-text" style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                      &gt; SISTEMA_ACTIVO: Desplegando patrones de alta conversión. Cada proyecto está optimizado para SEO y máxima velocidad.
                    </div>
                    <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                      {MODULAR_ENGINEERING_DEMOS.map((demo, idx) => (
                        <div key={idx} className="portfolio-card demo-isolate group" style={{ background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid rgba(100, 255, 218, 0.1)', overflow: 'hidden', position: 'relative' }}>
                          <div className="browser-frame" style={{ background: '#111', padding: '10px', display: 'flex', gap: '5px', borderBottom: '1px solid #222' }}>
                            <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div className="dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                          </div>
                          <div className="portfolio-item transform-gpu relative w-full h-full min-h-[250px] overflow-hidden">
                            {idx === 5 ? (
                              <img 
                                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800" 
                                alt="Club deportivo - Reserva de pistas de pádel" 
                                style={{ 
                                  opacity: 1, 
                                  visibility: 'visible', 
                                  display: 'block', 
                                  position: 'absolute', 
                                  inset: 0, 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: 'cover', 
                                  zIndex: 1 
                                }} 
                              />
                            ) : (
                              <img 
                                src={demo.image} 
                                alt={demo.title} 
                                className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 visible grayscale group-hover:grayscale-0 transition-all duration-500" 
                              />
                            )}
                            <div 
                              className={`portfolio-overlay absolute inset-0 bg-black/${idx === 5 ? '40' : '60'} opacity-100 flex flex-col justify-center items-center p-6 text-center transform translate-y-0 group-hover:bg-black/40 transition-all`} 
                              style={{ zIndex: 2 }}
                            >
                              <h3 className="portfolio-title text-xl font-bold mb-2 uppercase">{demo.title}</h3>
                              <span className="mono-text text-accent text-xs mb-4">{demo.subtitle}</span>
                              <p className="text-sm text-zinc-400 mb-6 max-w-[250px]">{demo.description}</p>
                              <a href={demo.link} target="_blank" className="btn btn-primary transform-gpu" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>[VER_PROYECTO]</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === '[02_PLATAFORMAS]' && (
                  <div className="aether-highlight">
                    <div className="aether-glow-ring"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                      <div className="dashboard-sim-left">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="pulse-dot"></div>
                           <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>LIVE_HANDSHAKE: ACTIVE</span>
                        </div>
                        <a href="https://aether-insights.vercel.app/" target="_blank" style={{ textDecoration: 'none' }}>
                          <h3 className="mono-text hover:text-white transition-colors" style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>&gt; AETHER_ANALYTICS_V.01</h3>
                        </a>
                        <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
                          &quot;Tus ventas y clientes en una sola pantalla&quot;
                        </p>
                        
                        <div className="dashboard-stats-bars flex items-end gap-2 h-32 mb-8">
                          {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                              style={{ flex: 1, background: 'var(--accent)', opacity: 0.8 }}
                            />
                          ))}
                        </div>

                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          Simulación de Business Intelligence en tiempo real. Tracking de leads mediante Google Maps API y visualización de carga por nodo.
                        </p>
                      </div>
                      <div className="transform-gpu" style={{ border: '1px solid var(--accent)', padding: '1rem', borderRadius: '4px', background: '#020C1B', position: 'relative', overflow: 'hidden' }}>
                         <div style={{ position: 'absolute', top: '10px', left: '10px', padding: '4px 8px', background: 'rgba(100, 255, 218, 0.1)', color: 'var(--accent)', fontSize: '0.6rem', border: '1px solid var(--accent)', borderRadius: '2px', zIndex: 1 }}>MAP_INDEX: 40.4168° N</div>
                         <a href="https://aether-insights.vercel.app/" target="_blank" style={{ display: 'block', height: '100%', position: 'relative', minHeight: '200px' }}>
                           <Image 
                             src="/aether-dashboard.png" 
                             alt="Aether Dashboard Elite" 
                             fill
                             className="object-cover rounded-sm border border-accent/20 brightness-90 contrast-110"
                           />
                         </a>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === '[03_IDENTIDAD]' && (
                  <div className="brand-playground flex flex-col items-center">
                    <div className="service-card-v2 group w-full max-w-2xl text-center" style={{ cursor: 'pointer', position: 'relative' }}>
                      <div className="mono-text" style={{ color: 'var(--accent)', marginBottom: '2rem' }}>&gt; BRAND_RESTYLING_ENGINE</div>
                      
                      <div className="flex justify-center flex-col items-center gap-10">
                        <div className="brand-comparison flex items-center justify-center gap-12 flex-wrap">
                          <div className="brand-before text-center">
                             <div style={{ width: '150px', height: '150px', border: '1px solid #333', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4, filter: 'grayscale(1)' }}>
                               <div style={{ width: '60%', height: '2px', background: '#333', transform: 'rotate(45deg)' }}></div>
                             </div>
                             <p className="mono-text" style={{ fontSize: '0.7rem', marginTop: '1rem', opacity: 0.5 }}>BEFORE_RESTYLING</p>
                          </div>

                          <div className="mono-flex" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>↠</div>

                          <div className="brand-after group-hover:scale-110 transition-transform duration-500">
                             <div style={{ 
                               width: '150px', 
                               height: '150px', 
                               border: '1px solid var(--accent)', 
                               background: 'rgba(100, 255, 218, 0.05)', 
                               display: 'flex', 
                               alignItems: 'center', 
                               justifyContent: 'center',
                               boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)'
                             }}>
                               <svg viewBox="0 0 100 100" style={{ width: '70%', fill: 'var(--accent)', filter: 'drop-shadow(0 0 5px var(--accent))' }}>
                                 <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                                 <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="24" style={{ fontFamily: 'var(--font-mono)' }}>M&amp;C</text>
                               </svg>
                             </div>
                             <p className="mono-text" style={{ fontSize: '0.7rem', marginTop: '1rem', color: 'var(--accent)' }}>AI_OPTIMIZED</p>
                          </div>
                        </div>

                        <div className="branding-quote p-6 border-l-2 border-accent bg-accent/5 italic" style={{ fontSize: '1.1rem', color: 'var(--accent)', maxWidth: '500px' }}>
                          &quot;La cara de tu negocio, diseñada con paciencia y alma&quot;
                        </div>
                        
                        <div className="price-tag">49€ - 189€</div>
                        <p className="mono-text" style={{ fontSize: '0.7rem', opacity: 0.6 }}>HOVER_TO_ACTIVATE_ENGINE</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === '[04_RENDIMIENTO]' && (
                  <div className="speed-playground">
                    <SpeedAuditWidget />
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
          <h2 className="section-title">
            Transparencia total
          </h2>
          
          <div className="specs-table-container">
            <div className="verified-stamp">Verificado 2026</div>
            
            <div className="specs-row">
              <span className="specs-key">Rapidez:</span>
              <span className="specs-value">Entrega estándar en 1-7 días según la complejidad del proyecto.</span>
            </div>
            
            <div className="specs-row">
              <span className="specs-key">Precios cerrados:</span>
              <span className="specs-value">Precio fijo acordado antes de empezar. Sin costes ocultos ni sorpresas.</span>
            </div>
            
            <div className="specs-row">
              <span className="specs-key">Soporte directo:</span>
              <span className="specs-value">Acceso directo a Marc y Juan para cualquier duda o actualización.</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <div style={{ display: "inline-block", padding: "1.5rem 2.5rem", background: "rgba(100, 255, 218, 0.1)", borderRadius: "12px", border: "1px dashed var(--accent)" }}>
              <p className="mono-text" style={{ color: "var(--accent)", margin: 0, fontSize: "1rem" }}>
                🛡️ <strong>Mantenimiento:</strong> Monitorización activa y hosting disponible para todos los proyectos.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="faq"
        className="section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: '¿Cómo funciona el proceso?',
                a: 'Rellenas un briefing de 5 minutos, te enviamos una propuesta en 24h, y en 48h-7 días tienes tu web lista.'
              },
              {
                q: '¿Qué incluye el precio?',
                a: 'Diseño personalizado, adaptado a móvil, formulario de contacto, SEO básico, Google Analytics y hosting gratuito.'
              },
              {
                q: '¿Y si quiero cambios después?',
                a: 'Incluimos 2 rondas de revisiones sin coste. Cambios adicionales tienen un coste de 50€ por ronda.'
              },
              {
                q: '¿Necesito saber de tecnología?',
                a: 'No. Nosotros nos encargamos de todo. Solo necesitamos tu logo, tus fotos y saber qué quieres transmitir.'
              },
              {
                q: '¿Qué pasa con el mantenimiento?',
                a: 'El hosting es gratuito. Si quieres actualizaciones, soporte y copias de seguridad, ofrecemos un plan de 39€/mes.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--bg-light)',
                  borderRadius: '12px',
                  padding: '1.5rem 2rem',
                  border: '1px solid rgba(100, 255, 218, 0.08)'
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>❓ {item.q}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </motion.div>
            ))}
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
            <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '1px' }}>Disponibles para tu proyecto</span>
          </div>
          <p className="mono-text" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
            Diseño web profesional para tu negocio. <br />
            Diseñado &amp; Construido por <strong>M&amp;C Web Solutions</strong> © 2026
          </p>
        </div>
      </footer>
    </>
  );
}
