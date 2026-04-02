"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VERTICES = [
  { 
    id: 'precision', 
    title: 'Precisión', 
    desc: 'Como ingenieros, cada línea de código tiene un propósito. No dejamos nada al azar.',
    pos: { x: 50, y: 1 } 
  },
  { 
    id: 'velocidad', 
    title: 'Velocidad', 
    desc: 'Entregas en 48 horas reales. Optimizamos procesos para que tu negocio no espere.',
    pos: { x: 95, y: 25 } 
  },
  { 
    id: 'innovacion', 
    title: 'Innovación', 
    desc: 'IA de vanguardia integrada en el flujo de trabajo para resultados imposibles hace un año.',
    pos: { x: 95, y: 75 } 
  },
  { 
    id: 'eficiencia', 
    title: 'Eficiencia', 
    desc: 'Máximo valor con el mínimo desperdicio de recursos. Ingeniería de organización pura.',
    pos: { x: 50, y: 99 } 
  },
  { 
    id: 'estetica', 
    title: 'Estética', 
    desc: 'Lo funcional debe ser bello. Diseño minimalista que potencia la experiencia de usuario.',
    pos: { x: 5, y: 75 } 
  },
  { 
    id: 'escalabilidad', 
    title: 'Escalabilidad', 
    desc: 'Webs preparadas para crecer contigo. Código limpio y modular para el futuro.',
    pos: { x: 5, y: 25 } 
  }
];

const DNAHexagon = () => {
  const [activeVertex, setActiveVertex] = useState(VERTICES[0]);

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center mx-auto py-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[12vw] font-black tracking-tighter uppercase">Engineering</span>
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full p-12"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          {/* Outer hexagons from logo.svg */}
          <polygon 
            points="50,22 80,38 80,62 50,78 20,62 20,38"
            className="fill-none stroke-white/20 stroke-[0.5]"
          />
          <polygon 
            points="50,1 95,25 95,75 50,99 5,75 5,25"
            className="fill-none stroke-cyan-500/50 stroke-[1.5]"
            style={{ filter: "drop-shadow(0 0 10px rgba(100, 255, 218, 0.3))" }}
          />

          {/* Radial Spokes */}
          {VERTICES.map((v, i) => (
            <line 
              key={`spoke-${i}`}
              x1="50" y1="50"
              x2={v.pos.x} y2={v.pos.y}
              className="stroke-white/10 stroke-[0.5]"
            />
          ))}

          {/* Center Hexagons */}
          <polygon 
            points="50,42 57,46 57,54 50,58 43,54 43,46"
            className="fill-cyan-500/10 stroke-cyan-500 stroke-[1]"
            style={{ filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.5))" }}
          />

          {/* Interaction Nodes */}
          {VERTICES.map((v) => (
            <g key={v.id}>
              <motion.circle
                cx={v.pos.x}
                cy={v.pos.y}
                r={activeVertex.id === v.id ? 2.5 : 1.5}
                className={`${activeVertex.id === v.id ? 'fill-cyan-400' : 'fill-background'} stroke-cyan-400 stroke-[0.8] cursor-pointer`}
                onMouseEnter={() => setActiveVertex(v)}
                whileHover={{ scale: 1.5 }}
                style={{ filter: "drop-shadow(0 0 5px rgba(100, 255, 218, 1))" }}
              />
              <text
                x={v.pos.x > 50 ? v.pos.x + 4 : v.pos.x - 4}
                y={v.pos.y}
                textAnchor={v.pos.x > 50 ? "start" : "end"}
                className={`text-[3px] font-mono uppercase tracking-[0.2em] font-bold ${activeVertex.id === v.id ? 'fill-cyan-400' : 'fill-muted'} transition-colors pointer-events-none`}
              >
                {v.title}
              </text>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Central Content display (Non-rotating overlay) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[180px] text-center p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVertex.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-black uppercase text-foreground tracking-[0.2em] mb-2">
                {activeVertex.title}
              </h3>
              <p className="text-[10px] text-muted leading-relaxed font-medium">
                {activeVertex.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DNAHexagon;
