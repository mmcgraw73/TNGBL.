/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tngs: {
          primary: '#bef264',
          secondary: '#e11d48',
          accent: '#5eead4',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#fbbf24',
          success: '#4d7c0f',
          warning: '#ea580c',
          error: '#dc2626',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
