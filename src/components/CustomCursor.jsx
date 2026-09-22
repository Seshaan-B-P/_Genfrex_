import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'view', 'explore', 'play'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check touch device or coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isTextCursor = ['view', 'explore', 'play'].includes(cursorState);

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference flex items-center justify-center text-black font-semibold uppercase tracking-widest text-[10px]"
        animate={{
          x: mousePosition.x - (isTextCursor ? 40 : cursorState === 'hover' ? 24 : 16),
          y: mousePosition.y - (isTextCursor ? 40 : cursorState === 'hover' ? 24 : 16),
          width: isTextCursor ? 80 : cursorState === 'hover' ? 48 : 32,
          height: isTextCursor ? 80 : cursorState === 'hover' ? 48 : 32,
          backgroundColor: isTextCursor ? '#FFFFFF' : cursorState === 'hover' ? 'rgba(255,255,255,0.9)' : 'transparent',
          borderWidth: cursorState === 'default' ? 1 : 0,
          borderColor: 'rgba(255,255,255,0.4)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorState === 'view' && (
          <span className="font-display font-bold tracking-widest text-[11px] text-black">
            VIEW
          </span>
        )}
        {cursorState === 'explore' && (
          <span className="font-display font-bold tracking-widest text-[11px] text-black">
            EXPLORE
          </span>
        )}
        {cursorState === 'play' && (
          <span className="font-display font-bold tracking-widest text-[11px] text-black">
            PLAY
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorState === 'hover' || isTextCursor ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600 }}
      />
    </>
  );
}
