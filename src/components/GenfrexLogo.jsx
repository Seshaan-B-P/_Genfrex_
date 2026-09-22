import React from 'react';

export default function GenfrexLogo({
  className = 'h-9 w-auto',
  showTagline = false,
  variant = 'dark', // 'dark' (optimized for black background) or 'original'
  alt = 'GENFREX — Empowering Your Digital Growth & Talent Connections',
}) {
  const logoSrc = variant === 'dark' ? '/logo-dark.png' : '/logo-transparent.png';

  return (
    <div className="inline-flex flex-col items-start select-none">
      <img
        src={logoSrc}
        alt={alt}
        className={`object-contain transition-all duration-300 ${className}`}
        loading="eager"
        onError={(e) => {
          // Fallback to original image if transparent png fails
          e.currentTarget.src = '/logo.jpg';
        }}
      />
    </div>
  );
}
