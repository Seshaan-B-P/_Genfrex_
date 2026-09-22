import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Understand the problem.',
      description:
        'We interrogate business economics, audit existing technical bottlenecks, and map stakeholder friction to uncover foundational opportunities.',
      deliverables: ['Bottleneck Audit', 'Stakeholder Mapping', 'Core Opportunity Brief'],
    },
    {
      number: '02',
      title: 'DEFINE',
      tagline: 'Find the opportunity.',
      description:
        'We crystallize requirements, eliminate vanity bloat, and anchor architecture KPIs around performance velocity, conversion, and reliability.',
      deliverables: ['System Specifications', 'Performance KPIs', 'Architecture Roadmap'],
    },
    {
      number: '03',
      title: 'STRATEGIZE',
      tagline: 'Chart the execution roadmap.',
      description:
        'We design the optimal technical topology, define milestone sprint cycles, and align engineering resources for rapid, predictable delivery.',
      deliverables: ['Execution Strategy', 'Milestone Planning', 'Resource Architecture'],
    },
    {
      number: '04',
      title: 'CREATE',
      tagline: 'Turn ideas into experiences.',
      description:
        'We forge bespoke visual identities, tokenized component systems, and ergonomic micro-interactions designed to leave an indelible impression.',
      deliverables: ['Visual Identity System', 'Design Tokens', 'Interactive Prototypes'],
    },
    {
      number: '05',
      title: 'BUILD',
      tagline: 'Engineer the experience.',
      description:
        'Our senior polyglot engineering pods write resilient, tested code with automated CI/CD staging, sub-millisecond API endpoints, and high concurrency.',
      deliverables: ['Production Codebase', 'Sub-ms API Endpoints', 'Automated CI/CD'],
    },
    {
      number: '06',
      title: 'LAUNCH',
      tagline: 'Put it into the world.',
      description:
        'We orchestrate multi-point deployment sequences with automated canary rollouts, DNS cutovers, and 24/7 observability war room monitoring.',
      deliverables: ['Zero-Downtime Cutover', 'Canary Rollouts', 'Observability War Room'],
    },
  ];

  return (
    <section
      id="process"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Heading Matching User Specification */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 border-b border-white/[0.08] pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase font-medium">
                08 — METHODOLOGY
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              HOW WE EXECUTE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
            A disciplined six-stage pipeline engineered to eliminate technical debt and accelerate market momentum from discovery to deployment.
          </p>
        </div>

        {/* 6-Stage Connected Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#08080C] border border-white/10 hover:border-[#0052FF] p-7 md:p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,82,255,0.22)] flex flex-col justify-between group relative overflow-hidden cursor-default"
            >
              {/* Top Pipeline Indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10 group-hover:border-[#0052FF]/40 transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_rgba(0,82,255,0.9)]" />
                    <span className="text-xs font-bold tracking-widest text-[#0052FF]">
                      PHASE {step.number}
                    </span>
                  </div>

                  <span className="font-display font-black text-2xl text-white/10 group-hover:text-white/30 transition-colors select-none">
                    0{idx + 1}
                  </span>
                </div>

                {/* Phase Title & Tagline */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#0052FF] transition-colors tracking-tight mb-1">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#0052FF] uppercase tracking-wider mb-4">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[10px] bg-white/[0.03] border border-white/10 text-[#A0A0A0] group-hover:border-[#0052FF]/30 group-hover:text-white transition-colors tracking-wide font-medium rounded-md flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#0052FF]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="border-t border-white/[0.08] pt-4 mt-2 flex items-center justify-between">
                <span className="text-[10px] text-[#666666] tracking-widest uppercase font-medium group-hover:text-[#A0A0A0] transition-colors">
                  STAGE {step.number} OF 06
                </span>

                <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-[#0052FF] group-hover:bg-[#0052FF] flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
