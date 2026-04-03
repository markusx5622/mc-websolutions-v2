"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DemoLocalPage() {
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

    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .demo-local-body {
            font-family: 'Montserrat', sans-serif;
            background-color: #FDFBF7;
            color: #3E2723;
            line-height: 1.6;
            min-height: 100vh;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        #navbar {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 0;
            z-index: 1000;
            background: rgba(253, 251, 247, 0.9);
            backdrop-filter: blur(5px);
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-local {
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
            color: #5D4037;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo-local::before {
            content: '←';
            font-size: 1rem;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
        }

        .logo-local:hover::before {
            opacity: 1;
            transform: translateX(0);
        }

        .nav-links {
            display: flex;
            gap: 25px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #3E2723;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .hero-local {
            height: 80vh;
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=90');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-top: 60px;
        }

        .hero-local h1 {
            font-family: 'Libre Baskerville', serif;
            font-size: 4rem;
            margin-bottom: 20px;
        }

        .hero-local p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 30px;
        }

        .btn-local {
            display: inline-block;
            padding: 15px 35px;
            background: #D4A373;
            color: white;
            text-decoration: none;
            font-weight: 700;
            border-radius: 50px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn-local:hover {
            background: #5D4037;
            transform: scale(1.05);
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

        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            border-bottom: 1px dotted #ccc;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        .item-name {
            font-weight: 700;
            font-size: 1.1rem;
        }

        .item-price {
            font-family: 'Libre Baskerville', serif;
            color: #8D6E63;
            font-weight: 700;
        }
      `}} />

      <div className="demo-local-body">
        <nav id="navbar">
            <div className="container nav-content">
                <Link href="/#portfolio" className="logo-local" title="Volver a M&C">CAFÉ ORIGEN</Link>
                <ul className="nav-links">
                    <li><a href="#menu">Carta</a></li>
                    <li><a href="#info">Horario</a></li>
                    <li><a href="#order">Pedidos</a></li>
                </ul>
            </div>
        </nav>

        <section className="hero-local">
            <div className="container">
                <h1 className="reveal">El Aroma de la Tradición.</h1>
                <p className="reveal">Café de especialidad tostado localmente. Un refugio para los amantes del buen gusto en el corazón de la ciudad.</p>
                <a href="#order" className="btn-local reveal">Pedir para Recoger</a>
            </div>
        </section>

        <section id="menu" style={{ padding: "100px 0" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Libre Baskerville', serif", textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#5D4037" }} className="reveal">Nuestra Selección</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center", marginBottom: "60px" }} className="reveal">
                    <div className="menu-img" style={{ position: 'relative', height: '400px', overflow: 'hidden', borderRadius: '15px' }}>
                        <Image src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=90" alt="Coffee" fill className="object-cover" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} priority />
                    </div>
                    <div className="menu-grid" style={{ display: "grid", gap: "40px" }}>
                        <div>
                            <h3 style={{ fontFamily: "'Libre Baskerville', serif", marginBottom: "20px", borderBottom: "2px solid #D4A373", display: "inline-block", color: "#5D4037" }}>Cafés</h3>
                            <div className="menu-item"><span className="item-name">Espresso Doble</span><span className="item-price">2.50€</span></div>
                            <div className="menu-item"><span className="item-name">Flat White</span><span className="item-price">3.20€</span></div>
                            <div className="menu-item"><span className="item-name">Cold Brew</span><span className="item-price">3.80€</span></div>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "'Libre Baskerville', serif", marginBottom: "20px", borderBottom: "2px solid #D4A373", display: "inline-block", color: "#5D4037" }}>Repostería</h3>
                            <div className="menu-item"><span className="item-name">Croissant de Mantequilla</span><span className="item-price">2.20€</span></div>
                            <div className="menu-item"><span className="item-name">Tarta de Queso Casera</span><span className="item-price">4.50€</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="info" style={{ padding: "100px 0", background: "#f9f9f9" }}>
            <div className="container">
                <div className="info-grid reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", textAlign: "center" }}>
                    <div style={{ padding: "30px", background: "white", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)" }}>
                        <h3 style={{ fontFamily: "'Libre Baskerville', serif", marginBottom: "15px", color: "#5D4037" }}>Ubicación</h3>
                        <p>Calle Principal, 42<br />Valencia, España</p>
                    </div>
                    <div style={{ padding: "30px", background: "white", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)" }}>
                        <h3 style={{ fontFamily: "'Libre Baskerville', serif", marginBottom: "15px", color: "#5D4037" }}>Horario</h3>
                        <p>Lunes - Viernes: 8:00 - 20:00<br />Sábados: 9:00 - 21:00</p>
                    </div>
                    <div style={{ padding: "30px", background: "white", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)" }}>
                        <h3 style={{ fontFamily: "'Libre Baskerville', serif", marginBottom: "15px", color: "#5D4037" }}>Contacto</h3>
                        <p>hola@cafeorigen.com<br />+34 960 000 000</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="order" style={{ padding: "100px 0" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Libre Baskerville', serif", textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#5D4037" }} className="reveal">Haz tu Pedido</h2>
                <div className="order-box reveal" style={{ maxWidth: "700px", margin: "0 auto", background: "white", padding: "50px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                    <form id="localForm" onSubmit={handleFormSubmit}>
                        <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            <input type="text" placeholder="Tu Nombre" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "15px" }} />
                            <input type="tel" placeholder="Teléfono" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "15px" }} />
                        </div>
                        <select required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "15px" }}>
                            <option value="">¿Qué te apetece?</option>
                            <option>Pack Desayuno</option>
                            <option>Café + Tarta</option>
                            <option>Solo Café</option>
                        </select>
                        <textarea placeholder="Notas adicionales (alergias, hora de recogida...)" rows={3} style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "15px", resize: "none" }}></textarea>
                        <button type="submit" className="btn-local" style={{ width: "100%" }}>Confirmar Pedido</button>
                    </form>
                    <p style={{ fontSize: "0.7rem", textAlign: "center", marginTop: "20px", opacity: 0.5, textTransform: "uppercase", letterSpacing: "1px" }}>
                        Sistema de gestión local optimizado por M&C Web Solutions
                    </p>
                </div>
            </div>
        </section>

        <section className="return-section reveal" style={{ padding: "100px 0", textAlign: "center", background: "#f0f0f0", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="container">
                <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "2.5rem", marginBottom: "20px", color: "#5D4037" }}>¿Listo para digitalizar tu negocio?</h2>
                <p style={{ marginBottom: "40px", opacity: 0.7, maxWidth: "600px", margin: "0 auto 40px" }}>
                    Impulsa tus ventas locales con una presencia web profesional y optimizada para resultados.
                </p>
                <Link href="/#portfolio" className="btn-local" style={{ borderRadius: "50px", textDecoration: "none" }}>
                    ← Volver a M&C Web Solutions
                </Link>
            </div>
        </section>

        <footer style={{ padding: "60px 0", background: "#f0f0f0", textAlign: "center", fontSize: "0.9rem" }}>
            <div className="container">
                <p>Demo técnica de Negocio Local por <Link href="/#portfolio" style={{ color: "#5D4037", fontWeight: 700, textDecoration: "none" }}>M&C Web Solutions</Link>.</p>
            </div>
        </footer>

        {showSuccess && (
          <div id="successOverlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(253, 251, 247, 0.98)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, textAlign: "center" }}>
              <div className="success-content">
                  <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "3rem", color: "#5D4037", marginBottom: "20px" }}>¡Pedido Recibido!</h2>
                  <p>Tu café estará listo en 10 minutos. Así es como tus clientes locales experimentarán tu eficiencia.</p>
                  <button onClick={() => setShowSuccess(false)} className="btn-local" style={{ marginTop: "30px" }}>Cerrar Demo</button>
              </div>
          </div>
        )}
      </div>
    </>
  );
}
