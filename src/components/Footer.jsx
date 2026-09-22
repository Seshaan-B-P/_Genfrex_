import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#050505] text-[#FFFFFF] pt-24 pb-12 px-6 md:px-12 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/[0.08]">
          
          {/* Brand & Mission Statement (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-[#0052FF] rounded-full shadow-[0_0_10px_rgba(0,82,255,0.9)]" />
              <span className="font-display font-extrabold text-2xl tracking-[0.2em] text-white">
                GENFREX
              </span>
            </div>

            <div className="text-sm text-[#A0A0A0] leading-relaxed space-y-1 font-medium">
              <p>Digital Growth.</p>
              <p>Technology.</p>
              <p>Creative.</p>
              <p>Talent.</p>
            </div>

            <div className="pt-2 text-xs text-[#666666] tracking-wider font-medium">
              FOUNDED BY P.S. DHARSHAN — GENFREX.VERCEL.APP
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#666666] uppercase block mb-2 font-medium">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs tracking-wider font-medium">
              <li>
                <a href="#work" className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors">
                  WORK
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#666666] uppercase block mb-2 font-medium">
              DISPATCH
            </span>
            <ul className="space-y-3 text-xs tracking-wider font-medium">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>INSTAGRAM</span>
                  <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#A0A0A0] hover:text-[#0052FF] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#666666] uppercase block mb-2 font-medium">
              INQUIRIES
            </span>
            <div className="text-xs text-[#A0A0A0] space-y-2 font-medium">
              <a
                href="mailto:hello@genfrex.com"
                className="text-white hover:text-[#0052FF] transition-colors block font-semibold"
              >
                hello@genfrex.com
              </a>
              <a
                href="mailto:genfrexofficial@gmail.com"
                className="text-[#8A8F98] hover:text-white transition-colors block text-[11px]"
              >
                genfrexofficial@gmail.com
              </a>
              <p className="text-[11px] text-[#666666] pt-2">
                WHATSAPP: +91 90472 95361
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666] font-medium">
          <div className="flex items-center flex-wrap gap-4">
            <span>&copy; 2026 GENFREX. ALL RIGHTS RESERVED.</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer transition-colors">PRIVACY</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer transition-colors">TERMS</span>
            <span>&bull;</span>
            <span className="text-[#A0A0A0]">BUILT WITH INTENT.</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="flex items-center gap-2 text-white hover:text-[#0052FF] transition-colors group focus:outline-none font-medium"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
