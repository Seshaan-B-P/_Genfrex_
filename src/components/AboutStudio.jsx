import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutStudio() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle Ambient Glow behind Right Media */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-[#0052FF]/[0.05] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Narrative & Manifesto matching reference design */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-[0.25em] text-[#0052FF] uppercase font-bold">
                — ABOUT GENFREX
              </span>
              <div className="h-[1px] w-12 bg-[#0052FF]" />
            </div>

            {/* Headline matching user screenshot */}
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.14] text-white tracking-tight">
              Taking Your Brand <br />
              Beyond Attention to <br />
              Action.
            </h2>

            {/* Paragraph block */}
            <div className="space-y-4 text-sm md:text-[15px] text-[#A0A0A0] font-light leading-[1.8] max-w-xl">
              <p> GENFREX is a modern digital services and talent ecosystem built to help businesses grow through technology, digital expertise, and skilled professionals. We connect businesses with the right digital solutions and the right people to turn requirements into meaningful opportunities and results. </p>

              <p> We specialize in Digital Marketing, SEO &amp; Social Media Marketing, Website Development, WordPress Development, and Freelancing &amp; Talent Connection. Beyond delivering digital services, we are building a growing platform that connects businesses and clients with freelancers and professionals based on their skills, experience, availability, requirements, and budget. </p>

              <p> Every connection is built around opportunity, collaboration, and growth. From students and fresh graduates to freelancers and experienced professionals, Genfrex brings talent and businesses together to create meaningful work. Because we believe great results happen when the right people connect with the right opportunities. </p>
            </div>

            {/* Explore Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-white text-black text-xs tracking-wider uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 rounded-none shadow-lg hover:shadow-[0_0_25px_rgba(0,82,255,0.35)]"
              >
                <span>EXPLORE OUR STORY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Rounded Cinematic Image Frame with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#09090D] group">
              {/* Image in Original Full Color with Smooth Zoom on Hover */}
              <div className="aspect-[4/3] sm:aspect-[16/13] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop"
                  alt="GENFREX Creative Production & Studio Set"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Gradient Vignette for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-50 pointer-events-none" />

              {/* Floating Pill Badge at Bottom-Left matching reference */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2.5 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs text-white font-medium shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#0052FF] shadow-[0_0_8px_rgba(0,82,255,0.9)] animate-pulse" />
                <span>AV &amp; Digital-First Production</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
