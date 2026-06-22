"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CarProfile } from '@phosphor-icons/react';

export default function Step2_Logistics({ nextStep, setPreferences, preferences }: any) {
  const [animating, setAnimating] = useState<string | null>(null);

  const handleSelection = (transport: string) => {
    // Evita múltiplos cliques durante a animação
    if (animating) return;
    
    setAnimating(transport);
    setPreferences({ ...preferences, transport });
    
    // Segura a tela para a animação ocorrer no iPhone/iPad antes de avançar
    setTimeout(() => {
      nextStep();
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  // Animações dos elementos sólidos
  const carAnimation = animating === 'Vou te buscar' 
    ? { x: [0, -15, 280], opacity: [1, 1, 0], transition: { duration: 1.2, times: [0, 0.3, 1], ease: "anticipate" } }
    : { x: 0, opacity: 1 };

  const dotLeftAnimation = animating === 'Nos encontramos lá' 
    ? { x: [0, 40], scale: [1, 1.4], transition: { duration: 0.8, ease: "backOut" } } 
    : { x: 0, scale: 1 };
    
  const dotRightAnimation = animating === 'Nos encontramos lá' 
    ? { x: [0, -40], scale: [1, 1.4], transition: { duration: 0.8, ease: "backOut" } } 
    : { x: 0, scale: 1 };
    
  const impactPulse = animating === 'Nos encontramos lá' 
    ? { scale: [0, 3, 0], opacity: [0, 0.3, 0], transition: { delay: 0.6, duration: 0.6 } } 
    : { scale: 0, opacity: 0 };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
      
      {/* Badge do Título com Liquid Glass */}
      <motion.div variants={itemVariants} className="relative mb-6 rounded-full overflow-hidden p-[2px]">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-0" style={{ filter: 'url(#liquid-distortion)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-2xl shadow-inner z-0" />
        <div className="relative z-10 px-8 py-3 rounded-full border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
          <span className="text-xs tracking-[0.4em] uppercase text-stone-800 font-bold">ida</span>
        </div>
      </motion.div>
      
      <motion.h2 variants={itemVariants} className="relative z-10 text-3xl md:text-5xl font-light text-stone-900 mb-16 tracking-widest text-center px-4 drop-shadow-sm">
        como vamos nos encontrar
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center px-4">
        
        {/* OPÇÃO 1: VOU TE BUSCAR */}
        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelection('Vou te buscar')}
          className="relative group flex flex-col items-center justify-center p-12 w-full sm:w-80 h-80 rounded-[3rem] transition-all duration-500 outline-none"
        >
          {/* === ENGENHARIA DO LIQUID GLASS === */}
          <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-md" style={{ filter: 'url(#liquid-distortion)' }}>
            <div className={`absolute inset-0 transition-colors duration-500 ${animating === 'Vou te buscar' ? 'bg-white/40' : 'bg-white/20 group-hover:bg-white/30'}`} />
          </div>
          <div className={`absolute inset-0 z-0 bg-gradient-to-br backdrop-blur-[40px] rounded-[3rem] transition-all duration-500 ${
            animating === 'Vou te buscar' ? 'from-white/80 to-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]' : 'from-white/60 to-white/30 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]'
          }`} />
          <div className={`absolute inset-0 z-0 rounded-[3rem] border pointer-events-none transition-all duration-500 ${
            animating === 'Vou te buscar' ? 'border-white shadow-[inset_0_2px_10px_rgba(255,255,255,1)]' : 'border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)]'
          }`} />
          {/* ==================================== */}

          <div className="h-24 w-full flex items-center justify-center relative mb-4 z-10">
            {/* Ícone Preenchido (Sólido) e de Alto Contraste */}
            <motion.div animate={carAnimation} className="text-stone-900 z-10 drop-shadow-md">
              <CarProfile size={64} weight="fill" />
            </motion.div>
            
            <AnimatePresence>
              {animating === 'Vou te buscar' && (
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }} 
                  animate={{ opacity: 1, scaleX: 1 }} 
                  transition={{ duration: 0.4 }} 
                  className="absolute bottom-2 w-3/4 h-1.5 rounded-full bg-stone-400 origin-left" 
                />
              )}
            </AnimatePresence>
          </div>

          <span className="text-2xl font-bold text-stone-900 tracking-wide mb-2 z-10 drop-shadow-sm">euuuu busco</span>
          <span className="text-xs font-bold uppercase tracking-widest text-stone-600 z-10 drop-shadow-sm">ti busco e vamos juntinhso</span>
        </motion.button>

        {/* OPÇÃO 2: NOS ENCONTRAMOS LÁ */}
        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelection('Nos encontramos lá')}
          className="relative group flex flex-col items-center justify-center p-12 w-full sm:w-80 h-80 rounded-[3rem] transition-all duration-500 outline-none"
        >
          {/* === ENGENHARIA DO LIQUID GLASS === */}
          <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-md" style={{ filter: 'url(#liquid-distortion)' }}>
            <div className={`absolute inset-0 transition-colors duration-500 ${animating === 'Nos encontramos lá' ? 'bg-white/40' : 'bg-white/20 group-hover:bg-white/30'}`} />
          </div>
          <div className={`absolute inset-0 z-0 bg-gradient-to-br backdrop-blur-[40px] rounded-[3rem] transition-all duration-500 ${
            animating === 'Nos encontramos lá' ? 'from-white/80 to-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]' : 'from-white/60 to-white/30 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]'
          }`} />
          <div className={`absolute inset-0 z-0 rounded-[3rem] border pointer-events-none transition-all duration-500 ${
            animating === 'Nos encontramos lá' ? 'border-white shadow-[inset_0_2px_10px_rgba(255,255,255,1)]' : 'border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)]'
          }`} />
          {/* ==================================== */}

          <div className="h-24 w-full flex items-center justify-center relative mb-4 z-10">
            {/* Onda de choque central (Aparece no impacto) */}
            <motion.div animate={impactPulse} className="absolute w-14 h-14 rounded-full bg-stone-600 z-0" />
            
            <div className="flex w-28 justify-between items-center z-10 relative">
              {/* Pontos Sólidos */}
              <motion.div animate={dotLeftAnimation} className="w-6 h-6 rounded-full bg-stone-900 shadow-md" />
              <motion.div animate={dotRightAnimation} className="w-6 h-6 rounded-full bg-stone-500 shadow-md" />
            </div>
          </div>

          <span className="text-2xl font-bold text-stone-900 tracking-wide mb-2 z-10 drop-shadow-sm">no local</span>
          <span className="text-xs font-bold uppercase tracking-widest text-stone-600 z-10 drop-shadow-sm">nos encontramos por la</span>
        </motion.button>

      </div>
    </motion.div>
  );
}