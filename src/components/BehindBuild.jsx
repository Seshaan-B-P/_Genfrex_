import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function BehindBuild() {
  const galleryRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      number: '01',
      title: 'CONCEPT',
      description: 'Dissecting core problem spaces, testing mathematical feasibility, and interrogating assumptions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
      aspect: 'aspect-[4/5]',
    },
    {
      number: '02',
      title: 'DIRECTION',
      description: 'Aligning technical topology with creative tone of voice, typographic systems, and architectural standards.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=900&auto=format&fit=crop',
      aspect: 'aspect-[16/10]',
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'Precision tokenized libraries, tactile micro-interactions, and dark mode ergonomics engineered for clarity.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop',
      aspect: 'aspect-[1/1]',
    },
    {
      number: '04',
      title: 'BUILD',
      description: 'Distributed micro-frontends, high-throughput APIs, automated test suites, and zero-defect CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
      aspect: 'aspect-[16/9]',
    },
    {
      number: '05',
      title: 'LAUNCH',
      description: 'Zero-downtime canary rollouts, multi-region DNS cutovers, and real-time observability telemetry.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
      aspect: 'aspect-[4/3]',
    },
  ];

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const amount = direction === 'left' ? -420 : 420;
      galleryRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="behind-the-build"
      className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 border-b border-white/[0.08] pb-12">
          <div>
            <span className="text-xs tracking-[0.25em] text-[#A0A0A0] uppercase block mb-4 font-medium">
              06 — PRODUCTION DOCUMENTARY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              BEHIND <br />
              THE BUILD
            </h2>
          </div>

          <div className="flex items-end justify-between md:justify-end gap-6 w-full md:w-auto">
            <p className="text-base text-[#A0A0A0] font-light max-w-xs leading-relaxed">
              Ideas are only the beginning. An immersive journey from concept to deployment.
            </p>

            {/* Desktop Gallery Controls */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scrollGallery('left')}
                data-cursor="hover"
                className="w-12 h-12 border border-white/20 hover:border-[#0052FF] hover:bg-[#0052FF]/10 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous Stage"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                data-cursor="hover"
                className="w-12 h-12 border border-white/20 hover:border-[#0052FF] hover:bg-[#0052FF]/10 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next Stage"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery: Horizontal on Desktop, Vertical on Mobile */}
        <div
          ref={galleryRef}
          className="flex flex-col md:flex-row gap-8 overflow-x-auto scrollbar-none pb-6 select-none"
        >
          {stages.map((stage, idx) => (
            <div
              key={stage.number}
              className="w-full md:w-[420px] shrink-0 border border-white/10 bg-[#08080c] p-6 space-y-6 group hover:border-[#0052FF]/60 hover:shadow-[0_0_25px_rgba(0,82,255,0.15)] transition-all duration-500"
            >
              {/* Media with distinct aspect ratio */}
              <div className={`overflow-hidden bg-[#0a0a0f] border border-white/10 ${stage.aspect} relative`}>
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] text-[#0052FF] tracking-widest uppercase border border-white/10 font-bold shadow-md">
                  STAGE {stage.number}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#0052FF] transition-colors">
                    {stage.title}
                  </h3>
                  <span className="text-xs text-[#666666] font-medium">0{idx + 1} / 05</span>
                </div>
                <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
