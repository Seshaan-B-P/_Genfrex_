import React, { useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

const worksData = [
  {
    id: 1,
    title: 'AD Films & Commercials',
    tag: 'Broadcast & OTT',
    desc: 'Stories that capture attention, spark emotion, and inspire immediate audience action.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Digital & Growth Films',
    tag: 'Digital First',
    desc: 'Purpose-built video experiences engineered for modern fast-scrolling digital audiences.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/1fa64Pzjrcs'
  },
  {
    id: 3,
    title: 'Corporate Storytelling',
    tag: 'Brand Vision',
    desc: 'Authentic narratives that showcase company ethos, technological prowess, and leadership excellence.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/STrAkUfE2S0'
  },
  {
    id: 4,
    title: 'High-Impact Documentaries',
    tag: 'Cinematic In-Depth',
    desc: 'Powerful visual journalism and documentaries uncovering human truth, culture, and transformation.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/5FjE2gcsHbU'
  },
  {
    id: 5,
    title: 'Social Media Movements',
    tag: 'Community Engagement',
    desc: 'Bespoke creative assets crafted to influence algorithms, ignite conversations, and foster brand loyalty.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dGvd8OddLSA'
  },
  {
    id: 6,
    title: 'Branding & Visual Identity',
    tag: 'Strategic Systems',
    desc: 'Strategic design, motion identity, and multi-channel design systems that command authority.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/0Wbp8GPJkCw'
  }
];

// Triplicate the data to provide an endless, seamless looping track in both directions
const carouselItems = [...worksData, ...worksData, ...worksData];

export default function SelectedWork({ onOpenVideo }) {
  const trackRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // Drag-to-scroll interaction refs
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);

  // Pause auto-scroll temporarily during manual interactions
  const pauseTemporarily = useCallback((duration = 3000) => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, duration);
  }, []);

  // Initialize scroll position to the center set for seamless bi-directional loop
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const oneThird = track.scrollWidth / 3;
      track.scrollLeft = oneThird;
    }
  }, []);

  // Continuous auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    const speed = 0.85; // Smooth cinematic horizontal speed

    const step = () => {
      if (!isHoveredRef.current && !isInteractingRef.current && !isDraggingRef.current && track) {
        track.scrollLeft += speed;

        const oneThird = track.scrollWidth / 3;
        // If scrolled past the second set, wrap back smoothly to the first set
        if (track.scrollLeft >= oneThird * 2) {
          track.scrollLeft -= oneThird;
        } else if (track.scrollLeft <= 5) {
          // If scrolled backwards to start, wrap forward to middle set
          track.scrollLeft += oneThird;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const onMouseEnter = () => {
      isHoveredRef.current = true;
    };
    const onMouseLeave = () => {
      isHoveredRef.current = false;
    };

    track.addEventListener('mouseenter', onMouseEnter);
    track.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Arrow button navigation
  const scroll = (direction) => {
    pauseTemporarily(3500);
    if (trackRef.current) {
      const cardWidth = 340 + 24; // medium card width + gap
      const oneThird = trackRef.current.scrollWidth / 3;

      if (direction === 'left' && trackRef.current.scrollLeft <= oneThird * 0.5) {
        trackRef.current.scrollLeft += oneThird;
      } else if (direction === 'right' && trackRef.current.scrollLeft >= oneThird * 2) {
        trackRef.current.scrollLeft -= oneThird;
      }

      trackRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Drag handling
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStartRef.current = trackRef.current.scrollLeft;
    pauseTemporarily(3000);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    dragDistanceRef.current = Math.abs(walk);
    trackRef.current.scrollLeft = scrollLeftStartRef.current - walk;

    const oneThird = trackRef.current.scrollWidth / 3;
    if (trackRef.current.scrollLeft >= oneThird * 2) {
      trackRef.current.scrollLeft -= oneThird;
      scrollLeftStartRef.current -= oneThird;
    } else if (trackRef.current.scrollLeft <= 10) {
      trackRef.current.scrollLeft += oneThird;
      scrollLeftStartRef.current += oneThird;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    pauseTemporarily(2000);
  };

  const handleCardClick = (item) => {
    // Only open video if user didn't drag
    if (dragDistanceRef.current < 6) {
      onOpenVideo(item.videoUrl, item.title);
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden" id="works">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
              Our Works
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Manual navigation buttons */}
            <button
              type="button"
              onClick={() => scroll('left')}
              className="carousel-btn"
              aria-label="Previous works"
              title="Previous works"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="carousel-btn"
              aria-label="Next works"
              title="Next works"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container with Sleek Fade Shadows on edges */}
        <div className="relative">
          {/* Left & Right Gradient Shadows */}
          <div className="absolute left-0 top-0 bottom-4 w-12 sm:w-20 bg-gradient-to-r from-[#0C0E17] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-12 sm:w-20 bg-gradient-to-l from-[#0C0E17] to-transparent z-10 pointer-events-none" />

          {/* Medium Sized Horizontal Auto-scroll Track */}
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => pauseTemporarily(4000)}
            onTouchEnd={() => pauseTemporarily(2000)}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 flex flex-col bg-[#141416] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#0052FF]/60 hover:shadow-xl hover:shadow-[#0052FF]/10 transition-all duration-300"
              >
                {/* 16:9 Medium Video Thumbnail */}
                <div 
                  className="relative aspect-video overflow-hidden cursor-pointer"
                  data-cursor="play"
                  onClick={() => handleCardClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-lg shadow-[#0052FF]/40 transform group-hover:scale-110 transition-transform">
                      <Play size={18} className="ml-0.5 fill-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white/90 border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Medium Card Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white mb-1.5 group-hover:text-[#0052FF] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[#9A9A9A] text-xs sm:text-sm font-light leading-relaxed mb-3 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCardClick(item)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0052FF] hover:text-[#2B73FF] transition-colors mt-auto pt-1"
                  >
                    <span>Watch Film</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

