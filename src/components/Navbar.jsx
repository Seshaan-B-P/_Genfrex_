import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo: GENFREX (Typography based) */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="GENFREX Digital Studio"
          >
            <span className="w-2 h-2 bg-[#0052FF] rounded-full shadow-[0_0_10px_rgba(0,82,255,0.8)] transition-transform duration-300 group-hover:scale-125" />
            <span className="font-display font-extrabold tracking-[0.24em] text-lg text-white group-hover:text-neutral-300 transition-colors">
              GENFREX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-xs tracking-[0.22em] text-[#A0A0A0] hover:text-white transition-colors duration-200 uppercase font-medium group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0052FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(0,82,255,0.8)]" />
              </a>
            ))}

            {/* Right CTA: [ LET'S TALK ↗ ] */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-[#0052FF] bg-white/[0.02] hover:bg-[#0052FF]/10 text-xs tracking-[0.2em] text-white transition-all duration-300 ml-2 group active:scale-95 font-medium hover:shadow-[0_0_20px_rgba(0,82,255,0.25)]"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0052FF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/15 text-xs tracking-widest text-white uppercase focus:outline-none font-medium"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <>
                  <span>CLOSE</span>
                  <X className="w-4 h-4 text-[#0052FF]" />
                </>
              ) : (
                <>
                  <span>MENU</span>
                  <Menu className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Dark Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#050505] pt-28 pb-10 px-8 flex flex-col justify-between md:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-[#666666] uppercase block font-medium">
                DIRECTORY
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="font-display font-extrabold text-3xl tracking-tight text-white hover:text-[#0052FF] transition-colors flex items-center justify-between border-b border-white/[0.08] pb-3"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#666666] font-medium">0{idx + 1}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/[0.08]">
              {/* Mobile CTA: START A PROJECT */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#0052FF]" />
              </a>

              <div className="flex justify-between items-center text-xs text-[#A0A0A0] font-medium">
                <span>GENFREX STUDIO</span>
                <a href="mailto:hello@genfrex.com" className="text-[#0052FF]">
                  hello@genfrex.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
