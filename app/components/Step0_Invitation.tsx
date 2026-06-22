"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export default function Step0_Invitation({ nextStep }: any) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1.2, type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg mx-auto">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full rounded-[3rem] p-12 md:p-16 flex flex-col items-center justify-center overflow-visible"
      >
        {/* === ENGENHARIA DO LIQUID GLASS === */}
        {/* 1. Camada de Distorção (Refração do fundo) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-sm" style={{ filter: 'url(#liquid-distortion)' }}>
            <div className="absolute inset-0 bg-white/20" />
        </div>
        
        {/* 2. Camada Fosca (Desfoque principal e clareza) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-[40px] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]" />
        
        {/* 3. Realces Especulares (Bordas de vidro simulando espessura) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] border border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />
        {/* ==================================== */}

        <h1 className="relative z-10 text-4xl md:text-4xl text-stone-900 mb-6   font-light drop-shadow-sm">
          oie oii kkkk
        </h1>
        
        <p className="relative z-10 text-stone-800 mb-12 text-lg md:text-xl leading-relaxed font-light tracking-wide max-w-sm drop-shadow-sm">
          princesa linda meu bem voce <br/>
          aceitaria sair comigo amanhã?
        </p>
        
        {/* CTA Único e Irresistível */}
        <button 
          onClick={nextStep}
          className="relative z-10 group flex items-center justify-between w-full max-w-xs px-8 py-5 bg-stone-900 text-white rounded-full transition-all hover:bg-stone-800 active:scale-95 shadow-[0_15px_30px_-5px_rgba(28,25,23,0.3)] border border-stone-700"
        >
          <span className="font-bold flex items-center text-sm ">obvio ne 😒</span>
          <ArrowRight size={20} weight="fill" className="transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}