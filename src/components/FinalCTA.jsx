import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] py-32 md:py-44 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Cinematic Blue Light in Background */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-30, 30, -30],
                y: [-15, 15, -15],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/[0.08] rounded-full blur-[190px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-10 select-none">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#0052FF] uppercase font-bold">
          <span>11 — FINAL CTA</span>
        </div>

        {/* Closing Headings matching specification */}
        <div className="space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
            THE RIGHT CONNECTION <br />
            CAN CHANGE WHAT'S POSSIBLE.
          </h2>

          <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0052FF] tracking-wider pt-2">
            CONNECT. COLLABORATE. GROW.
          </div>
        </div>

        {/* Supporting Narrative */}
        <p className="text-sm sm:text-base md:text-lg text-[#A0A0A0] font-light max-w-2xl mx-auto leading-relaxed">
          Whether you are looking for digital solutions, searching for skilled talent, exploring freelance projects, or looking for your next professional opportunity, Genfrex is here to help you connect, collaborate, and grow.
        </p>

        {/* Dual Rectangular Editorial CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Business CTA */}
          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs md:text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 w-full sm:w-auto rounded-none shadow-lg hover:shadow-[0_0_30px_rgba(0,82,255,0.4)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          {/* Professional CTA */}
          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-semibold hover:border-[#0052FF] hover:text-[#0052FF] transition-all duration-300 w-full sm:w-auto rounded-none"
          >
            <span>JOIN THE NETWORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Direct Contact Metadata */}
        <div className="pt-6 text-xs text-[#666666] font-mono tracking-widest uppercase">
          OFFICIAL LINE &bull; HELLO@GENFREX.COM &bull; +91 90472 95361
        </div>
      </div>
    </section>
  );
}
