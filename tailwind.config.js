/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          },
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Lora', 'serif'],
      },
      colors: {
        kcpeps: {
          blue: '#376BBE',
          silver: '#C6CCD5',
          pink: '#F0DADF',
          navy: '#2B2D40',
          teal: '#50B0A6',
          lightGreen: '#6b8b75',
          darkGreen: '#4c6665',
          white: '#F9FAFB',
          black: '#191919',
          lightGray: '#f6f6f6',
          accent1: '#d2bda8',
          accent2: '#fabe94',
          blended: '#3D8F8D',
        },
      },
    },
  },
}