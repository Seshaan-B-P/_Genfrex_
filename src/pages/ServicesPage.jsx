import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Cpu, Layers, Sparkles } from 'lucide-react';
import { services } from '../data/services';

export default function ServicesPage() {
  const engagementModels = [
    {
      title: "Project-Based Solutions",
      tag: "DEFINED SCOPE & DELIVERABLES",
      desc: "For specific projects and deliverables with a defined scope, structured milestones, and dedicated delivery timelines.",
      benefits: ["Guaranteed milestone deliveries", "Fixed timeline and resource commitments", "Full intellectual property handover"]
    },
    {
      title: "Monthly Growth Retainers",
      tag: "CONTINUOUS GROWTH & SUPPORT",
      desc: "For continuous digital growth, ongoing SEO visibility, software maintenance, content cadence, and active marketing support.",
      benefits: ["Continuous performance optimization", "Structured monthly workflows & reviews", "Priority technical and creative support"]
    },
    {
      title: "Customized Ecosystems",
      tag: "TAILORED TECH & TALENT",
      desc: "Every business has different requirements. GENFREX creates bespoke solutions based on your objectives, scope, budget, and tech needs.",
      benefits: ["Flexible developer + designer + marketer squads", "Custom engagement & SLA structures", "Strict enterprise confidentiality"]
    }
  ];

  const commercialDetails = [
    {
      title: "Requirement-Based Pricing",
      tag: "13.1 — PRICING STRUCTURE",
      desc: "Clear, transparent requirement-based pricing depending on scope, complexity, technology, timeline, and required digital talent."
    },
    {
      title: "Structured Payment & Delivery",
      tag: "13.2 — COMMENCEMENT & DELIVERY",
      desc: "Terms are agreed upon before project commencement. Delivery timelines align strictly with approved scopes and verified milestones."
    },
    {
      title: "Support & Revisions",
      tag: "13.3 — QUALITY ASSURANCE",
      desc: "Revision limits, quality checks, and post-delivery maintenance are clearly established per the individual service agreement."
    }
  ];

  return (
    <div className="pt-32 md:pt-44 pb-28 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-medium">
              01 — COMPLETE CAPABILITIES
            </span>
            <div className="h-[1px] w-12 bg-[#0052FF]" />
          </div>

          <h1 className="font-display font-extrabold text-hero text-white tracking-tight leading-none mb-6">
            SERVICES DIRECTORY.
          </h1>

          <p className="text-neutral-400 font-light text-base md:text-xl max-w-2xl leading-relaxed">
            Full-spectrum digital capabilities designed to empower businesses with accessible digital solutions, modern technology, and vetted talent.
          </p>
        </div>

        {/* 6 Pillars Detailed Breakdown */}
        <div className="space-y-24 mb-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border-t border-white/[0.1] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Number & Title (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-sm text-[#0052FF] font-bold tracking-widest block">
                  PILLAR {service.number} — 06
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                  {service.title}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                  {service.subtitle}
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white tracking-widest uppercase border-b border-[#0052FF] pb-1 hover:text-[#0052FF] transition-colors"
                  >
                    <span>ENGAGE THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Capabilities & Deliverables (8 cols) */}
              <div className="lg:col-span-8 space-y-8 bg-[#0a0a0e] border border-white/[0.08] p-8 md:p-10">
                <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed">
                  {service.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/[0.08]">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase block mb-3">
                      KEY WORKSTREAMS
                    </span>
                    <ul className="space-y-2 text-xs font-mono text-neutral-300">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#0052FF]">&bull;</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase block mb-3">
                      VERIFIED ARTIFACTS
                    </span>
                    <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                      {service.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models Section (Section 10 — Custom Solutions) */}
        <div className="border-t border-white/[0.08] pt-20 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-[0.25em] text-[#0052FF] uppercase">
              10 — CUSTOM SOLUTIONS & ENGAGEMENT
            </span>
            <div className="h-[1px] w-12 bg-[#0052FF]/30" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            HOW WE COLLABORATE
          </h2>
          <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-12">
            Every business has different requirements. GENFREX creates customized solutions based on objectives, scope, budget, timeline, and tech requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-[#09090d] flex flex-col justify-between hover:border-[#0052FF]/40 transition-colors">
                <div>
                  <span className="font-mono text-[10px] text-[#0052FF] tracking-widest uppercase block mb-3">
                    {model.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {model.desc}
                  </p>
                  <ul className="space-y-2 mb-8 font-mono text-[11px] text-neutral-300">
                    {model.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052FF] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3 text-center border border-white/20 text-xs font-mono tracking-widest uppercase text-white hover:border-[#0052FF] hover:bg-[#0052FF]/10 transition-colors"
                >
                  SELECT MODEL
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Details Section (Section 13 — Commercial Details) */}
        <div className="border-t border-white/[0.08] pt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-[0.25em] text-[#00D4FF] uppercase">
              13 — COMMERCIAL DETAILS & STANDARDS
            </span>
            <div className="h-[1px] w-12 bg-[#00D4FF]/30" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
            TRANSPARENCY & DELIVERY TERMS
          </h2>
          <p className="text-neutral-400 font-light text-base md:text-lg max-w-2xl mb-12">
            Clear terms, predictable delivery timelines, and strict operational standards from day one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialDetails.map((item, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-[#09090d] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Shield className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
