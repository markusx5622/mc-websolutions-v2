"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300";

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="w-full max-w-2xl glassmorphism border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Name</label>
          <input type="text" placeholder="John Doe" className={inputClasses} required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Company</label>
          <input type="text" placeholder="Aether Corp" className={inputClasses} required />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Project Type</label>
        <select className={inputClasses} required>
          <option value="" disabled selected className="bg-[#020617]">Select Industry</option>
          <option value="web" className="bg-[#020617]">Web Platform</option>
          <option value="ai" className="bg-[#020617]">AI Engineering</option>
          <option value="systems" className="bg-[#020617]">Systems Optimization</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Message</label>
        <textarea 
          placeholder="How can we help you architect your future?" 
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
        className="w-full group relative py-4 rounded-xl font-bold tracking-widest uppercase overflow-hidden"
      >
        {/* Button Background & Pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
        {status === 'idle' && (
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white blur-xl" 
          />
        )}

        <div className="relative z-10 flex items-center justify-center gap-2 text-black">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div 
                key="idle" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                Launch Project <Send className="w-4 h-4" />
              </motion.div>
            )}
            {status === 'sending' && (
              <motion.div 
                key="sending" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                Initializing... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
              </motion.div>
            )}
            {status === 'sent' && (
              <motion.div 
                key="sent" 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="flex items-center gap-2"
              >
                Sent Successfully <CheckCircle2 className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
    </motion.form>
  );
};

export default ContactForm;
