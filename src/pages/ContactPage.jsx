import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Globe,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RotateCcw,
  Send
} from 'lucide-react';
import { GOOGLE_SHEETS_SCRIPT_URL } from '../config/formConfig';

export default function ContactPage() {
  // SEO Metadata
  useEffect(() => {
    document.title = "Contact GENFREX | Start Your Digital Growth Journey";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Contact GENFREX for digital marketing, SEO, website development, creative services, AI-enabled solutions, and digital talent requirements.'
    );
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Form State (Modeled cleanly like QuoteModal)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    budget: 'Prefer to discuss',
    timeline: 'Within 1 month',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Catalogue Service Options
  const serviceOptions = [
    'Digital Marketing',
    'SEO & AI Search',
    'Social Media Marketing',
    'Website Design & Development',
    'Web Applications',
    'Content & Creative',
    'AI & Digital Innovation',
    'Developer / Freelancer Talent',
    'Project-Based Team',
    'Other'
  ];

  const budgetOptions = [
    'Not decided yet',
    'Prefer to discuss',
    'Custom requirement'
  ];

  const timelineOptions = [
    'Immediate (< 2 weeks)',
    'Within 1 month',
    '1 – 3 months',
    'Flexible / Planning stage'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.service) errs.service = 'Please choose a service';
    if (!formData.details.trim()) {
      errs.details = 'Please tell us a few details about your project';
    } else if (formData.details.trim().length < 15) {
      errs.details = 'Please provide at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const timestamp = new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    });

    try {
      const payload = {
        _subject: `⚡ [GENFREX INQUIRY] ${formData.service} — ${formData.name}`,
        _template: "table",
        _captcha: "false",
        _replyto: formData.email,
        "1. Client Full Name": formData.name,
        "2. Company / Brand": formData.company?.trim() || "Not specified / Startup",
        "3. Official Email": formData.email,
        "4. Phone / WhatsApp": formData.phone?.trim() || "Not provided",
        "5. Required Service": formData.service,
        "6. Investment Budget": formData.budget || "Flexible / To be discussed",
        "7. Target Timeline": formData.timeline || "Flexible / Not specified",
        "8. Project Scope & Brief": formData.details?.trim() || "No additional brief provided",
        "9. Submission Timestamp": timestamp,
        "10. Submission Channel": "GENFREX Official Web Ecosystem"
      };

      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL.trim() !== "") {
        // Direct Google Sheets + Gmail via Google Apps Script
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            details: formData.details,
            source: "GENFREX Contact Page"
          })
        });
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        // Standard FormSubmit Dispatch
        const response = await fetch("https://formsubmit.co/ajax/genfrexofficial@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok || result.success === "true" || result.success === true) {
          setIsSubmitting(false);
          setSubmitted(true);
        } else {
          throw new Error(result.message || "Failed to send");
        }
      }
    } catch (err) {
      console.warn("Direct submission notice, triggering direct client dispatch:", err);
      // High-standard executive email template
      const subject = encodeURIComponent(`GENFREX Project Inquiry: ${formData.service} — ${formData.name}`);
      const formattedBody =
        `======================================================
           GENFREX — NEW PROJECT INQUIRY
======================================================

Dear GENFREX Growth & Leadership Team,

A prospective client has submitted a project inquiry via the official website.

──────────────────────────────────────────────────────
1. CLIENT & BRAND DETAILS
──────────────────────────────────────────────────────
• Full Name        : ${formData.name}
• Company / Brand  : ${formData.company?.trim() || 'Not specified / Individual'}
• Email Address    : ${formData.email}
• Phone / WhatsApp : ${formData.phone?.trim() || 'Not provided'}

──────────────────────────────────────────────────────
2. PROJECT PARAMETERS
──────────────────────────────────────────────────────
• Service Required : ${formData.service}
• Budget Range     : ${formData.budget || 'To be discussed'}
• Expected Timeline: ${formData.timeline || 'Flexible'}

──────────────────────────────────────────────────────
3. PROJECT BRIEF & REQUIREMENTS
──────────────────────────────────────────────────────
${formData.details?.trim() || 'No detailed brief provided.'}

──────────────────────────────────────────────────────
4. SUBMISSION METADATA
──────────────────────────────────────────────────────
• Submitted On     : ${timestamp}
• Source Platform  : GENFREX Web Ecosystem (genfrex.com)
• Status           : Action Required within 24 Hours

======================================================
Reply directly to ${formData.email} to initiate consultation.
GENFREX — Where Ideas Meet Measurable Impact.
======================================================`;

      window.location.href = `mailto:genfrexofficial@gmail.com?subject=${subject}&body=${encodeURIComponent(formattedBody)}`;
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Website Design & Development',
      budget: 'Prefer to discuss',
      timeline: 'Within 1 month',
      details: ''
    });
    setErrors({});
    setSubmitted(false);
    setErrorMessage('');
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen relative overflow-x-hidden selection:bg-[#0052FF] selection:text-white">

      {/* =============================================================
          01 ─ CINEMATIC HERO WITH VIDEO BANNER (Matching HomePage Hero)
          ============================================================= */}
      <section className="relative px-4 sm:px-6 pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[82vh]">
        {/* Full Cinematic Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0 select-none pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-[1.02] grayscale contrast-125 brightness-90 transition-transform duration-1000 ease-out"
          >
            <source src="/banner.mp4" type="video/mp4" />
          </video>

          {/* Vignette & Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(12, 14, 23, 0.45) 0%, rgba(12, 14, 23, 0.78) 60%, rgba(12, 14, 23, 0.95) 100%)'
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0C0E17] via-[#0C0E17]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0C0E17] via-[#0C0E17]/85 to-transparent" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[900px] h-[360px] bg-gradient-to-r from-[#0052FF]/25 via-[#00D4FF]/20 to-[#0052FF]/20 blur-[130px] rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Hero Foreground Content */}
        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center relative z-10">

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C0E17]/80 border border-[#0052FF]/40 text-xs font-medium text-white/90 backdrop-blur-xl shadow-lg shadow-[#0052FF]/15 mb-6">
            <Sparkles size={13} className="text-[#00D4FF] animate-pulse" />
            <span className="tracking-wide uppercase">CONTACT GENFREX</span>
          </div>

          {/* Single H1 Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-black tracking-[-0.03em] text-white leading-[1.05] max-w-5xl mx-auto uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            HAVE A PROJECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#60A5FA] to-[#0052FF]">
              IN MIND?
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-neutral-300 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Whether you need a website, better search visibility, digital marketing, AI optimization, a developer, a freelancer, or a complete digital team — GENFREX can help identify the right solution.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowDown size={15} />
            </button>

            <a
              href="https://wa.me/919047295361"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:border-[#0052FF] hover:bg-[#0052FF]/10 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <span>WHATSAPP US</span>
              <ArrowUpRight size={15} className="text-[#0052FF]" />
            </a>
          </div>
        </div>
      </section>

      {/* =============================================================
          02 ─ DIRECT CONTACT CHANNELS (3 Clean Cards)
          ============================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF]/50 transition-all flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block">
                    Email Us
                  </span>
                  <a href="mailto:genfrexofficial@gmail.com" className="text-xs sm:text-sm font-medium text-white hover:text-[#0052FF] transition-colors truncate block">
                    genfrexofficial@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('genfrexofficial@gmail.com', 'email')}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF]/50 transition-all flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block">
                    Call Us
                  </span>
                  <a href="tel:+919047295361" className="text-xs sm:text-sm font-medium text-white hover:text-[#0052FF] transition-colors truncate block">
                    +91 90472 95361
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+919047295361', 'phone')}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF]/50 transition-all flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white block">
                    Quick Conversation
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/919047295361"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <span>Chat</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =============================================================
          03 ─ CLEAN "REQUEST A QUOTE" STYLE FORM (From QuoteModal)
          ============================================================= */}
      <section id="contact-form-section" className="py-20 sm:py-28 px-4 sm:px-6 relative scroll-mt-20">
        <div className="max-w-2xl mx-auto">

          {/* The Clean Form Card */}
          <div className="relative bg-[#131725] border border-[#0052FF]/30 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-[#0052FF]/10">

            {!submitted ? (
              <div>
                {/* Form Header */}
                <div className="mb-8">
                  <span className="text-[#0052FF] font-medium text-xs sm:text-sm tracking-wider uppercase block">
                    LET'S TALK ABOUT YOUR NEXT MOVE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-white mt-1 mb-2 tracking-tight">
                    Tell us what you're building.
                  </h2>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">
                    Share a few details about your requirements. GENFREX can use this information to understand your project and identify a suitable solution.
                  </p>
                </div>

                {/* Form Error Banner */}
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle size={15} className="text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Full Name <span className="text-[#0052FF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full bg-[#0C0E17] border ${errors.name ? 'border-red-500' : 'border-[#0052FF]/20'
                          } rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Company Name <span className="text-neutral-500 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization or Venture"
                        className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Email Address <span className="text-[#0052FF]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full bg-[#0C0E17] border ${errors.email ? 'border-red-500' : 'border-[#0052FF]/20'
                          } rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Phone Number <span className="text-neutral-500 text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 or country code"
                        className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      What do you need? <span className="text-[#0052FF]">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#0052FF] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0C0E17] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Project Budget <span className="text-neutral-500 text-[11px]">(Optional)</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#0052FF] transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0C0E17] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/80 mb-1.5">
                        Timeline <span className="text-neutral-500 text-[11px]">(Optional)</span>
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#0052FF] transition-colors cursor-pointer"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0C0E17] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Project Details <span className="text-[#0052FF]">*</span>
                    </label>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your business, objectives, requirements, and expected timeline."
                      className={`w-full bg-[#0C0E17] border ${errors.details ? 'border-red-500' : 'border-[#0052FF]/20'
                        } rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors`}
                    />
                    {errors.details && <p className="text-xs text-red-400 mt-1">{errors.details}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#0052FF] hover:bg-[#1E6FFF] disabled:opacity-60 text-white font-medium text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0052FF]/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>SEND PROJECT ENQUIRY ↗</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#9A9A9A] font-light mt-3">
                    By submitting, you acknowledge our{' '}
                    <Link to="/privacy-policy" className="text-[#0052FF] hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              </div>
            ) : (
              /* Success Card */
              <div className="py-8 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#0052FF]/15 border border-[#0052FF] flex items-center justify-center mx-auto text-[#0052FF]">
                  <CheckCircle2 size={30} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-white">Enquiry Sent Successfully!</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your project brief has been sent directly to <span className="text-[#0052FF]">genfrexofficial@gmail.com</span>. We will review your requirement and get in touch promptly.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919047295361?text=${encodeURIComponent(
                      `Hi GENFREX, I am ${formData.name}. I submitted a project enquiry for ${formData.service} on your website and would like to connect.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle size={15} />
                    <span>Forward on WhatsApp ↗</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
                  >
                    <RotateCcw size={14} />
                    <span>Submit Another</span>
                  </button>
                </div>
              </div>
            )}

            {/* Confidentiality Assurance */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-2.5 text-xs text-neutral-400">
              <ShieldCheck size={16} className="text-[#0052FF] shrink-0" />
              <span>GENFREX handles client information, business data, and project information with strict confidentiality.</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
