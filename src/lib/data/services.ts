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
		title: 'Workflow opportunity scan',
		tag: 'Start here',
		desc: 'A focused look at where manual effort, handoffs, and rework hurt margins or cycle time, prioritised for your headcount, systems, and budget.',
		lede: 'No boilerplate transformation deck, enough discovery to know where AI and process change actually bite for a smaller org.',
		includes: [
			'Short interviews and artifact review: how work really gets done',
			'Friction map: handoffs, rework, exceptions, and system seams',
			'Prioritised shortlist: impact, feasibility, and risk in plain language',
			'Rough sizing: what a pilot might cost in time and attention, not a multi-year programme'
		],
		idealFor: [
			'COOs, heads of finance/ops, and founders who need a credible starting point',
			'Teams already using AI ad hoc but without a shared picture of ROI'
		]
	},
	{
		slug: 'one-process-redesign',
		title: 'One-process redesign',
		tag: 'Delivery',
		desc: 'Pick a single high-value flow (e.g. close week, onboarding, support triage); redesign it with AI in the loop, clear owners, and measurable outcomes.',
		lede: 'Depth on one workflow beats shallow coverage everywhere, especially when headcount and budget are tight.',
		includes: [
			'Joint definition of start/end, systems touched, and exclusions',
			'Redesign of steps: where AI assists, where humans decide, where you log evidence',
			'Baseline and target metrics you can track without a data science team',
			'Handover: documentation and habits so the process doesn’t collapse when the project ends'
		],
		idealFor: [
			'Month-end / reporting, customer onboarding, service desk, or similar high-volume flows',
			'Teams that can name one sponsor and a working owner for the pilot'
		]
	},
	{
		slug: 'practical-adoption',
		title: 'Practical adoption',
		tag: 'People',
		desc: 'Guardrails, templates, and habits so AI use is consistent across the team, not hero prompts that vanish when one person is on leave.',
		lede: 'SMBs rarely have a centre of excellence. This is minimum viable standards: enough consistency to be safe and fast.',
		includes: [
			'Shared templates and prompt patterns for recurring tasks',
			'Guardrails for data handling, client-facing comms, and exceptions',
			'Team rituals: review, spot-checks, and when to escalate',
			'Manager and IC coaching in short, practical sessions'
		],
		idealFor: [
			'Teams where AI usage varies wildly by individual',
			'Regulated or client-facing contexts needing light-touch but real discipline'
		]
	},
	{
		slug: 'lightweight-integration',
		title: 'Lightweight integration',
		tag: 'Connect',
		desc: 'Connect AI sensibly to the spreadsheets, email, and line-of-business tools you already use, without a multi-year integration programme.',
		lede: 'Pragmatic glue: scripts, connectors, and workflows that respect your current stack instead of replacing it.',
		includes: [
			'Assessment of what can be connected with proportionate effort',
			'Automation patterns: scheduled jobs, notifications, human-in-the-loop handoffs',
			'Options trade-off: buy vs. build vs. “good enough” manual bridge',
			'Basic observability: logs and failure paths so you’re not flying blind'
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
