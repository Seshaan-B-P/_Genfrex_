import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Lock,
  ArrowUpRight
} from 'lucide-react';

// --- ANIMATION VARIANTS (Cinematic & Restrained) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export default function AboutPage() {
  useEffect(() => {
    document.title = "About GENFREX | Digital Growth, Technology & Talent Ecosystem";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Learn about GENFREX — our mission, vision, brand philosophy, capabilities, and the team driving digital growth and technology solutions.";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
      image: "/CEO-avatar.jpg",
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
      image: "/Seshaan-avatar.jpg",
      linkedin: "https://www.linkedin.com/in/seshaanbp/"
    }
  ];

  return (
    <main className="bg-[#0C0E17] text-[#FFFFFF] min-h-screen pt-28 md:pt-36 pb-24 px-4 sm:px-6 relative overflow-x-hidden selection:bg-[#0052FF] selection:text-white">
      {/* Background Multi-Color Ambient Glows with Floating Breathing Animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] h-[380px] bg-gradient-to-r from-blue-600/20 via-[#0052FF]/25 to-cyan-500/15 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#0052FF]/20 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-24 md:space-y-32">

        {/* ── 01: HERO / WHO WE ARE HEADER (Animated Entrance) ── */}
        <section className="text-center max-w-4xl mx-auto pt-4 md:pt-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Eyebrow Pill */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#0052FF] uppercase backdrop-blur-md">
              <Sparkles size={13} className="text-[#0052FF] animate-pulse" />
              <span>ABOUT GENFREX</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-tight"
            >
              Digital Solutions, Technology & <br className="hidden sm:block" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">
                Skilled Talent
              </span>
            </motion.h1>

            {/* Who We Are Box with Hover Glow */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#10131F]/90 border border-white/10 shadow-2xl backdrop-blur-xl text-left relative overflow-hidden group hover:border-[#0052FF]/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00D4FF] via-[#0052FF] to-blue-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-3 font-semibold">
                WHO WE ARE
              </span>
              <p className="text-lg sm:text-2xl text-white/90 font-light leading-relaxed mb-6">
                <strong className="font-semibold text-white">GENFREX</strong> is a digital growth and talent ecosystem designed to connect businesses with the right digital solutions, technology, and talent.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We help businesses build their digital presence, improve their online visibility, develop technology solutions, and access skilled digital professionals for their evolving needs.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {['Digital Presence', 'Online Visibility', 'Technology Solutions', 'Skilled Freelancers', 'Sustainable Growth'].map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.08 }}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 font-mono"
                  >
                    ✦ {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 02: DUAL VISION & MISSION (Animated Cards with Hover Tilt) ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-2 font-semibold">
              OUR GUIDING NORTH STAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extralight tracking-tight text-white uppercase">
              Vision & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0052FF]">Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141622] to-[#0C0E17] border border-white/10 relative overflow-hidden group hover:border-[#0052FF]/60 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052FF]/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] mb-6 group-hover:scale-110 group-hover:border-[#0052FF] transition-all duration-300">
                <Compass size={28} />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-3">
                01 • OUR VISION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Creating Limitless Opportunities
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                "To build a connected digital ecosystem where businesses, technology, freelancers, and digital talent can create limitless opportunities together."
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#141622] to-[#0C0E17] border border-white/10 relative overflow-hidden group hover:border-[#00D4FF]/60 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:scale-110 group-hover:border-[#00D4FF] transition-all duration-300">
                <Target size={28} />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D4FF] uppercase block mb-3">
                02 • OUR MISSION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Empowering Businesses Everywhere
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                "To empower businesses with accessible digital solutions and connect them with the right talent to achieve sustainable digital growth."
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 03: BRAND PHILOSOPHY (GEN + FRE + X with Staggered Entrance) ── */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-2 font-semibold">
              THE FORMULA FOR GROWTH
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 uppercase">
              Our Brand <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">Philosophy</span>
            </h2>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm md:text-base font-bold text-white shadow-lg">
              <span className="text-[#FFFFFF]">GEN</span>
              <span className="text-white/40">+</span>
              <span className="text-[#0052FF]">FRE</span>
              <span className="text-white/40">+</span>
              <span className="text-[#00D4FF]">X</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Card 1: GEN */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-white/15 hover:border-white/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#FFFFFF] tracking-tighter group-hover:scale-105 transition-transform">
                    GEN
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                    PILLAR 01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  GenZ
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Infusing digital-native creativity, modern cultural fluency, and rapid adoption of cutting-edge technologies to keep brands ahead of evolving trends.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/80 font-medium">
                <Sparkles size={14} className="text-white" />
                <span>GenZ Innovation & Mindset</span>
              </div>
            </motion.div>

            {/* Card 2: FRE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-[#0052FF]/25 hover:border-[#0052FF]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group shadow-[#0052FF]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#0052FF] tracking-tighter group-hover:scale-105 transition-transform">
                    FRE
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#0052FF] font-semibold">
                    PILLAR 02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Freelancing
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Connecting organizations directly with specialized, pre-vetted freelance talent, creatives, and technical builders to scale capabilities dynamically.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#0052FF] font-medium">
                <Users size={14} className="text-[#0052FF]" />
                <span>Freelance Talent Network</span>
              </div>
            </motion.div>

            {/* Card 3: X */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#131725] border border-[#00D4FF]/25 hover:border-[#00D4FF]/70 transition-all duration-300 shadow-xl flex flex-col justify-between group shadow-[#00D4FF]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#00D4FF] tracking-tighter group-hover:scale-105 transition-transform">
                    X
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] font-semibold">
                    MULTIPLIER
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Experience
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Crafting transformative digital experiences, end-to-end execution, and compounding growth that turns bold ideas into measurable reality.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#00D4FF] font-medium">
                <InfinityIcon size={14} className="text-[#00D4FF]" />
                <span>Transformative Experience</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 04: WHAT WE DELIVER (Ecosystem Pillars with Smooth Grid Reveal) ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-2 font-semibold">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extralight tracking-tight text-white uppercase">
              How GENFREX <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0052FF]">Drives Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-3xl bg-[#131725] border border-[#0052FF]/20 hover:border-[#0052FF]/55 transition-all duration-300 flex items-start gap-5 shadow-lg shadow-[#0052FF]/5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] flex-shrink-0 group-hover:scale-110 group-hover:border-[#0052FF] transition-all">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0052FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── 05: UNIQUE VALUE PROPOSITION (Step Flow with Micro-Animations) ── */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#101424] border border-[#0052FF]/25 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono tracking-widest text-[#0052FF] uppercase block mb-2 font-semibold">
                OUR UNIQUE VALUE PROPOSITION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white tracking-tight mb-4 uppercase">
                Connecting Potential. <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0052FF]">Creating Opportunities.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Instead of treating digital services and talent as separate requirements, GENFREX creates a connected ecosystem where businesses access both digital solutions and the talent required to execute them.
              </p>
            </div>

            {/* 5-Phase Step Flow Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
              {[
                { step: "01", label: "BUSINESSES", desc: "Vision & Goals" },
                { step: "02", label: "DIGITAL REQUIREMENTS", desc: "Scope & Objectives" },
                { step: "03", label: "TECHNOLOGY + TALENT", desc: "Connected Squads" },
                { step: "04", label: "EXECUTION", desc: "Quality & Milestones" },
                { step: "05", label: "DIGITAL GROWTH", desc: "Sustainable Scale" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[#181E30] border border-[#0052FF]/20 flex flex-col justify-between hover:border-[#0052FF]/60 hover:bg-[#1C2339] transition-all text-center relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-[#0052FF] px-2 py-0.5 rounded bg-[#0052FF]/10 border border-[#0052FF]/20">
                      PHASE {item.step}
                    </span>
                    {idx < 4 && (
                      <span className="hidden lg:block text-neutral-500 text-xs font-mono group-hover:text-white transition-colors">→</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide mb-1 group-hover:text-[#00D4FF] transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 06: PEOPLE AT GENFREX (Team Showcase with Glowing Rings) ── */}
        <section className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-extralight tracking-tight text-white mb-3 uppercase">
              People at <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">GENFREX</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Happy innovators build extraordinary digital experiences.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {/* Row 1: Directors */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 max-w-4xl mx-auto">
              {directors.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center group w-32 sm:w-40 cursor-pointer"
                >
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 aspect-square shrink-0 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-[#0052FF] via-[#00D4FF] to-[#0052FF] shadow-lg shadow-[#0052FF]/30 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#131725] flex items-center justify-center">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0052FF] to-[#00D4FF] text-white font-extrabold text-3xl sm:text-4xl select-none">
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center text-white shadow-md shadow-blue-500/25 transition-transform hover:scale-125"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={13} className="fill-current" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-3.5 group-hover:text-[#00D4FF] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Team Members */}
            {managers && managers.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 max-w-5xl mx-auto">
                {managers.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center group w-32 sm:w-40 cursor-pointer"
                  >
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 aspect-square shrink-0 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-[#0052FF] via-[#00D4FF] to-[#0052FF] shadow-lg shadow-[#0052FF]/30 transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#131725] flex items-center justify-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0052FF] to-[#00D4FF] text-white font-extrabold text-3xl sm:text-4xl select-none">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center text-white shadow-md shadow-blue-500/25 transition-transform hover:scale-125"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={13} className="fill-current" />
                        </a>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mt-3.5 group-hover:text-[#00D4FF] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 07: CLOSING CALL TO ACTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-[#141622] to-[#0A0B10] border border-white/10 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0052FF]/15 blur-[120px] pointer-events-none rounded-full" />

          <span className="text-xs font-mono font-semibold tracking-widest text-[#0052FF] uppercase block mb-3">
            START YOUR JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight max-w-3xl mx-auto mb-6 uppercase">
            Ready to Connect with the <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0052FF]">GENFREX Ecosystem?</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto mb-8">
            Whether you need comprehensive digital transformation, high-impact marketing, or specialized talent, we are here to make it happen.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#1E6FFF] text-white text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold flex items-center gap-2 shadow-xl shadow-[#0052FF]/30 transition-all hover:-translate-y-0.5"
            >
              <span>Get in Touch ↗</span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:border-white text-white text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold transition-all hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
