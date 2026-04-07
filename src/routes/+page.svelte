<script lang="ts">
	import type { PageProps } from './$types';
	import ProdEngLanding from '$lib/components/site/ProdEngLanding.svelte';
	import SmeLanding from '$lib/components/site/SmeLanding.svelte';

	let { data }: PageProps = $props();
</script>

{#if data.site === 'prodeng'}
	<ProdEngLanding />
{:else}
	<SmeLanding />
{/if}
