import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getService } from '$lib/data/services';
import type { SiteId } from '$lib/server/site';

export const load: PageServerLoad = async ({ params }) => {
	const site = params.site as SiteId;
	if (site !== 'sme' && site !== 'prodeng') error(404);
	const service = getService(site, params.slug);
	if (!service) error(404);
	return { site, service };
};
