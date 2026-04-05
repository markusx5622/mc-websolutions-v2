"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 text-sm";
  const labelClasses = "text-sm font-semibold text-zinc-300 mb-1 block";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* CTA Principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 p-10 rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5"
        style={{ boxShadow: '0 0 60px rgba(100, 255, 218, 0.05)' }}
      >
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="text-2xl font-black text-white mb-3">
          ¿Listo para tener tu web?
        </h3>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
          Rellena nuestro briefing en 5 minutos y recibe una propuesta personalizada en menos de 24 horas.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/briefing"
            className="inline-block px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm bg-cyan-500 text-background hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all"
          >
            Iniciar mi proyecto — 5 minutos
          </Link>
        </motion.div>
      </motion.div>

      {/* Formulario rápido de contacto */}
      <p className="text-center text-zinc-500 text-xs uppercase tracking-widest mb-6">— o escríbenos directamente —</p>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label className={labelClasses}>Tu nombre</label>
            <input type="text" placeholder="Juan García" className={inputClasses} required />
          </div>
          <div>
            <label className={labelClasses}>Tu email</label>
            <input type="email" placeholder="juan@tuempresa.com" className={inputClasses} required />
          </div>
        </div>

        <div className="mb-7">
          <label className={labelClasses}>Cuéntanos tu idea</label>
          <textarea
            placeholder="Tengo un restaurante y quiero una web con el menú, fotos y un formulario de reservas..."
            rows={4}
            className={`${inputClasses} resize-none`}
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={status !== 'idle'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full group relative py-4 rounded-xl font-bold tracking-widest uppercase overflow-hidden text-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex items-center justify-center gap-2 text-background">
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                  Enviar mi proyecto <Send className="w-4 h-4" />
                </motion.div>
              )}
              {status === 'sending' && (
                <motion.div key="sending" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                  Enviando... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-background border-t-transparent rounded-full" />
                </motion.div>
              )}
              {status === 'sent' && (
                <motion.div key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2">
                  ¡Mensaje enviado! <CheckCircle2 className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        <p className="text-center text-zinc-600 text-xs mt-4">
          También puedes escribirnos a{' '}
          <a href="mailto:mandcwebsolutions@gmail.com" className="text-cyan-500 hover:underline">
            mandcwebsolutions@gmail.com
          </a>
        </p>
      </motion.form>
    </div>
  );
};

export default ContactForm;
