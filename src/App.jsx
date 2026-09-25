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
import ApproachPage from './pages/ApproachPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen selection:bg-[#0052FF] selection:text-white relative">
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
        <Route path="/work" element={<WorkPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/work/:slug" element={<CaseStudyPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/services" element={<ServicesPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
        <Route path="/approach" element={<ApproachPage onOpenQuote={() => setIsQuoteOpen(true)} />} />
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
