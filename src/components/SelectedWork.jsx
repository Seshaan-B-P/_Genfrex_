import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function SelectedWork() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Filter or map projects into verified categories
  const displayProjects = projects.map((p, idx) => ({
    ...p,
    number: `0${idx + 1}`,
    displayCategory: p.category.toUpperCase().includes('WEB')
      ? 'WEB'
      : p.category.toUpperCase().includes('TECH') || p.category.toUpperCase().includes('IOT')
      ? 'TECHNOLOGY'
      : p.category.toUpperCase().includes('BRAND')
      ? 'BRANDING'
      : p.category.toUpperCase().includes('HEALTH') || p.category.toUpperCase().includes('AI')
      ? 'DIGITAL EXPERIENCE'
      : 'WEB',
  }));

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -480 : 480;
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
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                03 — ARCHIVE &amp; SELECTED WORK
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              IDEAS INTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]">
                DIGITAL EXPERIENCES.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-end gap-6">
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed hidden lg:block">
              A curated archive of high-throughput web applications, brand platforms, and connected digital ecosystems.
            </p>

            {/* Desktop Navigation Controls */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                data-cursor="hover"
                className="w-11 h-11 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-white flex items-center justify-center transition-all duration-300 rounded-none"
                aria-label="Scroll Left"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                data-cursor="hover"
                className="w-11 h-11 border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-white flex items-center justify-center transition-all duration-300 rounded-none"
                aria-label="Scroll Right"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/work"
                data-cursor="explore"
                className="px-5 py-3 border border-white/15 hover:border-[#0052FF] hover:bg-white text-xs font-bold uppercase tracking-wider text-white hover:text-black transition-all duration-300 ml-2 rounded-none"
              >
                ALL WORK
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal Carousel Track / Mobile: Vertical Stack */}
      <div className="relative w-full">
        {/* Subtle Side Fades on Desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />

        {/* The Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-col md:flex-row gap-8 md:gap-10 md:overflow-x-auto scrollbar-none px-6 md:px-12 py-2 select-none"
        >
          {displayProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="w-full md:w-[500px] lg:w-[560px] shrink-0 group flex flex-col justify-between bg-[#0A0A0A] border border-white/10 hover:border-[#0052FF] transition-all duration-500 rounded-none overflow-hidden"
            >
              {/* Card Media Container */}
              <Link
                to={`/work/${project.slug}`}
                data-cursor="view"
                className="relative block aspect-[16/10] overflow-hidden bg-black"
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-85 group-hover:opacity-100"
                />

                {/* Subtle Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20 pointer-events-none" />

                {/* Top Left Number & Category Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white font-mono text-[10px] tracking-wider border border-white/15">
                    {project.number}
                  </span>
                  <span className="px-2.5 py-1 bg-[#0052FF] text-white font-mono text-[10px] tracking-wider font-bold">
                    {project.displayCategory}
                  </span>
                </div>
              </Link>

              {/* Card Meta Content */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block">
                      {project.client}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight group-hover:text-[#0052FF] transition-colors mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    data-cursor="view"
                    className="w-10 h-10 border border-white/15 group-hover:border-[#0052FF] group-hover:bg-[#0052FF] flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-300 shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed line-clamp-2">
                  {project.tagline || project.overview}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                  <span>DELIVERED &bull; {project.year}</span>
                  <span className="text-white/80 group-hover:text-[#0052FF] transition-colors">
                    EXPLORE CASE STUDY &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden px-6 mt-8">
        <Link
          to="/work"
          className="w-full py-4 text-center border border-white/20 text-white font-bold text-xs uppercase tracking-widest block"
        >
          VIEW ALL CASE STUDIES &rarr;
        </Link>
      </div>
    </section>
  );
}
