<script lang="ts">

	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import ContactSection from '$lib/components/site/ContactSection.svelte';
	import PdlcAgentHumanDiagram from '$lib/components/site/PdlcAgentHumanDiagram.svelte';
	import HeroScene from '$lib/components/site/HeroScene.svelte';
	import { listWorkshops } from '$lib/data/workshops';
	import { listServices } from '$lib/data/services';


	const logos = ['Flutter', 'BT', 'DHL Express', 'Marsh', 'Commerzbank', 'Ensek', 'Canada Life', 'abrdn'];

	const stats = [
		{ value: '#1', label: 'of 25 factors', sub: 'Workflow redesign had the strongest effect on AI ROI (McKinsey 2025).' },
		{ value: '3×', label: 'more likely', sub: 'Top performers redesigned how work gets done, not just added tools.' },
		{ value: '79%', label: 'untapped', sub: 'Of orgs using gen AI haven’t redesigned a single workflow.' }
	];

	const leaderQuotes = [
		"We shipped an agent in a sprint. Three weeks later we still don’t know if it’s actually doing the right thing.",
		"Every team has a different definition of done when an AI is in the loop. Nothing connects.",
		"The agent works in the demo. In production it hallucinates on edge cases nobody wrote tests for.",
		"We keep debating who owns the AI decisions \u2014 product, eng, or the model. It’s slowing everything down.",
		"We retrofitted agents into the existing PDLC. The process wasn’t designed for systems that change their own behaviour."
	];

	const pdlc = [
		{
			phase: 'Ideation',
			desc: 'Problem framing, bets, and constraints, so the roadmap reflects reality, not theatre.'
		},
		{
			phase: 'Discovery',
			desc: 'Research, prototyping, and validation loops that de-risk scope before engineering locks in.'
		},
		{
			phase: 'Delivery',
			desc: 'Build, integration, and quality, with shipping increments and clear ownership and traceability.'
		},
		{
			phase: 'Launch',
			desc: 'Release, enablement, and operational readiness, so customers and teams succeed on day one.'
		},
		{
			phase: 'Measure',
			desc: 'Outcomes, reliability, and learning, where telemetry and feedback close the loop back to the product model.'
		}
	];

const services = listServices('prodeng');

	const workshops = listWorkshops('prodeng');

	const recentBuilds = [
		{
			tag: 'Tool',
			title: 'AI Accelerator for Product Teams',
			desc: 'Practical AI tools for discovery, planning, execution, and iteration, built from repeated bottlenecks seen in real teams. Fast individuals, slow overall performance. The Accelerator helps teams start changing that immediately.',
			chips: ['Discovery & research', 'Roadmaps & backlogs', 'Delivery & iteration'],
			quote: null,
			href: '/builds/ai-accelerator-product-teams'
		},
		{
			tag: 'Client build',
			title: 'The Edge Accelerator',
			desc: 'An AI-powered platform shaped end-to-end, from concept and architecture through to iterative development and launch. Helps businesses spot and act on growth opportunities, built with AI-native workflows from the ground up.',
			chips: [],
			quote: {
				text: '"agentnative co. have been instrumental in shaping our EdgeAccelerator product, advising us throughout the process and helping us iteratively build and refine our AI platform."',
				author: 'Joel Davis',
				role: 'Founder, Edge Accelerator'
			},
			href: 'https://theedgeaccelerator.co/'
		}
	];
</script>

<div class="relative min-h-screen overflow-x-hidden">
	<div class="pointer-events-none fixed inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(251_191_36/0.14),transparent)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_30%,rgb(167_139_250/0.12),transparent)]"
		></div>
		<div
			class="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.03)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.03)_1px,transparent_1px)] [background-size:64px_64px]"
		></div>
		<div class="absolute inset-0 bg-linear-to-b from-transparent via-[var(--color-surface-0)]/20 to-[var(--color-surface-0)]"></div>
	</div>

	<SiteHeader site="prodeng" />

	<main>
		<section class="relative px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36">
			<div class="mx-auto max-w-4xl text-center">
				<p
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300/90"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400"></span>
					End-to-end product engineering
				</p>
				<HeroScene variant="prodeng" />
				<h1
					class="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
				>
					From idea to launch
					<span class="mt-2 block bg-linear-to-r from-amber-200 via-amber-100 to-zinc-300 bg-clip-text text-transparent">
						measured in production
					</span>
				</h1>
				<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
					AI changes what's possible. <span class="text-zinc-200">Ways of working have to change with it.</span> I redesign how product and engineering teams operate across the full PDLC — then build the agentic pipelines that make it real.
				</p>
				<div class="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
					<a
						href="#contact"
						class="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgb(251_191_36/0.45)] transition hover:bg-amber-300"
					>
						Get in touch
					</a>
					<a
						href="#how-it-works"
						class="text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-amber-200/90 hover:underline"
					>
						See the approach →
					</a>
					<a
						href="#recent-builds"
						class="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400/80 underline-offset-4 transition hover:text-amber-300 hover:underline"
					>
						<span class="rounded-full bg-amber-400/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-300">New</span>
						AI Accelerator for Product Teams →
					</a>
				</div>
			</div>
		</section>

		<section class="border-b border-white/10 bg-[var(--color-surface-1)]/35 py-12">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p class="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
					Some of the organisations I've worked with
				</p>
				<div
					class="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-white/85 [text-shadow:0_0_26px_rgb(255_255_255/0.22)]"
				>
					{#each logos as name}
						<span>{name}</span>
					{/each}
				</div>
			</div>
		</section>

		<section id="about" class="scroll-mt-24 border-b border-white/5 py-16 sm:py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<!-- Who am I -->
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">Who am I?</p>
				<h2 class="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
					Hi, I'm Howard, founder of <span class="text-amber-400">agent</span>native
				</h2>
				<p class="mt-6 max-w-2xl leading-relaxed text-zinc-400">
					I've spent twenty years leading delivery and transformation inside global banks, FTSE 100 businesses, scale-ups, and early-stage ventures. I combine transformation consulting with hands-on product and software delivery, which means I can zoom out to redesign how things work, then zoom in to make change real.
				</p>

				<!-- What is agentnative callout -->
				<div class="mt-8 max-w-2xl rounded-xl border border-amber-500/20 bg-amber-500/[0.04] px-6 py-5">
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400/80">What is agentnative?</p>
					<p class="mt-3 text-sm leading-relaxed text-zinc-400">
						Most teams bolt AI onto existing processes. Agentnative means designing the process around what AI can do, with humans accountable for direction, judgement, and standards.
					</p>
				</div>

				<!-- Why me -->
				<p class="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Why me</p>
				<div class="mt-6 grid gap-4 sm:grid-cols-3">
					{#each [
						{ title: 'Delivery at scale', body: "Banking, FTSE 100 transformation, logistics — I've led delivery inside those environments. I know where execution breaks because I've run it, not just advised on it." },
						{ title: 'I still build', body: "I write code, ship product, and use the same AI tools I recommend. If I say a step can be automated, it's because I've done it, not because I've seen a demo." },
						{ title: 'Direct founder access', body: 'No layers, no juniors, no handoff. I diagnose the problem and I help you fix it, the same person end to end.' }
					] as card}
						<div class="flex flex-col rounded-xl border border-white/10 bg-[var(--color-surface-2)]/60 p-5">
							<h3 class="font-[family-name:var(--font-display)] text-base font-semibold text-white">{card.title}</h3>
							<p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{card.body}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section id="proof" class="scroll-mt-24 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="text-center">
					<h2 class="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Research and experience tell the same story
					</h2>
					<p class="mx-auto mt-3 max-w-xl text-zinc-500">
						Large-scale survey evidence lines up with what shows up in leadership conversations.
					</p>
				</div>
				<div class="mt-14 grid gap-6 md:grid-cols-3">
					{#each stats as s}
						<div
							class="group rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-8 transition hover:border-amber-500/30"
						>
							<p class="font-[family-name:var(--font-display)] text-4xl font-bold text-gradient md:text-5xl">
								{s.value}
							</p>
							<p class="mt-2 text-sm font-medium text-zinc-300">{s.label}</p>
							<p class="mt-3 text-sm leading-relaxed text-zinc-500">{s.sub}</p>
						</div>
					{/each}
				</div>
				<p class="mt-8 text-center text-xs text-zinc-600">McKinsey State of AI: Global Survey 2025</p>
			</div>
		</section>

		<section class="border-t border-white/5 bg-[var(--color-surface-1)]/30 py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<h2 class="font-[family-name:var(--font-display)] text-center text-xl font-semibold text-white sm:text-2xl">
					What leaders often say
				</h2>
				<ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each leaderQuotes as quote}
						<li
							class="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm leading-relaxed text-zinc-400"
						>
							"{quote}"
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section
			id="how-it-works"
			class="scroll-mt-24 border-y border-white/5 bg-[var(--color-surface-1)]/50 py-20 sm:py-24"
		>
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">How it works</p>
				<h2 class="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
					The end-to-end agentic pipeline
				</h2>
				<p class="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
					Most automation stops at the IDE. I build it across the full lifecycle — every phase from first bet to measured outcome — with <span class="text-zinc-200">human gates and clear owners</span> at each handoff, not AI left to run unsupervised.
				</p>
			</div>

			<div class="mx-auto mt-14 max-w-6xl space-y-12 px-4 sm:mt-16 sm:px-6">
				<!-- PDLC phases -->
				<div>
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">Product lifecycle · PDLC</p>
					<p class="mt-2 text-sm text-zinc-500">
						From first bet to measured outcomes — "done" includes adoption and learning, not only a release.
					</p>
					<ol class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
						{#each pdlc as step, i}
							<li
								class="flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-5 transition hover:border-amber-500/35"
							>
								<span class="text-xs font-semibold text-zinc-600">0{i + 1}</span>
								<h4 class="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
									{step.phase}
								</h4>
								<p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
							</li>
						{/each}
					</ol>
				</div>

<!-- Agent / human diagram -->
				<PdlcAgentHumanDiagram />
			</div>
		</section>

		<section id="services" class="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="max-w-2xl">
					<h2 class="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Services scaled to you
					</h2>
					<p class="mt-2 text-zinc-500">
						Assessment, delivery, coaching, and MVP builds, right-sized for your product and engineering stage.
					</p>
				</div>
				<div class="mt-12 grid gap-6 sm:grid-cols-2">
					{#each services as svc}
						<a
							href="/services/prodeng/{svc.slug}"
							class="group flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-6 transition hover:border-amber-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/50"
						>
							<span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">{svc.tag}</span>
							<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
								{svc.title}
							</h3>
							<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{svc.desc}</p>
							<span class="mt-4 text-sm font-medium text-zinc-400 transition group-hover:text-amber-200/90">
								Details →
							</span>
						</a>
					{/each}
				</div>
			</div>
		</section>

		<section id="workshops" class="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div class="max-w-2xl">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Workshops</p>
						<h2 class="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
							Hands-on sessions for teams and leaders
						</h2>
						<p class="mt-3 text-sm text-zinc-500">
							Practical working sessions on product and engineering delivery, grounded in how work actually flows,
							not tooling for its own sake. You leave with clarity and concrete next steps.
						</p>
					</div>
					<a href="#contact" class="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-300">
						Enquire about a workshop →
					</a>
				</div>
				<ul class="mt-12 grid gap-6 lg:grid-cols-3">
					{#each workshops as w}
						<li>
							<a
								href="/workshops/prodeng/{w.slug}"
								class="group flex h-full flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-6 transition hover:border-amber-500/35 hover:bg-[var(--color-surface-2)]/80"
							>
								<div class="flex flex-wrap items-baseline gap-2">
									<span class="rounded-md bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-300/90"
										>{w.duration}</span
									>
									<span class="text-xs text-zinc-600">For: {w.audience}</span>
								</div>
								<h3
									class="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white group-hover:text-amber-100"
								>
									{w.title}
								</h3>
								<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{w.desc}</p>
								<span class="mt-4 text-sm font-medium text-amber-400/90 group-hover:text-amber-300"
									>Agenda &amp; details →</span
								>
							</a>
						</li>
					{/each}
				</ul>
				<p class="mt-10 text-center text-sm text-zinc-500">
					Delivered in person or remotely. Bespoke formats available, use the form below to scope one.
				</p>
			</div>
		</section>

		<section id="recent-builds" class="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="max-w-2xl">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">Recent builds</p>
					<h2 class="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Not just advice. Real builds.
					</h2>
					<p class="mt-3 text-zinc-500">Shipping and shaping products, not only strategy decks.</p>
				</div>
				<div class="mt-12 grid gap-6 lg:grid-cols-2">
					{#each recentBuilds as build}
						<div class="group relative flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-6 transition hover:border-amber-500/30">
							<a href={build.href} target={build.href.startsWith('http') ? '_blank' : undefined} rel={build.href.startsWith('http') ? 'noopener noreferrer' : undefined} class="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/50" aria-label={build.title}></a>
							<div class="relative z-10 flex flex-col pointer-events-none">
								<span class="self-start rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-300/90">{build.tag}</span>
								<h3 class="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{build.title}</h3>
								<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{build.desc}</p>
								{#if build.chips.length > 0}
									<div class="mt-5 flex flex-wrap gap-2">
										{#each build.chips as chip}
											<span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">{chip}</span>
										{/each}
									</div>
								{/if}
								{#if build.quote}
									<blockquote class="mt-5 rounded-xl border-l-2 border-amber-500/40 bg-amber-500/[0.04] px-5 py-4">
										<p class="text-sm italic leading-relaxed text-zinc-300">{build.quote.text}</p>
										<footer class="mt-3 text-xs text-zinc-400">
											<span class="font-semibold text-zinc-200">{build.quote.author}</span>
											<span class="text-zinc-600"> , {build.quote.role}</span>
										</footer>
									</blockquote>
								{/if}
								<span class="mt-5 text-sm font-medium text-amber-400/80 transition group-hover:text-amber-300">Learn more →</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<ContactSection accent="amber" />
	</main>

	<SiteFooter site="prodeng" />
</div>
