/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        sf: "SF Compact",
        'fugaz-one': ['Fugaz One', 'sans-serif'],
      },
      dropShadow: {
        "3xl": "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        'beige-image': 'linear-gradient(180deg, #cbab97 0%, #C99677 30%, #C99677 70%, #986444 100%)',
        'gray-image': 'linear-gradient(180deg, #dfdfdf 0%, #d6d2d1 30%, #d6d2d1 70%, #bbbbbb 100%)',
      },
      colors: {
        logo: "#d6d2d1",
        logoTypography: "#202020",
        logoOpacity: "rgba(214, 210, 209, 0.7)",
        beige: "#C99677",
        beigeCards: "#d6d2d175",
        beigeHover: "#B98362",
        beigeFondo: "#e4c1a9",
        azulado: "#55627E",
        azuladoHover: "#737F99",
        gris: "#E8E8E8",
        grisHover: "#DCDCDC",
      },
      backdropFilter: {
        blur: "blur(15px)",
      },
      translate: ['hover', 'focus'],
    },
  },
  plugins: [],
};
