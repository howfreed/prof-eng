<script lang="ts">
	import type { SiteId } from '$lib/server/site';

	let { site = 'sme' }: { site?: SiteId } = $props();

	const line = $derived(
		site === 'prodeng'
			? 'Product engineering · Agentic delivery · PDLC & SDLC'
			: 'AI · Ways of working · Coaching · Development'
	);
</script>

<footer class="border-t border-white/5 bg-[var(--color-surface-1)] py-14">
	<div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
		<div>
			<p class="font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-100">
				agentnative co.
			</p>
			<p class="mt-1 text-sm text-zinc-500">
				{line}
			</p>
		</div>
		<p class="text-sm text-zinc-600">
			© {new Date().getFullYear()} agentnative.
			{#if site === 'prodeng'}
				Product engineering & delivery.
			{:else}
				SMB & mid-market AI workflows.
			{/if}
		</p>
	</div>
</footer>
