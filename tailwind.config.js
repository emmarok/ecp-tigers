gtultra: ['Gt Ultra', 'gt-ultra']
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			screens: {
				xs: "475px",
			},
			colors: {
				primary: {
					"100": "#d92049",
					DEFAULT: "#006A4D",
				},
				secondary: "#f1f1f1",
				black: {
					"100": "#333333",
					"200": "#141413",
					"300": "#7D8087",
					DEFAULT: "#000000",
				},
				white: {
					"100": "#F7F7F7",
					"200": "#adadad",
					DEFAULT: "#FFFFFF",
				},
			},
			fontFamily: {
				gtultra: ["var(--font-gt-ultra)"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			boxShadow: {
				100: "2px 2px 0px 0px rgb(0, 0, 0)",
				200: "2px 2px 0px 2px rgb(0, 0, 0)",
				300: "2px 2px 0px 2px rgb(238, 43, 105)",
			},
		},
	},
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
