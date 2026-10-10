/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#FAF8F5',
          cream: '#F4EFEA',
          sand: '#EBE3DA',
          muted: '#E2D8CC',
        },
        noir: {
          DEFAULT: '#0E0D0C',
          light: '#1A1817',
          surface: '#24211F',
          border: '#332F2B',
        },
        champagne: {
          DEFAULT: '#C5A880',
          light: '#DECBB3',
          dark: '#A5855C',
          subtle: '#F1E8DC',
        },
        gold: {
          DEFAULT: '#D4AF37',
          muted: '#B89758',
          accent: '#E6CA65',
        },
        rose: {
          nude: '#E8D5CE',
          blush: '#DFC0B5',
          dusty: '#B08E83',
        }
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', 'Playfair Display', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
