/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#fd974d',
          teal:   '#58b0e0',
          purple: '#8977fe',
          green:  '#6eec96',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow':  'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #fd974d40' },
          to:   { boxShadow: '0 0 40px #8977fe60' },
        }
      }
    },
  },
  plugins: [],
}