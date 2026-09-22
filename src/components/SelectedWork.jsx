import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function SelectedWork() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate projects array to make an endless seamless horizontal loop
  const displayProjects = [...projects, ...projects];

  // Automatic smooth horizontal scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const speed = 1.0; // 1px per animation frame

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // When halfway through (first set of duplicated items), loop back
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -440 : 440;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="work"
      className="py-28 md:py-36 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 md:mb-16">
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-10">
          <div>
            <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase block mb-3 font-medium">
              06 — ARCHIVE &amp; SELECTED WORK
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-end gap-6">
            <p className="text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed hidden lg:block">
              A curated archive of enterprise software, interactive flagships, and mission-critical digital systems.
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleScroll('left')}
                data-cursor="hover"
                className="w-10 h-10 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Scroll Projects Left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                data-cursor="hover"
                className="w-10 h-10 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Scroll Projects Right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Horizontal Auto-Scroll Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Cinematic Gradient Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-none px-6 md:px-12 py-4 select-none cursor-grab active:cursor-grabbing"
        >
          {displayProjects.map((project, index) => {
            const originalIndex = index % projects.length;

            return (
              <div
                key={`${project.id}-${index}`}
                className="w-[300px] sm:w-[360px] md:w-[400px] lg:w-[440px] shrink-0 bg-[#08080C] border border-white/10 hover:border-[#0052FF] transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,82,255,0.22)] flex flex-col justify-between group"
              >
                <Link
                  to={`/work/${project.slug}`}
                  data-cursor="view"
                  className="block focus:outline-none h-full flex flex-col justify-between"
                >
                  {/* Medium Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0f] border-b border-white/[0.08]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Subtle Gradient for Bottom Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Index Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[10px] text-white tracking-widest uppercase font-medium">
                      <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_rgba(0,82,255,0.9)]" />
                      <span>CASE 0{originalIndex + 1}</span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 text-[10px] tracking-widest text-[#A0A0A0] bg-black/80 px-2.5 py-1 border border-white/10 font-medium">
                      {project.year}
                    </div>

                    {/* Hover Prompt */}
                    <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-1.5 bg-[#0052FF] text-white px-3.5 py-1.5 text-xs tracking-wider font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <span>VIEW CASE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Medium Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <p className="text-[11px] tracking-[0.2em] text-[#0052FF] uppercase font-semibold">
                        {project.category}
                      </p>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-[#0052FF] transition-colors tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#A0A0A0] font-light leading-relaxed line-clamp-2">
                        {project.overview || project.summary}
                      </p>
                    </div>

                    {/* Card Footer Bar */}
                    <div className="border-t border-white/[0.08] pt-4 mt-2 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#666666] tracking-wider uppercase font-medium truncate max-w-[200px]">
                        {project.client}
                      </span>
                      <div className="inline-flex items-center gap-1 text-white group-hover:text-[#0052FF] transition-colors font-medium">
                        <span className="text-[11px] tracking-wider uppercase">EXPLORE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
