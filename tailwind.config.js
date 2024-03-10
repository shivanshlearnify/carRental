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
  },
  plugins: [require("tailwindcss-gradients")],
};
