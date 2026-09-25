import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GenfrexLogo from './GenfrexLogo';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', to: '/about', isRoute: true },
    { label: 'Services', to: '/services', isRoute: true },
    { label: 'Approach', to: '/approach', isRoute: true },
    { label: 'Work', to: '/work', isRoute: true },
    { label: 'Contact', to: '/contact', isRoute: true },
  ];

  const handleLinkClick = (e, link) => {
    setDrawerOpen(false);
    if (link.isRoute) return;

    e.preventDefault();
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${link.href}`);
    }
  };

  const isActiveLink = (link) => {
    if (link.isRoute) {
      if (link.to === '/work') {
        return location.pathname.startsWith('/work');
      }
      return location.pathname === link.to;
    }
    return location.pathname === '/' && location.hash === link.href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0C0E17]/95 backdrop-blur-md border-b border-[#0052FF]/20 py-3.5 shadow-lg shadow-[#0052FF]/5'
          : 'bg-transparent py-5 md:py-6'
          }`}
      >
        <div className="max-w-[1320px] mx-auto px-3.5 sm:px-6 md:px-8 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center shrink-0 focus:outline-none"
            aria-label="GENFREX home"
          >
            <GenfrexLogo className="h-[21px] sm:h-7 md:h-8 lg:h-9 w-auto max-w-[155px] xs:max-w-[175px] sm:max-w-none" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-normal">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`transition-colors duration-200 ${
                    isActiveLink(link)
                      ? 'text-white font-medium'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`transition-colors duration-200 ${
                    isActiveLink(link)
                      ? 'text-white font-medium'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+9047295361"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-[#0052FF]/30 bg-[#131725] hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
              aria-label="Call GENFREX: Let's Talk"
            >
              <Phone size={14} className="text-[#0052FF]" />
              <span>Let's Talk</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center font-medium rounded-full bg-[#0052FF] hover:bg-[#0042D9] active:scale-95 text-white transition-all shadow-md shadow-[#0052FF]/25 whitespace-nowrap shrink-0 text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4 md:px-5 cursor-pointer border border-[#0052FF]"
              aria-label="Review Quote"
            >
              <span className="hidden min-[380px]:inline">Review </span>Quote
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-1.5 sm:p-2 text-white/80 hover:text-white focus:outline-none shrink-0"
              aria-label="Open menu"
            >
              <Menu size={22} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0C0E17] flex flex-col justify-between p-8 transition-transform duration-400 ease-out lg:hidden border-l border-[#0052FF]/20 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
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

        <nav className="flex flex-col gap-5 py-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => {
                  setDrawerOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-2xl font-light transition-colors ${
                  isActiveLink(link) ? 'text-[#0052FF]' : 'text-white/90 hover:text-[#0052FF]'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-2xl font-light transition-colors ${
                  isActiveLink(link) ? 'text-[#0052FF]' : 'text-white/90 hover:text-[#0052FF]'
                }`}
              >
                {link.label}
              </a>
            )
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
            Review Quote
          </button>
          <a
            href="tel:+9047295361"
            className="w-full btn btn-ghost py-3 flex items-center justify-center gap-2"
          >
            <Phone size={15} className="text-[#0052FF]" />
            <span>Let's Talk (+91 9047295361)</span>
          </a>
        </div>
      </div>
    </>
  );
}
