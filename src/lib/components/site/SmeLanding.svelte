<script lang="ts">
	import type { ActionData } from "../../../routes/$types";
	import SiteHeader from "$lib/components/site/SiteHeader.svelte";
	import SiteFooter from "$lib/components/site/SiteFooter.svelte";
	import ContactSection from "$lib/components/site/ContactSection.svelte";
	import MonthEndN8nDiagram from "./MonthEndN8nDiagram.svelte";
	import SmeHeroDiagram from "$lib/components/site/SmeHeroDiagram.svelte";
	import howardHeadshot from "$lib/assets/howard-headshot.png";
	import { listWorkshops } from "$lib/data/workshops";
	import { listServices } from "$lib/data/services";

	let { form = null }: { form?: ActionData | null } = $props();

	const logos = [
		"Flutter",
		"BT",
		"DHL Express",
		"Marsh",
		"Commerzbank",
		"Ensek",
		"Canada Life",
		"abrdn",
	];

	const stats = [
		{
			value: "#1",
			label: "of 25 factors",
			sub: "Workflow redesign had the strongest effect on AI ROI (McKinsey 2025).",
		},
		{
			value: "3×",
			label: "more likely",
			sub: "Top performers redesigned how work gets done, not just added tools.",
		},
		{
			value: "79%",
			label: "untapped",
			sub: "Of orgs using gen AI haven’t redesigned a single workflow.",
		},
	];

	const services = listServices("sme");

	const workshops = listWorkshops("sme");

	const ownerQuotes = [
		{
			source: "Accountants",
			quote: "We are still chasing records, rekeying numbers, and double-checking the same work.",
		},
		{
			source: "Dental practices",
			quote: "If reminders, forms, or follow-up slip, it affects the diary and the patient experience.",
		},
		{
			source: "Law firms",
			quote: "I do not need another AI demo. I need client intake and admin to move without constant chasing.",
		},
		{
			source: "Estate agents",
			quote: "Leads come in from everywhere, but viewings and follow-up still rely on manual handoffs.",
		},
		{
			source: "Trades & services",
			quote: "Quotes, bookings, and invoices live in different places. Too much depends on someone remembering.",
		},
		{
		source: "Education",
		quote: "Our staff need less admin and clearer processes, so more time can go into teaching and supporting learners.",
		},
	];

	
	const heroFeatures = [
		{
		label: "Find the biggest drain on time",
			href: "/services/sme/workflow-opportunity-scan",
		},
		{
		label: "Automate one process properly",
			href: "/services/sme/one-process-redesign",
		},
		{
		label: "Train your team to use AI well",
			href: "/services/sme/practical-adoption",
		},
	];

	const serviceSteps = [
		{
			icon: "clock" as const,
			step: "01",
		title: "Find where work is slowing down",
			subtitle: "Workflow opportunity scan",
		desc: "Identify the admin, delays, handoffs, rework, and tool friction that are costing time, money, or customer responsiveness.",
			href: "/services/sme/workflow-opportunity-scan",
		},
		{
			icon: "target" as const,
			step: "02",
		title: "Improve one workflow end to end",
			subtitle: "One process redesign",
		desc: "Choose one high-value workflow, redesign it properly, and build the AI-assisted way of working with clear steps, owners, and measures.",
			href: "/services/sme/one-process-redesign",
		},
		{
			icon: "shield" as const,
			step: "03",
		title: "Train the team so gains stick",
			subtitle: "Practical adoption",
		desc: "Teach the team how to use the improved workflow and AI tools confidently, with simple prompts, habits, and guardrails.",
			href: "/services/sme/practical-adoption",
		},
	];

	const integrationService = services.find(
		(service) => service.slug === "lightweight-integration",
	);
</script>

<div class="relative min-h-screen overflow-x-hidden">
	<div class="pointer-events-none fixed inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(34_211_238/0.18),transparent)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgb(167_139_250/0.12),transparent)]"
		></div>
		<div
			class="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:64px_64px]"
		></div>
		<div
			class="absolute inset-0 bg-linear-to-b from-transparent via-[var(--color-surface-0)]/20 to-[var(--color-surface-0)]"
		></div>
	</div>

	<SiteHeader site="sme" />

	<main>
		<section
			class="site-section site-band-a relative border-b border-white/[0.07] px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36"
		>
			<div class="mx-auto max-w-6xl">
				<div
					class="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14"
				>
					<div class="text-left">
						<p
							class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400"
						>
							Solve the bottlenecks first
						</p>
						<h1
							class="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
						>
							Stop losing time and money to <span class="text-cyan-300"
								>manual work.</span
							>
						</h1>
						<p
							class="mt-6 max-w-xl font-[family-name:var(--font-display)] text-base leading-relaxed text-zinc-400 sm:text-lg"
						>
							Most SMEs don’t need “more AI.” They need AI applied
							to the workflows that matter — so work moves faster,
							with fewer delays, handoffs, and errors.
						</p>
						<p
							class="mt-4 max-w-xl font-[family-name:var(--font-display)] text-base leading-relaxed text-zinc-400 sm:text-lg"
						>
							I help you identify where work is really slowing down,
							then improve <span class="text-cyan-300">one</span>
							workflow end to end first — making your existing
							tools cooperate. 
						</p>
						<p
						class="mt-4 max-w-xl font-[family-name:var(--font-display)] text-base leading-relaxed text-zinc-400 sm:text-lg"
					>
						 Once that proves value, we expand to
						the next workflows and train your team to use the
						improved way of working so the gains stick.
					</p>

						<div class="mt-8 grid gap-3 sm:grid-cols-3">
							{#each heroFeatures as item, i}
								<a
									href={item.href}
									class="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-cyan-500/30 hover:bg-white/[0.04]"
								>
									{#if i === 0}
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											aria-hidden="true"
										>
											<circle cx="11" cy="11" r="8" />
											<path
												d="m21 21-4.3-4.3"
												stroke-linecap="round"
											/>
										</svg>
									{:else if i === 1}
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											aria-hidden="true"
										>
											<circle cx="12" cy="12" r="3" />
											<path
												d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
											/>
										</svg>
									{:else}
										<svg
											class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											aria-hidden="true"
										>
											<path
												d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
											/>
											<path
												d="m9 12 2 2 4-4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									{/if}
									<span
										class="font-[family-name:var(--font-display)] text-left text-xs font-medium leading-snug text-zinc-200 sm:text-sm"
									>
										{item.label}
									</span>
								</a>
							{/each}
						</div>

						<div
							class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
						>
							<a
								href="#contact"
								class="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgb(34_211_238/0.55)] transition hover:bg-cyan-300"
							>
								<svg
									class="h-4 w-4 shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									aria-hidden="true"
								>
									<rect
										x="3"
										y="4"
										width="18"
										height="18"
										rx="2"
										ry="2"
									/>
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
								Book a discovery call
								<span
									aria-hidden="true"
									class="text-base leading-none">→</span
								>
							</a>
						</div>
					</div>

					<div class="min-w-0 lg:pt-6">
						<SmeHeroDiagram />
					</div>
				</div>

			</div>
		</section>

		<section class="site-section site-band-b relative border-b border-white/[0.07] py-8">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p
					class="text-center text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90"
				>
					Enterprise experience I now bring to smaller businesses
				</p>
				<div
					class="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base font-semibold text-white/70 [text-shadow:0_0_24px_rgb(255_255_255/0.16)]"
				>
					{#each logos as name}
						<span>{name}</span>
					{/each}
				</div>
			</div>
			<div
				class="pointer-events-none absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgb(34_211_238/0.55)]"
				aria-hidden="true"
			></div>
		</section>

		<section
			id="about"
			class="site-section site-band-a scroll-mt-24 border-b border-white/[0.07] py-20"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div
					class="grid gap-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-center"
				>
					<div>
						<p
							class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
						>
							Who you work with
						</p>
						<div class="mt-3 h-px w-6 bg-cyan-300"></div>
						<h2
							class="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.65rem] lg:leading-[1.08]"
						>
							Enterprise experience for
							<span class="text-cyan-300">your business.</span>
						</h2>
						<div class="mt-10 flex flex-col gap-7 sm:flex-row sm:items-start">
							<div
								class="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-cyan-300/45 bg-[#07111b] p-1.5 shadow-[0_0_42px_-12px_rgb(34_211_238/0.9),inset_0_1px_0_rgb(255_255_255/0.12)]"
							>
								<img
									src={howardHeadshot}
									alt="Howard, founder of agentnative"
									class="h-full w-full rounded-full object-cover saturate-[0.82] contrast-[1.06] brightness-[0.92]"
								/>
								<div
									class="pointer-events-none absolute inset-1 rounded-full bg-linear-to-br from-cyan-300/18 via-[#07111b]/10 to-violet-400/20 mix-blend-multiply"
								></div>
								<div
									class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
								></div>
							</div>
							<div class="max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
								<p>
									<span class="font-semibold text-white"
										>Hi, I'm Howard, founder of
										<span class="text-cyan-300"
											>agentnative.</span
										></span
									>
								</p>
								<p class="mt-4">
									I help small and medium businesses remove
									manual work, improve handoffs, and use AI in
									ways that are practical, safe, and easy for
									teams to adopt.
								</p>
								<p class="mt-5">
									I've spent twenty years leading delivery and
									transformation across banks, FTSE 100
									businesses, scale-ups, and early-stage
									ventures. Today, I bring that experience
									directly to SMEs — helping you find where
									time is leaking, redesign one important
									workflow, and make the change real.
								</p>
							</div>
						</div>
					</div>

					<div
						class="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#07111b]/80 p-7 shadow-[0_0_48px_-24px_rgb(34_211_238/0.8),inset_0_1px_0_rgb(255_255_255/0.07)] sm:p-8"
					>
						<div
							class="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:24px_24px]"
						></div>
						<div
							class="relative grid gap-6 sm:grid-cols-[4.5rem_1fr]"
						>
							<div
								class="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_32px_-12px_rgb(34_211_238/0.9)]"
							>
								<svg
									class="h-8 w-8"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.4"
									aria-hidden="true"
								>
									<path
										d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3"
									/>
									<path
										d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3"
									/>
									<path d="M9 7h6M9 12h6M9 17h6" />
									<circle
										cx="7"
										cy="9"
										r="1"
										fill="currentColor"
										stroke="none"
									/>
									<circle
										cx="17"
										cy="15"
										r="1"
										fill="currentColor"
										stroke="none"
									/>
								</svg>
							</div>
							<div>
								<h3
									class="font-[family-name:var(--font-display)] text-xl font-semibold text-white"
								>
									What does <span class="text-cyan-300"
										>agentnative</span
									>
									mean?
								</h3>
								<p
									class="mt-5 text-base leading-relaxed text-zinc-300"
								>
									Agentnative means designing workflows
									around what AI can safely do — while people
									stay accountable for judgement,
									relationships, standards, and final
									decisions.
								</p>
							</div>
						</div>

						<div
							class="relative mt-10 grid grid-cols-[auto_minmax(2rem,1fr)_auto_minmax(2rem,1fr)_auto] items-start gap-x-2 gap-y-6 sm:gap-x-3"
						>
							<div class="flex flex-col items-center">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-zinc-300 sm:h-20 sm:w-20"
								>
									<svg
										class="h-8 w-8 sm:h-9 sm:w-9"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<path d="M12 3v5" />
										<path d="M5 21v-5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
										<path d="M7 21h10" />
										<rect x="9" y="8" width="6" height="6" rx="1" />
									</svg>
								</div>
								<div
									class="mt-3 flex min-h-[2.75rem] w-full flex-col justify-end px-1"
								>
									<p
										class="text-center text-[10px] font-medium uppercase leading-tight tracking-[0.1em] text-zinc-400 sm:text-xs"
									>
										Workflow
									</p>
								</div>
							</div>
							<div
								class="mt-7 flex min-h-0 min-w-0 items-center sm:mt-9"
								aria-hidden="true"
							>
								<div
									class="h-0 min-w-0 flex-1 border-t border-dotted border-cyan-300/70"
								></div>
								<span
									class="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgb(34_211_238/0.85)]"
								></span>
							</div>
							<div class="flex flex-col items-center">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_-8px_rgb(34_211_238/0.85)] sm:h-20 sm:w-20"
								>
									<svg
										class="h-9 w-9 sm:h-10 sm:w-10"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<rect x="5" y="8" width="14" height="10" rx="2" />
										<path d="M9 8V6a3 3 0 0 1 6 0v2" />
										<circle
											cx="10"
											cy="13"
											r="1"
											fill="currentColor"
											stroke="none"
										/>
										<circle
											cx="14"
											cy="13"
											r="1"
											fill="currentColor"
											stroke="none"
										/>
										<path d="M10 16h4" stroke-linecap="round" />
									</svg>
								</div>
								<div
									class="mt-3 flex min-h-[2.75rem] w-full flex-col justify-end px-1"
								>
									<p
										class="text-center text-[10px] font-medium uppercase leading-tight tracking-[0.1em] text-zinc-400 sm:text-xs"
									>
										AI
									</p>
								</div>
							</div>
							<div
								class="mt-7 flex min-h-0 min-w-0 items-center sm:mt-9"
								aria-hidden="true"
							>
								<span
									class="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgb(34_211_238/0.85)]"
								></span>
								<div
									class="h-0 min-w-0 flex-1 border-t border-dotted border-cyan-300/70"
								></div>
							</div>
							<div class="flex flex-col items-center">
								<div
									class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-sky-200 sm:h-20 sm:w-20"
								>
									<svg
										class="h-9 w-9 sm:h-10 sm:w-10"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<circle cx="12" cy="8" r="4" />
										<path d="M4 22a8 8 0 0 1 16 0" />
										<circle
											cx="18"
											cy="17"
											r="3"
											fill="#07111b"
										/>
										<path
											d="m16.8 17 0.8 0.8 1.6-1.8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<div
									class="mt-3 flex min-h-[2.75rem] w-full flex-col justify-end px-1"
								>
									<p
										class="text-center text-[10px] font-medium uppercase leading-tight tracking-[0.1em] text-zinc-400 sm:text-xs sm:whitespace-nowrap"
									>
										Human judgement
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<p
					class="mt-14 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
				>
					Why work with me
				</p>
				<div class="mt-6 grid gap-5 sm:grid-cols-3">
					{#each [{ icon: "target", title: "I know where delivery breaks", body: "I've led delivery in complex environments where delays, rework, and unclear ownership become expensive. I can spot the real bottleneck, not just automate the visible task." }, { icon: "code", title: "I can make it practical", body: "I still write code, ship product, and use the AI tools I recommend. If I suggest automating a step, it is because I understand how it works in practice." }, { icon: "person", title: "You work directly with me", body: "No layers, no juniors, no handoff. I help diagnose the problem, redesign the workflow, and guide the first practical implementation from start to finish." }] as card}
						<div
							class="flex h-full flex-col rounded-xl border border-cyan-300/15 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
						>
							<div
								class="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_-14px_rgb(34_211_238/0.9)]"
							>
								{#if card.icon === "target"}
									<svg
										class="h-7 w-7"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<circle cx="12" cy="12" r="7" />
										<circle cx="12" cy="12" r="2" />
										<path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
									</svg>
								{:else if card.icon === "code"}
									<svg
										class="h-7 w-7"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<path
											d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								{:else}
									<svg
										class="h-7 w-7"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.4"
										aria-hidden="true"
									>
										<circle cx="12" cy="8" r="4" />
										<path d="M4 22a8 8 0 0 1 16 0" />
									</svg>
								{/if}
							</div>
							<h3
								class="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-white"
							>
								{card.title}
							</h3>
							<div class="mt-4 h-px w-10 bg-cyan-300"></div>
							<p
								class="mt-5 flex-1 text-sm leading-relaxed text-zinc-400"
							>
								{card.body}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section
			id="problems"
			class="site-section site-band-b scroll-mt-24 border-b border-white/[0.07] py-16"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="text-center">
					<p
						class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90"
					>
						What SME owners are really saying
					</p>
					<h2
						class="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
					>
						SMEs do not need more AI hype.
					</h2>
					<p class="mt-3 text-lg leading-relaxed text-zinc-300">
						They need <span class="font-semibold text-cyan-300"
							>less admin, faster follow-up,</span
						> and processes that actually run.
					</p>
				</div>

				<ul class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each ownerQuotes as quote}
						<li
							class="relative overflow-hidden rounded-xl border border-cyan-300/25 bg-[#07111b]/75 p-5 shadow-[0_0_34px_-24px_rgb(34_211_238/0.9),inset_0_1px_0_rgb(255_255_255/0.07)]"
						>
							<div
								class="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:20px_20px]"
							></div>
							<div class="relative flex gap-4">
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_22px_-8px_rgb(34_211_238/0.9)]"
								>
									<svg
										class="h-5 w-5"
										viewBox="0 0 24 24"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M7.6 11.2h3.1v6.2H4.5v-5.7c0-3.5 1.7-5.9 5-7.1l1.2 2.2c-1.9.8-2.9 2.2-3.1 4.4Zm8.8 0h3.1v6.2h-6.2v-5.7c0-3.5 1.7-5.9 5-7.1l1.2 2.2c-1.9.8-2.9 2.2-3.1 4.4Z"
										/>
									</svg>
								</div>
								<div class="min-w-0">
									<div
										class="mb-2 flex items-center justify-between gap-3"
									>
										<p
											class="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300"
										>
											{quote.source}
										</p>
										<span
											class="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgb(34_211_238/0.8)]"
										></span>
									</div>
									<p
										class="text-sm font-medium leading-relaxed text-zinc-200"
									>
										"{quote.quote}"
									</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>

				<div
					class="mx-auto mt-4 flex max-w-2xl items-center gap-4 rounded-lg border border-cyan-300/15 bg-[#07111b]/70 px-5 py-3 text-center shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:text-left"
				>
					<div
						class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:flex"
					>
						<svg
							class="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							aria-hidden="true"
						>
							<circle cx="12" cy="12" r="8" />
							<circle cx="12" cy="12" r="3" />
							<path
								d="M12 2v3M12 19v3M2 12h3M19 12h3"
								stroke-linecap="round"
							/>
						</svg>
					</div>
					<p class="text-sm leading-relaxed text-zinc-300">
						These are business problems first. Good AI automation
						should
						<span class="font-semibold text-cyan-300"
							>remove friction, save time, and work reliably</span
						>
						in the real business.
					</p>
				</div>
			</div>
		</section>

		<section
			id="proof"
			class="site-section site-band-a scroll-mt-24 border-b border-white/[0.07] py-24"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="mx-auto max-w-4xl text-center">
					<div class="flex items-center justify-center gap-5">
						<div
							class="hidden h-px flex-1 bg-linear-to-r from-transparent via-cyan-300/45 to-cyan-300/15 sm:block"
						></div>
						<span
							class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238/0.9)]"
						></span>
						<p
							class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
						>
							Why workflow first
						</p>
						<span
							class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238/0.9)]"
						></span>
						<div
							class="hidden h-px flex-1 bg-linear-to-r from-cyan-300/15 via-cyan-300/45 to-transparent sm:block"
						></div>
					</div>
				</div>
				<div class="mt-10 grid gap-6 md:grid-cols-3">
					{#each stats as s, i}
						<div
							class="group relative overflow-hidden rounded-xl border border-cyan-300/25 bg-[#07111b]/75 p-7 shadow-[0_0_40px_-26px_rgb(34_211_238/0.95),inset_0_1px_0_rgb(255_255_255/0.07)] transition hover:border-cyan-300/45"
						>
							<div
								class="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:22px_22px]"
							></div>
							<div
								class="relative flex items-start justify-between gap-4"
							>
								<div>
									<p
										class="font-[family-name:var(--font-display)] text-5xl font-bold leading-none text-cyan-300 md:text-6xl"
									>
										{s.value}
									</p>
									<p
										class="mt-2 text-sm font-semibold text-zinc-200"
									>
										{s.label}
									</p>
									<div
										class="mt-3 h-px w-10 bg-cyan-300"
									></div>
								</div>
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-300/80"
								>
									{#if i === 0}
										<svg
											class="h-6 w-6"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.4"
											aria-hidden="true"
										>
											<path
												d="M4 19V9M10 19V5M16 19v-7M22 19V3"
											/>
											<path
												d="m4 12 6-4 6 3 6-7"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									{:else if i === 1}
										<svg
											class="h-6 w-6"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.4"
											aria-hidden="true"
										>
											<path
												d="M16 21v-2a4 4 0 0 0-8 0v2"
											/>
											<circle cx="12" cy="7" r="4" />
											<path
												d="M22 21v-2a4 4 0 0 0-3-3.87M2 21v-2a4 4 0 0 1 3-3.87"
											/>
										</svg>
									{:else}
										<svg
											class="h-6 w-6"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.4"
											aria-hidden="true"
										>
											<path
												d="M21.2 12A9.2 9.2 0 1 1 12 2.8V12h9.2Z"
											/>
											<path
												d="M12 2.8A9.2 9.2 0 0 1 21.2 12H12V2.8Z"
											/>
										</svg>
									{/if}
								</div>
							</div>
							<p
								class="relative mt-5 text-sm leading-relaxed text-zinc-400"
							>
								{s.sub}
							</p>
						</div>
					{/each}
				</div>
				<div
					class="mx-auto mt-5 flex max-w-5xl items-center gap-4 rounded-lg border border-cyan-300/20 bg-[#07111b]/70 px-6 py-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
				>
					<div
						class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 sm:flex"
					>
						<svg
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							aria-hidden="true"
						>
							<path d="M9 18h6" />
							<path d="M10 22h4" />
							<path
								d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.7-1.5 2.5h-4c0-.8-.6-1.8-1.5-2.5Z"
							/>
						</svg>
					</div>
					<p
						class="text-center text-sm leading-relaxed text-zinc-300 sm:text-left"
					>
						<span class="font-semibold text-white"
							>What this means for SMEs:</span
						>
						start with one important workflow, fix it end to end, then
						scale what works.
					</p>
				</div>
				<p class="mt-5 text-center text-xs text-zinc-600">
					Source: McKinsey State of AI, 2025
				</p>
			</div>
		</section>

		<section
			id="services"
			class="site-section site-band-b scroll-mt-24 border-b border-white/[0.07] py-20 sm:py-24"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="mx-auto max-w-3xl text-center">
					<p
						class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
					>
						How I help
					</p>
					<h2
						class="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
					>
						A practical path from bottleneck to better workflow.
					</h2>
					<p
						class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
					>
						Start by finding where work is really slowing down, then
						improve one workflow end to end. Make your existing tools
						cooperate, prove the value, then train the team so the
						gains stick.
					</p>
				</div>
				<div class="mt-10 grid gap-5 lg:grid-cols-3">
					{#each serviceSteps as step}
						<div
							class="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#07111b]/75 p-6 shadow-[0_0_42px_-28px_rgb(34_211_238/0.95),inset_0_1px_0_rgb(255_255_255/0.07)] transition hover:border-cyan-300/45"
						>
							<a
								href={step.href}
								class="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500/50"
								aria-label={`${step.subtitle} — service details`}
							></a>
							<div
								class="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:22px_22px]"
							></div>
							<div
								class="relative z-10 flex h-full flex-col pointer-events-none"
							>
								<div
									class="flex items-start justify-between gap-4"
								>
									<div
										class="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_-8px_rgb(34_211_238/0.9)]"
									>
										{#if step.icon === "clock"}
											<svg
												class="h-8 w-8"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<circle
													cx="12"
													cy="12"
													r="10"
												/>
												<polyline
													points="12 6 12 12 16 14"
												/>
												<path
													d="M17 17.5v2.5M20 14v6M14 19v1"
													stroke-linecap="round"
												/>
											</svg>
										{:else if step.icon === "target"}
											<svg
												class="h-8 w-8"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<circle
													cx="12"
													cy="12"
													r="10"
												/>
												<circle cx="12" cy="12" r="3" />
												<path
													d="M12 2v4M12 18v4M2 12h4M18 12h4"
													stroke-linecap="round"
												/>
											</svg>
										{:else}
											<svg
												class="h-8 w-8"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<path
													d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
												/>
												<path
													d="m9 12 2 2 4-4"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										{/if}
									</div>
									<span
										class="font-[family-name:var(--font-mono)] text-sm font-semibold text-cyan-300/80"
										>{step.step}</span
									>
								</div>
								<p
									class="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80"
								>
									{step.subtitle}
								</p>
								<h3
									class="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white"
								>
									{step.title}
								</h3>
								<p
									class="mt-4 flex-1 text-sm leading-relaxed text-zinc-400"
								>
									{step.desc}
								</p>
								<span
									class="mt-7 text-sm font-medium text-zinc-400 transition group-hover:text-cyan-300/90"
								>
									Details
								</span>
							</div>
							<div
								class="pointer-events-none absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgb(34_211_238/0.65)]"
								aria-hidden="true"
							>
								<span
									class="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-300/60 to-transparent"
								></span>
							</div>
						</div>
					{/each}
				</div>
				{#if integrationService}
					<div
						class="mt-5 rounded-2xl border border-cyan-300/25 bg-[#07111b]/75 p-5 shadow-[0_0_42px_-30px_rgb(34_211_238/0.95),inset_0_1px_0_rgb(255_255_255/0.07)] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6"
					>
						<div class="flex items-start gap-5">
							<div
								class="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:flex"
							>
								<svg
									class="h-8 w-8"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.4"
									aria-hidden="true"
								>
									<path
										d="M12 3v5M6 13h12M6 13v5M18 13v5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<rect
										x="9"
										y="2"
										width="6"
										height="6"
										rx="1.5"
									/>
									<rect
										x="3"
										y="16"
										width="6"
										height="6"
										rx="1.5"
									/>
									<rect
										x="15"
										y="16"
										width="6"
										height="6"
										rx="1.5"
									/>
								</svg>
							</div>
							<div>
								<p
									class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500"
								>
									Supporting glue
								</p>
								<h3
									class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white"
								>
									Make your existing tools cooperate
								</h3>
								<p
									class="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400"
								>
									When the bottleneck is copy-paste between
									email, spreadsheets, and line-of-business
									tools, add sensible handoffs and lightweight
									automation so the improved workflow can run
									properly.
								</p>
							</div>
						</div>
						<a
							href="/services/sme/{integrationService.slug}"
							class="mt-4 inline-flex shrink-0 text-sm font-semibold text-cyan-300/95 hover:text-cyan-200 sm:mt-0"
						>
							Details
						</a>
					</div>
				{/if}
			</div>
		</section>

		<section
			id="workflows"
			class="site-section site-band-b scroll-mt-24 border-b border-white/[0.07] py-24"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
					<div>
						<p
							class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
						>
							A real workflow
						</p>
						<h2
							class="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
						>
							Month-end close reveals where the workflow breaks.
						</h2>
					</div>
					<p class="text-base leading-relaxed text-zinc-400 lg:pt-5">
						For many finance teams, month-end is where delays,
						handoffs, and rework become obvious. Reconciliations,
						commentary, approvals, and exceptions still bounce
						between people and spreadsheets. The opportunity is not
						another tool. It is one clearer workflow that moves
						faster, with AI handling the repeatable work and finance
						keeping control of the judgement.
					</p>
				</div>

				<div class="mt-10">
					<MonthEndN8nDiagram />
				</div>

				<div class="mt-6 grid gap-5 lg:grid-cols-3">
					<div
						class="rounded-2xl border border-cyan-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
					>
						<div class="flex items-start gap-4">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
							>
								<svg
									class="h-7 w-7"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									aria-hidden="true"
								>
									<path
										d="M4 12a8 8 0 0 1 14.9-4M20 12a8 8 0 0 1-14.9 4"
									/>
									<path
										d="M18 3v5h-5M6 21v-5h5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div>
								<p
									class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90"
								>
									Find the friction
								</p>
								<h3
									class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white"
								>
									Where work slows down
								</h3>
								<p
									class="mt-3 text-sm leading-relaxed text-zinc-400"
								>
									Rekeying figures, waiting for updates,
									chasing commentary, and checking the same
									exceptions again.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-2xl border border-violet-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
					>
						<div class="flex items-start gap-4">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-violet-300/25 bg-violet-300/10 text-violet-300"
							>
								<svg
									class="h-7 w-7"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									aria-hidden="true"
								>
									<path
										d="M13 2 9 10l-7 3 7 3 4 8 4-8 7-3-7-3-4-8Z"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div>
								<p
									class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90"
								>
									Automate one flow
								</p>
								<h3
									class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white"
								>
									Where AI helps most
								</h3>
								<p
									class="mt-3 text-sm leading-relaxed text-zinc-400"
								>
									Data pulls, first-pass variance notes,
									exception routing, and review-ready pack
									preparation.
								</p>
							</div>
						</div>
					</div>
					<div
						class="rounded-2xl border border-emerald-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
					>
						<div class="flex items-start gap-4">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-emerald-300"
							>
								<svg
									class="h-7 w-7"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									aria-hidden="true"
								>
									<path
										d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
									/>
									<path
										d="m9 12 2 2 4-4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div>
								<p
									class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90"
								>
									Keep control
								</p>
								<h3
									class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white"
								>
									Where people stay accountable
								</h3>
								<p
									class="mt-3 text-sm leading-relaxed text-zinc-400"
								>
									Material judgement, unusual items,
									approvals, and the final message to leaders,
									clients, or boards.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section
			id="workshops"
			class="site-section site-band-a scroll-mt-24 border-b border-white/[0.07] py-24"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div
					class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
				>
					<div class="max-w-2xl">
						<p
							class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90"
						>
							Learn AI at work
						</p>
						<h2
							class="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
						>
							Learning sessions that help your team use AI well
						</h2>
						<p
							class="mt-4 max-w-xl text-base leading-relaxed text-zinc-400"
						>
							Practical, plain-English sessions for owners,
							managers, and teams. Learn where AI helps, decide
							who stays accountable, and choose the first workflow
							worth improving.
						</p>
					</div>
					<a
						href="#contact"
						class="shrink-0 border-b border-cyan-300/40 pb-2 text-sm font-medium text-cyan-400/90 hover:text-cyan-300"
					>
						Enquire about a learning session →
					</a>
				</div>
				<ul class="mt-12 grid gap-5 lg:grid-cols-3">
					{#each workshops as w, i}
						<li>
							<a
								href="/workshops/sme/{w.slug}"
								class="group flex h-full flex-col rounded-2xl border border-cyan-300/25 bg-[#07111b]/70 p-6 shadow-[0_0_36px_-26px_rgb(34_211_238/0.9),inset_0_1px_0_rgb(255_255_255/0.07)] transition hover:border-cyan-300/45 hover:bg-[#07111b]/85"
							>
								<div class="flex flex-wrap items-center gap-3">
									<span
										class="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-300/90"
										>{w.duration}</span
									>
									<span class="text-xs text-zinc-400"
										>For {w.audience}</span
									>
								</div>
								<div class="mt-5 flex flex-1 items-start gap-4">
									<div
										class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-[0_0_26px_-10px_rgb(34_211_238/0.9)]"
									>
										{#if i === 0}
											<svg
												class="h-7 w-7"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<path
													d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"
													stroke-linecap="round"
												/>
											</svg>
										{:else if i === 1}
											<svg
												class="h-7 w-7"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<circle cx="9" cy="8" r="3" />
												<path
													d="M3.5 20a5.5 5.5 0 0 1 11 0"
												/>
												<circle
													cx="17"
													cy="10"
													r="2.5"
												/>
												<path
													d="M14.5 16.5a4.5 4.5 0 0 1 6 3.5"
												/>
											</svg>
										{:else}
											<svg
												class="h-7 w-7"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.4"
												aria-hidden="true"
											>
												<circle cx="12" cy="12" r="8" />
												<circle cx="12" cy="12" r="3" />
												<path
													d="m15 9 4-4M17 5h2v2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										{/if}
									</div>
									<div>
										<h3
											class="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white group-hover:text-cyan-200/95"
										>
											{w.title}
										</h3>
										<p
											class="mt-3 text-sm leading-relaxed text-zinc-400"
										>
											{w.desc}
										</p>
									</div>
								</div>
								<div class="mt-5 border-t border-white/10 pt-4">
									<p
										class="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/80"
									>
										You leave with
									</p>
									<p
										class="mt-2 text-sm leading-relaxed text-zinc-300"
									>
										{w.outcomes[0]}
									</p>
								</div>
								<span
									class="mt-4 text-sm font-medium text-cyan-400/90 group-hover:text-cyan-300"
									>Agenda &amp; details →</span
								>
							</a>
						</li>
					{/each}
				</ul>
				<p
					class="mt-6 flex items-start justify-center gap-3 text-center text-sm text-zinc-500"
				>
					<span
						class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 text-cyan-300"
					>
						<svg
							class="h-3.5 w-3.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path
								d="m5 12 4 4L19 6"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<span
						>All sessions can be delivered in person or remotely.
						Bespoke learning sessions are available if you need
						something more specific.</span
					>
				</p>
			</div>
		</section>

		<ContactSection accent="cyan" />
	</main>

	<SiteFooter site="sme" />
</div>
