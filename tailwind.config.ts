import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bk: "#0c0c0c",
        gr: "#252525"
      }
    }
  },
  plugins: [],
} satisfies Config;
