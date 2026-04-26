export type Build = {
	slug: string;
	tag: 'Tool' | 'Client build';
	title: string;
	desc: string;
	/** One-line hero subheading */
	subheading: string;
	chips: string[];
	sections: BuildSection[];
	quote?: {
		text: string;
		author: string;
		role: string;
	};
	/** Optional external link (client builds that live elsewhere) */
	externalHref?: string;
	externalLabel?: string;
	cta: {
		heading: string;
		body: string;
		primary: { label: string; href: string };
		secondary?: { label: string; href: string };
	};
};

export type BuildSection = {
	label?: string;
	heading: string;
	body?: string;
	items?: { title: string; desc: string }[];
};

export const builds: Build[] = [
	{
		slug: 'ai-accelerator-product-teams',
		tag: 'Tool',
		title: 'AI Accelerator for Product Teams',
		subheading:
			'Not a generic AI layer. A model built around how product, design, and engineering actually work — and where they slow each other down.',
		desc: 'Practical AI tools for discovery, planning, execution, and iteration, built from repeated bottlenecks seen in real teams. Fast individuals, slow overall performance. The Accelerator helps teams start changing that immediately.',
		chips: ['Discovery & research', 'Roadmaps & backlogs', 'Delivery & iteration'],
		sections: [
			{
				label: 'What it does',
				heading: 'Four ways the Accelerator improves your lifecycle',
				items: [
					{
						title: 'AI product coaching',
						desc: 'AI agents that guide your team through discovery, planning, and delivery — asking the right questions at each phase instead of waiting for a consultant to do it.'
					},
					{
						title: 'Connected delivery data',
						desc: 'Analytics, delivery tools, and customer insight brought into a single feedback loop — so insight from users actually reaches the team building the next sprint.'
					},
					{
						title: 'Handoff compression',
						desc: 'Agents that replace the slow handoffs between roles — between research and spec, spec and design, design and build. The delays that currently live in your calendar.'
					},
					{
						title: 'Flexible deployment',
						desc: 'Run as SaaS, self-hosted in your own environment, or embedded into the tools your team already uses — Copilot, Slack, Notion, Linear.'
					}
				]
			}
		],
		cta: {
			heading: 'Ready for the next level?',
			body: 'Starting with an assessment — mapping how your product, design, and engineering roles work today and where the handoffs are costing you. Then the Accelerator is introduced into one team and the difference measured.',
			primary: { label: 'Start with an assessment', href: '/#contact' },
			secondary: { label: 'Get in touch', href: '/#contact' }
		}
	},
	{
		slug: 'edge-accelerator',
		tag: 'Client build',
		title: 'The Edge Accelerator',
		subheading:
			'An AI-powered platform shaped end-to-end — from concept and architecture through to iterative development and launch.',
		desc: 'An AI-powered platform shaped end-to-end, from concept and architecture through to iterative development and launch. Helps businesses spot and act on growth opportunities, built with AI-native workflows from the ground up.',
		chips: [],
		sections: [
			{
				label: 'The engagement',
				heading: 'From concept to shipping product',
				body: 'The Edge Accelerator needed more than advice — it needed a product and technical partner who could shape architecture, drive iterative delivery, and embed AI-native thinking at every layer. agentnative worked end-to-end: from early concept and system design through to build, iteration, and launch-ready software.'
			},
			{
				label: 'How it was built',
				heading: 'AI-native from the ground up',
				items: [
					{
						title: 'Concept and architecture',
						desc: 'Early-stage scoping and technical design that kept the product flexible and the build pragmatic — avoiding the common trap of over-engineering before validation.'
					},
					{
						title: 'Iterative development',
						desc: 'Working software shipped in increments, with the founder in the loop on every decision that mattered. No black-box delivery, no handoff surprises.'
					},
					{
						title: 'AI-native workflows',
						desc: 'Growth opportunity detection and analysis built with agentic pipelines from day one — not retrofitted onto a classical product after the fact.'
					},
					{
						title: 'Launch readiness',
						desc: 'From working MVP through to a platform ready for real users — with the operational and technical foundations to support what comes next.'
					}
				]
			}
		],
		quote: {
			text: '"agentnative co. have been instrumental in shaping our EdgeAccelerator product, advising us throughout the process and helping us iteratively build and refine our AI platform."',
			author: 'Joel Davis',
			role: 'Founder, Edge Accelerator · Deloitte Fast 500 winner'
		},
		externalHref: 'https://theedgeaccelerator.co',
		externalLabel: 'Visit The Edge Accelerator',
		cta: {
			heading: 'Want to build something like this?',
			body: 'Whether you have a concept to pressure-test or a half-built product that needs reshaping, the starting point is a conversation.',
			primary: { label: 'Get in touch', href: '/#contact' },
			secondary: { label: 'See MVP build service', href: '/services/prodeng/mvp-build' }
		}
	}
];

export function getBuild(slug: string): Build | undefined {
	return builds.find((b) => b.slug === slug);
}
