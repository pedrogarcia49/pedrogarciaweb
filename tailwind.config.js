/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.html"],
  theme: {
    screens: {
      'sm': '<640px',
      // => @media (min-width: 640px) { ... }

      'md': '840px',
      // => @media (min-width: 768px) { ... }

      'lg': '1224px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"]
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
