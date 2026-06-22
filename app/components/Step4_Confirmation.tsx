"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CarProfile, WhatsappLogo, Heart } from '@phosphor-icons/react';

export default function Step4_Confirmation({ preferences }: any) {
  const handleWhatsApp = () => {
    const text = `Tudo desenhado para amanhã! ✨\n\n📍 *Local:* Quebra-Mar de Santos\n🕒 *Horário:* ${preferences.time || 'A definir'}\n🚗 *Logística:* ${preferences.transport || 'A definir'}\n\nMal posso esperar.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5513996988700?text=${encodedText}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    exit: { opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      exit="exit" 
      className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto"
    >
      {/* Aquarelas Finas (Romance e Sucesso) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg pointer-events-none flex items-center justify-center z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[70vw] h-[70vw] sm:w-[450px] sm:h-[450px] bg-rose-300/50 rounded-full blur-[60px] mix-blend-multiply translate-y-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[60vw] h-[60vw] sm:w-[350px] sm:h-[350px] bg-amber-200/50 rounded-full blur-[50px] mix-blend-multiply -translate-y-10" 
        />
      </div>

      {/* Ícone de Sucesso Animado (Liquid Glass Badge) */}
      <motion.div variants={itemVariants} className="relative mb-6 rounded-full overflow-hidden p-[2px]">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl z-0" style={{ filter: 'url(#liquid-distortion)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-2xl shadow-inner z-0" />
        <div className="relative z-10 w-20 h-20 rounded-full border border-white/80 shadow-[0_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <Heart size={40} weight="fill" className="text-rose-500 drop-shadow-sm" />
        </div>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants} 
        className="relative z-10 text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-widest text-center uppercase drop-shadow-sm" 
        style={{ fontWeight: 200 }}
      >
        prontinho
      </motion.h2>
      
      <motion.p 
        variants={itemVariants} 
        className="relative z-10 text-stone-800 mb-10 font-medium text-center tracking-wide drop-shadow-sm"
      >
        #revisao se ta tudo certo
      </motion.p>

      {/* Cartão de Resumo (Ingresso de Liquid Glass) */}
      <motion.div 
        variants={itemVariants} 
        className="relative w-full rounded-[3rem] p-10 md:p-12 flex flex-col justify-center overflow-visible mb-10"
      >
        {/* === ENGENHARIA DO LIQUID GLASS === */}
        {/* 1. Camada de Distorção (Refração do fundo) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden backdrop-blur-md" style={{ filter: 'url(#liquid-distortion)' }}>
          <div className="absolute inset-0 bg-white/30" />
        </div>
        
        {/* 2. Camada Fosca e Contraste Máximo */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-[40px] rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]" />
        
        {/* 3. Realces Especulares (Bordas) */}
        <div className="absolute inset-0 z-0 rounded-[3rem] border border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_inset_0_-2px_4px_rgba(255,255,255,0.3)] pointer-events-none" />
        {/* ==================================== */}

        <div className="relative z-10 flex flex-col gap-8">
          
          {/* Horário */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-stone-900/10 flex items-center justify-center text-stone-900 shadow-inner">
              <Clock size={28} weight="fill" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 font-bold mb-1">O Momento</p>
              <p className="text-xl font-bold text-stone-900 tracking-wide">{preferences.time || 'A definir'}</p>
            </div>
          </div>

          <div className="w-full h-px bg-stone-900/10" />

          {/* Logística */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-stone-900/10 flex items-center justify-center text-stone-900 shadow-inner">
              <CarProfile size={28} weight="fill" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 font-bold mb-1">A Logística</p>
              <p className="text-xl font-bold text-stone-900 tracking-wide">{preferences.transport || 'A definir'}</p>
            </div>
          </div>

          <div className="w-full h-px bg-stone-900/10" />

          {/* Local */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-stone-900/10 flex items-center justify-center text-stone-900 shadow-inner">
              <MapPin size={28} weight="fill" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600 font-bold mb-1">O Cenário</p>
              <p className="text-xl font-bold text-stone-900 tracking-wide">Quebra-Mar de Santos</p>
            </div>
          </div>

        </div>
      </motion.div>
      
      {/* CTA Final: Botão do WhatsApp (Sólido, Verde Vibrante e Ícone Fill) */}
      <motion.div variants={itemVariants} className="relative z-10 w-full flex justify-center">
        <button 
          onClick={handleWhatsApp}
          className="group flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white rounded-full transition-all hover:bg-[#20bd5a] active:scale-95 shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] border border-[#1DA851]"
        >
          <WhatsappLogo size={28} weight="fill" className="mr-3" />
          <span className="font-bold tracking-[0.1em] text-sm uppercase">Enviar Confirmação</span>
        </button>
      </motion.div>
    </motion.div>
  );
}