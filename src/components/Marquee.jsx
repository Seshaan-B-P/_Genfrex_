import React from 'react';

export default function Marquee() {
  const phrase = 'DESIGN × TECHNOLOGY × STORYTELLING × ';

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] py-8 md:py-12 bg-[#08080a] select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white/90 uppercase px-6"
          >
            DESIGN <span className="text-[#0052FF]">×</span> TECHNOLOGY <span className="text-[#0052FF]">×</span> STORYTELLING <span className="text-[#0052FF]">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
