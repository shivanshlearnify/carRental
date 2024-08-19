/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#f8f8f8",
      },
      backgroundImage: {
        'booking-img': "url('./assets/booking.png')",
      }
    },
    screens: {
      'sm': {'min': '0px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1200px'},

      'lg': {'min': '1201px', 'max': '2879px'},

    },
  },
  plugins: [require("tailwindcss-gradients")],
};
