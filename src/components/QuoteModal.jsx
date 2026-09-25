import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        _subject: `New Project Quote Request: ${formData.service} — ${formData.name}`,
        _template: "box",
        _captcha: "false",
        _replyto: formData.email,
        "Client Name": formData.name,
        "Email Address": formData.email,
      };

      if (formData.phone?.trim()) {
        payload["Phone Number"] = formData.phone.trim();
      }
      if (formData.company?.trim()) {
        payload["Company / Brand"] = formData.company.trim();
      }

      payload["Service Required"] = formData.service;
      payload["Project Message"] = formData.message;
      payload["Source"] = "GENFREX Quote Modal";

      await fetch("https://formsubmit.co/ajax/2bd3fde99c008854100a294c8b2634c4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.warn("Quote modal submission fallback:", err);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-label="Close modal background"
      />
      <div className="relative w-full max-w-xl bg-[#131725] border border-[#0052FF]/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-[#0052FF]/10 z-10 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#181E30] hover:bg-[#0052FF]/20 flex items-center justify-center text-white/70 hover:text-white transition-colors border border-[#0052FF]/20"
          aria-label="Close quote modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <span className="text-[#0052FF] font-medium text-sm tracking-wider uppercase">Let's Build Together</span>
            <h3 className="text-2xl md:text-3xl font-light text-white mt-1 mb-2 tracking-tight">Request a Quote</h3>
            <p className="text-[#9A9A9A] text-sm mb-6">Tell us about your brand, goals, or upcoming project. We will respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Name <span className="text-[#0052FF]">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or Brand"
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Email <span className="text-[#0052FF]">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">Phone Number <span className="text-[#0052FF]">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Service Required <span className="text-[#0052FF]">*</span></label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#0052FF] transition-colors"
                >
                  <option value="" disabled>Select a domain…</option>
                  <option value="Video Ad Production & Commercials">Video Ad Production & Commercials</option>
                  <option value="Web & Application Development">Web & Application Development</option>
                  <option value="Digital Marketing & Performance Ads">Digital Marketing & Performance Ads</option>
                  <option value="Branding & Strategic Identity">Branding & Strategic Identity</option>
                  <option value="AI-Powered Content & Systems">AI-Powered Content & Systems</option>
                  <option value="SEO & Growth Architecture">SEO & Growth Architecture</option>
                  <option value="Corporate Documentaries & Showreels">Corporate Documentaries & Showreels</option>
                  <option value="Other Comprehensive Solutions">Other Comprehensive Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">Project Requirements <span className="text-[#0052FF]">*</span></label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and goals…"
                  className="w-full bg-[#0C0E17] border border-[#0052FF]/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-[#0052FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary mt-2 py-3 font-medium flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#0052FF]/20 border border-[#0052FF] mx-auto flex items-center justify-center text-[#0052FF]">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-light text-white">Thank you!</h3>
            <p className="text-[#9A9A9A] text-sm max-w-md mx-auto">
              Your quote request has been received. Our leadership and creative engineering team will get back to you promptly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-light mt-4 px-8 py-2.5 text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
