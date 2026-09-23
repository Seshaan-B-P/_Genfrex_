import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import GenfrexLogo from './GenfrexLogo';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#works' },
    { label: 'Clients', href: '#clients' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact us', href: '#footer' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 md:py-6'
          }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 focus:outline-none"
            aria-label="GENFREX home"
          >
            <GenfrexLogo className="h-8 md:h-9 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-normal text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+9047295361"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-sm font-medium transition-all"
            >
              <Phone size={14} className="text-[#0052FF]" />
              <span>Let's Talk</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-primary text-xs md:text-sm py-2 px-4 md:px-5"
            >
              Request a Quote
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0A0A0A] flex flex-col justify-between p-8 transition-transform duration-400 ease-out lg:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <GenfrexLogo className="h-8 w-auto" />
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-light text-white/90 hover:text-[#0052FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setDrawerOpen(false);
              onOpenQuote();
            }}
            className="w-full btn btn-primary py-3 text-center"
          >
            Request a Quote
          </button>
          <a
            href="tel:+9047295361"
            className="w-full btn btn-ghost py-3 flex items-center justify-center gap-2"
          >
            <Phone size={15} className="text-[#0052FF]" />
            <span>+91 9047295361</span>
          </a>
        </div>
      </div>
    </>
  );
}
