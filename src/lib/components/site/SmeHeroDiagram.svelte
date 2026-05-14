<script lang="ts">
	const iconClass = 'h-5 w-5 shrink-0 text-cyan-300 drop-shadow-[0_0_10px_rgb(34_211_238/0.35)]';
</script>

<div
	class="sme-hero-diagram relative hidden overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#07111b]/95 p-5 shadow-[0_30px_90px_-42px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.08)] sm:p-6 md:block xl:p-7"
	aria-hidden="true"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.045)_1px,transparent_1px)] [background-size:24px_24px]"
	></div>
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgb(34_211_238/0.22),transparent_38%)]"></div>
	<div class="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-cyan-200/45 to-transparent"></div>
	<div class="pointer-events-none absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"></div>
	<div class="pointer-events-none absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl"></div>

	<div class="relative mb-5 flex items-center justify-between gap-3 xl:mb-6 xl:gap-4">
		<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-300/90">
			Workflow redesign
		</p>
		<div class="h-px flex-1 bg-linear-to-r from-cyan-300/35 to-transparent"></div>
		<p class="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">Before &rarr; after</p>
	</div>

	<div class="relative grid gap-6 lg:grid-cols-[7rem_2.2rem_minmax(7.1rem,1fr)_2.2rem_7rem] lg:items-center lg:gap-2 xl:grid-cols-[8.2rem_2.8rem_minmax(8rem,1fr)_2.8rem_8.2rem] xl:gap-3">
		<!-- Problem -->
		<div class="flex min-w-0 flex-col gap-3.5">
			<p class="text-center font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
				The problem
			</p>
			<div class="flex flex-col gap-3 xl:gap-3.5">
				<div
					class="diagram-card problem-card flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 shadow-[0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.06)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Manual admin</span>
				</div>
				<div
					class="diagram-card problem-card flex min-h-14 items-center gap-2.5 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.075] px-3 py-2.5 shadow-[0_0_34px_-20px_rgb(34_211_238/0.9),0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.07)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<ellipse cx="12" cy="5" rx="9" ry="3" />
						<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
						<path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Duplicate data</span>
				</div>
				<div
					class="diagram-card problem-card flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 shadow-[0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.06)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Slow handoffs</span>
				</div>
			</div>
		</div>

		<div class="flow-connector flow-connector-left relative hidden h-40 items-center justify-center lg:flex xl:h-44">
			<svg class="absolute inset-y-0 left-0 h-full w-full text-cyan-100/38" viewBox="0 0 50 176" fill="none" aria-hidden="true">
				<path d="M2 28H18C30 28 33 38 33 51V125C33 138 30 148 18 148H2" stroke="currentColor" stroke-width="1.15" />
				<path d="M33 88H49" stroke="currentColor" stroke-width="1.15" />
			</svg>
			<span class="flow-spark" aria-hidden="true"></span>
			<div class="flow-node relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/80 bg-cyan-500/20 text-cyan-100 shadow-[0_0_24px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.18)] xl:h-9 xl:w-9">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>

		<!-- Solution -->
		<div class="flex min-w-0 flex-col items-center gap-[1.125rem]">
			<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
				The solution
			</p>
			<div
				class="solution-card flex min-h-40 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-cyan-200/80 bg-[radial-gradient(circle_at_50%_15%,rgb(103_232_249/0.17),transparent_42%),linear-gradient(180deg,rgb(34_211_238/0.12),rgb(14_165_233/0.055))] px-4 py-7 shadow-[0_0_48px_-10px_rgb(34_211_238/0.95),0_24px_60px_-32px_rgb(34_211_238/0.65),inset_0_1px_0_rgb(255_255_255/0.14)] xl:min-h-44 xl:px-5 xl:py-8"
			>
				<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100/35 bg-cyan-100/10 text-cyan-100 shadow-[inset_0_1px_0_rgb(255_255_255/0.14)] xl:h-14 xl:w-14">
					<svg class="bot-icon h-8 w-8 xl:h-9 xl:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
						<rect x="5" y="8" width="14" height="10" rx="2" />
						<path d="M9 8V6a3 3 0 0 1 6 0v2" />
						<circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
						<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
						<path d="M10 16h4" stroke-linecap="round" />
					</svg>
				</div>
				<p class="text-center text-base font-bold leading-tight text-white">Automated workflow</p>
				<p class="mt-2 max-w-[9rem] text-center text-[11px] leading-relaxed text-cyan-100/70">One process, connected end to end</p>
			</div>
		</div>

		<div class="flow-connector flow-connector-right relative hidden h-40 items-center justify-center lg:flex xl:h-44">
			<svg class="absolute inset-y-0 right-0 h-full w-full text-cyan-100/38" viewBox="0 0 50 176" fill="none" aria-hidden="true">
				<path d="M48 28H32C20 28 17 38 17 51V125C17 138 20 148 32 148H48" stroke="currentColor" stroke-width="1.15" />
				<path d="M1 88H17" stroke="currentColor" stroke-width="1.15" />
			</svg>
			<span class="flow-spark" aria-hidden="true"></span>
			<div class="flow-node relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/80 bg-cyan-500/20 text-cyan-100 shadow-[0_0_24px_rgb(34_211_238/0.55),inset_0_1px_0_rgb(255_255_255/0.18)] xl:h-9 xl:w-9">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>

		<!-- Outcome -->
		<div class="flex min-w-0 flex-col gap-3.5">
			<p class="text-center font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
				The outcome
			</p>
			<div class="flex flex-col gap-3 xl:gap-3.5">
				<div
					class="diagram-card outcome-card flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 shadow-[0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.06)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Faster turnaround</span>
				</div>
				<div
					class="diagram-card outcome-card flex min-h-14 items-center gap-2.5 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.075] px-3 py-2.5 shadow-[0_0_34px_-20px_rgb(34_211_238/0.9),0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.07)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
						<polyline points="22 4 12 14.01 9 11.01" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Fewer errors</span>
				</div>
				<div
					class="diagram-card outcome-card flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 shadow-[0_16px_32px_-26px_rgb(0_0_0/0.8),inset_0_1px_0_rgb(255_255_255/0.06)] xl:min-h-16 xl:gap-3 xl:px-3.5 xl:py-3"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M16 3.13a4 4 0 0 1 0 7.75" />
					</svg>
					<span class="text-xs font-semibold leading-snug text-zinc-200 xl:text-[13px]">Time back</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.sme-hero-diagram {
		--flow-delay: 0ms;
	}

	.diagram-card,
	.solution-card,
	.flow-connector {
		animation: diagram-rise 680ms cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.diagram-card {
		backdrop-filter: blur(10px);
	}

	.problem-card:nth-child(1) {
		animation-delay: 80ms;
	}

	.problem-card:nth-child(2) {
		animation-delay: 160ms;
	}

	.problem-card:nth-child(3) {
		animation-delay: 240ms;
	}

	.flow-connector-left {
		--flow-delay: 700ms;
		animation-delay: 340ms;
	}

	.solution-card {
		animation-delay: 500ms;
		position: relative;
	}

	.flow-connector-right {
		--flow-delay: 1800ms;
		animation-delay: 660ms;
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
		top: calc(50% - 3px);
		left: 0;
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

	.flow-connector-right .flow-spark {
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
			transform: translateX(4px) scale(0.6);
		}

		30% {
			opacity: 1;
		}

		58% {
			opacity: 1;
			transform: translateX(38px) scale(1);
		}

		72%,
		100% {
			opacity: 0;
			transform: translateX(42px) scale(0.6);
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
		.diagram-card,
		.solution-card,
		.flow-connector,
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
