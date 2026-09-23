import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Target, Sparkles, Users, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

export default function AboutStudio() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden" id="about">
      {/* Subtle Ambient Background Light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-[#0052FF]/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-20">

        {/* ── 01: WHO WE ARE (SPLIT TWO-COLUMN HERO WITH ACCENT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/80 mb-5">
              <Sparkles size={12} className="text-[#0052FF]" />
              <span>ABOUT GENFREX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Who We Are
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-5">
              <strong className="font-semibold text-white">GENFREX</strong> is a digital growth and talent ecosystem designed to connect businesses with the right digital solutions, technology, and talent.
            </p>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
              We help businesses build their digital presence, improve their online visibility, develop technology solutions, and access skilled digital professionals for their evolving needs.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {['Digital Presence', 'Online Visibility', 'Technology Solutions', 'Skilled Digital Talent'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                  ✦ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Figure Showcase */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#12141A]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="GENFREX collaborative digital and talent ecosystem"
              className="w-full aspect-[4/3] object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-xs font-semibold text-[#00D4FF] uppercase tracking-wider block">
                CONNECTED ECOSYSTEM
              </span>
              <p className="text-xs text-white/80 font-light mt-1">
                Where businesses, technology & talent create limitless opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* ── 02: VISION & MISSION (DUAL CARDS - RADICALSTART STYLE) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Our Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0A0B0E] border border-white/10 hover:border-[#0052FF]/50 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#00D4FF] mb-5 group-hover:scale-110 transition-transform">
              <Compass size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest text-[#00D4FF] uppercase block mb-2">
              OUR VISION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Limitless Opportunities Together
            </h3>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              "To build a connected digital ecosystem where businesses, technology, freelancers, and digital talent can create limitless opportunities together."
            </p>
          </div>

          {/* Our Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0A0B0E] border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mb-5 group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <span className="text-xs font-bold tracking-widest text-[#0052FF] uppercase block mb-2">
              OUR MISSION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Empowering Sustainable Digital Growth
            </h3>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              "To empower businesses with accessible digital solutions and connect them with the right talent to achieve sustainable digital growth."
            </p>
          </div>
        </div>

        {/* ── 03: BRAND PHILOSOPHY (GEN + FRE + X) ── */}
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#0C0D12] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-2">
              THE GENFREX FORMULA
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Our Brand Philosophy
            </h3>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sm font-bold text-white">
              <span className="text-[#FFFFFF]">GEN</span>
              <span className="text-white/40">+</span>
              <span className="text-[#0052FF]">FRE</span>
              <span className="text-white/40">+</span>
              <span className="text-[#00D4FF]">X</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GEN (White / Silver from Logo) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14151C] border border-white/15 hover:border-white/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#FFFFFF] tracking-tight">GEN</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white">01</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Next Generation</h4>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Forward-thinking digital solutions and architectures built for tomorrow's business landscape.
              </p>
            </div>

            {/* FRE (Electric Royal Blue from Logo) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14151C] border border-[#0052FF]/25 hover:border-[#0052FF]/60 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#0052FF] tracking-tight">FRE</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0052FF]/10 text-[#0052FF]">02</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Freelancers & Digital Talent</h4>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Connecting businesses with pre-vetted, high-impact specialized digital professionals on demand.
              </p>
            </div>

            {/* X (Luminous Cyan from Logo) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#14151C] border border-[#00D4FF]/25 hover:border-[#00D4FF]/60 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#00D4FF] tracking-tight">X</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF]">03</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Limitless Possibilities</h4>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Connection, Transformation & Execution. The catalyst unlocking exponential growth.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#00D4FF] hover:text-white transition-colors"
            >
              <span>Explore our full story and capabilities</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
