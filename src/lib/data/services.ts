import type { SiteId } from '$lib/server/site';

export type Service = {
	slug: string;
	title: string;
	desc: string;
	tag: string;
	/** Extra context on the detail page */
	lede: string;
	/** What this engagement covers */
	includes: string[];
	/** Who it fits or cadence */
	idealFor?: string[];
};

const prodeng: Service[] = [
	{
		slug: 'assessment',
		title: 'Assessment',
		tag: 'Start here',
		desc: 'Find where AI helps, where work breaks, and what to change first, workflow analysis, bottlenecks, priorities.',
		lede: 'A structured look at how work actually flows across product and engineering, so investment follows leverage, not hype.',
		includes: [
			'Map critical paths across PDLC and SDLC: where time, rework, and risk concentrate',
			'Separate quick wins from foundational work (tooling, data, ownership)',
			'Prioritised recommendations with a sequenced view you can fund and staff',
			'Explicit human gates: what must stay manual or reviewed, and why'
		],
		idealFor: [
			'Leadership teams unsure where agentic automation earns its place',
			'Organisations post-pilot that need an honest picture before scaling spend'
		]
	},
	{
		slug: 'pilot-implementation',
		title: 'Pilot & implementation',
		tag: 'Delivery',
		desc: 'Redesign one workflow, embed AI in the loop, and measure operational impact with clear quality gates.',
		lede: 'One end-to-end slice of the real system, designed, instrumented, and owned so you can prove value before broad rollout.',
		includes: [
			'Charter: scope, metrics, success criteria, and explicit out-of-scope boundaries',
			'Workflow redesign with AI touchpoints, review steps, and traceability',
			'Integration with your toolchain where it matters, not generic chat layers',
			'Review cadence: what to inspect vs. trust, and when to pause or pivot'
		],
		idealFor: [
			'Teams with a named sponsor and day-to-day owner for the pilot',
			'Use cases where quality, audit, or customer impact require clear gates'
		]
	},
	{
		slug: 'coaching-adoption',
		title: 'Coaching & adoption',
		tag: 'People',
		desc: 'Shift roles, behaviours, and decision patterns so leaders and teams make adoption stick.',
		lede: 'Tools change fast; habits and accountability change slowly. This is about making new ways of working durable after the consultants leave.',
		includes: [
			'Role clarity: who owns prompts, policy, review, and escalation',
			'Leaders: steering experiments without eroding standards',
			'Teams: pairing patterns, review norms, and psychological safety',
			'Lightweight playbooks: enough structure to scale, not bureaucracy for its own sake'
		],
		idealFor: [
			'Organisations rolling out coding agents, CI automation, or AI-assisted product workflows',
			'Groups where adoption is uneven or dependent on a few “hero” individuals'
		]
	},
	{
		slug: 'mvp-build',
		title: 'MVP build',
		tag: 'Build',
		desc: 'For founders: AI-native product design and working software, scoping, architecture, iterative shipping.',
		lede: 'From problem framing to shippable software, opinionated on architecture, pragmatic on scope, so you learn from real users.',
		includes: [
			'Product and technical scoping aligned to validation, not feature lists',
			'Architecture choices that keep options open without overbuilding',
			'Iterative delivery with visible increments and clear definition of done',
			'Where AI belongs in the product, and where classical software still wins'
		],
		idealFor: [
			'Founders and small product teams building AI-augmented products',
			'Ventures that need hands-on build alongside strategic clarity'
		]
	}
];

const sme: Service[] = [
	{
		slug: 'workflow-opportunity-scan',
		title: 'Find where work is slowing down',
		tag: 'Start here',
		desc: 'A straight look at where manual effort, handoffs, and rework hurt margins, speed, or customer experience — prioritised for your headcount, systems, and budget.',
		lede: 'Enough discovery to know what to fix first, not a boilerplate transformation deck or a vague “AI strategy”.',
		includes: [
			'Short conversations and a look at how work really happens today',
			'A clear picture of delays, rework, exceptions, and where systems get in the way',
			'A short prioritised list: impact, feasibility, and risk in plain language',
			'A rough sense of what the next step could cost in time and attention — not a multi-year programme'
		],
		idealFor: [
			'Founders and whoever actually runs finance or ops day to day, and wants a clear place to start—not another vague “AI strategy”',
			'Small teams where a few people already use AI their own way, but no shared sense of what it’s saving or where the risks are'
		]
	},
	{
		slug: 'one-process-redesign',
		title: 'Improve one workflow end to end',
		tag: 'Delivery',
		desc: 'Pick one high-value job the business feels every week (e.g. month-end, onboarding, triage). Redesign it with clear owners, sensible use of AI, and numbers you can actually track.',
		lede: 'Going deep on one job beats shallow “AI everywhere” — especially when people and budget are tight. That often includes making email, spreadsheets, and line-of-business tools work together for that job, without a separate IT programme.',
		includes: [
			'Agree where the job starts and ends, what systems it touches, and what is out of scope',
			'Redesign the steps: where AI helps, where a person must decide, and what you keep as evidence',
			'When the blocker is tools not talking: proportionate connections, handoffs, and checks — not rip-and-replace',
			'Baseline and target measures you can track without a data science team',
			'Handover: simple documentation and habits so the job doesn’t slide back when the project ends'
		],
		idealFor: [
			'Month-end / reporting, customer onboarding, service desk, or similar high-volume flows',
			'Teams that can name one sponsor and a working owner for the pilot'
		]
	},
	{
		slug: 'practical-adoption',
		title: 'Train the team so gains stick',
		tag: 'People',
		desc: 'Templates, guardrails, and habits so the team uses AI in a consistent, safe way — not brilliant one-off prompts that disappear when one person is on leave.',
		lede: 'Most small businesses don’t need a “centre of excellence”. They need a minimum sensible standard: fast enough to stick, tight enough to sleep at night.',
		includes: [
			'Shared patterns for recurring tasks so people aren’t reinventing the wheel',
			'Clear rules for data, client-facing output, and when to stop and escalate',
			'Light rituals: what to review, how to spot-check, and who owns exceptions',
			'Short coaching for managers and staff so it lands in real work, not policy PDFs'
		],
		idealFor: [
			'Teams where AI usage varies wildly by individual',
			'Regulated or client-facing contexts needing light-touch but real discipline'
		]
	},
	{
		slug: 'lightweight-integration',
		title: 'Make your existing tools cooperate',
		tag: 'Connect',
		desc: 'When the main headache is systems not talking — email, spreadsheets, line-of-business apps — get sensible links and handoffs without a multi-year integration project.',
		lede: 'Practical glue for how your business actually runs today: enough automation and visibility to trust it, without replacing everything you use.',
		includes: [
			'Honest view of what can be connected with proportionate effort',
			'Patterns that fit you: scheduled tasks, notifications, human-in-the-loop steps where judgement matters',
			'Straight trade-offs: buy, build, or “good enough” bridge — spelled out in business terms',
			'Basic visibility when something breaks so you’re not flying blind'
		],
		idealFor: [
			'Organisations heavy on Excel, email, and a few LOB tools, not ready for enterprise integration',
			'Leaders who want incremental reliability, not a platform programme'
		]
	}
];

export const servicesBySite: Record<SiteId, Service[]> = {
	sme,
	prodeng
};

export function getService(site: SiteId, slug: string): Service | undefined {
	return servicesBySite[site]?.find((s) => s.slug === slug);
}

export function listServices(site: SiteId): Service[] {
	return servicesBySite[site] ?? [];
}
