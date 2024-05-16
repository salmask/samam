import type { Config } from "tailwindcss";
import daisyui from "daisyui";
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["retro"],
  },} satisfies Config;

 

