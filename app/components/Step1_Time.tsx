"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Step1_Time({ nextStep, setPreferences, preferences }: any) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelection = (time: string) => {
    setSelected(time);
    setPreferences({ ...preferences, time });
    
    // Aguarda para a aquarela do fundo transitar suavemente antes da troca de tela
    setTimeout(() => {
      nextStep();
    }, 1200);
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

  // SVGs totalmente sólidos (fill) e arredondados, sem outline
  const AnimatedSun = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 mb-6 text-orange-500 fill-current drop-shadow-md">
      <motion.circle cx="50" cy="50" r="24" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "50px 50px" }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <circle key={i} cx="50" cy="10" r="6" transform={`rotate(${deg} 50 50)`} />
        ))}
      </motion.g>
    </svg>
  );

  const AnimatedSunset = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 mb-6 text-purple-600 fill-current drop-shadow-md">
      <motion.path 
        d="M 15 70 A 35 35 0 0 1 85 70 Z" 
        animate={{ y: [0, 6, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
      />
      <rect x="5" y="75" width="90" height="12" rx="6" />
    </svg>
  );

  const AnimatedMoon = () => (
    <svg viewBox="0 0 100 100" className="w-16 h-16 mb-6 text-indigo-900 fill-current drop-shadow-md">
      <path d="M 55 10 A 40 40 0 1 0 90 80 A 45 45 0 1 1 55 10 Z" />
      <motion.circle cx="20" cy="25" r="5" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.circle cx="85" cy="15" r="6" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} />
      <motion.circle cx="75" cy="85" r="4" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
    </svg>
  );

  const timeOptions = [
    { time: '18:00', label: 'Pôr do Sol', icon: <AnimatedSun /> },
    { time: '19:00', label: 'Crepúsculo', icon: <AnimatedSunset /> },
    { time: '20:00', label: 'Noite', icon: <AnimatedMoon /> }
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
      
      {/* Badge do Título com Liquid Glass */}
      <motion.div variants={itemVariants} className="relative mb-6 rounded-full overflow-hidden p-[2px]">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-0" style={{ filter: 'url(#liquid-distortion)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-2xl shadow-inner z-0" />
        <div className="relative z-10 px-8 py-3 rounded-full border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
          <span className="text-xs tracking-[0.4em] uppercase text-stone-800 font-bold">horario</span>
        </div>
      </motion.div>
      
      {/* Título Principal */}
      <motion.h2 variants={itemVariants} className="relative z-10 text-3xl md:text-5xl font-light text-stone-900 mb-16 tracking-widest text-center px-4 drop-shadow-sm">
        que horas vamos
      </motion.h2>

      {/* Grid de Opções (Cartões de Vidro) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
        {timeOptions.map((option) => {
          const isSelected = selected === option.time;
          return (
            <motion.button
              key={option.time}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelection(option.time)}
              className="relative group flex flex-col items-center justify-center p-12 w-full h-80 rounded-[3rem] transition-all duration-500 outline-none"
            >
              {/* === ENGENHARIA DO LIQUID GLASS === */}
              {/* 1. Camada de Distorção (Refração do fundo) */}
              <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-md" style={{ filter: 'url(#liquid-distortion)' }}>
                <div className={`absolute inset-0 transition-colors duration-500 ${isSelected ? 'bg-white/40' : 'bg-white/20 group-hover:bg-white/30'}`} />
              </div>
              
              {/* 2. Camada Fosca e Contraste */}
              <div className={`absolute inset-0 z-0 bg-gradient-to-br backdrop-blur-[40px] rounded-[3rem] transition-all duration-500 ${
                isSelected 
                  ? 'from-white/80 to-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]' 
                  : 'from-white/60 to-white/30 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]'
              }`} />
              
              {/* 3. Realces Especulares (Bordas) */}
              <div className={`absolute inset-0 z-0 rounded-[3rem] border pointer-events-none transition-all duration-500 ${
                isSelected ? 'border-white shadow-[inset_0_2px_10px_rgba(255,255,255,1)]' : 'border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)]'
              }`} />
              {/* ==================================== */}

              {/* Conteúdo do Cartão */}
              <div className="relative z-10 flex flex-col items-center">
                {option.icon}
                <span className="text-3xl font-bold text-stone-900 tracking-wider mb-2 drop-shadow-sm">{option.time}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-600 drop-shadow-sm">{option.label}</span>
              </div>
              
              {/* Barra de Progresso / Feedback de Seleção */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ duration: 1.2, ease: "linear" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 h-1.5 bg-stone-900 rounded-full w-20 origin-left z-10"
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}