<script lang="ts">
	import type { ActionData } from '../../../routes/$types';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import ContactSection from '$lib/components/site/ContactSection.svelte';
	import MonthEndN8nDiagram from './MonthEndN8nDiagram.svelte';
	import SmeHeroDiagram from '$lib/components/site/SmeHeroDiagram.svelte';
	import { listWorkshops } from '$lib/data/workshops';
	import { listServices } from '$lib/data/services';

	let { form = null }: { form?: ActionData | null } = $props();

	const logos = ['Flutter', 'BT', 'DHL Express', 'Marsh', 'Commerzbank', 'Ensek', 'Canada Life', 'abrdn'];

	const stats = [
		{ value: '#1', label: 'of 25 factors', sub: 'Workflow redesign had the strongest effect on AI ROI (McKinsey 2025).' },
		{ value: '3×', label: 'more likely', sub: 'Top performers redesigned how work gets done, not just added tools.' },
		{ value: '79%', label: 'untapped', sub: 'Of orgs using gen AI haven’t redesigned a single workflow.' }
	];

	const services = listServices('sme');

	const workshops = listWorkshops('sme');

	const ownerQuotes = [
		{
			source: 'Accountants',
			quote: 'We are still chasing records, rekeying numbers, and double-checking the same work.'
		},
		{
			source: 'Dental practices',
			quote: 'If reminders, forms, or follow-up slip, it affects the diary and the patient experience.'
		},
		{
			source: 'Law firms',
			quote: 'I do not need another AI demo. I need client intake and admin to move without constant chasing.'
		},
		{
			source: 'Estate agents',
			quote: 'Leads come in from everywhere, but viewings and follow-up still rely on manual handoffs.'
		},
		{
			source: 'Trades & services',
			quote: 'Quotes, bookings, and invoices live in different places. Too much depends on someone remembering.'
		},
		{
			source: 'Private clinics',
			quote: 'My team needs something practical that saves time between appointments, not another system to learn.'
		}
	];

	const heroFeatures = [
		{
			label: 'Find the biggest drain on time',
			href: '/services/sme/workflow-opportunity-scan'
		},
		{
			label: 'Automate one process properly',
			href: '/services/sme/one-process-redesign'
		},
		{
			label: 'Set clear rules your team can follow',
			href: '/services/sme/practical-adoption'
		}
	];

	const heroBottomCards = [
		{
			icon: 'clock' as const,
			title: 'Where you are losing time',
			desc: 'Pinpoint repetitive admin, delays, and rework.',
			href: '/services/sme/workflow-opportunity-scan'
		},
		{
			icon: 'target' as const,
			title: 'What to automate first',
			desc: 'Choose one process with clear business value.',
			href: '/services/sme/one-process-redesign'
		},
		{
			icon: 'shield' as const,
			title: 'How the team will use AI',
			desc: 'Create simple, safe rules for consistent use.',
			href: '/services/sme/practical-adoption'
		}
	];

	const serviceSteps = [
		{
			icon: 'clock' as const,
			step: '01',
			title: 'Find where time is leaking',
			subtitle: 'Workflow opportunity scan',
			desc: 'Map the admin, delays, handoffs, rework, and tool friction that are costing time, money, or customer responsiveness.',
			href: '/services/sme/workflow-opportunity-scan'
		},
		{
			icon: 'target' as const,
			step: '02',
			title: 'Fix one process end to end',
			subtitle: 'One process redesign',
			desc: 'Choose one high-value workflow, redesign it properly, and build the AI-assisted flow with clear steps, owners, and measures.',
			href: '/services/sme/one-process-redesign'
		},
		{
			icon: 'shield' as const,
			step: '03',
			title: 'Make AI usable and safe',
			subtitle: 'Practical adoption',
			desc: 'Set simple rules, prompts, templates, and review habits so the team can use AI confidently without creating extra risk or inconsistency.',
			href: '/services/sme/practical-adoption'
		}
	];

	const integrationService = services.find((service) => service.slug === 'lightweight-integration');

	const goodFitCards = [
		{
			icon: 'calculator',
			color: 'cyan',
			title: 'Accountants',
			desc: 'Reconciliations, reporting, and client queries eat up your day.',
			fit: 'Close faster, deliver clearer reports, and keep clients happy without working late.'
		},
		{
			icon: 'tooth',
			color: 'violet',
			title: 'Dentists',
			desc: 'Calls, bookings, reminders, and follow-ups pull you away patients.',
			fit: 'Fill more chairs, reduce no-shows, and keep admin off your plate.'
		},
		{
			icon: 'cart',
			color: 'cyan',
			title: 'E-commerce stores',
			desc: 'Orders, returns, and customer questions never stop.',
			fit: 'Automate support and operations so you can focus on sales and growing your brand.'
		},
		{
			icon: 'home',
			color: 'green',
			title: 'Property managers',
			desc: 'Tenant requests, inspections, and maintenance updates pile up.',
			fit: 'Streamline communication and workflows, and keep tenants and owners in the loop.'
		},
		{
			icon: 'graduation-cap',
			color: 'blue',
			title: 'Schools & charities',
			desc: 'Fundraisin and compliance eat time that should go to the mission.',
			fit: 'Tighter workflows and careful AI — more hours for pupils, beneficiaries, and donors.'
		},
		{
			icon: 'wellness',
			color: 'violet',
			title: 'Health & wellness',
			desc: 'Bookings, reminders, and client follow-ups should not slow care.',
			fit: 'Reduce admin, improve client experience, and run a smoother practice.'
		}
	];
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
		<div class="absolute inset-0 bg-linear-to-b from-transparent via-[var(--color-surface-0)]/20 to-[var(--color-surface-0)]"></div>
	</div>

	<SiteHeader site="sme" />

	<main>
		<section class="relative border-b border-white/[0.07] px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
			<div class="mx-auto max-w-6xl">
				<div class="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
					<div class="text-left">
						<p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
							Solve the bottlenecks first
						</p>
						<h1
							class="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.06]"
						>
							Stop losing time and money to manual work
						</h1>
						<p class="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
							Most SMEs don’t need more AI tools. They need fewer delays, fewer handoffs, and fewer errors.
						</p>
						<p class="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
							I help you find where work is really slowing down, fix <span class="text-zinc-200">one</span> process
							end to end (including making your existing tools cooperate), then put
							<span class="text-zinc-200">simple team rules</span> in place so gains stick. You work with me directly
							— no transformation programme.
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
											<path d="m21 21-4.3-4.3" stroke-linecap="round" />
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
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
											<path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{/if}
									<span class="text-left text-xs font-medium leading-snug text-zinc-200 sm:text-sm">
										{item.label}
									</span>
								</a>
							{/each}
						</div>

						<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
							<a
								href="#contact"
								class="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgb(34_211_238/0.55)] transition hover:bg-cyan-300"
							>
								<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
								Book a discovery call
								<span aria-hidden="true" class="text-base leading-none">→</span>
							</a>
						</div>
					</div>

					<div class="min-w-0 lg:pt-6">
						<SmeHeroDiagram />
					</div>
				</div>

				<div class="mt-16 hidden gap-4 sm:grid-cols-3 sm:gap-5 md:grid">
					{#each heroBottomCards as card}
						<a
							href={card.href}
							class="group relative flex rounded-2xl border border-white/10 bg-[var(--color-surface-1)]/40 px-4 py-5 pb-9 transition hover:border-cyan-500/25 sm:px-5 sm:py-6 sm:pb-10"
						>
							<div class="flex min-w-0 flex-1 items-start gap-4">
								<div
									class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-400"
								>
									{#if card.icon === 'clock'}
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									{:else if card.icon === 'target'}
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<circle cx="12" cy="12" r="10" />
											<circle cx="12" cy="12" r="3" />
										</svg>
									{:else}
										<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
										</svg>
									{/if}
								</div>
								<div class="min-w-0 flex-1 text-left">
									<h2 class="font-[family-name:var(--font-display)] text-base font-semibold leading-snug text-white sm:text-lg">
										{card.title}
									</h2>
									<p class="mt-1.5 text-sm leading-relaxed text-zinc-400">{card.desc}</p>
								</div>
							</div>
							<div
								class="pointer-events-none absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_3px_rgb(34_211_238/0.65)]"
								aria-hidden="true"
							>
								<span class="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-300/60 to-transparent"></span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</section>

		<section id="problems" class="site-band-b scroll-mt-24 border-b border-white/[0.07] py-16">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="text-center">
					<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
						What SME owners are really saying
					</p>
					<h2 class="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
						SMEs do not need more AI hype.
					</h2>
					<p class="mt-3 text-lg leading-relaxed text-zinc-300">
						They need <span class="font-semibold text-cyan-300">less admin, faster follow-up,</span> and processes that actually run.
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
								<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_22px_-8px_rgb(34_211_238/0.9)]">
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
										<path d="M7.6 11.2h3.1v6.2H4.5v-5.7c0-3.5 1.7-5.9 5-7.1l1.2 2.2c-1.9.8-2.9 2.2-3.1 4.4Zm8.8 0h3.1v6.2h-6.2v-5.7c0-3.5 1.7-5.9 5-7.1l1.2 2.2c-1.9.8-2.9 2.2-3.1 4.4Z" />
									</svg>
								</div>
								<div class="min-w-0">
									<div class="mb-2 flex items-center justify-between gap-3">
										<p class="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
											{quote.source}
										</p>
										<span class="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgb(34_211_238/0.8)]"></span>
									</div>
									<p class="text-sm font-medium leading-relaxed text-zinc-200">"{quote.quote}"</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>

				<div class="mx-auto mt-4 flex max-w-2xl items-center gap-4 rounded-lg border border-cyan-300/15 bg-[#07111b]/70 px-5 py-3 text-center shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:text-left">
					<div class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:flex">
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
							<circle cx="12" cy="12" r="8" />
							<circle cx="12" cy="12" r="3" />
							<path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke-linecap="round" />
						</svg>
					</div>
					<p class="text-sm leading-relaxed text-zinc-300">
						These are business problems first. Good AI automation should
						<span class="font-semibold text-cyan-300">remove friction, save time, and work reliably</span>
						in the real business.
					</p>
				</div>
			</div>
		</section>

		<section id="proof" class="site-band-a scroll-mt-24 border-b border-white/[0.07] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="mx-auto max-w-4xl text-center">
					<div class="flex items-center justify-center gap-5">
						<div class="hidden h-px flex-1 bg-linear-to-r from-transparent via-cyan-300/45 to-cyan-300/15 sm:block"></div>
						<span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238/0.9)]"></span>
						<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">Why workflow first</p>
						<span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238/0.9)]"></span>
						<div class="hidden h-px flex-1 bg-linear-to-r from-cyan-300/15 via-cyan-300/45 to-transparent sm:block"></div>
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
							<div class="relative flex items-start justify-between gap-4">
								<div>
									<p class="font-[family-name:var(--font-display)] text-5xl font-bold leading-none text-cyan-300 md:text-6xl">
										{s.value}
									</p>
									<p class="mt-2 text-sm font-semibold text-zinc-200">{s.label}</p>
									<div class="mt-3 h-px w-10 bg-cyan-300"></div>
								</div>
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5 text-cyan-300/80">
									{#if i === 0}
										<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
											<path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
											<path d="m4 12 6-4 6 3 6-7" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else if i === 1}
										<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
											<path d="M16 21v-2a4 4 0 0 0-8 0v2" />
											<circle cx="12" cy="7" r="4" />
											<path d="M22 21v-2a4 4 0 0 0-3-3.87M2 21v-2a4 4 0 0 1 3-3.87" />
										</svg>
									{:else}
										<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
											<path d="M21.2 12A9.2 9.2 0 1 1 12 2.8V12h9.2Z" />
											<path d="M12 2.8A9.2 9.2 0 0 1 21.2 12H12V2.8Z" />
										</svg>
									{/if}
								</div>
							</div>
							<p class="relative mt-5 text-sm leading-relaxed text-zinc-400">{s.sub}</p>
						</div>
					{/each}
				</div>
				<div class="mx-auto mt-5 flex max-w-5xl items-center gap-4 rounded-lg border border-cyan-300/20 bg-[#07111b]/70 px-6 py-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
					<div class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 sm:flex">
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
							<path d="M9 18h6" />
							<path d="M10 22h4" />
							<path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.7-1.5 2.5h-4c0-.8-.6-1.8-1.5-2.5Z" />
						</svg>
					</div>
					<p class="text-center text-sm leading-relaxed text-zinc-300 sm:text-left">
						<span class="font-semibold text-white">What this means for SMEs:</span>
						start with one important workflow, fix it end to end, then scale what works.
					</p>
				</div>
				<p class="mt-5 text-center text-xs text-zinc-600">Source: McKinsey State of AI, 2025</p>
			</div>
		</section>

		<section id="sme-types" class="site-band-b scroll-mt-24 border-b border-white/[0.07] py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">Good fit</p>
						<h2 class="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
							Built for the way small and medium businesses actually work<span class="text-cyan-300">.</span>
						</h2>
						<p class="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
							Every business has different pressures. We help you remove the busywork, release capacity,
							and get time back to grow.
						</p>
					</div>

					<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
									<path d="M16 21v-2a4 4 0 0 0-8 0v2" />
									<circle cx="12" cy="7" r="4" />
									<path d="M22 21v-2a4 4 0 0 0-3-3.87M2 21v-2a4 4 0 0 1 3-3.87" />
								</svg>
							</div>
							<div>
								<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold text-white">How we work</h3>
								<ul class="mt-4 space-y-2.5 text-sm text-zinc-400">
									<li class="flex items-center gap-2">
										<span class="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 text-cyan-300">
											<svg class="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path d="m2.5 6 2 2 5-5" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</span>
										Understand your real workflow
									</li>
									<li class="flex items-center gap-2">
										<span class="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 text-cyan-300">
											<svg class="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path d="m2.5 6 2 2 5-5" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</span>
										Apply AI where it saves time now
									</li>
									<li class="flex items-center gap-2">
										<span class="flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 text-cyan-300">
											<svg class="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
												<path d="m2.5 6 2 2 5-5" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</span>
										Make it reliable, measurable, and easy to use
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<ul class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{#each goodFitCards as card}
						<li
							class="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111b]/70 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition hover:border-cyan-300/35"
						>
							<div class="flex items-start gap-4">
								<div
									class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border {card.color === 'violet'
										? 'border-violet-400/25 bg-violet-400/10 text-violet-300'
										: card.color === 'green'
											? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300'
											: card.color === 'blue'
												? 'border-sky-400/25 bg-sky-400/10 text-sky-300'
												: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-300'}"
								>
									{#if card.icon === 'calculator'}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<rect x="4" y="3" width="16" height="18" rx="2" />
											<path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" stroke-linecap="round" />
										</svg>
									{:else if card.icon === 'tooth'}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<path d="M8.5 3.5c1.2 0 2.1.7 3.5.7s2.3-.7 3.5-.7c2.4 0 4 2 3.5 4.8-.4 2.3-1.4 4-2 6.1-.7 2.4-1.1 5.1-3.1 5.1-1.4 0-1.2-3.7-1.9-3.7s-.5 3.7-1.9 3.7c-2 0-2.4-2.7-3.1-5.1-.6-2.1-1.6-3.8-2-6.1-.5-2.8 1.1-4.8 3.5-4.8Z" />
										</svg>
									{:else if card.icon === 'cart'}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" />
											<path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else if card.icon === 'home'}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<path d="M3 11.5 12 4l9 7.5" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M5 10.5V21h5v-6h4v6h5V10.5" stroke-linejoin="round" />
										</svg>
									{:else if card.icon === 'graduation-cap'}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke-linecap="round" stroke-linejoin="round" />
											<path d="M6 12v4.5c0 1.5 3 3.5 6 3.5s6-2 6-3.5V12" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									{:else}
										<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
											<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />
											<path d="M9 13h6M12 10v6" stroke-linecap="round" />
										</svg>
									{/if}
								</div>
								<div>
									<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{card.title}</h3>
									<p class="mt-2 text-sm leading-relaxed text-zinc-400">{card.desc}</p>
								</div>
							</div>
							<div class="mt-5 border-t border-white/10 pt-4">
								<p
									class="text-xs font-semibold uppercase tracking-[0.18em] {card.color === 'violet'
										? 'text-violet-300'
										: card.color === 'green'
											? 'text-emerald-300'
											: card.color === 'blue'
												? 'text-sky-300'
												: 'text-cyan-300'}"
								>
									Why it fits
								</p>
								<p class="mt-3 text-sm leading-relaxed text-zinc-300">{card.fit}</p>
							</div>
						</li>
					{/each}
				</ul>

				<div class="mt-6 rounded-2xl border border-white/10 bg-[#07111b]/70 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] sm:flex sm:items-center sm:justify-between sm:gap-6">
					<div class="flex items-center gap-4">
						<div class="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-zinc-400 sm:flex">
							<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
								<rect x="4" y="5" width="16" height="16" rx="2" />
								<path d="M8 3v4M16 3v4M8 12h4M8 16h8" stroke-linecap="round" />
							</svg>
						</div>
						<h3 class="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
							Find out what AI automation could do for your business.
						</h3>
					</div>
					<div class="mt-5 sm:mt-0">
						<a href="#contact" class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300">
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id="services" class="site-band-a scroll-mt-24 border-b border-white/[0.07] py-20 sm:py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="mx-auto max-w-3xl text-center">
					<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">How I help</p>
					<h2 class="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
						Three practical ways I help small businesses use AI.
					</h2>
					<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
						Start by finding where time is leaking, then fix one important workflow properly,
						then make sure the team can use AI in a way that is simple, useful, and safe.
					</p>
				</div>
				<div class="mt-10 grid gap-5 lg:grid-cols-3">
					{#each serviceSteps as step}
						<div class="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#07111b]/75 p-6 shadow-[0_0_42px_-28px_rgb(34_211_238/0.95),inset_0_1px_0_rgb(255_255_255/0.07)] transition hover:border-cyan-300/45">
							<a
								href={step.href}
								class="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500/50"
								aria-label={`${step.subtitle} — service details`}
							></a>
							<div
								class="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:22px_22px]"
							></div>
							<div class="relative z-10 flex h-full flex-col pointer-events-none">
								<div class="flex items-start justify-between gap-4">
									<div class="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_-8px_rgb(34_211_238/0.9)]">
										{#if step.icon === 'clock'}
											<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<circle cx="12" cy="12" r="10" />
												<polyline points="12 6 12 12 16 14" />
												<path d="M17 17.5v2.5M20 14v6M14 19v1" stroke-linecap="round" />
											</svg>
										{:else if step.icon === 'target'}
											<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<circle cx="12" cy="12" r="10" />
												<circle cx="12" cy="12" r="3" />
												<path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke-linecap="round" />
											</svg>
										{:else}
											<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
												<path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										{/if}
									</div>
									<span class="font-[family-name:var(--font-mono)] text-sm font-semibold text-cyan-300/80">{step.step}</span>
								</div>
								<p class="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{step.subtitle}</p>
								<h3 class="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-white">
									{step.title}
								</h3>
								<p class="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
								<span class="mt-7 text-sm font-medium text-zinc-400 transition group-hover:text-cyan-300/90">
									Details
								</span>
							</div>
							<div
								class="pointer-events-none absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgb(34_211_238/0.65)]"
								aria-hidden="true"
							>
								<span class="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-300/60 to-transparent"></span>
							</div>
						</div>
					{/each}
				</div>
				{#if integrationService}
					<div class="mt-5 rounded-2xl border border-cyan-300/25 bg-[#07111b]/75 p-5 shadow-[0_0_42px_-30px_rgb(34_211_238/0.95),inset_0_1px_0_rgb(255_255_255/0.07)] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
						<div class="flex items-start gap-5">
							<div class="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 sm:flex">
								<svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
									<path d="M12 3v5M6 13h12M6 13v5M18 13v5" stroke-linecap="round" stroke-linejoin="round" />
									<rect x="9" y="2" width="6" height="6" rx="1.5" />
									<rect x="3" y="16" width="6" height="6" rx="1.5" />
									<rect x="15" y="16" width="6" height="6" rx="1.5" />
								</svg>
							</div>
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Supporting glue</p>
								<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
									Connect the systems you already pay for
								</h3>
								<p class="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
									When the real bottleneck is copy-paste between email, spreadsheets, and line-of-business tools,
									add sensible handoffs and lightweight automation without a heavy integration programme.
								</p>
							</div>
						</div>
						<a href="/services/sme/{integrationService.slug}" class="mt-4 inline-flex shrink-0 text-sm font-semibold text-cyan-300/95 hover:text-cyan-200 sm:mt-0">
							Details
						</a>
					</div>
				{/if}
			</div>
		</section>

		<section id="workflows" class="site-band-b scroll-mt-24 border-b border-white/[0.07] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">A real workflow</p>
						<h2 class="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
							Month-end close reveals where the workflow breaks.
						</h2>
					</div>
					<p class="text-base leading-relaxed text-zinc-400 lg:pt-5">
						For many finance teams, month-end is where delays, handoffs, and rework become obvious.
						Reconciliations, commentary, approvals, and exceptions still bounce between people and spreadsheets.
						The opportunity is not another tool. It is one clearer workflow that moves faster, with AI handling
						the repeatable work and finance keeping control of the judgement.
					</p>
				</div>

				<div class="mt-10">
					<MonthEndN8nDiagram />
				</div>

				<div class="mt-6 grid gap-5 lg:grid-cols-3">
					<div class="rounded-2xl border border-cyan-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
						<div class="flex items-start gap-4">
							<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-300">
								<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
									<path d="M4 12a8 8 0 0 1 14.9-4M20 12a8 8 0 0 1-14.9 4" />
									<path d="M18 3v5h-5M6 21v-5h5" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Find the friction</p>
								<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
									Where work slows down
								</h3>
								<p class="mt-3 text-sm leading-relaxed text-zinc-400">
									Rekeying figures, waiting for updates, chasing commentary, and checking the same exceptions again.
								</p>
							</div>
						</div>
					</div>
					<div class="rounded-2xl border border-violet-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
						<div class="flex items-start gap-4">
							<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-violet-300/25 bg-violet-300/10 text-violet-300">
								<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
									<path d="M13 2 9 10l-7 3 7 3 4 8 4-8 7-3-7-3-4-8Z" stroke-linejoin="round" />
								</svg>
							</div>
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">Automate one flow</p>
								<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
									Where AI helps most
								</h3>
								<p class="mt-3 text-sm leading-relaxed text-zinc-400">
									Data pulls, first-pass variance notes, exception routing, and review-ready pack preparation.
								</p>
							</div>
						</div>
					</div>
					<div class="rounded-2xl border border-emerald-300/25 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
						<div class="flex items-start gap-4">
							<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-emerald-300">
								<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
									<path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
							<div>
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/90">Keep control</p>
								<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
									Where people stay accountable
								</h3>
								<p class="mt-3 text-sm leading-relaxed text-zinc-400">
									Material judgement, unusual items, approvals, and the final message to leaders, clients, or boards.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="workshops" class="site-band-a scroll-mt-24 border-b border-white/[0.07] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
					<div class="max-w-2xl">
						<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">Learn AI at work</p>
						<h2 class="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
							Learning sessions for teams that want to use AI well
						</h2>
						<p class="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
							These sessions help owners, managers, and teams understand where AI helps, where people stay
							accountable, and what to try first. Practical, plain-English learning for real work.
						</p>
					</div>
					<a href="#contact" class="shrink-0 border-b border-cyan-300/40 pb-2 text-sm font-medium text-cyan-400/90 hover:text-cyan-300">
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
									<span class="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-300/90"
										>{w.duration}</span
									>
									<span class="text-xs text-zinc-400">For {w.audience}</span>
								</div>
								<div class="mt-5 flex flex-1 items-start gap-4">
									<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-[0_0_26px_-10px_rgb(34_211_238/0.9)]">
										{#if i === 0}
											<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" stroke-linecap="round" />
											</svg>
										{:else if i === 1}
											<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<circle cx="9" cy="8" r="3" />
												<path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
												<circle cx="17" cy="10" r="2.5" />
												<path d="M14.5 16.5a4.5 4.5 0 0 1 6 3.5" />
											</svg>
										{:else}
											<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
												<circle cx="12" cy="12" r="8" />
												<circle cx="12" cy="12" r="3" />
												<path d="m15 9 4-4M17 5h2v2" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										{/if}
									</div>
									<div>
										<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white group-hover:text-cyan-200/95">
											{w.title}
										</h3>
										<p class="mt-3 text-sm leading-relaxed text-zinc-400">{w.desc}</p>
									</div>
								</div>
								<div class="mt-5 border-t border-white/10 pt-4">
									<p class="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300/80">You leave with</p>
									<p class="mt-2 text-sm leading-relaxed text-zinc-300">{w.outcomes[0]}</p>
								</div>
								<span class="mt-4 text-sm font-medium text-cyan-400/90 group-hover:text-cyan-300"
									>Agenda &amp; details →</span
								>
							</a>
						</li>
					{/each}
				</ul>
				<p class="mt-6 flex items-start justify-center gap-3 text-center text-sm text-zinc-500">
					<span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 text-cyan-300">
						<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="m5 12 4 4L19 6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<span>All sessions can be delivered in person or remotely. Bespoke learning sessions are available if you need something more specific.</span>
				</p>
			</div>
		</section>

		<section class="site-band-b relative border-b border-white/[0.07] py-8">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p class="text-center text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
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

		<section id="about" class="site-band-a scroll-mt-24 border-b border-white/[0.07] py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="grid gap-12 lg:grid-cols-[1fr_0.98fr] lg:items-start">
					<div>
						<p class="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">Who am I?</p>
						<h2 class="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
							Hi, I'm Howard,
							<span class="block">founder of <span class="text-cyan-300">agentnative</span></span>
						</h2>
						<p class="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
							I've spent twenty years leading delivery and transformation inside global banks, FTSE 100 businesses,
							scale-ups, and early-stage ventures. I combine transformation consulting with hands-on product and
							software delivery, which means I can zoom out to redesign how things work, then zoom in to make change
							real.
						</p>
					</div>

					<div class="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-[#07111b]/80 p-8 shadow-[0_0_48px_-24px_rgb(34_211_238/0.8),inset_0_1px_0_rgb(255_255_255/0.07)]">
						<div
							class="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:24px_24px]"
						></div>
						<div class="relative grid gap-6 sm:grid-cols-[5.5rem_1fr]">
							<div class="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_32px_-12px_rgb(34_211_238/0.8)]">
								<svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
									<path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
									<path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
									<path d="M9 7h6M9 12h6M9 17h6" />
									<circle cx="7" cy="9" r="1" fill="currentColor" stroke="none" />
									<circle cx="17" cy="15" r="1" fill="currentColor" stroke="none" />
								</svg>
							</div>
							<div>
								<h3 class="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
									What is <span class="text-cyan-300">agentnative?</span>
								</h3>
								<p class="mt-4 text-base leading-relaxed text-zinc-400">
									Most teams bolt AI onto existing processes. Agentnative means designing the process around
									what AI can do, with humans accountable for direction, judgement, and standards.
								</p>
							</div>
						</div>

						<div class="relative mt-10 flex items-center justify-between gap-4">
							<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-zinc-400">
								<svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<circle cx="6" cy="6" r="1.2" /><circle cx="12" cy="6" r="1.2" /><circle cx="18" cy="6" r="1.2" />
									<circle cx="6" cy="12" r="1.2" /><circle cx="12" cy="12" r="1.2" /><circle cx="18" cy="12" r="1.2" />
									<circle cx="6" cy="18" r="1.2" /><circle cx="12" cy="18" r="1.2" /><circle cx="18" cy="18" r="1.2" />
								</svg>
							</div>
							<div class="h-px flex-1 border-t border-dashed border-cyan-300/50"></div>
							<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_-8px_rgb(34_211_238/0.85)]">
								<svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
									<rect x="5" y="8" width="14" height="10" rx="2" />
									<path d="M9 8V6a3 3 0 0 1 6 0v2" />
									<circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
									<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
									<path d="M10 16h4" stroke-linecap="round" />
								</svg>
							</div>
							<div class="h-px flex-1 border-t border-dashed border-cyan-300/50"></div>
							<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-sky-200">
								<svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
									<circle cx="12" cy="8" r="4" />
									<path d="M4 22a8 8 0 0 1 16 0" />
									<circle cx="18" cy="17" r="3" fill="#07111b" />
									<path d="m16.8 17 0.8 0.8 1.6-1.8" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<p class="mt-14 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400/90">Why me</p>
				<div class="mt-6 grid gap-5 sm:grid-cols-3">
					{#each [
						{
							icon: 'scale',
							title: 'Delivery at scale',
							body: "Banking, FTSE 100 transformation, logistics — I've led delivery inside those environments. I know where execution breaks because I've run it, not just advised on it."
						},
						{
							icon: 'code',
							title: 'I still build',
							body: "I write code, ship product, and use the same AI tools I recommend. If I say a step can be automated, it's because I've done it, not because I've seen a demo."
						},
						{
							icon: 'person',
							title: 'Direct founder access',
							body: 'No layers, no juniors, no handoff. I diagnose the problem and I help you fix it, the same person end to end.'
						}
					] as card}
						<div class="flex flex-col rounded-xl border border-cyan-300/15 bg-[#07111b]/70 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]">
							<div class="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
								{#if card.icon === 'scale'}
									<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
										<path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
										<path d="m4 12 6-4 6 3 6-7" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								{:else if card.icon === 'code'}
									<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
										<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								{:else}
									<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
										<circle cx="12" cy="8" r="4" />
										<path d="M4 22a8 8 0 0 1 16 0" />
									</svg>
								{/if}
							</div>
							<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{card.title}</h3>
							<div class="mt-3 h-px w-10 bg-cyan-300"></div>
							<p class="mt-6 flex-1 text-base leading-relaxed text-zinc-400">{card.body}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<ContactSection accent="cyan" />
	</main>

	<SiteFooter site="sme" />
</div>
