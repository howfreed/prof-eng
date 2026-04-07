import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getWorkshop } from '$lib/data/workshops';
import type { SiteId } from '$lib/server/site';

export const load: PageServerLoad = async ({ params }) => {
	const site = params.site as SiteId;
	if (site !== 'sme' && site !== 'prodeng') error(404);
	const workshop = getWorkshop(site, params.slug);
	if (!workshop) error(404);
	return { site, workshop };
};
