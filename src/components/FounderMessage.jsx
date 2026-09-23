import React from 'react';
import { Play } from 'lucide-react';

export default function FounderMessage({ onOpenVideo }) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#0E0E10] border-y border-white/[0.06]" id="founder">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Video Side */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[4/3] flex items-center justify-center">
              <img
                src="/CEO.jpeg"
                alt="Founder & Leadership"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              <button
                type="button"
                onClick={() => onOpenVideo('/About Genfrex.mp4', 'Founder’s Message — Dharshan P S')}
                data-cursor="play"
                className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/40 hover:border-white text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                aria-label="Play founder message"
              >
                <Play size={26} className="ml-1 fill-white text-white drop-shadow-md" />
              </button>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-6">
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
                <span className="block text-white font-medium text-lg">Dharshan P S</span>
                <span className="block text-[#9A9A9A] text-sm font-light">Founder · Agency Head · Technology & Creative Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
