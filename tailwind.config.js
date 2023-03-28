/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFA",
        cream: "#FFE9E3",
        "light-purple": "#cac6f5",
        "light-blue": "#c6daf5",
        black: "#02050a",
        purple:"#7C73E6"
      },
    },
    fontFamily: {
      poppins: "poppins,ui-san-serif",
      "dm-sans": "Dm Sans,ui-san-serif",
    },
    zIndex: {
      0: 0,
      1: 1,
      999:999
    },
    spacing: {
      0: 0,
      1:"1px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      96: "96px",
      128: "128px",
      256: "256px",
    },
  },
  plugins: [],
};
