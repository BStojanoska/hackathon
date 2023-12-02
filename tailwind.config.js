/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require ('@tailwindcss/typography'), require ('daisyui')],
  daisyui: {
    themes: [{
      mytheme: {
        primary: '#2428AB',
        secondary: '#23B5D3',
        accent: '#FF7D00',
        neutral: '#ffffff',
        'base-100': '#ffffff',
        info: '#ffffff',
        success: '#52CC00',
        warning: '#EEDD43',
        error: '#D52114',
      },
    }],
  },
};
