import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function AnimatedStat({ target, suffix = '+' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(Math.round(target * ease));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Clients() {
  const shouldReduceMotion = useReducedMotion();

  const clientStats = [
    { target: 75, suffix: '+', label: 'CLIENTS' },
    { target: 200, suffix: '+', label: 'AD FILMS' },
    { target: 50, suffix: '+', label: 'CORPORATE FILMS' },
    { target: 100, suffix: '+', label: 'SUCCESSFUL CAMPAIGNS' },
  ];

  // Client brands with their authentic original colors and distinctive emblems
  const brands = [
    {
      id: 'nandhi',
      name: 'Nandhi MARK',
      category: 'Consumer Goods',
      color: '#F59E0B',
      badgeColor: '#EF4444',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B] font-bold text-sm">
            🐂
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base text-white tracking-wide">Nandhi</span>
            <span className="text-[10px] font-extrabold tracking-widest text-[#EF4444] uppercase -mt-1">
              MARK
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'sri-baby',
      name: 'SRI BABY PROPERTIES',
      category: 'Real Estate',
      color: '#38BDF8',
      badgeColor: '#38BDF8',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#38BDF8]/20 border border-[#38BDF8]/50 flex items-center justify-center font-black text-sm text-[#38BDF8] rounded-md">
            2
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm text-white tracking-wider">SRI BABY</span>
            <span className="text-[9px] text-[#38BDF8] tracking-widest font-semibold uppercase -mt-0.5">
              PROPERTIES
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'ss-rice',
      name: 'KANDAYAM SS BRAND RICE',
      category: 'Agro Foods',
      color: '#FBBF24',
      badgeColor: '#F59E0B',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#FBBF24] bg-[#FBBF24]/10 flex items-center justify-center font-black text-xs text-[#FBBF24]">
            SS
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-[#A0A0A0] tracking-wider uppercase">KANDAYAM</span>
            <span className="font-black text-xs text-[#FBBF24] tracking-wide uppercase -mt-0.5">
              SS BRAND RICE
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'sukraa',
      name: 'Sukraa',
      category: 'Jewellery & Retail',
      color: '#EAB308',
      badgeColor: '#EAB308',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#EAB308]/20 flex items-center justify-center text-[#EAB308] text-base">
            🌾
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-base text-[#EAB308] tracking-wide">Sukraa</span>
            <span className="text-[9px] text-[#A0A0A0] tracking-widest -mt-0.5">The Quality Culture</span>
          </div>
        </div>
      ),
    },
    {
      id: 'krs-tea',
      name: 'KRS TEENA TEA',
      category: 'Beverages',
      color: '#10B981',
      badgeColor: '#10B981',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="px-2 py-1 rounded border border-[#10B981] bg-[#10B981]/15 text-[#10B981] font-black text-[11px] tracking-wider">
            KRS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm text-white tracking-widest">TEE'NA</span>
            <span className="text-[9px] text-[#10B981] tracking-widest font-semibold uppercase -mt-0.5">
              — TEA —
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'kovai-vigneshwara',
      name: 'Kovai Vigneshwara',
      category: 'Textiles',
      color: '#60A5FA',
      badgeColor: '#60A5FA',
      renderLogo: () => (
        <div className="flex items-center gap-3 border border-[#60A5FA]/40 bg-[#60A5FA]/10 px-3 py-1.5 rounded-lg">
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-[#60A5FA] font-medium tracking-wide">Kovai</span>
            <span className="font-bold text-xs text-white tracking-wider uppercase -mt-0.5">
              Vigneshwara&reg;
            </span>
            <span className="text-[8px] text-[#A0A0A0] tracking-widest uppercase font-semibold">
              TEXTILE
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'ylo',
      name: 'YLO',
      category: 'Media & Entertainment',
      color: '#FACC15',
      badgeColor: '#FACC15',
      renderLogo: () => (
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#FACC15] flex items-center justify-center font-black text-black text-xs">
            ◐
          </div>
          <span className="font-black text-xl text-white tracking-tighter">
            YL<span className="text-[#FACC15]">O</span>
          </span>
        </div>
      ),
    },
    {
      id: 'eega',
      name: 'EEGA GLOBAL',
      category: 'Global Non-Profit',
      color: '#06B6D4',
      badgeColor: '#0052FF',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0052FF] to-[#06B6D4] flex items-center justify-center font-bold text-white text-xs shadow-md">
            EG
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm text-white tracking-wide">EEGA GLOBAL</span>
            <span className="text-[9px] text-[#06B6D4] tracking-widest font-semibold uppercase -mt-0.5">
              FOUNDATION
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'bps',
      name: 'BPS ENTERTAINMENT',
      category: 'Experiential',
      color: '#EC4899',
      badgeColor: '#EC4899',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EC4899]/20 border border-[#EC4899]/50 flex items-center justify-center text-[#EC4899] font-black text-xs">
            BPS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm text-white tracking-wide">BPS</span>
            <span className="text-[9px] text-[#EC4899] tracking-widest font-semibold uppercase -mt-0.5">
              ENTERTAINMENT
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'smilecare',
      name: 'SMILECARE NETWORK',
      category: 'Healthcare',
      color: '#14B8A6',
      badgeColor: '#14B8A6',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#14B8A6]/20 border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] font-bold text-base">
            ✚
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm text-white tracking-wide">SmileCare</span>
            <span className="text-[9px] text-[#14B8A6] tracking-widest uppercase -mt-0.5">
              CLINICAL NETWORK
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Duplicate for seamless endless loop
  const displayBrands = [...brands, ...brands];

  return (
    <section
      id="clients"
      className="py-28 md:py-36 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Header Matching Reference Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs sm:text-sm tracking-[0.25em] text-[#0052FF] uppercase font-bold block">
            09 — OUR CLIENTS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.15] text-white tracking-tight">
            Trusted by brands that demand more.
          </h2>
          <p className="text-sm md:text-base text-[#A0A0A0] font-light max-w-xl mx-auto leading-relaxed">
            Our clients are our top priority, and we are committed to providing them with the highest level of service.
          </p>
        </div>

        {/* 4 Highlight Metrics from Reference Screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-10 md:py-12 mb-16 md:mb-20">
          {clientStats.map((st, idx) => (
            <div
              key={st.label}
              className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#0052FF] tracking-tight leading-none mb-3">
                <AnimatedStat target={st.target} suffix={st.suffix} />
              </div>
              <div className="text-[11px] sm:text-xs tracking-[0.2em] text-[#A0A0A0] uppercase font-bold">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Continuous Infinite Scrolling Track in Original Colors */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Cinematic Gradient Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />

        {/* Endless Marquee Loop */}
        <div className="flex gap-6 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {displayBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="bg-[#08080C] border border-white/10 hover:border-[#0052FF] px-8 py-5 rounded-2xl flex items-center justify-center shrink-0 min-w-[200px] h-[82px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,82,255,0.22)] hover:scale-105 cursor-default group"
            >
              {brand.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
