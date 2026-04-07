<script lang="ts">
	import type { PageProps } from './$types';
	import ServiceDetailPage from '$lib/components/site/ServiceDetailPage.svelte';

	let { data }: PageProps = $props();
</script>

<ServiceDetailPage service={data.service} site={data.site} />
