import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Search, Zap, Share2, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalGrowth() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'seo',
      number: '01',
      title: 'SEO',
      subheading: 'Build sustainable organic visibility through structured search optimization.',
      capabilities: [
        { code: '01', name: 'Technical SEO Infrastructure' },
        { code: '02', name: 'On-Page Architecture & Semantic Tags' },
        { code: '03', name: 'Algorithmic Keyword Research' },
        { code: '04', name: 'Local SEO & Geo-Targeted Presence' },
        { code: '05', name: 'Off-Page Authority & Link Foundations' },
        { code: '06', name: 'Competitor Gap & Intelligence Auditing' },
        { code: '07', name: 'Full Architecture Technical Audits' },
        { code: '08', name: 'Continuous Monthly Performance Management' },
      ],
      visualType: 'search-env',
    },
    {
      id: 'ai-search',
      number: '02',
      transitionTag: 'SEARCH IS CHANGING.',
      title: 'AI SEARCH\nOPTIMIZATION',
      subheading: 'Preparing digital presence and content for the evolving AI-driven search ecosystem.',
      capabilities: [
        { code: '01', name: 'AI Overview & Perplexity Optimization' },
        { code: '02', name: 'LLM Syntactic & Semantic Alignment' },
        { code: '03', name: 'AI Search Engine Visibility Mapping' },
        { code: '04', name: 'Entity Optimization & Knowledge Graphs' },
        { code: '05', name: 'Topical Authority Clusters' },
        { code: '06', name: 'Structured JSON-LD & Schema Architecture' },
        { code: '07', name: 'AI-Friendly Content Pipelines' },
      ],
      visualType: 'entity-graph',
    },
    {
      id: 'digital-marketing',
      number: '03',
      title: 'DIGITAL\nMARKETING',
      subheading: 'Turn strategy into targeted campaigns, audience engagement and measurable digital activity.',
      capabilities: [
        { code: '01', name: 'Digital Growth Strategy & Roadmaps' },
        { code: '02', name: 'High-Intent Search Engine Marketing' },
        { code: '03', name: 'Targeted Social Media Campaigns' },
        { code: '04', name: 'Audience Psychographic Research' },
        { code: '05', name: 'Performance Attribution Tracking' },
        { code: '06', name: 'Full-Funnel Conversion Strategy' },
      ],
      visualType: 'marketing-pipeline',
    },
    {
      id: 'social-seo',
      number: '04',
      badge: 'SOCIAL MEDIA SEO',
      title: 'SOCIAL\nDISCOVERY',
      subheading: 'Improve how people discover your brand across social search ecosystems.',
      capabilities: [
        { code: '01', name: 'Search-Optimized Profile Architecture' },
        { code: '02', name: 'In-Platform Keyword Placement' },
        { code: '03', name: 'Algorithmic Content & Video Optimization' },
        { code: '04', name: 'Topical Hashtag Strategy' },
        { code: '05', name: 'Social Search Query Positioning' },
        { code: '06', name: 'Structured Content Calendar Engineering' },
      ],
      visualType: 'social-signals',
    },
  ];

  const growthSteps = [
    'DISCOVER',
    'OPTIMIZE',
    'PUBLISH',
    'REACH',
    'ENGAGE',
    'CONVERT',
    'GROW',
  ];

  const current = services[activeTab];

  return (
    <section
      id="growth"
      className="relative min-h-[100svh] py-28 md:py-40 px-6 md:px-12 bg-[#0C0E17] border-t border-[#0052FF]/15 overflow-hidden"
    >
      {/* Subtle Atmospheric Lighting (Clean, no purple/pink) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1677FF]/[0.035] rounded-full blur-[160px] pointer-events-none -z-10" />

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
              04 / DIGITAL GROWTH
            </span>
            <div className="h-[1px] w-12 bg-[#2D8CFF]/40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA]">
                BE <br />
                <span className="text-[#2D8CFF] drop-shadow-[0_0_30px_rgba(45,140,255,0.22)]">
                  DISCOVERED.
                </span>{' '}
                <br />
                BE RELEVANT. <br />
                GROW.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm md:text-base text-[#8A8F98] font-light leading-relaxed max-w-md">
                Helping businesses improve digital visibility, reach relevant audiences and build sustainable online momentum.
              </p>
            </div>
          </div>
        </div>

        {/* 13. DESKTOP INTERACTIVE SERVICE CAROUSEL / SELECTOR */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start mb-28">
          
          {/* Left Column: 50-55% content */}
          <div className="col-span-6 space-y-8">
            {/* Service Tab Switcher */}
            <div className="flex items-center gap-6 font-mono text-xs border-b border-white/10 pb-4">
              {services.map((svc, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 transition-all duration-300 focus:outline-none ${
                      isActive ? 'text-[#F5F7FA]' : 'text-[#8A8F98] hover:text-white'
                    }`}
                  >
                    <span className={isActive ? 'text-[#2D8CFF] font-bold' : ''}>
                      {svc.number}
                    </span>
                    <span className="uppercase tracking-wider text-[11px]">
                      {svc.id.replace('-', ' ')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Service Dossier */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 min-h-[460px] flex flex-col justify-between"
              >
                <div>
                  {current.transitionTag && (
                    <div className="font-mono text-xs tracking-[0.25em] text-[#2D8CFF] uppercase mb-2">
                      {current.transitionTag}
                    </div>
                  )}

                  {current.badge && (
                    <div className="font-mono text-xs tracking-[0.25em] text-[#2D8CFF] uppercase mb-2">
                      {current.badge}
                    </div>
                  )}

                  <h3 className="font-display font-extrabold text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA] whitespace-pre-line mb-4">
                    {current.title}
                  </h3>

                  <p className="text-base text-[#8A8F98] font-light leading-relaxed max-w-lg mb-8">
                    {current.subheading}
                  </p>

                  {/* Flowing Editorial Capability List */}
                  <div className="space-y-2 border-t border-white/[0.08] pt-4">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase block mb-3">
                      CAPABILITY WORKSTREAMS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.capabilities.map((cap) => (
                        <div
                          key={cap.code}
                          className="group flex items-center gap-2.5 p-2 bg-[#08080c] border border-white/[0.06] hover:border-[#1677FF] transition-colors"
                        >
                          <span className="font-mono text-[10px] text-[#2D8CFF]">
                            {cap.code}
                          </span>
                          <span className="font-mono text-xs text-[#F5F7FA] group-hover:text-white transition-colors">
                            {cap.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chapter Controls */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#8A8F98]">
                  <button
                    disabled={activeTab === 0}
                    onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                    className="hover:text-white disabled:opacity-20 transition-colors"
                  >
                    &larr; PREVIOUS SERVICE
                  </button>

                  <span>
                    SERVICE <span className="text-[#2D8CFF] font-bold">0{activeTab + 1}</span> / 04
                  </span>

                  <button
                    disabled={activeTab === services.length - 1}
                    onClick={() => setActiveTab((prev) => Math.min(services.length - 1, prev + 1))}
                    className="hover:text-white disabled:opacity-20 transition-colors"
                  >
                    NEXT SERVICE &rarr;
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 45-50% Atmospheric Visual Display */}
          <div className="col-span-6 relative aspect-[4/3] max-w-[540px] ml-auto w-full border border-white/[0.08] bg-[#07070a] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.visualType}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.45 }}
                className="w-full h-full flex flex-col justify-between my-auto"
              >
                {/* 3. VISUAL: SEO Search Environment */}
                {current.visualType === 'search-env' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8A8F98]">
                        <Search className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>ORGANIC INDEXING INFRASTRUCTURE</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#2D8CFF]">SEARCH VERIFIED</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 bg-black/60 border border-white/10">
                        <div className="flex justify-between text-[#8A8F98] text-[10px] mb-1">
                          <span>CORE WEB VITALS</span>
                          <span className="text-[#2D8CFF]">OPTIMAL</span>
                        </div>
                        <div className="text-white font-medium">LCP &lt; 1.2s &bull; CLS: 0.00 &bull; FID &lt; 50ms</div>
                      </div>

                      <div className="p-3 bg-black/60 border border-white/10">
                        <div className="flex justify-between text-[#8A8F98] text-[10px] mb-1">
                          <span>SEMANTIC KEYWORD TOPOLOGY</span>
                          <span className="text-white">INDEXED</span>
                        </div>
                        <div className="text-white font-medium">High-Intent Informational &amp; Commercial Clusters</div>
                      </div>

                      <div className="p-3 bg-black/60 border border-white/10">
                        <div className="flex justify-between text-[#8A8F98] text-[10px] mb-1">
                          <span>AUTHORITY FOUNDATION</span>
                          <span className="text-white">COMPOUNDING</span>
                        </div>
                        <div className="text-white font-medium">Earned High-Domain Referrals &amp; Brand Citations</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. VISUAL: Entity / Topical Visualization */}
                {current.visualType === 'entity-graph' && (
                  <div className="space-y-6 my-auto">
                    <div className="border-b border-white/10 pb-2 flex justify-between font-mono text-xs text-[#8A8F98]">
                      <span>ENTITY GRAPH ARCHITECTURE</span>
                      <span className="text-[#2D8CFF]">LLM SYNAPSE</span>
                    </div>

                    {/* Sequential Node Chain */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-center">
                      {['BUSINESS', 'ENTITY', 'TOPIC', 'CONTENT', 'SEARCH', 'DISCOVERY'].map(
                        (step, i, arr) => (
                          <React.Fragment key={step}>
                            <div className="flex flex-col items-center">
                              <span className="w-2 h-2 rounded-full bg-[#2D8CFF] mb-1.5 animate-pulse" />
                              <span className="text-white text-[9px] tracking-wider font-semibold">
                                {step}
                              </span>
                            </div>
                            {i < arr.length - 1 && (
                              <span className="text-[#2D8CFF]/50 text-xs">&rarr;</span>
                            )}
                          </React.Fragment>
                        )
                      )}
                    </div>

                    <div className="p-3 bg-black/70 border border-white/10 font-mono text-xs text-[#8A8F98] space-y-1">
                      <div className="text-white font-medium">Structured Content Graph:</div>
                      <div>Engineered for Perplexity, ChatGPT Search, and Google SGE citation.</div>
                    </div>
                  </div>
                )}

                {/* 7. VISUAL: Marketing Campaign Sequence */}
                {current.visualType === 'marketing-pipeline' && (
                  <div className="space-y-6 my-auto">
                    <div className="border-b border-white/10 pb-2 flex justify-between font-mono text-xs text-[#8A8F98]">
                      <span>CAMPAIGN ATTRIBUTION ENGINE</span>
                      <span className="text-[#2D8CFF]">FULL-FUNNEL</span>
                    </div>

                    <div className="p-4 bg-black/70 border border-white/10 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>AUDIENCE</span>
                        <span className="text-[#2D8CFF]">&rarr; High-Intent B2B Cohorts</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>MESSAGE</span>
                        <span className="text-[#2D8CFF]">&rarr; Value-Centric Authority</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>CHANNEL</span>
                        <span className="text-[#2D8CFF]">&rarr; Search, Social &amp; Niche Media</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300">
                        <span>CAMPAIGN</span>
                        <span className="text-[#2D8CFF]">&rarr; Precision Conversion Loops</span>
                      </div>
                      <div className="flex items-center justify-between text-neutral-300 font-bold text-white border-t border-white/10 pt-2">
                        <span>ACTION</span>
                        <span className="text-[#2D8CFF]">&rarr; Measurable Pipeline Growth</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. VISUAL: Social Media SEO Signals */}
                {current.visualType === 'social-signals' && (
                  <div className="space-y-5 my-auto">
                    <div className="border-b border-white/10 pb-2 flex justify-between font-mono text-xs text-[#8A8F98]">
                      <span>SOCIAL QUERY DISCOVERY</span>
                      <span className="text-[#2D8CFF]">CROSS-PLATFORM</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-black/70 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">PROFILE KEYWORD INGESTION</span>
                        <span className="text-white font-medium">OPTIMIZED</span>
                      </div>
                      <div className="p-3 bg-black/70 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">IN-SEARCH VIDEO METADATA</span>
                        <span className="text-[#2D8CFF] font-medium">INDEXED</span>
                      </div>
                      <div className="p-3 bg-black/70 border border-white/10 flex justify-between items-center">
                        <span className="text-neutral-400">HASHTAG RELEVANCY WEIGHT</span>
                        <span className="text-white font-medium">TARGETED</span>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-[#8A8F98]">
                      Turning social networks from casual feeds into active search intent discovery funnels.
                    </div>
                  </div>
                )}

                {/* Footnote */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#8A8F98]">
                  <span>GENFREX DIGITAL GROWTH</span>
                  <span className="text-[#2D8CFF]">{current.number} // 04</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 14. MOBILE LAYOUT (Sequential vertical editorial flow) */}
        <div className="md:hidden space-y-16 mb-24">
          {services.map((svc) => (
            <div key={svc.id} className="border-t border-white/10 pt-8 space-y-6">
              <span className="font-mono text-xs text-[#2D8CFF] font-bold tracking-widest block">
                SERVICE {svc.number} // 04
              </span>

              <h3 className="font-display font-extrabold text-3xl text-white tracking-tight whitespace-pre-line">
                {svc.title}
              </h3>

              <p className="text-sm text-[#8A8F98] font-light leading-relaxed">
                {svc.subheading}
              </p>

              <div className="space-y-2 pt-2">
                {svc.capabilities.map((cap) => (
                  <div
                    key={cap.code}
                    className="flex items-center gap-2 p-2 bg-[#09090d] border border-white/10 text-xs font-mono text-neutral-300"
                  >
                    <span className="text-[#2D8CFF] font-semibold">{cap.code}</span>
                    <span>{cap.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 9. DIGITAL GROWTH FLOW SUMMARY */}
        <div className="border-y border-white/[0.08] py-12 md:py-16 mb-24 md:mb-32">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase">
              // THE CONTINUOUS GROWTH CYCLE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 font-mono text-xs md:text-sm">
            {growthSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span
                  className={`px-3 py-1.5 border transition-all ${
                    idx === 0 || idx === growthSteps.length - 1
                      ? 'border-[#1677FF] bg-[#1677FF]/10 text-white font-bold'
                      : 'border-white/10 bg-black/40 text-neutral-300'
                  }`}
                >
                  {step}
                </span>
                {idx < growthSteps.length - 1 && (
                  <span className="text-[#2D8CFF] font-bold">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 15. SECTION CTA */}
        <div className="border border-white/10 bg-[#09090d] p-8 md:p-14 mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-4xl text-[#F5F7FA] tracking-tight mb-2">
              READY TO IMPROVE YOUR <br />
              DIGITAL VISIBILITY?
            </h3>
            <p className="font-mono text-xs text-[#8A8F98]">
              Let's audit your current discoverability footprint and map sustainable momentum.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-white text-black font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 transition-colors"
            >
              START A PROJECT &rarr;
            </Link>
            <a
              href="mailto:genfrexofficial@gmail.com"
              className="px-6 py-3.5 border border-white/20 hover:border-[#1677FF] text-[#F5F7FA] font-mono text-xs tracking-[0.2em] uppercase transition-colors"
            >
              TALK TO GENFREX &rarr;
            </a>
          </div>
        </div>

        {/* 16. SECTION TRANSITION TO SECTION 05 */}
        <div className="border-t border-white/[0.08] pt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase block mb-2">
              // ARCHITECTURAL CONTINUITY
            </p>
            <h4 className="font-display font-bold text-xl md:text-3xl text-neutral-300">
              DIGITAL GROWTH IS ONLY ONE PART OF THE ECOSYSTEM.
            </h4>
          </div>

          <a
            href="#technology"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#2D8CFF] hover:text-white uppercase transition-colors"
          >
            <span>NEXT — TECHNOLOGY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
