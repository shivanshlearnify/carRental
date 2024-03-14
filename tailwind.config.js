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
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '2879px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
  },
  plugins: [require("tailwindcss-gradients")],
};
