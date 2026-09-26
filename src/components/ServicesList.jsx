import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Megaphone, Palette, Code, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Growth',
    desc: 'Helping businesses build visibility, reach their target audience and grow online through search authority, high-impact marketing, and conversion-focused strategies.'
  },
  {
    icon: Code,
    title: 'Web & Technology',
    desc: 'Creating modern websites, robust web applications, API integrations, and scalable digital infrastructures designed around business objectives.'
  },
  {
    icon: Search,
    title: 'SEO & AI Search',
    desc: 'Preparing websites for the changing AI-driven search ecosystem through On-Page & Technical SEO, AI Overviews, LLM search visibility, and structured content.'
  },
  {
    icon: Palette,
    title: 'Creative & Content',
    desc: 'Creating SEO articles, long-form content, social media creatives, and short-form video assets that strengthen brand communication.'
  },
  {
    icon: Megaphone,
    title: 'Talent Solutions',
    desc: 'Connecting businesses with vetted digital professionals—web developers, marketers, SEO specialists, and creative talent for flexible project-based requirements.'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Modern digital workflows powered by AI, analytics, workflow automation, and productivity tools while maintaining human oversight and strict quality standards.'
  }
];

export default function ServicesList({ onOpenQuote }) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6" id="services">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-head mb-12"
        >
          <span className="eyebrow">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
            What we do best.
          </h2>
          <p className="lead mt-3 text-base sm:text-lg">
            We combine strategy, creativity, technology, and data to help brands become more visible, connect with the right audiences, and turn digital attention into measurable growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-[#141416] border border-white/10 rounded-2xl p-7 hover:border-[#0052FF]/60 hover:bg-[#18181D] hover:shadow-xl hover:shadow-[#0052FF]/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0052FF]/15 border border-[#0052FF]/30 flex items-center justify-center text-[#0052FF] mb-6 group-hover:scale-110 group-hover:bg-[#0052FF] group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#0052FF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-[#9A9A9A] text-sm font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="text-xs font-medium text-white/70 group-hover:text-[#0052FF] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-mono text-[#555]">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
