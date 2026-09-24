import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Cpu, Users, Palette, Sparkles, TrendingUp, Briefcase } from 'lucide-react';

export default function ConnectElements() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState('tech');

  const nodes = [
    {
      id: 'business',
      label: 'BUSINESS',
      sublabel: 'REQUIREMENT',
      icon: Briefcase,
      x: 50,
      y: 12,
      desc: 'Identifying market friction & unit economics',
    },
    {
      id: 'growth',
      label: 'DIGITAL GROWTH',
      sublabel: 'SCALE ENGINE',
      icon: TrendingUp,
      x: 85,
      y: 28,
      desc: 'Performance loops & conversion architecture',
    },
    {
      id: 'tech',
      label: 'TECHNOLOGY',
      sublabel: 'CORE SYSTEMS',
      icon: Cpu,
      x: 85,
      y: 72,
      desc: 'Custom web software, microservices & APIs',
    },
    {
      id: 'talent',
      label: 'TALENT',
      sublabel: 'SPECIALISTS',
      icon: Users,
      x: 50,
      y: 88,
      desc: 'Top 3% vetted engineers & product leads',
    },
    {
      id: 'creative',
      label: 'CREATIVE',
      sublabel: 'IDENTITY & UX',
      icon: Palette,
      x: 15,
      y: 72,
      desc: 'Emotive branding & ergonomic interfaces',
    },
    {
      id: 'ai',
      label: 'AI & INNOVATION',
      sublabel: 'INTELLIGENCE',
      icon: Sparkles,
      x: 15,
      y: 28,
      desc: 'Predictive automation & data pipelines',
    },
  ];

  const philosophy = [
    {
      code: 'GEN',
      title: 'GenZ',
      description: 'Harnessing digital-native creativity, modern cultural fluency, and rapid technological adoption.',
    },
    {
      code: 'FRE',
      title: 'Freelancing',
      description: 'An agile on-demand talent ecosystem connecting ambitious companies directly with vetted freelance specialists.',
    },
    {
      code: 'X',
      title: 'Experience',
      description: 'The catalyst where digital strategy, execution, and transformative user experience multiply for compounding growth.',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[100svh] py-28 md:py-36 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 overflow-hidden"
    >
      {/* Background Ambience: Subtle Dark Depth */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1677FF]/[0.035] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* 3. OPENING LABEL: 02 / WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          className="flex items-center gap-3 mb-10 md:mb-16"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-[#8A8F98] uppercase">
            02 / WHO WE ARE
          </span>
          <div className="h-[1px] w-12 bg-[#2D8CFF]/40" />
        </motion.div>

        {/* SECTION HERO SPLIT: Left (Main Statement & Narrative) / Right (Ecosystem Network) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28 md:mb-36">
          
          {/* Left Column: Heading & Narrative (~7 cols on desktop) */}
          <div className="lg:col-span-6 space-y-8">
            {/* 4. MAIN STATEMENT */}
            <h2 className="font-display font-extrabold text-[clamp(2.8rem,6.2vw,6.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA]">
              <span className="block">WE</span>
              <span className="block text-[#2D8CFF] drop-shadow-[0_0_30px_rgba(45,140,255,0.22)]">
                CONNECT
              </span>
              <span className="block text-neutral-300">THE RIGHT</span>
              <span className="block">ELEMENTS.</span>
            </h2>

            {/* Core Supporting Principle */}
            <div className="border-l-2 border-[#1677FF] pl-5 py-1">
              <p className="font-display font-medium text-lg md:text-xl text-[#F5F7FA] leading-snug">
                Digital growth doesn't happen through one service. It happens when the right business requirement meets the right technology, talent and execution.
              </p>
            </div>

            {/* 5. SUPPORTING CONTENT (Readable, concise, not a wall of text) */}
            <div className="space-y-4 text-sm md:text-base text-[#8A8F98] font-light leading-relaxed max-w-xl">
              <p>
                GENFREX is a digital growth and talent ecosystem designed to connect businesses with the right digital solutions, technology and skilled professionals.
              </p>
              <p>
                We help businesses build their digital presence, develop technology solutions, improve online visibility and access talent for evolving digital requirements.
              </p>
            </div>

            {/* Quick Context Metric */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-6 font-mono text-xs text-[#8A8F98]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2D8CFF] rounded-none animate-pulse" />
                <span>REAL-TIME MATCHING</span>
              </div>
              <span>&bull;</span>
              <div>TOP 3% SPECIALISTS</div>
            </div>
          </div>

          {/* Right Column: 6. ECOSYSTEM VISUALIZATION (~6 cols on desktop) */}
          <div className="lg:col-span-6">
            
            {/* Desktop / Tablet Animated Digital Network */}
            <div className="hidden sm:block relative aspect-square max-w-[520px] mx-auto w-full p-4 border border-white/[0.08] bg-[#07070a]/60 backdrop-blur-sm">
              
              {/* Background Concentric Subtle Orbit Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="1.5 3" />
                <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(45, 140, 255, 0.12)" />

                {/* Pulsing connection lines to nodes */}
                {nodes.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <line
                      key={node.id}
                      x1="50"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke={isActive ? '#2D8CFF' : 'rgba(255, 255, 255, 0.12)'}
                      strokeWidth={isActive ? '1.5' : '0.75'}
                      strokeDasharray={isActive ? 'none' : '2 3'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Central GENFREX Hub Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#08080d] border-2 border-[#1677FF] shadow-[0_0_35px_rgba(22,119,255,0.25)] text-center p-3">
                <span className="font-mono text-[8px] text-[#2D8CFF] tracking-[0.28em] uppercase mb-1">
                  NEXUS
                </span>
                <span className="font-display font-extrabold text-base md:text-lg tracking-[0.2em] text-white">
                  GENFREX
                </span>
                <span className="font-mono text-[7px] text-[#8A8F98] tracking-widest uppercase mt-0.5">
                  ECOSYSTEM
                </span>
              </div>

              {/* 6 Surrounding Connected Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    onMouseEnter={() => setActiveNode(node.id)}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center group focus:outline-none transition-transform duration-300 ${
                      isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#1677FF] text-white border-white shadow-[0_0_20px_rgba(45,140,255,0.5)]'
                          : 'bg-[#0a0a0f] text-[#8A8F98] border-white/15 hover:border-white/40'
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span
                      className={`font-display font-bold text-[10px] md:text-[11px] tracking-wider mt-1.5 whitespace-nowrap transition-colors ${
                        isActive ? 'text-white' : 'text-[#8A8F98]'
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}

              {/* Node Inspector Status Pill at bottom of canvas */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 border border-white/10 p-2.5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#2D8CFF]">
                  ACTIVE ELEMENT: {nodes.find((n) => n.id === activeNode)?.label}
                </span>
                <span className="text-[#8A8F98] hidden sm:inline">
                  {nodes.find((n) => n.id === activeNode)?.desc}
                </span>
              </div>
            </div>

            {/* Mobile Vertically Optimized Ecosystem Flow (No complicated circular SVG forced on small screen) */}
            <div className="sm:hidden border border-white/[0.08] bg-[#07070a] p-6 space-y-4">
              <div className="font-mono text-[10px] text-[#2D8CFF] tracking-[0.25em] uppercase border-b border-white/[0.08] pb-2 mb-4">
                THE CONNECTION PIPELINE
              </div>

              {[
                { stage: '01', title: 'BUSINESS', desc: 'Requirements, constraints & market objectives' },
                { stage: '02', title: 'GENFREX NEXUS', desc: 'Synthesizing strategy & technical topology', highlight: true },
                { stage: '03', title: 'TECHNOLOGY + TALENT', desc: 'Custom engineering pods & domain specialists' },
                { stage: '04', title: 'EXECUTION & GROWTH', desc: 'Zero-downtime shipping and measurable compounding velocity' },
              ].map((step, idx, arr) => (
                <div key={step.stage}>
                  <div
                    className={`p-4 border transition-colors ${
                      step.highlight
                        ? 'border-[#1677FF] bg-[#1677FF]/10'
                        : 'border-white/10 bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-xs tracking-wider text-white">
                        {step.title}
                      </span>
                      <span className="font-mono text-[10px] text-[#8A8F98]">
                        STAGE {step.stage}
                      </span>
                    </div>
                    <p className="text-xs text-[#8A8F98] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex justify-center my-1.5 text-[#2D8CFF]">
                      <ArrowDown className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9. BRAND PHILOSOPHY: GEN + FRE + X (Three large typographic blocks, NOT traditional cards) */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-20">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8F98] uppercase block mb-3">
              // BRAND PHILOSOPHY
            </span>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-[#F5F7FA] tracking-tight">
              THE ANATOMY OF GENFREX
            </h3>
          </div>

          {/* Typographic Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08]">
            {philosophy.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-8 md:py-12 md:px-8 first:pl-0 last:pr-0 space-y-4 group"
              >
                {/* Monolithic Word Token */}
                <div className="flex items-baseline justify-between">
                  <span className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter text-[#F5F7FA] group-hover:text-[#2D8CFF] transition-colors duration-300">
                    {item.code}
                  </span>
                  <span className="font-mono text-xs text-[#2D8CFF] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle */}
                <h4 className="font-display font-semibold text-lg text-neutral-200">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#8A8F98] font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
