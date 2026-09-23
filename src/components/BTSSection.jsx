import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const btsItems = [
  {
    title: 'AA Garden — Commercial Production',
    location: 'Studio Stage 01',
    img: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Ananta Living — Architecture Shoot',
    location: 'Bangalore On-Location',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Casagrand Cheers — Brand Film',
    location: 'Chennai Sets',
    img: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Tour The Paradise — Mumbai',
    location: 'Cinematic Travel Sprint',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Sukraa Gold — Macro Jewelry Lighting',
    location: 'High-Speed Cine Camera Rig',
    img: 'https://images.unsplash.com/photo-1533518463841-d62e1fc91373?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Life At Its Best — Docu-Series',
    location: 'Field Recording & Sound Mix',
    img: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop'
  }
];

export default function BTSSection({ onOpenQuote }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.offsetWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#0B0B0D] border-t border-white/[0.06]" id="bts">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
          <div>
            <span className="eyebrow">Behind the scenes</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
              Lights, camera… a lot more than just action.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="carousel-btn"
              aria-label="Previous BTS slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="carousel-btn"
              aria-label="Next BTS slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* BTS Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {btsItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[360px] md:min-w-[400px] flex-shrink-0 snap-start relative rounded-2xl overflow-hidden group border border-white/10 aspect-[4/3] bg-black cursor-pointer shadow-lg"
              onClick={onOpenQuote}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium tracking-wider text-[#0052FF] uppercase block mb-1">
                    {item.location}
                  </span>
                  <h4 className="text-white text-base font-medium leading-snug group-hover:text-[#0052FF] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#0052FF] transition-all flex-shrink-0 ml-3">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <p className="text-[#9A9A9A] text-sm">
            Go behind our cameras, live sets, color grading bays, and tech architecture sprints.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn btn-light text-xs sm:text-sm py-2.5 px-6 flex items-center gap-2"
          >
            <span>Partner With Our Crew</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
