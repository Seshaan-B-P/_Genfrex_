import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MapPin, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Web Application',
    budget: '$50k — $100k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const projectTypes = [
    'Website Flagship',
    'Web Application',
    'Branding & Creative',
    'Digital Marketing',
    'Dedicated Talent Squad',
    'Custom Technology',
    'Other'
  ];

  const budgetTiers = [
    '< $25k',
    '$25k — $50k',
    '$50k — $100k',
    '$100k — $250k',
    '$250k+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-[#0C0E17] text-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-[#0052FF]/15 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-medium">
              01 — PROJECT INITIATION
            </span>
            <div className="h-[1px] w-12 bg-[#0052FF]" />
          </div>

          <h1 className="font-display font-extrabold text-hero text-white tracking-tight leading-none mb-6">
            LET'S MAKE SOMETHING MATTER.
          </h1>

          <p className="text-neutral-400 font-light text-base md:text-xl max-w-2xl leading-relaxed">
            Tell us about your objectives, timelines, and technical challenges. Our leadership reviews all inquiries within 24 business hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Contact Info & Expectations (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-[#0052FF] uppercase block mb-3">
                DIRECT CHANNELS
              </span>
              <div className="space-y-3 font-mono text-sm">
                <div>
                  <span className="text-neutral-500 block text-xs">COMMISSION INQUIRIES:</span>
                  <a href="mailto:genfrexofficial@gmail.com" className="text-white hover:text-[#0052FF] transition-colors">
                    genfrexofficial@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 block text-xs">DIRECT LINE:</span>
                  <a href="tel:+9047295361" className="text-white hover:text-[#0052FF] transition-colors">
                    +91 9047295361
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-[#0052FF]/20 bg-[#131725] shadow-lg shadow-[#0052FF]/5 space-y-3">
              <span className="font-mono text-xs text-[#0052FF] uppercase tracking-widest block">
                WHAT TO EXPECT
              </span>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                1. Initial exploratory alignment call with a senior strategist.<br />
                2. High-level architecture, feasibility & scope estimate.<br />
                3. Milestone proposal and team staffing roadmap.
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-500 space-y-1">
              <p>RESPONSE SLA: &lt; 24 HOURS</p>
              <p>TIMEZONE: GLOBAL DISTRIBUTED TEAMS</p>
            </div>
          </div>

          {/* Right: Bespoke Inquiry Suite (8 cols) */}
          <div className="lg:col-span-8 bg-[#131725] border border-[#0052FF]/25 shadow-2xl shadow-[#0052FF]/5 p-8 md:p-14 relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center mx-auto text-brand-blue">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-3xl text-white">
                  INQUIRY RECEIVED.
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your project brief has been routed to our strategy directors. We will reach out to <span className="text-white font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-white/20 text-xs font-mono tracking-widest text-neutral-300 hover:text-white hover:border-white transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#0C0E17] border border-[#0052FF]/20 focus:border-[#0052FF] px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full bg-[#0C0E17] border border-[#0052FF]/20 focus:border-[#0052FF] px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Company */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                    ORGANIZATION / COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or venture name"
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 focus:border-[#0052FF] px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* 3. Project Type Selector */}
                <div className="space-y-3">
                  <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                    PROJECT FOCUS / ENGAGEMENT TYPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          data-cursor="hover"
                          className={`px-3.5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#0052FF] border-[#0052FF] text-white shadow-md shadow-[#0052FF]/30'
                              : 'bg-[#0C0E17] border-[#0052FF]/20 text-neutral-400 hover:border-[#0052FF]/50 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Budget Range Selector */}
                <div className="space-y-3">
                  <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                    ANTICIPATED BUDGET
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetTiers.map((tier) => {
                      const isSelected = formData.budget === tier;
                      return (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          data-cursor="hover"
                          className={`px-3.5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#0052FF] border-[#0052FF] text-white shadow-md shadow-[#0052FF]/30'
                              : 'bg-[#0C0E17] border-[#0052FF]/20 text-neutral-400 hover:border-[#0052FF]/50 hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Message */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs tracking-widest text-neutral-400 uppercase">
                    PROJECT BRIEF & OBJECTIVES *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the project goals, technical requirements, or talent constraints..."
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 focus:border-[#0052FF] px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  data-cursor="hover"
                  className="w-full py-5 bg-[#0052FF] text-white hover:bg-[#1E6FFF] font-mono text-xs tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#0052FF]/25 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>PROCESSING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
