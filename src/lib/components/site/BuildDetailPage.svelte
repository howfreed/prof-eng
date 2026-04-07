<script lang="ts">
	import type { Build } from '$lib/data/builds';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';

	let { build }: { build: Build } = $props();
</script>

<svelte:head>
	<title>{build.title} · agentnative</title>
	<meta name="description" content={build.desc} />
</svelte:head>

<div class="relative min-h-screen overflow-x-hidden">
	<!-- Background -->
	<div class="pointer-events-none fixed inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(251_191_36/0.12),transparent)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_30%,rgb(167_139_250/0.1),transparent)]"
		></div>
		<div
			class="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:64px_64px]"
		></div>
		<div class="absolute inset-0 bg-linear-to-b from-transparent via-[var(--color-surface-0)]/20 to-[var(--color-surface-0)]"></div>
	</div>

	<SiteHeader site="prodeng" />

	<main class="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
		<!-- Back -->
		<a
			href="/#recent-builds"
			class="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-300"
		>
			<span aria-hidden="true">←</span> Back to builds
		</a>

		<!-- Tag + title -->
		<div class="mt-8">
			<span class="rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300/90">
				{build.tag}
			</span>
		</div>
		<h1
			class="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-white sm:text-4xl"
		>
			{build.title}
		</h1>
		<p class="mt-4 text-lg leading-relaxed text-zinc-400">{build.subheading}</p>

		{#if build.chips.length > 0}
			<div class="mt-5 flex flex-wrap gap-2">
				{#each build.chips as chip}
					<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">{chip}</span>
				{/each}
			</div>
		{/if}

		<p class="mt-6 leading-relaxed text-zinc-500">{build.desc}</p>

		<!-- Sections -->
		{#each build.sections as section}
			<section class="mt-14">
				{#if section.label}
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">{section.label}</p>
				{/if}
				<h2 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
					{section.heading}
				</h2>
				{#if section.body}
					<p class="mt-4 leading-relaxed text-zinc-400">{section.body}</p>
				{/if}
				{#if section.items && section.items.length > 0}
					<ul class="mt-6 grid gap-4 sm:grid-cols-2">
						{#each section.items as item}
							<li class="flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-5 transition hover:border-amber-500/30">
								<h3 class="font-[family-name:var(--font-display)] text-base font-semibold text-white">
									{item.title}
								</h3>
								<p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}

		<!-- Quote -->
		{#if build.quote}
			<blockquote class="mt-14 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] px-7 py-6">
				<p class="text-base italic leading-relaxed text-zinc-300">{build.quote.text}</p>
				<footer class="mt-4">
					<span class="font-semibold text-zinc-200">{build.quote.author}</span>
					<span class="ml-1 text-sm text-zinc-500">{build.quote.role}</span>
				</footer>
			</blockquote>
		{/if}

		<!-- External link -->
		{#if build.externalHref}
			<div class="mt-8 flex items-center gap-3">
				<a
					href={build.externalHref}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-5 py-2.5 text-sm font-medium text-amber-300 transition hover:border-amber-400/50 hover:bg-amber-500/10"
				>
					{build.externalLabel ?? 'Visit site'}
					<span aria-hidden="true">↗</span>
				</a>
			</div>
		{/if}

		<!-- CTA -->
		<div class="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
			<h2 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
				{build.cta.heading}
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-zinc-400">{build.cta.body}</p>
			<div class="mt-6 flex flex-wrap gap-4">
				<a
					href={build.cta.primary.href}
					class="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_32px_-8px_rgb(251_191_36/0.4)] transition hover:bg-amber-300"
				>
					{build.cta.primary.label}
				</a>
				{#if build.cta.secondary}
					<a
						href={build.cta.secondary.href}
						class="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
					>
						{build.cta.secondary.label}
					</a>
				{/if}
			</div>
		</div>
	</main>

	<SiteFooter site="prodeng" />
</div>
