import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: "#F2EADF",
        lightbrown: "#8C6E43",
        darkbrown: "#312110",
        lightgreen: "#6F9D54",
        stone: "#7D7973",
      },
      // fontFamily: {
      //   sans: ["var(--font-moreganic"],
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
