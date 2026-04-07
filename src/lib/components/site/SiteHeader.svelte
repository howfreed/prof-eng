<script lang="ts">
	import type { SiteId } from '$lib/server/site';

	let { site = 'sme' }: { site?: SiteId } = $props();
	let mobileOpen = $state(false);

	const navSme = [
		{ href: '#sme-types', label: 'Sectors' },
		{ href: '#workflows', label: 'Workflows' },
		{ href: '#services', label: 'Services' },
		{ href: '#workshops', label: 'Workshops' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];

	const navProd = [
		{ href: '#how-it-works', label: 'How it works' },
		{ href: '#services', label: 'Services' },
		{ href: '#workshops', label: 'Workshops' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];

	const links = $derived(site === 'prodeng' ? navProd : navSme);

	const ctaClass = $derived(
		site === 'prodeng'
			? 'rounded-full bg-amber-500/15 px-4 py-2 text-sm font-medium text-amber-100 ring-1 ring-amber-400/35 transition hover:bg-amber-500/25'
			: 'rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-200 ring-1 ring-cyan-400/30 transition hover:bg-cyan-500/25'
	);

	const brandClass = $derived(
		site === 'prodeng'
			? 'bg-linear-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent'
			: 'text-gradient'
	);

	const hoverLink = $derived(site === 'prodeng' ? 'hover:text-amber-200/90' : 'hover:text-cyan-300/90');
	const focusRing = $derived(
		site === 'prodeng'
			? 'focus-visible:outline-amber-500/50'
			: 'focus-visible:outline-cyan-500/50'
	);
</script>

<svelte:window onkeydown={(e) => (mobileOpen && e.key === 'Escape' ? (mobileOpen = false) : undefined)} />

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[var(--color-surface-0)]/80 backdrop-blur-xl"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
		<a href="/" class="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
			<span class={brandClass}>agentnative</span>
			<span class="text-zinc-500"> co.</span>
			{#if site === 'prodeng'}
				<span class="ml-2 hidden text-xs font-normal text-zinc-500 sm:inline">· product engineering</span>
			{:else if site === 'sme'}
				<span class="ml-2 hidden text-xs font-normal text-zinc-500 sm:inline">· small and medium business</span>
			{/if}
		</a>
		<nav class="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
			{#each links as { href, label }}
				<a
					{href}
					class="text-sm text-zinc-400 transition {hoverLink}"
				>{label}</a>
			{/each}
		</nav>
		<div class="flex items-center gap-2">
			<a href="#contact" class="hidden sm:inline-flex {ctaClass}"> Book a call </a>
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-2 text-zinc-300 transition hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 {focusRing} lg:hidden"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
				aria-controls="mobile-menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<svg
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if mobileOpen}
						<path d="M18 6 6 18" />
						<path d="M6 6l12 12" />
					{:else}
						<path d="M4 6h16" />
						<path d="M4 12h16" />
						<path d="M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-black/50 lg:hidden"
			aria-label="Close menu"
			onclick={() => (mobileOpen = false)}
		></button>
	{/if}

	<div
		id="mobile-menu"
		class="lg:hidden"
		hidden={!mobileOpen}
	>
		<div class="relative z-50 border-b border-white/10 bg-[var(--color-surface-0)]/95 backdrop-blur-xl">
			<nav class="mx-auto max-w-6xl px-4 py-4 sm:px-6" aria-label="Mobile">
				<div class="grid gap-1">
					{#each links as { href, label }}
						<a
							{href}
							class="rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.05] {hoverLink} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 {focusRing}"
							onclick={() => (mobileOpen = false)}
						>
							{label}
						</a>
					{/each}
				</div>
				<div class="mt-4">
					<a href="#contact" class="inline-flex w-full items-center justify-center {ctaClass}" onclick={() => (mobileOpen = false)}>
						Book a call
					</a>
				</div>
			</nav>
		</div>
	</div>
</header>
