/** @type {import('tailwindcss').Config} */
// import home from 'assert/home.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-background': "url('assert/home.jpg')",
    },
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    extend: {
        screens: {
            'xs': { 'min': '0px', 'max': '640px' },
        },
        colors: {
            clifford: '#da373d',
        }
    }
},
  plugins: [],
}