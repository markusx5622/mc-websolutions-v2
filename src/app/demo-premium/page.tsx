"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DemoPremiumPage() {
  const [activeTab, setActiveTab] = useState('masajes');
  const [basePrice, setBasePrice] = useState(60);
  const [multiplier, setMultiplier] = useState(1);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
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
    handleReveal();

    const handleNavScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.pageYOffset > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleNavScroll);

    return () => {
      window.removeEventListener('scroll', handleReveal);
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  const galleryItems = [
    { id: 1, category: 'spa', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=90', alt: 'Piscina de Hidroterapia' },
    { id: 2, category: 'rooms', img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=90', alt: 'Sala de Masaje Premium' },
    { id: 3, category: 'relax', img: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=800&q=90', alt: 'Zona de Meditación' },
    { id: 4, category: 'spa', img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=90', alt: 'Circuito de Aguas' },
    { id: 5, category: 'rooms', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=90', alt: 'Suite de Tratamiento' },
    { id: 6, category: 'relax', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=90', alt: 'Lounge de Descanso' },
  ];

  const filteredGallery = galleryFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === galleryFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .demo-premium-body {
            font-family: 'Montserrat', sans-serif;
            background-color: #F9F7F2 !important; /* Force reset */
            color: #4A4A4A !important;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .demo-premium-body * {
            font-family: 'Montserrat', sans-serif;
            border-color: #E0D8C3;
        }

        .luxury-serif {
            font-family: 'Cormorant Garamond', serif !important;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        #navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 0;
            z-index: 1000;
            transition: all 0.4s ease;
            background: transparent;
        }

        #navbar.scrolled {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(15px);
            padding: 15px 0;
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-premium {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: #1A1A1A;
            text-decoration: none;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-premium::before {
            content: '←';
            font-size: 1rem;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.4s ease;
        }

        .logo-premium:hover::before {
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
            color: #1A1A1A;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            transition: all 0.4s ease;
        }

        .nav-links a:hover {
            color: #C5A059;
        }

        .hero-premium {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), 
                        url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
        }

        .btn-gold {
            display: inline-block;
            padding: 15px 40px;
            background: #C5A059;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.8rem;
            transition: all 0.4s ease;
            border: 1px solid #C5A059;
            cursor: pointer;
        }

        .btn-gold:hover {
            background: transparent;
            color: #C5A059;
        }

        .tab-btn {
            padding: 15px 30px;
            background: none;
            border: none;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            color: #999;
            transition: all 0.4s ease;
            position: relative;
        }

        .tab-btn.active {
            color: #C5A059;
        }

        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #C5A059;
        }

        @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
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

        .filter-btn.active {
            background: #C5A059;
            color: white;
            border-color: #C5A059;
        }

        .booking-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #E0D8C3;
            background: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            margin-bottom: 20px;
            color: #1A1A1A;
        }

        .booking-input:focus {
            outline: none;
            border-color: #C5A059;
        }
      `}} />

      <div className="demo-premium-body">
        <nav id="navbar">
            <div className="container nav-content">
                <Link href="/#portfolio" className="logo-premium" title="Volver a M&C Web Solutions">AURA</Link>
                <ul className="nav-links">
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#calculator">Presupuesto</a></li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="#reserve">Reservar</a></li>
                </ul>
            </div>
        </nav>

        <section className="hero-premium">
            <div className="hero-content" style={{ opacity: 0, transform: "translateY(30px)", animation: "fadeIn 1.5s forwards 0.5s" }}>
                <p className="luxury-serif" style={{ fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>Experiencia de Lujo</p>
                <h1 className="luxury-serif" style={{ fontSize: "5.5rem", color: "white", marginBottom: "30px", fontWeight: 300 }}>Renace en Aura</h1>
                <a href="#reserve" className="btn-gold transform-gpu">Reservar Ahora</a>
            </div>
        </section>

        <section id="services" className="section reveal" style={{ padding: "100px 0" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", textAlign: "center", fontSize: "3rem", marginBottom: "50px", color: "#1A1A1A" }}>Nuestros Rituales</h2>
                <div style={{ marginTop: "40px" }}>
                    <div className="tabs-header" style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px", borderBottom: "1px solid #ddd" }}>
                        <button className={`tab-btn ${activeTab === 'masajes' ? 'active' : ''}`} onClick={() => setActiveTab('masajes')}>Masajes</button>
                        <button className={`tab-btn ${activeTab === 'faciales' ? 'active' : ''}`} onClick={() => setActiveTab('faciales')}>Faciales</button>
                        <button className={`tab-btn ${activeTab === 'rituales' ? 'active' : ''}`} onClick={() => setActiveTab('rituales')}>Rituales</button>
                    </div>

                    <div style={{ display: activeTab === 'masajes' ? 'grid' : 'none', gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "center" }}>
                        <div className="tab-image" style={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '5px' }}>
                            <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=90" alt="Masaje Terapéutico Profesional" fill className="object-cover" style={{ boxShadow: "20px 20px 0 #C5A059" }} priority />
                        </div>
                        <div className="tab-text">
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A1A" }}>Masajes Terapéuticos</h3>
                            <p>Libera la tensión acumulada con nuestras técnicas ancestrales combinadas con aceites esenciales orgánicos. Una experiencia diseñada para restaurar el equilibrio entre cuerpo y mente.</p>
                        </div>
                    </div>

                    <div style={{ display: activeTab === 'faciales' ? 'grid' : 'none', gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "50px", alignItems: "center" }}>
                        <div className="tab-image" style={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '5px' }}>
                            <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=90" alt="Tratamiento Facial de Lujo" fill className="object-cover" style={{ boxShadow: "20px 20px 0 #C5A059" }} />
                        </div>
                        <div className="tab-text">
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A1A" }}>Cuidado Facial Avanzado</h3>
                            <p>Tratamientos personalizados que devuelven la luminosidad y vitalidad a tu piel. Utilizamos tecnología de vanguardia y productos de alta gama botánica.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="calculator" className="section reveal" style={{ padding: "100px 0", backgroundColor: "#fff" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", textAlign: "center", fontSize: "3rem", marginBottom: "50px", color: "#1A1A1A" }}>Calculadora de Bienestar</h2>
                <div className="calculator-box" style={{ background: "white", padding: "50px", borderRadius: "10px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", maxWidth: "800px", margin: "0 auto" }}>
                    <div className="calc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", marginBottom: "30px" }}>
                        <div className="form-group">
                            <label style={{ display: "block", marginBottom: "10px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#1A1A1A" }}>Tipo de Tratamiento</label>
                            <select onChange={(e) => setBasePrice(parseFloat(e.target.value))}>
                                <option value="60">Masaje Sueco</option>
                                <option value="90">Piedras Volcánicas</option>
                                <option value="75">Facial Hidratante</option>
                                <option value="120">Ritual Aura</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={{ display: "block", marginBottom: "10px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#1A1A1A" }}>Duración / Intensidad</label>
                            <select onChange={(e) => setMultiplier(parseFloat(e.target.value))}>
                                <option value="1">Sesión Estándar</option>
                                <option value="1.5">Sesión Extendida (+50%)</option>
                                <option value="2">Doble Sesión (x2)</option>
                            </select>
                        </div>
                    </div>
                    <div className="price-display" style={{ textAlign: "center", padding: "20px", background: "#F9F7F2", borderRadius: "5px" }}>
                        <p>Inversión Estimada</p>
                        <span style={{ fontSize: "2.5rem", color: "#C5A059", fontWeight: 600 }}>{(basePrice * multiplier).toFixed(0)}€</span>
                        <p style={{ fontSize: "0.7rem", opacity: 0.6, marginTop: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>
                            Presupuesto generado por el motor de optimización de M&C
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="reserve" className="section reveal" style={{ padding: "100px 0", background: "#fdfdfd" }}>
            <div className="container" style={{ maxWidth: "600px" }}>
                <h2 className="luxury-serif" style={{ textAlign: "center", fontSize: "3rem", marginBottom: "15px", color: "#1A1A1A" }}>Cita de Bienestar</h2>
                <p style={{ textAlign: "center", marginBottom: "50px", fontSize: "0.9rem", color: "#666" }}>Permítanos diseñar su momento de desconexión absoluta.</p>
                
                <form onSubmit={handleFormSubmit} style={{ background: "white", padding: "40px", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>Nombre Completo</label>
                    <input type="text" className="booking-input" required placeholder="Ej: Elena Martínez" />
                    
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <label style={{ display: "block", marginBottom: "8px", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>Fecha</label>
                            <input type="date" className="booking-input" required />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "8px", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>Servicio</label>
                            <select className="booking-input" style={{ width: "100%" }}>
                                <option>Masaje Ritual</option>
                                <option>Facial Aura</option>
                                <option>Circuito Spa</option>
                                <option>Tratamiento Signature</option>
                            </select>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn-gold transform-gpu" style={{ width: "100%", marginTop: "20px" }}>Confirmar Disponibilidad</button>
                </form>
            </div>
        </section>

        <section className="return-section reveal" style={{ padding: "120px 0", textAlign: "center", background: "#1A1A1A", color: "white" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", marginBottom: "30px", color: "#C5A059", fontWeight: 400 }}>Eleva tu marca al siguiente nivel</h2>
                <p style={{ marginBottom: "50px", opacity: 0.8, maxWidth: "700px", margin: "0 auto 50px", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.9rem" }}>
                    Esta experiencia premium es solo el comienzo. Descubre cómo podemos transformar tu visión en una realidad digital impecable.
                </p>
                <Link href="/#portfolio" className="btn-gold" style={{ padding: "20px 50px", fontSize: "1rem" }}>
                    ← Volver a M&C Web Solutions
                </Link>
            </div>
        </section>

        {showSuccess && (
          <div id="successOverlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(26, 26, 26, 0.95)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, color: "white", textAlign: "center", padding: "20px" }}>
              <div className="success-content">
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C5A059", fontSize: "3rem", marginBottom: "20px" }}>¡Reserva Completada!</h2>
                  <p>Reserva de demostración completada. Así es como tus clientes recibirán su confirmación en un entorno real.</p>
                  <button className="btn-gold" onClick={() => setShowSuccess(false)}>Cerrar</button>
              </div>
          </div>
        )}
      </div>
    </>
  );
}
