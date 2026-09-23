import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';

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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A] text-[#FFFFFF] min-h-screen selection:bg-[#0052FF] selection:text-white relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Restorer */}
      <ScrollToTop />

      {/* 5N2 Media Inspired Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Application Routes */}
      <Routes>
        <Route
          path="/"
          element={<HomePage isQuoteOpen={isQuoteOpen} setIsQuoteOpen={setIsQuoteOpen} />}
        />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* 5N2 Media Inspired Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />
    </div>
  );
}
