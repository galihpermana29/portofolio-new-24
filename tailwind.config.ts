import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'basic-textture': "url('/basic-texture.jpeg')",
				dark: "url('/dark.png')",
				mid: "url('/mid.png')",
				light: "url('/light.png')",
				'pattern-1': "url('/pattern-1.jpeg')",
				'pattern-3': "url('/pattern-3.png')",
				'pattern-4': "url('/pattern-4.png')",
				'pattern-5': "url('/pattern-5.png')",
				'pattern-6': "url('/pattern-6.png')",
				'pattern-7': "url('/pattern-7.png')",
			},
		},
	},
	plugins: [],
};
export default config;
