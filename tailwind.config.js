/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'xsm': '480px', // => @media (min-width: 480px) { ... }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    preflight: false,
    aspectRatio: false,
  }
}
