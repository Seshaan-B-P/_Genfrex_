import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle ambient particle/network canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodeCount = window.innerWidth < 768 ? 20 : 38;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.35 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.12;
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

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  const lineReveal = (delay) => ({
    hidden: { opacity: 0, y: 50 },
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
            Strategy &bull; Technology &bull; Creativity
          </span>
        </motion.div>

        {/* Hero Title: BUILDING WHAT'S NEXT. */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white max-w-5xl mb-8 md:mb-12">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineReveal(0.35)} initial="hidden" animate="visible" className="block">
              BUILDING
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineReveal(0.5)} initial="hidden" animate="visible" className="block text-neutral-300">
              WHAT'S
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              variants={lineReveal(0.65)}
              initial="hidden"
              animate="visible"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#0052FF]"
            >
              NEXT.
            </motion.span>
          </span>
        </h1>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.08]"
        >
          {/* Primary CTA: EXPLORE WORK ↗ */}
          <a
            href="#work"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#0052FF] hover:text-white transition-all duration-300 active:scale-98 hover:shadow-[0_0_25px_rgba(0,82,255,0.4)]"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary: SCROLL TO EXPLORE ↓ */}
          <div
            onClick={() => {
              const targetEl = document.querySelector('#about') || document.querySelector('#intro');
              if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
            }}
            data-cursor="hover"
            className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] text-[#A0A0A0] hover:text-white uppercase transition-colors cursor-pointer font-medium"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#0052FF] animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Metadata: DIGITAL STUDIO (Left) & 2026 (Right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-white/[0.06] text-[10px] md:text-xs tracking-[0.25em] text-[#666666] uppercase font-medium relative z-10"
      >
      </motion.div>
    </section>
  );
}
