import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Compass,
  ArrowRight,
  ArrowDown,
  Zap,
  Users,
  Globe,
  Layers,
  CheckCircle2,
  Infinity as InfinityIcon,
  TrendingUp,
  Cpu,
  Linkedin,
  Shield,
  ShieldCheck,
  Lock
} from 'lucide-react';

export default function AboutPage() {
  const pillars = [
    {
      icon: Globe,
      title: "Digital Presence & Visibility",
      desc: "Comprehensive multi-channel strategies, high-ranking SEO, and organic authority to ensure your brand gets discovered by the right audience."
    },
    {
      icon: Cpu,
      title: "Technology Solutions",
      desc: "Modern, high-performance web applications, mobile platforms, and automated digital systems engineered for reliability and scalability."
    },
    {
      icon: Users,
      title: "Skilled Digital Talent",
      desc: "On-demand access to verified, specialized freelancers, designers, marketers, and developers ready to execute with precision."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Digital Growth",
      desc: "Data-driven performance campaigns and conversion frameworks designed to deliver compounding returns over time."
    }
  ];

  const directors = [
    {
      name: "Dharshan",
      role: "Director",
      image: "/CEO.jpeg",
      linkedin: "https://www.linkedin.com/in/dharshanselvaraj/"
    }
  ];

  const managers = [
    {
      name: "Deepak",
      role: "HR Head",
      image: "",
      linkedin: "https://www.linkedin.com/in/deepakparamanantham/"
    },
    {
      name: "Arun Kumar",
      role: "SEO Specialist",
      image: "",
      linkedin: "https://www.linkedin.com/in/arun-kumar-seo-/"
    },
    {
      name: "Anisha",
      role: "People Operations Head",
      image: "",
      linkedin: "https://www.linkedin.com/in/anisha-palanisamy05/"
    },
    {
      name: "Seshaan",
      role: "Technical Head",
      image: "",
      linkedin: "https://www.linkedin.com/in/seshaanbp/"
    }
  ];

  return (
    <div className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen pt-28 md:pt-36 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Multi-Color Ambient Glows */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] h-[350px] bg-gradient-to-r from-blue-600/15 via-[#0052FF]/20 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-[-10%] w-[450px] h-[450px] bg-[#0052FF]/15 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-24 md:space-y-32">

        {/* ── 01: HERO / WHO WE ARE HEADER ── */}
        <section className="text-center max-w-4xl mx-auto pt-4 md:pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/80 mb-6 backdrop-blur-md">
            <Sparkles size={13} className="text-[#0052FF]" />
            <span>ABOUT GENFREX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-8">
            Digital Solutions, Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0052FF]">Skilled Talent</span>
          </h1>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#131725]/80 border border-white/10 shadow-2xl backdrop-blur-md text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00D4FF] to-[#0052FF]" />

            <span className="text-xs font-semibold tracking-widest text-[#00D4FF] uppercase block mb-3">
              WHO WE ARE
            </span>
            <p className="text-lg sm:text-2xl text-white/90 font-light leading-relaxed mb-6">
              <strong className="font-semibold text-white">GENFREX</strong> is a digital growth and talent ecosystem designed to connect businesses with the right digital solutions, technology, and talent.
            </p>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              We help businesses build their digital presence, improve their online visibility, develop technology solutions, and access skilled digital professionals for their evolving needs.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              {['Digital Presence', 'Online Visibility', 'Technology Solutions', 'Skilled Freelancers', 'Sustainable Growth'].map((tag) => (
                <span key={tag} className="text-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02: DUAL VISION & MISSION (RADICALSTART STYLE CARDS) ── */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-2">
              OUR GUIDING NORTH STAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#12141A] to-[#0B0C10] border border-white/10 relative overflow-hidden group hover:border-[#0052FF]/50 transition-all duration-300 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:scale-110 transition-transform">
                <Compass size={28} />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#00D4FF] uppercase block mb-3">
                01 • OUR VISION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Creating Limitless Opportunities
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                "To build a connected digital ecosystem where businesses, technology, freelancers, and digital talent can create limitless opportunities together."
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#12141A] to-[#0B0C10] border border-white/10 relative overflow-hidden group hover:border-[#00D4FF]/50 transition-all duration-300 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#0052FF] uppercase block mb-3">
                02 • OUR MISSION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Empowering Businesses Everywhere
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                "To empower businesses with accessible digital solutions and connect them with the right talent to achieve sustainable digital growth."
              </p>
            </div>
          </div>
        </section>

        {/* ── 03: OUR BRAND PHILOSOPHY (GEN + FRE + X) ── */}
        <section className="relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-2">
              THE FORMULA FOR GROWTH
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Brand Philosophy
            </h2>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm md:text-base font-bold text-white">
              <span className="text-[#FFFFFF]">GEN</span>
              <span className="text-white/40">+</span>
              <span className="text-[#0052FF]">FRE</span>
              <span className="text-white/40">+</span>
              <span className="text-[#00D4FF]">X</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Card 1: GEN (White / Silver from Logo) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/15 hover:border-white/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#FFFFFF] tracking-tighter">
                    GEN
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                    PILLAR 01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  GenZ
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Infusing digital-native creativity, modern cultural fluency, and rapid adoption of cutting-edge technologies to keep brands ahead of evolving trends.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/80 font-medium">
                <Sparkles size={14} className="text-white" />
                <span>GenZ Innovation & Mindset</span>
              </div>
            </div>

            {/* Card 2: FRE (Electric Royal Blue from Logo) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-[#0052FF]/25 hover:border-[#0052FF]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#0052FF] tracking-tighter">
                    FRE
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#0052FF] font-semibold">
                    PILLAR 02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Freelancing
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Connecting organizations directly with specialized, pre-vetted freelance talent, creatives, and technical builders to scale capabilities dynamically.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#0052FF] font-medium">
                <Users size={14} className="text-[#0052FF]" />
                <span>Freelance Talent Network</span>
              </div>
            </div>

            {/* Card 3: X (Luminous Cyan from Logo) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-[#00D4FF]/25 hover:border-[#00D4FF]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#00D4FF] tracking-tighter">
                    X
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-semibold">
                    MULTIPLIER
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Experience
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Crafting transformative digital experiences, end-to-end execution, and compounding growth that turns bold ideas into measurable reality.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#00D4FF] font-medium">
                <InfinityIcon size={14} className="text-[#00D4FF]" />
                <span>Transformative Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04: WHAT WE DELIVER (CORE ECOSYSTEM PILLARS) ── */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-2">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              How GENFREX Drives Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF]/50 transition-all flex items-start gap-5 shadow-lg shadow-[#0052FF]/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#00D4FF] flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 09 — OUR UNIQUE VALUE PROPOSITION ── */}
        <section className="relative">
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#101424] border border-[#0052FF]/25 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-2">
                OUR UNIQUE VALUE PROPOSITION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Connecting Potential. Creating Opportunities.
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Instead of treating digital services and talent as separate requirements, GENFREX creates a connected ecosystem where businesses access both digital solutions and the talent required to execute them.
              </p>
            </div>

            {/* Step Flow Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
              {[
                { step: "01", label: "BUSINESSES", desc: "Vision & Goals" },
                { step: "02", label: "DIGITAL REQUIREMENTS", desc: "Scope & Objectives" },
                { step: "03", label: "TECHNOLOGY + TALENT", desc: "Connected Squads" },
                { step: "04", label: "EXECUTION", desc: "Quality & Milestones" },
                { step: "05", label: "DIGITAL GROWTH", desc: "Sustainable Scale" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#181E30] border border-[#0052FF]/20 flex flex-col justify-between hover:border-[#0052FF]/50 transition-all text-center relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#0052FF] px-2 py-0.5 rounded bg-[#0052FF]/10 border border-[#0052FF]/20">
                      PHASE {item.step}
                    </span>
                    {idx < 4 && (
                      <span className="hidden lg:block text-white/30 text-xs font-mono">→</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide mb-1 group-hover:text-[#00D4FF] transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-white/60 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ── 05: PEOPLE AT GENFREX (MATCHING RADICALSTART REFERENCE) ── */}
        <section className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              People at GENFREX, shaping the future
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light">
              Happy employees make better products.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Row 1: Directors */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 max-w-4xl mx-auto">
              {directors.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center group w-28 sm:w-32">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#0052FF] via-[#00D4FF] to-[#0052FF] shadow-lg shadow-[#0052FF]/25 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#131725] flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0052FF] to-[#00D4FF] text-white font-extrabold text-2xl select-none">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center text-white shadow-md shadow-blue-500/25 transition-transform hover:scale-115"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={11} className="fill-current" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-3.5 group-hover:text-[#00D4FF] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: Team Members */}
            {managers && managers.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 max-w-5xl mx-auto">
                {managers.map((member, i) => (
                  <div key={i} className="flex flex-col items-center text-center group w-28 sm:w-32">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#0052FF] via-[#00D4FF] to-[#0052FF] shadow-lg shadow-[#0052FF]/25 transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#131725] flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0052FF] to-[#00D4FF] text-white font-extrabold text-2xl select-none">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center text-white shadow-md shadow-blue-500/25 transition-transform hover:scale-115"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={11} className="fill-current" />
                        </a>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-3.5 group-hover:text-[#00D4FF] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-white/60 font-light mt-0.5">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ──  CALL TO ACTION ── */}
        <section className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0A0B0E] border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0052FF]/15 blur-[100px] pointer-events-none rounded-full" />

          <span className="text-xs font-semibold tracking-widest text-[#00D4FF] uppercase block mb-3">
            START YOUR JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto mb-6">
            Ready to Connect with the GENFREX Ecosystem?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto mb-8">
            Whether you need comprehensive digital transformation, high-impact marketing, or specialized talent, we are here to make it happen.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn btn-primary px-8 py-3.5 text-sm font-medium flex items-center gap-2 shadow-lg shadow-[#0052FF]/30"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="btn btn-ghost px-6 py-3.5 text-sm font-medium border-white/15 hover:border-white/40 text-white/90"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
