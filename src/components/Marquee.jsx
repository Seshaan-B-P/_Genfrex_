import React from 'react';

export default function Marquee() {
  const phrase = 'DIGITAL × TECHNOLOGY × TALENT × GROWTH × ';

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] py-8 md:py-12 bg-[#050505] select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white/80 uppercase px-8 flex items-center gap-6"
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
