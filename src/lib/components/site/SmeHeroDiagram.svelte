<script lang="ts">
	const iconClass = 'h-5 w-5 shrink-0 text-cyan-300';
</script>

<div
	class="relative hidden overflow-hidden rounded-xl border border-cyan-300/10 bg-[#07111b]/90 p-5 shadow-[0_24px_70px_-34px_rgb(34_211_238/0.4),inset_0_1px_0_rgb(255_255_255/0.06)] sm:p-6 md:block"
	aria-hidden="true"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.33] [background-image:linear-gradient(rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.045)_1px,transparent_1px)] [background-size:24px_24px]"
	></div>
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(34_211_238/0.16),transparent_44%)]"></div>

	<div class="relative grid gap-6 lg:grid-cols-[7.4rem_2.8rem_minmax(7rem,1fr)_2.8rem_7.4rem] lg:items-center lg:gap-2">
		<!-- Problem -->
		<div class="flex min-w-0 flex-col gap-3">
			<p class="text-center font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400/80">
				The problem
			</p>
			<div class="flex flex-col gap-3">
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">Manual admin</span>
				</div>
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-cyan-300/15 bg-cyan-300/[0.055] px-3 py-2.5 shadow-[0_0_28px_-18px_rgb(34_211_238/0.8),inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<ellipse cx="12" cy="5" rx="9" ry="3" />
						<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
						<path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">Duplicate data</span>
				</div>
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">Slow handoffs</span>
				</div>
			</div>
		</div>

		<div class="relative hidden h-36 items-center justify-center lg:flex">
			<svg class="absolute inset-y-0 left-0 h-full w-full text-zinc-400/45" viewBox="0 0 44 144" fill="none" aria-hidden="true">
				<path d="M2 22H15C25 22 27 30 27 40V104C27 114 25 122 15 122H2" stroke="currentColor" stroke-width="1.1" />
				<path d="M27 72H43" stroke="currentColor" stroke-width="1.1" />
			</svg>
			<div class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 bg-cyan-500/20 text-cyan-200 shadow-[0_0_22px_rgb(34_211_238/0.55)]">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>

		<!-- Solution -->
		<div class="flex min-w-0 flex-col items-center gap-4">
			<p class="font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400/80">
				The solution
			</p>
			<div
				class="flex min-h-36 w-full flex-col items-center justify-center rounded-xl border border-cyan-300 bg-cyan-400/[0.075] px-4 py-7 shadow-[0_0_38px_-8px_rgb(34_211_238/0.8),inset_0_1px_0_rgb(255_255_255/0.08)] sm:min-h-40"
			>
				<svg class="mb-3 h-11 w-11 text-cyan-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">
					<rect x="5" y="8" width="14" height="10" rx="2" />
					<path d="M9 8V6a3 3 0 0 1 6 0v2" />
					<circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
					<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
					<path d="M10 16h4" stroke-linecap="round" />
				</svg>
				<p class="text-center text-sm font-semibold text-white">Automated workflow</p>
			</div>
		</div>

		<div class="relative hidden h-36 items-center justify-center lg:flex">
			<svg class="absolute inset-y-0 right-0 h-full w-full text-zinc-400/45" viewBox="0 0 44 144" fill="none" aria-hidden="true">
				<path d="M42 22H29C19 22 17 30 17 40V104C17 114 19 122 29 122H42" stroke="currentColor" stroke-width="1.1" />
				<path d="M1 72H17" stroke="currentColor" stroke-width="1.1" />
			</svg>
			<div class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 bg-cyan-500/20 text-cyan-200 shadow-[0_0_22px_rgb(34_211_238/0.55)]">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
		</div>

		<!-- Outcome -->
		<div class="flex min-w-0 flex-col gap-3">
			<p class="text-center font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400/80">
				The outcome
			</p>
			<div class="flex flex-col gap-3">
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">Faster turnaround</span>
				</div>
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-cyan-300/15 bg-cyan-300/[0.055] px-3 py-2.5 shadow-[0_0_28px_-18px_rgb(34_211_238/0.8),inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
						<polyline points="22 4 12 14.01 9 11.01" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">Fewer errors</span>
				</div>
				<div
					class="flex min-h-14 items-center gap-2.5 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
				>
					<svg class={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M16 3.13a4 4 0 0 1 0 7.75" />
					</svg>
					<span class="text-xs font-medium text-zinc-300">More time for real work</span>
				</div>
			</div>
		</div>
	</div>
</div>
