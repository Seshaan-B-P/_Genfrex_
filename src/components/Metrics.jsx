import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function MetricCounter({ label, status, subtext, index }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setPulse(true), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-8 md:p-10 bg-[#0A0A0A] border border-white/10 hover:border-[#0052FF] transition-all duration-500 relative group flex flex-col justify-between"
    >
      {/* Subtle top indicator line */}
      <div className="w-8 h-[2px] bg-[#0052FF] mb-8 transition-all duration-300 group-hover:w-16" />

      <div className="space-y-4">
        {/* Large Status Display */}
        <div className="flex items-baseline gap-2">
          <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight group-hover:text-[#0052FF] transition-colors">
            {status}
          </span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#0052FF] animate-pulse" />
        </div>

        {/* Counter Metric Label */}
        <h3 className="font-display font-bold text-sm tracking-[0.2em] text-white uppercase">
          {label}
        </h3>

        {/* Subtext description */}
        <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Bottom Live Activity Tag */}
      <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#666666]">
        <span>METRIC 0{index + 1}</span>
        <span className="text-[#0052FF]">LIVE NETWORK</span>
      </div>
    </motion.div>
  );
}

export default function Metrics() {
  const metrics = [
    {
      label: 'DIGITAL SERVICES',
      status: 'GROWING',
      subtext: 'Deploying high-impact marketing, SEO, custom web, and WordPress solutions.',
    },
    {
      label: 'TALENT NETWORK',
      status: 'GROWING',
      subtext: 'Curating vetted freelancers, graduates, and digital specialists across domains.',
    },
    {
      label: 'BUSINESS CONNECTIONS',
      status: 'GROWING',
      subtext: 'Matching forward-thinking enterprises with verified talent and execution pods.',
    },
    {
      label: 'OPPORTUNITIES',
      status: 'GROWING',
      subtext: 'Unlocking meaningful client collaborations, projects, and career milestones.',
    },
  ];

  return (
    <section
      id="impact"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 border-b border-white/[0.08] pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                03 — QUANTITATIVE IMPACT
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
              BUILDING CONNECTIONS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#0052FF]">
                CREATING OPPORTUNITIES.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
            Data-driven ecosystem growth tracking active digital engagements, expanding talent pools, and verified business outcomes.
          </p>
        </div>

        {/* 4 Quantitative Impact Displays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((item, idx) => (
            <MetricCounter
              key={item.label}
              index={idx}
              label={item.label}
              status={item.status}
              subtext={item.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
