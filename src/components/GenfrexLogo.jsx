import React from 'react';

export default function GenfrexLogo({
  className = 'h-9 w-auto',
  showTagline = false,
  variant = 'dark', // 'dark' (optimized for black background) or 'original'
  alt = 'GENFREX — Empowering Your Digital Growth & Talent Connections',
}) {
  const logoSrc = variant === 'dark' ? '/logo-navbar.png' : '/logo-transparent.png';

  return (
    <div className="inline-flex items-center select-none flex-shrink-0">
      <img
        src={logoSrc}
        alt={alt}
        className={`object-contain transition-all duration-300 ${className}`}
        loading="eager"
        onError={(e) => {
          // Fallback to logo-dark.png
          e.currentTarget.src = '/logo-dark.png';
        }}
      />
    </div>
  );
}
