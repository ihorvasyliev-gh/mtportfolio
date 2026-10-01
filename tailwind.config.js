/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#070708',
          900: '#0e0e11',
          850: '#131317',
          800: '#1a1a20',
          700: '#26262e',
          600: '#3a3a44',
        },
        ivory: {
          50: '#fdfdfc',
          100: '#f7f6f2',
          200: '#eceae2',
          300: '#dedad0',
        },
        champagne: {
          200: '#f4ebd9',
          300: '#e7d6b8',
          400: '#d7be94',
          500: '#c5a773',
          600: '#ab8b55',
        },
        sand: {
          100: '#f5f4f0',
          200: '#e5e3dc',
          400: '#b8b5aa',
          600: '#7e7b71',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'ultra-wide': '0.35em',
      }
    },
  },
  plugins: [],
}
