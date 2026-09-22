import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import AboutStudio from '../components/AboutStudio';
import Metrics from '../components/Metrics';
import EditorialIntro from '../components/EditorialIntro';
import ServicesList from '../components/ServicesList';
import SelectedWork from '../components/SelectedWork';
import Marquee from '../components/Marquee';
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
        {/* 01 ─ HERO (DIGITAL EXPERTISE. CONNECTED TALENT. MEANINGFUL GROWTH.) */}
        <Hero />

        {/* 02 ─ ABOUT GENFREX (WHERE DIGITAL EXPERTISE MEETS THE RIGHT TALENT.) */}
        <AboutStudio />

        {/* 03 ─ QUANTITATIVE IMPACT (BUILDING CONNECTIONS. CREATING OPPORTUNITIES.) */}
        <Metrics />

        {/* 04 ─ PHILOSOPHY & MANDATE (01 CONNECT, 02 ENABLE, 03 GROW) */}
        <EditorialIntro />

        {/* 05 ─ CORE CAPABILITIES (01 → 06 Interactive Services & Deliverables) */}
        <ServicesList />

        {/* 06 ─ ARCHIVE & SELECTED WORK (IDEAS INTO DIGITAL EXPERIENCES.) */}
        <SelectedWork />

        {/* EDITORIAL MARQUEE TRANSITION */}
        <Marquee />

        {/* 07 ─ CRAFT DOMAINS & WORKFLOW (WHAT WE MASTER: 01 → 09) */}
        <Capabilities />

        {/* 08 ─ METHODOLOGY (HOW WE WORK: 01 → 06 Connected Pipeline) */}
        <Process />

        {/* 09 ─ OUR CLIENTS (BUILDING AN ECOSYSTEM OF OPPORTUNITY) */}
        <Clients />

        {/* 10 ─ TALKS (PEOPLE. EXPERIENCES. PERSPECTIVES. 3D Coverflow) */}
        <Testimonials />

        {/* 11 ─ FINAL CTA (THE RIGHT CONNECTION CAN CHANGE WHAT'S POSSIBLE.) */}
        <FinalCTA />
      </main>
    </>
  );
}
