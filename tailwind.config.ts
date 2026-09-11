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
        primary: {
          red: "#DC2626",
          blue: "#1e3a8a",
          gold: "#fbbf24",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
  // Ensure Tailwind is watching for class changes
  safelist: [
    'text-primary-red',
    'bg-primary-red',
    'bg-primary-blue',
    'hover:bg-red-700',
    'hover:text-primary-red',
  ],
};
export default config;
