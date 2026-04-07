<!-- PDLC agent / human workflow diagram -->
<div
	class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
	role="img"
	aria-label="PDLC agent and human workflow across five phases: Ideation, Discovery, Delivery, Launch, and Measure"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:14px_14px]"
	></div>
	<div class="relative px-2 py-5 sm:px-4 sm:py-6">
		<p class="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
			Agent &amp; human workflow · PDLC
		</p>
		<div class="overflow-x-auto pb-1">
			<svg
				class="mx-auto h-auto min-w-[700px] sm:min-w-0"
				viewBox="0 0 1100 284"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<defs>
					<filter id="pdlc-shadow" x="-10%" y="-10%" width="120%" height="120%">
						<feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000" flood-opacity="0.5" />
					</filter>
					<!-- Arrowhead for horizontal phase-flow lines -->
					<marker id="pdlc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
						<path d="M 0 1 L 9 5 L 0 9 z" fill="#3f3f46" />
					</marker>
					<!-- Arrowhead for vertical handoff lines -->
					<marker id="pdlc-hand" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
						<path d="M 0 1 L 9 5 L 0 9 z" fill="#52525b" />
					</marker>
					<!-- Arrowhead for feedback loop -->
					<marker id="pdlc-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
						<path d="M 0 1 L 9 5 L 0 9 z" fill="#52525b" />
					</marker>
				</defs>

				<!-- Lane backgrounds -->
				<rect x="55" y="22" width="1040" height="96" rx="6" fill="rgb(251 191 36 / 0.025)" />
				<rect x="55" y="162" width="1040" height="98" rx="6" fill="rgb(139 92 246 / 0.025)" />

				<!-- Lane divider -->
				<line x1="55" y1="158" x2="1095" y2="158" stroke="#27272a" stroke-width="1" />

				<!-- Lane labels -->
				<text x="10" y="72" fill="#d97706" font-size="8" font-family="system-ui, sans-serif" font-weight="700" letter-spacing="2">HUMAN</text>
				<text x="10" y="210" fill="#7c3aed" font-size="8" font-family="system-ui, sans-serif" font-weight="700" letter-spacing="2">AGENT</text>

				<!-- Phase column headers -->
				<text x="150" y="19" text-anchor="middle" fill="#71717a" font-size="9" font-family="system-ui, sans-serif" font-weight="600" letter-spacing="1.5">IDEATION</text>
				<text x="360" y="19" text-anchor="middle" fill="#71717a" font-size="9" font-family="system-ui, sans-serif" font-weight="600" letter-spacing="1.5">DISCOVERY</text>
				<text x="570" y="19" text-anchor="middle" fill="#71717a" font-size="9" font-family="system-ui, sans-serif" font-weight="600" letter-spacing="1.5">DELIVERY</text>
				<text x="780" y="19" text-anchor="middle" fill="#71717a" font-size="9" font-family="system-ui, sans-serif" font-weight="600" letter-spacing="1.5">LAUNCH</text>
				<text x="990" y="19" text-anchor="middle" fill="#71717a" font-size="9" font-family="system-ui, sans-serif" font-weight="600" letter-spacing="1.5">MEASURE</text>

				<!-- ═══ HUMAN NODES (y=38, h=62) ═══ -->

				<!-- Ideation -->
				<g filter="url(#pdlc-shadow)">
					<rect x="60" y="30" width="180" height="78" rx="9" fill="#1c1917" stroke="#44403c" />
					<rect x="60" y="30" width="5" height="78" rx="2" fill="#d97706" />
					<text x="75" y="50" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Frame problem &amp; bets</text>
					<text x="75" y="65" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Constraints · hypothesis</text>
					<text x="75" y="79" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Sponsor &amp; funding decision</text>
				</g>

				<!-- Discovery -->
				<g filter="url(#pdlc-shadow)">
					<rect x="270" y="30" width="180" height="78" rx="9" fill="#1c1917" stroke="#44403c" />
					<rect x="270" y="30" width="5" height="78" rx="2" fill="#d97706" />
					<text x="285" y="50" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Scope, validate &amp; decide</text>
					<text x="285" y="65" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Prioritise &amp; define done</text>
					<text x="285" y="79" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Acceptance criteria sign-off</text>
				</g>

				<!-- Delivery -->
				<g filter="url(#pdlc-shadow)">
					<rect x="480" y="30" width="180" height="78" rx="9" fill="#1c1917" stroke="#44403c" />
					<rect x="480" y="30" width="5" height="78" rx="2" fill="#d97706" />
					<text x="495" y="50" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Architecture &amp; PR review</text>
					<text x="495" y="65" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Merge gates · security call</text>
					<text x="495" y="79" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Increment sign-off</text>
				</g>

				<!-- Launch -->
				<g filter="url(#pdlc-shadow)">
					<rect x="690" y="30" width="180" height="78" rx="9" fill="#1c1917" stroke="#44403c" />
					<rect x="690" y="30" width="5" height="78" rx="2" fill="#d97706" />
					<text x="705" y="50" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Go / no-go</text>
					<text x="705" y="65" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Comms, docs &amp; runbook</text>
					<text x="705" y="79" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Enablement &amp; support ready</text>
				</g>

				<!-- Measure -->
				<g filter="url(#pdlc-shadow)">
					<rect x="900" y="30" width="180" height="78" rx="9" fill="#1c1917" stroke="#44403c" />
					<rect x="900" y="30" width="5" height="78" rx="2" fill="#d97706" />
					<text x="915" y="50" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Interpret outcomes</text>
					<text x="915" y="65" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Prioritise &amp; feed back</text>
					<text x="915" y="79" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Retro · model update</text>
				</g>

				<!-- ═══ AGENT NODES (y=178, h=78) ═══ -->

				<!-- Ideation -->
				<g filter="url(#pdlc-shadow)">
					<rect x="60" y="170" width="180" height="78" rx="9" fill="#18181b" stroke="#3f3f46" />
					<rect x="60" y="170" width="5" height="78" rx="2" fill="#7c3aed" />
					<text x="75" y="190" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Market &amp; trend research</text>
					<text x="75" y="205" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Competitor &amp; prior art scan</text>
					<text x="75" y="219" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Pattern synthesis</text>
				</g>

				<!-- Discovery -->
				<g filter="url(#pdlc-shadow)">
					<rect x="270" y="170" width="180" height="78" rx="9" fill="#18181b" stroke="#3f3f46" />
					<rect x="270" y="170" width="5" height="78" rx="2" fill="#7c3aed" />
					<text x="285" y="190" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Interview &amp; data synthesis</text>
					<text x="285" y="205" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Requirements drafting</text>
					<text x="285" y="219" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Spec &amp; test case generation</text>
				</g>

				<!-- Delivery -->
				<g filter="url(#pdlc-shadow)">
					<rect x="480" y="170" width="180" height="78" rx="9" fill="#18181b" stroke="#3f3f46" />
					<rect x="480" y="170" width="5" height="78" rx="2" fill="#7c3aed" />
					<text x="495" y="190" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Code gen · test gen · CI</text>
					<text x="495" y="205" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Lint, deps &amp; security scans</text>
					<text x="495" y="219" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">PR summary · review assist</text>
				</g>

				<!-- Launch -->
				<g filter="url(#pdlc-shadow)">
					<rect x="690" y="170" width="180" height="78" rx="9" fill="#18181b" stroke="#3f3f46" />
					<rect x="690" y="170" width="5" height="78" rx="2" fill="#7c3aed" />
					<text x="705" y="190" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Deploy &amp; smoke tests</text>
					<text x="705" y="205" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Release notes &amp; checks</text>
					<text x="705" y="219" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Feature flag automation</text>
				</g>

				<!-- Measure -->
				<g filter="url(#pdlc-shadow)">
					<rect x="900" y="170" width="180" height="78" rx="9" fill="#18181b" stroke="#3f3f46" />
					<rect x="900" y="170" width="5" height="78" rx="2" fill="#7c3aed" />
					<text x="915" y="190" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">Telemetry &amp; anomaly detect</text>
					<text x="915" y="205" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Alerts · drift detection</text>
					<text x="915" y="219" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">Report &amp; eval generation</text>
				</g>

				<!-- ═══ HORIZONTAL PHASE-FLOW LINES ═══ -->
				<!-- Human lane (y=69) -->
				<path d="M 242 69 L 268 69" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 452 69 L 478 69" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 662 69 L 688 69" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 872 69 L 898 69" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<!-- Agent lane (y=209) -->
				<path d="M 242 209 L 268 209" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 452 209 L 478 209" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 662 209 L 688 209" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />
				<path d="M 872 209 L 898 209" stroke="#3f3f46" stroke-width="1.5" marker-end="url(#pdlc-flow)" />

				<!-- ═══ VERTICAL HANDOFF ARROWS ═══ -->
				<!-- Ideation: Human → Agent -->
				<path d="M 150 109 L 150 168" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />

				<!-- Discovery: Agent → Human -->
				<path d="M 360 168 L 360 109" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />

				<!-- Delivery: bidirectional (iterative loop) -->
				<path d="M 564 109 L 564 168" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />
				<path d="M 576 168 L 576 109" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />

				<!-- Launch: Agent → Human -->
				<path d="M 780 168 L 780 109" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />

				<!-- Measure: Agent → Human -->
				<path d="M 990 168 L 990 109" stroke="#71717a" stroke-width="1.5" marker-end="url(#pdlc-hand)" />

				<!-- ═══ FEEDBACK LOOP (Measure → Ideation) ═══ -->
				<path
					d="M 990 250 C 990 268 150 268 150 250"
					stroke="#3f3f46"
					stroke-width="1.5"
					stroke-dasharray="5 4"
					stroke-linecap="round"
					marker-end="url(#pdlc-loop)"
				/>
				<text x="570" y="272" text-anchor="middle" fill="#52525b" font-size="8.5" font-family="system-ui, sans-serif" letter-spacing="0.5">learning loop</text>
			</svg>
		</div>

		<!-- Legend -->
		<div class="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
			<span class="flex items-center gap-2 text-[10px] font-medium text-zinc-500">
				<span class="h-2.5 w-2.5 rounded-sm bg-amber-600/70"></span>
				Human, intent, judgement &amp; gates
			</span>
			<span class="flex items-center gap-2 text-[10px] font-medium text-zinc-500">
				<span class="h-2.5 w-2.5 rounded-sm bg-violet-600/70"></span>
				Agent, research, generation &amp; automation
			</span>
			<span class="flex items-center gap-2 text-[10px] font-medium text-zinc-500">
				<span class="block h-px w-5 border-t border-dashed border-zinc-600"></span>
				Learning loop
			</span>
		</div>
		<p class="mt-2 text-center text-[10px] text-zinc-600">
			Illustrative, activities vary by context and toolchain.
		</p>
	</div>
</div>
