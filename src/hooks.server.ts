import type { Handle, RequestEvent } from '@sveltejs/kit';
import { resolveSite } from '$lib/server/site';

/** Prefer the Host header, in Vite dev, `event.url.hostname` is often `localhost` even for `sme.localhost`. */
function requestHostname(event: RequestEvent): string {
	const hostHeader = event.request.headers.get('host');
	if (hostHeader) {
		const host = hostHeader.split(':')[0]?.trim().toLowerCase();
		if (host) return host;
	}
	return event.url.hostname.toLowerCase();
}

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	if (path.startsWith('/workshops/prodeng')) {
		event.locals.site = 'prodeng';
	} else if (path.startsWith('/workshops/sme')) {
		event.locals.site = 'sme';
	} else {
		event.locals.site = resolveSite(requestHostname(event));
	}
	return resolve(event);
};
