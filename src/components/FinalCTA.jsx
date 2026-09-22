import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] py-36 md:py-48 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] flex items-center justify-center overflow-hidden"
    >
      {/* Large Blurred Blue Light Slowly Moving Behind Typography */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-40, 40, -40],
                y: [-20, 20, -20],
                scale: [1, 1.1, 1],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/[0.10] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 space-y-10 select-none">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#0052FF] uppercase font-bold">
          <span>11 — FINAL CTA</span>
        </div>

        {/* Closing Headline matching user request */}
        <div className="space-y-3">
          <h2 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#A0A0A0] tracking-wide uppercase">
            HAVE AN IDEA WORTH BUILDING?
          </h2>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]">
              SIGNIFICANT.
            </span>
          </h3>
        </div>

        {/* CTA Button: START A PROJECT ↗ */}
        <div className="pt-6">
          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-xs md:text-sm tracking-[0.25em] uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 active:scale-98 hover:shadow-[0_0_35px_rgba(0,82,255,0.45)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="pt-4 text-xs text-[#666666] tracking-widest uppercase font-medium">
          DIRECT LINE &bull; HELLO@GENFREX.COM &bull; WHATSAPP +91 90472 95361
        </div>
      </div>
    </section>
  );
}
