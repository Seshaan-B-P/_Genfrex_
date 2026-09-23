import React, { useState, useEffect, useRef } from 'react';

const clientLogos = [
  'AA Garden', 'Ananta Living', 'CBR Constructions', 'Chettinad Builders',
  'Emami Agro', 'Flio Technologies', 'Flyer Eats', 'Fogger Systems',
  'Garam Masala', 'Gugan Silks', 'Ideal Homes', 'Kaalaiyan Agro',
  'Kash Kopuram', 'Kukoo Kids', 'Lakshmi Mills', 'Malar Rice',
  'Mayil Mark', 'Nana Nani Homes', 'Nandhi Mark', 'Sri Baby Jewels',
  'SS Brand Rice', 'Sukraa Diamond', 'Tee Na Tea', 'Vigneshwara', 'Zha Fashion'
];

function AnimatedCounter({ end, duration = 2000, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve (starts dynamic, eases in gracefully)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {count}
      <span className="text-[#0052FF] font-light">{suffix}</span>
    </span>
  );
}

export default function Clients() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6" id="clients">
      <div className="max-w-[1200px] mx-auto">
        <div className="section-head center mb-16">
          <span className="eyebrow">Our Clients</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
            Trusted by brands that demand more.
          </h2>
          <p className="lead mt-3">
            Our clients are our top priority, and we are committed to providing them with exceptional craft, robust engineering, and tangible business ROI.
          </p>
        </div>

        {/* 4-Column Animated Stats Row */}
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-num text-white">
              <AnimatedCounter end={75} duration={1800} suffix="+" />
            </span>
            <span className="stat-label">Global Clients</span>
          </div>

          <div className="stat-item">
            <span className="stat-num text-white">
              <AnimatedCounter end={200} duration={2200} suffix="+" />
            </span>
            <span className="stat-label">Ad Films & Spots</span>
          </div>

          <div className="stat-item">
            <span className="stat-num text-white">
              <AnimatedCounter end={50} duration={1600} suffix="+" />
            </span>
            <span className="stat-label">Corporate Platforms</span>
          </div>

          <div className="stat-item">
            <span className="stat-num text-white">
              <AnimatedCounter end={100} duration={2000} suffix="+" />
            </span>
            <span className="stat-label">Growth Campaigns</span>
          </div>
        </div>
      </div>

      {/* Infinite Client Logo Marquee */}
      <div className="logo-marquee mt-10 border-y border-white/[0.08] py-8 bg-[#0E0E11]/40">
        <div className="logo-marquee-track">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div
              key={idx}
              className="logo-cell px-6 py-2 border border-white/5 rounded-xl bg-white/[0.02]"
            >
              <span className="text-sm md:text-base font-medium tracking-wide text-white/70 whitespace-nowrap uppercase">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
