/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        dvh: '100dvh',
      },
      colors: {
        'dark-elements': 'hsl(209, 23%, 22%)',
        'dark-bg': 'hsl(207, 26%, 17%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'light-bg': 'hsl(0, 0%, 98%)',
        'light-elements': 'hsl(0, 0%, 100%)',
        'light-input': 'hsl(0, 0%, 52%)',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
