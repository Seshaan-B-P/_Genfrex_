import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';

export default function CinematicShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const nx = ((clientX - left) / width - 0.5) * 20;
    const ny = ((clientY - top) / height - 0.5) * 20;
    setMousePos({ x: nx, y: ny });
  };

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        onClick={() => setModalOpen(true)}
        data-cursor="play"
        className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer group"
      >
        {/* Cinematic Media Layer */}
        <motion.div
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
          className="absolute inset-[-40px] pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop"
            alt="Cinematic production media"
            className="w-full h-full object-cover grayscale contrast-125 opacity-45 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-[#0052FF]/10 mix-blend-color" />
        </motion.div>

        {/* Center Typography & Showreel Trigger */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center space-y-8 select-none">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#0052FF] uppercase font-medium">
            <span>SHOWREEL — 2026 EDITION</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white">
            WE DON'T JUST <br />
            MAKE THINGS <br />
            LOOK GOOD. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]">
              WE MAKE THEM MEAN SOMETHING.
            </span>
          </h2>

          {/* Circular Play Trigger Button */}
          <div className="inline-flex items-center gap-4 px-7 py-4 bg-white/10 hover:bg-[#0052FF] text-white backdrop-blur-md border border-white/20 hover:border-[#0052FF] text-xs tracking-[0.2em] uppercase transition-all duration-300 group-hover:scale-105 font-bold hover:shadow-[0_0_25px_rgba(0,82,255,0.4)]">
            <Play className="w-4 h-4 fill-current" />
            <span>WATCH SHOWREEL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Corner Studio Coordinates */}
        <div className="absolute bottom-6 left-6 text-[10px] text-[#666666] tracking-widest uppercase font-medium hidden sm:block">
          CINEMATIC FRAME — 4K LOG
        </div>
        <div className="absolute bottom-6 right-6 text-[10px] text-[#666666] tracking-widest uppercase font-medium hidden sm:block">
          DURATION 01:24
        </div>
      </section>

      {/* Fullscreen Video / Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(false);
              }}
              className="absolute top-8 right-8 p-3 text-white/70 hover:text-white border border-white/20 transition-colors"
              aria-label="Close Showreel"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full aspect-video bg-[#0c0c10] border border-white/20 relative flex flex-col items-center justify-center p-8 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-full border-2 border-[#0052FF] flex items-center justify-center text-[#0052FF] mb-6 animate-pulse shadow-[0_0_20px_rgba(0,82,255,0.4)]">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                GENFREX CINEMATIC SHOWREEL
              </h3>
              <p className="text-xs text-[#A0A0A0] max-w-md font-medium">
                Production reel featuring architectural case studies, high-concurrency software architectures, and bespoke brand films.
              </p>

              <div className="mt-8 font-mono text-[11px] text-[#2D8CFF] tracking-widest uppercase">
                [HIGH DEFINITION AUDIO &bull; STEREO MIX]
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
