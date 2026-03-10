/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0a0a1a',
          800: '#12122a',
          700: '#1a1a3e',
          600: '#252550',
          500: '#353570',
          400: '#4a4a8a',
          300: '#6b6baa',
          200: '#8f8fc4',
          100: '#b8b8e0',
          50: '#e8e8f0',
        },
        star: {
          gold: '#ffd700',
          amber: '#ffb347',
          orange: '#ff8c00',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.75, transform: 'scale(0.98)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
