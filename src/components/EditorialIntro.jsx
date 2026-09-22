import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function EditorialIntro() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const principles = [
    {
      number: '01',
      title: 'CONNECT',
      description:
        'We make it easier for businesses to find the right digital expertise and skilled professionals for their requirements.',
      impact: 'BUSINESS × TALENT SYNCHRONIZATION',
    },
    {
      number: '02',
      title: 'ENABLE',
      description:
        'We create better opportunities for freelancers, students, fresh graduates, and experienced professionals to showcase their skills and discover meaningful work.',
      impact: 'MERIT-BASED ACCELERATION',
    },
    {
      number: '03',
      title: 'GROW',
      description:
        'We believe great results happen when the right people connect with the right opportunities.',
      impact: 'SUSTAINABLE DIGITAL IMPACT',
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle Background Electric Blue Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
            01 — PHILOSOPHY &amp; MANDATE
          </span>
          <div className="h-[1px] w-12 bg-[#0052FF]" />
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
            THE GOVERNING PRINCIPLES <br />
            BEHIND THE <span className="text-[#0052FF]">GENFREX ECOSYSTEM.</span>
          </h2>
        </div>

        {/* Principles — Non-Card, Editorial Typography Stack */}
        <div className="space-y-6 md:space-y-10">
          {principles.map((item, idx) => {
            const isActive = hoveredIdx === idx;

            return (
              <motion.div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`transition-all duration-500 border-b border-white/[0.08] pb-10 md:pb-14 cursor-default ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                  {/* Step Number */}
                  <div className="lg:col-span-2">
                    <span className="text-sm sm:text-base font-mono tracking-widest text-[#0052FF]">
                      0{idx + 1} &mdash;
                    </span>
                  </div>

                  {/* Principle Title in Massive Editorial Typography */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono tracking-[0.2em] text-[#666666] uppercase mt-2 block">
                      {item.impact}
                    </span>
                  </div>

                  {/* Editorial Description */}
                  <div className="lg:col-span-6">
                    <p className="text-base sm:text-lg md:text-xl text-[#A0A0A0] font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
