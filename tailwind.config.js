/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  daisyui: {
    themes: [
      {
        tng: {
          primary: '#a3e635',

          secondary: '#e11d48',

          accent: '#5eead4',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#fbbf24',

          success: '#4d7c0f',

          warning: '#ea580c',

          error: '#dc2626',
        },
        mytheme: {
          primary: '#f20040',

          secondary: '#d2c9ff',

          accent: '#38f931',

          neutral: '#202427',

          'base-100': '#423E51',

          info: '#38C8E5',

          success: '#27B487',

          warning: '#F6C26F',

          error: '#F46786',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
