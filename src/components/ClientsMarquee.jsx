import React from 'react';

export default function ClientsMarquee() {
  const partners = [
    { name: "EEGA GLOBAL", role: "Philanthropic Tech" },
    { name: "BPS ENTERTAINMENT", role: "Live Experiential" },
    { name: "NEXUS AGRI", role: "Autonomous Systems" },
    { name: "SMILECARE NETWORKS", role: "Clinical HealthTech" },
    { name: "METRO CIVIC COUNCIL", role: "Smart Governance" },
    { name: "AURA PROTOCOL", role: "Distributed Finance" },
    { name: "VERTEX ROBOTICS", role: "Industrial Automation" },
    { name: "KINETIC BIO", role: "Life Sciences Cloud" }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050505] border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          // PARTNER NETWORK
        </span>
        <h2 className="font-display font-medium text-lg md:text-2xl text-neutral-300 tracking-wide">
          TRUSTED BY TEAMS BUILDING WHAT'S NEXT.
        </h2>
      </div>

      {/* Controlled Marquee Track */}
      <div className="relative w-full overflow-hidden flex border-y border-white/[0.06] py-8 bg-[#08080b]">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24 items-center">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 group cursor-default transition-all duration-300 opacity-40 hover:opacity-100"
            >
              <span className="w-2 h-2 rounded-none bg-brand-blue/60 group-hover:bg-brand-blue" />
              <div>
                <span className="font-display font-bold text-lg md:text-xl tracking-[0.2em] text-white">
                  {partner.name}
                </span>
                <span className="font-mono text-[9px] text-neutral-500 block tracking-widest uppercase">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
