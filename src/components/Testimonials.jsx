import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Ecosystem perspectives / community conversations clearly documented
  const talks = [
    {
      id: 1,
      name: 'Pugazh',
      role: 'Actor & Collaborator',
      quote:
        'The energetic digital execution and visual craft GENFREX brings to modern audiences is truly impactful. A dynamic team that understands connection.',
      image:
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop',
      domain: 'MEDIA & COLLABORATION',
      hasVideo: true,
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Technology Lead, BPS Global',
      quote:
        'They didn’t just build a web platform; they established an agile digital workflow that connected our engineering requirements directly to skilled talent.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      domain: 'PLATFORM ENGINEERING',
      hasVideo: true,
    },
    {
      id: 3,
      name: 'Dr. Elena Rostova',
      role: 'Operations Director, EEGA Foundation',
      quote:
        'From high-load CRM portals to dependable developer talent, GENFREX delivers transparent outcomes and seamless collaboration.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      domain: 'ENTERPRISE CRM & TALENT',
      hasVideo: false,
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? talks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === talks.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeTalk = talks[activeIdx];

  return (
    <section
      id="talks"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0052FF]/[0.035] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-10 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                10 — TALKS
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              TALKS
            </h2>
            <p className="text-sm font-mono tracking-widest text-[#A0A0A0] uppercase mt-2">
              PEOPLE. EXPERIENCES. PERSPECTIVES.
            </p>
          </div>

          {/* Stepper Controls: ← 01 / 03 → */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              data-cursor="hover"
              aria-label="Previous Talk"
              className="w-11 h-11 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-white flex items-center justify-center transition-all duration-300 rounded-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-mono text-sm tracking-widest text-white px-2">
              0{activeIdx + 1} / 0{talks.length}
            </span>

            <button
              onClick={handleNext}
              data-cursor="hover"
              aria-label="Next Talk"
              className="w-11 h-11 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-white flex items-center justify-center transition-all duration-300 rounded-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative flex justify-center items-center py-6 min-h-[460px] perspective-[1200px]">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0A0A0A] border border-white/10 p-8 md:p-12 transition-all duration-500 hover:border-[#0052FF]">
            {/* Visual Column / Media */}
            <div className="md:col-span-5 relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#111111] group">
              <img
                src={activeTalk.image}
                alt={activeTalk.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {activeTalk.hasVideo && (
                <button
                  onClick={() => setLightboxOpen(true)}
                  data-cursor="play"
                  aria-label="Play Talk Video"
                  className="absolute inset-0 m-auto w-14 h-14 bg-black/70 hover:bg-[#0052FF] text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              )}

              <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 text-[10px] font-mono tracking-wider text-white border border-white/10">
                {activeTalk.domain}
              </div>
            </div>

            {/* Quote and Metadata Column */}
            <div className="md:col-span-7 space-y-6">
              <span className="text-4xl text-[#0052FF] font-serif leading-none block">
                &ldquo;
              </span>

              <p className="font-display font-medium text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                {activeTalk.quote}
              </p>

              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="font-display font-bold text-base text-white tracking-wide">
                  {activeTalk.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#0052FF] font-mono mt-0.5">
                  {activeTalk.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#0A0A0A] border border-white/20 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#0052FF] transition-colors p-2"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full bg-black flex items-center justify-center text-white">
                <div className="text-center p-6 space-y-3">
                  <Play className="w-12 h-12 text-[#0052FF] mx-auto animate-pulse" />
                  <p className="font-display font-bold text-lg text-white">
                    {activeTalk.name} &mdash; {activeTalk.domain}
                  </p>
                  <p className="text-xs text-[#A0A0A0] font-mono">
                    Video Stream &bull; GENFREX Talks Archive
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
