"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from '@phosphor-icons/react';

import Step0_Invitation from '@/components/Step0_Invitation';
import Step1_Time from '@/components/Step1_Time';
import Step2_Logistics from '@/components/Step2_Logistics';
import Step3_Destination from '@/components/Step3_Destination';
import Step4_Confirmation from '@/components/Step4_Confirmation';

export default function InvitePage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  
  const [preferences, setPreferences] = useState({
    time: '',
    transport: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  if (!mounted) return null;

  const getWatercolorPalette = () => {
    switch (preferences.time) {
      case '18:00': return ['#FF7B54', '#FFD56B', '#E29578', '#FF9F68', '#D96C4A']; 
      case '19:00': return ['#8367C7', '#B39DDB', '#5C4D7D', '#9B7EDE', '#4A3B69']; 
      case '20:00': return ['#1A2530', '#4A5D6E', '#2A363B', '#2C3E50', '#111820']; 
      default:      return ['#3B4254', '#8B6B63', '#9A8774', '#5A6378', '#D4C5B9']; 
    }
  };

  const palette = getWatercolorPalette();

  const renderCurrentStep = () => {
    const props = { nextStep, prevStep, preferences, setPreferences };
    switch (step) {
      case 0: return <Step0_Invitation key="step0" {...props} />;
      case 1: return <Step1_Time key="step1" {...props} />;
      case 2: return <Step2_Logistics key="step2" {...props} />;
      case 3: return <Step3_Destination key="step3" {...props} />;
      case 4: return <Step4_Confirmation key="step4" {...props} />;
      default: return null;
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[#E8E6E1] selection:bg-stone-300 selection:text-stone-900" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      
      {/* Motores Matemáticos de Distorção e Aquarela */}
      <svg className="hidden">
        <defs>
          {/* Filtro para sangria da aquarela de fundo */}
          <filter id="watercolor-bleed">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feComponentTransfer><feFuncA type="linear" slope="1.3" /></feComponentTransfer>
          </filter>

          {/* NOVO: Filtro de Refração para o Liquid Glass */}
          <filter id="liquid-distortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="4" result="blurred" />
            <feComposite in="blurred" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="fixed inset-0 z-50 pointer-events-none mix-blend-multiply opacity-[0.055]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Aquarelas Dinâmicas do Fundo */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center transition-colors duration-1000" style={{ filter: 'url(#watercolor-bleed)' }}>
        <motion.div animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.9, 1], rotate: [0, 15, -10, 0], backgroundColor: palette[0] }} transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", backgroundColor: { duration: 2.5 } }} className="absolute w-[80vw] h-[75vw] max-w-[850px] max-h-[800px] rounded-[40%_60%_70%_30%] mix-blend-multiply translate-x-[-20%] translate-y-[-15%] opacity-25" />
        <motion.div animate={{ x: [0, -100, 60, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.95, 1], rotate: [0, -20, 10, 0], backgroundColor: palette[1] }} transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2, backgroundColor: { duration: 2.5 } }} className="absolute w-[85vw] h-[60vw] max-w-[900px] max-h-[650px] rounded-[60%_40%_30%_70%] mix-blend-multiply translate-x-[25%] translate-y-[10%] opacity-25" />
        <motion.div animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.3, 0.85, 1], rotate: [0, 45, 0, -45, 0], backgroundColor: palette[2] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5, backgroundColor: { duration: 2.5 } }} className="absolute w-[65vw] h-[65vw] max-w-[700px] max-h-[700px] rounded-[50%_50%_40%_60%] mix-blend-multiply opacity-25" />
        <motion.div animate={{ x: [-40, 70, -60, -40], y: [50, -40, 60, 50], scale: [1, 1.15, 0.9, 1], backgroundColor: palette[3] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1, backgroundColor: { duration: 2.5 } }} className="absolute w-[45vw] h-[55vw] max-w-[500px] max-h-[600px] rounded-[30%_70%_70%_30%] mix-blend-multiply translate-x-[-30%] translate-y-[25%] opacity-30" />
        <motion.div animate={{ x: [40, -50, 30, 40], y: [-30, 50, -40, -30], scale: [0.9, 1.25, 1, 0.9], rotate: [10, -15, 20, 10], backgroundColor: palette[4] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4, backgroundColor: { duration: 2.5 } }} className="absolute w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] rounded-[70%_30%_50%_50%] mix-blend-multiply translate-x-[35%] translate-y-[-25%] opacity-20" />
      </div>

      <AnimatePresence>
        {step > 0 && step < 4 && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={prevStep}
            className="fixed top-8 left-8 md:top-12 md:left-12 z-50 flex items-center gap-3 text-stone-700 hover:text-stone-900 transition-colors uppercase tracking-[0.2em] text-xs font-bold bg-white/40 backdrop-blur-3xl px-5 py-3 rounded-full border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_4px_10px_rgba(0,0,0,0.05)]"
          >
            <ArrowLeft size={18} weight="fill" /> Voltar
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-center min-h-[70vh]">
        <AnimatePresence mode="wait">
          {renderCurrentStep()}
        </AnimatePresence>
      </div>
    </main>
  );
}