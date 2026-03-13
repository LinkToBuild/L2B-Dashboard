import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#FEA405",
          2: "#FEB637",
          3: "#FEC869",
          4: "#FFDB9B",
          5: "#FFEDCD",
        },
        aux: {
          1: "#38678C",
          2: "#4889BC",
          3: "#8DAFD1",
          4: "#CBDEEC",
          5: "#EBF1F8",
        },
        neutral: {
          1: "#1F1F1F",
          2: "#4B4B4B",
          3: "#8E8E8E",
          4: "#CACACA",
          5: "#E1E1E1",
          6: "#EEEEEE",
          7: "#F5F5F5",
          8: "#FEFEFE",
        },
        success: {
          1: "#47B881",
          2: "#6BC497",
          3: "#C0E5D1",
          4: "#F2FAF6",
        },
        danger: {
          1: "#F64C4C",
          2: "#EB6F70",
          3: "#FFCCD2",
          4: "#FEF2F2",
        },
        background: "#FFFEF9",
        foreground: "#252525",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        "l2b-soft": "0 0 15px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;