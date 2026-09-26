import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Play, Sparkles } from 'lucide-react';

export default function Hero({ onOpenVideo, onOpenQuote }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-4 sm:px-6 pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden flex flex-col items-center justify-between min-h-[94vh] sm:min-h-screen">
      {/* 00 ─ FULL HERO CINEMATIC VIDEO BACKGROUND (BEHIND TEXT) */}
      <div className="absolute inset-0 overflow-hidden z-0 select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Layer Dark Overlays for Text Legibility & Depth */}
        {/* Layer 1: Radial Center Vignette - softens center for text while keeping video vivid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 48%, rgba(12, 14, 23, 0.45) 0%, rgba(12, 14, 23, 0.75) 60%, rgba(12, 14, 23, 0.94) 100%)'
          }}
        />

        {/* Layer 2: Top Gradient to smoothly blend Navbar */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0C0E17] via-[#0C0E17]/70 to-transparent pointer-events-none" />

        {/* Layer 3: Bottom Gradient to seamlessly melt into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C0E17] via-[#0C0E17]/85 to-transparent pointer-events-none" />

        {/* Layer 4: Electric Blue & Cyan Ambient Glow behind typography with gentle breathing */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 1, 0.75]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[950px] h-[380px] bg-gradient-to-r from-[#0052FF]/25 via-[#00D4FF]/25 to-[#0052FF]/20 blur-[130px] pointer-events-none rounded-full"
          aria-hidden="true"
        />
      </div>

      {/* 01 ─ HERO FOREGROUND CONTENT (DIRECTLY ON TOP OF VIDEO) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
          }
        }}
        className="w-full max-w-[1140px] mx-auto flex flex-col items-center text-center relative z-10 my-auto"
      >
        {/* Top Badges */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -16, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C0E17]/80 border border-[#0052FF]/40 text-[11px] sm:text-xs font-medium text-white/90 backdrop-blur-xl shadow-lg shadow-[#0052FF]/15">
            <Sparkles size={13} className="text-[#00D4FF]" />
            <span className="tracking-wide">DIGITAL • CREATIVE • PERFORMANCE</span>
          </div>
        </motion.div>

        {/* High-Impact Main Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-black tracking-[-0.03em] text-white leading-[1.05] max-w-5xl uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
        >
          AGENCY <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text">CAPABILITIES</span>
        </motion.h1>

        {/* Luminous Gradient Subheading */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="mt-4 sm:mt-5 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#00D4FF] via-[#60A5FA] to-[#0052FF] bg-clip-text text-transparent drop-shadow-md"
        >
          Strategy. Creativity. Performance. Growth.
        </motion.p>

        {/* Descriptive Agency Statement */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          A digital-first agency built to help ambitious brands become more visible, more relevant, and more effective online.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={onOpenQuote}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0052FF] to-[#0038b3] hover:from-[#1A66FF] hover:to-[#0052FF] text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-xl shadow-[#0052FF]/35 hover:shadow-[#0052FF]/55 transition-all duration-300 border border-[#3B82F6]/50 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onOpenVideo('/banner.mp4', 'GENFREX 2026 Reel')}
            className="px-6 py-3.5 rounded-full bg-[#0C0E17]/70 hover:bg-[#0052FF]/20 border border-[#0052FF]/40 hover:border-[#0052FF] text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5 backdrop-blur-xl shadow-lg transition-all duration-300 active:scale-95 text-white/95"
          >
            <Play size={15} className="text-[#00D4FF] fill-[#00D4FF]" />
            <span>Watch Full Reel</span>
          </button>
        </motion.div>
      </motion.div>

      {/* 02 ─ BOTTOM BAR: SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="w-full max-w-[1240px] mx-auto flex items-center justify-center relative z-10 pt-6"
      >
        <button
          type="button"
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group cursor-pointer focus:outline-none"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
            SCROLL
          </span>
          <ArrowDown size={16} className="text-white/70 group-hover:text-[#00D4FF] animate-bounce transition-colors" />
        </button>
      </motion.div>
    </section>
  );
}


