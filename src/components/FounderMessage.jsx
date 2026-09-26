import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function FounderMessage({ onOpenVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  // Guarantee that the video is strictly muted without audio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [isPlaying]);

  const handleStartVideo = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handleTogglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleResetToPhoto = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#0E0E10] border-y border-white/[0.06] overflow-hidden" id="founder">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Video / Photo Card Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 hover:border-[#0052FF]/50 shadow-2xl shadow-black/80 bg-black aspect-[4/5] max-h-[580px] flex items-center justify-center transition-colors duration-300">

              {!isPlaying ? (
                /* Default View: Full Portrait CEO Image with Play Button */
                <>
                  <img
                    src="/CEO.jpeg"
                    alt="Dharshan - Founder & Leadership"
                    className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                  {/* Transparent Glass Play Button over Founder Image */}
                  <button
                    type="button"
                    onClick={handleStartVideo}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 hover:border-white text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-10 cursor-pointer"
                    aria-label="Play founder video inside card"
                  >
                    <Play size={28} className="ml-1 fill-white text-white drop-shadow-lg" />
                  </button>

                  {/* Bottom Founder Tag */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/90">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                    <span>DHARSHAN // FOUNDER</span>
                  </div>
                </>
              ) : (
                /* Inline Video View: Plays directly inside this card with NO audio */
                <div
                  className="relative w-full h-full cursor-pointer group/video"
                  onClick={handleTogglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/About Genfrex.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={handleVideoEnded}
                    onVolumeChange={(e) => { e.target.muted = true; }}
                    className="w-full h-full object-cover select-none"
                  />

                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Playing Live Status Pill */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#0052FF]/30 text-[11px] font-mono text-white pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                    <span>{isPaused ? 'PAUSED' : 'PLAYING INLINE'}</span>
                  </div>

                  {/* Center Pause/Play Indicator when paused */}
                  {isPaused && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                        <Play size={24} className="ml-0.5 fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Card Controls: Toggle Pause & Back to Photo */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleTogglePlay}
                      className="w-8 h-8 rounded-full bg-black/80 hover:bg-[#0052FF] border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                      title={isPaused ? "Play video" : "Pause video"}
                    >
                      {isPaused ? <Play size={13} className="ml-0.5 fill-white" /> : <Pause size={13} />}
                    </button>

                    <button
                      type="button"
                      onClick={handleResetToPhoto}
                      className="px-3 py-1.5 rounded-full bg-black/80 hover:bg-[#0052FF] border border-white/20 text-[11px] font-medium text-white backdrop-blur-md flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                      title="Return to founder photo"
                    >
                      <RotateCcw size={12} />
                      <span>Photo</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0052FF]">
              LEADERSHIP PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
              Founder’s message
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
              Digital marketing is constantly changing.<br /><br />
              Platforms evolve.<br />
              Algorithms shift.<br />
              Consumer attention moves faster than ever.<br /><br />
              <strong className="text-white font-medium">But one question never changes:</strong>
            </p>
            <blockquote className="text-2xl sm:text-3xl font-extralight text-[#0052FF] border-l-2 border-[#0052FF] pl-5 my-4 italic">
              “How do we turn attention into meaningful action?”
            </blockquote>
            <p className="text-[#9A9A9A] font-light leading-relaxed text-base">
              At GENFREX, we believe great marketing sits at the intersection of strategy, creativity, technology, and human connection.
            </p>
            <p className="text-[#9A9A9A] font-light leading-relaxed text-base">
              Every campaign begins with understanding the audience, every creative has a purpose, and every digital solution is built to move a business forward.
            </p>
            <p className="text-[#9A9A9A] font-light leading-relaxed text-base">
              That belief shapes how we approach strategy, performance marketing, content, creative, technology, and AI — combining thoughtful ideas with disciplined execution to help brands become more visible, relevant, and ready to grow.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-white font-medium text-lg">Dharshan</span>
                <span className="block text-[#9A9A9A] text-sm font-light">Founder · Agency Head · Technology & Creative Director</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
