type link = {
	href : string;
	label : string;
}

const root = import.meta.env.SITE ?? "http://localhost:4321";

const links = {
	home : {
		href : new URL('/', root).href,
		label : 'inicio'
	},
} as const satisfies Record<string, link>;

export default links