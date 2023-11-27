/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "l-pink": "#E982A2",
        "mid-pink": "#F4BECF",
      },
      backgroundSize: {
        "300%": "300%",
      },
      transitionDuration: {
        250: "250ms",
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        shiny: "shine 6s linear infinite",
      },
      keyframes: {
        shine: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
