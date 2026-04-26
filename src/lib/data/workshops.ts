import type { SiteId } from '$lib/server/site';

export type WorkshopAgendaBlock = {
	title: string;
	duration?: string;
	items: string[];
};

export type Workshop = {
	slug: string;
	title: string;
	duration: string;
	audience: string;
	desc: string;
	outcomes: string[];
	agenda: WorkshopAgendaBlock[];
	/** Delivery format, materials, prep */
	formatNotes?: string[];
};

const sme: Workshop[] = [
	{
		slug: 'introduction-to-ai-in-the-workplace',
		title: 'Introduction to AI at work',
		duration: 'Half day',
		audience: 'owners, leads, and teams',
		desc: 'A practical session on what AI is useful for in a small business, where it can save time, where to be careful, and how to get started without adding more noise.',
		outcomes: [
			'A clear, shared understanding of what "AI at work" should mean for your business right now.',
			'Clarity on where it helps, and where the risks are real',
			'Practical habits for adopting it responsibly without a policy manual'
		],
		agenda: [
			{
				title: 'Opening, stakes and expectations',
				duration: '30 min',
				items: [
					'What success looks like for the session (outcomes, not slides)',
					'Quick pulse: who’s already using AI tools and for what',
					'Ground rules: judgement, data, and confidentiality'
				]
			},
			{
				title: 'Landscape, what changed, what didn’t',
				duration: '45 min',
				items: [
					'From copilots to agents: capabilities without the jargon trap',
					'Why one person getting faster doesn’t always move the business',
					'Where fixing the process matters more than adding another tool'
				]
			},
			{
				title: 'Value, where AI earns its place',
				duration: '45 min',
				items: [
					'High-value workflows vs. one-off tasks: how to tell the difference',
					'Quality, risk, and ownership: what you can’t hand off blindly (including client-facing work)',
					'Short group exercise: map one real workflow and where it grinds'
				]
			},
			{
				title: 'Leadership, steering the shift',
				duration: '40 min',
				items: [
					'Who decides what when AI is in the loop (even in a flat team)',
					'Room to try things without dropping your standards',
					'What “good enough to use” means when someone’s name is still on the work'
				]
			},
			{
				title: 'Close, next steps',
				duration: '20 min',
				items: [
					'Capture themes and questions from the room',
					'Optional follow-on: deeper workflow or “who does what” sessions',
					'How to book a small pilot or hands-on help'
				]
			}
		],
		formatNotes: [
			'Interactive throughout, short inputs, discussion, and one hands-on mapping exercise.',
			'Can be delivered in person or remotely; materials are shared digitally after the session.'
		]
	},
	{
		slug: 'human-vs-ai-roles-and-responsibilities',
		title: 'Who does what when AI joins the work',
		duration: 'Half day',
		audience: 'owners, leads, and teams',
		desc: 'Map one real workflow and learn what should stay with people, what can be automated, and where judgement, review, and accountability still matter.',
		outcomes: [
			'A simple view of how people and AI can work together in one real workflow.',
			'Agreement on who to ask when AI output is wrong or unclear',
			'A few plain rules you can adopt without a transformation programme'
		],
		agenda: [
			{
				title: 'Framing, why roles matter more than tools',
				duration: '25 min',
				items: [
					'When “faster” breaks handoffs, quality, or your ability to explain what happened',
					'Examples: drafting, analysis, and customer comms with different risk levels',
					'Pick one workflow from the room to work through together'
				]
			},
			{
				title: 'Mapping, who does what today',
				duration: '50 min',
				items: [
					'Walk the workflow step by step: inputs, decisions, outputs',
					'Tag steps: human-only, AI-assisted, candidate for automation',
					'Surface grey zones: judgement, sign-off, exceptions, client-facing narrative'
				]
			},
			{
				title: 'Redesign, shifting responsibilities',
				duration: '50 min',
				items: [
					'What moves to AI support vs. what stays with named people',
					'How review and spot-checks change when volume goes up',
					'What to keep on record so clients (and any regulator) can follow the thread'
				]
			},
			{
				title: 'Light-touch guardrails',
				duration: '30 min',
				items: [
					'Simple standards: prompts, approved tools, and what never goes in',
					'When to stop and escalate instead of guessing',
					'How to tell the rest of the team without burying them in process'
				]
			},
			{
				title: 'Wrap-up, commitments',
				duration: '15 min',
				items: [
					'Capture decisions and open risks',
					'Suggested owners and next working session (if needed)'
				]
			}
		],
		formatNotes: [
			'Bring a real workflow (or an anonymised version). Best when it’s your actual day job, not a textbook example.',
			'Works well from a handful of people up to ~20; larger groups use breakouts.'
		]
	},
	{
		slug: 'picking-and-scoping-your-first-workflow-pilot',
		title: 'Choosing the first workflow to improve',
		duration: 'Half day',
		audience: 'owners, leads, and teams',
		desc: 'Learn how to spot a process worth improving, agree what better looks like, and choose a sensible first workflow to test.',
		outcomes: [
			'A shortlist of realistic workflow ideas scored by value, feasibility, and risk.',
			'A one-page pilot charter: goal, metrics, scope, and exit criteria',
			'A realistic 30–90 day cadence for review and iteration'
		],
		agenda: [
			{
				title: 'Why one workflow, and what “done” means',
				duration: '25 min',
				items: [
					'Why pilots fail: scope creep, fuzzy metrics, no owner',
					'Outcome-led framing: cycle time, rework, quality, customer signal',
					'Align on sponsor and day-to-day owner for the pilot'
				]
			},
			{
				title: 'Discovery, candidate workflows',
				duration: '45 min',
				items: [
					'Inventory pain: where time leaks, errors repeat, or handoffs stall',
					'Score each candidate: value, data readiness, change burden, risk',
					'Pick one primary and one backup for deeper scoping'
				]
			},
			{
				title: 'Scoping, the pilot charter',
				duration: '55 min',
				items: [
					'Define start/end of workflow, systems touched, and exclusions',
					'Baseline metrics: how you’ll know if things moved',
					'Human gates: approvals, exceptions, audit trail',
					'Draft the charter on a single page (template provided)'
				]
			},
			{
				title: 'Execution rhythm',
				duration: '30 min',
				items: [
					'Weekly or fortnightly review: what to inspect vs. what to trust',
					'When to pause, pivot, or fold the pilot into normal working practice',
					'Handover: enough notes and show-and-tell so the rest of the team can run it'
				]
			},
			{
				title: 'Close',
				duration: '15 min',
				items: [
					'Review charter drafts and immediate next actions',
					'Optional: book implementation or coaching support'
				]
			}
		],
		formatNotes: [
			'Examples often come from finance, ops, HR, or customer-facing work (month-end, onboarding, enquiries).',
			'Optional pre-read: a short list of 2–3 processes you’d like to improve.'
		]
	}
];

const prodeng: Workshop[] = [
	{
		slug: 'ai-in-the-pdlc',
		title: 'AI in the PDLC: concepts, roles, and events',
		duration: 'Full day',
		audience: 'Product, engineering, and delivery teams',
		desc: 'An introduction to how AI fits into the product development lifecycle. Key concepts, how roles shift, and which events and gates matter when agents join the flow.',
		outcomes: [
			'Shared language for AI concepts across product, engineering, and delivery',
			'Clarity on how roles and responsibilities shift at each PDLC phase',
			'A map of which events, gates, and ceremonies need rethinking — and what to do first'
		],
		agenda: [
			{
				title: 'Foundations: what changed and what didn\'t',
				duration: '2 h',
				items: [
					'From tools to agents: capabilities and limits without the jargon trap',
					'The PDLC refreshed: ideation, discovery, delivery, launch, measure',
					'Key concepts: agents, pipelines, gates, prompts, evals, and human oversight',
					'Where AI creates real leverage vs. where hype creates risk'
				]
			},
			{
				title: 'Roles: who does what now',
				duration: '1.5 h',
				items: [
					'How responsibilities shift across product, engineering, design, and leadership',
					'Human vs. agent: what stays with people and why',
					'RACI thinking for AI-assisted work: ownership, sign-off, and escalation paths',
					'Exercise: map one real role against the new capability landscape'
				]
			},
			{
				title: 'Events and gates: the new ceremony model',
				duration: '2 h',
				items: [
					'Which meetings, reviews, and checkpoints need AI-aware redesign',
					'Planning, discovery, and backlog refinement with AI in the loop',
					'PR reviews, release gates, and production sign-offs: what changes',
					'Mapping your current events to the AI-enabled PDLC'
				]
			},
			{
				title: 'Close: gaps, next steps, and commitments',
				duration: '30 min',
				items: [
					'Consolidate themes and open questions from the room',
					'Identify priority gaps in roles, governance, or tooling',
					'Optional follow-on: deeper lifecycle mapping or embedded support'
				]
			}
		],
		formatNotes: [
			'Full day; breaks scheduled. Works in person or remotely with pre-shared context.',
			'Ideal group: cross-functional — product, engineering, delivery, and at least one leader.'
		]
	},
	{
		slug: 'map-your-pdlc-and-sdlc-for-automation',
		title: 'Claude for coding: practical workflow, skills, and hooks',
		duration: 'Full day',
		audience: 'Engineers, tech leads, and delivery leads',
		desc: 'A hands-on introduction to using Claude as a serious coding partner: repeatable workflows, reusable Skills, and the hooks that keep quality high. Leave with a team-ready setup and clear habits, not “hero prompts”.',
		outcomes: [
			'A shared, repeatable workflow for planning, implementing, and reviewing code with Claude',
			'Practical patterns for prompting: constraints, examples, and “what good looks like”',
			'A starter set of Skills and hooks to keep changes safe (tests, linting, review gates)',
			'Agreement on when to trust, when to verify, and how to escalate ambiguity'
		],
		agenda: [
			{
				title: 'Foundations: what Claude is good at (and what it isn’t)',
				duration: '2 h',
				items: [
					'Where it helps most: refactors, migrations, tests, docs, scaffolding, debugging',
					'Common failure modes: confident wrongness, missing context, silent assumptions',
					'Working style: giving constraints, supplying examples, keeping changes incremental',
					'Security and data boundaries: what never goes in, and how to anonymise safely'
				]
			},
			{
				title: 'Workflow: plan → implement → verify → ship',
				duration: '1.5 h',
				items: [
					'Turning a request into an executable plan: scope, acceptance criteria, edge cases',
					'Diff-driven development: small commits, clear intent, easy rollback',
					'Using tests/lints as the source of truth (not chat confidence)',
					'Review patterns: asking for risks, alternatives, and “what would you test?”'
				]
			},
			{
				title: 'Skills and hooks: make it repeatable for a team',
				duration: '2 h',
				items: [
					'Skills: when to create one, what belongs inside, and how to keep them current',
					'Quality gates: pre-commit hooks, CI checks, formatting, and type safety',
					'Templates: PR summaries, test plans, and “definition of done” checklists',
					'Team conventions: when to pair, when to solo, and when to stop the line'
				]
			},
			{
				title: 'Close: your starter kit and next steps',
				duration: '30 min',
				items: [
					'Pick 1–2 high-leverage use cases to standardise first (from your backlog)',
					'Agree ownership for Skills, hooks, and review standards',
					'Next steps: rollout, coaching, or an embedded pilot'
				]
			}
		],
		formatNotes: [
			'Bring a real repo (or an anonymised slice) so we can practice on your actual workflows.',
			'Works best with 6–20 participants; larger groups use breakouts and rotating drivers.'
		]
	},
	{
		slug: 'ai-in-the-product-model-lifecycle',
		title: 'AI in the product model lifecycle',
		duration: 'Full day',
		audience: 'Product, technical, and transformation leaders',
		desc: 'Design an AI-enabled operating model from idea to production. Where AI can accelerate discovery, planning, build, test, and release, and where human oversight, quality gates, and accountability stay non-negotiable.',
		outcomes: [
			'A coherent view of AI touchpoints across the product model (not only engineering)',
			'Explicit quality gates and accountability per phase',
			'A draft operating model outline your teams can react to and refine'
		],
		agenda: [
			{
				title: 'Morning, product model as a system',
				duration: '2 h',
				items: [
					'Framing: AI as capability embedded in the operating model, not a side initiative',
					'Phase-by-phase pass: ideation, discovery, delivery, launch, measure',
					'For each phase: decisions, artefacts, data, and typical failure modes',
					'Where gen AI and agents help vs. where classical ML or rules still win'
				]
			},
			{
				title: 'Midday, governance and gates',
				duration: '1.5 h',
				items: [
					'Human oversight: who approves AI-assisted customer-facing output',
					'Quality bars: evals, red-teaming, regression when models or prompts change',
					'Compliance and audit: traceability across prompts, tools, and releases',
					'Vendor vs. build: boundaries and data handling'
				]
			},
			{
				title: 'Afternoon, design the target model',
				duration: '2 h',
				items: [
					'Working groups by phase: desired future state in 12–18 months',
					'RACI refresh: product, engineering, design, legal, risk, support',
					'Metrics: leading indicators for adoption and incident rates',
					'Draft one-page operating model per team (template-guided)'
				]
			},
			{
				title: 'Close, playback and next steps',
				duration: '30 min',
				items: [
					'Playback summaries; challenge and refine assumptions',
					'Prioritised follow-ups: policy, hiring, tooling, or coaching'
				]
			}
		],
		formatNotes: [
			'Full day; senior stakeholders; pre-read optional on current product operating model.',
			'Outputs are drafts for internal discussion, not final policy.'
		]
	}
];

export const workshopsBySite: Record<SiteId, Workshop[]> = {
	sme,
	prodeng
};

export function getWorkshop(site: SiteId, slug: string): Workshop | undefined {
	return workshopsBySite[site]?.find((w) => w.slug === slug);
}

export function listWorkshops(site: SiteId): Workshop[] {
	return workshopsBySite[site] ?? [];
}
