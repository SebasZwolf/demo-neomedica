/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				debug : "#00ff00",

				panel : 'var(--panel-color)',
				backg : 'var(--bbody-color)',
				block : 'var(--block-color)',

				'blime' : {
					0 : 'var(--business-lime-0)',		
					1 : 'var(--business-lime-1)',
					2 : 'var(--business-lime-2)',
				},
				'bblue' : {
					0 : 'var(--business-blue-0)',		
					1 : 'var(--business-blue-1)',
					2 : 'var(--business-blue-2)',
				}
			},
		},
	},
	plugins: [],
}
