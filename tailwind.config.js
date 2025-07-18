/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f8f4ed",
        ink: "#1e1e1e",
      },
      fontFamily: {
        body: ["'EB Garamond'", "serif"],
      },
    },
  },
  plugins: [],
};
