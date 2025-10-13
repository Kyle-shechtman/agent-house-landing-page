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
        background: "#faf9f5",
        foreground: "#1a1a1a",
        accent: "#cc6633",
        "accent-hover": "#b35529",
      },
    },
  },
  plugins: [],
};
export default config;
