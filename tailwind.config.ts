import type { Config } from "tailwindcss";
import { themeExtensions } from "./src/design-system/theme/index";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: themeExtensions, // Clean and organized
  },
  plugins: [],
};
export default config;