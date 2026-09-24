import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ArrowLeft,
  Pause,
  Play
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

const STEP_DURATION = 5500; // 5.5 seconds per phase

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const current = workflowSteps[activeStep];

  const handleStepChange = useCallback((newIdx) => {
    setActiveStep(newIdx);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    handleStepChange(activeStep === 0 ? workflowSteps.length - 1 : activeStep - 1);
  }, [activeStep, handleStepChange]);

  const handleNext = useCallback(() => {
    handleStepChange(activeStep === workflowSteps.length - 1 ? 0 : activeStep + 1);
  }, [activeStep, handleStepChange]);

  // Smooth Auto-Play Progress Timer using requestAnimationFrame
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const tick = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHoveredRef.current) {
        setProgress((prev) => {
          const next = prev + (delta / STEP_DURATION) * 100;
          if (next >= 100) {
            setActiveStep((curr) => (curr === workflowSteps.length - 1 ? 0 : curr + 1));
            return 0;
          }
          return next;
        });
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const onMouseEnter = () => {
    setIsHovered(true);
    isHoveredRef.current = true;
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    isHoveredRef.current = false;
  };

  return (
    <section 
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-[#0C0E17]" 
      id="approach"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div id="workflow" className="absolute top-0 left-0 pointer-events-none" />
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
              title="Previous phase"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="carousel-btn"
              aria-label="Next step"
              data-cursor="hover"
              title="Next phase"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 2-Column Split Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Step List with Active Fill Bar */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {workflowSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const IconComponent = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => handleStepChange(idx)}
                  data-cursor="hover"
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-[#181E30] to-[#131725] border-[#0052FF]/80 shadow-lg shadow-[#0052FF]/20'
                      : 'bg-[#131725]/60 border-[#0052FF]/15 hover:border-[#0052FF]/50 hover:bg-[#181E30]'
                  }`}
                >
                  {/* Left Accent Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkflowBar"
                      className="absolute left-0 inset-y-3 w-1.5 rounded-r-full bg-[#0052FF] shadow-[0_0_14px_#0052FF]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Active Step Progress Timer Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0052FF] via-[#2B73FF] to-[#0052FF] shadow-[0_0_8px_#0052FF]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}

                  {/* Step Number & Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0052FF] text-white shadow-md shadow-[#0052FF]/40 scale-105'
                        : 'bg-white/[0.05] text-[#9A9A9A] group-hover:text-white group-hover:bg-white/[0.08] border border-white/10'
                    }`}
                  >
                    <IconComponent size={20} />
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[11px] font-mono tracking-wider uppercase font-semibold ${
                        isActive ? 'text-[#0052FF]' : 'text-neutral-500'
                      }`}>
                        PHASE {step.num}
                      </span>
                    </div>
                    <h3 className={`text-lg font-medium tracking-tight mb-1 transition-colors ${
                      isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9A9A9A] font-light line-clamp-1">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Right Arrow indicator on active */}
                  <div className={`mt-3 transition-transform duration-300 ${
                    isActive ? 'text-[#0052FF] translate-x-0 opacity-100' : 'text-neutral-600 -translate-x-1 opacity-0 group-hover:opacity-60'
                  }`}>
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Glassmorphic Active Showcase Card with Smooth Transitions */}
          <div className="lg:col-span-7">
            <div className="bg-[#131725]/90 border border-[#0052FF]/25 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-[#0052FF]/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  {/* Diagram Showcase Container - Crisp White Frame for 100% Uncropped Visibility */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full rounded-2xl overflow-hidden bg-white p-2.5 sm:p-4 border border-white/20 shadow-2xl flex items-center justify-center group/img"
                  >
                    <img
                      src={current.img}
                      alt={`${current.num} ${current.title}`}
                      className="w-full h-auto object-contain rounded-xl max-h-[350px] transition-transform duration-500 group-hover/img:scale-[1.015]"
                      loading="lazy"
                    />
                  </motion.div>

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

                    {/* Staggered Deliverables Bullet List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3">
                        Key Deliverables & Outcomes:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {current.deliverables.map((item, dIdx) => (
                          <motion.div
                            key={`${current.id}-${dIdx}`}
                            initial={{ opacity: 0, x: -10, y: 6 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ 
                              delay: 0.12 + dIdx * 0.08, 
                              duration: 0.35, 
                              ease: [0.22, 1, 0.36, 1] 
                            }}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#0052FF]/30 hover:bg-[#0052FF]/5 transition-all"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.18 + dIdx * 0.08, type: 'spring', stiffness: 400 }}
                            >
                              <CheckCircle2 size={16} className="text-[#0052FF] flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <span className="text-xs text-neutral-300 leading-snug">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Step Dots Progress Indicator at Bottom */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  {workflowSteps.map((_, idx) => {
                    const isStepActive = activeStep === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleStepChange(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 overflow-hidden ${
                          isStepActive
                            ? 'w-10 bg-white/20'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Jump to phase ${idx + 1}`}
                      >
                        {isStepActive && (
                          <div
                            className="h-full bg-[#0052FF] rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-[#0052FF] font-semibold">PHASE {current.num}</span>
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
