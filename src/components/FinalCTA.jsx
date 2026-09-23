import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#0052FF]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-6 select-none">
        <span className="text-[11px] tracking-[0.25em] text-[#0052FF] uppercase font-bold font-mono">
          11 — FINAL CTA
        </span>

        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
          THE RIGHT CONNECTION <br />
          CAN CHANGE WHAT'S POSSIBLE.
        </h2>

        <div className="font-display font-black text-xl sm:text-2xl text-[#0052FF] tracking-wider">
          CONNECT. COLLABORATE. GROW.
        </div>

        <p className="text-xs sm:text-sm text-[#888888] font-light max-w-lg mx-auto leading-relaxed">
          Whether you are looking for digital solutions, searching for skilled talent, or looking for your next professional opportunity, Genfrex is here.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-xs tracking-[0.18em] uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 rounded-none shadow-md hover:shadow-[0_0_25px_rgba(0,82,255,0.35)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to="/contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-white/20 text-white text-xs tracking-[0.18em] uppercase font-semibold hover:border-[#0052FF] hover:text-[#0052FF] transition-all duration-300 rounded-none"
          >
            <span>JOIN THE NETWORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0052FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="pt-4 text-[10px] text-[#666666] font-mono tracking-widest uppercase">
          HELLO@GENFREX.COM &bull; +91 90472 95361
        </div>
      </div>
    </section>
  );
}
