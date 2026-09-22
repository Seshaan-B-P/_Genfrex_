import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function EditorialIntro() {
  const shouldReduceMotion = useReducedMotion();

  const mandates = [
    {
      number: '01',
      title: 'RADICAL CLARITY',
      category: 'STRATEGY & ARCHITECTURE',
      description:
        'Eliminating cognitive friction. We deconstruct complex business requirements and eliminate vanity bloat, allowing core utility, high conversion, and intuitive usability to command attention.',
      benchmark: 'STANDARD: ZERO COGNITIVE DEBT',
    },
    {
      number: '02',
      title: 'ARCHITECTURAL RIGOR',
      category: 'ENGINEERING & PERFORMANCE',
      description:
        'Code engineered for velocity. Resilient cloud microservices, sub-second API pipelines, and reactive frontends built to maintain 99.99% uptime under extreme concurrent workloads.',
      benchmark: 'STANDARD: SUB-SECOND LATENCY',
    },
    {
      number: '03',
      title: 'EMOTIVE ENGAGEMENT',
      category: 'AESTHETICS & BRAND CRAFT',
      description:
        'Aesthetics that command lasting respect. We unite distinctive typographic rhythm, tactile micro-interactions, and cinematic visual pacing to build experiences that forge deep brand recall.',
      benchmark: 'STANDARD: UNCOMPROMISING DISTINCTION',
    },
  ];

  return (
    <section
      id="intro"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle Background Electric Blue Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase font-medium">
            04 — PHILOSOPHY &amp; MANDATE
          </span>
          <div className="h-[1px] w-12 bg-[#0052FF]" />
        </div>

        {/* Top Editorial Headline & Context Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white"
            >
              WE TURN IDEAS <br />
              INTO DIGITAL EXPERIENCES THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]">
                PEOPLE REMEMBER.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.15 }}
            className="lg:col-span-4 border-l-2 border-[#0052FF] pl-6 space-y-3"
          >
            <p className="text-sm md:text-base text-[#A0A0A0] font-light leading-relaxed">
              Digital growth does not happen through isolated services. It happens when rigorous engineering, compelling aesthetics, and deliberate human strategy operate as one unified discipline.
            </p>
            <span className="text-[11px] text-[#666666] tracking-wider uppercase font-semibold block">
              THE GOVERNING MANDATE
            </span>
          </motion.div>
        </div>

        {/* 3 Core Mandate Cards (Linear / Stripe Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {mandates.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 md:p-10 bg-[#08080C] border border-white/10 hover:border-[#0052FF] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,82,255,0.2)] flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Number & Glow Dot */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-widest text-[#0052FF]">
                    MANDATE {item.number}
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_rgba(0,82,255,0.9)]" />
                </div>

                <span className="text-[10px] tracking-[0.2em] text-[#666666] uppercase font-semibold block mb-2">
                  {item.category}
                </span>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#0052FF] transition-colors tracking-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Benchmark Strip */}
              <div className="border-t border-white/[0.08] pt-4 mt-8 flex items-center justify-between">
                <span className="text-[10px] text-[#666666] group-hover:text-[#A0A0A0] transition-colors tracking-widest uppercase font-medium">
                  {item.benchmark}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#0052FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
