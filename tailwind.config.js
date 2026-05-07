/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#e6e8f1',
          200: '#bcc0d4',
          300: '#8a90a8',
          400: '#5a6079',
          500: '#373c52',
          600: '#222639',
          700: '#161929',
          800: '#0d1020',
          900: '#070815',
        },
        accent: {
          DEFAULT: '#5b5fef',
          light: '#8b8efc',
          dark: '#3e41c4',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
};
