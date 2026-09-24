import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Sparkles, 
  Search, 
  TrendingUp, 
  Share2, 
  Cpu, 
  Users, 
  FileText, 
  ShieldCheck, 
  Lock, 
  Mail, 
  Phone, 
  Code2, 
  Workflow as WorkflowIcon,
  Bot,
  Video,
  Monitor,
  PenTool,
  Network,
  ChevronRight,
  Layers,
  CheckCircle2
} from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// --- HOW WE WORK 6-STAGE DATA (FROM CATALOGUE) ---
const WORKFLOW_STAGES = [
  {
    num: "01",
    name: "DISCOVER",
    headline: "Understand Core Objectives & Scope",
    desc: "Understand the business, objectives, audience, and requirements.",
    deliverables: [
      "Stakeholder alignment & strategic business goals",
      "Target audience profiling & market context",
      "Technical blueprint, scope specifications & timeline"
    ],
    img: "/Discover.png"
  },
  {
    num: "02",
    name: "STRATEGIZE",
    headline: "Architecture & Growth Roadmapping",
    desc: "Create a solution based on goals, budget, and requirements.",
    deliverables: [
      "Solution roadmap and cross-channel architecture",
      "Milestone breakdown & sprint allocations",
      "KPI benchmarks & delivery timeline models"
    ],
    img: "/Strategize.png"
  },
  {
    num: "03",
    name: "CONNECT",
    headline: "Talent Orchestration & Alignment",
    desc: "Where required, connect the project with suitable digital talent.",
    deliverables: [
      "Specialized role curation & squad assembly",
      "Tooling, repository & operational workflow integration",
      "Direct, transparent communication channels"
    ],
    img: "/Connect.png"
  },
  {
    num: "04",
    name: "EXECUTE",
    headline: "Disciplined Sprint Delivery",
    desc: "Work on the agreed deliverables and project requirements.",
    deliverables: [
      "High-precision engineering and creative production",
      "Structured milestone reviews and stakeholder checks",
      "Staged testing, deployment and launch validation"
    ],
    img: "/Execute.png"
  },
  {
    num: "05",
    name: "OPTIMIZE",
    headline: "Performance Review & Iteration",
    desc: "Analyze performance and identify opportunities for improvement.",
    deliverables: [
      "Real-world data and audience interaction audits",
      "Conversion rate, SEO and speed efficiency tuning",
      "Continuous technical and operational refinements"
    ],
    img: "/Optimize.png"
  },
  {
    num: "06",
    name: "SCALE",
    headline: "Compounding Growth Expansion",
    desc: "Expand successful solutions as the business grows.",
    deliverables: [
      "Multi-channel distribution & campaign amplification",
      "Infrastructure scaling for expanding audience volume",
      "Long-term ecosystem development and digital growth"
    ],
    img: "/Scale.png"
  }
];

// --- WHY GENFREX 6 EDITORIAL PRINCIPLES (FROM CATALOGUE) ---
const WHY_GENFREX_PRINCIPLES = [
  {
    num: "01",
    title: "One Digital Ecosystem",
    desc: "Digital services and talent solutions under one ecosystem.",
    detail: "Avoid fragmented agencies and detached contractors. GENFREX unifies growth strategy, engineering, and vetted creators within a cohesive operational model."
  },
  {
    num: "02",
    title: "Flexible Engagement",
    desc: "Project-based, monthly, or customized engagement models.",
    detail: "No rigid retainers or restrictive contracts. Engage GENFREX for focused deliverables, continuous digital growth partnerships, or tailor-made project squads."
  },
  {
    num: "03",
    title: "Talent + Technology",
    desc: "Connect digital talent with technology-driven business requirements.",
    detail: "Pair high-caliber specialized digital professionals with modern engineering tools and automated systems to solve complex business demands."
  },
  {
    num: "04",
    title: "AI-Ready",
    desc: "Consider the growing role of AI, LLMs, and AI-powered search.",
    detail: "Stay ahead of shifting consumer behaviors with AI-informed search optimization, intelligent workflow augmentation, and structured content architecture."
  },
  {
    num: "05",
    title: "Customized Solutions",
    desc: "Solutions designed according to individual business requirements.",
    detail: "We do not push one-size-fits-all packages. Every strategy is designed around your specific market, timeline, budget, and business objectives."
  },
  {
    num: "06",
    title: "Growth-Focused",
    desc: "Solutions designed to actively support digital growth.",
    detail: "Every asset, campaign, and software feature is engineered with purpose — built to improve visibility, elevate authority, and deliver lasting impact."
  }
];

export default function ServicesPage({ onOpenQuote }) {
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [activeDigitalGrowthTab, setActiveDigitalGrowthTab] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const handleOpenQuote = () => {
    if (typeof onOpenQuote === 'function') {
      onOpenQuote();
    } else {
      setInternalQuoteOpen(true);
    }
  };

  useEffect(() => {
    // SEO Page Metadata
    document.title = "GENFREX Services | Digital Growth, Technology & Talent";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "GENFREX provides digital growth, SEO, digital marketing, web development, talent solutions, content, creative services, and AI-enabled digital solutions.";

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

  return (
    <main className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen relative overflow-x-hidden selection:bg-[#0052FF] selection:text-white">

      {/* =============================================================
          01 ─ SERVICES HERO (CINEMATIC STYLED & ANIMATED)
          ============================================================= */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-white/[0.08]">
        {/* Animated Electric Ambient Backlights */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] max-w-full h-[450px] bg-gradient-to-r from-[#0052FF]/30 via-cyan-500/20 to-[#0052FF]/30 blur-[150px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.16, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-2/3 right-[-10%] w-[500px] h-[500px] bg-[#0052FF]/20 blur-[160px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Cinematic Editorial Hero Copy with Staggered Entrance */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              {/* Eyebrow Pill */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase backdrop-blur-md">
                <Sparkles size={13} className="text-[#0052FF] animate-pulse" />
                <span>SERVICES</span>
              </motion.div>

              {/* Main Headline (Single H1 for SEO) */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-[1.06]"
              >
                DIGITAL SOLUTIONS. <br />
                CONNECTED TALENT. <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
                  SUSTAINABLE GROWTH.
                </span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p 
                variants={fadeInUp}
                className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                GENFREX brings digital growth, technology, talent, content, and AI-enabled capabilities together to help businesses build visibility, strengthen their digital presence, and create sustainable growth.
              </motion.p>

              {/* Action Buttons with Micro-Interactions */}
              <motion.div variants={fadeInUp} className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => scrollToSection('services-intro')}
                  className="px-7 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.15)] group"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleOpenQuote}
                  className="px-7 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg group"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight size={15} className="text-[#0052FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Ecosystem Architecture Badges */}
              <motion.div variants={fadeInUp} className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-neutral-400">
                <span className="text-white font-medium">ECOSYSTEM:</span>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('digital-growth')}>DIGITAL GROWTH</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('web-technology')}>TECHNOLOGY</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('talent-solutions')}>TALENT</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('content-creative')}>CONTENT</span>
                <span className="text-white/20">•</span>
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection('ai-innovation')}>AI</span>
              </motion.div>
            </motion.div>

            {/* Right Column: High-End Framed Visual Asset with Hover Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl border border-[#0052FF]/20 bg-[#131725]/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl group hover:border-[#0052FF]/50 transition-all duration-500 shadow-[#0052FF]/10">
                {/* Subtle Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0052FF]/15 via-transparent to-transparent pointer-events-none rounded-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-[#0052FF]/20 bg-[#0C0E17]">
                  <img
                    src="/services-hero.png"
                    alt="GENFREX Connected Digital Ecosystem"
                    className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E17]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
                    DIGITAL GROWTH & TALENT ECOSYSTEM
                  </span>
                  <span className="text-white/60">GENFREX 2026</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =============================================================
          02 ─ SERVICES INTRODUCTION & PILLAR NAVIGATION
          ============================================================= */}
      <section id="services-intro" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-16"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
                Solutions built around <br />
                <span className="font-normal text-white">your business.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
                GENFREX provides digital solutions across growth, technology, talent, content, and AI. Each engagement can be structured around your objectives, requirements, budget, timeline, and business needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Pillar Jump Bar (Animated Editorial Navigation Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {[
              { id: "digital-growth", num: "01", name: "Digital Growth", desc: "SEO, AI Search, Marketing" },
              { id: "web-technology", num: "02", name: "Web & Tech", desc: "Websites, Apps, Architecture" },
              { id: "talent-solutions", num: "03", name: "Talent Solutions", desc: "Developers, Marketers, Squads" },
              { id: "content-creative", num: "04", name: "Content & Creative", desc: "Copy, Social, Visual Assets" },
              { id: "ai-innovation", num: "05", name: "AI & Innovation", desc: "LLMs, Workflows, Automation" }
            ].map((pillar, idx) => (
              <motion.button
                key={pillar.id}
                whileHover={{ y: -4, borderColor: "rgba(0, 82, 255, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(pillar.id)}
                className="p-5 rounded-2xl bg-[#0D0E13] border border-white/10 text-left transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-[#0052FF]/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 relative z-10">
                  <span className="group-hover:text-[#0052FF] font-semibold transition-colors">{pillar.num}</span>
                  <div className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center group-hover:bg-[#0052FF] transition-colors">
                    <ArrowDown size={12} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base font-medium text-white mb-1 group-hover:text-[#0052FF] transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    {pillar.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================================
          03 ─ 01 — DIGITAL GROWTH (INTERACTIVE TABS & ANIMATED REVEAL)
          ============================================================= */}
      <section id="digital-growth" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              01 — DIGITAL GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Build visibility. <br />
              <span className="font-normal text-white">Reach the right audience. Grow online.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX helps businesses improve their online visibility, optimize search presence, and engage target audiences effectively.
            </p>
          </motion.div>

          {/* Editorial Service Tabs / Stacked Sequence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Selector List with Large Typography */}
            <div className="lg:col-span-5 space-y-3">
              {[
                {
                  id: "seo",
                  num: "01",
                  title: "SEO",
                  subtitle: "Search Engine Optimization",
                  summary: "Technical audits, local discovery, and sustainable organic search rankings."
                },
                {
                  id: "ai-search",
                  num: "02",
                  title: "AI SEARCH OPTIMIZATION",
                  subtitle: "LLM & Generative Search Visibility",
                  summary: "Structured content and entity authority for AI-powered answer engines."
                },
                {
                  id: "digital-marketing",
                  num: "03",
                  title: "DIGITAL MARKETING",
                  subtitle: "Multi-channel Campaigns",
                  summary: "Audience research, conversion campaigns, and measurable growth tracking."
                },
                {
                  id: "social-media-seo",
                  num: "04",
                  title: "SOCIAL MEDIA SEO",
                  subtitle: "Profile & Social Search Visibility",
                  summary: "Profile keyword optimization, search content planning, and hashtag systems."
                }
              ].map((item, idx) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveDigitalGrowthTab(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden ${
                    activeDigitalGrowthTab === idx
                      ? 'bg-[#12141C] border-[#0052FF]/70 shadow-lg shadow-[#0052FF]/10'
                      : 'bg-[#0A0B0E] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {activeDigitalGrowthTab === idx && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#0052FF]"
                    />
                  )}
                  <span className={`text-xs font-mono font-bold pt-1 ${activeDigitalGrowthTab === idx ? 'text-[#0052FF]' : 'text-neutral-500'}`}>
                    {item.num}
                  </span>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-medium tracking-tight mb-1 ${activeDigitalGrowthTab === idx ? 'text-white' : 'text-white/80'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Detailed Capabilities Showcase with AnimatePresence */}
            <div className="lg:col-span-7 bg-[#131725] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0052FF]/10 blur-[100px] pointer-events-none rounded-full" />

              <AnimatePresence mode="wait">
                {activeDigitalGrowthTab === 0 && (
                  <motion.div 
                    key="tab-seo"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#0052FF] uppercase block mb-1">
                        ORGANIC SEARCH ENGINE SPECIALIZATION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        SEO (Search Engine Optimization)
                      </h3>
                      <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mt-2">
                        Structured optimization frameworks engineered to improve organic search visibility, technical crawlability, and local authority.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Core Services & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "On-Page & Technical SEO",
                          "Off-Page SEO & Link Building",
                          "Keyword Research & Local SEO",
                          "Competitor Analysis & Audits",
                          "Strategy & Monthly Management"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0052FF]/40 transition-colors">
                            <Check size={15} className="text-[#0052FF] flex-shrink-0" />
                            <span className="text-sm font-light text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400 font-light flex items-center justify-between">
                      <span>Sourced directly from the GENFREX Business Catalogue.</span>
                      <span className="text-white/60 font-mono">GENFREX SEO</span>
                    </div>
                  </motion.div>
                )}

                {activeDigitalGrowthTab === 1 && (
                  <motion.div 
                    key="tab-ai-search"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#0052FF] uppercase block mb-1">
                        NEXT-GEN ANSWER ENGINE VISIBILITY
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        AI Search Optimization
                      </h3>
                      <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mt-2">
                        Prepare your digital footprint for AI overviews and large language model answer engines that summarize information directly for users.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Core Services & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "AI Overview Optimization",
                          "LLM-focused Optimization",
                          "AI Search Visibility",
                          "Entity & Topical Optimization",
                          "Structured Content Strategies",
                          "AI-friendly Content Architecture"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0052FF]/40 transition-colors">
                            <Check size={15} className="text-[#0052FF] flex-shrink-0" />
                            <span className="text-sm font-light text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400 font-light flex items-center justify-between">
                      <span>Position your brand knowledge where modern search users find direct answers.</span>
                      <span className="text-[#0052FF] font-mono">LLM VISIBILITY</span>
                    </div>
                  </motion.div>
                )}

                {activeDigitalGrowthTab === 2 && (
                  <motion.div 
                    key="tab-digital-marketing"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#0052FF] uppercase block mb-1">
                        PERFORMANCE CAMPAIGNS & AUDIENCE REACH
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        Digital Marketing
                      </h3>
                      <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mt-2">
                        Multi-channel campaign planning, audience analysis, and conversion-focused tactics to turn market attention into qualified business opportunities.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Core Services & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Digital Marketing Strategy",
                          "Social Media & Search Marketing",
                          "Campaign Planning",
                          "Audience Research",
                          "Performance Tracking",
                          "Conversion-focused Strategies"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0052FF]/40 transition-colors">
                            <Check size={15} className="text-[#0052FF] flex-shrink-0" />
                            <span className="text-sm font-light text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400 font-light flex items-center justify-between">
                      <span>Disciplined campaign execution focused on measurable business outcomes.</span>
                      <span className="text-[#0052FF] font-mono">GROWTH MARKETING</span>
                    </div>
                  </motion.div>
                )}

                {activeDigitalGrowthTab === 3 && (
                  <motion.div 
                    key="tab-social-media-seo"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#0052FF] uppercase block mb-1">
                        IN-PLATFORM SEARCH & DISCOVERY
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        Social Media SEO
                      </h3>
                      <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mt-2">
                        More people now search directly on social platforms. We optimize your profiles, copy, and hashtags for native platform discovery algorithms.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Core Services & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Profile Optimization",
                          "Keyword & Content Optimization",
                          "Hashtag Strategy",
                          "Social Search Visibility",
                          "Content Planning"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0052FF]/40 transition-colors">
                            <Check size={15} className="text-[#0052FF] flex-shrink-0" />
                            <span className="text-sm font-light text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-neutral-400 font-light flex items-center justify-between">
                      <span>Ensure your brand is discovered when potential customers search directly on social apps.</span>
                      <span className="text-[#0052FF] font-mono">SOCIAL SEARCH</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* =============================================================
          04 ─ 02 — WEB & TECHNOLOGY (4 ARCHITECTURAL PILLARS)
          ============================================================= */}
      <section id="web-technology" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              02 — WEB & TECHNOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Digital infrastructure built <br />
              <span className="font-normal text-white">around business objectives.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX creates robust, scalable, and modern digital infrastructures aligned with business objectives.
            </p>
          </motion.div>

          {/* 4 Architectural Pillars Grid with Hover Elevate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Pillar 1: Website Design & Development */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-xl hover:shadow-[#0052FF]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    01 • FRONT-FACING PLATFORMS
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-[#0052FF]/10 transition-colors">
                    <Monitor size={18} className="text-white/60 group-hover:text-[#0052FF] transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-white transition-colors">
                  Website Design & Development
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  Modern, responsive, and conversion-optimized websites engineered to present your organization with clarity and authority.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Deliverables & Types
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Business & Corporate Websites",
                    "Portfolio Websites",
                    "Landing Pages",
                    "WordPress Websites",
                    "E-commerce Websites",
                    "Custom Websites"
                  ].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Web Applications */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-xl hover:shadow-[#0052FF]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    02 • CUSTOM SOFTWARE & LOGIC
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-[#0052FF]/10 transition-colors">
                    <Code2 size={18} className="text-white/60 group-hover:text-[#0052FF] transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-white transition-colors">
                  Web Applications
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  Functional web applications, automation layers, and custom digital software built for specific operational demands.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Capabilities & Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Custom Development & Features",
                    "Business Functions",
                    "API Integrations",
                    "Automation Workflows",
                    "Database Solutions",
                    "Third-party Integrations"
                  ].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: Website Maintenance */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-xl hover:shadow-[#0052FF]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    03 • CONTINUOUS RELIABILITY
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-[#0052FF]/10 transition-colors">
                    <WorkflowIcon size={18} className="text-white/60 group-hover:text-[#0052FF] transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-white transition-colors">
                  Website Maintenance
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  Proactive technical updates, security patching, and speed tuning to ensure persistent system stability and peak uptime.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Scope of Support
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bug Fixing",
                    "Security Updates",
                    "Content Updates",
                    "Feature Improvements",
                    "Performance Optimization",
                    "Technical Support"
                  ].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pillar 4: Deployment & Support */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-xl hover:shadow-[#0052FF]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    04 • INFRASTRUCTURE LAUNCH
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center group-hover:bg-[#0052FF]/10 transition-colors">
                    <Network size={18} className="text-white/60 group-hover:text-[#0052FF] transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-white transition-colors">
                  Deployment & Support
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  End-to-end cloud environment configuration, DNS management, and reliable deployment workflows with ongoing oversight.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Technical Operations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Website Deployment",
                    "Hosting Configuration",
                    "Domain Setup",
                    "Technical Maintenance",
                    "Ongoing Support"
                  ].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 group-hover:border-white/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =============================================================
          05 ─ 03 — TALENT SOLUTIONS
          ============================================================= */}
      <section id="talent-solutions" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              03 — TALENT SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Connect with the <br />
              <span className="font-normal text-white">right digital talent.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX connects businesses with digital professionals for short-term and project-based requirements.
            </p>
          </motion.div>

          {/* 3 Core Roles Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Developer Talent */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0052FF] mb-6">
                  <Code2 size={22} />
                </div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                  CATEGORY 01
                </span>
                <h3 className="text-xl font-medium text-white mb-4">
                  Developer Talent
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-300 font-light">
                  {["Web Developers", "WordPress Developers", "Front-end Developers", "Back-end Developers", "Full-stack Developers"].map((role, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#0052FF]">•</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Marketing Talent */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0052FF] mb-6">
                  <TrendingUp size={22} />
                </div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                  CATEGORY 02
                </span>
                <h3 className="text-xl font-medium text-white mb-4">
                  Marketing Talent
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-300 font-light">
                  {["SEO Specialists", "Digital Marketers", "Social Media Specialists", "Content Strategists"].map((role, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#0052FF]">•</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Creative Talent */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0052FF] mb-6">
                  <PenTool size={22} />
                </div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                  CATEGORY 03
                </span>
                <h3 className="text-xl font-medium text-white mb-4">
                  Creative Talent
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-300 font-light">
                  {["Graphic Designers", "Video Editors", "Content Creators", "Creative Professionals"].map((role, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#0052FF]">•</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Project-Based Teams Blueprint */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0E0F14] via-[#12141C] to-[#0E0F14] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest block">
                SPECIALIZED SQUAD MODEL
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Project-Based Teams
              </h3>
              <p className="text-neutral-300 font-light text-base leading-relaxed">
                Build a flexible team around your specific project requirements. Rather than hiring permanently or juggling independent contractors, assemble a synchronized cross-functional squad tailored to your deliverables.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">CATALOGUE EXAMPLE:</span>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-white shadow-inner">
                  <span>Developer</span>
                  <span className="text-[#0052FF] font-bold">+</span>
                  <span>Designer</span>
                  <span className="text-[#0052FF] font-bold">+</span>
                  <span>Marketer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =============================================================
          06 ─ 04 — CONTENT & CREATIVE
          ============================================================= */}
      <section id="content-creative" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              04 — CONTENT & CREATIVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Content that strengthens <br />
              <span className="font-normal text-white">digital communication.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              Clear, strategic content designed to engage audiences across platforms and support long-term organic authority.
            </p>
          </motion.div>

          {/* 3 Capabilities Grid with Animated Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* 1. SEO & Web Content */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    WRITTEN AUTHORITY
                  </span>
                  <FileText size={18} className="text-white/40" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  SEO & Web Content
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  Researched, search-intent focused written content designed to inform target audiences and rank across topic clusters.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                {[
                  "SEO Blogs & Long-form Articles",
                  "Website & Landing Page Content",
                  "Topic Clusters"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Social Media Content */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    AUDIENCE ENGAGEMENT
                  </span>
                  <Share2 size={18} className="text-white/40" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  Social Media Content
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  Consistent platform-native content calendars and copywriting aligned with your brand message and growth goals.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                {[
                  "Captions & Content Ideas",
                  "Social Media Strategy",
                  "Content Calendars",
                  "Platform-specific Content"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. Creative & Video */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest">
                    VISUAL MEDIA & ASSETS
                  </span>
                  <Video size={18} className="text-white/40" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  Creative & Video
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  High-engagement video production, digital brand assets, and marketing creatives crafted for digital audiences.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                {[
                  "Short-form Videos / Reels",
                  "Promotional & Business Videos",
                  "Social Media Creatives",
                  "Business Graphics & Digital Branding Assets"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =============================================================
          07 ─ 05 — AI & DIGITAL INNOVATION
          ============================================================= */}
      <section id="ai-innovation" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              05 — AI & DIGITAL INNOVATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Smarter workflows. <br />
              <span className="font-normal text-white">Better digital possibilities.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              Identifying practical opportunities to integrate AI, modern technologies, and automation into digital workflows.
            </p>
          </motion.div>

          {/* 6 Areas of Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Artificial Intelligence & LLMs",
                desc: "Exploring practical applications of large language models in research, ideation, and digital workflows."
              },
              {
                num: "02",
                title: "AI Search & Automation",
                desc: "Optimizing content structures for generative search and automating repetitive digital operational steps."
              },
              {
                num: "03",
                title: "Digital Analytics",
                desc: "Configuring measurable tracking systems to monitor audience behaviors and campaign efficiency."
              },
              {
                num: "04",
                title: "Modern Web & SEO Technologies",
                desc: "Fast, accessible web code and structured schema architecture built for modern search engines."
              },
              {
                num: "05",
                title: "Cloud-based Platforms",
                desc: "Scalable hosting, content management, and digital infrastructure suited to growing businesses."
              },
              {
                num: "06",
                title: "Digital Productivity Tools",
                desc: "Integrating modern software tools that improve project delivery speed and team communication."
              }
            ].map((area) => (
              <motion.div
                key={area.num}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-[#131725] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="text-xs font-mono text-[#0052FF] uppercase tracking-wider block mb-2">
                    FOCUS {area.num}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI-Powered Approach Editorial Statement */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0B0F] border border-[#0052FF]/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/10 blur-[100px] pointer-events-none" />
            
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 text-xs font-mono text-[#0052FF]">
                <Bot size={13} />
                <span>AI-POWERED APPROACH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Practical Intelligence with Human Oversight
              </h3>
              <p className="text-neutral-300 font-light text-base leading-relaxed">
                AI may be integrated into research, analysis, content workflows, development processes, and optimization while maintaining appropriate human oversight and quality control.
              </p>
              <p className="text-xs text-neutral-400 font-mono pt-2">
                We position AI as an enabling capability designed to improve speed and strategic depth — never as a replacement for human creative judgement and accountability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =============================================================
          08 ─ HOW WE WORK (CINEMATIC 6-STAGE TIMELINE WITH ANIMATION)
          ============================================================= */}
      <section id="approach" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
                From requirement to <br />
                <span className="font-normal text-white">sustainable growth.</span>
              </h2>
            </motion.div>
            <div className="text-xs font-mono text-neutral-400">
              STAGE {WORKFLOW_STAGES[activeStage].num} OF 06
            </div>
          </div>

          {/* Interactive Horizontal Stage Timeline (Desktop / Tablet) */}
          <div className="hidden lg:grid grid-cols-6 gap-2 border-b border-white/[0.08] pb-6">
            {WORKFLOW_STAGES.map((stg, idx) => (
              <button
                key={stg.num}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 rounded-2xl transition-all duration-300 border relative ${
                  activeStage === idx
                    ? 'bg-[#12141C] border-[#0052FF]/60 text-white shadow-lg'
                    : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]'
                }`}
              >
                {activeStage === idx && (
                  <motion.div 
                    layoutId="activeStageGlow"
                    className="absolute inset-0 bg-[#0052FF]/10 rounded-2xl pointer-events-none"
                  />
                )}
                <span className={`text-xs font-mono font-bold block mb-1 ${activeStage === idx ? 'text-[#0052FF]' : 'text-neutral-500'}`}>
                  {stg.num} / 06
                </span>
                <span className="text-sm font-medium tracking-tight block">
                  {stg.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Editorial Stage Display with Smooth Crossfade */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`stage-${activeStage}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0052FF]/10 text-[#0052FF] border border-[#0052FF]/20">
                      STAGE {WORKFLOW_STAGES[activeStage].num}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      {WORKFLOW_STAGES[activeStage].name}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                    {WORKFLOW_STAGES[activeStage].headline}
                  </h3>

                  <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
                    {WORKFLOW_STAGES[activeStage].desc}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Key Deliverables
                    </h4>
                    {WORKFLOW_STAGES[activeStage].deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-light text-neutral-300">
                        <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation controls */}
                  <div className="pt-6 flex items-center justify-between border-t border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => setActiveStage((prev) => (prev === 0 ? 5 : prev - 1))}
                      className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                    >
                      ← PREVIOUS STAGE
                    </button>
                    <div className="flex items-center gap-1.5">
                      {WORKFLOW_STAGES.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setActiveStage(dotIdx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeStage === dotIdx ? 'bg-[#0052FF] w-6' : 'bg-white/20'
                          }`}
                          aria-label={`Jump to stage ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveStage((prev) => (prev === 5 ? 0 : prev + 1))}
                      className="text-xs font-mono text-[#0052FF] hover:text-white transition-colors"
                    >
                      NEXT STAGE →
                    </button>
                  </div>
                </div>

                {/* Stage Asset Illustration */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative rounded-2xl border border-[#0052FF]/20 bg-[#131725] p-4 shadow-2xl shadow-[#0052FF]/10 overflow-hidden max-w-md w-full">
                    <img
                      src={WORKFLOW_STAGES[activeStage].img}
                      alt={`GENFREX Stage ${WORKFLOW_STAGES[activeStage].name}`}
                      className="w-full h-auto object-contain rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="mt-3 text-center text-xs font-mono text-neutral-500">
                      GENFREX OPERATIONAL BLUEPRINT
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =============================================================
          09 ─ WHY GENFREX (6 EDITORIAL PRINCIPLES)
          ============================================================= */}
      <section id="why-genfrex" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              WHY GENFREX
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              One ecosystem. <br />
              <span className="font-normal text-white">Multiple digital capabilities.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX connects strategy, engineering, and specialized talent to eliminate the friction of managing fragmented service providers.
            </p>
          </motion.div>

          {/* 6 Editorial Principles Grid with Hover Stagger */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_GENFREX_PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.num}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#0052FF] uppercase tracking-widest font-bold">
                      PRINCIPLE {principle.num}
                    </span>
                    <span className="text-white/20 group-hover:text-white/60 transition-colors font-mono text-xs">
                      GENFREX
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#0052FF] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-4">
                    {principle.desc}
                  </p>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {principle.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =============================================================
          10 ─ ENGAGEMENT MODELS
          ============================================================= */}
      <section id="engagement-models" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Choose the way <br />
              <span className="font-normal text-white">you want to work.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              We structure our engagements around your organizational stage, scope clarity, and operational momentum.
            </p>
          </motion.div>

          {/* Two Primary Models + Custom Discussion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Model 1: Project-Based */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-2xl hover:shadow-[#0052FF]/10 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#0052FF]">
                  <span>STRUCTURED DELIVERABLES</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  Project-Based
                </h3>
                <p className="text-neutral-300 font-light text-base leading-relaxed">
                  For specific projects and deliverables with a defined scope, fixed milestones, and clear completion criteria.
                </p>

                <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Best Suited For:
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Website design, development, and launches</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Digital marketing campaign setup & audits</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Dedicated short-term sprint deliverables</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full py-3.5 rounded-full border border-white/20 hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs font-mono uppercase tracking-widest transition-all"
                >
                  DISCUSS A PROJECT
                </button>
              </div>
            </motion.div>

            {/* Model 2: Monthly Engagement */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#131725] border border-white/10 hover:border-[#0052FF]/60 hover:shadow-2xl hover:shadow-[#0052FF]/10 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#0052FF]">
                  <span>CONTINUOUS PARTNERSHIP</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  Monthly Engagement
                </h3>
                <p className="text-neutral-300 font-light text-base leading-relaxed">
                  For continuous digital growth, ongoing SEO management, routine website maintenance, and continuous optimization support.
                </p>

                <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Best Suited For:
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Monthly SEO & search presence management</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Continuous website security & performance upkeep</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                    <Check size={14} className="text-[#0052FF]" />
                    <span>Ongoing social media & digital marketing distribution</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full py-3.5 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs font-mono uppercase tracking-widest transition-all shadow-lg"
                >
                  EXPLORE MONTHLY
                </button>
              </div>
            </motion.div>

          </div>

          {/* Customized Engagement Note */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center text-xs sm:text-sm text-neutral-400 font-light">
            Need a hybrid arrangement? <strong className="text-white font-medium">Customized engagement</strong> can be discussed based on your specific requirements, timeline, and internal team workflow.
          </div>

        </div>
      </section>

      {/* =============================================================
          11 ─ QUALITY & CONFIDENTIALITY
          ============================================================= */}
      <section id="quality-confidentiality" className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto space-y-16">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3">
              QUALITY & CONFIDENTIALITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight mb-4">
              Structured execution. <br />
              <span className="font-normal text-white">Strict professional standards.</span>
            </h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
              GENFREX focuses on structured execution and operational quality across every stage of collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Operational Quality Standards */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0052FF]">
                <ShieldCheck size={16} />
                <span>OPERATIONAL QUALITY PRINCIPLES</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white">
                How We Maintain High Standards
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Clear project requirements",
                  "Defined deliverables",
                  "Professional communication",
                  "Structured workflows",
                  "Quality checks & timely execution",
                  "Performance monitoring",
                  "Continuous improvement"
                ].map((std, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#0052FF]/30 transition-colors">
                    <Check size={14} className="text-[#0052FF] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-300 font-light">{std}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Strict Confidentiality Mandate */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/10 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Lock size={15} />
                <span>CONFIDENTIALITY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-white">
                Client Trust & Security
              </h3>
              <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed">
                Client information, business data, project information, and credentials should be handled with strict confidentiality requirements.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-neutral-400 font-light">
                We respect commercial privacy and intellectual property throughout the duration of every project and beyond.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =============================================================
          12 ─ FINAL CTA SECTION
          ============================================================= */}
      <section id="final-cta" className="py-24 sm:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden text-center">
        {/* Ambient Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] max-w-full h-[450px] bg-[#0052FF]/15 blur-[150px] pointer-events-none rounded-full" 
          aria-hidden="true" 
        />

        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase">
            <Sparkles size={13} className="text-[#0052FF] animate-pulse" />
            <span>HAVE A PROJECT IN MIND?</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-tight">
            LET'S BUILD YOUR NEXT <br />
            <span className="font-semibold text-white">
              DIGITAL GROWTH OPPORTUNITY.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Whether you need a website, better search visibility, digital marketing, AI optimization, a developer, a freelancer, or a complete digital team — GENFREX can help identify the right solution.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_12px_30px_-5px_rgba(0,82,255,0.45)]"
            >
              <span>START YOUR DIGITAL GROWTH JOURNEY</span>
              <ArrowUpRight size={16} />
            </motion.button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:border-white/50 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                CONTACT GENFREX
              </Link>
            </motion.div>
          </div>

          {/* Direct Verified Contact Details */}
          <div className="pt-12 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-neutral-400">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-colors">
              <span className="text-white/40 block mb-1">REPRESENTATIVE</span>
              <span className="text-white font-medium">P.S. Dharshan</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#0052FF]/40 transition-colors">
              <span className="text-white/40 block mb-1">DIRECT EMAIL</span>
              <a href="mailto:genfrexofficial@gmail.com" className="text-white hover:text-[#0052FF] transition-colors">
                genfrexofficial@gmail.com
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#0052FF]/40 transition-colors">
              <span className="text-white/40 block mb-1">DIRECT TELEPHONE</span>
              <a href="tel:+9047295361" className="text-white hover:text-[#0052FF] transition-colors">
                +91 90472 95361
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-colors">
              <span className="text-white/40 block mb-1">OFFICIAL PLATFORM</span>
              <span className="text-white">genfrex.vercel.app</span>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Quote Modal if not triggered via parent onOpenQuote */}
      <QuoteModal
        isOpen={internalQuoteOpen}
        onClose={() => setInternalQuoteOpen(false)}
      />

    </main>
  );
}
