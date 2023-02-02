import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
	const animes = await response.json();
	return {
		animes
	};
};
