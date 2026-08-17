import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: { 50: "#eef4ff", 100: "#d9e6ff", 500: "#3358e0", 600: "#2544b8", 700: "#1c3690" } } } }, plugins: [] };
export default config;
