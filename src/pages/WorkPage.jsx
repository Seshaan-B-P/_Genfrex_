import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  TrendingUp,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Eye,
  Filter
} from 'lucide-react';
import { projects } from '../data/projects';
import QuoteModal from '../components/QuoteModal';

// --- ANIMATION SYSTEM ---
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Catalogue-aligned Project Categories
const FILTER_CATEGORIES = [
  'ALL WORK',
  'DIGITAL GROWTH',
  'WEB & TECHNOLOGY',
  'CONTENT & CREATIVE',
  'DIGITAL SOLUTIONS'
];

export default function WorkPage({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('ALL WORK');
  const [internalQuoteOpen, setInternalQuoteOpen] = useState(false);
  const [selectedQuickView, setSelectedQuickView] = useState(null);

  const handleOpenQuote = () => {
    if (typeof onOpenQuote === 'function') {
      onOpenQuote();
    } else {
      setInternalQuoteOpen(true);
    }
  };

  useEffect(() => {
    // SEO Metadata
    document.title = "GENFREX Work | Digital Projects & Creative Portfolio";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore GENFREX projects across digital growth, web development, content, creative, and technology-enabled digital solutions.";

    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter actual projects by catalogue category
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL WORK') return true;
    return p.category === activeFilter;
  });

  // Calculate count for each category
  const getCategoryCount = (category) => {
    if (category === 'ALL WORK') return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  return (
    <main className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen relative overflow-x-hidden selection:bg-[#0052FF] selection:text-white">

      {/* =============================================================
          01 ─ HERO SECTION (Clean, Typographic & Filter Tabs)
          ============================================================= */}
      <section className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[400px] bg-gradient-to-r from-[#0052FF]/20 via-[#00D4FF]/15 to-[#0052FF]/20 blur-[140px] pointer-events-none rounded-full"
        />

        <div className="max-w-[1320px] mx-auto relative z-10 text-center space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase backdrop-blur-md">
            <Sparkles size={13} className="text-[#0052FF]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
            SELECTED WORK. <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
              PROVEN DIGITAL IMPACT.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Explore verified projects across digital marketing, custom web applications, content creation, and technology solutions developed for ambitious organizations.
          </p>

          {/* Category Filter Tabs Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              const count = getCategoryCount(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#0052FF] text-white shadow-lg shadow-[#0052FF]/30 scale-[1.02]'
                      : 'bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-neutral-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =============================================================
          02 ─ CLEAN 3-COLUMN PORTFOLIO GRID
          ============================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-[1320px] mx-auto">

          {/* Grid Container */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl border border-white/[0.08] bg-[#10131F]/90 hover:border-[#0052FF]/50 hover:bg-[#131725] transition-all duration-500 backdrop-blur-xl overflow-hidden group shadow-xl flex flex-col justify-between"
                >
                  {/* Visual Image Preview with Zoom Effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0C0E17]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10131F] via-[#10131F]/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[#0C0E17]/80 border border-white/10 text-[10px] font-mono tracking-wider text-[#0052FF] uppercase backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#0C0E17]/80 border border-white/10 text-[10px] font-mono text-neutral-400 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Floating Action Circle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-xl shadow-[#0052FF]/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      {/* Client */}
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                        {project.client}
                      </span>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#0052FF] transition-colors flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-[#0052FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>

                      {/* Tagline / Brief */}
                      <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mt-2 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Deliverables / Capabilities Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-white/[0.02] text-[10px] font-mono text-neutral-500">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                      <Link
                        to={`/work/${project.slug}`}
                        className="text-xs font-mono text-[#0052FF] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight size={13} />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedQuickView(project);
                        }}
                        className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye size={13} />
                        <span>QUICK VIEW</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* =============================================================
          03 ─ QUICK VIEW DOSSIER MODAL
          ============================================================= */}
      <AnimatePresence>
        {selectedQuickView && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div
              className="fixed inset-0"
              onClick={() => setSelectedQuickView(null)}
              aria-label="Close modal background"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#131725] border border-[#0052FF]/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedQuickView(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[#0052FF] font-mono text-xs uppercase tracking-wider block mb-1">
                    {selectedQuickView.category} • {selectedQuickView.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {selectedQuickView.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                    Client: {selectedQuickView.client}
                  </p>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={selectedQuickView.heroImage}
                    alt={selectedQuickView.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-medium">
                    OVERVIEW & OBJECTIVE
                  </span>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {selectedQuickView.overview}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-medium">
                    KEY DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedQuickView.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={13} className="text-[#0052FF] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    to={`/work/${selectedQuickView.slug}`}
                    className="px-6 py-2.5 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs font-mono tracking-wider uppercase font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>READ FULL CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <button
                    onClick={() => setSelectedQuickView(null)}
                    className="text-xs font-mono text-neutral-400 hover:text-white"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =============================================================
          04 ─ CLOSING CTA BANNER (Start a Project)
          ============================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-white/[0.08] relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#10131F]/90 to-[#0C0E17] p-10 sm:p-16 md:p-20 text-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase">
                <Sparkles size={13} className="text-[#0052FF]" />
                <span>LET'S COLLABORATE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white uppercase leading-tight">
                HAVE A PROJECT YOU <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
                  WANT TO BUILD?
                </span>
              </h2>

              <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
                Let's discuss how GENFREX can deliver the right digital solution, technology, and talent for your brand.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-medium tracking-wide transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  <span>START A PROJECT ↗</span>
                </button>

                <a
                  href="https://wa.me/919047295361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-lg"
                >
                  <span>TALK ON WHATSAPP ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={internalQuoteOpen}
        onClose={() => setInternalQuoteOpen(false)}
      />

    </main>
  );
}
