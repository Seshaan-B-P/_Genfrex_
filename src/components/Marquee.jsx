import React from 'react';

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] py-4 md:py-6 bg-[#050505] select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-white/75 uppercase px-6 flex items-center gap-4"
          >
            <span>DIGITAL</span>
            <span className="text-[#0052FF]">×</span>
            <span>TECHNOLOGY</span>
            <span className="text-[#0052FF]">×</span>
            <span>TALENT</span>
            <span className="text-[#0052FF]">×</span>
            <span>GROWTH</span>
            <span className="text-[#0052FF]">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
