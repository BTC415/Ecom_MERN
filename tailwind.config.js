/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fast_blue: {
          DEFAULT: "#541D9B",
          light: "#7C2BE8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
