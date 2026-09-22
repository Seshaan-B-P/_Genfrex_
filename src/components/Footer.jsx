import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GenfrexLogo from './GenfrexLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#FFFFFF] pt-24 pb-12 px-6 md:px-12 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/[0.08]">
          
          {/* Brand & Editorial Column (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <GenfrexLogo className="h-12 sm:h-14 md:h-16 w-auto" />
            </Link>

            <div className="space-y-1 font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight uppercase leading-tight">
              <p>DIGITAL SERVICES.</p>
              <p>DIGITAL TALENT.</p>
              <p className="text-[#0052FF]">CONNECTED GROWTH.</p>
            </div>

            <p className="text-xs sm:text-sm text-[#A0A0A0] font-light max-w-sm leading-relaxed">
              GENFREX is a modern digital services and talent ecosystem helping businesses grow through technology, digital marketing, and skilled professionals.
            </p>

            <div className="pt-2 text-xs text-[#666666] tracking-wider font-mono">
              FOUNDED BY P.S. DHARSHAN &bull; 2026
            </div>
          </div>

          {/* Navigation Columns (8 cols) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: EXPLORE */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase block font-bold font-mono">
                EXPLORE
              </span>
              <ul className="space-y-3 text-xs tracking-wider font-medium text-[#A0A0A0]">
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Talent
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: FOR BUSINESSES */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase block font-bold font-mono">
                FOR BUSINESSES
              </span>
              <ul className="space-y-3 text-xs tracking-wider font-medium text-[#A0A0A0]">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Digital Services
                  </Link>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Find Talent
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: FOR PROFESSIONALS */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase block font-bold font-mono">
                FOR PROFESSIONALS
              </span>
              <ul className="space-y-3 text-xs tracking-wider font-medium text-[#A0A0A0]">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Join the Network
                  </Link>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Find Opportunities
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Freelancing
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT & CONTACT */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase block font-bold font-mono">
                  CONNECT
                </span>
                <ul className="space-y-2 text-xs tracking-wider font-medium text-[#A0A0A0]">
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-[#0052FF]" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono tracking-widest text-[#666666] uppercase block">
                  CONTACT
                </span>
                <p className="text-xs text-white font-mono">hello@genfrex.com</p>
                <p className="text-xs text-[#A0A0A0] font-mono">+91 90472 95361</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#666666] font-mono">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; 2026 GENFREX. ALL RIGHTS RESERVED.</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              PRIVACY
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              TERMS
            </Link>
          </div>

          <div className="text-white/80 font-bold tracking-widest">
            CONNECT. COLLABORATE. GROW.
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="flex items-center gap-2 hover:text-[#0052FF] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
