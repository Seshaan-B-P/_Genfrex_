import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutStudio() {
  const shouldReduceMotion = useReducedMotion();

  const pipelineStages = [
    { label: 'BUSINESS', desc: 'Enterprise, startup, or brand with strategic goals' },
    { label: 'REQUIREMENT', desc: 'Scope, objectives, timeline, and resource budget' },
    { label: 'DIGITAL EXPERTISE', desc: 'Strategy, engineering, and digital marketing' },
    { label: 'TALENT', desc: 'Curated freelancers, graduates, and specialists' },
    { label: 'COLLABORATION', desc: 'Transparent execution, agile workflows, and synergy' },
    { label: 'GROWTH', desc: 'Measurable digital momentum and compounding results' },
  ];

  return (
    <section
      id="about"
      className="py-28 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#0052FF]/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
            02 — ABOUT GENFREX
          </span>
          <div className="h-[1px] w-12 bg-[#0052FF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] text-white tracking-tight">
              WHERE DIGITAL EXPERTISE <br />
              <span className="text-[#0052FF]">MEETS THE RIGHT TALENT.</span>
            </h2>

            {/* Three Editorial Paragraphs */}
            <div className="space-y-6 text-base md:text-lg text-[#A0A0A0] font-light leading-[1.8] max-w-2xl">
              <p>
                GENFREX is a modern digital services and talent ecosystem built to help businesses grow through technology, digital expertise, and skilled professionals.
              </p>

              <p>
                We provide digital solutions across Digital Marketing, SEO &amp; Social Media Marketing, Website Development, WordPress Development, and Freelancing &amp; Talent Connection.
              </p>

              <p>
                Beyond digital services, we are building a platform that connects businesses and clients with freelancers and professionals based on their requirements, skills, experience, availability, and budget.
              </p>
            </div>

            {/* Rectangular Editorial CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                data-cursor="explore"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-xs tracking-wider uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 rounded-none shadow-lg hover:shadow-[0_0_25px_rgba(0,82,255,0.35)]"
              >
                <span>EXPLORE GENFREX</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                data-cursor="hover"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-white/20 text-white text-xs tracking-wider uppercase font-semibold hover:border-[#0052FF] hover:text-[#0052FF] transition-all duration-300 rounded-none"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Asymmetric Pipeline Ecosystem Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 md:p-10 bg-[#0A0A0A] border border-white/10 rounded-none">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0052FF] uppercase">
                  THE VALUE PIPELINE
                </span>
                <span className="text-[10px] text-[#666666] tracking-widest uppercase font-mono">
                  CONNECTED ECOSYSTEM
                </span>
              </div>

              {/* Sequential Steps with Downward Indicators */}
              <div className="space-y-3">
                {pipelineStages.map((stage, idx) => (
                  <div key={stage.label}>
                    <div className="p-4 bg-[#111111] border border-white/[0.06] hover:border-[#0052FF]/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#666666] group-hover:text-[#0052FF] transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-[#0052FF] transition-colors">
                          {stage.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A0A0A0] font-light mt-1">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Downward Connector Arrow */}
                    {idx < pipelineStages.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="w-[1px] h-3 bg-gradient-to-b from-[#0052FF] to-white/10" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Ecosystem Metric Tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#A0A0A0]">
                <span>Ecosystem Model</span>
                <span className="text-white font-semibold">Decentralized &amp; High-Velocity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
