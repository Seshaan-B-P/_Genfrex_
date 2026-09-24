import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GenfrexLogo from './GenfrexLogo';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast minimal preloader (under 0.8s)
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
          }, 150);
          return 100;
        }
        return prev + 15;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#0C0E17] flex flex-col justify-between p-6 sm:p-10 select-none pointer-events-auto"
      >
        <div className="flex justify-between items-center text-[10px] text-[#666666] tracking-[0.25em] uppercase font-mono">
          <span>GENFREX</span>
          <span>2026</span>
        </div>

        <div className="space-y-3 max-w-md">
          <GenfrexLogo className="h-12 sm:h-16 w-auto" />
          <p className="text-[11px] text-neutral-400 tracking-[0.2em] uppercase font-mono">
            DIGITAL SERVICES <span className="text-[#0052FF]">×</span> TALENT ECOSYSTEM
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#666666] tracking-wider">
            <span>INITIALIZING</span>
            <span className="text-[#0052FF] font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-[1px] bg-white/10 overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-[#0052FF] transition-all duration-75"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
