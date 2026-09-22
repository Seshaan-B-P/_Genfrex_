import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const talks = [
    {
      id: 1,
      name: 'Pugazh',
      role: 'Actor & Comedian',
      quote:
        'The cinematic energy and visual storytelling GENFREX brought to our productions was beyond expectation. Truly world-class execution.',
      imageTop:
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Founder & CEO, BPS Global',
      quote:
        'They didn’t just deliver a platform. They transformed how our global enterprise operates at scale with zero cognitive debt.',
      imageTop:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Aravind Swaminathan',
      role: 'Creative Director & Producer',
      quote:
        'Exceptional production values, lightning-fast turnaround, and relentless attention to human emotion and timing.',
      imageTop:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Dr. Elena Rostova',
      role: 'Executive Director, EEGA Foundation',
      quote:
        'Architectural precision and aesthetic discipline that is virtually impossible to find in traditional agency templates.',
      imageTop:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Julian Thorne',
      role: 'Head of Systems, Nexus Innovations',
      quote:
        'Sub-second API velocity and a design language that immediately commanded lasting respect across global partners.',
      imageTop:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Dr. Aris Thorne',
      role: 'Clinical Operations Lead, SmileCare',
      quote:
        'Their attention to typographic nuance and ergonomics transformed our daily healthcare workflow into an effortless tool.',
      imageTop:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Karthik Raja',
      role: 'Film Producer & Media Strategist',
      quote:
        'Delivered high-octane commercial campaigns with cutting-edge visual craft, speed, and massive audience resonance.',
      imageTop:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      imageBottom:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? talks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === talks.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentTalk = talks[activeIdx];

  return (
    <section
      id="talks"
      className="py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0052FF]/[0.045] rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Top Header Matching Reference Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-3">
          <span className="text-xs sm:text-sm tracking-[0.25em] text-[#0052FF] uppercase font-bold block">
            — TALKS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-white tracking-tight">
            Hear it straight from the Hearts
          </h2>
        </div>

        {/* 3D Coverflow Stage Container */}
        <div className="relative w-full max-w-5xl h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/20 text-white flex items-center justify-center transition-all duration-300 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/20 text-white flex items-center justify-center transition-all duration-300 shadow-xl"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Render All Cards in Coverflow Perspective */}
          <div className="relative w-full h-full flex items-center justify-center">
            {talks.map((talk, idx) => {
              // Calculate circular or clamped offset
              let offset = idx - activeIdx;
              const total = talks.length;

              // Wrap-around offset for infinite feel
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Calculate transformation styles
              let translateX = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;

              if (offset === 0) {
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
              } else if (offset === -1) {
                translateX = -62; // percentage
                scale = 0.82;
                opacity = 0.65;
                zIndex = 20;
              } else if (offset === 1) {
                translateX = 62;
                scale = 0.82;
                opacity = 0.65;
                zIndex = 20;
              } else if (offset === -2) {
                translateX = -115;
                scale = 0.68;
                opacity = 0.28;
                zIndex = 10;
              } else if (offset === 2) {
                translateX = 115;
                scale = 0.68;
                opacity = 0.28;
                zIndex = 10;
              }

              return (
                <motion.div
                  key={talk.id}
                  onClick={() => setActiveIdx(idx)}
                  animate={{
                    x: `${translateX}%`,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute w-[220px] sm:w-[270px] md:w-[310px] h-[340px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden bg-[#08080C] border transition-all duration-300 cursor-pointer shadow-2xl ${isCenter
                      ? 'border-white/20 shadow-[0_0_40px_rgba(0,82,255,0.28)]'
                      : 'border-white/10 hover:opacity-80'
                    }`}
                >
                  {/* Two Stills Layout matching reference */}
                  <div className="w-full h-full flex flex-col relative">
                    {/* Top Still */}
                    <div className="w-full h-1/2 overflow-hidden relative border-b border-black/40">
                      <img
                        src={talk.imageTop}
                        alt={`${talk.name} Top Still`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                    </div>

                    {/* Bottom Still */}
                    <div className="w-full h-1/2 overflow-hidden relative">
                      <img
                        src={talk.imageBottom}
                        alt={`${talk.name} Bottom Still`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
                    </div>

                    {/* Center Play Button on Active Card */}
                    {isCenter && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.button
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,82,255,0.7)] pointer-events-auto transition-transform"
                          aria-label={`Play testimonial from ${talk.name}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying(true);
                          }}
                        >
                          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Person Label Below Carousel */}
        <div className="text-center mt-6 space-y-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTalk.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                {currentTalk.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] font-light">
                {currentTalk.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots Matching Reference Screenshot */}
        <div className="flex items-center gap-1.5 mt-6">
          {talks.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIdx(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 ${activeIdx === dotIdx
                  ? 'w-6 h-1.5 rounded-full bg-[#0052FF] shadow-[0_0_8px_rgba(0,82,255,0.8)]'
                  : 'w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
