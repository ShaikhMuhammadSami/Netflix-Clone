/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-image': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('../image/bg-img.jpg')",
      },
    },
    screens: {
      sm: "400px",
      md: "600px",
      lg: "768px",
      xl: "1000px",
      "2xl": "1280px",
      "3xl": "1500px",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

