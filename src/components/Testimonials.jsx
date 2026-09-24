import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

const talksData = [
  {
    name: 'Pugazh',
    role: 'Actor & Comedian',
    videoId: '1fa64Pzjrcs',
    thumb: 'https://img.youtube.com/vi/1fa64Pzjrcs/maxresdefault.jpg'
  },
  {
    name: 'VTV Ganesh',
    role: 'Actor & Producer',
    videoId: 'STrAkUfE2S0',
    thumb: 'https://img.youtube.com/vi/STrAkUfE2S0/maxresdefault.jpg'
  },
  {
    name: 'K. S. Suchitra',
    role: 'Actor',
    videoId: '5FjE2gcsHbU',
    thumb: 'https://img.youtube.com/vi/5FjE2gcsHbU/maxresdefault.jpg'
  },
  {
    name: 'Vivek',
    role: 'Actor & Model',
    videoId: 'dGvd8OddLSA',
    thumb: 'https://img.youtube.com/vi/dGvd8OddLSA/maxresdefault.jpg'
  },
  {
    name: 'Mohan Ram',
    role: 'Actor',
    videoId: '0Wbp8GPJkCw',
    thumb: 'https://img.youtube.com/vi/0Wbp8GPJkCw/maxresdefault.jpg'
  },
  {
    name: 'Delhi Ganesh',
    role: 'Actor',
    videoId: '6fHCK-fcYIg',
    thumb: 'https://img.youtube.com/vi/6fHCK-fcYIg/maxresdefault.jpg'
  },
  {
    name: 'Sumaya',
    role: 'Actor & Model',
    videoId: 'C9r7jfIHx6k',
    thumb: 'https://img.youtube.com/vi/C9r7jfIHx6k/maxresdefault.jpg'
  },
  {
    name: 'Chitra Kumar',
    role: 'Actor',
    videoId: '4k3mKAMRb2M',
    thumb: 'https://img.youtube.com/vi/4k3mKAMRb2M/maxresdefault.jpg'
  }
];

export default function Testimonials({ onOpenVideo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = talksData.length;
  const [isHovered, setIsHovered] = useState(false);
  const isInteractingRef = useRef(false);
  const interactionTimerRef = useRef(null);
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);

  // Pause auto-scroll temporarily during manual interactions
  const pauseTemporarily = useCallback((duration = 4000) => {
    isInteractingRef.current = true;
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, duration);
  }, []);

  const prevSlide = useCallback(() => {
    pauseTemporarily();
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total, pauseTemporarily]);

  const nextSlide = useCallback(() => {
    pauseTemporarily();
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total, pauseTemporarily]);

  // Automatic horizontal scrolling
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!isInteractingRef.current) {
        setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, total]);

  // Touch navigation
  const handleTouchStart = (e) => {
    pauseTemporarily();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    else if (diff < -45) prevSlide();
    touchStartX.current = null;
  };

  // Mouse drag navigation for desktop
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    pauseTemporarily();
  };

  const handleMouseUp = (e) => {
    if (mouseStartX.current === null) return;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    mouseStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const activeItem = talksData[activeIndex];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#0C0E17] overflow-hidden border-t border-[#0052FF]/15" id="talks">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="section-head center mb-14 text-center">
          <span className="eyebrow block mb-2">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
            Hear it straight from the Hearts
          </h2>
        </div>

        {/* 3D Coverflow Container with Auto-scroll */}
        <div
          className="vtesti select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            mouseStartX.current = null;
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="vtesti-stage">
            {talksData.map((talk, idx) => {
              // Calculate circular distance relative to activeIndex
              let d = idx - activeIndex;
              while (d > total / 2) d -= total;
              while (d < -total / 2) d += total;

              let positionClass = '';
              if (d === 0) positionClass = 'is-active';
              else if (d === -1) positionClass = 'is-prev';
              else if (d === 1) positionClass = 'is-next';
              else if (d === -2) positionClass = 'is-prev-2';
              else if (d === 2) positionClass = 'is-next-2';

              return (
                <article
                  key={idx}
                  className={`vtesti-slide ${positionClass}`}
                  data-cursor={d === 0 ? "play" : "hover"}
                  onClick={() => {
                    if (d !== 0) {
                      setActiveIndex(idx);
                    }
                  }}
                  aria-label={`${talk.name} — ${talk.role}`}
                >
                  <div className="vtesti-media">
                    <img
                      src={talk.thumb}
                      alt={talk.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Central Play Button on Active Card */}
                    <button
                      className="vtesti-play"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(
                          `https://www.youtube.com/embed/${talk.videoId}?autoplay=1`,
                          `${talk.name} — ${talk.role}`
                        );
                      }}
                      aria-label={`Play testimonial video of ${talk.name}`}
                    >
                      <Play size={28} className="ml-1 fill-white" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Active Card Caption in the Center */}
          <div className="vtesti-cap mt-8 text-center">
            <h3 className="text-xl sm:text-2xl font-light text-white mb-1">
              {activeItem.name}
            </h3>
            <span className="text-sm text-[#9A9A9A] font-light">
              {activeItem.role}
            </span>
          </div>

          {/* Dots Pagination */}
          <div className="vtesti-dots" role="tablist" aria-label="Choose a testimonial video">
            {talksData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`vtesti-dot ${activeIndex === idx ? 'is-on' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-selected={activeIndex === idx}
              />
            ))}
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevSlide}
              className="carousel-btn"
              aria-label="Previous video"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="carousel-btn"
              aria-label="Next video"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
