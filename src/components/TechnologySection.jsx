import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Database, Server, Globe, Shield, Activity, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnologySection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const techServices = [
    {
      id: 'websites',
      number: '01',
      title: 'WEBSITES',
      subheading: 'Modern websites designed around business objectives, users and digital growth.',
      capabilities: [
        'Business & Corporate Platforms',
        'High-Impact Portfolios',
        'High-Conversion Landing Pages',
        'Custom WordPress Architecture',
        'Scalable E-Commerce Flagships',
        'Bespoke Tailored Websites',
      ],
      flow: ['FRAME', 'STRUCTURE', 'CONTENT', 'INTERACTION', 'EXPERIENCE'],
      visualType: 'interface-assembly',
    },
    {
      id: 'web-apps',
      number: '02',
      title: 'WEB\nAPPLICATIONS',
      subheading: 'Customized web-based solutions built around specific operational and business requirements.',
      capabilities: [
        'Custom Feature Engineering',
        'Complex Business Functions',
        'High-Throughput API Integrations',
        'Autonomous Automation Workflows',
        'Scalable Database Solutions',
        'Third-Party Ecosystem Integrations',
      ],
      flow: ['USER', 'FRONTEND', 'API', 'BUSINESS LOGIC', 'DATABASE'],
      visualType: 'app-layers',
    },
    {
      id: 'custom-dev',
      number: '03',
      title: 'YOUR REQUIREMENT.\nOUR BUILD.',
      subheading: 'Technology solutions can be designed around the exact workflow, scope and requirements of each business.',
      capabilities: [
        'Authentication & Access Roles',
        'Structured Database Architectures',
        'RESTful & Microservice APIs',
        'Operational Management Dashboards',
        'Secure Payment Processing',
        'Automated Event Notifications',
        'Background Task Automation',
      ],
      flow: ['SPECIFICATION', 'MODULAR ARCHITECTURE', 'BATTLE-TESTED CODE', 'SCALE'],
      visualType: 'modular-architecture',
    },
    {
      id: 'maintenance',
      number: '04',
      title: 'KEEP IT\nRUNNING.',
      subheading: 'Digital products require continuous attention after launch.',
      capabilities: [
        'Rapid Bug Mitigation',
        'Proactive Security Patching',
        'Scheduled Content Updates',
        'Continuous Feature Enhancements',
        'Performance Optimization',
        '24/7 Technical Support Availability',
      ],
      flow: ['MONITOR', 'DETECT', 'FIX', 'IMPROVE'],
      visualType: 'maintenance-loop',
    },
    {
      id: 'deployment',
      number: '05',
      title: 'FROM BUILD\nTO LIVE.',
      subheading: 'Seamless transitions from development environments to reliable live deployments.',
      capabilities: [
        'Zero-Downtime Deployment Runs',
        'High-Availability Hosting Setup',
        'DNS & Domain Orchestration',
        'SSL & Security Hardening',
        'Continuous Cloud Maintenance',
        'Long-Term Strategic Support',
      ],
      flow: ['LOCAL DEV', 'STAGING QA', 'PRODUCTION LIVE'],
      visualType: 'deployment-pipeline',
    },
  ];

  const current = techServices[activeTechIndex];

  const techStack = [
    'REACT',
    'NODE.JS',
    'EXPRESS',
    'MONGODB',
    'PYTHON',
    'FASTAPI',
    'TAILWIND CSS',
    'JAVASCRIPT',
    'REST APIs',
    'CLOUD',
    'AI',
    'LLMs',
  ];

  const architectureLayers = [
    { label: 'USER', sub: 'End-Consumer Access' },
    { label: 'INTERFACE', sub: 'Responsive React Frontends' },
    { label: 'APPLICATION', sub: 'Business Logic & State' },
    { label: 'API', sub: 'RESTful Endpoints' },
    { label: 'DATABASE', sub: 'Postgres & MongoDB Stores' },
    { label: 'CLOUD', sub: 'Edge Serverless Delivery' },
  ];

  return (
    <section
      id="technology"
      className="relative min-h-[100svh] py-28 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Soft Blue Illumination */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-[#1677FF]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

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
              05 / TECHNOLOGY
            </span>
            <div className="h-[1px] w-12 bg-[#2D8CFF]/40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA]">
                WE BUILD <br />
                <span className="text-[#2D8CFF] drop-shadow-[0_0_30px_rgba(45,140,255,0.22)]">
                  WHAT'S
                </span>{' '}
                <br />
                NEXT.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm md:text-base text-[#8A8F98] font-light leading-relaxed max-w-md">
                Modern websites, applications and digital infrastructure designed around real business objectives.
              </p>
              <div className="border-l-2 border-[#1677FF] pl-4 mt-4 py-0.5">
                <span className="font-mono text-xs text-white">
                  "Technology should solve business problems, not simply exist for the sake of technology."
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 12. DESKTOP EDITORIAL SPLIT (50-55% Left, 45-50% Right) */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start mb-28">
          
          {/* Left Column: Technology Service Details */}
          <div className="col-span-6 space-y-8">
            {/* Horizontal Service Tabs */}
            <div className="flex items-center gap-6 font-mono text-xs border-b border-white/10 pb-4">
              {techServices.map((svc, idx) => {
                const isActive = activeTechIndex === idx;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveTechIndex(idx)}
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

            {/* Active Service Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.45 }}
                className="space-y-6 min-h-[460px] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs tracking-[0.25em] text-[#2D8CFF] uppercase block mb-2">
                    TECHNOLOGY CORE // {current.number}
                  </span>

                  <h3 className="font-display font-extrabold text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA] whitespace-pre-line mb-4">
                    {current.title}
                  </h3>

                  <p className="text-base text-[#8A8F98] font-light leading-relaxed max-w-lg mb-8">
                    {current.subheading}
                  </p>

                  {/* Capabilities List */}
                  <div className="border-t border-white/[0.08] pt-4">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase block mb-3">
                      TECHNICAL WORKSTREAMS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {current.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-2 bg-[#08080c] border border-white/[0.06] hover:border-[#1677FF] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-[#2D8CFF] shrink-0" />
                          <span className="font-mono text-xs text-[#F5F7FA]">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#8A8F98]">
                  <button
                    disabled={activeTechIndex === 0}
                    onClick={() => setActiveTechIndex((prev) => Math.max(0, prev - 1))}
                    className="hover:text-white disabled:opacity-20 transition-colors"
                  >
                    &larr; PREVIOUS MODULE
                  </button>

                  <span>
                    MODULE <span className="text-[#2D8CFF] font-bold">0{activeTechIndex + 1}</span> / 05
                  </span>

                  <button
                    disabled={activeTechIndex === techServices.length - 1}
                    onClick={() => setActiveTechIndex((prev) => Math.min(techServices.length - 1, prev + 1))}
                    className="hover:text-white disabled:opacity-20 transition-colors"
                  >
                    NEXT MODULE &rarr;
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Abstract Digital-Build Visual */}
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
                {/* 4. VISUAL: Website Interface Assembly */}
                {current.visualType === 'interface-assembly' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <div className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>ASSEMBLY PIPELINE</span>
                      </div>
                      <span className="text-[#2D8CFF]">RENDER READY</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      {current.flow.map((step, idx) => (
                        <div
                          key={step}
                          className="flex items-center justify-between p-2.5 bg-black/60 border border-white/10"
                        >
                          <span className="text-[#8A8F98]">STAGE 0{idx + 1}</span>
                          <span className="text-white font-medium">{step}</span>
                          <span className="text-[#2D8CFF]">&rarr;</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. VISUAL: Web App Modules */}
                {current.visualType === 'app-layers' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>DISTRIBUTED STACK TOPOLOGY</span>
                      </div>
                      <span className="text-[#2D8CFF]">ACTIVE RUNTIME</span>
                    </div>

                    <div className="flex flex-col gap-2 font-mono text-xs">
                      {current.flow.map((layer, i, arr) => (
                        <div
                          key={layer}
                          className="p-2.5 bg-black/70 border border-white/10 flex items-center justify-between"
                        >
                          <span className="text-neutral-400">LAYER 0{i + 1}</span>
                          <span className="text-white font-bold tracking-wider">{layer}</span>
                          <span className="text-[#2D8CFF] text-[10px]">[MOUNTED]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. VISUAL: Modular Architecture */}
                {current.visualType === 'modular-architecture' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <span>TECHNICAL ARCHITECTURE MATRIX</span>
                      <span className="text-[#2D8CFF]">BESPOKE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                      {['AUTH GATE', 'POSTGRES DB', 'REST API', 'ADMIN PANEL', 'STRIPE PAY', 'ASYNC QUEUES'].map(
                        (mod, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 bg-black/60 border border-white/10 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-[#2D8CFF]" />
                            <span className="text-white text-[11px]">{mod}</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="p-2.5 bg-black/80 border border-white/10 font-mono text-[10px] text-[#8A8F98] text-center">
                      Configured precisely around operational workflow constraints.
                    </div>
                  </div>
                )}

                {/* 7. VISUAL: Maintenance Loop */}
                {current.visualType === 'maintenance-loop' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>HEALTH TELEMETRY</span>
                      </div>
                      <span className="text-[#2D8CFF]">CONTINUOUS</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 font-mono text-center text-xs">
                      {current.flow.map((item, idx) => (
                        <div
                          key={item}
                          className="p-3 bg-black/60 border border-white/10 flex flex-col items-center justify-center gap-1"
                        >
                          <span className="text-[#2D8CFF] text-[10px]">0{idx + 1}</span>
                          <span className="text-white text-[10px] font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-black/70 border border-white/10 font-mono text-xs text-[#8A8F98] space-y-1">
                      <div className="text-white font-medium">Post-Launch Care Protocol:</div>
                      <div>Eliminating regressions, patching security gates, and tuning latency.</div>
                    </div>
                  </div>
                )}

                {/* 8. VISUAL: Deployment Pipeline */}
                {current.visualType === 'deployment-pipeline' && (
                  <div className="space-y-6 my-auto">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#8A8F98]">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-[#2D8CFF]" />
                        <span>DEPLOYMENT ORCHESTRATION</span>
                      </div>
                      <span className="text-[#2D8CFF]">PRODUCTION READY</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      {['LOCAL ENVIRONMENT', 'STAGING TESTING', 'GLOBAL EDGE PRODUCTION'].map(
                        (tier, idx) => (
                          <div
                            key={tier}
                            className={`p-3 border flex items-center justify-between ${
                              idx === 2
                                ? 'border-[#1677FF] bg-[#1677FF]/10 text-white font-bold'
                                : 'border-white/10 bg-black/50 text-[#8A8F98]'
                            }`}
                          >
                            <span>TIER 0{idx + 1}</span>
                            <span>{tier}</span>
                            <span className="text-[#2D8CFF]">&bull;</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Footer Tag */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#8A8F98]">
                  <span>GENFREX TECHNOLOGY</span>
                  <span className="text-[#2D8CFF]">{current.number} // 05</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 13. MOBILE VERTICAL LAYOUT */}
        <div className="md:hidden space-y-16 mb-24">
          {techServices.map((svc) => (
            <div key={svc.id} className="border-t border-white/10 pt-8 space-y-6">
              <span className="font-mono text-xs text-[#2D8CFF] font-bold tracking-widest block">
                MODULE {svc.number} // 05
              </span>

              <h3 className="font-display font-extrabold text-3xl text-white tracking-tight whitespace-pre-line">
                {svc.title}
              </h3>

              <p className="text-sm text-[#8A8F98] font-light leading-relaxed">
                {svc.subheading}
              </p>

              <div className="space-y-2 pt-2">
                {svc.capabilities.map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-center gap-2 p-2 bg-[#09090d] border border-white/10 text-xs font-mono text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#2D8CFF]" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 9. TECHNOLOGY STACK: Horizontal Moving Technical Word Field (No Logo Grid) */}
        <div className="border-y border-white/[0.08] py-12 md:py-16 mb-24 md:mb-32 overflow-hidden">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase">
              // BUILT WITH MODERN TECHNOLOGY
            </span>
          </div>

          <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-16 font-mono text-sm md:text-base font-semibold text-neutral-300">
            {[...techStack, ...techStack].map((tech, idx) => (
              <span key={idx} className="flex items-center gap-4 group cursor-default">
                <span className="text-[#2D8CFF]">&bull;</span>
                <span className="group-hover:text-white transition-colors">{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 10. ARCHITECTURE VISUAL (Full-Width Composition) */}
        <div className="border border-white/10 bg-[#08080c] p-8 md:p-14 mb-24">
          <div className="mb-10 text-center md:text-left">
            <span className="font-mono text-xs tracking-[0.25em] text-[#2D8CFF] uppercase block mb-2">
              SYSTEM ARCHITECTURE TOPOLOGY
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              End-To-End Infrastructure Pipeline
            </h3>
          </div>

          {/* Connected Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs mb-8">
            {architectureLayers.map((layer, idx) => (
              <div
                key={layer.label}
                className="p-4 bg-black/60 border border-white/10 flex flex-col justify-between min-h-[100px] relative group hover:border-[#1677FF] transition-colors"
              >
                <span className="text-[10px] text-[#2D8CFF]">0{idx + 1}</span>
                <div>
                  <div className="text-white font-bold text-sm">{layer.label}</div>
                  <div className="text-[9px] text-[#8A8F98] mt-1">{layer.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Auxiliary Connections */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#8A8F98]">
            <span>INTEGRATED CAPABILITIES:</span>
            <div className="flex flex-wrap gap-3">
              {['AUTH & ROLES', 'PAYMENT GATEWAYS', 'EVENT AUTOMATION', '3RD-PARTY APIS', 'ZERO TRUST TLS'].map(
                (sec) => (
                  <span
                    key={sec}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {sec}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* 15. SECTION CTA */}
        <div className="border border-white/10 bg-[#09090d] p-8 md:p-14 mb-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-4xl text-[#F5F7FA] tracking-tight mb-2">
              HAVE A DIGITAL <br />
              PRODUCT TO BUILD?
            </h3>
            <p className="font-mono text-xs text-[#8A8F98]">
              From web applications to bespoke infrastructure—let's discuss your technical scope.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-white text-black font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-neutral-200 transition-colors"
            >
              START A PROJECT &rarr;
            </Link>
          </div>
        </div>

        {/* 16. SECTION TRANSITION TO TALENT */}
        <div className="border-t border-white/[0.08] pt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase block mb-2">
              // ARCHITECTURAL CONTINUITY
            </p>
            <h4 className="font-display font-bold text-xl md:text-3xl text-neutral-300">
              TECHNOLOGY NEEDS THE RIGHT PEOPLE.
            </h4>
          </div>

          <a
            href="#talent"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#2D8CFF] hover:text-white uppercase transition-colors"
          >
            <span>NEXT — TALENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
