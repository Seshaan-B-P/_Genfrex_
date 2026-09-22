import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle dynamic abstract node canvas for digital ecosystem atmosphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle floating nodes (represents connection of business + digital expertise + talent)
    const nodes = Array.from({ length: 28 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.35 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting trace lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            const opacity = (1 - dist / 170) * 0.12;
            ctx.strokeStyle = `rgba(0, 82, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        if (!shouldReduceMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  const lineReveal = (delay) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  });

  return (
    <section className="relative min-h-[100svh] h-[100svh] min-h-[700px] w-full flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-10 px-6 md:px-12 bg-[#050505] overflow-hidden select-none">
      {/* Background with slow scale: 1.05 -> 1 */}
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {/* Abstract Canvas */}
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />

        {/* Atmospheric Electric Blue Light Ambient */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#0052FF]/[0.08] rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#0052FF]/[0.05] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Main Monumental Typography & Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto flex flex-col justify-center">
        {/* Small supporting tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <span className="w-2 h-2 bg-[#0052FF] rounded-full shadow-[0_0_10px_rgba(0,82,255,0.9)]" />
          <span className="text-xs md:text-sm tracking-[0.25em] text-[#A0A0A0] uppercase font-medium">
            DIGITAL SERVICES &bull; TECHNOLOGY &bull; TALENT ECOSYSTEM
          </span>
        </motion.div>

        {/* Hero Title: DIGITAL EXPERTISE. CONNECTED TALENT. MEANINGFUL GROWTH. */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.06] tracking-tight text-white max-w-5xl mb-6 md:mb-8">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineReveal(0.35)} initial="hidden" animate="visible" className="block">
              DIGITAL EXPERTISE.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineReveal(0.5)} initial="hidden" animate="visible" className="block text-neutral-300">
              CONNECTED TALENT.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              variants={lineReveal(0.65)}
              initial="hidden"
              animate="visible"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]"
            >
              MEANINGFUL GROWTH.
            </motion.span>
          </span>
        </h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="text-sm sm:text-base md:text-lg text-[#A0A0A0] font-light max-w-2xl leading-relaxed mb-8 md:mb-10"
        >
          GENFREX is a modern digital services and talent ecosystem helping businesses grow through technology, digital marketing, and skilled professionals.
        </motion.p>

        {/* CTA Actions: Rectangular Editorial Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/[0.08]"
        >
          {/* Primary CTA: EXPLORE GENFREX ↗ */}
          <a
            href="#about"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 active:scale-98 hover:shadow-[0_0_25px_rgba(0,82,255,0.4)]"
          >
            <span>EXPLORE GENFREX</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary CTA: START A PROJECT ↗ */}
          <a
            href="#contact"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.04] text-white border border-white/20 hover:border-[#0052FF] hover:bg-[#0052FF]/15 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 active:scale-98"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 text-[#0052FF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Metadata: DIGITAL SERVICES × DIGITAL TALENT | 2026 | SCROLL ↓ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/[0.06] text-[10px] md:text-xs tracking-[0.25em] text-[#666666] uppercase font-medium relative z-10"
      >
        <span>DIGITAL SERVICES &times; DIGITAL TALENT</span>
        <span className="hidden sm:inline-block text-[#A0A0A0]">2026 RELEASE</span>
        <div
          onClick={() => {
            const targetEl = document.querySelector('#about') || document.querySelector('#intro');
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }}
          data-cursor="hover"
          className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#0052FF] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
