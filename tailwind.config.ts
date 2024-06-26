import type { Config } from "tailwindcss";

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
      vert: '#496451',
      white: '#FFFFFF',
      black: '#000000',
      notWhite:'#F5F5F5',
      darkBG: '#27272A',
      lightDark: '#3F3F46',
      creme: '#FFF29A',
      brown:'#DAC8B6',
    },
  },
  plugins: [],
};
export default config;
