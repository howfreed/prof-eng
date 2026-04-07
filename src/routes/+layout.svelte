<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import type { LayoutData } from './$types';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();

	const isSubpageWithOwnMeta = $derived(
		page.url.pathname.startsWith('/workshops/') || page.url.pathname.startsWith('/services/')
	);

	const meta = $derived(
		data.site === 'prodeng'
			? {
					title: 'agentnative, Product engineering & agentic pipelines',
					description:
						'End-to-end product engineering across PDLC and SDLC, ideation, discovery, delivery, launch, and measure, with assessments and agentic pipeline delivery.'
				}
			: {
					title: 'agentnative, AI workflows for growing businesses',
					description:
						'High-value workflow redesign for SMBs and mid-market teams, so AI reduces manual effort, shortens cycle times, and delivers measurable business return.'
				}
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:wght@400;500&family=Syne:wght@500..800&display=swap"
		rel="stylesheet"
	/>
	{#if !isSubpageWithOwnMeta}
		<meta name="description" content={meta.description} />
		<title>{meta.title}</title>
	{/if}
</svelte:head>
<div data-site={data.site}>
	{@render children()}
</div>
