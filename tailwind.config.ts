import extractColorsPlugin from "./extractColors";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      custom: {
        blue: {
          50: "#03071E",
          100: "#0B1238",
          200: "#202752"
        },
        beige: "#EAE2B7",
        red: {
          200: "#6A040F",
          300: "#9D0208",
          500: "#D62828"
        },
        yellow: "#FCBF49",
        orange: "#F77F00"
      },
    }
  },
  plugins: [
    extractColorsPlugin
  ],
  darkMode: "selector",
};
export default config;
