import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Clients() {
  const shouldReduceMotion = useReducedMotion();

  const ecosystemParticipants = [
    'BUSINESSES',
    'FREELANCERS',
    'STUDENTS',
    'FRESH GRADUATES',
    'EXPERIENCED PROFESSIONALS',
    'DIGITAL SPECIALISTS',
  ];

  // Authentic client brands configured in project with original colors
  const brands = [
    {
      id: 'nandhi',
      name: 'NANDHI MARK',
      category: 'Consumer Goods',
      color: '#F59E0B',
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
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#38BDF8]/20 border border-[#38BDF8]/50 flex items-center justify-center font-black text-sm text-[#38BDF8] rounded-none">
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
      id: 'sri-krishna',
      name: 'SRI KRISHNA SWEETS',
      category: 'Food & Hospitality',
      color: '#FB7185',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FB7185]/20 border border-[#FB7185]/50 flex items-center justify-center font-black text-sm text-[#FB7185]">
            SK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-xs text-white uppercase tracking-wider">SRI KRISHNA</span>
            <span className="text-[9px] text-[#FB7185] tracking-widest font-semibold uppercase -mt-0.5">
              SWEETS &amp; BAKERY
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'apex-infra',
      name: 'APEX INFRASTRUCTURE',
      category: 'Engineering & Construction',
      color: '#34D399',
      renderLogo: () => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#34D399]/20 border border-[#34D399]/50 flex items-center justify-center font-black text-sm text-[#34D399]">
            ▲
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-xs text-white uppercase tracking-wider">APEX</span>
            <span className="text-[9px] text-[#34D399] tracking-widest font-semibold uppercase -mt-0.5">
              INFRASTRUCTURE
            </span>
          </div>
        </div>
      ),
    },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section
      id="clients"
      className="py-28 md:py-36 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                09 — OUR CLIENTS
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              OUR CLIENTS
            </h2>
          </div>

          <div className="md:max-w-md">
            <p className="font-display font-bold text-base md:text-lg text-white tracking-wide uppercase mb-2">
              BUILDING AN ECOSYSTEM OF OPPORTUNITY.
            </p>
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
              Powering digital growth for visionary businesses while connecting top-tier talent with ambitious challenges.
            </p>
          </div>
        </div>

        {/* Ecosystem Matrix Bar */}
        <div className="mt-10 p-6 md:p-8 bg-[#0A0A0A] border border-white/10">
          <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block mb-4">
            THE CONNECTED ECOSYSTEM:
          </span>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {ecosystemParticipants.map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span className="px-3.5 py-1.5 bg-[#111111] border border-white/10 text-xs md:text-sm font-mono font-semibold text-white tracking-wider hover:border-[#0052FF] transition-colors">
                  {item}
                </span>
                {idx < ecosystemParticipants.length - 1 && (
                  <span className="text-[#0052FF] font-bold text-xs">×</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Client Logo Marquee with Original Brand Colors */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.08] py-8 bg-[#08080A]">
        {/* Left & Right Edge Fades */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="inline-flex items-center gap-4 px-8 py-3 mx-3 bg-[#0D0D12] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              {brand.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
