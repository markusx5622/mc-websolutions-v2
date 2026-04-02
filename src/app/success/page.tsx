"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

export default function SuccessPage() {
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

  useEffect(() => {
    if ((window as any).particlesJS) {
      initParticles();
    }
  }, []);

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
        onLoad={initParticles}
      />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .success-body {
            background-color: #0A192F;
            color: #E6F1FF;
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
            position: relative;
            overflow: hidden;
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

        .success-card {
            padding: 3rem;
            border: 1px solid #64FFDA;
            border-radius: 12px;
            background: rgba(100, 255, 218, 0.05);
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .logo-box {
            width: 120px;
            height: 120px;
            margin-bottom: 1.5rem;
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
            color: #FFFFFF;
            animation: float-success 6s ease-in-out infinite;
        }

        @keyframes float-success {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .success-icon {
            font-size: 3rem;
            color: #64FFDA;
            margin-bottom: 1rem;
        }

        .success-h1 { font-family: 'Montserrat'; font-size: 2rem; margin-bottom: 1rem; }
        .success-p { color: #8892B0; line-height: 1.6; margin-bottom: 2rem; }

        .btn-back {
            display: inline-block;
            padding: 1rem 2rem;
            border: 1px solid #64FFDA;
            color: #64FFDA;
            text-decoration: none;
            font-family: 'Roboto Mono';
            border-radius: 4px;
            transition: 0.3s;
        }

        .btn-back:hover { background: rgba(100, 255, 218, 0.1); transform: translateY(-3px); }
      `}} />

      <div className="success-body">
        <div id="particles-js" suppressHydrationWarning></div>

        <div className="success-card">
            <div className="logo-box">
                <img src="/logo.svg" alt="M&C Logo" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="success-icon">✓</div>
            <h1 className="success-h1">¡Briefing Recibido!</h1>
            <p className="success-p">Juan y Marc ya tienen tus datos en el sistema. El motor de IA ha comenzado el pre-procesamiento. Nos pondremos en contacto contigo en las próximas 24 horas.</p>
            <Link href="/" className="btn-back">Volver a la Web</Link>
        </div>
      </div>
    </>
  );
}
