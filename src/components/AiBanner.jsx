import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AiBanner({ onScrollToWorkflow }) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="ai-banner border border-white/10 rounded-3xl p-8 sm:p-14 md:p-20 text-center relative overflow-hidden bg-gradient-to-b from-[#141418] to-[#0A0A0C] hover:border-[#0052FF]/40 transition-colors shadow-2xl"
        >
          {/* Subtle Electric Blue Ambient Light with pulsing animation */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.22, 0.12]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0052FF]/20 blur-[90px] pointer-events-none rounded-full"
          />

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase inline-flex items-center gap-1.5 mb-3"
          >
            <Sparkles size={13} className="text-[#00D4FF]" />
            <span>THE GENFREX ADVANTAGE • CONNECTED ECOSYSTEM</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extralight tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8"
          >
            Connecting Potential. <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#0052FF]">Creating Opportunities.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Instead of treating digital services and talent as separate requirements, GENFREX creates a connected ecosystem where businesses access both digital solutions and the talent required to execute them.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            type="button"
            onClick={onScrollToWorkflow}
            className="btn btn-ghost px-7 py-3 text-sm font-medium inline-flex items-center gap-2 hover:border-[#0052FF] hover:bg-[#0052FF]/10 transition-all cursor-pointer shadow-lg shadow-[#0052FF]/10"
          >
            <span>See how we work</span>
            <ArrowRight size={16} className="text-[#0052FF] group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
