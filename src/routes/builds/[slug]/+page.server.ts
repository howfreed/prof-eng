import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getBuild } from '$lib/data/builds';

export const load: PageServerLoad = async ({ params }) => {
	const build = getBuild(params.slug);
	if (!build) error(404);
	return { build };
};
