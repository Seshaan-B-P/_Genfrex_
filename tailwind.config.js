/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0C0E17',
          secondary: '#10131F',
          tertiary: '#151A28',
          card: '#131725',
          elevated: '#181E30',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#A0AEC0',
          dim: '#718096',
        },
        border: {
          subtle: 'rgba(0, 82, 255, 0.12)',
          highlight: 'rgba(0, 82, 255, 0.28)',
        },
        brand: {
          blue: '#0052FF',
          'blue-light': '#1E6FFF',
          'blue-electric': '#0052FF',
          'blue-cyan': '#00D4FF',
          'blue-glow': 'rgba(0, 82, 255, 0.28)',
        },
      },
      fontFamily: {
        // ONE UNIFIED FONT: Inter exclusively across the entire project
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest-editorial': '0.2em',
        'mega-wide': '0.3em',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
