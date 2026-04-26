<script lang="ts">
	const steps = [
		{
			number: '1',
			title: 'Close trigger',
			desc: 'Scheduled month-end',
			color: 'cyan',
			icon: 'calendar'
		},
		{
			number: '2',
			title: 'Pull source data',
			desc: 'Ledger - balances - journals',
			color: 'blue',
			icon: 'database'
		},
		{
			number: '3',
			title: 'Reconcile & flag',
			desc: 'Variance checks - rules',
			color: 'amber',
			icon: 'target'
		},
		{
			number: '4',
			title: 'AI draft commentary',
			desc: 'First-pass narrative',
			color: 'violet',
			icon: 'spark'
		},
		{
			number: '5',
			title: 'Finance review',
			desc: 'Judgement - sign-off',
			color: 'pink',
			icon: 'review'
		},
		{
			number: '6',
			title: 'Board / client pack',
			desc: 'Ready to send',
			color: 'emerald',
			icon: 'pack'
		}
	];

	const colorClass = (color: string) => {
		if (color === 'blue') return 'border-sky-400/35 text-sky-300 shadow-[0_0_30px_-18px_rgb(56_189_248/0.9)]';
		if (color === 'amber') return 'border-amber-400/35 text-amber-300 shadow-[0_0_30px_-18px_rgb(251_191_36/0.9)]';
		if (color === 'violet') return 'border-violet-400/35 text-violet-300 shadow-[0_0_30px_-18px_rgb(167_139_250/0.9)]';
		if (color === 'pink') return 'border-pink-400/35 text-pink-300 shadow-[0_0_30px_-18px_rgb(244_114_182/0.9)]';
		if (color === 'emerald') return 'border-emerald-400/35 text-emerald-300 shadow-[0_0_30px_-18px_rgb(52_211_153/0.9)]';
		return 'border-cyan-300/35 text-cyan-300 shadow-[0_0_30px_-18px_rgb(34_211_238/0.9)]';
	};
</script>

<div
	class="relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-[#07111b]/85 px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] sm:px-7"
	role="img"
	aria-label="Illustrative month-end close workflow from close trigger through board or client pack, with an exception queue"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:22px_22px]"
	></div>
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgb(34_211_238/0.12),transparent_36%)]"></div>

	<div class="relative">
		<p class="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
			Illustrative workflow - month-end close
		</p>

		<div class="mt-8 overflow-x-auto pb-3">
			<div class="grid min-w-[900px] grid-cols-[repeat(6,minmax(0,1fr))] items-start gap-5">
				{#each steps as step, i}
					<div class="relative">
						{#if i < steps.length - 1}
							<div class="absolute left-full top-12 z-0 h-px w-5 bg-cyan-200/55"></div>
							<div class="absolute left-[calc(100%+1.05rem)] top-[2.85rem] z-10 h-2 w-2 rounded-full bg-cyan-100 shadow-[0_0_10px_rgb(34_211_238/0.9)]"></div>
						{/if}

						<div class="relative z-10 min-h-28 rounded-lg border bg-white/[0.035] p-4 {colorClass(step.color)}">
							<div class="flex items-center gap-2">
								<div class="flex h-7 w-7 items-center justify-center rounded-md border border-current/25 bg-current/10">
									{#if step.icon === 'calendar'}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<rect x="3" y="4" width="18" height="18" rx="2" />
											<path d="M8 2v4M16 2v4M3 10h18" stroke-linecap="round" />
										</svg>
									{:else if step.icon === 'database'}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<ellipse cx="12" cy="5" rx="8" ry="3" />
											<path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
										</svg>
									{:else if step.icon === 'target'}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<circle cx="12" cy="12" r="8" />
											<circle cx="12" cy="12" r="3" />
											<path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke-linecap="round" />
										</svg>
									{:else if step.icon === 'spark'}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<path d="M13 2 9 10l-7 3 7 3 4 8 4-8 7-3-7-3-4-8Z" stroke-linejoin="round" />
										</svg>
									{:else if step.icon === 'review'}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<circle cx="12" cy="8" r="4" />
											<path d="M4 22a8 8 0 0 1 16 0" />
											<path d="m16 18 1.5 1.5L21 16" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else}
										<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
											<rect x="5" y="3" width="14" height="18" rx="2" />
											<path d="M9 8h6M9 12h6M9 16h4" stroke-linecap="round" />
										</svg>
									{/if}
								</div>
								<span class="font-[family-name:var(--font-display)] text-xl font-bold">{step.number}</span>
							</div>
							<h3 class="mt-4 text-sm font-semibold text-white">{step.title}</h3>
							<p class="mt-2 text-xs leading-relaxed text-zinc-400">{step.desc}</p>
						</div>

						{#if i === 2}
							<div class="absolute left-1/2 top-full hidden h-9 border-l border-dashed border-zinc-500/80 lg:block"></div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="mt-9 hidden justify-center lg:flex">
				<div class="rounded-lg border border-zinc-500/35 bg-white/[0.025] px-5 py-3 text-left">
					<div class="flex items-center gap-3">
						<svg class="h-5 w-5 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
							<path d="M12 3 2 21h20L12 3Z" />
							<path d="M12 9v5M12 17h.01" stroke-linecap="round" />
						</svg>
						<div>
							<p class="text-xs font-semibold text-zinc-200">Exception queue</p>
							<p class="text-[11px] text-zinc-500">Items for human follow-up</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<p class="text-center text-[10px] text-zinc-600 sm:text-xs">
			Illustrative example inspired by workflow tools - no vendor affiliation.
		</p>
	</div>
</div>
