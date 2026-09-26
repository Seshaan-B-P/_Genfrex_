import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'AA Garden', slug: 'aa-garden', logo: '/clients/aa-garden.png' },
  { name: 'Ananta Living', slug: 'ananta-living', logo: '/clients/ananta-living.png' },
  { name: 'CBR Constructions', slug: 'cbr-constructions', logo: '/clients/cbr-constructions.png' },
  { name: 'Chettinad Builders', slug: 'chettinad-builders', logo: '/clients/chettinad-builders.png' },
  { name: 'Emami Agro', slug: 'emami-agro', logo: '/clients/emami-agro.png' },
  { name: 'Flio Technologies', slug: 'flio-technologies', logo: '/clients/flio-technologies.png' },
  { name: 'Flyer Eats', slug: 'flyer-eats', logo: '/clients/flyer-eats.png' },
  { name: 'Fogger Systems', slug: 'fogger-systems', logo: '/clients/fogger-systems.png' },
  { name: 'Garam Masala', slug: 'garam-masala', logo: '/clients/garam-masala.png' },
  { name: 'Gugan Silks', slug: 'gugan-silks', logo: '/clients/gugan-silks.png' },
  { name: 'Ideal Homes', slug: 'ideal-homes', logo: '/clients/ideal-homes.png' },
  { name: 'Kaalaiyan Agro', slug: 'kaalaiyan-agro', logo: '/clients/kaalaiyan-agro.png' },
  { name: 'Kash Kopuram', slug: 'kash-kopuram', logo: '/clients/kash-kopuram.png' },
  { name: 'Kukoo Kids', slug: 'kukoo-kids', logo: '/clients/kukoo-kids.png' },
  { name: 'Lakshmi Mills', slug: 'lakshmi-mills', logo: '/clients/lakshmi-mills.png' },
  { name: 'Malar Rice', slug: 'malar-rice', logo: '/clients/malar-rice.png' },
  { name: 'Mayil Mark', slug: 'mayil-mark', logo: '/clients/mayil-mark.png' },
  { name: 'Nana Nani Homes', slug: 'nana-nani-homes', logo: '/clients/nana-nani-homes.png' },
  { name: 'Nandhi Mark', slug: 'nandhi-mark', logo: '/clients/nandhi-mark.png' },
  { name: 'Sri Baby Jewels', slug: 'sri-baby-jewels', logo: '/clients/sri-baby-jewels.png' },
  { name: 'SS Brand Rice', slug: 'ss-brand-rice', logo: '/clients/ss-brand-rice.png' },
  { name: 'Sukraa Diamond', slug: 'sukraa-diamond', logo: '/clients/sukraa-diamond.png' },
  { name: 'Tee Na Tea', slug: 'tee-na-tea', logo: '/clients/tee-na-tea.png' },
  { name: 'Vigneshwara', slug: 'vigneshwara', logo: '/clients/vigneshwara.png' },
  { name: 'Zha Fashion', slug: 'zha-fashion', logo: '/clients/zha-fashion.png' }
];

function ClientLogoItem({ client }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="logo-cell group/cell px-6 py-3 border border-white/5 rounded-xl bg-white/[0.02] hover:border-[#0052FF]/40 hover:bg-[#0052FF]/5 transition-all duration-300 flex items-center justify-center min-w-[150px] h-[72px]">
      {!hasError ? (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          onError={() => setHasError(true)}
          className="max-h-11 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover/cell:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]/60 group-hover/cell:bg-[#00D4FF] transition-colors" />
          <span className="text-sm md:text-base font-medium tracking-wide text-white/70 whitespace-nowrap uppercase group-hover/cell:text-white transition-colors">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );
}

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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-head center mb-16"
        >
          <span className="eyebrow">Our Clients</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
            Trusted by brands that demand more.
          </h2>
          <p className="lead mt-3">
            Our clients are our top priority, and we are committed to providing them with exceptional craft, robust engineering, and tangible business ROI.
          </p>
        </motion.div>

        {/* 4-Column Animated Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, duration: 0.6 }
            }
          }}
          className="stats-row"
        >
          <div className="stat-item hover:-translate-y-1 transition-transform duration-300">
            <span className="stat-num text-white">
              <AnimatedCounter end={75} duration={1800} suffix="+" />
            </span>
            <span className="stat-label">Global Clients</span>
          </div>

          <div className="stat-item hover:-translate-y-1 transition-transform duration-300">
            <span className="stat-num text-white">
              <AnimatedCounter end={200} duration={2200} suffix="+" />
            </span>
            <span className="stat-label">Ad Films & Spots</span>
          </div>

          <div className="stat-item hover:-translate-y-1 transition-transform duration-300">
            <span className="stat-num text-white">
              <AnimatedCounter end={50} duration={1600} suffix="+" />
            </span>
            <span className="stat-label">Corporate Platforms</span>
          </div>

          <div className="stat-item hover:-translate-y-1 transition-transform duration-300">
            <span className="stat-num text-white">
              <AnimatedCounter end={100} duration={2000} suffix="+" />
            </span>
            <span className="stat-label">Growth Campaigns</span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Client Logo Marquee */}
      <div className="logo-marquee mt-10 border-y border-white/[0.08] py-8 bg-[#0E0E11]/40">
        <div className="logo-marquee-track">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <ClientLogoItem key={`${client.slug}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
