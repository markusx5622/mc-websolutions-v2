"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DemoPortfolioPage() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);

    const handleMouseDown = () => cursor?.classList.add('click');
    const handleMouseUp = () => cursor?.classList.remove('click');
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const interactiveSelectors = 'a, button, .gallery-item';
    const elements = document.querySelectorAll(interactiveSelectors);

    const handleMouseEnter = () => cursor?.classList.add('hover');
    const handleMouseLeave = () => cursor?.classList.remove('hover');

    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Parallax Text
    const handleScroll = () => {
      const text = document.getElementById('parallax-text');
      if (text) {
        const scroll = window.pageYOffset;
        const speed = 0.2;
        text.style.transform = `translateY(${scroll * speed - 100}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    { id: 1, category: 'arch', title: 'Casa de Cristal', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200' },
    { id: 2, category: 'fashion', title: 'Vogue Editorial', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200' },
    { id: 3, category: 'arch', title: 'Minimal Loft', img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200' },
    { id: 4, category: 'fashion', title: 'Urban Chic', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .demo-portfolio-body {
            font-family: 'Montserrat', sans-serif;
            background-color: #FFFFFF;
            color: #1A1A1A;
            line-height: 1.6;
            overflow-x: hidden;
            cursor: none !important;
            min-height: 100vh;
        }

        .demo-portfolio-body * {
            cursor: none !important;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
        }

        #cursor {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 1px solid #1A1A1A;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease-out, background 0.3s ease;
            transform: translate(-50%, -50%);
        }

        #cursor.hover {
            transform: translate(-50%, -50%) scale(1.5);
            background: rgba(0,0,0,0.05);
        }

        #cursor.click {
            transform: translate(-50%, -50%) scale(0.8);
            background: #D4AF37;
            border-color: #D4AF37;
        }

        nav {
            padding: 40px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-portfolio {
            font-size: 1.5rem;
            text-decoration: none;
            color: #1A1A1A;
            letter-spacing: 4px;
            font-weight: 700;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: #1A1A1A;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            opacity: 0.6;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-links a:hover { opacity: 1; }

        .hero-portfolio {
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero-portfolio h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3rem, 10vw, 8rem);
            line-height: 0.9;
            margin-bottom: 20px;
            font-weight: 400;
        }

        .hero-portfolio p {
            font-size: 0.9rem;
            letter-spacing: 5px;
            text-transform: uppercase;
            opacity: 0.5;
        }

        .filter-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 60px;
        }

        .filter-btn {
            background: none;
            border: none;
            font-family: inherit;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            opacity: 0.4;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .filter-btn.active {
            opacity: 1;
            border-bottom: 1px solid #1A1A1A;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-bottom: 100px;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            aspect-ratio: 4/5;
            background: #F5F5F5;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .gallery-item:hover img {
            transform: scale(1.05);
        }

        .item-info {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: white;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .gallery-item:hover .item-info {
            opacity: 1;
            transform: translateY(0);
        }

        .story-section {
            padding: 200px 0;
            background: #F5F5F5;
            text-align: center;
        }

        .story-text {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 5vw, 4rem);
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.2;
            font-style: italic;
        }

        @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: 1fr; }
            .container { padding: 0 20px; }
            .hero-portfolio h1 { font-size: 4rem; }
        }
      `}} />

      <div className="demo-portfolio-body">
        <div id="cursor"></div>

        <div className="container">
          <nav>
            <Link href="/" className="logo-portfolio">STUDIO</Link>
            <ul className="nav-links">
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>

          <section className="hero-portfolio">
            <p>Arquitectura & Diseño</p>
            <h1>La Belleza de lo Simple</h1>
          </section>

          <section id="projects" style={{ padding: "100px 0" }}>
            <div className="filter-container">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todos</button>
              <button className={`filter-btn ${filter === 'arch' ? 'active' : ''}`} onClick={() => setFilter('arch')}>Arquitectura</button>
              <button className={`filter-btn ${filter === 'fashion' ? 'active' : ''}`} onClick={() => setFilter('fashion')}>Moda</button>
            </div>

            <div className="gallery-grid" id="gallery">
              {filteredProjects.map(project => (
                <div key={project.id} className={`gallery-item ${project.category}`}>
                  <img src={project.img} alt={project.title} />
                  <div className="item-info">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{project.title}</h3>
                    <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "2px" }}>
                      {project.category === 'arch' ? 'Arquitectura' : 'Moda'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="story-section">
            <div className="story-text" id="parallax-text">
              "Diseñamos espacios que respiran, capturamos momentos que perduran. Ingeniería aplicada a la emoción."
            </div>
          </section>

          <footer style={{ padding: "80px 0", textAlign: "center", borderTop: "1px solid #eee" }}>
            <p>Demostración técnica de <strong>M&C Web Solutions</strong>. <Link href="/" style={{ color: "#1A1A1A", textDecoration: "none", fontWeight: 600 }}>Volver a la principal</Link></p>
          </footer>
        </div>
      </div>
    </>
  );
}
