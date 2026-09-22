import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Understand the problem.',
      description:
        'Understand the requirement, goals, audience, challenges, and context.',
      metric: 'AUDIT & RESEARCH',
    },
    {
      number: '02',
      title: 'DEFINE',
      tagline: 'Find the opportunity.',
      description:
        'Clarify scope, requirements, resources, and expected outcomes.',
      metric: 'SPECIFICATION & ROADMAP',
    },
    {
      number: '03',
      title: 'MATCH',
      tagline: 'Connect the right talent.',
      description:
        'Where talent is required, connect businesses with professionals based on skills, experience, availability, and budget.',
      metric: 'TALENT & RESOURCE ALIGNMENT',
    },
    {
      number: '04',
      title: 'BUILD',
      tagline: 'Engineer the experience.',
      description:
        'Create and execute the required digital solution or collaboration.',
      metric: 'AGILE SPRINT EXECUTION',
    },
    {
      number: '05',
      title: 'DELIVER',
      tagline: 'Put it into the world.',
      description:
        'Deliver practical, reliable, business-oriented outcomes.',
      metric: 'QUALITY & PRODUCTION DEPLOYMENT',
    },
    {
      number: '06',
      title: 'GROW',
      tagline: 'Continuous evolution.',
      description:
        'Continue learning, improving, and creating opportunities for future collaboration.',
      metric: 'LONG-TERM MOMENTUM',
    },
  ];

  return (
    <section
      id="methodology"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 border-b border-white/[0.08] pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                05 — METHODOLOGY
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
            A connected six-stage methodology engineered to take requirements from raw objectives to verified digital execution and talent alignment.
          </p>
        </div>

        {/* Desktop Connected Illuminated Pipeline Bar (01 ●────── 02 ●────── ...) */}
        <div className="hidden lg:block mb-16 relative">
          <div className="flex items-center justify-between relative z-10">
            {stages.map((stg, idx) => {
              const isPastOrCurrent = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <button
                  key={stg.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {/* Glowing Node Dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                        isCurrent
                          ? 'border-[#0052FF] bg-[#0052FF] shadow-[0_0_12px_rgba(0,82,255,0.9)] scale-125'
                          : isPastOrCurrent
                          ? 'border-[#0052FF] bg-[#050505]'
                          : 'border-white/20 bg-[#050505]'
                      }`}
                    >
                      {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[11px] tracking-wider transition-colors ${
                      isCurrent
                        ? 'text-[#0052FF] font-bold'
                        : isPastOrCurrent
                        ? 'text-white'
                        : 'text-[#666666]'
                    }`}
                  >
                    {stg.number} {stg.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Background and Active Illuminated Pipeline Line */}
          <div className="absolute top-2 left-4 right-4 h-[2px] bg-white/10 -z-0">
            <div
              className="h-full bg-[#0052FF] transition-all duration-500 shadow-[0_0_8px_rgba(0,82,255,0.8)]"
              style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Six Connected Stages Grid / Mobile Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stages.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <motion.div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.5,
                  delay: idx * 0.07,
                }}
                className={`p-8 border transition-all duration-400 flex flex-col justify-between cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#0A0A0A] border-[#0052FF] shadow-[0_0_30px_rgba(0,82,255,0.2)]'
                    : 'bg-[#08080A] border-white/10 opacity-70 hover:opacity-100 hover:border-white/25'
                }`}
              >
                {/* Node indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isCurrent ? 'text-[#0052FF]' : 'text-[#666666]'
                      }`}
                    >
                      STAGE {step.number}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isCurrent ? 'bg-[#0052FF] shadow-[0_0_6px_#0052FF]' : 'bg-white/20'
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase">
                    {step.metric}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#0052FF] font-medium tracking-wide">
                    {step.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>PIPELINE</span>
                  <span className={isCurrent ? 'text-[#0052FF]' : 'text-[#555555]'}>
                    {isCurrent ? 'ACTIVE PHASE' : 'METHODOLOGY'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
