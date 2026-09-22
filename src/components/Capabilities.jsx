import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  const workflowSteps = [
    {
      number: '01',
      name: 'Strategy',
      title: 'Strategy',
      description:
        'Deconstructing business models, mapping competitive market dynamics, and architecting long-term technological and commercial leverage with measurable ROI milestones.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '02',
      name: 'Research',
      title: 'Research',
      description:
        'Interrogating behavioral analytics, auditing technical friction points, and exploring user dynamics to ground every product and architectural decision in indisputable truth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '03',
      name: 'Brand',
      title: 'Brand',
      description:
        'Forging uncompromising visual identities, distinctive design systems, and emotive narrative positioning that anchor market authority and lasting customer loyalty.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '04',
      name: 'Design',
      title: 'Design',
      description:
        'Engineering tokenized design systems, tactile micro-interactions, and responsive interfaces that transform complex digital ecosystems into effortless, elegant experiences.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '05',
      name: 'Technology',
      title: 'Technology',
      description:
        'Building ultra-fast web flagships, resilient cloud microservices, and reactive custom web applications engineered for sub-second latency and zero downtime under extreme scale.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '06',
      name: 'Content',
      title: 'Content',
      description:
        'Crafting bespoke editorial copywriting, cinematic video productions, and compelling commercial media that elevate brand resonance and command audience attention.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '07',
      name: 'AI',
      title: 'AI',
      description:
        'Applying autonomous agent pipelines, intelligent data workflows, and custom LLM integrations directly into core enterprise operations to unlock exponential efficiency.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '08',
      name: 'Marketing',
      title: 'Marketing',
      description:
        'Executing precision demand generation, multi-channel programmatic distribution, and algorithmic conversion rate optimization to scale market reach sustainably.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      number: '09',
      name: 'Growth',
      title: 'Growth',
      description:
        'Engineering self-reinforcing product loops, behavioral retention mechanics, and verified telemetry analytics to drive compounding enterprise value.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const current = workflowSteps[activeIdx];

  return (
    <section
      id="domains"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#0052FF]/[0.04] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Centered Header Matching Specification */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs sm:text-sm tracking-[0.25em] text-[#0052FF] uppercase font-bold block">
            07 — CRAFT DOMAINS &amp; WORKFLOW
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.12] text-white tracking-tight">
            WHAT WE MASTER
          </h2>
          <p className="text-sm md:text-base text-[#A0A0A0] font-light max-w-xl mx-auto leading-relaxed">
            Nine interconnected disciplines operating in concert to build enduring digital flagships and scalable business systems.
          </p>
        </div>

        {/* 2-Column Interactive Workflow Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Vertical Navigation Tabs (01 to 09) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {workflowSteps.map((step, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl text-left transition-all duration-300 group ${
                    isActive
                      ? 'bg-[#0052FF] text-white shadow-[0_0_25px_rgba(0,82,255,0.4)]'
                      : 'bg-[#09090D] text-[#A0A0A0] hover:text-white border border-white/[0.08] hover:border-[#0052FF]/40'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? 'text-white/80' : 'text-[#666666] group-hover:text-[#A0A0A0]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Showcase Card */}
          <div className="lg:col-span-8 rounded-2xl bg-[#08080C] border border-white/10 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl">
            {/* Top Media Frame */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#040406] border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: 'easeOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag Pill inside image */}
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] text-white font-medium">
                DOMAIN {current.number} &bull; {current.name.toUpperCase()}
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="mt-8 space-y-3">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0052FF] tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed max-w-2xl">
                {current.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
