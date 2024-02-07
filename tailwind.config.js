/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f1ef",
          "200": "#ededed",
        },
        negro: "#000",
        blanco: "#fff",
        "primary-color": "#0d16ff",
        blueviolet: "#404aff",
        gray: "#978f8f",
      },
      spacing: {},
      fontFamily: {
        "body-paragraph-regular": "Inter",
        "heading-titulos": "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
