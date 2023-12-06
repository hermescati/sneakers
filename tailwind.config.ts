import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-50": "#FFF",
        "color-100": "#FAFBFB",
        "color-200": "#F2F2F2",
        "color-300": "#EBEBEB",
        "color-400": "#BEBFC0",
        "color-500": "#FD844A",
        "color-600": "#6F6F6F",
        "color-700": "#565656",
        "color-800": "#33383C",
        "color-900": "#212427",
        "color-success": "#15F37D",
        "color-danger": "#F32F15",
      },
    },
  },
  plugins: [],
};
export default config;
