/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auction-image': "url('./assets/auction.webp')",
      },
    },
  },
  plugins: [],
}

