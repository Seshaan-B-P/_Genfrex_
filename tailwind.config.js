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
          DEFAULT: '#050505',
          secondary: '#080808',
          tertiary: '#0F0F12',
          card: '#0A0A0D',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0A0',
          dim: '#666666',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(255, 255, 255, 0.20)',
        },
        brand: {
          blue: '#0052FF',
          'blue-light': '#1E6FFF',
          'blue-electric': '#0052FF',
          'blue-glow': 'rgba(0, 82, 255, 0.25)',
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
