<script lang="ts">
	import type { SiteId } from '$lib/server/site';
	import type { Service } from '$lib/data/services';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';

	let { service, site }: { service: Service; site: SiteId } = $props();

	const accent = $derived(site === 'prodeng' ? 'amber' : 'cyan');
	const badge = $derived(
		accent === 'amber'
			? 'border-amber-400/30 bg-amber-500/10 text-amber-200/90'
			: 'border-cyan-400/25 bg-cyan-500/10 text-cyan-200/90'
	);
	const dot = $derived(accent === 'amber' ? 'bg-amber-400' : 'bg-cyan-400');
	const backHref = '/#services';
</script>

<svelte:head>
	<title>{service.title}, agentnative</title>
	<meta name="description" content={service.desc} />
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
			<span aria-hidden="true">←</span> Back to services
		</a>

		<p class="mt-8 font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
			{site === 'sme' ? 'What this solves' : 'Service'}
		</p>
		<h1 class="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
			{service.title}
		</h1>

		<div class="mt-6">
			<span
				class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium {badge}"
			>
				<span class="h-1.5 w-1.5 rounded-full {dot} opacity-90"></span>
				{service.tag}
			</span>
		</div>

		<p class="mt-8 text-lg leading-relaxed text-zinc-400">{service.desc}</p>
		<p class="mt-6 leading-relaxed text-zinc-500">{service.lede}</p>

		<section class="mt-12">
			<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">What’s included</h2>
			<ul class="mt-4 space-y-3 text-zinc-400">
				{#each service.includes as line}
					<li class="flex gap-3">
						<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full {accent === 'amber' ? 'bg-amber-400/80' : 'bg-cyan-400/80'}"></span>
						<span>{line}</span>
					</li>
				{/each}
			</ul>
		</section>

		{#if service.idealFor && service.idealFor.length > 0}
			<section class="mt-12">
				<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Good fit when</h2>
				<ul class="mt-4 space-y-3 text-sm leading-relaxed text-zinc-500">
					{#each service.idealFor as line}
						<li class="flex gap-2">
							<span class="text-zinc-600">•</span>
							<span>{line}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<div
			class="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-10"
		>
			<p class="text-sm text-zinc-400">
				Want to scope this for your context?
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
