import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';

export default function WorkPage() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'ENTERPRISE', 'WEB & SOFTWARE', 'IOT & AGRI', 'HEALTHTECH', 'CIVICTECH'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'ENTERPRISE' && p.category.includes('Enterprise')) return true;
    if (filter === 'WEB & SOFTWARE' && p.category.includes('Web & Software')) return true;
    if (filter === 'IOT & AGRI' && p.category.includes('Agriculture')) return true;
    if (filter === 'HEALTHTECH' && p.category.includes('HealthTech')) return true;
    if (filter === 'CIVICTECH' && p.category.includes('Civic')) return true;
    return false;
  });

  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-[#0C0E17] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="border-b border-white/[0.08] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-medium">
              01 — FLAGSHIP DIRECTORY
            </span>
            <div className="h-[1px] w-12 bg-[#0052FF]" />
          </div>

          <h1 className="font-display font-extrabold text-hero text-white tracking-tight leading-none mb-6">
            SELECTED WORK.
          </h1>

          <p className="text-neutral-400 font-light text-base md:text-xl max-w-2xl leading-relaxed">
            Case studies representing digital strategy, complex software architecture, and bespoke UI systems delivered across mission-critical domains.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-10 border-b border-white/[0.08] mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor="hover"
                className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-brand-blue border-brand-blue text-white'
                    : 'bg-transparent border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-neutral-500">
            SHOWING {filteredProjects.length} OF {projects.length} CASE STUDIES
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="group flex flex-col justify-between">
              <Link to={`/work/${project.slug}`} data-cursor="view" className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#131725] border border-[#0052FF]/20 group-hover:border-[#0052FF] transition-all duration-500 mb-6 shadow-lg shadow-[#0052FF]/5">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E17]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 bg-[#0C0E17]/90 px-3 py-1 text-[10px] font-mono text-white tracking-widest border border-[#0052FF]/30">
                    {project.category}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#0052FF] text-white px-3 py-1 font-mono text-xs tracking-widest font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                    VIEW CASE STUDY &rarr;
                  </div>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#0052FF]/15 pb-3 mb-3">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-[#0052FF] transition-colors">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                </div>

                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-neutral-400 bg-[#131725] px-2 py-0.5 border border-[#0052FF]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
