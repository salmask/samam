/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your Remix app structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["retro"],
  },
}

