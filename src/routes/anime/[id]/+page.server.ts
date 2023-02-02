import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
	const anime = await response.json();
	return {
		anime
	};
};
