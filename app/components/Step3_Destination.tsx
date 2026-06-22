"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from '@phosphor-icons/react';

export default function Step3_Destination({ nextStep }: any) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit" 
      className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto h-full"
    >
      {/* Aquarelas Vermelhas/Laranjas (Clima do Pôr do Sol no Quebra-Mar) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none flex items-center justify-center z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px] bg-[#E63946]/30 rounded-full blur-[70px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ scale: [1, 1.25, 1], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[70vw] h-[70vw] sm:w-[500px] sm:h-[500px] bg-[#FFB580]/40 rounded-[40%_60%_70%_30%] blur-[60px] mix-blend-multiply" 
        />
      </div>

      {/* Badge do Título com Liquid Glass */}
      <motion.div variants={itemVariants} className="relative mb-6 rounded-full overflow-hidden p-[2px]">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-0" style={{ filter: 'url(#liquid-distortion)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-2xl shadow-inner z-0" />
        <div className="relative z-10 px-8 py-3 rounded-full border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
          <span className="text-xs tracking-[0.4em] uppercase text-stone-800 font-bold">enderreco</span>
        </div>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants} 
        className="relative z-10 text-3xl md:text-5xl font-light text-stone-900 mb-8 tracking-widest text-center px-4 drop-shadow-sm" 
        style={{ fontWeight: 200 }}
      >
        Quebra-Mar de Santos
      </motion.h2>

      {/* Container Expansivo com Moldura de Liquid Glass Pesada */}
      <motion.div 
        variants={itemVariants} 
        className="relative w-full h-[50vh] sm:h-[60vh] rounded-[3rem] p-3 md:p-4 flex flex-col items-center justify-center overflow-visible"
      >
        {/* === ENGENHARIA DO LIQUID GLASS === */}
        {/* 1. Camada de Distorção (Refração do fundo) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-md" style={{ filter: 'url(#liquid-distortion)' }}>
          <div className="absolute inset-0 bg-white/20" />
        </div>
        
        {/* 2. Camada Fosca e Contraste */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-[40px] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]" />
        
        {/* 3. Realces Especulares (Bordas) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] border border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />
        {/* ==================================== */}

        {/* O Mapa (Protegido dentro do vidro) */}
        <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden bg-stone-100 shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] group">
          <iframe 
            src="https://maps.google.com/maps?q=Quebra%20Mar,%20Santos%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover saturate-[0.85] contrast-[1.1] opacity-90 mix-blend-multiply transition-all duration-700 group-hover:saturate-100 group-hover:opacity-100 group-hover:mix-blend-normal"
          ></iframe>
          {/* Overlay sutil que se dissipa ao toque/interação */}
          <div className="absolute inset-0 bg-stone-900/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
        </div>
      </motion.div>

      {/* Botão de Confirmação (Sólido, Alto Contraste) */}
      <motion.div variants={itemVariants} className="relative z-10 w-full mt-8 flex justify-center">
        <button 
          onClick={nextStep}
          className="group flex items-center justify-between w-full sm:w-auto px-10 py-5 bg-stone-900 text-white rounded-full transition-all hover:bg-stone-800 active:scale-95 shadow-[0_15px_30px_-5px_rgba(28,25,23,0.3)] border border-stone-700"
        >
          <div className="flex items-center gap-3">
            <MapPin size={24} weight="fill" />
            <span className="font-bold tracking-[0.2em] text-sm uppercase">Confirmar Local</span>
          </div>
          <ArrowRight size={20} weight="fill" className="ml-6 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

    </motion.div>
  );
}