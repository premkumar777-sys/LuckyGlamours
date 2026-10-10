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
        ivory: {
          DEFAULT: '#F7F3EA',
          light: '#FAF8F3',
          dark: '#EFEAE0',
          canvas: '#F7F3EA',
        },
        sage: {
          DEFAULT: '#D9D9C5',
          light: '#E8E8DA',
          dark: '#C4C4AF',
          muted: '#C8C8B4',
        },
        olive: {
          DEFAULT: '#72785A',
          light: '#8B926E',
          dark: '#595E46',
          accent: '#72785A',
        },
        earth: {
          DEFAULT: '#654638',
          light: '#7F5B4B',
          dark: '#4D3429',
        },
        charcoal: {
          DEFAULT: '#282720',
          light: '#3D3B31',
          muted: '#525043',
          dark: '#1A1915',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Manrope"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.2em',
        'super-wide': '0.3em',
      },
    },
  },
  plugins: [],
};
