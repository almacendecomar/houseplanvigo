/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        sand: {
          50: '#fdf8f3',
          100: '#f9eee4',
          200: '#f3ddc9',
          300: '#eac7a7',
          400: '#e0a979',
          500: '#d69054',
          600: '#c47440',
          700: '#a35a34',
          800: '#854a30',
          900: '#6d3f2c',
          950: '#3a1f14',
        },
        coral: {
          50: '#fff1f0',
          100: '#ffe1df',
          200: '#ffc9c5',
          300: '#ffa39e',
          400: '#ff7269',
          500: '#ff4d41',
          600: '#ed2b1e',
          700: '#c81e13',
          800: '#a51b13',
          900: '#881c15',
          950: '#4b0906',
        },
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};