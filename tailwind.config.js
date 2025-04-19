/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f4ff',
          100: '#ebe8ff',
          200: '#d9d5ff',
          300: '#bdb4ff',
          400: '#9a8bff',
          500: '#7c5bff',
          600: '#6b4af5',
          700: '#5a3de0',
          800: '#4F46E5', // Main indigo/blue
          900: '#3f38ae',
          950: '#292264'
        },
        secondary: {
          50: '#f2fcfc',
          100: '#d6f7f8',
          200: '#aeeef2',
          300: '#73e0e9',
          400: '#36c8d8',
          500: '#1aacbd',
          600: '#188b9f',
          700: '#1a7082',
          800: '#1d5c6a',
          900: '#1e4c5a',
          950: '#0e323c'
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe6d4',
          200: '#ffc9a8',
          300: '#ffa370',
          400: '#ff7236',
          500: '#ff4c0e',
          600: '#f03403',
          700: '#c72605',
          800: '#9f2010',
          900: '#821d11',
          950: '#460c06'
        }
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(99, 102, 241, 0.4)',
        'soft': '0 2px 15px -5px rgba(0, 0, 0, 0.1)'
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '100': '25rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};