import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Users, Code, TrendingUp, Palette, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TalentSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('dev');
  const [activeTeamPreset, setActiveTeamPreset] = useState('full-product');
  const [activeEngagement, setActiveEngagement] = useState('project');

  const talentNodes = [
    { id: 'dev', label: 'DEVELOPER', icon: Code, role: 'Full-Stack & Systems' },
    { id: 'marketer', label: 'MARKETER', icon: TrendingUp, role: 'Growth & Strategy' },
    { id: 'designer', label: 'DESIGNER', icon: Palette, role: 'Product UI/UX' },
    { id: 'content', label: 'CONTENT', icon: Layers, role: 'Editorial & Copy' },
    { id: 'seo', label: 'SEO', icon: Cpu, role: 'Organic Authority' },
    { id: 'video', label: 'VIDEO', icon: Palette, role: 'Motion & Visual' },
  ];

  const talentCategories = [
    {
      id: 'dev',
      number: '01',
      title: 'DEVELOPERS',
      subtitle: 'Build and maintain digital products across frontend, backend and full-stack requirements.',
      disciplines: [
        'Web Developers',
        'Front-End Developers',
        'Back-End Developers',
        'Full-Stack Developers',
        'WordPress Developers',
      ],
      details: 'Senior engineers focused on modular React/Vite interfaces, Node.js/Python microservices, scalable database schemas, and zero-defect deployments.',
    },
    {
      id: 'marketing',
      number: '02',
      title: 'MARKETING',
      subtitle: 'Digital marketing capabilities for visibility, audience engagement and content strategy.',
      disciplines: [
        'SEO Specialists',
        'Digital Marketers',
        'Social Media Specialists',
        'Content Strategists',
      ],
      details: 'Growth professionals executing data-driven performance campaigns, organic discovery, algorithmic social positioning, and conversion architecture.',
    },
    {
      id: 'creative',
      number: '03',
      title: 'CREATIVE',
      subtitle: 'Creative professionals who strengthen visual communication and digital content.',
      disciplines: [
        'Graphic Designers',
        'Video Editors',
        'Content Creators',
        'Creative Professionals',
      ],
      details: 'Art directors and visual storytellers creating high-impact brand identities, typography guidelines, cinematic video edits, and interactive prototypes.',
    },
  ];

  const teamPresets = {
    'full-product': {
      title: 'Full-Cycle Product Flagship',
      squad: ['DEVELOPER', 'DESIGNER', 'MARKETER', 'CONTENT'],
      outcome: 'End-to-end strategy, responsive web architecture, and initial audience acquisition.',
    },
    'growth-sprint': {
      title: 'Growth & Search Sprint',
      squad: ['DEVELOPER', 'SEO SPECIALIST'],
      outcome: 'Targeted technical performance audit, Core Web Vitals optimization, and keyword authority.',
    },
    'brand-launch': {
      title: 'Brand & Creative Identity',
      squad: ['DESIGNER', 'CONTENT CREATOR', 'VIDEO EDITOR'],
      outcome: 'Comprehensive design system, multi-channel editorial assets, and motion launch reel.',
    },
  };

  const engagementModels = [
    {
      id: 'project',
      title: 'PROJECT-BASED',
      tagline: 'Defined Scope & Milestones',
      description: 'Ideal for bounded digital products, platform builds, website overhauls, and specific capability deliverables.',
    },
    {
      id: 'monthly',
      title: 'MONTHLY',
      tagline: 'Continuous Digital Velocity',
      description: 'Dedicated capability retainers for ongoing software enhancements, continuous SEO, and iterative marketing sprints.',
    },
    {
      id: 'custom',
      title: 'CUSTOM',
      tagline: 'Specialized Hybrid Architecture',
      description: 'Bespoke talent integration tailored to exact operational constraints, hybrid squads, or accelerated delivery roadmaps.',
    },
  ];

  const matchingFlow = [
    'BUSINESS NEED',
    'REQUIREMENT',
    'CAPABILITY',
    'TALENT',
    'PROJECT TEAM',
    'EXECUTION',
  ];

  return (
    <section
      id="talent"
      className="relative min-h-[100svh] py-28 md:py-40 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#1677FF]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

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
              06 / TALENT
            </span>
            <div className="h-[1px] w-12 bg-[#2D8CFF]/40" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-[clamp(2.8rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-[#F5F7FA]">
                THE RIGHT <br />
                <span className="text-[#2D8CFF] drop-shadow-[0_0_30px_rgba(45,140,255,0.22)]">
                  PEOPLE
                </span>{' '}
                <br />
                CHANGE THE OUTCOME.
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm md:text-base text-[#8A8F98] font-light leading-relaxed max-w-md">
                GENFREX connects businesses with digital professionals and project-based talent for evolving digital requirements.
              </p>
              <div className="border-l-2 border-[#1677FF] pl-4 mt-4 py-0.5 font-mono text-xs text-white">
                "THE RIGHT PROJECT NEEDS THE RIGHT PEOPLE."
              </div>
            </div>
          </div>
        </div>

        {/* 3 & 12. DESKTOP ASYMMETRIC TALENT NETWORK (Split Overview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28 md:mb-36">
          {/* Left: Statement & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-[#2D8CFF] uppercase tracking-[0.25em] block">
              // TALENT CONDUIT MATRIX
            </span>

            <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-snug">
              Autonomous digital professionals calibrated for immediate execution.
            </h3>

            <p className="text-sm md:text-base text-[#8A8F98] font-light leading-relaxed">
              We eliminate traditional hiring friction. Instead of wading through unverified resume boards, GENFREX connects you with proven specialists across engineering, growth, and visual storytelling.
            </p>

            {/* Core Capability Badges */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
              {['SHORT-TERM REQUIREMENTS', 'PROJECT-BASED WORK', 'FLEXIBLE ENGAGEMENTS', 'SPECIALIZED SQUADS'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/[0.02] border border-white/10 font-mono text-[10px] text-neutral-300 tracking-wider"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Living Network Visualization */}
          <div className="lg:col-span-6 border border-white/[0.08] bg-[#07070a] p-8 md:p-10 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono text-xs text-[#8A8F98]">
              <span>ECOSYSTEM CONDUIT</span>
              <span className="text-[#2D8CFF]">[ACTIVE NODES]</span>
            </div>

            {/* Dynamic Pipeline Flow */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-3 bg-black/60 border border-white/10 flex items-center justify-between">
                <span className="text-neutral-400">BUSINESS</span>
                <span className="text-[#2D8CFF]">&rarr; DIGITAL REQUIREMENT</span>
              </div>

              <div className="p-3 bg-[#1677FF]/15 border border-[#1677FF] flex items-center justify-between text-white font-bold">
                <span>GENFREX NEXUS</span>
                <span className="text-[#2D8CFF]">&rarr; SPECIALIST MATCH</span>
              </div>

              {/* Connected Capability Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {talentNodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="p-2.5 bg-black/50 border border-white/10 hover:border-[#1677FF] transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2D8CFF] shrink-0" />
                      <div>
                        <div className="text-white text-[10px] font-bold">{node.label}</div>
                        <div className="text-[8px] text-[#8A8F98]">{node.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-black/60 border border-white/10 flex items-center justify-between">
                <span className="text-neutral-400">PROJECT TEAM</span>
                <span className="text-white font-bold">&rarr; SEAMLESS EXECUTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4, 5, 6. TALENT CATEGORIES (Full-Width Chapters) */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-24 mb-28 md:mb-36">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8F98] uppercase block mb-2">
              // SPECIALIZED ROLES
            </span>
            <h3 className="font-display font-extrabold text-3xl md:text-5xl text-[#F5F7FA] tracking-tight">
              TALENT DISCIPLINES
            </h3>
          </div>

          <div className="space-y-12">
            {talentCategories.map((cat) => (
              <div
                key={cat.id}
                className="border border-white/10 bg-[#08080c] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:border-[#1677FF]/60 transition-colors"
              >
                {/* Left: Number & Title (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="font-mono text-xs text-[#2D8CFF] font-bold tracking-widest block">
                    CATEGORY {cat.number} // 03
                  </span>
                  <h4 className="font-display font-bold text-3xl md:text-4xl text-white group-hover:text-[#2D8CFF] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#8A8F98] font-light leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Right: Disciplines & Detail (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {cat.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.disciplines.map((disc, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1.5 bg-[#050505] border border-white/15 font-mono text-xs text-white"
                      >
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. PROJECT-BASED TEAMS (Strong Highlight Section) */}
        <div className="border border-white/10 bg-[#08080d] p-8 md:p-14 mb-28 md:mb-36">
          <div className="border-b border-white/10 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-[#2D8CFF] uppercase block mb-2">
                // COMPOSABLE SQUADS
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
                ONE PROJECT. <br />
                <span className="text-[#2D8CFF]">MULTIPLE CAPABILITIES.</span>
              </h3>
            </div>

            {/* Squad Preset Tabs */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(teamPresets).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTeamPreset(key)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors border ${
                    activeTeamPreset === key
                      ? 'bg-[#1677FF] border-[#1677FF] text-white'
                      : 'border-white/15 text-[#8A8F98] hover:text-white'
                  }`}
                >
                  {key.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Active Preset Display */}
          <div className="space-y-6">
            <div className="font-display font-bold text-xl md:text-2xl text-white">
              {teamPresets[activeTeamPreset].title}
            </div>

            {/* Animated Squad Flow */}
            <div className="p-6 bg-black/60 border border-white/10 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs md:text-sm">
                <span className="px-3 py-1.5 bg-white/10 text-white font-bold border border-white/20">
                  PROJECT
                </span>
                <span className="text-[#2D8CFF] font-bold">&rarr;</span>
                <span className="px-3 py-1.5 bg-[#1677FF]/20 text-[#2D8CFF] font-bold border border-[#1677FF]/40">
                  GENFREX
                </span>
                <span className="text-[#2D8CFF] font-bold">&rarr;</span>

                {teamPresets[activeTeamPreset].squad.map((member, mIdx) => (
                  <React.Fragment key={member}>
                    <span className="px-3 py-1.5 bg-black border border-white/20 text-white">
                      {member}
                    </span>
                    {mIdx < teamPresets[activeTeamPreset].squad.length - 1 && (
                      <span className="text-[#2D8CFF]">+</span>
                    )}
                  </React.Fragment>
                ))}

                <span className="text-[#2D8CFF] font-bold">&rarr;</span>
                <span className="px-3 py-1.5 bg-white text-black font-bold">
                  DELIVERY
                </span>
              </div>

              <p className="text-xs md:text-sm text-[#8A8F98] font-light leading-relaxed pt-2">
                {teamPresets[activeTeamPreset].outcome}
              </p>
            </div>
          </div>
        </div>

        {/* 8. FLEXIBLE ENGAGEMENT (Three Large Typographic Rows, NOT generic cards) */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-20 mb-28 md:mb-36">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8A8F98] uppercase block mb-2">
              // ENGAGEMENT ARCHITECTURE
            </span>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-[#F5F7FA] tracking-tight">
              FLEXIBLE ENGAGEMENT STRUCTURES
            </h3>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {engagementModels.map((eng) => {
              const isActive = activeEngagement === eng.id;
              return (
                <div
                  key={eng.id}
                  onClick={() => setActiveEngagement(eng.id)}
                  className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className={`w-2 h-2 rounded-none transition-colors ${isActive ? 'bg-[#2D8CFF]' : 'bg-white/20'}`} />
                    <div>
                      <h4 className="font-display font-extrabold text-2xl md:text-4xl text-white group-hover:text-[#2D8CFF] transition-colors">
                        {eng.title}
                      </h4>
                      <span className="font-mono text-xs text-[#2D8CFF] tracking-wider mt-1 block">
                        {eng.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="md:max-w-md text-xs md:text-sm text-[#8A8F98] font-light leading-relaxed">
                    {eng.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 9. TALENT MATCHING FLOW */}
        <div className="border-y border-white/[0.08] py-12 md:py-16 mb-24 md:mb-32">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase">
              // THE TALENT CONNECTION PIPELINE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 font-mono text-xs md:text-sm">
            {matchingFlow.map((step, idx) => (
              <React.Fragment key={step}>
                <span
                  className={`px-3 py-1.5 border transition-all ${
                    idx === 0 || idx === matchingFlow.length - 1
                      ? 'border-[#1677FF] bg-[#1677FF]/10 text-white font-bold'
                      : 'border-white/10 bg-black/40 text-neutral-300'
                  }`}
                >
                  {step}
                </span>
                {idx < matchingFlow.length - 1 && (
                  <span className="text-[#2D8CFF] font-bold">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 16. FINAL STATEMENT & TRANSITION TO SECTION 07 */}
        <div className="border-t border-white/[0.08] pt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#8A8F98] uppercase block mb-3">
              // CORE PHILOSOPHY
            </span>
            <h4 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#F5F7FA] tracking-tight leading-tight">
              TALENT ALONE <br />
              ISN'T THE SOLUTION. <br />
              <span className="text-[#2D8CFF]">THE RIGHT CONNECTION IS.</span>
            </h4>
          </div>

          <a
            href="#creative"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#2D8CFF] hover:text-white uppercase transition-colors self-start md:self-auto"
          >
            <span>NEXT — CONTENT &amp; CREATIVE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
