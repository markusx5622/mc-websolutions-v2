"use client";

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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

const BUSINESS_SOLUTIONS_PROJECTS = [
  {
    title: "Brasería El Molino",
    category: "RESTAURANTE / GASTRONOMÍA",
    description: "Plataforma digital para restaurantes y hostelería con enfoque en la experiencia visual. Diseñada para atraer comensales y facilitar la información del establecimiento.",
    image: "/demos/braseria-el-molino.png",
    url: "https://demo-braseria-el-molino.vercel.app/",
    accent: '#EF4444',
    tags: ['Restaurante', 'Hostelería', 'Presencia Digital']
  },
  {
    title: "Sonrisa Natural",
    category: "SALUD / CLÍNICA DENTAL",
    description: "Portal profesional para centros médicos y clínicas. Transmite limpieza, rigor médico y confianza al paciente, destacando los servicios y especialidades.",
    image: "/demos/clinica-dental.png",
    url: "https://clinica-dental-sonrisa-natural.vercel.app/",
    accent: '#00E5FF',
    tags: ['Salud', 'Clínica', 'Profesional']
  },
  {
    title: "L'Essence",
    category: "BELLEZA / ESTÉTICA",
    description: "Diseño premium para centros de belleza y bienestar. Refleja exclusividad y tranquilidad, resaltando la calidad de los tratamientos y el ambiente del salón.",
    image: "/demos/essence-estetica.png",
    url: "https://l-essence-estetica.vercel.app/",
    accent: '#D946EF',
    tags: ['Estética', 'Premium', 'Wellness']
  },
  {
    title: "Sastrería Monforte",
    category: "MODA / ARTESANÍA",
    description: "Escaparate digital elegante para moda a medida y oficios artesanales. Transmite tradición, atención al detalle y un servicio altamente personalizado.",
    image: "/demos/sastreria-monforte.png",
    url: "https://sastreria-monforte.vercel.app/",
    accent: '#F59E0B',
    tags: ['Sastrería', 'Elegancia', 'Tradición']
  },
  {
    title: "Grano y Barrio",
    category: "CAFETERÍA / PANADERÍA",
    description: "Identidad cercana para comercios de barrio. Visualmente atractiva y optimizada para destacar productos artesanales y conectar con la comunidad local.",
    image: "/demos/grano-barrio.png",
    url: "https://grano-y-barrio.vercel.app/",
    accent: '#10B981',
    tags: ['Cafetería', 'Local', 'Artesanal']
  }
];

const PREMIUM_PORTFOLIO_PROJECTS = [
  {
    category: 'AGENCIA CREATIVA',
    title: 'The Aetheris Experience',
    description: 'Portfolio inmersivo para una agencia de diseño digital. Experiencia no lineal con procesamiento de datos en tiempo real, cronología interactiva y archivo de proyectos con transiciones cinematográficas.',
    tags: ['Next.js', 'React', 'Framer Motion', 'Diseño Inmersivo'],
    url: 'https://the-aetheris-experience.vercel.app/',
    accent: '#8B5CF6',
    mockupBg: '#0a0a0a',
    mockupTitle: 'ÆTHERIS',
    mockupFont: 'serif',
    mockupDecor: 'line',
  },
  {
    category: 'DASHBOARD EMPRESARIAL',
    title: 'Aether Insights',
    description: 'Panel de inteligencia empresarial con análisis multidimensional en tiempo real. Incluye motor predictivo, mapa global, simulador financiero y más de 8 módulos de análisis interconectados.',
    tags: ['Next.js', 'TypeScript', 'Data Visualization', 'Analytics'],
    url: 'https://aether-insights.vercel.app/',
    accent: '#3B82F6',
    mockupBg: '#0c1220',
    mockupTitle: 'AETHER',
    mockupFont: 'sans-serif',
    mockupDecor: 'dashboard',
  },
  {
    category: 'WEB EXPERIENCE',
    title: 'Kinetia Kinetic',
    description: 'Experiencia web cinética donde el movimiento es el protagonista. Diseño basado en física, interacciones gestuales y transiciones fluidas que responden al comportamiento del usuario en tiempo real.',
    tags: ['Next.js', 'Canvas API', 'Animaciones', 'Diseño Cinético'],
    url: 'https://kinetia-kinetic-experience.vercel.app/',
    accent: '#F59E0B',
    mockupBg: '#000000',
    mockupTitle: 'KINETIA',
    mockupFont: 'sans-serif',
    mockupDecor: 'diagonal',
  },
  {
    category: 'STORYTELLING DIGITAL',
    title: 'Kinetia Origins',
    description: 'Narrativa digital interactiva que cuenta la historia de una marca a través de scroll-driven animations. Cada desplazamiento revela un nuevo capítulo con transiciones cinematográficas y composiciones visuales únicas.',
    tags: ['Next.js', 'Scroll Animations', 'Narrativa', 'Branding'],
    url: 'https://kinetia-origins.vercel.app/',
    accent: '#10B981',
    mockupBg: '#0a0f0a',
    mockupTitle: 'ORIGINS',
    mockupFont: 'serif',
    mockupDecor: 'particles',
  },
  {
    category: 'EXPERIENCIA INTERACTIVA',
    title: 'Gamma Reaction',
    description: 'Simulador interactivo de reacciones nucleares con telemetría cuántica en tiempo real, terminal de control integrada y visualizaciones de datos en vivo. Una demostración de lo que es posible cuando el diseño web se encuentra con la ciencia.',
    tags: ['Next.js', 'Real-time Data', 'WebSockets', 'Terminal UI'],
    url: 'https://gamma-reaction.vercel.app/',
    accent: '#EF4444',
    mockupBg: '#0a0a0a',
    mockupTitle: 'GAMMA_',
    mockupFont: 'monospace',
    mockupDecor: 'terminal',
  },
];

export default function Home() {
  useEffect(() => {
    // Header Scroll Effect
    // Typewriter Effect (Consolidated to prevent text duplication)

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
  const [activePortfolioLayer, setActivePortfolioLayer] = React.useState<'business' | 'engineering'>('business');


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
              <div className="hero-text-block">
                <span className="mono-text hero-greeting" style={{ display: 'block', marginBottom: '1rem', letterSpacing: '4px', fontSize: '0.8rem' }}>M&C WEB SOLUTIONS</span>
                <h1 className="hero-title" style={{ margin: '0 0 1.5rem 0', lineHeight: '1.1' }}>
                  <span className="typewriter">Tu Idea</span> + <br />
                  Ingeniería = <br />
                  <span className="gradient-text">Tu Web Mañana.</span>
                </h1>
                <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 0 2.5rem 0' }}>
                  Aplicamos ingeniería de alto rendimiento para digitalizar tu negocio en tiempo récord. Desde landings en 48h hasta infraestructuras complejas a medida.
                </p>
                <Link href="/briefing" className="btn btn-solid" style={{ padding: "1.2rem 2.5rem" }}>🚀 Iniciar Mi Proyecto</Link>
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
        <motion.div 
          className="stats-bar"
          whileHover={{ 
            y: -5, 
            borderColor: 'var(--accent)', 
            boxShadow: '0 10px 30px -10px rgba(100, 255, 218, 0.15)' 
          }}
          transition={{ 
            duration: 0.3,
            borderColor: { duration: 0.2 },
            boxShadow: { duration: 0.2 }
          }}
          style={{
            border: '1px solid rgba(100, 255, 218, 0.05)',
            borderRadius: '20px',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <div style={{ textAlign: "center", gridColumn: "span 1", gridColumnStart: "unset" }} className="md:!col-start-2">
            <span className="stat-number">48h</span>
            <span className="stat-label">Tiempo Medio de Entrega</span>
          </div>
          <div style={{ textAlign: "center" }} className="md:!col-start-4">
            <span className="stat-number">100%</span>
            <span className="stat-label">Optimización Responsive</span>
          </div>
          <div style={{ textAlign: "center" }} className="md:!col-start-6">
            <span className="stat-number">0€</span>
            <span className="stat-label">Sin cuotas obligatorias</span>
          </div>
          <div style={{ textAlign: "center" }} className="md:!col-start-3 md:!row-start-2">
            <span className="stat-number">NEXT.JS</span>
            <span className="stat-label">Tecnología de última generación</span>
          </div>
          <div style={{ textAlign: "center" }} className="md:!col-start-5 md:!row-start-2">
            <span className="stat-number">SEO+</span>
            <span className="stat-label">VISIBILIDAD MÁXIMA EN GOOGLE Y BUSCADORES</span>
          </div>
        </motion.div>
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
                <h3 className="pipeline-title">01. INGENIERÍA DE REQUISITOS</h3>
                <p className="pipeline-desc">Captura técnica de necesidades para definir la arquitectura de información óptima. Transformamos tu visión en un plano de ingeniería detallado antes de escribir una sola línea de código</p>
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
                <h3 className="pipeline-title">02. DESARROLLO DE ALTO RENDIMIENTO</h3>
                <p className="pipeline-desc">Construimos tu infraestructura digital utilizando Next.js 14, TypeScript y Tailwind CSS. Implementamos código limpio, escalable y modular siguiendo los estándares más exigentes de la ingeniería de software actual.</p>
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
                <h3 className="pipeline-title">03. AUDITORÍA TÉCNICA (QA) & DESPLIEGUE</h3>
                <p className="pipeline-desc">Sometemos el proyecto a una auditoría de calidad exhaustiva (QA). Optimizamos cada activo para garantizar un rendimiento superior (Lighthouse &gt;90) y un despliegue global seguro en 48 horas.</p>
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
        id="nosotros" 
        className="w-full pt-64 pb-32 mb-32 flex flex-col items-center justify-center relative overflow-hidden bg-bg-color"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-4xl px-6 flex flex-col items-center">
          <div className="w-full mb-48 flex flex-col items-center text-center">
            <h2 className="section-title !mb-10 text-center">Ingeniería con rostro humano</h2>
            <p className="text-base leading-relaxed max-w-2xl text-center font-light mb-16" style={{ color: 'var(--text-muted)' }}>
              Detrás de cada línea de código en M&C Web Solutions estamos nosotros. Estudiantes de Ingeniería, apasionados por la tecnología y comprometidos con tu éxito.
            </p>
          </div>

          <div className="flex flex-col items-center gap-20 w-full">
            {/* MARC */}
            <motion.div 
              className="tech-card !flex-col !items-center w-full max-w-2xl backdrop-blur-3xl border border-accent/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ padding: '5rem 4rem', textAlign: 'center' }}
            >
              <div className="w-56 h-56 rounded-full bg-accent/5 mx-auto mb-12 border-2 border-accent/50 overflow-hidden relative shrink-0 shadow-2xl shadow-accent/10">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                  <Image 
                    src="/MARCia.png" 
                    alt="Marc - Producción & Código" 
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    sizes="224px"
                    priority
                  />
                  <span className="mono-text text-6xl opacity-20 hidden">M</span>
                </div>
              </div>
              <h3 className="text-accent text-3xl font-bold mb-3 text-center uppercase tracking-tighter">Marc</h3>
              <p className="mono-text text-accent/60 text-xs letter-spacing-[4px] mb-8 font-semibold text-center uppercase">PRODUCCIÓN & CÓDIGO</p>
              <p className="text-center text-base leading-relaxed max-w-md font-light" style={{ color: 'var(--text-muted)' }}>
                Responsable de que tu web sea una obra de arte técnica. Si es rápido, robusto y moderno, Marc lo ha construido desde cero.
              </p>
            </motion.div>

            {/* JUAN */}
            <motion.div 
              className="tech-card !flex-col !items-center w-full max-w-2xl backdrop-blur-3xl border border-accent/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ padding: '5rem 4rem', textAlign: 'center' }}
            >
              <div className="w-56 h-56 rounded-full bg-accent/5 mx-auto mb-12 border-2 border-accent/50 overflow-hidden relative shrink-0 shadow-2xl shadow-accent/10">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                  <Image 
                    src="/JUANia.png" 
                    alt="Juan - Marketing & Legal" 
                    fill
                    className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    sizes="224px"
                  />
                  <span className="mono-text text-6xl opacity-20 hidden">J</span>
                </div>
              </div>
              <h3 className="text-accent text-3xl font-bold mb-3 text-center uppercase tracking-tighter">Juan</h3>
              <p className="mono-text text-accent/60 text-xs letter-spacing-[4px] mb-8 font-semibold text-center uppercase">MARKETING & LEGAL</p>
              <p className="text-center text-base leading-relaxed max-w-md font-light" style={{ color: 'var(--text-muted)' }}>
                Garante de que tu negocio cumpla todas las normativas y de que tu web esté estratégicamente orientada a vender más.
              </p>
            </motion.div>
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
        style={{ paddingBottom: '2rem' }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="section-title">Nuestro Portfolio</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', marginTop: '-2rem', maxWidth: 650, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Proyectos reales que demuestran lo que podemos crear para tu negocio. Cada uno diseñado, desarrollado y desplegado por M&C Web Solutions.
          </p>

          {/* LAYER SELECTOR */}
          <div className="flex justify-center mb-80 relative z-20">
            <div className="bg-[#0A192F]/60 backdrop-blur-xl p-2.5 rounded-full border border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <button 
                onClick={() => setActivePortfolioLayer('business')}
                className={`relative px-10 py-5 rounded-full text-lg font-bold tracking-wide transition-all duration-500 ease-out ${activePortfolioLayer === 'business' ? 'text-[#0A192F]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {activePortfolioLayer === 'business' && (
                  <motion.div 
                    layoutId="portfolioTabBg" 
                    className="absolute inset-0 bg-[#64FFDA] rounded-full shadow-[0_0_25px_rgba(100,255,218,0.4)]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <CheckCircle2 size={20} className={activePortfolioLayer === 'business' ? 'text-[#0A192F]' : 'hidden'} />
                  SOLUCIONES COMERCIALES
                </span>
              </button>
              <button 
                onClick={() => setActivePortfolioLayer('engineering')}
                className={`relative px-10 py-5 rounded-full text-lg font-bold tracking-wide transition-all duration-500 ease-out ${activePortfolioLayer === 'engineering' ? 'text-[#0A192F]' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {activePortfolioLayer === 'engineering' && (
                  <motion.div 
                    layoutId="portfolioTabBg" 
                    className="absolute inset-0 bg-[#64FFDA] rounded-full shadow-[0_0_25px_rgba(100,255,218,0.4)]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 font-mono flex items-center gap-3">
                  <span className={activePortfolioLayer === 'engineering' ? 'text-[#0A192F]' : 'text-[#64FFDA] opacity-60'}>{`</>`}</span> INGENIERÍA EXPERIMENTAL
                </span>
              </button>
            </div>
          </div>

          <div style={{ height: '140px' }} className="hidden md:block" />
          <div style={{ height: '80px' }} className="md:hidden" />

          <div className="relative min-h-[800px] mt-32">
            <AnimatePresence mode="wait">
              {activePortfolioLayer === 'business' ? (
                <motion.div
                  key="business"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-20"
                >
                  {BUSINESS_SOLUTIONS_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
                className="md:!grid-cols-2"
              >
                {/* MOCKUP SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 + 0.15 }}
                  style={{ order: idx % 2 === 0 ? 1 : 2 }}
                  className={idx % 2 !== 0 ? 'md:!order-2' : 'md:!order-1'}
                >
                  <Link href={project.url} target="_blank" className="block">
                    <div
                      style={{
                        borderRadius: 16,
                        overflow: 'hidden',
                        border: `1px solid ${project.accent}25`,
                        background: '#0a0e17',
                        boxShadow: `0 8px 40px rgba(0,0,0,0.3)`,
                        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = `0 12px 50px ${project.accent}30, 0 0 30px ${project.accent}15`;
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.3)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {/* Browser Mockup Chrome */}
                      <div className="bg-[#111318] px-4 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.05)] shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                        <div style={{ flex: 1, marginLeft: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '4px 12px', fontSize: '0.6rem', color: '#6b7080', fontFamily: 'var(--font-mono)' }}>
                          {project.url.replace('https://', '')}
                        </div>
                      </div>
                      {/* Preview */}
                      <div style={{ position: 'relative', width: '100%', height: 380, overflow: 'hidden', background: '#080c14' }}>
                        <iframe
                          src={project.url}
                          title={`${project.title} — Demo`}
                          style={{
                            width: '166.67%',
                            height: '166.67%',
                            border: 'none',
                            transform: 'scale(0.6)',
                            transformOrigin: 'top left',
                            pointerEvents: 'none',
                          }}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* TEXT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 + 0.05 }}
                  style={{
                    order: idx % 2 === 0 ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                  className={idx % 2 !== 0 ? 'md:!order-1' : 'md:!order-2'}
                >
                  <span style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: project.accent,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 + tagIdx * 0.05 }}
                        style={{
                          fontSize: '0.8rem',
                          padding: '6px 16px',
                          borderRadius: 50,
                          border: `1px solid ${project.accent}30`,
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          background: `${project.accent}10`,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: '1.5rem' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: `1px solid ${project.accent}`,
                        borderRadius: 8,
                        color: project.accent,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        background: 'transparent',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = project.accent;
                        e.currentTarget.style.color = '#0A192F';
                        e.currentTarget.style.boxShadow = `0 4px 20px ${project.accent}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = project.accent;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Explorar demo →
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
                </motion.div>
              ) : (
                <motion.div
                  key="engineering"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}
                >
                  {PREMIUM_PORTFOLIO_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
                className="md:!grid-cols-2"
              >
                {/* MOCKUP SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 + 0.15 }}
                  style={{ order: idx % 2 === 0 ? 1 : 2 }}
                  className={idx % 2 !== 0 ? 'md:!order-2' : 'md:!order-1'}
                >
                  <div
                    style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: `1px solid ${project.accent}25`,
                      background: '#0a0e17',
                      boxShadow: `0 8px 40px rgba(0,0,0,0.3)`,
                      transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 12px 50px ${project.accent}30, 0 0 30px ${project.accent}15`;
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.3)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {/* Browser chrome */}
                    <div style={{ background: '#111318', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                      <div style={{ flex: 1, marginLeft: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '4px 12px', fontSize: '0.6rem', color: '#6b7080', fontFamily: 'var(--font-mono)' }}>
                        {project.url.replace('https://', '')}
                      </div>
                    </div>
                    {/* Visual mockup content */}
                    <div style={{
                      background: project.mockupBg,
                      height: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {/* Decorative elements based on project type */}
                      {project.mockupDecor === 'line' && (
                        <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: 2, background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`, transform: 'translateY(30px)' }} />
                      )}
                      {project.mockupDecor === 'dashboard' && (
                        <>
                          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 50, background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.05)' }} />
                          <div style={{ position: 'absolute', top: 20, left: 65, right: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                            {[1, 2, 3].map(i => (
                              <div key={i} style={{ height: 50, borderRadius: 8, background: `${project.accent}10`, border: `1px solid ${project.accent}20` }} />
                            ))}
                          </div>
                        </>
                      )}
                      {project.mockupDecor === 'diagonal' && (
                        <>
                          <div style={{ position: 'absolute', top: -40, right: -20, width: 200, height: 2, background: project.accent, transform: 'rotate(-35deg)', opacity: 0.4 }} />
                          <div style={{ position: 'absolute', bottom: -20, left: -20, width: 150, height: 2, background: project.accent, transform: 'rotate(-35deg)', opacity: 0.3 }} />
                          <div style={{ position: 'absolute', top: 40, right: 30, width: 100, height: 2, background: project.accent, transform: 'rotate(-35deg)', opacity: 0.2 }} />
                        </>
                      )}
                      {project.mockupDecor === 'particles' && (
                        <>
                          {[...Array(8)].map((_, i) => (
                            <div key={i} style={{
                              position: 'absolute',
                              width: 4 + Math.random() * 4,
                              height: 4 + Math.random() * 4,
                              background: project.accent,
                              opacity: 0.15 + Math.random() * 0.25,
                              top: `${15 + Math.random() * 70}%`,
                              left: `${10 + Math.random() * 80}%`,
                            }} />
                          ))}
                          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(180deg, transparent 0%, ${project.accent}08 50%, transparent 100%)` }} />
                        </>
                      )}
                      {project.mockupDecor === 'terminal' && (
                        <>
                          <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 8, alignItems: 'center' }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EAB308', boxShadow: '0 0 6px #EAB308' }} />
                            <span style={{ fontSize: '0.55rem', color: '#6b7080', fontFamily: 'monospace', marginLeft: 8 }}>REACTOR_STATUS: ONLINE</span>
                          </div>
                          <div style={{ position: 'absolute', bottom: 25, left: 20, right: 20 }}>
                            <div style={{ height: 1, background: 'rgba(239,68,68,0.2)', marginBottom: 6 }} />
                            <div style={{ height: 1, background: 'rgba(239,68,68,0.1)' }} />
                          </div>
                        </>
                      )}
                      {/* Main title text */}
                      <span style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        fontFamily: project.mockupFont,
                        color: project.accent,
                        letterSpacing: project.mockupFont === 'monospace' ? '0.15em' : '0.05em',
                        textShadow: `0 0 40px ${project.accent}40`,
                        zIndex: 1,
                      }}>
                        {project.mockupTitle}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* TEXT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 + 0.05 }}
                  style={{
                    order: idx % 2 === 0 ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                  className={idx % 2 !== 0 ? 'md:!order-1' : 'md:!order-2'}
                >
                  <span style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#64FFDA',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 + tagIdx * 0.05 }}
                        style={{
                          fontSize: '0.7rem',
                          padding: '4px 12px',
                          borderRadius: 50,
                          border: '1px solid rgba(100, 255, 218, 0.15)',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(100, 255, 218, 0.03)',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  {/* CTA */}
                  <div style={{ marginTop: '0.75rem' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.75rem 1.75rem',
                        border: '1px solid #64FFDA',
                        borderRadius: 8,
                        color: '#64FFDA',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        background: 'transparent',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#64FFDA';
                        e.currentTarget.style.color = '#0A192F';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(100, 255, 218, 0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#64FFDA';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Ver proyecto en vivo →
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ═══ CASO DE ÉXITO — KINETIA ═══ */}
      <motion.section
        id="caso-exito"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          padding: '6rem 0',
          background: 'linear-gradient(180deg, #0A192F 0%, #0D2137 50%, #0A192F 100%)',
          borderTop: '1px solid rgba(100, 255, 218, 0.15)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.15)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(100, 255, 218, 0.04)', filter: 'blur(120px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(30, 144, 255, 0.03)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes ctaPulse {
            0%, 100% { box-shadow: 0 8px 30px rgba(100, 255, 218, 0.2); }
            50% { box-shadow: 0 8px 50px rgba(100, 255, 218, 0.4), 0 0 20px rgba(100, 255, 218, 0.15); }
          }
        `}</style>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '1.5rem' }}
          >
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#64FFDA',
              background: 'linear-gradient(90deg, rgba(100,255,218,0.15), rgba(30,144,255,0.1), rgba(100,255,218,0.15))',
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              borderRadius: 50,
              padding: '6px 20px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}>
              ✦ CASO DE ÉXITO
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              margin: '0 0 0.8rem',
              background: 'linear-gradient(135deg, #64FFDA, #1E90FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
            }}>
              Kinetia
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', margin: 0 }}>
              La web que lo demuestra todo
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:!grid-cols-[1.5fr_1fr]">

            {/* Left: Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ order: 2 }}
              className="md:!order-1"
            >
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(100, 255, 218, 0.15)',
                background: '#0a0e17',
                boxShadow: '0 0 60px rgba(100, 255, 218, 0.08)',
                transition: 'box-shadow 0.4s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 80px rgba(100, 255, 218, 0.16), 0 25px 50px rgba(0,0,0,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 60px rgba(100, 255, 218, 0.08)')}
              >
                {/* Browser chrome */}
                <div style={{ background: '#111318', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                  <div style={{ flex: 1, marginLeft: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '4px 12px', fontSize: '0.65rem', color: '#6b7080', fontFamily: 'var(--font-mono)' }}>
                    kinetia-v2.vercel.app
                  </div>
                </div>
                {/* Preview */}
                <div style={{ position: 'relative', width: '100%', height: 380, overflow: 'hidden', background: '#080c14' }}>
                  <iframe
                    src="https://kinetia-v2.vercel.app/"
                    title="Kinetia — Caso de éxito de M&C Web Solutions"
                    style={{
                      width: '166.67%',
                      height: '166.67%',
                      border: 'none',
                      transform: 'scale(0.6)',
                      transformOrigin: 'top left',
                      pointerEvents: 'none',
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Copy + Stats + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', order: 1 }}
              className="md:!order-2"
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Kinetia llegó a nosotros con una visión ambiciosa: crear una plataforma digital que transmitiera <strong style={{ color: 'var(--text-main)' }}>innovación, movimiento y tecnología de vanguardia</strong>. Un proyecto que pusiera a prueba todo nuestro proceso.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Aplicamos nuestro método completo: briefing en 5 minutos, generación con IA, supervisión humana detallada y despliegue global. El resultado: una web que no solo cumple objetivos de negocio, sino que <strong style={{ color: 'var(--accent)' }}>eleva el estándar de lo que es posible</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Rendimiento excepcional, diseño memorable y una experiencia de usuario que convierte visitantes en clientes.
              </p>

              {/* Mini Stats */}
              <div style={{ display: 'flex', gap: '2rem', margin: '0.5rem 0', flexWrap: 'wrap' }}>
                {[
                  { number: '100', label: 'Lighthouse Score' },
                  { number: '<1s', label: 'Tiempo de carga' },
                  { number: 'A+', label: 'SEO Score' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#64FFDA', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#8a8f98', marginTop: 4, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://kinetia-v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #64FFDA, #1E90FF)',
                  color: '#0A192F',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: 12,
                  textDecoration: 'none',
                  textAlign: 'center',
                  animation: 'ctaPulse 3s ease-in-out infinite',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  fontFamily: 'var(--font-mono)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Ver proyecto en vivo →
              </a>

              <p style={{ fontSize: '0.75rem', color: '#8a8f98', margin: 0, fontFamily: 'var(--font-mono)' }}>
                Desarrollado con Next.js · Desplegado en Vercel · Diseñado por M&C
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ═══ CASO DE ÉXITO — NEXUS PADEL HUB ═══ */}
      <motion.section
        id="caso-exito-nexus"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          padding: '6rem 0',
          background: 'linear-gradient(180deg, #0A192F 0%, #0D2137 50%, #0A192F 100%)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.15)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.04)', filter: 'blur(120px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(56, 189, 248, 0.03)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', marginBottom: '1.5rem' }}
          >
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#10B981',
              background: 'linear-gradient(90deg, rgba(16,185,129,0.15), rgba(56,189,248,0.1), rgba(16,185,129,0.15))',
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 50,
              padding: '6px 20px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}>
              ✦ CASO DE ÉXITO ESTELAR
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              margin: '0 0 0.8rem',
              background: 'linear-gradient(135deg, #10B981, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
            }}>
              Nexus Padel Hub
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', margin: 0 }}>
              El ecosistema definitivo para clubes deportivos
            </p>
          </motion.div>

          {/* Two-column layout (Altered order for zigzag effect) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:!grid-cols-[1fr_1.5fr]">

            {/* Left: Copy + Stats + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', order: 1 }}
              className="md:!order-1"
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Nexus Padel Hub requería una presencia digital dinámica que estuviera al nivel de sus modernas instalaciones. El objetivo era crear <strong style={{ color: 'var(--text-main)' }}>un ecosistema ágil y vibrante</strong> que atrajera nuevos jugadores y conectara a la comunidad del club.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Desplegamos una arquitectura visual inmersiva orientada a la acción. Mediante interfaces intuitivas y un diseño que respira deporte, logramos una plataforma que <strong style={{ color: '#10B981' }}>conecta directamente con la adrenalina de la pista</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Una experiencia de usuario veloz, diseñada en dark mode, y estructurada para impactar desde el primer click.
              </p>

              {/* Mini Stats */}
              <div style={{ display: 'flex', gap: '2rem', margin: '0.5rem 0', flexWrap: 'wrap' }}>
                {[
                  { number: '100', label: 'Rendimiento UX' },
                  { number: '<1s', label: 'Tiempo de carga' },
                  { number: 'A+', label: 'Diseño Visual' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#8a8f98', marginTop: 4, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href="https://nexus-padel-hub.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: 'linear-gradient(135deg, #10B981, #38BDF8)',
                    color: '#0A192F',
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderRadius: 12,
                    textDecoration: 'none',
                    textAlign: 'center',
                    animation: 'ctaPulseNexus 3s ease-in-out infinite',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'var(--font-mono)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  Ver proyecto en vivo →
                </a>
              </div>
              <style>{`
                @keyframes ctaPulseNexus {
                  0%, 100% { box-shadow: 0 8px 30px rgba(16, 185, 129, 0.2); }
                  50% { box-shadow: 0 8px 50px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.15); }
                }
              `}</style>

              <p style={{ fontSize: '0.75rem', color: '#8a8f98', margin: 0, marginTop: '1rem', fontFamily: 'var(--font-mono)' }}>
                Desarrollado con Next.js · Desplegado en Vercel · Diseñado por M&C
              </p>
            </motion.div>

            {/* Right: Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ order: 2 }}
              className="md:!order-2"
            >
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(16, 185, 129, 0.15)',
                background: '#0a0e17',
                boxShadow: '0 0 60px rgba(16, 185, 129, 0.08)',
                transition: 'box-shadow 0.4s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 80px rgba(16, 185, 129, 0.16), 0 25px 50px rgba(0,0,0,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 60px rgba(16, 185, 129, 0.08)')}
              >
                {/* Browser chrome */}
                <div style={{ background: '#111318', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                  <div style={{ flex: 1, marginLeft: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '4px 12px', fontSize: '0.65rem', color: '#6b7080', fontFamily: 'var(--font-mono)' }}>
                    nexus-padel-hub.vercel.app
                  </div>
                </div>
                {/* Preview */}
                <div style={{ position: 'relative', width: '100%', height: 380, overflow: 'hidden', background: '#080c14' }}>
                  <iframe
                    src="https://nexus-padel-hub.vercel.app/"
                    title="Nexus Padel Hub — Caso de éxito de M&C Web Solutions"
                    style={{
                      width: '166.67%',
                      height: '166.67%',
                      border: 'none',
                      transform: 'scale(0.6)',
                      transformOrigin: 'top left',
                      pointerEvents: 'none',
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </motion.div>

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
          <h2 className="section-title text-center mb-16">
            Transparencia total
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                id: 'basic',
                name: 'WEB BÁSICA',
                price: '199€',
                features: ['1-3 páginas', 'Entrega en 48 horas', 'Diseño responsive', 'Formulario de contacto', 'SEO básico'],
                cta: 'Empezar por 199€',
                recommended: false,
                btnClass: 'btn-outline'
              },
              {
                id: 'pro',
                name: 'WEB PRO',
                price: '399€',
                features: ['4-8 páginas', 'Entrega en 7 días', 'Todo lo de Web Básica +', 'Google Maps', 'Blog integrado', 'Google Analytics'],
                cta: 'Empezar por 399€',
                recommended: true,
                btnClass: 'btn-solid'
              },
              {
                id: 'ecommerce',
                name: 'E-COMMERCE',
                price: '999€',
                features: ['Tienda online completa', 'Entrega en 15 días', 'Catálogo de productos', 'Pasarela de pago', 'Panel de gestión'],
                cta: 'Solicitar presupuesto',
                recommended: false,
                btnClass: 'btn-outline'
              }
            ].map((pack) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: (pack.recommended && typeof window !== 'undefined' && window.innerWidth > 768) ? 1.07 : 1.03,
                  borderColor: 'var(--accent)',
                  boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.15)'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{
                  background: pack.recommended ? 'rgba(100, 255, 218, 0.03)' : 'var(--bg-card)',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: pack.recommended ? '2px solid var(--accent)' : '1px solid rgba(100, 255, 218, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: pack.recommended ? 10 : 1,
                  cursor: 'default'
                }}
              >
                {pack.recommended && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#64ffda] text-[#0a192f] px-6 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(100,255,218,0.4)] border border-[#64ffda]">
                    Recomendado
                  </div>
                )}
                <h3 className="mono-text" style={{ fontSize: '0.85rem', color: pack.recommended ? 'var(--accent)' : 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '2px' }}>
                  {pack.name}
                </h3>
                <div className="price-value" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '1rem', verticalAlign: 'middle', fontWeight: 600, color: 'var(--text-muted)' }}>Desde</span> {pack.price}
                </div>
                <ul className="pricing-features" style={{ flex: 1, marginBottom: '2.5rem', listStyle: 'none', padding: 0 }}>
                  {pack.features.map((feature, i) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', fontSize: '0.9rem', color: (pack.recommended && i > 1) ? 'var(--text-main)' : 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--accent)' }}>✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/briefing" className={`btn ${pack.btnClass}`} style={{ textAlign: 'center', width: '100%', fontSize: '0.85rem' }}>
                  {pack.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <p className="mono-text" style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
              + Mantenimiento opcional: 10€/mes
            </p>
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
                a: 'El hosting es gratuito. Si quieres actualizaciones, soporte y copias de seguridad, ofrecemos un plan de 10€/mes.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5, 
                  borderColor: 'var(--accent)', 
                  boxShadow: '0 12px 30px -10px rgba(100, 255, 218, 0.12)' 
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  y: { duration: 0.2 },
                  borderColor: { duration: 0.2 },
                  boxShadow: { duration: 0.2 }
                }}
                style={{
                  background: 'var(--bg-light)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(100, 255, 218, 0.08)',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
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
    </>
  );
}
