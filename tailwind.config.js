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
      screens: {
        minHeight: { raw: "(min-height: 500px)" },
      },
      colors: {
        white: "#FAFAFA",
        cream: "#ffefeb",
        "light-purple": "#dfdcf9",
        "light-blue": "#d7e5f8",
        "faded-white":"rgba(250, 250, 250,0.8)",
        transparent:"transparent",
        black: "#02050a",
        purple: "#7C73E6",
        pink:"#ffad97",
        green:"#BBD8DB"
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      bolder: "800",
      black: "900",
    },
    fontFamily: {
      poppins: "poppins,ui-san-serif",
      "dm-sans": "Dm Sans,ui-san-serif",
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      999: 999,
      9999: 9999
    },
    spacing: {
      0: 0,
      1: "1px",
      4: "4px",
      8: "8px",
      12:"12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      96: "96px",
      128: "128px",
      192:"192px",
      256: "256px",
      320:"320px",
      416:"416px",
      512: "512px",
      768:"768px",
      1024:"1024px"


    },
  },
  plugins: [],
};
