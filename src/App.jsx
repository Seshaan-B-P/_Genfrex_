import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';

// Pages
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="bg-[#050505] text-[#FFFFFF] min-h-screen selection:bg-[#0052FF] selection:text-white relative">
      {/* Dynamic Custom Cursor */}
      <CustomCursor />

      {/* Subtle Grain Texture */}
      <GrainOverlay />

      {/* Scroll Restorer */}
      <ScrollToTop />

      {/* Minimal Floating Navigation */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Editorial Large Footer */}
      <Footer />
    </div>
  );
}
