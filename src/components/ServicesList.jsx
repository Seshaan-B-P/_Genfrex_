import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesList() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      number: '01',
      title: 'DIGITAL STRATEGY',
      category: 'ARCHITECTURE & VISION',
      description:
        'Deconstructing business models, mapping technological leverage, and charting execution roadmaps with definitive ROI milestones.',
      tags: ['Market Architecture', 'Tech Roadmapping', 'Conversion Systems'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '02',
      title: 'BRAND EXPERIENCE',
      category: 'IDENTITY & NARRATIVE',
      description:
        'Forging uncompromising brand identities, typographic systems, and emotive visual narratives that anchor market leadership.',
      tags: ['Design Systems', 'Typographic Identity', 'Visual Direction'],
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '03',
      title: 'WEB DEVELOPMENT',
      category: 'ENGINEERING & CLOUD',
      description:
        'Ultra-fast web flagships, distributed cloud microservices, and reactive custom web applications built for zero-downtime scale.',
      tags: ['Next.js Flagships', 'High-Performance APIs', 'Cloud Architecture'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '04',
      title: 'CREATIVE PRODUCTION',
      category: 'MEDIA & MOTION',
      description:
        'Bespoke editorial photography, precision motion graphics, and cinematic video direction crafted for high brand resonance.',
      tags: ['Bespoke Media', 'Cinematic Motion', 'Interactive 3D Craft'],
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '05',
      title: 'DIGITAL MARKETING',
      category: 'GROWTH & DEMAND',
      description:
        'Precision demand generation, growth loops, and algorithmic conversion rate optimization driving sustainable enterprise scale.',
      tags: ['Demand Generation', 'Algorithmic Growth', 'Funnel Analytics'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '06',
      title: 'AI & TECHNOLOGY',
      category: 'INTELLIGENCE & AUTOMATION',
      description:
        'Applying autonomous agent pipelines, intelligent data workflows, and LLM integrations directly into core enterprise operations.',
      tags: ['Autonomous Agents', 'LLM Workflow Pipelines', 'Custom Enterprise ML'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="services"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient Electric Blue Glow */}
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-[#0052FF]/[0.035] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.08] pb-12 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase font-medium">
                05 — CORE CAPABILITIES
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              WHAT WE BUILD &amp; DELIVER
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:max-w-md">
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
              Full-spectrum capability matrix spanning digital strategy, brand craft, custom software engineering, and intelligent AI architectures.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-white bg-white/[0.03] border border-white/15 hover:border-[#0052FF] hover:bg-[#0052FF]/10 transition-all duration-300 shrink-0 uppercase"
            >
              <span>ALL SERVICES</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0052FF]" />
            </Link>
          </div>
        </div>

        {/* 6-Card Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#08080C] border border-white/10 hover:border-[#0052FF] transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,82,255,0.22)] flex flex-col justify-between group overflow-hidden"
            >
              {/* Media Container (Original Color Image Preview) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0E] border-b border-white/[0.08]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Subtle Gradient for Bottom Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Index Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[10px] text-white tracking-widest uppercase font-medium">
                  <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_rgba(0,82,255,0.9)]" />
                  <span>SERVICE {service.number}</span>
                </div>

                {/* Corner Quick Arrow */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/80 backdrop-blur-md border border-white/10 group-hover:border-[#0052FF] group-hover:bg-[#0052FF] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:scale-110" />
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#666666] uppercase font-semibold block mb-2">
                    {service.category}
                  </span>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#0052FF] transition-colors tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverable Tags / Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] bg-white/[0.03] border border-white/10 text-[#A0A0A0] group-hover:border-[#0052FF]/30 group-hover:text-white transition-colors tracking-wide font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="border-t border-white/[0.08] pt-4 mt-2 flex items-center justify-between">
                  <span className="text-[10px] text-[#666666] tracking-widest uppercase font-medium group-hover:text-[#A0A0A0] transition-colors">
                    PRODUCTION GRADE
                  </span>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#0052FF] transition-colors uppercase tracking-wider"
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
