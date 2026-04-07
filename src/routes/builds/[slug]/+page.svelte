<script lang="ts">
	import type { PageProps } from './$types';
	import BuildDetailPage from '$lib/components/site/BuildDetailPage.svelte';

	let { data }: PageProps = $props();
</script>

<BuildDetailPage build={data.build} />
