/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [

		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
		  colors: {
			'uhigreen':'#D5F8C8;',
			'uhipurple':'#d3c8f8'
		  },
		  fontFamily:{
			'sans': ['Poppins', 'sans-serif'],
		  }
		},
	  },
	plugins: [],
};
