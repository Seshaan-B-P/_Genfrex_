import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', padZero = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(target * ease);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, target]);

  const display = padZero && count < 10 ? `0${count}` : `${count}`;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    {
      target: 6,
      suffix: '+',
      padZero: true,
      label: 'CORE DISCIPLINES',
      subtext: 'Engineering, product design, brand identity, cloud architecture, growth loops & AI pipelines.',
    },
    {
      target: 20,
      suffix: '+',
      padZero: false,
      label: 'PROJECTS DELIVERED',
      subtext: 'Engineered across enterprise platforms, fintech portals, healthcare systems & smart governance.',
    },
    {
      target: 4,
      suffix: '',
      padZero: true,
      label: 'STRATEGIC PILLARS',
      subtext: 'Digital Strategy, Technology Platforms, Talent Connections & Creative Production.',
    },
    {
      isInfinity: true,
      label: 'POSSIBILITIES',
      subtext: 'Limitless potential unlocked at the intersection of visionary design and rigorous engineering.',
    },
  ];

  return (
    <section
      id="impact"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18 border-b border-white/[0.08] pb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase font-medium">
                03 — QUANTITATIVE IMPACT
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight text-white">
              MEASURABLE EXCELLENCE
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
            Tangible benchmarks and architectural milestones built on verified production track records.
          </p>
        </div>

        {/* 4 Animated Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.65,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 md:p-10 bg-[#08080C] border border-white/10 hover:border-[#0052FF] transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,82,255,0.2)] flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Metric Number with Live Count Animation */}
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-4 group-hover:text-[#0052FF] transition-colors">
                  {stat.isInfinity ? (
                    <motion.span
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3.2,
                        ease: 'easeInOut',
                      }}
                      className="inline-block text-[#0052FF]"
                    >
                      ∞
                    </motion.span>
                  ) : (
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      padZero={stat.padZero}
                    />
                  )}
                </div>

                {/* Animated Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.12 + 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-[2px] w-12 bg-gradient-to-r from-[#0052FF] to-transparent origin-left mb-6"
                />

                {/* Metric Label */}
                <div className="text-xs tracking-[0.2em] text-[#0052FF] uppercase font-bold mb-3">
                  {stat.label}
                </div>

                {/* Subtext */}
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom Subtle Status Indicator */}
              <div className="border-t border-white/[0.08] pt-4 mt-8 flex items-center justify-between">
                <span className="text-[10px] text-[#666666] tracking-widest uppercase font-medium group-hover:text-[#A0A0A0] transition-colors">
                  VERIFIED METRIC
                </span>
                <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_rgba(0,82,255,0.9)] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
