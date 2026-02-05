/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-blue": "rgba(24, 50, 98, 0.5)",
      },
      padding: {
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
//
