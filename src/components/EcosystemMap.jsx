import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Palette, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EcosystemMap() {
  const [activePillar, setActivePillar] = useState('growth');

  const pillars = [
    {
      id: 'growth',
      name: 'GROWTH',
      icon: TrendingUp,
      headline: 'Digital Growth & Market Acceleration',
      description: 'Strategic market positioning, data-driven revenue acceleration loops, conversion architecture, and scalable customer acquisition engines.',
      capabilities: ['Market Positioning Strategy', 'Conversion Velocity Systems', 'Algorithmic Performance Media', 'Retention Loops'],
      metrics: '4.2x Average Client Growth Rate',
      position: 'top-left',
      coords: { x: 22, y: 22 },
    },
    {
      id: 'technology',
      name: 'TECHNOLOGY',
      icon: Cpu,
      headline: 'High-Concurrency Software & Cloud Architecture',
      description: 'Distributed microservices, real-time streaming engines, reactive web flagships, and bank-grade cloud platforms built for uncompromised resilience.',
      capabilities: ['Micro-frontend Architectures', 'Sub-millisecond API Design', 'Kubernetes & AWS GovCloud', 'Predictive IoT Pipelines'],
      metrics: '99.99% Guaranteed Production Uptime',
      position: 'top-right',
      coords: { x: 78, y: 22 },
    },
    {
      id: 'creative',
      name: 'CREATIVE',
      icon: Palette,
      headline: 'Cinematic UI/UX & Brand Distinction',
      description: 'Editorial typographic systems, intuitive ergonomics, emotive art direction, and modular design systems that make brands unforgettable.',
      capabilities: ['Design Token Architectures', 'Cinematic Motion Design', 'Ergonomic Clinical / Civic UX', 'Brand Storytelling Systems'],
      metrics: '100% Bespoke Craft — Zero Generic Templates',
      position: 'bottom-left',
      coords: { x: 22, y: 78 },
    },
    {
      id: 'talent',
      name: 'TALENT',
      icon: Users,
      headline: 'Vetted Elite Digital Talent Connections',
      description: 'Embedded autonomous engineering pods, principal architects, and senior designers vetted through rigorous 4-stage algorithmic and architectural defense.',
      capabilities: ['Staff & Principal Engineers', 'Autonomous Product Pods', 'Top 2.5% Vetting Gate', 'Frictionless Scaling SLAs'],
      metrics: 'Over 15+ Core Technical Disciplines',
      position: 'bottom-right',
      coords: { x: 78, y: 78 },
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[#060608] border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
                // SYSTEM ARCHITECTURE
              </span>
              <div className="h-[1px] w-12 bg-brand-blue/30" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              THE DIGITAL ECOSYSTEM
            </h2>
          </div>
          <p className="text-neutral-400 font-light text-sm md:text-base max-w-md">
            Hover each node to inspect how GENFREX weaves digital strategy, engineering, visual craft, and specialized talent into one unified organism.
          </p>
        </div>

        {/* Ecosystem Interactive Grid & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Visual Network Graphic (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-square max-w-[560px] mx-auto w-full flex items-center justify-center p-6 border border-white/[0.08] bg-black/40">
            {/* SVG Interactive Dynamic Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {/* Outer boundary orbit line */}
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeDasharray="2 3"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
              />

              {/* Connecting lines from center to 4 nodes */}
              {pillars.map((p) => {
                const isActive = activePillar === p.id;
                return (
                  <line
                    key={p.id}
                    x1="50"
                    y1="50"
                    x2={p.coords.x}
                    y2={p.coords.y}
                    stroke={isActive ? '#0052FF' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isActive ? '1.5' : '0.75'}
                    strokeDasharray={isActive ? 'none' : '3 3'}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Central GENFREX Hub Node */}
            <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#09090D] border-2 border-brand-blue/60 shadow-[0_0_40px_rgba(0,82,255,0.2)] text-center p-2">
              <span className="font-mono text-[9px] text-brand-blue tracking-[0.3em] uppercase mb-1">
                NEXUS
              </span>
              <span className="font-display font-bold text-base md:text-xl text-white tracking-[0.2em]">
                GENFREX
              </span>
              <span className="font-mono text-[8px] text-neutral-400 tracking-wider mt-1">
                CORE MATRIX
              </span>
            </div>

            {/* 4 Surrounding Interactive Nodes */}
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  data-cursor="hover"
                  style={{
                    left: `${pillar.coords.x}%`,
                    top: `${pillar.coords.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center group focus:outline-none transition-all duration-300 ${
                    isActive ? 'scale-110' : 'scale-95 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-blue text-white border-white shadow-[0_0_25px_rgba(0,82,255,0.6)]'
                        : 'bg-[#0f0f14] text-neutral-300 border-white/20 hover:border-white/50'
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span
                    className={`font-display font-semibold text-xs tracking-[0.18em] mt-2.5 transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-400'
                    }`}
                  >
                    {pillar.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Deep Dive Dossier (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 border border-white/[0.08] bg-[#0A0A0E] relative min-h-[440px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase">
                    ACTIVE PILLAR // {currentPillar.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-blue tracking-widest">
                  [CONNECTED]
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                {currentPillar.headline}
              </h3>

              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
                {currentPillar.description}
              </p>

              {/* Core Capabilities */}
              <div className="space-y-2 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase block mb-3">
                  CORE SPECIALIZATIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentPillar.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <span className="text-brand-blue">&bull;</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Metric & Quick Action */}
            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 tracking-wider block">
                  STANDARD BENCHMARK
                </span>
                <span className="font-display font-bold text-sm text-white">
                  {currentPillar.metrics}
                </span>
              </div>

              <Link
                to="/services"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-brand-blue hover:text-white transition-colors"
              >
                <span>VIEW SPECS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
