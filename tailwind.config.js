module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			"mobile-sm": "320px",

			"mobile-md": "375px",

			"mobile-lg": "425px",

			tab: "768px",

			laptop: "1024px",

			"laptop-lg": "1440px",

			"laptop-xl": "2560px",
		},
		extend: {
			backgroundImage: {
				// "about-bgd": "url('../images/about-bg.jpg')",
			},
		},
	},
	plugins: [],
};
