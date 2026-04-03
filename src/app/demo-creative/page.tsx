"use client";

import React from 'react';
import Link from 'next/link';

export default function NanoBananaIframeDemo() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      {/* Back to Systems HUD */}
      <div className="fixed top-6 left-6 z-[9999]">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-2xl"
          style={{ textDecoration: 'none' }}
        >
          <span style={{ color: 'var(--accent, #64FFDA)' }}>←</span> [BACK_TO_MC_SYSTEMS]
        </Link>
      </div>

      {/* Main Iframe */}
      <iframe 
        src="https://nano-banana-tennis.pages.dev/" 
        className="w-full h-full border-0"
        allowFullScreen
        title="Nano Banana Demo"
      />
    </div>
  );
}
