import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check session storage so it doesn't replay on every internal click
    const hasLoaded = sessionStorage.getItem('genfrex_preloader_seen');
    if (hasLoaded) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('genfrex_preloader_seen', 'true');
            setIsDone(true);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-8 md:p-14 select-none pointer-events-auto"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center text-xs text-[#666666] tracking-[0.25em] uppercase font-medium">
          <span>GENFREX — STUDIO</span>
          <span>EST. 2026</span>
        </div>

        {/* Center Brand Identity */}
        <div className="space-y-4 max-w-xl">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-[0.18em]"
            >
              GENFREX
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm text-[#A0A0A0] tracking-[0.3em] uppercase font-medium"
            >
              DIGITAL EXPERIENCES
            </motion.p>
          </div>
        </div>

        {/* Bottom Loading Progress Indicator */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs text-[#A0A0A0] tracking-[0.2em] font-medium">
            <span>INITIALIZING SYSTEM</span>
            <span className="text-[#0052FF] font-semibold">{progress}%</span>
          </div>
          {/* Thin Progress Line */}
          <div className="w-full h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-[#0052FF] transition-all duration-75 shadow-[0_0_10px_rgba(0,82,255,0.8)]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
