<script lang="ts">
	import type { PageProps } from './$types';
	import WorkshopDetailPage from '$lib/components/site/WorkshopDetailPage.svelte';

	let { data }: PageProps = $props();
</script>

<WorkshopDetailPage workshop={data.workshop} site={data.site} />
