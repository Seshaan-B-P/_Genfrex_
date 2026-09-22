import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import AboutStudio from '../components/AboutStudio';
import Metrics from '../components/Metrics';
import EditorialIntro from '../components/EditorialIntro';
import ServicesList from '../components/ServicesList';
import SelectedWork from '../components/SelectedWork';
import Capabilities from '../components/Capabilities';
import Process from '../components/Process';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* 00 ─ PRELOADER */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      <main className="bg-[#050505]">
        {/* 01 ─ HERO ("BUILDING WHAT'S NEXT.") */}
        <Hero />

        {/* 02 ─ ABOUT GENFREX (Cinematic Storytelling) */}
        <AboutStudio />

        {/* 03 ─ QUANTITATIVE IMPACT (00+ / 00+ / 00+ / 00+) */}
        <Metrics />

        {/* 04 ─ PHILOSOPHY & MANDATE (01 / 02 / 03) */}
        <EditorialIntro />

        {/* 05 ─ CORE CAPABILITIES (01 → 06) */}
        <ServicesList />

        {/* 06 ─ ARCHIVE & SELECTED WORK (Horizontal Case Studies) */}
        <SelectedWork />

        {/* 07 ─ CRAFT DOMAINS & WORKFLOW (01 → 09) */}
        <Capabilities />

        {/* 08 ─ METHODOLOGY (01 → 06 Pipeline) */}
        <Process />

        {/* 09 ─ OUR CLIENTS (Stats + Logo Marquee) */}
        <Clients />

        {/* 10 ─ TALKS (3D Coverflow) */}
        <Testimonials />

        {/* 11 ─ FINAL CTA ("LET'S BUILD SOMETHING SIGNIFICANT.") */}
        <FinalCTA />
      </main>
    </>
  );
}
