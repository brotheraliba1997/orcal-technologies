import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./sections/**/*.{js,ts,jsx,tsx,mdx}", 
  ],

  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },

      colors: {
        primary: {
          main: "#F3FF9F",
          heading: "#111C43",
        },

        secondary: {
          main: "#F8E6DD",
        },

        accent: {
          main: "#0D112666",
        },

        info: {
          main: "#FFD7C0",
        },
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "40px",
        "6xl": "3rem",
        heading: ["50px", { lineHeight: "1.4" }],
      },

      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, -50px) scale(1.2)' },
        },
      },
      animation: {
        move: "move 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
