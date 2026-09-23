import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  BrainCircuit,
  Users,
  Rocket,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const workflowSteps = [
  {
    num: '01',
    id: 'discover',
    title: 'Discover',
    tagline: 'Understanding Core Objectives & Scope',
    desc: 'We immerse ourselves in your business ecosystem, target audience psychology, and technical requirements to establish an unshakeable project foundation.',
    icon: Compass,
    img: '/Discover.png',
    deliverables: [
      'Stakeholder Alignment & Goal Definition',
      'Target Audience & Competitive Mapping',
      'Technical Scope & Requirement Blueprint'
    ]
  },
  {
    num: '02',
    id: 'strategize',
    title: 'Strategize',
    tagline: 'Precision Architecture & Roadmapping',
    desc: 'We engineer a tailored roadmap balancing design aesthetics, budget, development velocity, and long-term digital growth objectives.',
    icon: BrainCircuit,
    img: '/Strategize.png',
    deliverables: [
      'Comprehensive Solution Architecture',
      'Milestone Timeline & Sprint Allocations',
      'KPI Benchmarks & Conversion Models'
    ]
  },
  {
    num: '03',
    id: 'connect',
    title: 'Connect',
    tagline: 'Specialized Talent Orchestration',
    desc: 'Where required, we assemble dedicated cross-functional talent—developers, designers, and creators—perfectly aligned with your industry demands.',
    icon: Users,
    img: '/Connect.png',
    deliverables: [
      'Curated Creative & Tech Specialist Teams',
      'Collaborative Workflow & Tool Integration',
      'Seamless Communication Channels'
    ]
  },
  {
    num: '04',
    id: 'execute',
    title: 'Execute',
    tagline: 'Agile Precision & Craftsmanship',
    desc: 'Our multidisciplinary teams build, iterate, and deliver milestone deliverables with meticulous quality control and rigorous testing standards.',
    icon: Rocket,
    img: '/Execute.png',
    deliverables: [
      'Agile Sprint Execution & Weekly Reviews',
      'Production-Grade Code & Visual Polishing',
      'Multi-device Responsive & Functional QA'
    ]
  },
  {
    num: '05',
    id: 'optimize',
    title: 'Optimize',
    tagline: 'Performance Refinement & Feedback',
    desc: 'We analyze deployment analytics, user behavior, and telemetry data to fine-tune conversion funnels and eliminate friction points.',
    icon: BarChart3,
    img: '/Optimize.png',
    deliverables: [
      'Telemetry & Real-Time Funnel Analytics',
      'Speed, SEO & Conversion Rate Tuning',
      'Audience Feedback & Iteration Cycles'
    ]
  },
  {
    num: '06',
    id: 'scale',
    title: 'Scale',
    tagline: 'Compounding Expansion & Reach',
    desc: 'Proven digital solutions are multiplied across regions, platforms, and audiences for compounding business impact and market leadership.',
    icon: TrendingUp,
    img: '/Scale.png',
    deliverables: [
      'High-Concurrency Infrastructure Scaling',
      'Multi-Channel Brand Asset Expansion',
      'Sustainable Long-Term Growth Governance'
    ]
  }
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const current = workflowSteps[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? workflowSteps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === workflowSteps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-[#070709]" id="workflow">
      {/* Subtle Electric Blue Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0052FF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#0052FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="eyebrow !mb-0">Client Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
              From first conversation to <span className="font-normal text-white">measurable growth.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#9A9A9A] tracking-wider mr-2 hidden sm:inline">
              PHASE {current.num} OF 06
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="carousel-btn"
              aria-label="Previous step"
              data-cursor="hover"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="carousel-btn"
              aria-label="Next step"
              data-cursor="hover"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 2-Column Split Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Step List with Active Indicator */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {workflowSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const IconComponent = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  data-cursor="hover"
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${isActive
                      ? 'bg-gradient-to-r from-[#14141A] to-[#0E0E12] border-[#0052FF]/70 shadow-lg shadow-[#0052FF]/10'
                      : 'bg-[#0B0B0E]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#121216]/50'
                    }`}
                >
                  {/* Active Indicator Left Accent Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkflowBar"
                      className="absolute left-0 inset-y-3 w-1 rounded-r-full bg-[#0052FF] shadow-[0_0_12px_#0052FF]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Step Number & Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive
                        ? 'bg-[#0052FF] text-white shadow-md shadow-[#0052FF]/40'
                        : 'bg-white/[0.05] text-[#9A9A9A] group-hover:text-white group-hover:bg-white/[0.08] border border-white/10'
                      }`}
                  >
                    <IconComponent size={20} />
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[11px] font-mono tracking-wider uppercase font-semibold ${isActive ? 'text-[#0052FF]' : 'text-neutral-500'
                        }`}>
                        PHASE {step.num}
                      </span>
                    </div>
                    <h3 className={`text-lg font-medium tracking-tight mb-1 transition-colors ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9A9A9A] font-light line-clamp-1">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Right Arrow indicator on active */}
                  <div className={`mt-3 transition-transform duration-300 ${isActive ? 'text-[#0052FF] translate-x-0 opacity-100' : 'text-neutral-600 -translate-x-1 opacity-0 group-hover:opacity-60'
                    }`}>
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Glassmorphic Active Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#111116]/80 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Diagram Showcase Container - Crisp White Frame for 100% Uncropped Visibility */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-white p-2.5 sm:p-4 border border-white/20 shadow-2xl flex items-center justify-center">
                    <img
                      src={current.img}
                      alt={`${current.num} ${current.title}`}
                      className="w-full h-auto object-contain rounded-xl max-h-[350px] transition-transform duration-500 hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Details */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                      <div>
                        <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest block mb-1">
                          EXECUTION BLUEPRINT
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/10">
                        {current.tagline}
                      </span>
                    </div>

                    <p className="text-[#A5A5A5] text-sm sm:text-base font-light leading-relaxed">
                      {current.desc}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                        Key Deliverables & Outcomes:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {current.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                          >
                            <CheckCircle2 size={16} className="text-[#0052FF] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-neutral-300 leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step dots indicator at bottom */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  {workflowSteps.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === idx
                          ? 'w-8 bg-[#0052FF]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                      aria-label={`Jump to phase ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span>STEP {current.num}</span>
                  <span>/</span>
                  <span>06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
