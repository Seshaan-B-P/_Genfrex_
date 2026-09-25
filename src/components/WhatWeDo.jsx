import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown, Search, Terminal, Users, Sparkles, Layers, Cpu } from 'lucide-react';

export default function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      index: '01',
      title: 'DIGITAL\nGROWTH',
      shortTitle: 'DIGITAL GROWTH',
      description: 'Helping businesses improve visibility, reach the right audience and create measurable digital momentum.',
      services: ['SEO', 'AI Search Optimization', 'Performance Marketing', 'Social Media SEO', 'Conversion Loops'],
      themeColor: '#2D8CFF',
      visualType: 'growth',
    },
    {
      index: '02',
      title: 'TECHNOLOGY',
      shortTitle: 'TECHNOLOGY',
      description: 'Building modern digital platforms, websites and applications aligned with real business objectives.',
      services: ['Website Development', 'Web Applications', 'Custom Development', 'API Integrations', 'Automation', 'Database Solutions'],
      themeColor: '#2D8CFF',
      visualType: 'tech',
    },
    {
      index: '03',
      title: 'TALENT',
      shortTitle: 'TALENT',
      description: 'Connecting businesses with digital professionals and flexible project-based capabilities.',
      services: ['Developers', 'Designers', 'Marketers', 'Content Professionals', 'Embedded Project Squads'],
      themeColor: '#2D8CFF',
      visualType: 'talent',
    },
    {
      index: '04',
      title: 'CONTENT\n& CREATIVE',
      shortTitle: 'CONTENT & CREATIVE',
      description: 'Creating content and digital assets that strengthen communication and brand presence.',
      services: ['SEO Content', 'Website Copywriting', 'Brand Identity', 'Video Direction', 'Digital Design', 'Asset Toolkits'],
      themeColor: '#2D8CFF',
      visualType: 'creative',
    },
    {
      index: '05',
      title: 'AI &\nINNOVATION',
      shortTitle: 'AI & INNOVATION',
      description: 'Applying AI, LLMs, automation and modern digital workflows to evolving business requirements.',
      services: ['AI Search Ingestion', 'LLM Fine-Tuning', 'Workflow Automation', 'AI Optimization', 'Digital Telemetry'],
      themeColor: '#2D8CFF',
      visualType: 'ai',
    },
  ];

  const current = chapters[activeChapter];

  return (
    <section
      id="services"
      className="relative min-h-[100svh] py-28 md:py-40 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 overflow-hidden"
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1677FF]/[0.035] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* 2. SECTION OPENING */}
        <div className="border-b border-white/[0.08] pb-16 md:pb-24 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8F98] uppercase">
              03 / WHAT WE DO
            </span>
            <div className="h-[1px] w-12 bg-[#2D8CFF]/40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA]">
                WE BUILD <br />
                WHAT MOVES <br />
                <span className="text-[#2D8CFF] drop-shadow-[0_0_30px_rgba(45,140,255,0.22)]">
                  BUSINESSES
                </span>{' '}
                <br />
                FORWARD.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm md:text-base text-[#8A8F98] font-light leading-relaxed max-w-md">
                From digital visibility to technology, talent and creative execution, GENFREX brings the capabilities required to move a digital business forward.
              </p>
            </div>
          </div>
        </div>

        {/* 3. SERVICE CHAPTER SYSTEM (Desktop & Tablet Pinned / Interactive View) */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start mb-28">
          
          {/* Left: Active Chapter Nav & Content (6 Cols) */}
          <div className="col-span-6 space-y-10">
            {/* 10. Active Chapter Indicator */}
            <div className="flex items-center gap-6 font-mono text-xs tracking-[0.2em]">
              {chapters.map((ch, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={ch.index}
                    onClick={() => setActiveChapter(idx)}
                    className={`flex items-center gap-2 transition-all duration-300 focus:outline-none ${
                      isActive ? 'text-[#F5F7FA]' : 'text-[#8A8F98] hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'text-[#2D8CFF] font-bold' : ''}>
                      {ch.index}
                    </span>
                    {isActive && (
                      <span className="w-8 h-[1px] bg-[#2D8CFF] inline-block animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Chapter Details Transition Container */}
            <div className="min-h-[440px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Large Index */}
                  <div className="font-mono text-sm tracking-[0.3em] text-[#2D8CFF] font-semibold">
                    CHAPTER // {current.index}
                  </div>

                  {/* 12. Huge Editorial Title */}
                  <h3 className="font-display font-extrabold text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.9] tracking-[-0.035em] text-[#F5F7FA] whitespace-pre-line">
                    {current.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-[#8A8F98] font-light leading-relaxed max-w-lg">
                    {current.description}
                  </p>

                  {/* Services Tags */}
                  <div className="pt-4">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase block mb-3">
                      VERIFIED CAPABILITIES:
                    </span>
                    <div className="flex flex-wrap gap-2 max-w-lg">
                      {current.services.map((svc, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 bg-[#0a0a0f] border border-white/10 text-xs font-mono text-[#F5F7FA] hover:border-[#1677FF] transition-colors"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <button
                  disabled={activeChapter === 0}
                  onClick={() => setActiveChapter((prev) => Math.max(0, prev - 1))}
                  className="text-[#8A8F98] hover:text-white disabled:opacity-25 transition-colors"
                >
                  &larr; PREVIOUS CHAPTER
                </button>

                <div className="text-[#8A8F98]">
                  <span className="text-[#2D8CFF] font-bold">{activeChapter + 1}</span> / {chapters.length}
                </div>

                <button
                  disabled={activeChapter === chapters.length - 1}
                  onClick={() => setActiveChapter((prev) => Math.min(chapters.length - 1, prev + 1))}
                  className="text-[#8A8F98] hover:text-white disabled:opacity-25 transition-colors"
                >
                  NEXT CHAPTER &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Right: Large Atmospheric Visual Composition (6 Cols) */}
          <div className="col-span-6 relative aspect-[4/3] max-w-[540px] ml-auto w-full border border-white/[0.08] bg-[#07070a] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.visualType}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex flex-col justify-between relative z-10"
              >
                {/* 4. CHAPTER 01: Abstract Search / Analytics Environment */}
                {current.visualType === 'growth' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8A8F98]">
                        <Search className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>INDEXING VISIBILITY PIPELINE</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#2D8CFF]">ACTIVE RANK // #1</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">ORGANIC DISCOVERY VELOCITY</span>
                        <span className="text-[#2D8CFF] font-bold">+280% MOMENTUM</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">AI SEARCH SYNAPSE CAPTURE</span>
                        <span className="text-white font-bold">OPTIMIZED</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">CONVERSION RETENTION RATE</span>
                        <span className="text-white font-bold">HIGH THROUGHPUT</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. CHAPTER 02: Abstract Browser Windows / Code / Interface Layers */}
                {current.visualType === 'tech' && (
                  <div className="space-y-4 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>ARCHITECTURE // KERNEL RUNBOOK</span>
                      </div>
                      <span className="text-[#2D8CFF]">VITE + REACT 19</span>
                    </div>

                    <div className="p-4 bg-black/70 border border-white/10 font-mono text-[11px] text-neutral-300 space-y-2">
                      <div className="text-[#8A8F98]">// Distributed micro-frontend core</div>
                      <div className="text-blue-300">const ecosystem = await loadTopology({`{`}</div>
                      <div className="pl-4 text-neutral-400">latency: '&lt; 40ms',</div>
                      <div className="pl-4 text-neutral-400">concurrency: 'unlimited',</div>
                      <div className="pl-4 text-[#2D8CFF]">resilience: '99.99%'</div>
                      <div className="text-blue-300">{`}`});</div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-[#8A8F98] pt-2">
                      <span>ZERO REGRESSION CI/CD</span>
                      <span className="text-white">DEPLOYED GLOBALLY</span>
                    </div>
                  </div>
                )}

                {/* 6. CHAPTER 03: Professional Capability Node Network */}
                {current.visualType === 'talent' && (
                  <div className="my-auto space-y-6">
                    <div className="text-center">
                      <span className="font-mono text-[10px] text-[#2D8CFF] uppercase tracking-widest block mb-1">
                        ENTERPRISE TALENT CONDUIT
                      </span>
                      <div className="font-display font-bold text-sm text-white">
                        BUSINESS &rarr; GENFREX &rarr; EMBEDDED POD
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono text-center text-xs">
                      <div className="p-3 bg-black/60 border border-white/10">
                        <span className="text-[#2D8CFF] block text-[10px] mb-1">LEAD</span>
                        <span className="text-white font-semibold">DEVELOPERS</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-[#1677FF] bg-[#1677FF]/10">
                        <span className="text-[#2D8CFF] block text-[10px] mb-1">SYSTEMS</span>
                        <span className="text-white font-semibold">DESIGNERS</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-white/10">
                        <span className="text-[#2D8CFF] block text-[10px] mb-1">GROWTH</span>
                        <span className="text-white font-semibold">MARKETERS</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-black/80 border border-white/10 text-center font-mono text-[11px] text-[#8A8F98]">
                      VETTING GATE: TOP 3% AUTONOMOUS SPECIALISTS
                    </div>
                  </div>
                )}

                {/* 7. CHAPTER 04: Editorial Typography & Design Framework */}
                {current.visualType === 'creative' && (
                  <div className="my-auto space-y-5">
                    <div className="border-b border-white/10 pb-2 flex justify-between text-xs font-mono text-[#8A8F98]">
                      <span>EDITORIAL DIRECTION</span>
                      <span className="text-[#2D8CFF]">BESPOKE CRAFT</span>
                    </div>

                    <div className="p-6 bg-black/70 border border-white/10 space-y-3">
                      <div className="font-display font-extrabold text-2xl text-white tracking-tight">
                        MATHEMATICAL ERGONOMICS.
                      </div>
                      <p className="text-xs text-[#8A8F98] font-light leading-relaxed">
                        Visual identities, typographic systems, and high-contrast dark interfaces engineered to command authority and eliminate user friction.
                      </p>
                    </div>

                    <div className="flex gap-2 font-mono text-[10px] text-neutral-400">
                      <span className="px-2 py-1 bg-white/5 border border-white/10">FIGMA TOKENS</span>
                      <span className="px-2 py-1 bg-white/5 border border-white/10">MOTION KITS</span>
                      <span className="px-2 py-1 bg-white/5 border border-white/10">EDITORIAL GRID</span>
                    </div>
                  </div>
                )}

                {/* 8. CHAPTER 05: Sophisticated Abstract Intelligence / Data Connections */}
                {current.visualType === 'ai' && (
                  <div className="my-auto space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                      <div className="flex items-center gap-2 text-[#8A8F98]">
                        <Cpu className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>INTELLIGENCE ARCHITECTURE</span>
                      </div>
                      <span className="text-[#2D8CFF]">LLM PIPELINES</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">SYNTACTIC DATA INGESTION</span>
                        <span className="text-[#2D8CFF]">VECTOR EMBEDDINGS</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">WORKFLOW AUTOMATION ENGINE</span>
                        <span className="text-white">ZERO FRICTION</span>
                      </div>
                      <div className="p-3 bg-black/60 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">ALGORITHMIC DECISION MODEL</span>
                        <span className="text-white">PRODUCTION-READY</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Footer Tag */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#8A8F98]">
                  <span>GENFREX CORE PILLAR</span>
                  <span className="text-[#2D8CFF] uppercase">CHAPTER // {current.index}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 15. MOBILE VERTICAL CHAPTERS (No forced desktop pinned layout) */}
        <div className="md:hidden space-y-16 mb-24">
          {chapters.map((ch) => (
            <div key={ch.index} className="border-t border-white/10 pt-8 space-y-6">
              <span className="font-mono text-xs text-[#2D8CFF] font-bold tracking-widest block">
                CHAPTER {ch.index} // 05
              </span>

              <h3 className="font-display font-extrabold text-3xl text-white tracking-tight whitespace-pre-line">
                {ch.title}
              </h3>

              <p className="text-sm text-[#8A8F98] font-light leading-relaxed">
                {ch.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {ch.services.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-[#09090d] border border-white/10 text-xs font-mono text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 16. SECTION END TRANSITION STATEMENT */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase block mb-3">
              // THE SYNTHESIS
            </span>
            <h3 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#F5F7FA] tracking-tight leading-tight">
              FIVE CAPABILITIES. <br />
              <span className="text-[#2D8CFF]">ONE CONNECTED</span> <br />
              ECOSYSTEM.
            </h3>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#8A8F98] hover:text-white uppercase transition-colors self-start md:self-auto group"
          >
            <span>CONTINUE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#2D8CFF] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
