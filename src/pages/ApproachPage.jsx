import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Compass, 
  BrainCircuit, 
  Users, 
  Rocket, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Mail, 
  Phone,
  Target,
  Workflow as WorkflowIcon
} from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

// --- SIX OFFICIAL PROCESS STAGES (STRICTLY FROM GENFREX CATALOGUE) ---
const PROCESS_STAGES = [
  {
    num: "01",
    total: "06",
    id: "discover",
    name: "DISCOVER",
    headline: "Understand before we build.",
    desc: "We understand your business, objectives, audience, and requirements.",
    focusPoints: [
      "Core business goals & market context",
      "Target audience behavior & expectations",
      "Technical scope, constraints & timeline"
    ],
    img: "/Discover.png",
    visualLabel: "STAGE 01 — SCOPE & DISCOVERY"
  },
  {
    num: "02",
    total: "06",
    id: "strategize",
    name: "STRATEGIZE",
    headline: "Turn requirements into direction.",
    desc: "We create a solution based on your goals, budget, and requirements.",
    focusPoints: [
      "Solution roadmap aligned with business objectives",
      "Budget-conscious channel & technology architecture",
      "Defined milestone delivery sequence"
    ],
    pills: ["Goals", "Budget", "Requirements"],
    img: "/Strategize.png",
    visualLabel: "STAGE 02 — ARCHITECTURE & DIRECTION"
  },
  {
    num: "03",
    total: "06",
    id: "connect",
    name: "CONNECT",
    headline: "Bring the right capabilities together.",
    desc: "Where required, we connect the project with suitable digital talent.",
    concept: "GENFREX can connect businesses with suitable digital professionals when the project requires additional talent.",
    flowSequence: [
      { step: "01", label: "BUSINESS" },
      { step: "02", label: "DIGITAL REQUIREMENT" },
      { step: "03", label: "SUITABLE TALENT" }
    ],
    img: "/Connect.png",
    visualLabel: "STAGE 03 — CAPABILITY ALIGNMENT"
  },
  {
    num: "04",
    total: "06",
    id: "execute",
    name: "EXECUTE",
    headline: "Turn strategy into deliverables.",
    desc: "Our team works on the agreed deliverables and project requirements.",
    flowSequence: [
      { step: "01", label: "PLAN" },
      { step: "02", label: "BUILD" },
      { step: "03", label: "DELIVER" }
    ],
    focusPoints: [
      "Focused sprint production with quality oversight",
      "Milestone verification against agreed requirements",
      "Clean handover and production release"
    ],
    img: "/Execute.png",
    visualLabel: "STAGE 04 — DELIVERABLE EXECUTION"
  },
  {
    num: "05",
    total: "06",
    id: "optimize",
    name: "OPTIMIZE",
    headline: "Learn. Improve. Refine.",
    desc: "We analyze performance and identify opportunities for improvement.",
    focusPoints: [
      "Performance evaluation across live channels",
      "Identification of efficiency & conversion opportunities",
      "Iterative adjustments based on actual data"
    ],
    img: "/Optimize.png",
    visualLabel: "STAGE 05 — ITERATIVE REFINEMENT"
  },
  {
    num: "06",
    total: "06",
    id: "scale",
    name: "SCALE",
    headline: "Grow what works.",
    desc: "Successful solutions can be expanded as your business grows.",
    focusPoints: [
      "Expanding verified marketing channels and systems",
      "Strengthening digital infrastructure for higher volume",
      "Long-term capability and digital growth support"
    ],
    img: "/Scale.png",
    visualLabel: "STAGE 06 — COMPOUNDING GROWTH"
  }
];



// --- 7 OPERATIONAL QUALITY STANDARDS ---
const QUALITY_STANDARDS = [
  "CLEAR PROJECT REQUIREMENTS",
  "DEFINED DELIVERABLES",
  "PROFESSIONAL COMMUNICATION",
  "STRUCTURED WORKFLOWS",
  "QUALITY CHECKS & TIMELY EXECUTION",
  "PERFORMANCE MONITORING",
  "CONTINUOUS IMPROVEMENT"
];

export default function ApproachPage({ onOpenQuote }) {
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const handleOpenQuote = () => {
    if (typeof onOpenQuote === 'function') {
      onOpenQuote();
    } else {
      setInternalQuoteOpen(true);
    }
  };

  useEffect(() => {
    // SEO Page Metadata
    document.title = "GENFREX Approach | Our Digital Growth Process";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore the GENFREX approach to digital growth — from discovery and strategy to execution, optimization, and scaling.";

    // Smooth scroll if hash is in URL
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeStage = PROCESS_STAGES[activeStageIndex];

  return (
    <main className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen relative overflow-x-hidden selection:bg-[#0052FF] selection:text-white">

      {/* =============================================================
          01 ─ HERO SECTION
          ============================================================= */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Ambient Electric Blue Illumination */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] max-w-full h-[400px] bg-[#0052FF]/15 blur-[140px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0052FF]/10 blur-[130px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Hero Editorial Content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 sm:space-y-7"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase">
                <Sparkles size={13} className="text-[#0052FF]" />
                <span>OUR APPROACH</span>
              </div>

              {/* Main Headline (Single H1 for SEO) */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-[1.08]">
                  FROM REQUIREMENT <br />
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
                    TO GROWTH.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-extralight tracking-tight">
                  A structured process designed around your business.
                </p>
              </div>

              {/* Body Copy */}
              <p className="text-neutral-400 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                Every business has different objectives, audiences, requirements, budgets, and timelines. GENFREX follows a structured approach to understand the requirement, create the right solution, execute it effectively, and continuously identify opportunities for improvement.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('process-intro')}
                  className="px-6 sm:px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <span>EXPLORE OUR PROCESS</span>
                  <ArrowDown size={15} />
                </button>

                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="px-6 sm:px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight size={15} className="text-[#0052FF]" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: High-End Framed Visual Workflow Diagram */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl border border-[#0052FF]/25 bg-[#131725]/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl group hover:border-[#0052FF]/50 transition-all duration-500 shadow-[#0052FF]/10">
                {/* Subtle Ambient Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0052FF]/15 via-transparent to-transparent pointer-events-none rounded-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-[#0052FF]/20 bg-[#0C0E17]">
                  <img
                    src="/Approach-hero.png"
                    alt="GENFREX 6-Stage Process Workflow: Discover, Strategize, Connect, Execute, Optimize, Scale"
                    className="w-full h-auto object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E17]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/[0.06]">
                  <span className="flex items-center gap-2 text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
                    6-STAGE CONNECTED PROCESS
                  </span>
                  <span className="text-white/60">GENFREX 2026</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Central Process Flow Ribbon */}
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-neutral-400">
              <span className="text-white font-medium">METHODOLOGY:</span>
              <span className="text-white/90">DISCOVER</span>
              <span className="text-[#0052FF]">→</span>
              <span className="text-white/90">STRATEGIZE</span>
              <span className="text-[#0052FF]">→</span>
              <span className="text-white/90">CONNECT</span>
              <span className="text-[#0052FF]">→</span>
              <span className="text-white/90">EXECUTE</span>
              <span className="text-[#0052FF]">→</span>
              <span className="text-white/90">OPTIMIZE</span>
              <span className="text-[#0052FF]">→</span>
              <span className="text-white/90">SCALE</span>
            </div>
          </div>

        </div>
      </section>

      {/* =============================================================
          02 ─ PROCESS INTRODUCTION
          ============================================================= */}
      <section id="process-intro" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block">
                THE GENFREX PROCESS
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-tight">
                SIX STEPS. <br />
                <span className="font-semibold text-white">ONE CONNECTED JOURNEY.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed">
                From understanding the business to scaling successful solutions, GENFREX connects strategy, execution, optimization, and growth through a structured workflow.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =============================================================
          03 ─ MAIN INTERACTIVE PROCESS EXPERIENCE (DESKTOP & TABLET)
          ============================================================= */}
      <section id="process-stages" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-12">
          
          {/* Stage Scrub Bar (Desktop) */}
          <div className="hidden lg:grid grid-cols-6 gap-2 border-b border-white/[0.08] pb-6">
            {PROCESS_STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-4 rounded-2xl transition-all duration-300 border ${
                  activeStageIndex === idx
                    ? 'bg-[#12141C] border-[#0052FF]/60 text-white shadow-lg'
                    : 'bg-[#0A0B0E] border-transparent text-neutral-500 hover:text-neutral-300 hover:border-white/10'
                }`}
              >
                <span className={`text-xs font-mono font-bold block mb-1 ${activeStageIndex === idx ? 'text-[#0052FF]' : 'text-neutral-500'}`}>
                  {stage.num} / 06
                </span>
                <span className="text-base font-medium tracking-tight block">
                  {stage.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Visual Showcase (Interactive Viewport) */}
          <div className="hidden lg:block p-10 sm:p-14 rounded-3xl bg-[#131725] border border-white/10 relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/10 blur-[110px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Stage Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] border border-[#0052FF]/20">
                    STAGE {activeStage.num} OF {activeStage.total}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    {activeStage.visualLabel}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
                    {activeStage.name}
                  </h3>
                  <p className="text-xl text-[#0052FF] font-light">
                    {activeStage.headline}
                  </p>
                </div>

                <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
                  {activeStage.desc}
                </p>

                {/* Sub-elements for Step 02 STRATEGIZE */}
                {activeStage.pills && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {activeStage.pills.map((pill) => (
                      <span key={pill} className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/80">
                        ✦ {pill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Step 03 CONNECT flow sequence */}
                {activeStage.id === "connect" && (
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <p className="text-xs font-mono text-neutral-400 uppercase">
                      TALENT INTEGRATION FLOW
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">BUSINESS</span>
                      <span className="text-[#0052FF]">→</span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">DIGITAL REQUIREMENT</span>
                      <span className="text-[#0052FF]">→</span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#0052FF]">SUITABLE TALENT</span>
                    </div>
                  </div>
                )}

                {/* Step 04 EXECUTE visual sequence */}
                {activeStage.id === "execute" && (
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <p className="text-xs font-mono text-neutral-400 uppercase">
                      DELIVERY SEQUENCE
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-white">
                      <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">PLAN</span>
                      <span className="text-[#0052FF]">→</span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">BUILD</span>
                      <span className="text-[#0052FF]">→</span>
                      <span className="px-3 py-1.5 rounded-lg bg-[#0052FF]/15 border border-[#0052FF]/30 text-[#0052FF]">DELIVER</span>
                    </div>
                  </div>
                )}

                {/* Focus Points List */}
                {activeStage.focusPoints && (
                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Scope & Actions
                    </h4>
                    {activeStage.focusPoints.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-light text-neutral-300">
                        <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stage Step Progress Controls */}
                <div className="pt-6 flex items-center justify-between border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveStageIndex((prev) => (prev === 0 ? 5 : prev - 1))}
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>← </span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {PROCESS_STAGES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveStageIndex(dotIdx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeStageIndex === dotIdx ? 'bg-[#0052FF] w-6' : 'bg-white/20'
                        }`}
                        aria-label={`Jump to stage ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveStageIndex((prev) => (prev === 5 ? 0 : prev + 1))}
                    className="text-xs font-mono text-[#0052FF] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>→</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Genuine Operational Blueprint Asset */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-2xl border border-white/10 bg-[#131725] p-5 shadow-2xl max-w-md w-full overflow-hidden">
                  <img
                    src={activeStage.img}
                    alt={`GENFREX ${activeStage.name} Process`}
                    className="w-full h-auto object-contain rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>GENFREX PROCESS</span>
                    <span className="text-[#0052FF]">{activeStage.name}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* =============================================================
              12 ─ MOBILE BEHAVIOR: VERTICAL EDITORIAL TIMELINE
              ============================================================= */}
          <div className="lg:hidden space-y-8">
            {PROCESS_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#131725] border border-white/10 space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] border border-[#0052FF]/20">
                    {stage.num} / 06
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    {stage.name}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-white">
                    {stage.name}
                  </h3>
                  <p className="text-sm text-[#0052FF]">
                    {stage.headline}
                  </p>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {stage.desc}
                </p>

                {/* Sub-pills for Step 02 */}
                {stage.pills && (
                  <div className="flex flex-wrap gap-2">
                    {stage.pills.map((pill) => (
                      <span key={pill} className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white/80">
                        ✦ {pill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Sequence labels for Step 03 */}
                {stage.id === "connect" && (
                  <div className="pt-2 text-xs font-mono text-neutral-400 flex flex-wrap items-center gap-1.5">
                    <span className="text-white">BUSINESS</span>
                    <span>→</span>
                    <span className="text-white">DIGITAL REQUIREMENT</span>
                    <span>→</span>
                    <span className="text-[#0052FF]">SUITABLE TALENT</span>
                  </div>
                )}

                {/* Sequence labels for Step 04 */}
                {stage.id === "execute" && (
                  <div className="pt-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <span className="text-white">PLAN</span>
                    <span>→</span>
                    <span className="text-white">BUILD</span>
                    <span>→</span>
                    <span className="text-[#0052FF]">DELIVER</span>
                  </div>
                )}

                {/* Image */}
                <div className="rounded-xl border border-white/10 bg-[#131725] p-3 overflow-hidden">
                  <img
                    src={stage.img}
                    alt={`GENFREX ${stage.name}`}
                    className="w-full h-auto object-contain rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================================
          13 ─ CONNECTED ECOSYSTEM (TYPOGRAPHIC COMPOSITION)
          ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              THE CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-tight">
              DIGITAL REQUIREMENTS. <br />
              TECHNOLOGY + TALENT. <br />
              EXECUTION. <br />
              <span className="font-semibold text-[#0052FF]">DIGITAL GROWTH.</span>
            </h2>
          </div>

          {/* Large Typographic Connected Sequence */}
          <div className="p-8 sm:p-14 rounded-3xl bg-[#131725] border border-white/10 space-y-10">
            <p className="text-neutral-300 font-light text-base sm:text-xl max-w-3xl leading-relaxed">
              Instead of treating digital services and talent as completely separate requirements, GENFREX connects strategy, digital execution, and talent under one collaborative ecosystem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {[
                { step: "01", title: "BUSINESSES", desc: "Vision, Objectives & Context" },
                { step: "02", title: "DIGITAL REQUIREMENTS", desc: "Scope, Constraints & Goals" },
                { step: "03", title: "TECHNOLOGY + TALENT", desc: "Aligned Capabilities & Squads" },
                { step: "04", title: "EXECUTION", desc: "Disciplined Sprint Delivery" },
                { step: "05", title: "DIGITAL GROWTH", desc: "Sustainable Long-term Momentum" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#131725] border border-white/10 flex flex-col justify-between hover:border-[#0052FF]/60 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#0052FF]">
                      FLOW {item.step}
                    </span>
                    {idx < 4 && (
                      <span className="hidden lg:block text-white/20 text-xs font-mono">→</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =============================================================
          14 ─ FLEXIBLE ENGAGEMENT
          ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              FLEXIBLE ENGAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              The way we work can adapt <br />
              <span className="font-normal text-white">to the requirement.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              We do not force rigid structures. Engagements are tailored around scope clarity, project velocity, and ongoing business demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Model 1: Project-Based */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest block">
                  ENGAGEMENT TYPE 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  PROJECT-BASED
                </h3>
                <p className="text-neutral-300 font-light text-base leading-relaxed">
                  For specific projects and deliverables with a defined scope.
                </p>
                <div className="pt-4 border-t border-white/[0.08] space-y-2 text-sm text-neutral-400 font-light">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Fixed milestones & deliverable specifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Transparent sprint timelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Structured handover upon completion</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full py-3.5 rounded-full border border-white/20 hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs font-mono uppercase tracking-widest transition-all"
                >
                  DISCUSS PROJECT SCOPE
                </button>
              </div>
            </div>

            {/* Model 2: Monthly Engagement */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest block">
                  ENGAGEMENT TYPE 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  MONTHLY
                </h3>
                <p className="text-neutral-300 font-light text-base leading-relaxed">
                  For continuous digital growth, maintenance, and support.
                </p>
                <div className="pt-4 border-t border-white/[0.08] space-y-2 text-sm text-neutral-400 font-light">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Ongoing search engine and marketing optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Continuous website maintenance and monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Consistent communication and iterative improvements</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full py-3.5 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs font-mono uppercase tracking-widest transition-all"
                >
                  EXPLORE MONTHLY SUPPORT
                </button>
              </div>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center text-xs sm:text-sm text-neutral-400 font-light">
            Customized solutions can be designed according to objectives, scope, budget, timeline, and technology requirements.
          </div>

        </div>
      </section>



      {/* =============================================================
          16 ─ STRUCTURED EXECUTION & QUALITY STANDARDS
          ============================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Operational quality throughout <br />
              <span className="font-normal text-white">the engagement.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX focuses on operational quality throughout the engagement.
            </p>
          </div>

          {/* 7 Catalogue Quality Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUALITY_STANDARDS.map((std, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#131725] border border-white/10 flex items-center gap-3.5 hover:border-[#0052FF]/50 transition-all"
              >
                <Check size={16} className="text-[#0052FF] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white/90 uppercase tracking-wide">
                  {std}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================================
          17 ─ CONFIDENTIALITY (BUILT ON TRUST)
          ============================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Lock size={15} />
              <span>BUILT ON TRUST.</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
              Strict Commercial Confidentiality
            </h3>
            <p className="text-neutral-300 font-light text-base leading-relaxed">
              Client information, business data, project information, and credentials are handled with strict confidentiality requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================================
          18 ─ FINAL CTA SECTION
          ============================================================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden text-center">
        {/* Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[450px] bg-[#0052FF]/15 blur-[150px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase">
            <Sparkles size={13} />
            <span>READY TO MOVE FORWARD?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-tight">
            LET'S START WITH THE <br />
            <span className="font-semibold text-white">
              RIGHT REQUIREMENT.
            </span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Whether you need digital marketing, better search visibility, a website, AI optimization, digital talent, or a complete digital solution, GENFREX can help identify the right approach.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_12px_30px_-5px_rgba(0,82,255,0.45)] hover:scale-[1.02]"
            >
              <span>START YOUR DIGITAL GROWTH JOURNEY</span>
              <ArrowUpRight size={16} />
            </button>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:border-white/50 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              CONTACT GENFREX
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Quote Modal */}
      <QuoteModal
        isOpen={internalQuoteOpen}
        onClose={() => setInternalQuoteOpen(false)}
      />

    </main>
  );
}
