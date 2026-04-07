<script lang="ts">
	import type { ActionData } from '../../../routes/$types';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import ContactSection from '$lib/components/site/ContactSection.svelte';
	import MonthEndN8nDiagram from '$lib/components/site/MonthEndN8nDiagram.svelte';
	import HeroScene from '$lib/components/site/HeroScene.svelte';
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
		'I’m paying for three different tools and I still can’t tell you if we’re closing the month faster.',
		'My ops manager swears ChatGPT saves her hours. Our customer response time? Basically flat.',
		'I don’t need another pilot. I need one process end-to-end that doesn’t rely on me chasing Slack.',
		'We’re not big enough for a transformation programme. I need something my finance lead can actually run.',
		'If AI gets something wrong in front of a client, it’s my name on the door, not IT’s.'
	];

	const smeTypes = [
		{
			title: 'Professional services',
			desc: 'Law firms, accountants, consultants, and similar firms: client work, deadlines, and reputational risk sit alongside confidentiality and professional standards.',
			useCase:
				'Teams need to clear AI-assisted drafts and matter admin faster, without weakening privilege, confidentiality, or professional judgement.'
		},
		{
			title: 'Education',
			desc: 'Schools, colleges, and training providers balancing teaching quality, administration, safeguarding, and stakeholder trust.',
			useCase:
				'Owners want to free staff from reporting and comms overload while setting clear, workable rules for academic integrity and AI.'
		},
		{
			title: 'Charity',
			desc: 'Mission-led organisations with trustees, volunteers, and donors: every pound and hour has to earn its place.',
			useCase:
				'Impact and fundraising work lives in spreadsheets and email, while grants, volunteers, and donors all compete for the same thin capacity.'
		},
		{
			title: 'Scale-ups',
			desc: 'Fast-growing teams adding product, customers, and headcount: speed matters, but so does not baking chaos into the next stage.',
			useCase:
				'Customer onboarding and internal knowledge don’t scale with hiring, and every month adds people with no single repeatable way to work.'
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
		<section class="relative px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36">
			<div class="mx-auto max-w-4xl text-center">
				<p
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"></span>
					SMB & mid-market AI workflows
				</p>
				<HeroScene variant="sme" />
				<h1
					class="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
				>
					AI feels productive.
					<span class="mt-2 block text-zinc-500">Has the business moved?</span>
				</h1>
				<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
					I focus on <span class="text-zinc-200">the work that really matters</span> — the tasks that eat time,
					delay customers, or tie people up. Then I shift the process so AI takes out the repetitive parts, things
					move faster, and you can see the payoff. Not everyone doing their own thing with a chat tool — <span
						class="text-cyan-300/90"></span>I improve the process end to end.
				</p>
				<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="#contact"
						class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgb(34_211_238/0.6)] transition hover:bg-cyan-300"
					>
						Get in touch
					</a>
					<a
						href="#proof"
						class="text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-zinc-300 hover:underline"
					>
						See the data →
					</a>
				</div>
			</div>
		</section>

		<section class="border-y border-white/10 bg-[var(--color-surface-1)]/35 py-16">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p class="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
					Enterprise experience I now bring to smaller businesses
				</p>
				<div
					class="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-white/80 [text-shadow:0_0_24px_rgb(255_255_255/0.18)]"
				>
					{#each logos as name}
						<span>{name}</span>
					{/each}
				</div>
			</div>
		</section>

		<section id="about" class="scroll-mt-24 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">Who am I?</p>
				<h2 class="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
					Hi, I'm Howard, founder of <span class="text-cyan-300">agent</span>native
				</h2>
				<p class="mt-6 max-w-2xl leading-relaxed text-zinc-400">
					I've spent twenty years leading delivery and transformation inside global banks, FTSE 100 businesses,
					scale-ups, and early-stage ventures. I combine transformation consulting with hands-on product and
					software delivery, which means I can zoom out to redesign how things work, then zoom in to make change
					real.
				</p>

				<div class="mt-8 max-w-2xl rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] px-6 py-5">
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400/80">What is agentnative?</p>
					<p class="mt-3 text-sm leading-relaxed text-zinc-400">
						Most teams bolt AI onto existing processes. Agentnative means designing the process around what AI
						can do, with humans accountable for direction, judgement, and standards.
					</p>
				</div>

				<p class="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Why me</p>
				<div class="mt-6 grid gap-4 sm:grid-cols-3">
					{#each [
						{
							title: 'Delivery at scale',
							body: "Banking, FTSE 100 transformation, logistics — I've led delivery inside those environments. I know where execution breaks because I've run it, not just advised on it."
						},
						{
							title: 'I still build',
							body: "I write code, ship product, and use the same AI tools I recommend. If I say a step can be automated, it's because I've done it, not because I've seen a demo."
						},
						{
							title: 'Direct founder access',
							body: 'No layers, no juniors, no handoff. I diagnose the problem and I help you fix it, the same person end to end.'
						}
					] as card}
						<div class="flex flex-col rounded-xl border border-white/10 bg-[var(--color-surface-1)]/60 p-5">
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
						Large-scale survey evidence lines up with what business owners report in practice.
					</p>
				</div>
				<div class="mt-14 grid gap-6 md:grid-cols-3">
					{#each stats as s}
						<div
							class="group rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-8 transition hover:border-cyan-500/30"
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
					What business owners often say
				</h2>
				<ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each ownerQuotes as quote}
						<li
							class="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm leading-relaxed text-zinc-400"
						>
							“{quote}”
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section id="sme-types" class="scroll-mt-24 border-t border-white/5 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="max-w-2xl">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">Fit</p>
					<h2 class="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Professional services, education, charities &amp; scale-ups
					</h2>
					<p class="mt-4 text-zinc-400 leading-relaxed">
						Sector context changes what “good” looks like, confidentiality, duty of care, stewardship, or velocity. The
						workflow lens stays the same; the guardrails don’t.
					</p>
				</div>
				<ul class="mt-12 grid gap-6 sm:grid-cols-2">
					{#each smeTypes as t}
						<li
							class="flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/50 p-6 transition hover:border-cyan-500/25"
						>
							<h3 class="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
								{t.title}
							</h3>
							<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
							<div class="mt-4 border-t border-white/5 pt-4">
								<p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">Use case</p>
								<p class="mt-2 text-sm leading-relaxed text-zinc-400">{t.useCase}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section id="workflows" class="scroll-mt-24 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="max-w-2xl">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">Example</p>
					<h2 class="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Month-end close, operations that still hurt
					</h2>
					<p class="mt-4 text-zinc-400">
						Slowed by manual reconciliations, commentary drafts, review loops, and late exceptions.
					</p>
				</div>

				<div class="mt-10">
					<MonthEndN8nDiagram />
				</div>

				<div class="mt-12 grid gap-6 lg:grid-cols-3">
					<div class="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
						<h3 class="text-sm font-semibold uppercase tracking-wide text-cyan-300/90">Where AI helps</h3>
						<p class="mt-3 text-sm leading-relaxed text-zinc-400">
							First-pass variance commentary, unusual movements, ledger summaries, review-ready packs from
							source data.
						</p>
					</div>
					<div class="rounded-2xl border border-white/10 bg-[var(--color-surface-2)] p-6">
						<h3 class="text-sm font-semibold uppercase tracking-wide text-zinc-300">Human control</h3>
						<p class="mt-3 text-sm leading-relaxed text-zinc-400">
							Material judgement, exceptions, sign-off, and the narrative to owners or clients, owned by
							finance.
						</p>
					</div>
					<div class="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
						<h3 class="text-sm font-semibold uppercase tracking-wide text-violet-300/90">Business return</h3>
						<ul class="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-400">
							<li>Shorter close cycle</li>
							<li>Less analyst rework</li>
							<li>Fewer late surprises</li>
							<li>Stronger reporting confidence</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section id="services" class="scroll-mt-24 border-t border-white/5 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="max-w-2xl">
					<h2 class="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
						Services for SMB &amp; mid-market
					</h2>
					<p class="mt-2 text-zinc-500">
						Hands-on help where operations and customer-facing work meet AI, scoped to what a smaller org can actually run.
					</p>
				</div>
				<div class="mt-12 grid gap-6 sm:grid-cols-2">
					{#each services as svc}
						<div
							class="group relative flex flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-2)]/60 p-6 transition hover:border-cyan-500/30"
						>
							<a
								href="/services/sme/{svc.slug}"
								class="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500/50"
								aria-label={`${svc.title} — service details`}
							></a>
							<div class="relative z-10 flex flex-col pointer-events-none">
								<span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">{svc.tag}</span>
								<h3 class="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
									{svc.title}
								</h3>
								<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{svc.desc}</p>
								<div class="mt-4 flex flex-wrap gap-4">
									<span
										class="text-sm font-medium text-zinc-400 transition group-hover:text-cyan-300/90"
									>
										Details →
									</span>
									<a
										href="#contact"
										class="pointer-events-auto text-sm font-medium text-cyan-500/90 hover:text-cyan-400"
									>
										Enquire →
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section id="workshops" class="scroll-mt-24 border-t border-white/5 py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div class="max-w-2xl">
						<h2 class="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
							Workshops
						</h2>
						<p class="mt-2 text-zinc-500">
							Practical, energising sessions for teams and owners, grounded in real problems, not theory. You
							leave with clarity and something you can act on immediately.
						</p>
					</div>
					<a href="#contact" class="shrink-0 text-sm font-medium text-cyan-400/90 hover:text-cyan-300">
						Enquire about a workshop →
					</a>
				</div>
				<ul class="mt-12 grid gap-6 lg:grid-cols-3">
					{#each workshops as w}
						<li>
							<a
								href="/workshops/sme/{w.slug}"
								class="group flex h-full flex-col rounded-2xl border border-white/10 bg-[var(--color-surface-1)]/80 p-6 transition hover:border-cyan-500/35 hover:bg-[var(--color-surface-1)]"
							>
								<div class="flex flex-wrap items-baseline gap-2">
									<span class="rounded-md bg-white/5 px-2 py-0.5 text-xs font-medium text-cyan-300/90"
										>{w.duration}</span
									>
									<span class="text-xs text-zinc-600">For: {w.audience}</span>
								</div>
								<h3
									class="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white group-hover:text-cyan-200/95"
								>
									{w.title}
								</h3>
								<p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{w.desc}</p>
								<span class="mt-4 text-sm font-medium text-cyan-400/90 group-hover:text-cyan-300"
									>Agenda &amp; details →</span
								>
							</a>
						</li>
					{/each}
				</ul>
				<p class="mt-10 text-center text-sm text-zinc-500">
					All workshops can be delivered in person or remotely. Bespoke sessions are available, use the form
					below to scope one.
				</p>
			</div>
		</section>

		<ContactSection accent="cyan" />
	</main>

	<SiteFooter site="sme" />
</div>
