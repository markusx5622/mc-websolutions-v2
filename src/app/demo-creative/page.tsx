"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DemoCreativePage() {
  const [activeTab, setActiveTab] = useState('filosofia');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Trigger on load

    const handleNavScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.pageYOffset > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll);

    return () => {
      window.removeEventListener('scroll', handleReveal);
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .demo-creative-body {
            font-family: 'Inter', sans-serif;
            background-color: #FFFFFF !important; /* Force reset */
            color: #111111 !important;
            line-height: 1.4;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .demo-creative-body * {
            font-family: 'Inter', sans-serif;
            border-color: #EEEEEE;
        }

        .creative-serif {
            font-family: 'Playfair Display', serif !important;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
        }

        #navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 40px 0;
            z-index: 1000;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        #navbar.scrolled {
            padding: 20px 0;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-creative {
            font-size: 1.5rem;
            text-decoration: none;
            color: #111111;
            letter-spacing: -1px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-creative::before {
            content: '←';
            font-size: 1rem;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .logo-creative:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #111111;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            opacity: 0.5;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .nav-links a:hover {
            opacity: 1;
        }

        .hero-creative {
            height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            background: #f9f9f9;
        }

        .hero-split {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100%;
            width: 100%;
        }

        .hero-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 10%;
            z-index: 2;
        }

        .hero-creative h1 {
            font-family: 'Playfair Display', serif !important;
            font-size: 10vw;
            line-height: 0.85;
            margin-bottom: 30px;
            letter-spacing: -5px;
            font-weight: 400;
        }

        .hero-img {
            position: relative;
            overflow: hidden;
        }

        .hero-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            transition: transform 2s ease;
        }

        .hero-creative:hover .hero-img img {
            transform: scale(1.1);
        }

        .experience-widget {
            position: fixed;
            bottom: 40px;
            left: 40px;
            background: #111111;
            color: white;
            padding: 20px;
            border-radius: 4px;
            z-index: 100;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .experience-widget span { font-weight: 800; font-size: 1.2rem; color: #FF3E00; }

        .reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        .btn-creative {
            background: #111111;
            color: white;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 0.8rem;
            padding: 20px 50px;
            border: none;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            position: relative;
            overflow: hidden;
        }

        .btn-creative:hover {
            background: #FF3E00;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
        }

        .gallery-item {
            position: relative;
            cursor: pointer;
        }

        .img-wrapper {
            overflow: hidden;
            aspect-ratio: 4/5;
            background: #f5f5f5;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .gallery-item:hover img {
            transform: scale(1.05);
        }

        .tab-btn {
            padding: 20px 0;
            background: none;
            border: none;
            font-family: inherit;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            color: #888888;
            position: relative;
            transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .tab-btn.active {
            color: #111111;
        }

        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #111111;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .tab-content {
          animation: fadeIn 1s forwards;
        }
      `}} />

      <div className="demo-creative-body">
        <div className="experience-widget reveal">
            <span>12+</span>
            Años de Visión Creativa
        </div>

        <nav id="navbar">
            <div className="container nav-content">
                <Link href="/#portfolio" className="logo-creative" title="Volver a M&C">VISION<span>.</span></Link>
                <ul className="nav-links">
                    <li><a href="#work">Trabajo</a></li>
                    <li><a href="#about">Estudio</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>

        <section className="hero-creative">
            <div className="hero-split">
                <div className="hero-text">
                    <p className="reveal transform-gpu">Estudio de Diseño Visual</p>
                    <h1 className="reveal creative-serif transform-gpu">Visionary<br />Design.</h1>
                    <div className="reveal" style={{ maxWidth: "400px", opacity: 0.6, fontSize: "0.9rem", lineHeight: 1.8 }}>
                        Transformamos conceptos abstractos en experiencias visuales memorables que trascienden el tiempo.
                    </div>
                </div>
                <div className="relative w-full h-full min-h-[250px] overflow-hidden" style={{ minWidth: '300px' }}>
                    <Image 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2059&auto=format&fit=crop" 
                      alt="Studio" 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      unoptimized={true}
                      className="grayscale hover:grayscale-0 transition-all duration-1000" 
                      priority 
                    />
                </div>
            </div>
        </section>

        <section id="work" className="section" style={{ padding: "150px 0" }}>
            <div className="container">
                <h2 className="section-title reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", marginBottom: "80px", textAlign: "center", fontWeight: 400 }}>Proyectos Seleccionados</h2>
                <div className="gallery-grid">
                    <div className="gallery-item reveal transform-gpu">
                        <div className="relative w-full h-full min-h-[250px] overflow-hidden">
                            <Image 
                              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2070&auto=format&fit=crop" 
                              alt="Photography Project" 
                              fill 
                              style={{ objectFit: 'cover' }} 
                              unoptimized={true}
                            />
                        </div>
                        <div className="item-info" style={{ marginTop: "20px" }}>
                            <span className="item-category" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", color: "#888888", marginBottom: "5px", display: "block" }}>Fotografía / Moda</span>
                            <h3 className="item-title creative-serif" style={{ fontSize: "1.5rem", fontWeight: 400 }}>Minimalismo Urbano</h3>
                        </div>
                    </div>
                    <div className="gallery-item reveal transform-gpu" style={{ marginTop: "100px" }}>
                        <div className="relative w-full h-full min-h-[250px] overflow-hidden">
                            <Image 
                              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop" 
                              alt="Branding Project" 
                              fill 
                              style={{ objectFit: 'cover' }} 
                              unoptimized={true}
                            />
                        </div>
                        <div className="item-info" style={{ marginTop: "20px" }}>
                            <span className="item-category" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", color: "#888888", marginBottom: "5px", display: "block" }}>Branding / Identidad</span>
                            <h3 className="item-title creative-serif" style={{ fontSize: "1.5rem", fontWeight: 400 }}>Esencia Pura</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="section" style={{ padding: "150px 0", background: "#fafafa" }}>
            <div className="container">
                <div className="tabs-container reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div className="tabs-header" style={{ display: "flex", justifyContent: "center", gap: "60px", marginBottom: "60px", borderBottom: "1px solid #eee" }}>
                        <button className={`tab-btn ${activeTab === 'filosofia' ? 'active' : ''}`} onClick={() => setActiveTab('filosofia')}>Filosofía</button>
                        <button className={`tab-btn ${activeTab === 'proceso' ? 'active' : ''}`} onClick={() => setActiveTab('proceso')}>Proceso</button>
                        <button className={`tab-btn ${activeTab === 'equipo' ? 'active' : ''}`} onClick={() => setActiveTab('equipo')}>Equipo</button>
                    </div>

                    {activeTab === 'filosofia' && (
                    <div id="filosofia" className="tab-content active">
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "30px", fontWeight: 400 }}>Creemos en la simplicidad como máxima sofisticación.</h3>
                        <p style={{ fontSize: "1.2rem", opacity: 0.7, maxWidth: "600px" }}>Cada píxel, cada espacio en blanco, tiene un propósito. No decoramos, comunicamos a través de la forma y la función.</p>
                    </div>
                    )}

                    {activeTab === 'proceso' && (
                    <div id="proceso" className="tab-content active">
                        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginTop: "80px" }}>
                            <div className="process-item" style={{ position: "relative", paddingTop: "40px", borderTop: "1px solid #eee" }}>
                                <span className="process-num" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "#eee", position: "absolute", top: "-20px", left: 0, zIndex: -1 }}>01</span>
                                <h4>Descubrimiento</h4>
                                <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "10px" }}>Entendemos tu ADN de marca y objetivos.</p>
                            </div>
                            <div className="process-item" style={{ position: "relative", paddingTop: "40px", borderTop: "1px solid #eee" }}>
                                <span className="process-num" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "#eee", position: "absolute", top: "-20px", left: 0, zIndex: -1 }}>02</span>
                                <h4>Concepto</h4>
                                <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "10px" }}>Exploramos rutas visuales disruptivas.</p>
                            </div>
                        </div>
                    </div>
                    )}

                    {activeTab === 'equipo' && (
                    <div id="equipo" className="tab-content active">
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", marginBottom: "30px", fontWeight: 400 }}>Mentes creativas unidas por la visión.</h3>
                        <p style={{ fontSize: "1.2rem", opacity: 0.7, maxWidth: "600px" }}>Un colectivo de diseñadores, fotógrafos y desarrolladores que desafían los límites de lo convencional.</p>
                    </div>
                    )}
                </div>
            </div>
        </section>

        <section id="contact" className="section" style={{ padding: "150px 0" }}>
            <div className="container">
                <h2 className="section-title reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", marginBottom: "80px", textAlign: "center", fontWeight: 400 }}>Hablemos de tu Visión</h2>
                <div className="contact-form reveal" style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <form id="creativeForm" onSubmit={handleFormSubmit}>
                        <div className="form-group" style={{ marginBottom: "40px" }}>
                            <label style={{ display: "block", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>Nombre</label>
                            <input type="text" required style={{ width: "100%", padding: "15px 0", background: "transparent", border: "none", borderBottom: "1px solid #ddd", fontFamily: "inherit", fontSize: "1.1rem" }} />
                        </div>
                        <div className="form-group" style={{ marginBottom: "40px" }}>
                            <label style={{ display: "block", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>Email</label>
                            <input type="email" required style={{ width: "100%", padding: "15px 0", background: "transparent", border: "none", borderBottom: "1px solid #ddd", fontFamily: "inherit", fontSize: "1.1rem" }} />
                        </div>
                        <button type="submit" className="btn-creative transform-gpu">Enviar Propuesta</button>
                    </form>
                </div>
            </div>
        </section>

        <section className="return-section reveal" style={{ padding: "150px 0", textAlign: "center", background: "#111111", color: "white" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", marginBottom: "40px", fontWeight: 400 }}>¿Creamos algo icónico?</h2>
                <p style={{ marginBottom: "60px", opacity: 0.5, maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                    Esta demo representa nuestra capacidad para fusionar arte y tecnología en una sola visión coherente.
                </p>
                <Link href="/#portfolio" className="btn-return">
                    <span>← Volver a M&C Web Solutions</span>
                </Link>
            </div>
        </section>

        <footer style={{ padding: "100px 0", textAlign: "center", borderTop: "1px solid #eee" }}>
            <div className="container">
                <p>Demo técnica de Portfolio Creativo por <Link href="/" style={{ color: "#111111", fontWeight: 700, textDecoration: "none" }}>M&C Web Solutions</Link>.</p>
            </div>
        </footer>

        {showSuccess && (
          <div id="successOverlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, textAlign: "center" }}>
              <div className="success-content">
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", marginBottom: "20px", fontWeight: 400 }}>Gracias.</h2>
                  <p>Tu visión ha sido recibida. Así es como tus clientes experimentarán tu profesionalidad.</p>
                  <button onClick={() => setShowSuccess(false)} className="btn-creative" style={{ background: "#111111", color: "white", textTransform: "uppercase", letterSpacing: "3px", fontSize: "0.8rem", padding: "20px 50px", border: "none", cursor: "pointer", marginTop: "40px" }}>Cerrar Demo</button>
              </div>
          </div>
        )}
      </div>
    </>
  );
}
