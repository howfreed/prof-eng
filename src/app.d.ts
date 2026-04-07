// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { SiteId } from '$lib/server/site';

declare global {
	namespace App {
		interface Locals {
			site: SiteId;
		}
	}
}

export {};
