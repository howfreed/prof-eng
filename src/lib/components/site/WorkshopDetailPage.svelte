<script lang="ts">
	import type { SiteId } from '$lib/server/site';
	import type { Workshop } from '$lib/data/workshops';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';

	let { workshop, site }: { workshop: Workshop; site: SiteId } = $props();

	const accent = $derived(site === 'prodeng' ? 'amber' : 'cyan');
	const ring = $derived(
		accent === 'amber' ? 'border-amber-500/25 ring-amber-500/20' : 'border-cyan-500/20 ring-cyan-500/15'
	);
	const badge = $derived(
		accent === 'amber'
			? 'border-amber-400/30 bg-amber-500/10 text-amber-200/90'
			: 'border-cyan-400/25 bg-cyan-500/10 text-cyan-200/90'
	);
	const dot = $derived(accent === 'amber' ? 'bg-amber-400' : 'bg-cyan-400');
	const backHref = '/#workshops';
</script>

<svelte:head>
	<title>{workshop.title}, agentnative</title>
	<meta name="description" content={workshop.desc} />
</svelte:head>

<div class="relative min-h-screen overflow-x-hidden">
	<div class="pointer-events-none fixed inset-0 -z-10">
		{#if accent === 'amber'}
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(251_191_36/0.12),transparent)]"
			></div>
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_30%,rgb(167_139_250/0.1),transparent)]"
			></div>
		{:else}
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(34_211_238/0.14),transparent)]"
			></div>
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgb(167_139_250/0.1),transparent)]"
			></div>
		{/if}
		<div
			class="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:64px_64px]"
		></div>
	</div>

	<SiteHeader {site} />

	<main class="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
		<a
			href={backHref}
			class="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-300"
		>
			<span aria-hidden="true">←</span> Back to workshops
		</a>

		<p class="mt-8 font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
			Workshop
		</p>
		<h1 class="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
			{workshop.title}
		</h1>

		<div class="mt-6 flex flex-wrap gap-3">
			<span
				class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium {badge}"
			>
				<span class="h-1.5 w-1.5 rounded-full {dot} opacity-90"></span>
				{workshop.duration}
			</span>
			<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
				For: {workshop.audience}
			</span>
		</div>

		<p class="mt-8 text-lg leading-relaxed text-zinc-400">{workshop.desc}</p>

		<section class="mt-12">
			<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Outcomes</h2>
			<ul class="mt-4 space-y-3 text-zinc-400">
				{#each workshop.outcomes as o}
					<li class="flex gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full {accent === 'amber' ? 'bg-amber-400/80' : 'bg-cyan-400/80'}"></span>
						<span>{o}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section class="mt-14">
			<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Agenda</h2>
			<ol class="mt-6 space-y-8">
				{#each workshop.agenda as block, i}
					<li class="rounded-2xl border bg-[var(--color-surface-2)]/50 p-6 {ring} ring-1">
						<div class="flex flex-wrap items-baseline justify-between gap-2">
							<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
								<span class="text-zinc-600">{String(i + 1).padStart(2, '0')}.</span>
								{block.title}
							</h3>
							{#if block.duration}
								<span class="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{block.duration}</span>
							{/if}
						</div>
						<ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-400">
							{#each block.items as item}
								<li class="flex gap-2.5">
									<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</section>

		{#if workshop.formatNotes && workshop.formatNotes.length > 0}
			<section class="mt-12">
				<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Format &amp; preparation</h2>
				<ul class="mt-4 space-y-2 text-sm leading-relaxed text-zinc-500">
					{#each workshop.formatNotes as note}
						<li class="flex gap-2">
							<span class="text-zinc-600">•</span>
							<span>{note}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<div
			class="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-10"
		>
			<p class="text-sm text-zinc-400">
				Interested in this workshop or a tailored variant?
			</p>
			<a
				href="/#contact"
				class="mt-5 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition {accent === 'amber'
					? 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
					: 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300'}"
			>
				Enquire via contact
			</a>
		</div>
	</main>

	<SiteFooter {site} />
</div>
