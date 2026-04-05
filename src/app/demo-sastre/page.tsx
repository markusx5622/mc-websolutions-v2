"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SastreVlcDemo() {
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
    handleReveal();

    // Navbar Scroll
    const handleNavScroll = () => {
      const nav = document.getElementById('navbar-sastre');
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
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&family=Inter:wght@300;400;600&display=swap');

        :root {
          --sastre-charcoal: #1A1A1B;
          --sastre-gold: #C5A059;
          --sastre-ivory: #FDFCF8;
          --sastre-text: #2C2C2C;
        }

        .sastre-body {
          font-family: 'Inter', sans-serif;
          background-color: var(--sastre-ivory);
          color: var(--sastre-text);
          line-height: 1.7;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .serif {
          font-family: 'Bodoni Moda', serif;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Navigation */
        #navbar-sastre {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 30px 0;
          z-index: 1000;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        #navbar-sastre.scrolled {
          background: rgba(253, 252, 248, 0.95);
          padding: 15px 0;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-sastre {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--sastre-charcoal);
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--sastre-charcoal);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--sastre-gold);
        }

        /* Hero */
        .hero-sastre {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background: linear-gradient(rgba(26, 26, 27, 0.4), rgba(26, 26, 27, 0.4)), 
                      url('https://images.unsplash.com/photo-1598501022234-7965b3f1a610?auto=format&fit=crop&w=1920&q=90');
          background-size: cover;
          background-position: center;
          color: var(--sastre-ivory);
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 8vw, 5rem);
          margin-bottom: 20px;
          font-weight: 400;
        }

        .hero-content p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 40px;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        /* Reveal Animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Sections */
        .section-padding {
          padding: 120px 0;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          text-align: center;
          color: var(--sastre-charcoal);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .image-wrapper img {
          width: 100%;
          display: block;
          transition: transform 1.5s;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        /* Experience Steps */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 60px;
        }

        .step-card {
          text-align: center;
          padding: 40px 20px;
          background: #fff;
          border: 1px solid #f0f0f0;
          transition: all 0.4s;
        }

        .step-card:hover {
          border-color: var(--sastre-gold);
          transform: translateY(-10px);
        }

        .step-number {
          font-family: 'Bodoni Moda', serif;
          font-size: 2rem;
          color: var(--sastre-gold);
          margin-bottom: 15px;
          display: block;
        }

        .step-card h3 {
          font-size: 1rem;
          text-transform: uppercase;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .step-card p {
          font-size: 0.85rem;
          color: #666;
        }

        /* Form */
        .form-container {
          max-width: 700px;
          margin: 0 auto;
          background: var(--sastre-charcoal);
          padding: 60px;
          color: var(--sastre-ivory);
        }

        .sastre-input {
          width: 100%;
          padding: 15px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(253, 252, 248, 0.2);
          color: var(--sastre-ivory);
          margin-bottom: 30px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.3s;
        }

        .sastre-input:focus {
          border-color: var(--sastre-gold);
        }

        .btn-gold {
          background: var(--sastre-gold);
          color: var(--sastre-charcoal);
          border: none;
          padding: 18px 40px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          margin-top: 20px;
        }

        .btn-gold:hover {
          background: #d4ae6a;
          transform: translateY(-2px);
        }

        /* Footer */
        .sastre-footer {
          padding: 80px 0;
          background: #f9f9f9;
          text-align: center;
          border-top: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .philosophy-grid, .steps-grid {
            grid-template-columns: 1fr;
          }
          .nav-links { display: none; }
          .hero-content h1 { font-size: 3rem; }
        }
      `}} />

      <div className="sastre-body">
        <nav id="navbar-sastre">
          <div className="container nav-content">
            <Link href="/" className="logo-sastre">ATELIER VALENCIA</Link>
            <ul className="nav-links">
              <li><a href="#filosofia">Filosofía</a></li>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#cita">Cita Privada</a></li>
            </ul>
          </div>
        </nav>

        <section className="hero-sastre">
          <div className="hero-content reveal">
            <h1 className="serif">Elegancia Mediterránea.</h1>
            <p className="serif" style={{ fontStyle: 'italic' }}>
              Grabada en cada costura, inspirada en la luz de Valencia. 
              Sastrería artesanal que perdura en el tiempo.
            </p>
            <a href="#cita" className="btn-gold" style={{ width: 'auto', display: 'inline-block' }}>RESERVAR CITA</a>
          </div>
        </section>

        <section id="filosofia" className="section-padding">
          <div className="container">
            <div className="philosophy-grid">
              <div className="reveal">
                <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Nuestra Filosofía</h2>
                <p style={{ marginBottom: '20px' }}>
                  Desde nuestro atelier en el corazón de <strong>Ciutat Vella</strong>, recuperamos el valor de lo hecho a mano. Entendemos la sastrería no como un proceso industrial, sino como una conversación entre el sastre, la tela y la historia de quien la viste.
                </p>
                <p>
                  Utilizamos linos y lanas que respiran con el Mediterráneo, seleccionados de las tejedurías más prestigiosas para garantizar una caída impecable bajo el sol de nuestra tierra.
                </p>
              </div>
              <div className="image-wrapper reveal">
                <img src="https://images.unsplash.com/photo-1594932224828-b4b057b69b3f?auto=format&fit=crop&w=800&q=80" alt="Sastrería Artesanal" />
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-padding" style={{ background: '#fff' }}>
          <div className="container">
            <h2 className="section-title serif">La Experiencia a Medida</h2>
            <div className="steps-grid">
              <div className="step-card reveal">
                <span className="step-number">01</span>
                <h3>Materia Prima</h3>
                <p>Selección personal de tejidos naturales: algodones, linos y cashmeres de calidad superior.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-number">02</span>
                <h3>El Corte</h3>
                <p>Toma de medidas exhaustiva para crear un patrón único que respete su fisonomía natural.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-number">03</span>
                <h3>La Prueba</h3>
                <p>Ajustes de precisión sobre el cuerpo para asegurar que la comodidad preceda a la forma.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-number">04</span>
                <h3>Entrega</h3>
                <p>Una prenda con alma valenciana, terminada a mano y lista para acompañarle toda una vida.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cita" className="section-padding">
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 className="section-title serif" style={{ marginBottom: '10px' }}>Reserva tu Cita</h2>
              <p style={{ opacity: 0.6 }}>Atención exclusiva en nuestro atelier de Valencia.</p>
            </div>
            <div className="form-container reveal">
              <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Nombre completo" className="sastre-input" required />
                <input type="email" placeholder="Correo electrónico" className="sastre-input" required />
                <select className="sastre-input" required>
                  <option value="">Tipo de servicio</option>
                  <option>Traje Bespoke (Tres pruebas)</option>
                  <option>Camisería Artesanal</option>
                  <option>Alta Costura Femenina</option>
                  <option>Ceremonia</option>
                </select>
                <textarea placeholder="Mensaje o detalles adicionales" className="sastre-input" rows={3}></textarea>
                <button type="submit" className="btn-gold">SOLICITAR CONSULTA</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="sastre-footer">
          <div className="container">
            <p className="serif" style={{ fontSize: '1.2rem', marginBottom: '20px', letterSpacing: '2px' }}>ATELIER VALENCIA</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Calle de la Paz, Valencia · Sastrería de Tradición Mediterránea
            </p>
            <div style={{ marginTop: '40px' }}>
              <Link href="/#portfolio" style={{ color: 'var(--sastre-gold)', textDecoration: 'none', fontSize: '0.8rem', borderBottom: '1px solid' }}>
                VOLVER A M&C WEB SOLUTIONS
              </Link>
            </div>
          </div>
        </footer>

        {showSuccess && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(26, 26, 27, 0.98)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2000, textAlign: "center", color: "var(--sastre-ivory)" }}>
            <div className="container reveal active" style={{ maxWidth: '500px' }}>
              <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--sastre-gold)', marginBottom: '20px' }}>Gracias.</h2>
              <p>Su solicitud ha sido recibida con discreción. Nos pondremos en contacto en menos de 24 horas para confirmar su cita privada.</p>
              <button onClick={() => setShowSuccess(false)} className="btn-gold" style={{ marginTop: '30px', width: 'auto' }}>CERRAR</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
