import React, { useState } from 'react';

export default function EditorialIntro() {
  const [activeIdx, setActiveIdx] = useState(0);

  const principles = [
    {
      number: '01',
      title: 'CONNECT',
      description:
        'We make it easier for businesses to find the right digital expertise and skilled professionals for their requirements.',
      tag: 'SYNCHRONIZATION',
    },
    {
      number: '02',
      title: 'ENABLE',
      description:
        'We create better opportunities for freelancers, students, fresh graduates, and experienced professionals to showcase their skills and discover meaningful work.',
      tag: 'ACCELERATION',
    },
    {
      number: '03',
      title: 'GROW',
      description:
        'We believe great results happen when the right people connect with the right opportunities.',
      tag: 'MOMENTUM',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-16 md:py-20 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#0052FF]/15 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold font-mono">
                01 — PHILOSOPHY &amp; MANDATE
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              THE GOVERNING MANDATE.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-xs leading-relaxed">
            Three principles steering every digital project, talent match, and collaboration.
          </p>
        </div>

        {/* Minimal 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={p.number}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`p-6 sm:p-8 bg-[#131725] border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#0052FF] shadow-[0_0_20px_rgba(0,82,255,0.2)]'
                    : 'border-[#0052FF]/20 hover:border-[#0052FF]/60'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0052FF]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[#666666] uppercase">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#666666]">
                  <span>PRINCIPLE</span>
                  <span className={isActive ? 'text-[#0052FF]' : 'text-[#555555]'}>
                    {isActive ? 'ACTIVE FOCUS' : 'CORE'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
