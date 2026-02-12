/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FaceStore Brand Colors
        ink: '#0D0D0D',
        cream: '#F7F3EC',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
        },
        rust: '#C94F2A',
        forest: '#1E3A2F',
        mist: '#E8E3DA',
        'editorial-red': '#D0351C',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(52px, 6vw, 88px)', { lineHeight: '0.95', letterSpacing: '-2px' }],
        'display': ['clamp(36px, 4vw, 56px)', { lineHeight: '1.1', letterSpacing: '-1px' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
