import React, { useState } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Understand the requirement, goals, audience, and challenges.',
    },
    {
      number: '02',
      title: 'DEFINE',
      tagline: 'Clarify scope, requirements, resources, and expected outcomes.',
    },
    {
      number: '03',
      title: 'MATCH',
      tagline: 'Connect businesses with professionals based on skills, availability, and budget.',
    },
    {
      number: '04',
      title: 'BUILD',
      tagline: 'Create and execute the required digital solution or collaboration.',
    },
    {
      number: '05',
      title: 'DELIVER',
      tagline: 'Deliver practical, reliable, business-oriented outcomes.',
    },
    {
      number: '06',
      title: 'GROW',
      tagline: 'Continue learning, improving, and creating future collaboration opportunities.',
    },
  ];

  return (
    <section
      id="methodology"
      className="py-16 md:py-20 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold font-mono">
                05 — METHODOLOGY
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              HOW WE WORK
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-xs leading-relaxed">
            A six-stage pipeline taking requirements from discovery to execution and long-term momentum.
          </p>
        </div>

        {/* 6 Connected Stages in Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stages.map((step, idx) => {
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#0A0A0A] border-[#0052FF] shadow-[0_0_20px_rgba(0,82,255,0.18)]'
                    : 'bg-[#08080A] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isCurrent ? 'text-[#0052FF]' : 'text-[#666666]'
                      }`}
                    >
                      STAGE {step.number}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isCurrent ? 'bg-[#0052FF]' : 'bg-white/20'
                      }`}
                    />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                    {step.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#666666]">
                  <span>PIPELINE</span>
                  <span className={isCurrent ? 'text-[#0052FF]' : 'text-[#555555]'}>
                    {isCurrent ? 'ACTIVE PHASE' : 'METHOD'}
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
