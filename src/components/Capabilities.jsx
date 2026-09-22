import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(4); // Default to Development (05)

  const domains = [
    {
      number: '01',
      name: 'STRATEGY',
      tagline: 'Market architecture & business model alignment',
      capabilities: [
        'Commercial Architecture',
        'Competitive Positioning',
        'Product Roadmapping',
        'Technology Audits',
        'Resource Planning',
      ],
      description:
        'Deconstructing business models and mapping competitive market dynamics to build execution roadmaps with definitive commercial leverage.',
    },
    {
      number: '02',
      name: 'RESEARCH',
      tagline: 'Empirical data & behavioral intelligence',
      capabilities: [
        'User Interviews',
        'Friction Point Telemetry',
        'Data Synthesis',
        'Market Verification',
        'Competitive Benchmarking',
      ],
      description:
        'Interrogating analytics, studying behavioral friction, and validating market assumptions to ground architectural decisions in truth.',
    },
    {
      number: '03',
      name: 'BRAND',
      tagline: 'Typographic identity & editorial narratives',
      capabilities: [
        'Visual Identity Systems',
        'Typographic Direction',
        'Design Systems',
        'Brand Guidelines',
        'Verbal Identity',
      ],
      description:
        'Forging uncompromising brand identities, typographic systems, and visual guidelines that command authority and anchor lasting recall.',
    },
    {
      number: '04',
      name: 'DESIGN',
      tagline: 'Tokenized interfaces & tactile micro-interactions',
      capabilities: [
        'UI/UX Architecture',
        'Tokenized Design Systems',
        'Interactive Prototyping',
        'Responsive Design',
        'Ergonomic Interfaces',
      ],
      description:
        'Engineering tokenized design systems and responsive interfaces that transform complex digital workflows into effortless experiences.',
    },
    {
      number: '05',
      name: 'DEVELOPMENT',
      tagline: 'Ultra-fast web flagships & cloud systems',
      capabilities: [
        'Websites',
        'Web Applications',
        'WordPress',
        'Frontend',
        'Backend',
        'APIs',
      ],
      description:
        'Building ultra-fast business websites, responsive web applications, bespoke WordPress themes, and high-concurrency API microservices.',
    },
    {
      number: '06',
      name: 'CONTENT',
      tagline: 'Editorial narrative & digital storytelling',
      capabilities: [
        'Editorial Copywriting',
        'Content Frameworks',
        'Campaign Content',
        'Technical Documentation',
        'Story Architecture',
      ],
      description:
        'Crafting bespoke editorial copywriting, structured content systems, and high-resonance narratives that communicate brand value clearly.',
    },
    {
      number: '07',
      name: 'AI',
      tagline: 'Intelligent automation & model integration',
      capabilities: [
        'Workflow Automation',
        'LLM Integration',
        'Data Processing Pipelines',
        'Intelligent Tooling',
        'AI Roadmapping',
      ],
      description:
        'Applying modern AI capabilities, automated data pipelines, and smart workflows directly into core business operations for efficiency.',
    },
    {
      number: '08',
      name: 'MARKETING',
      tagline: 'Demand generation & organic visibility',
      capabilities: [
        'SEO Strategy',
        'Social Media Marketing',
        'Performance Marketing',
        'Content Distribution',
        'Campaign Analytics',
      ],
      description:
        'Executing precision organic SEO, multi-channel social media marketing, and performance frameworks that drive qualified demand.',
    },
    {
      number: '09',
      name: 'GROWTH',
      tagline: 'Compounding momentum & talent loops',
      capabilities: [
        'Conversion Rate Optimization',
        'Retention Systems',
        'Talent Matching Loops',
        'Analytics Telemetry',
        'Continuous Evolution',
      ],
      description:
        'Engineering self-reinforcing growth mechanics and connecting the right talent with business opportunities to compound value over time.',
    },
  ];

  const current = domains[activeIdx];

  return (
    <section
      id="domains"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-10 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                04 — CRAFT DOMAINS &amp; WORKFLOW
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              WHAT WE MASTER
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
            Nine specialized craft disciplines operating as a synchronized execution engine across technology, marketing, and talent.
          </p>
        </div>

        {/* Two-Column Interactive Layout: 9 Domains on Left, Active Context on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Domain Typography List */}
          <div className="lg:col-span-6 space-y-1">
            {domains.map((domain, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={domain.number}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  data-cursor="explore"
                  className={`group py-3.5 px-4 flex items-center justify-between border-b transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-[#0052FF] bg-[#0A0A0A]'
                      : 'border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#0052FF]' : 'text-[#555555] group-hover:text-white/70'
                      }`}
                    >
                      {domain.number}
                    </span>
                    <span
                      className={`font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-white translate-x-1'
                          : 'text-[#888888] group-hover:text-white'
                      }`}
                    >
                      {domain.name}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider transition-opacity ${
                      isActive ? 'text-[#0052FF] opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                  >
                    ACTIVE &rarr;
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Contextual Capabilities Display for Active Domain */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 bg-[#0A0A0A] border border-white/10 rounded-none relative overflow-hidden space-y-8"
              >
                {/* Active Domain Indicator */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#0052FF] font-bold">
                      DOMAIN {current.number}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#666666] uppercase tracking-widest">
                    CAPABILITY SPECIFICATION
                  </span>
                </div>

                {/* Title and Tagline */}
                <div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {current.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0052FF] font-medium tracking-wide mt-1">
                    {current.tagline}
                  </p>
                </div>

                {/* Overview Description */}
                <p className="text-sm md:text-base text-[#A0A0A0] font-light leading-relaxed">
                  {current.description}
                </p>

                {/* Contextual Capabilities (No pill-heavy UI, sleek matrix) */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <span className="text-xs font-mono tracking-widest text-[#666666] uppercase block">
                    CORE DELIVERABLES &amp; CAPABILITIES:
                  </span>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {current.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-3 bg-[#111111] border border-white/[0.06] text-xs sm:text-sm text-white font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#0052FF]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
