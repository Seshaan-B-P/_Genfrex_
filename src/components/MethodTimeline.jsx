import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { methodSteps } from '../data/method';

export default function MethodTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = methodSteps[activeStepIndex];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[#050505] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-blue uppercase">
                // SYSTEMIZED EXECUTION
              </span>
              <div className="h-[1px] w-12 bg-brand-blue/30" />
            </div>
            <h2 className="font-display font-extrabold text-section-title text-white tracking-tight">
              THE GENFREX METHOD
            </h2>
          </div>
          <p className="text-neutral-400 font-light text-sm md:text-base max-w-md">
            An eight-stage operational protocol designed to eliminate technical debt, shorten development cycles, and guarantee market traction.
          </p>
        </div>

        {/* Step Progress Bar & Interactive Step Indicators */}
        <div className="border-t border-b border-white/[0.1] py-4 mb-12 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[720px] gap-2">
            {methodSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="hover"
                  className={`group flex items-center gap-2 py-2 px-3 text-left transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'border-b-2 border-brand-blue text-white'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-brand-blue' : 'text-neutral-500'}`}>
                    {step.step}
                  </span>
                  <span className="font-display text-xs font-medium tracking-wider uppercase whitespace-nowrap">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Spotlight Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[380px] bg-[#09090d] border border-white/[0.08] p-8 md:p-14 relative overflow-hidden">
          
          {/* Subtle oversized background step number */}
          <div className="absolute right-4 bottom-0 select-none pointer-events-none font-display font-black text-[14rem] md:text-[22rem] text-white/[0.03] leading-none -mb-12">
            {activeStep.step}
          </div>

          {/* Left: Step Description & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue border border-brand-blue/30 font-mono text-xs tracking-widest">
                STAGE {activeStep.step} // 08
              </span>
              <span className="font-mono text-xs text-neutral-400">
                TIMEFRAME: {activeStep.duration}
              </span>
            </div>

            <h3 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              {activeStep.title} — {activeStep.subtitle}
            </h3>

            <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed">
              {activeStep.description}
            </p>

            {/* Philosophical focus quote */}
            <div className="border-l-2 border-brand-blue pl-4 py-1 italic text-sm text-neutral-400 font-light">
              "{activeStep.focus}"
            </div>
          </div>

          {/* Right: Deliverables Matrix & Controls (5 Cols) */}
          <div className="lg:col-span-5 relative z-10 bg-black/50 border border-white/10 p-6 md:p-8 space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase block mb-2">
                CRITICAL STAGE ARTIFACTS
              </span>
              <p className="font-mono text-sm text-white leading-relaxed">
                {activeStep.artifacts}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(prev - 1, 0))}
                className="text-xs font-mono tracking-widest text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400"
              >
                &larr; PREVIOUS
              </button>

              <div className="font-mono text-xs text-brand-blue">
                {activeStepIndex + 1} OF {methodSteps.length}
              </div>

              <button
                disabled={activeStepIndex === methodSteps.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(prev + 1, methodSteps.length - 1))}
                className="text-xs font-mono tracking-widest text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400"
              >
                NEXT STAGE &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
