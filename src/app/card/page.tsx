"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function CardPage() {
  const initParticles = () => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      (window as any).particlesJS("particles-js", {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#64FFDA" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.35, "random": false },
          "size": { "value": 3, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#64FFDA", "opacity": 0.2, "width": 1 },
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
      
      <style dangerouslySetInnerHTML={{ __html: `
        .card-body {
            background-color: #0A192F;
            color: #E6F1FF;
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            overflow: hidden;
            position: relative;
        }

        #particles-js {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.4;
            pointer-events: none;
        }

        .content-wrapper {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .logo-box {
            width: 180px;
            height: 180px;
            margin-bottom: 1.5rem;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.45));
            color: #FFFFFF;
            animation: float-card 6s ease-in-out infinite;
        }

        @keyframes float-card {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .card-h1 {
            font-family: 'Montserrat';
            font-size: 2.8rem;
            margin: 0;
            letter-spacing: -1px;
        }

        .tagline-card {
            font-family: 'Roboto Mono';
            color: #64FFDA;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 2.5rem;
        }

        .links-grid {
            width: 100%;
            max-width: 320px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .card-btn {
            display: block;
            padding: 18px;
            border: 1px solid #64FFDA;
            color: #64FFDA;
            text-decoration: none;
            font-family: 'Roboto Mono';
            font-size: 0.9rem;
            border-radius: 8px;
            text-align: center;
            transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            background: rgba(100, 255, 218, 0.03);
        }

        .card-btn:hover {
            background: #64FFDA;
            color: #0A192F;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);
        }

        .btn-main {
            background: #64FFDA;
            color: #0A192F;
            font-weight: 800;
        }

        .footer-info {
            margin-top: 4rem;
            font-family: 'Roboto Mono';
            font-size: 0.65rem;
            opacity: 0.4;
            text-transform: uppercase;
        }
      `}} />

      <div className="card-body">
        <div id="particles-js" suppressHydrationWarning></div>

        <div className="content-wrapper">
            <div className="logo-box">
                <img src="/logo.svg" alt="M&C Logo" style={{ width: "100%", height: "100%" }} />
            </div>

            <h1 className="card-h1">M&C<span style={{ color: "#64FFDA" }}>.</span></h1>
            <div className="tagline-card">Ingeniería Web UEV</div>

            <div className="links-grid">
                <Link href="/#briefing-form" className="card-btn btn-main">🚀 INICIAR MI PROYECTO</Link>
                <Link href="/" className="card-btn">🌐 Visitar Web Oficial</Link>
                <a href="mailto:mandcwebsolutions@gmail.com" className="card-btn">📧 Enviar Email Directo</a>
            </div>

            <div className="footer-info">
                Soluciones en 48h con IA
            </div>
        </div>
      </div>
    </>
  );
}
