import React from 'react';
import { ArrowRight, Linkedin, Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import GenfrexLogo from './GenfrexLogo';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="relative bg-[#070709] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 overflow-hidden" id="footer">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-[#141416]/90 backdrop-blur-sm border border-white/10 mb-16 shadow-2xl">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-1">
              READY TO SCALE?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
              Have a project in mind?
            </h3>
          </div>
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn btn-primary px-8 py-3.5 text-sm sm:text-base font-medium flex items-center gap-2 flex-shrink-0 shadow-lg shadow-[#0052FF]/30"
          >
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          {/* Brand & Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <GenfrexLogo className="h-9 w-auto" />
            <p className="text-[#9A9A9A] text-sm font-light leading-relaxed max-w-sm">
              GENFREX is an AV-First, Digital-First creative and growth agency delivering end-to-end commercial productions, high-conversion software platforms, digital marketing, and strategic brand ecosystems.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-sm font-light text-[#9A9A9A]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#works" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">Client Workflow</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in touch
            </h5>
            <ul className="space-y-3 text-sm font-light text-[#9A9A9A]">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#0052FF]" />
                <a href="mailto:genfrexofficial@gmail.com" className="hover:text-white transition-colors">
                  genfrexofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#0052FF]" />
                <a href="tel:+9047295361" className="hover:text-white transition-colors">
                  +91 9047295361
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#0052FF] flex-shrink-0 mt-0.5" />
                <span>India • Available for worldwide creative & digital briefs</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Socials
            </h5>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/genfrex/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0052FF] border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0052FF] border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0052FF] border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0052FF] border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ── 05: GIANT ANIMATED WATERMARK: GENFREX (ONLY LETTERS CHANGE COLOR IN BLUE & BLACK) ── */}
        <div
          className="relative py-10 sm:py-16 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Giant Genfrex Typography with Black & Blue Letter Color Sweep */}
          <div className="footer-watermark-wrapper">
            <span className="footer-watermark-text">Genfrex</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#666] border-t border-white/[0.08]">
          <p>© 2026 GENFREX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#9A9A9A] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#9A9A9A] transition-colors">Terms of Service</a>
            <a href="#about" className="hover:text-[#9A9A9A] transition-colors">Site Credits</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
