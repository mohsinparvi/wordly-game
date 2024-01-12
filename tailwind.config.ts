import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sectionbg: "url('../assets/bg-cover.svg')",
      },
      backgroundColor: {
        primary: "#50C878",
        secondary: "#6495ED",
        tertiary: "#FF6347",
      },
      colors: {
        primary: "#2F4F4F",
        secondary: "#FF6347",
        tertiary: "#777777",
        green: "#228B22",
        blue: "#6495ED",
      },
      borderColor: {
        primary: "#228B22",
      },
    },
  },
  plugins: [],
};
export default config;
