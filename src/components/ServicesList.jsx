import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesList() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const capabilities = [
    {
      number: '01',
      title: 'DIGITAL MARKETING',
      category: 'GROWTH & DEMAND',
      deliverables: ['Campaign Strategy', 'Content Marketing', 'Performance Marketing', 'Brand Growth'],
      summary: 'Data-driven performance campaigns and content frameworks that capture demand and convert audiences.',
    },
    {
      number: '02',
      title: 'SEO & SOCIAL MEDIA MARKETING',
      category: 'ORGANIC VISIBILITY & CHANNELS',
      deliverables: ['SEO Strategy', 'Search Optimization', 'Social Media Management', 'Content Strategy'],
      summary: 'Comprehensive search indexing, high-intent keywords, and multi-channel social growth engines.',
    },
    {
      number: '03',
      title: 'WEBSITE DEVELOPMENT',
      category: 'CUSTOM WEB & PLATFORMS',
      deliverables: ['Business Websites', 'Web Applications', 'Responsive Experiences', 'Custom Development'],
      summary: 'High-performance digital flagships, responsive web apps, and modern frontend architectures.',
    },
    {
      number: '04',
      title: 'WORDPRESS DEVELOPMENT',
      category: 'CMS & ENTERPRISE PUBLISHING',
      deliverables: ['Corporate Websites', 'Custom Themes', 'CMS Development', 'Website Maintenance'],
      summary: 'Scalable custom WordPress architectures, bespoke blocks, frictionless CMS management, and security.',
    },
    {
      number: '05',
      title: 'FREELANCING & TALENT CONNECTION',
      category: 'TALENT PLATFORM & HIRING',
      deliverables: ['Talent Discovery', 'Skill Matching', 'Project-Based Hiring', 'Freelancer Connections'],
      summary: 'Direct bridge connecting businesses with verified freelancers, students, and seasoned specialists.',
    },
    {
      number: '06',
      title: 'DIGITAL & TECHNOLOGY SOLUTIONS',
      category: 'SYSTEMS & AUTOMATION',
      deliverables: ['Technology Consulting', 'Digital Solutions', 'Automation', 'Custom Solutions'],
      summary: 'Bespoke technology consulting, workflow automations, and modern digital integration tooling.',
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
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                02 — CORE CAPABILITIES
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              DIGITAL EXPERTISE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]">
                BUILT FOR GROWTH.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:max-w-md">
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
              Six foundational solutions engineered to transform business requirements into measurable technological and commercial scale.
            </p>
            <Link
              to="/services"
              data-cursor="explore"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider text-black bg-white hover:bg-[#0052FF] hover:text-white transition-all duration-300 shrink-0 uppercase rounded-none"
            >
              <span>ALL SERVICES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive List (Editorial Stripe Matrix, Not 6 Generic Cards) */}
        <div className="divide-y divide-white/[0.08]">
          {capabilities.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-cursor="explore"
                className="group py-8 sm:py-10 md:py-12 transition-all duration-300 relative cursor-pointer"
              >
                {/* Background Subtle Accent on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#0052FF]/[0.06] to-transparent pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Number & Category */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-xs sm:text-sm text-[#0052FF] font-bold">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Main Service Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight group-hover:text-[#0052FF] transition-all duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] font-light mt-2 max-w-lg leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Dynamic Deliverable Tags (appear and highlight on hover) */}
                  <div className="lg:col-span-3 flex flex-wrap gap-2">
                    {item.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] px-2.5 py-1 border transition-all duration-300 font-mono ${
                          isHovered
                            ? 'border-[#0052FF] text-white bg-[#0052FF]/15'
                            : 'border-white/10 text-[#888888] bg-transparent'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Indicator Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'border-[#0052FF] bg-[#0052FF] text-white rotate-45'
                          : 'border-white/15 text-white/60 group-hover:border-white/40'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
