import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex] || projects[0];

  // Next Project cyclic link
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <article className="pt-32 md:pt-40 pb-28 bg-[#0C0E17] text-[#F5F5F5] min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <Link
          to="/work"
          data-cursor="hover"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* 1. PROJECT TITLE & HERO HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-medium">
            01 — CASE STUDY DOSSIER
          </span>
          <div className="h-[1px] w-12 bg-[#0052FF]" />
        </div>

        <h1 className="font-display font-extrabold text-hero text-white tracking-tight leading-none mb-6">
          {project.title}
        </h1>

        <p className="text-neutral-400 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
          {project.tagline}
        </p>

        {/* Project Metadata Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-6 border-y border-white/[0.1] font-mono text-xs">
          <div>
            <span className="text-neutral-500 block mb-1 uppercase tracking-wider">CLIENT</span>
            <span className="text-white font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-neutral-500 block mb-1 uppercase tracking-wider">DISCIPLINE</span>
            <span className="text-white font-medium">{project.category}</span>
          </div>
          <div>
            <span className="text-neutral-500 block mb-1 uppercase tracking-wider">YEAR</span>
            <span className="text-white font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-neutral-500 block mb-1 uppercase tracking-wider">ROLE</span>
            <span className="text-[#0052FF] font-medium">{project.role}</span>
          </div>
          <div>
            <span className="text-neutral-500 block mb-1 uppercase tracking-wider">SERVICES USED</span>
            <span className="text-[#00D4FF] font-medium">{Array.isArray(project.servicesUsed) ? project.servicesUsed.join(' • ') : project.servicesUsed}</span>
          </div>
        </div>
      </div>

      {/* 2. FULL SCREEN PROJECT VISUAL */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[#0052FF]/20 bg-[#131725] shadow-2xl shadow-[#0052FF]/5 relative">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. ABOUT THE PROJECT */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase mb-4">
          01 // OVERVIEW & STRATEGIC MANDATE
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-8">
          About the Project
        </h2>
        <p className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* 4. THE CHALLENGE & THE SOLUTION (Side by Side Grid) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 border-t border-white/[0.08] pt-12">
          {/* Challenge */}
          <div className="space-y-6">
            <div className="font-mono text-xs tracking-[0.25em] text-[#00D4FF] uppercase">
              02 // THE CHALLENGE
            </div>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
              System Bottlenecks & Complexity
            </h3>
            <p className="text-neutral-400 font-light text-base leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
              03 // THE SOLUTION
            </div>
            <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
              Architectural & Product Resolution
            </h3>
            <p className="text-neutral-400 font-light text-base leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Gallery Composition */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] overflow-hidden border border-[#0052FF]/20 bg-[#131725]">
            <img
              src={project.secondaryImage}
              alt="Secondary visual view"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden border border-[#0052FF]/20 bg-[#131725]">
            <img
              src={project.gallery[1] || project.heroImage}
              alt="Gallery snapshot"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* 5. TECHNOLOGY STACK & DELIVERABLES */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32 border-t border-white/[0.08] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6 space-y-6">
            <div className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
              04 // TECHNOLOGY STACK
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Built on Modern Enterprise Foundations
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#131725] border border-[#0052FF]/20 font-mono text-xs text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 space-y-6">
            <div className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
              05 // KEY DELIVERABLES
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Shipped Artifacts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. RESULT / VERIFIED OUTCOME */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36 bg-[#131725] border border-[#0052FF]/25 shadow-xl shadow-[#0052FF]/5 p-8 md:p-14 rounded-2xl relative overflow-hidden">
        <div className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase mb-4">
          06 // VERIFIED OUTCOMES & OPERATIONAL IMPACT
        </div>
        <h3 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
          Delivered Architecture & Operational Value
        </h3>
        <p className="text-neutral-300 font-light text-base md:text-xl leading-relaxed max-w-4xl mb-8">
          {project.outcome}
        </p>

        {project.execution && (
          <div className="pt-6 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Execution Architecture
            </h4>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
              {project.execution}
            </p>
          </div>
        )}
      </div>

      {/* 7. NEXT PROJECT CINEMATIC TRANSITION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/[0.1] pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
              NEXT CASE STUDY
            </span>
            <Link
              to={`/work/${nextProject.slug}`}
              data-cursor="view"
              className="group inline-flex items-center gap-4 font-display font-bold text-3xl md:text-6xl text-white hover:text-brand-blue transition-colors"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="w-8 h-8 text-brand-blue group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors self-start md:self-auto font-semibold"
          >
            <span>COMMISSION A STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
