import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AiBanner({ onScrollToWorkflow }) {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6" id="why-genfrex">
      <div className="max-w-[1200px] mx-auto">
        <div className="ai-banner border border-white/10 rounded-3xl p-8 sm:p-14 md:p-20 text-center relative overflow-hidden bg-gradient-to-b from-[#141418] to-[#0A0A0C]">
          {/* Subtle Electric Blue Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0052FF]/15 blur-[90px] pointer-events-none rounded-full" />

          <span className="text-xs font-semibold tracking-widest text-[#0052FF] uppercase block mb-3">
            WHY GENFREX • UNIQUE VALUE PROPOSITION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight tracking-tight text-white max-w-4xl mx-auto leading-tight mb-8">
            Connecting Potential. Creating Opportunities.
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Instead of treating digital services and talent as separate requirements, GENFREX creates a connected ecosystem where businesses access both digital solutions and the talent required to execute them.
          </p>

          <button
            type="button"
            onClick={onScrollToWorkflow}
            className="btn btn-ghost px-7 py-3 text-sm font-medium inline-flex items-center gap-2 hover:border-[#0052FF] hover:bg-[#0052FF]/10 transition-all"
          >
            <span>See how we work</span>
            <ArrowRight size={16} className="text-[#0052FF]" />
          </button>
        </div>
      </div>
    </section>
  );
}
