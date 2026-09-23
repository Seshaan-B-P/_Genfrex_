import React from 'react';
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
    <section className="relative px-4 sm:px-6 pt-24 sm:pt-28 pb-12 md:pb-16 overflow-hidden flex flex-col items-center justify-between min-h-[92vh]">
      {/* Background Subtle Logo Blue & Cyan Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[1000px] h-[300px] bg-gradient-to-r from-[#0052FF]/25 via-[#00D4FF]/25 to-[#0052FF]/20 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10 my-auto">

        {/* Subtle Category Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-medium text-white/80 mb-4 sm:mb-5 backdrop-blur-md">
          <Sparkles size={12} className="text-[#0052FF]" />
          <span>DIGITAL • CREATIVE • GROWTH</span>
        </div>

        {/* 01 ─ GIANT ILLUSTRATED TYPOGRAPHY BANNER (GENFREX - WAT STYLE) */}
        <div className="w-full max-w-[880px] lg:max-w-[960px] mx-auto group relative transition-all duration-500">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-white/[0.08] bg-[#0A0A0C]">
            <img
              src="/genfrex-hero-typography.jpg"
              alt="GENFREX - Creative Digital Agency Illustrated Typography"
              className="w-full max-h-[40vh] sm:max-h-[46vh] object-cover sm:object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.012]"
              loading="eager"
            />
            {/* Edge fade gradient to seamlessly melt into dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 02 ─ HEADLINE & RECOGNITION (MATCHING REFERENCE AESTHETIC) */}
        <div className="mt-6 sm:mt-8 max-w-[860px] mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
            AGENCY CAPABILITIES
          </h1>

          <p className="mt-2 text-sm sm:text-lg md:text-xl font-semibold text-[#00D4FF] tracking-normal">
            Strategy. Creativity. Performance. Growth.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto leading-relaxed">
            A digital-first agency built to help ambitious brands become more visible, more relevant, and more effective online.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary text-xs sm:text-sm font-medium px-7 py-3 flex items-center gap-2 shadow-lg shadow-[#0052FF]/25 hover:shadow-[#0052FF]/40 transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}
              className="btn btn-ghost text-xs sm:text-sm font-medium px-5 py-3 flex items-center gap-2 border-white/15 hover:border-white/40 hover:bg-white/5 transition-all text-white/90"
            >
              <Play size={15} className="text-[#0052FF] fill-[#0052FF]" />
              <span>Watch 2026 Reel</span>
            </button>
          </div>
        </div>

        {/* 03 ─ SCROLL DOWN INDICATOR (MATCHING REFERENCE) */}
        <button
          type="button"
          onClick={handleScrollDown}
          className="mt-8 sm:mt-10 flex flex-col items-center gap-2 mx-auto text-white/50 hover:text-white transition-colors duration-300 group cursor-pointer focus:outline-none"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">
            SCROLL
          </span>
          <ArrowDown size={16} className="text-white/70 group-hover:text-[#00D4FF] animate-bounce transition-colors" />
        </button>
      </div>
    </section>
  );
}
