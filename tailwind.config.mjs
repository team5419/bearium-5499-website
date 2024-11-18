/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
      colors: {
        primary: "#f59e0b",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      }
    },
	},
	plugins: [],
}
