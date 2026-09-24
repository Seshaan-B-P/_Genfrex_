import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import AboutStudio from '../components/AboutStudio';
import FounderMessage from '../components/FounderMessage';
import SelectedWork from '../components/SelectedWork';
import AiBanner from '../components/AiBanner';
import ServicesList from '../components/ServicesList';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Workflow from '../components/Workflow';
import VideoModal from '../components/VideoModal';
import QuoteModal from '../components/QuoteModal';

export default function HomePage({ isQuoteOpen, setIsQuoteOpen }) {
  const [videoState, setVideoState] = useState({ isOpen: false, url: '', title: '', muted: false });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenVideo = (url, title = "Cinematic Experience", muted = false) => {
    const shouldMute = Boolean(muted || (url && url.includes('About Genfrex')));
    setVideoState({ isOpen: true, url, title, muted: shouldMute });
  };

  const handleCloseVideo = () => {
    setVideoState({ isOpen: false, url: '', title: '', muted: false });
  };

  const scrollToWorkflow = () => {
    const el = document.getElementById('workflow');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0C0E17] text-white min-h-screen relative overflow-hidden">
      {/* 01 ─ 5N2 MEDIA HERO WITH DUAL AMBIENT BLUE GLOW & SHOWCASE STAGE */}
      <Hero
        onOpenVideo={handleOpenVideo}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 02 ─ ABOUT GENFREX (SPLIT TWO-COLUMN WITH OVERLAY TAG) */}
      <AboutStudio />

      {/* 03 ─ FOUNDER'S MESSAGE (VIDEO SIDE + LEADERSHIP STATEMENT) */}
      <FounderMessage
        onOpenVideo={handleOpenVideo}
      />

      {/* 04 ─ OUR WORKS (HORIZONTAL 16:9 CAROUSEL WITH PREV/NEXT) */}
      <SelectedWork
        onOpenVideo={handleOpenVideo}
      />

      {/* 05 ─ HIGH-IMPACT AGENCY STATEMENT BANNER */}
      <AiBanner
        onScrollToWorkflow={scrollToWorkflow}
      />

      {/* 06 ─ OUR SERVICES (3-GRID CARDS WITH ICON BADGES) */}
      <ServicesList
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 07 ─ OUR CLIENTS (4-COLUMN STATS COUNTERS & LOGO MARQUEE) */}
      <Clients />

      {/* 09 ─ TALKS (HEAR IT STRAIGHT FROM THE HEARTS - VIDEO STAGE) */}
      <Testimonials
        onOpenVideo={handleOpenVideo}
      />

      {/* 10 ─ CLIENT WORKFLOW (9-STEP INTERACTIVE COLLABORATIVE TABS) */}
      <Workflow />

      {/* REUSABLE VIDEO MODAL FOR FULL-SCREEN HIGH-DEF PLAYBACK */}
      <VideoModal
        isOpen={videoState.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoState.url}
        title={videoState.title}
        muted={videoState.muted}
      />

      {/* REUSABLE REQUEST A QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <a
        href="https://api.whatsapp.com/send/?phone=9047295361&text=Welcome%20to%20GENFREX%20-%20Where%20ideas%20meet%20impact."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </a>

      {/* BACK TO TOP BUTTON */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}
