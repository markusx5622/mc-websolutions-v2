"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();

  // Hide Navbar on demo routes
  if (pathname.startsWith('/demo-')) return null;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-black tracking-widest text-white uppercase">
          M&C<span className="text-cyan-400">.</span> <span className="text-zinc-500 font-medium tracking-tight">Web Solutions</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: 'ADN', hash: '#dna' },
          { name: 'Método', hash: '#methodology' },
          { name: 'Demos', hash: '#demos' },
          { name: 'Precios', hash: '#pricing' },
          { name: 'Contacto', hash: '#contact' }
        ].map((item) => (
          <Link 
            key={item.hash}
            href={item.hash} 
            className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-all"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2 text-[10px] items-center gap-2 font-black uppercase tracking-[0.2em] rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/10 transition-all">
          Beca UEV
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
