/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        sf: "SF Compact",
        "fugaz-one": ["Fugaz One", "sans-serif"],
      },
      dropShadow: {
        "3xl": "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "beige-image":
          "linear-gradient(180deg, #3d5a80 0%, #4a6b98 30%, #3d5a80 70%, #2b4362 100%)",
        "gray-image":
          "linear-gradient(180deg, #c4c1c1 0%, #cac8c7 30%, #c5c3c2 70%, #a9a7a6 100%)",
        "fondo-dark":
          "linear-gradient(to top, #3e3f3f 0%, #202020 30%, #202020 70%,  #3e3f3f 100%)",
        "footer-dark": "linear-gradient(to top,  #202020 ,  #3e3f3f )",
        "button-light": "linear-gradient(to top,  #d6d2d1 ,  #d6d2d1 )",
      },
      colors: {
        logo: "#d6d2d1",
        logoTypography: "#3e3f3f",
        logoOpacity: "rgba(214, 210, 209, 0.7)",
        beige: "#C99677",
        beigeCards: "#d6d2d175",
        beigeHover: "#B98362",
        beigeFondo: "#e4c1a9",
        azulado: "#3d5a80",
        dark: "202020",
        azuladoHover: "#737F99",
        gris: "#E8E8E8",
        grisHover: "#DCDCDC",
      },
      backdropFilter: {
        blur: "blur(15px)",
      },
      translate: ["hover", "focus"],
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
        float2: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 2.5s ease-in-out infinite",
        float2: "float2 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
