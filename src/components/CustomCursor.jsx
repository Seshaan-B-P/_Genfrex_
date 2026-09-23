import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Play, ArrowUpRight, MoveHorizontal } from 'lucide-react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'play', 'view', 'drag'
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Smooth springs for fluid trailing physics
  const springConfig = { damping: 25, stiffness: 280, mass: 0.4 };
  const smoothX = useSpring(-100, springConfig);
  const smoothY = useSpring(-100, springConfig);

  useEffect(() => {
    // Disable on touch screens or mobile devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');
      const clickableTarget = target.closest('a, button, [role="button"], input, textarea, select');

      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        setCursorState(type || 'hover');
      } else if (clickableTarget) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('has-custom-cursor');
    };
    const onMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('has-custom-cursor');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, smoothX, smoothY]);

  if (isTouch || !isVisible) return null;

  const isBadgeCursor = ['play', 'view', 'drag'].includes(cursorState);

  // Dynamic dimensions based on state
  let ringSize = 34;
  if (cursorState === 'hover') ringSize = 50;
  if (isBadgeCursor) ringSize = 74;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] overflow-hidden">
      {/* Outer Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center select-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          scale: isClicked ? 0.88 : 1,
          backgroundColor: isBadgeCursor
            ? '#0052FF'
            : cursorState === 'hover'
            ? 'rgba(0, 82, 255, 0.12)'
            : 'rgba(0, 82, 255, 0.04)',
          borderColor: isBadgeCursor
            ? '#2B73FF'
            : cursorState === 'hover'
            ? '#0052FF'
            : 'rgba(0, 82, 255, 0.45)',
          borderWidth: isBadgeCursor ? 2 : cursorState === 'hover' ? 1.5 : 1,
          boxShadow: isBadgeCursor
            ? '0 0 28px rgba(0, 82, 255, 0.7), inset 0 0 14px rgba(255, 255, 255, 0.25)'
            : cursorState === 'hover'
            ? '0 0 20px rgba(0, 82, 255, 0.4), inset 0 0 8px rgba(0, 82, 255, 0.15)'
            : '0 0 10px rgba(0, 82, 255, 0.2)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 320,
        }}
      >
        {cursorState === 'play' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center gap-1 text-white font-mono text-[11px] font-bold tracking-widest uppercase pl-0.5"
          >
            <Play size={13} className="fill-white" />
            <span>PLAY</span>
          </motion.div>
        )}

        {cursorState === 'view' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center gap-0.5 text-white font-mono text-[11px] font-bold tracking-widest uppercase"
          >
            <span>VIEW</span>
            <ArrowUpRight size={13} />
          </motion.div>
        )}

        {cursorState === 'drag' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center gap-1 text-white font-mono text-[10px] font-bold tracking-widest uppercase"
          >
            <MoveHorizontal size={14} />
          </motion.div>
        )}
      </motion.div>

      {/* Immediate Sharp Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'hover' ? 6 : 5,
          height: cursorState === 'hover' ? 6 : 5,
          opacity: isBadgeCursor ? 0 : 1,
          scale: isClicked ? 1.4 : 1,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 8px #0052FF, 0 0 14px #0052FF',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      />
    </div>
  );
}
