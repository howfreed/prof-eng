<script lang="ts">
	/** Decorative hero art: PDLC arc, cyan (SME) or amber (product engineering). */
	let { variant }: { variant: 'sme' | 'prodeng' } = $props();

	const gradId = $derived(`hero-arc-${variant}`);

	const theme = $derived(
		variant === 'sme'
			? {
					gradLo: 'rgb(34 211 238 / 0.15)',
					gradMid: 'rgb(34 211 238 / 0.45)',
					centerFill: 'rgb(34 211 238)',
					centerStroke: 'rgb(165 243 252)',
					loop: 'rgb(34 211 238 / 0.25)'
				}
			: {
					gradLo: 'rgb(251 191 36 / 0.15)',
					gradMid: 'rgb(251 191 36 / 0.45)',
					centerFill: 'rgb(251 191 36)',
					centerStroke: 'rgb(253 230 138)',
					loop: 'rgb(251 191 36 / 0.25)'
				}
	);
</script>

<div class="mx-auto mb-8 flex max-w-xl justify-center px-2" aria-hidden="true">
	<svg
		class="h-[96px] w-full max-w-[min(100%,440px)] sm:h-[108px]"
		viewBox="0 0 440 112"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color={theme.gradLo} />
				<stop offset="50%" stop-color={theme.gradMid} />
				<stop offset="100%" stop-color={theme.gradLo} />
			</linearGradient>
		</defs>
		<!-- PDLC arc -->
		<path
			d="M 48 92 C 48 36, 220 8, 392 92"
			stroke={`url(#${gradId})`}
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
		/>
		<path
			d="M 48 92 C 48 36, 220 8, 392 92"
			stroke="rgb(63 63 70)"
			stroke-width="1"
			fill="none"
			stroke-linecap="round"
			opacity="0.6"
		/>
		<!-- phase dots -->
		{#each [{ cx: 48, cy: 92 }, { cx: 132, cy: 44 }, { cx: 220, cy: 28 }, { cx: 308, cy: 44 }, { cx: 392, cy: 92 }] as p, i}
			<circle
				cx={p.cx}
				cy={p.cy}
				r={i === 2 ? 5 : 4}
				fill={i === 2 ? theme.centerFill : 'rgb(39 39 42)'}
				stroke={i === 2 ? theme.centerStroke : 'rgb(82 82 91)'}
				stroke-width="1"
			/>
		{/each}
		<!-- loop hint -->
		<path
			d="M 368 78 C 400 62, 400 38, 368 22"
			stroke={theme.loop}
			stroke-width="1.25"
			fill="none"
			stroke-linecap="round"
			stroke-dasharray="3 5"
		/>
	</svg>
</div>
