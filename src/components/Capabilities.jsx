import React, { useState } from 'react';

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(4); // Development by default

  const domains = [
    {
      number: '01',
      name: 'STRATEGY',
      capabilities: ['Market Architecture', 'Roadmapping', 'Tech Audits', 'Resource Planning'],
    },
    {
      number: '02',
      name: 'RESEARCH',
      capabilities: ['User Telemetry', 'Audits', 'Friction Points', 'Benchmarking'],
    },
    {
      number: '03',
      name: 'BRAND',
      capabilities: ['Design Systems', 'Typographic Direction', 'Identity', 'Guidelines'],
    },
    {
      number: '04',
      name: 'DESIGN',
      capabilities: ['UI/UX Systems', 'Prototypes', 'Responsive UX', 'Micro-Interactions'],
    },
    {
      number: '05',
      name: 'DEVELOPMENT',
      capabilities: ['Websites', 'Web Applications', 'WordPress', 'Frontend', 'Backend', 'APIs'],
    },
    {
      number: '06',
      name: 'CONTENT',
      capabilities: ['Editorial Copy', 'Content Systems', 'Campaign Content', 'Storytelling'],
    },
    {
      number: '07',
      name: 'AI',
      capabilities: ['Workflows', 'LLM Integrations', 'Data Pipelines', 'Automation'],
    },
    {
      number: '08',
      name: 'MARKETING',
      capabilities: ['SEO Strategy', 'Social Media', 'Performance Ads', 'Analytics'],
    },
    {
      number: '09',
      name: 'GROWTH',
      capabilities: ['Conversion Loops', 'Retention Systems', 'Talent Loops', 'Scale'],
    },
  ];

  const current = domains[activeIdx];

  return (
    <section
      id="domains"
      className="py-16 md:py-20 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0052FF]/15 pb-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold font-mono">
                04 — CRAFT DOMAINS &amp; WORKFLOW
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              WHAT WE MASTER
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-xs leading-relaxed">
            Nine specialized craft disciplines operating across modern technology, brand, and talent.
          </p>
        </div>

        {/* Compact Grid of 9 Domains with Live Capability Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {domains.map((d, idx) => {
            const isActive = activeIdx === idx;

            return (
              <button
                key={d.number}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`p-3.5 border text-left transition-all ${
                  isActive
                    ? 'border-[#0052FF] bg-[#181E30] shadow-[0_0_15px_rgba(0,82,255,0.25)]'
                    : 'border-[#0052FF]/20 bg-[#131725] hover:border-[#0052FF]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isActive ? 'text-[#0052FF]' : 'text-[#666666]'
                    }`}
                  >
                    {d.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />}
                </div>
                <div
                  className={`font-display font-bold text-xs sm:text-sm tracking-wider uppercase ${
                    isActive ? 'text-white' : 'text-[#888888]'
                  }`}
                >
                  {d.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Compact Deliverables Strip */}
        <div className="p-5 bg-[#131725] border border-[#0052FF]/40 shadow-lg shadow-[#0052FF]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#0052FF] font-bold">
              {current.number} {current.name} &rarr;
            </span>
            <span className="text-[11px] font-mono text-[#888888] uppercase hidden sm:inline">
              CAPABILITIES:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {current.capabilities.map((cap) => (
              <span
                key={cap}
                className="px-2.5 py-1 bg-[#111111] border border-white/10 text-xs font-mono text-white"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
