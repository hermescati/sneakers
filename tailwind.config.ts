import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",
      gray: {
        50: "#FFF",
        100: "#FAFBFB",
        200: "#F2F2F2",
        300: "#EBEBEB",
        400: "#BEBFC0",
        600: "#6F6F6F",
        700: "#565656",
        800: "#33383C",
        900: "#212427",
      },
    },
    extend: {
      colors: {
        accent: "#FD844A",
        success: "#15F37D",
        danger: "#F32F15",
      },
    },
  },
  plugins: [],
};
export default config;
