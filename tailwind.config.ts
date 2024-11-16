import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B5983",
        "primary-light": "#F5EEF3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          DEFAULT: "1290px",
        },
        center: true,
        padding: "1.2rem",
      },
      backgroundImage: {
        "black-gradient":
          "linear-gradient(178deg, rgba(0, 0, 0, 0.00) 44.14%, #000 98.09%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "540px", // min-width
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
