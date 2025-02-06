import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bk: "#000",
        gr: "#080808",
        fg: "#101010"
      }
    }
  },
  plugins: [],
} satisfies Config;
