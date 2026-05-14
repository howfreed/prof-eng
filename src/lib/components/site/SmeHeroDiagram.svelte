<script lang="ts">
	const iconClass = 'h-4 w-4 shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgb(34_211_238/0.35)]';

	const problems = [
		{ label: 'Manual admin', icon: 'document' },
		{ label: 'Duplicate data', icon: 'database' },
		{ label: 'Slow handoffs', icon: 'clock' }
	];

	const outcomes = [
		{ label: 'Faster turnaround', icon: 'bolt' },
		{ label: 'Fewer errors', icon: 'check' },
		{ label: 'Time back', icon: 'people' }
	];
</script>

<div
	class="sme-hero-diagram relative hidden overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#07111b]/95 p-4 shadow-[0_30px_90px_-42px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.08)] md:block xl:p-5"
	aria-hidden="true"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.045)_1px,transparent_1px)] [background-size:24px_24px]"
	></div>
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgb(34_211_238/0.22),transparent_38%)]"></div>
	<div class="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-cyan-200/45 to-transparent"></div>
	<div class="pointer-events-none absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"></div>
	<div class="pointer-events-none absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl"></div>

	<div class="relative mb-4 flex items-center justify-between gap-3">
		<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-300/90">
			Workflow redesign
		</p>
		<div class="h-px flex-1 bg-linear-to-r from-cyan-300/35 to-transparent"></div>
		<p class="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">Before / after</p>
	</div>

	<div class="relative space-y-2.5">
		<section class="diagram-stage problem-stage relative rounded-2xl border border-white/10 bg-white/[0.035] p-3 shadow-[0_18px_44px_-34px_rgb(0_0_0/0.9),inset_0_1px_0_rgb(255_255_255/0.06)]">
			<div class="flex items-center justify-between gap-4">
				<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
					The problem
				</p>
				<span class="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-zinc-500">
					Before
				</span>
			</div>
			<div class="mt-3 grid grid-cols-3 gap-2">
				{#each problems as item}
					<div class="diagram-chip problem-card flex min-h-11 flex-col items-start justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.045] px-2.5 py-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]">
						{#if item.icon === 'document'}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<polyline points="14 2 14 8 20 8" />
								<line x1="16" y1="13" x2="8" y2="13" />
								<line x1="16" y1="17" x2="8" y2="17" />
							</svg>
						{:else if item.icon === 'database'}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<ellipse cx="12" cy="5" rx="9" ry="3" />
								<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
								<path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
							</svg>
						{:else}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
						{/if}
						<span class="text-[11px] font-semibold leading-tight text-zinc-200">{item.label}</span>
					</div>
				{/each}
			</div>
		</section>

		<div class="flow-step flow-step-first relative flex h-7 justify-center">
			<span class="flow-line absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-cyan-300/20 via-cyan-300/65 to-cyan-300/20"></span>
			<span class="flow-spark" aria-hidden="true"></span>
			<span class="flow-node relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200/80 bg-cyan-500/20 text-cyan-100 shadow-[0_0_24px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.18)]">
				<svg class="h-3.5 w-3.5 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</span>
		</div>

		<section class="solution-card relative overflow-hidden rounded-2xl border border-cyan-200/80 bg-[radial-gradient(circle_at_50%_0%,rgb(103_232_249/0.2),transparent_48%),linear-gradient(180deg,rgb(34_211_238/0.13),rgb(14_165_233/0.055))] p-3.5 shadow-[0_0_52px_-12px_rgb(34_211_238/0.95),0_24px_60px_-36px_rgb(34_211_238/0.75),inset_0_1px_0_rgb(255_255_255/0.14)]">
			<div class="flex items-center gap-3">
				<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-100/35 bg-cyan-100/10 text-cyan-100 shadow-[inset_0_1px_0_rgb(255_255_255/0.14)]">
					<svg class="bot-icon h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
						<rect x="5" y="8" width="14" height="10" rx="2" />
						<path d="M9 8V6a3 3 0 0 1 6 0v2" />
						<circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
						<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
						<path d="M10 16h4" stroke-linecap="round" />
					</svg>
				</div>
				<div>
					<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
						The redesign
					</p>
					<p class="mt-1 text-base font-bold leading-tight text-white">Automated workflow</p>
					<p class="mt-0.5 text-[11px] leading-relaxed text-cyan-100/70">Connected process, clear owners.</p>
				</div>
			</div>
		</section>

		<div class="flow-step flow-step-second relative flex h-7 justify-center">
			<span class="flow-line absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-cyan-300/20 via-cyan-300/65 to-cyan-300/20"></span>
			<span class="flow-spark" aria-hidden="true"></span>
			<span class="flow-node relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200/80 bg-cyan-500/20 text-cyan-100 shadow-[0_0_24px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.18)]">
				<svg class="h-3.5 w-3.5 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</span>
		</div>

		<section class="diagram-stage outcome-stage rounded-2xl border border-cyan-300/20 bg-linear-to-br from-cyan-300/[0.06] to-white/[0.025] p-3 shadow-[0_18px_44px_-34px_rgb(34_211_238/0.7),inset_0_1px_0_rgb(255_255_255/0.07)]">
			<div class="flex items-center justify-between gap-4">
				<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
					The outcome
				</p>
				<span class="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-medium text-cyan-200/80">
					After
				</span>
			</div>
			<div class="mt-3 grid grid-cols-3 gap-2">
				{#each outcomes as item}
					<div class="diagram-chip outcome-card flex min-h-11 flex-col items-start justify-center gap-1.5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] px-2.5 py-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
						{#if item.icon === 'bolt'}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
							</svg>
						{:else if item.icon === 'check'}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
								<polyline points="22 4 12 14.01 9 11.01" />
							</svg>
						{:else}
							<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						{/if}
						<span class="text-[11px] font-semibold leading-tight text-zinc-100">{item.label}</span>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	.sme-hero-diagram {
		--flow-delay: 0ms;
	}

	.diagram-chip,
	.diagram-stage,
	.solution-card,
	.flow-step {
		animation: diagram-rise 680ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.diagram-chip,
	.diagram-stage,
	.solution-card {
		backdrop-filter: blur(10px);
	}

	.problem-stage {
		animation-delay: 60ms;
	}

	.problem-card:nth-child(1) {
		animation-delay: 140ms;
	}

	.problem-card:nth-child(2) {
		animation-delay: 200ms;
	}

	.problem-card:nth-child(3) {
		animation-delay: 260ms;
	}

	.flow-step-first {
		--flow-delay: 700ms;
		animation-delay: 340ms;
	}

	.solution-card {
		animation-delay: 440ms;
		position: relative;
	}

	.flow-step-second {
		--flow-delay: 1800ms;
		animation-delay: 600ms;
	}

	.outcome-stage {
		animation-delay: 700ms;
	}

	.outcome-card:nth-child(1) {
		animation-delay: 840ms;
	}

	.outcome-card:nth-child(2) {
		animation-delay: 940ms;
	}

	.outcome-card:nth-child(3) {
		animation-delay: 1040ms;
	}

	.flow-node {
		animation: node-pulse 2600ms ease-in-out infinite;
		animation-delay: var(--flow-delay);
	}

	.flow-spark {
		position: absolute;
		top: 0;
		left: calc(50% - 3px);
		z-index: 5;
		width: 6px;
		height: 6px;
		border-radius: 9999px;
		background: rgb(103 232 249);
		box-shadow: 0 0 14px rgb(34 211 238 / 0.9);
		opacity: 0;
		animation: flow-spark 2600ms ease-in-out infinite;
		animation-delay: var(--flow-delay);
	}

	.solution-card::after {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: inherit;
		pointer-events: none;
		background: linear-gradient(90deg, transparent, rgb(103 232 249 / 0.38), transparent);
		opacity: 0;
		transform: translateX(-45%);
		animation: solution-scan 2600ms ease-in-out infinite;
		animation-delay: 1150ms;
	}

	.bot-icon {
		animation: bot-float 3200ms ease-in-out infinite;
		animation-delay: 900ms;
	}

	@keyframes diagram-rise {
		from {
			opacity: 0;
			transform: translateY(10px) scale(0.98);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes node-pulse {
		0%,
		48%,
		100% {
			transform: scale(1);
			box-shadow: 0 0 22px rgb(34 211 238 / 0.55);
		}

		12% {
			transform: scale(1.08);
			box-shadow: 0 0 30px rgb(34 211 238 / 0.9);
		}
	}

	@keyframes flow-spark {
		0%,
		18% {
			opacity: 0;
			transform: translateY(0) scale(0.6);
		}

		30% {
			opacity: 1;
		}

		58% {
			opacity: 1;
			transform: translateY(22px) scale(1);
		}

		72%,
		100% {
			opacity: 0;
			transform: translateY(26px) scale(0.6);
		}
	}

	@keyframes solution-scan {
		0%,
		40%,
		100% {
			opacity: 0;
			transform: translateX(-45%);
		}

		52% {
			opacity: 0.2;
		}

		68% {
			opacity: 0;
			transform: translateX(45%);
		}
	}

	@keyframes bot-float {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-3px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.diagram-chip,
		.diagram-stage,
		.solution-card,
		.flow-step,
		.flow-node,
		.flow-spark,
		.solution-card::after,
		.bot-icon {
			animation: none;
		}

		.flow-spark,
		.solution-card::after {
			display: none;
		}
	}
</style>
