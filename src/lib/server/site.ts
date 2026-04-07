import { env } from '$env/dynamic/private';

export type SiteId = 'sme' | 'prodeng';

/** Subdomains: sme.agentnativeco.com · prodeng.agentnative.com (or .agentnativeco.com) */
export function resolveSite(hostname: string): SiteId {
	const override = env.SITE?.toLowerCase();
	if (override === 'prodeng' || override === 'sme') return override;

	const h = hostname.toLowerCase().split(':')[0];
	if (h.startsWith('prodeng.')) return 'prodeng';
	if (h.startsWith('sme.')) return 'sme';

	return 'sme';
}
