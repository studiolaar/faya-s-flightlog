/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'klm-blue': '#195FA5',
        'klm-sky': '#00A1E4',
        'klm-card': '#EDF9FE',
        'klm-label': '#788999',
      },
      fontFamily: {
        mono: ['"Azeret Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        hand: ['"Gochi Hand"', 'cursive'],
      },
      borderRadius: {
        card: '14.45px',
      },
      animation: {
        'slide-up': 'slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
      },
      keyframes: {
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
