<script lang="ts">
	import type { SiteId } from '$lib/server/site';

	let { site = 'sme' }: { site?: SiteId } = $props();

	const line = $derived(
		site === 'prodeng'
			? 'Product engineering · Agentic delivery · PDLC & SDLC'
			: 'AI · Ways of working · Coaching · Development'
	);

	const navLinks = $derived(
		site === 'prodeng'
			? [
					{ href: '#how-it-works', label: 'How it works' },
					{ href: '#services', label: 'Services' },
					{ href: '#workshops', label: 'Workshops' },
					{ href: '#about', label: 'About' },
					{ href: '#contact', label: 'Contact' }
				]
			: [
					{ href: '#about', label: 'About' },
					{ href: '#services', label: 'How I Help' },
					{ href: '#workshops', label: 'Workshops' },
					{ href: '#contact', label: 'Contact' }
				]
	);
</script>

<footer class="border-t border-white/5 bg-[var(--color-surface-1)] py-12">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
			<div>
				<p class="font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-100">
					agentnative co.
				</p>
				<p class="mt-1 text-sm text-zinc-400">
					{line}
				</p>
			</div>
			<nav aria-label="Footer" class="flex flex-wrap gap-x-6 gap-y-2">
				{#each navLinks as { href, label }}
					<a href={href} class="text-xs text-zinc-600 transition hover:text-zinc-400">{label}</a>
				{/each}
			</nav>
		</div>
		<div class="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
			<p class="text-xs text-zinc-600">
				© {new Date().getFullYear()} agentnative.
				{#if site === 'prodeng'}
					Product engineering & delivery.
				{:else}
					SMB & mid-market AI workflows.
				{/if}
			</p>
			<button
				type="button"
				onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="text-xs text-zinc-600 transition hover:text-zinc-400"
			>↑ Back to top</button>
		</div>
	</div>
</footer>
