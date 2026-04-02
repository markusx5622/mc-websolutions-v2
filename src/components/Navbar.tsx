"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          M&C <span className="text-gradient">Web Solutions</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="#lab" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Lab
        </Link>
        <Link href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-semibold rounded-full border border-white/10 hover:bg-white/5 transition-all">
          Login
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
