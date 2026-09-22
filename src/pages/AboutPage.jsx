import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, Shield, Zap, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "Anti-Commodity Craft",
      desc: "In an internet inundated with duplicated templates and lazy AI boilerplate, we champion intentional design, mathematical typography, and code written with purpose."
    },
    {
      num: "02",
      title: "Zero-Latency Architecture",
      desc: "Performance is not an afterthought; it is fundamental to the user's emotional experience. We engineer every system for instant responsiveness and horizontal elasticity."
    },
    {
      num: "03",
      title: "Talent as Leverage",
      desc: "A great engineer or product strategist does not perform at 1.5x—they perform at 10x. We connect organizations exclusively with autonomous senior operators who execute with velocity."
    },
    {
      num: "04",
      title: "Radical Transparency",
      desc: "No corporate posturing or vanity roadmaps. We operate with open runbooks, empirical telemetry, and honest peer collaboration."
    }
  ];

  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-[#050505] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="border-b border-white/[0.08] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-medium">
              01 — STUDIO MANIFESTO
            </span>
            <div className="h-[1px] w-12 bg-[#0052FF]" />
          </div>

          <h1 className="font-display font-extrabold text-hero text-white tracking-tight leading-none mb-8">
            ENGINEERING & ARTISTRY.
          </h1>

          <p className="text-neutral-300 font-light text-xl md:text-3xl max-w-4xl leading-relaxed">
            GENFREX was created on a single uncompromising thesis: that high-growth businesses achieve greatness only when elite software engineering, cinematic aesthetics, and specialized human talent operate as one connected organism.
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 border-b border-white/[0.08] pb-20">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase block mb-4">
              ORIGIN & PURPOSE
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Moving ambitious enterprises beyond template mediocrity.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
            <p>
              Most digital agencies build ephemeral websites that decay within eighteen months. Most staffing platforms distribute untested resumes. We recognized the profound deficit in modern software: the gap between cinematic storytelling and rigorous distributed cloud architecture.
            </p>
            <p>
              GENFREX connects all three dimensions: the strategic roadmap that defines what to build, the multidisciplinary execution team that delivers it, and the specialized talent ecosystem that scales it indefinitely.
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
              // OPERATIONAL PRINCIPLES
            </span>
            <div className="h-[1px] w-12 bg-brand-blue/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.num} className="p-8 md:p-10 border border-white/10 bg-[#08080c] space-y-4">
                <span className="font-mono text-xs text-brand-blue font-bold tracking-widest">
                  {v.num}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {v.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Connect */}
        <div className="border border-white/10 bg-[#0c0c10] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Ready to collaborate with the GENFREX ecosystem?
            </h3>
            <p className="text-sm font-mono text-neutral-400">
              We take on a limited number of client engagements each quarter to preserve uncompromising craft.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-neutral-200 transition-colors shrink-0"
          >
            START A CONVERSATION &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
