"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ShoppingBag, 
  Zap, 
  RefreshCw, 
  Heart, 
  Trophy, 
  CheckCircle,
  FileText,
  Mail,
  ArrowRight
} from 'lucide-react';
import { ASSETS } from './assets';

export default function NanoBananaDemo() {
    const [view, setView] = useState('home');
    const [cans, setCans] = useState(4);
    const [impact, setImpact] = useState({ money: '0', co2: '0' });
    const [orderStep, setOrderStep] = useState('idle');
    const [filter, setFilter] = useState('All');

    const projects = [
        { id: 1, cat: 'Circular', title: 'VLC-Core v4', stats: '98% Recycled' },
        { id: 2, cat: 'B2B', title: 'Club Tenis Turia', stats: 'Partner Elite' },
        { id: 3, cat: 'Tech', title: 'Smart-Box Vending', stats: 'IoT Enabled' },
        { id: 4, cat: 'B2B', title: 'Valencia Tenis Center (VTC)', stats: 'Hub Logístico' },
        { id: 5, cat: 'Circular', title: 'Club de Tenis Burriana', stats: 'Residuo Cero' },
        { id: 6, cat: 'Tech', title: 'Academy Performance', stats: 'Data Tracking' }
    ];

    useEffect(() => { 
        setImpact({
            money: (cans * 2.50 * 12).toFixed(2),
            co2: (cans * 0.45 * 12).toFixed(1)
        });
    }, [cans]);

    const handleOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setOrderStep('submitting');
        setTimeout(() => setOrderStep('success'), 1500);
    };

    const toggleDossier = (e?: React.MouseEvent) => {
        if(e) e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        setTimeout(() => setView(view === 'home' ? 'dossier' : 'home'), 300);
    };

    const SocialIcons = () => (
        <div className="flex gap-8">
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-white/10 text-white hover:text-black hover:bg-accent transition-all cursor-pointer group shadow-xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 transition-transform group-hover:scale-110"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-white/10 text-white hover:text-black hover:bg-accent transition-all cursor-pointer group shadow-xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 transition-transform group-hover:scale-110"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-white/10 text-white hover:text-black hover:bg-accent transition-all cursor-pointer group shadow-xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 transition-transform group-hover:scale-110"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
        </div>
    );

    const FinalAnimatedCredit = () => (
        <div className="border-t border-white/5 pt-16 flex flex-col items-center justify-center">
            <motion.p 
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="shimmer-text text-xl md:text-2xl font-black font-mono tracking-[0.4em] uppercase italic text-center"
            >
                2026 NANO BANANA LABS // ENGINEERED BY M&C WEB SOLUTIONS
            </motion.p>
        </div>
    );

    return (
        <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans relative">
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=JetBrains+Mono:wght@400;800&display=swap');
                
                .font-mono { font-family: 'JetBrains Mono', monospace !important; }
                .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
                .accent-green { color: #DFFF00; }
                .accent-orange { color: #FF8C00; }
                .bg-accent { background-color: #DFFF00; }
                .bento-card { background: #0f0f0f; border: 1px solid #1a1a1a; transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1); overflow: hidden; }
                .bento-card:hover { border-color: #DFFF00; transform: translateY(-10px); box-shadow: 0 30px 60px -15px rgba(223, 255, 0, 0.15); }
                
                input[type="range"] { accent-color: #DFFF00; width: 100%; height: 8px; appearance: none; background: #222; border-radius: 20px; outline: none; }
                input[type="range"]::-webkit-slider-thumb { appearance: none; width: 28px; height: 28px; background: white; border-radius: 50%; cursor: pointer; border: 4px solid #DFFF00; }
                
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .shimmer-text {
                    background: linear-gradient(90deg, #555, #fff, #DFFF00, #fff, #555);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 5s linear infinite;
                }

                /* Custom Scrollbar */
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #050505; }
                ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover { background: #DFFF00; }
            `}} />

            <AnimatePresence mode="wait">
                {view === 'home' ? (
                    <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
                        
                        {/* --- NAVIGATION --- */}
                        <header className="fixed w-full z-[100] p-6 top-0">
                            <nav className="max-w-7xl mx-auto glass rounded-full p-4 px-10 flex justify-between items-center shadow-2xl border border-white/10">
                                <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                                    <img src={ASSETS.LOGO} className="h-10 w-10 rounded-full object-cover p-1 bg-white/5 border border-white/10" alt="Nano Banana" />
                                    <span className="font-mono font-extrabold tracking-tighter text-2xl uppercase italic accent-green leading-none">nano banana</span>
                                </div>
                                <div className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 font-mono italic">
                                    <a href="#mision" className="hover:text-white transition">Misión</a>
                                    <a href="#tecnologia" className="hover:text-white transition">Tecnología</a>
                                    <a href="#lab" className="hover:text-white transition">The_Lab</a>
                                    <a href="#suscripcion" className="hover:text-white transition">Loop</a>
                                    <a href="#portfolio" className="hover:text-white transition">Éxitos</a>
                                </div>
                                <a href="#lote" className="bg-accent text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg">Pedir Lote</a>
                            </nav>
                        </header>

                        {/* --- HERO --- */}
                        <section className="min-h-screen flex items-center pt-32 px-6 relative bg-[#030303]">
                            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 text-left">
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                    <span className="accent-orange font-mono font-extrabold tracking-[0.4em] uppercase block mb-6 italic text-sm">Engineering VLC // 2026</span>
                                    <h1 className="text-7xl lg:text-[8.5rem] font-black leading-[0.8] mb-10 tracking-tighter italic uppercase text-white">EL SET <br/><span className="accent-green">QUE CAMBIA</span> <br/>EL CICLO.</h1>
                                    <p className="text-gray-400 text-2xl mb-12 lg:max-w-xl leading-relaxed font-light">Reinventamos el mercado. Pelotas Pro fabricadas en Valencia con caucho recuperado local. <span className="text-white font-bold italic">Mismo rebote, coste disruptivo.</span></p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <a href="#tecnologia" className="bg-accent text-black px-12 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all text-center italic">Explorar "La Naranja"</a>
                                        <a href="#impacto" className="border border-accent text-accent px-12 py-6 font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-black transition-all text-center">Calculadora de Impacto</a>
                                    </div>
                                </motion.div>
                                <div className="relative p-4 bg-white/5 rounded-[4rem] border border-white/10 shadow-2xl">
                                    <img src={ASSETS.HERO} className="w-full h-auto rounded-[3.5rem] object-cover" alt="The Nano Banana Set" />
                                    <div className="absolute -bottom-8 -right-8 bg-accent text-black p-10 rounded-full shadow-2xl animate-bounce">
                                        <Zap className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- CALCULADORA --- */}
                        <section id="impacto" className="py-32 px-6 bg-black relative">
                            <div className="max-w-4xl mx-auto glass p-16 rounded-[3rem] text-center border-white/5">
                                <h2 className="text-5xl font-black mb-16 italic uppercase tracking-tighter">Impacto Loop 2026</h2>
                                <div className="space-y-12 mb-20">
                                    <div className="flex justify-between text-xs font-mono uppercase text-gray-500 tracking-[0.3em]">
                                        <span>Consumo: {cans} tubos/mes</span>
                                        <span className="accent-green">{impact.money}€ ahorro</span>
                                    </div>
                                    <input type="range" min="1" max="25" value={cans} onChange={(e) => setCans(parseInt(e.target.value))} />
                                </div>
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="bento-card p-12 rounded-[2rem]">
                                        <RefreshCw className="w-12 h-12 accent-green mb-6 mx-auto" />
                                        <div className="text-5xl font-black mb-2 italic">-{impact.co2}kg</div>
                                        <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400">CO2 Evitado/Año</div>
                                    </div>
                                    <div className="bento-card p-12 rounded-[2rem]">
                                        <Heart className="w-12 h-12 text-pink-500 mb-6 mx-auto" />
                                        <div className="text-5xl font-black mb-2 italic">100%</div>
                                        <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Circular VLC</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- PORTFOLIO --- */}
                        <section id="portfolio" className="py-32 px-6 bg-[#030303]">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex justify-between items-end mb-24">
                                    <h2 className="text-6xl font-black italic uppercase tracking-tighter">Casos <br/>de Éxito</h2>
                                    <div className="flex gap-4">
                                        {['All', 'B2B', 'Tech', 'Circular'].map(f => (
                                            <button key={f} onClick={() => setFilter(f)} className={`px-8 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${filter === f ? 'bg-accent text-black' : 'glass text-gray-500'}`}>{f}</button>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {projects.filter(p => filter === 'All' || p.cat === filter).map((p, idx) => (
                                        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.1 }} key={p.id} className="bento-card p-10 rounded-[2.5rem] group h-[400px] flex flex-col justify-between relative overflow-hidden">
                                            <div className="relative z-10">
                                                <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block italic">{p.cat} // 0x{p.id}</span>
                                                <h3 className="text-3xl font-black uppercase italic leading-tight mb-4">{p.title}</h3>
                                                <div className="text-gray-400 font-light">{p.stats}</div>
                                            </div>
                                            <div className="relative z-10 flex justify-end">
                                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                                                    <ChevronRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                            {/* Decorative backgrounds handled by ASSETS.PROJECTS */}
                                            {ASSETS.PROJECTS[idx] && (
                                                <img src={ASSETS.PROJECTS[idx]} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="Project Deco" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* --- FOOTER --- */}
                        <footer className="py-32 px-6 bg-black border-t border-white/5">
                            <div className="max-w-7xl mx-auto flex flex-col items-center">
                                <h2 className="text-[10vw] font-black italic uppercase shimmer-text tracking-tighter mb-20 leading-none">NANO BANANA</h2>
                                <SocialIcons />
                                <div className="mt-20 flex gap-20 text-[10px] font-mono tracking-widest uppercase text-gray-600">
                                    <a href="#" onClick={toggleDossier} className="hover:text-accent transition flex items-center gap-2"><FileText className="w-4 h-4" /> Dossier_2026</a>
                                    <a href="#lab" className="hover:text-accent transition flex items-center gap-2"><Trophy className="w-4 h-4" /> Partnership</a>
                                    <a href="mailto:info@nanobanana.vlc" className="hover:text-accent transition flex items-center gap-2"><Mail className="w-4 h-4" /> Lab_Inquiry</a>
                                </div>
                                <div className="mt-40 w-full">
                                    <FinalAnimatedCredit />
                                </div>
                            </div>
                        </footer>

                        {/* --- ORDER FORM SECTION --- */}
                        <section id="lote" className="py-32 px-6 bg-[#030303]">
                            <div className="max-w-4xl mx-auto bento-card p-16 rounded-[3rem] border border-accent/20">
                                {orderStep === 'success' ? (
                                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                                        <CheckCircle className="w-24 h-24 accent-green mx-auto mb-8" />
                                        <h3 className="text-4xl font-black italic uppercase mb-4">Lote Reservado</h3>
                                        <p className="text-gray-400 uppercase tracking-widest font-mono text-sm leading-relaxed">Nuestro equipo de ingeniería de Valencia <br/>te contactará en menos de 24h.</p>
                                        <button onClick={() => setOrderStep('idle')} className="mt-12 text-accent font-mono text-xs uppercase tracking-[0.5em] border-b border-accent pb-2">Hacer otro pedido</button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="text-center mb-16">
                                            <span className="accent-orange font-mono text-xs uppercase tracking-[0.5em]">Direct to Club // B2B</span>
                                            <h3 className="text-5xl font-black italic uppercase mt-4">Pide tu primer lote</h3>
                                        </div>
                                        <form onSubmit={handleOrder} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <input type="text" placeholder="Club / Empresa" required className="bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-accent transition font-mono uppercase text-xs tracking-widest" />
                                            <input type="email" placeholder="Email corporativo" required className="bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-accent transition font-mono uppercase text-xs tracking-widest" />
                                            <div className="md:col-span-2">
                                                <select className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-accent transition font-mono uppercase text-xs tracking-widest appearance-none">
                                                    <option>Pack Inicio (24 Tubos)</option>
                                                    <option>Pack Club (72 Tubos)</option>
                                                    <option>Pack Pro (144 Tubos)</option>
                                                </select>
                                            </div>
                                            <button type="submit" disabled={orderStep === 'submitting'} className="md:col-span-2 bg-accent text-black font-black uppercase p-8 rounded-full tracking-[0.5em] hover:bg-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-4">
                                                {orderStep === 'submitting' ? 'PROCESANDO...' : (
                                                    <>CONFIRMAR_PEDIDO <ArrowRight className="w-6 h-6" /></>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </section>

                    </motion.div>
                ) : (
                    <motion.div key="dossier" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="min-h-screen pt-32 px-6 pb-20 max-w-5xl mx-auto">
                         <div className="flex justify-between items-center mb-20">
                            <div className="flex items-center gap-4">
                                <img src={ASSETS.LOGO} className="h-10 w-10 rounded-full" alt="Icon" />
                                <h1 className="text-3xl font-black italic uppercase tracking-tighter">The Nano Dossier</h1>
                            </div>
                            <button onClick={() => setView('home')} className="glass px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-black transition-all">← Volver</button>
                         </div>

                         <div className="space-y-10">
                            <div className="bento-card p-12 rounded-[2.5rem]">
                                <h2 className="text-accent font-mono text-xs uppercase mb-6 tracking-[0.4em]">01_Visión</h2>
                                <p className="text-3xl font-light leading-relaxed">Nuestra meta es cerrar el círculo del caucho en España. Cada pelota Nano Banana es una unidad de ingeniería circular fabricada con un 40% menos de huella hídrica.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="bento-card p-12 rounded-[2.5rem]">
                                    <h2 className="text-accent font-mono text-xs uppercase mb-6 tracking-[0.4em]">02_Performance</h2>
                                    <p className="text-gray-400 leading-relaxed mb-8">Testeadas por jugadores ATP en academia de alto rendimiento VLC. Estabilidad de presión un 15% superior a la media industrial.</p>
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </div>
                                <div className="bento-card p-12 rounded-[2.5rem]">
                                    <h2 className="text-accent font-mono text-xs uppercase mb-6 tracking-[0.4em]">03_Logística</h2>
                                    <p className="text-gray-400 leading-relaxed mb-8">Hub central en Valencia. Distribución optimizada bajo demanda eliminando intermediarios innecesarios.</p>
                                    <ShoppingBag className="w-12 h-12 text-blue-500" />
                                </div>
                            </div>
                         </div>
                         
                         <div className="mt-20">
                            <FinalAnimatedCredit />
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
