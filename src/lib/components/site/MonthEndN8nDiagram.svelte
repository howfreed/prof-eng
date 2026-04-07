<!-- Illustrative automation canvas (n8n-like): nodes, ports, curved edges -->
<div
	class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1117] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
	role="img"
	aria-label="Example month-end workflow: trigger, ledger pull, reconcile, AI commentary, finance review and published pack, with an exception branch"
>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:14px_14px]"
	></div>
	<div class="relative px-2 py-4 sm:px-4 sm:py-5">
		<p class="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
			Example orchestration · month-end close
		</p>
		<div class="overflow-x-auto pb-1">
			<svg
				class="mx-auto h-auto min-w-[640px] sm:min-w-0"
				viewBox="0 0 1000 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<defs>
					<filter id="n8n-node-shadow" x="-10%" y="-10%" width="120%" height="120%">
						<feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000" flood-opacity="0.45" />
					</filter>
				</defs>

				<!-- Main horizontal edges -->
				<path
					d="M 160 78 C 172 78 176 78 188 78"
					stroke="#71717a"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M 340 78 C 352 78 356 78 368 78"
					stroke="#71717a"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M 520 78 C 532 78 536 78 548 78"
					stroke="#71717a"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M 700 78 C 712 78 716 78 728 78"
					stroke="#71717a"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M 880 78 C 892 78 896 78 908 78"
					stroke="#71717a"
					stroke-width="2"
					stroke-linecap="round"
				/>

				<!-- Dashed branch: bottom of Reconcile → exception queue -->
				<path
					d="M 444 110 C 444 128 432 150 420 158"
					stroke="#52525b"
					stroke-width="1.5"
					stroke-dasharray="4 4"
					stroke-linecap="round"
					fill="none"
				/>

				<!-- Wire port markers (main line) -->
				<circle cx="160" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="188" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="340" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="368" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="520" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="548" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="700" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="728" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="880" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="908" cy="78" r="3.5" fill="#18181b" stroke="#71717a" stroke-width="1.5" />
				<circle cx="444" cy="110" r="2.5" fill="#18181b" stroke="#71717a" stroke-width="1.2" />

				<!-- 1 Trigger -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="8" y="46" width="152" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="8" y="46" width="5" height="64" rx="2" fill="#ea580c" />
					<circle cx="34" cy="78" r="14" fill="#27272a" stroke="#52525b" />
					<path
						d="M34 71v9l5.5 3.5"
						stroke="#fb923c"
						stroke-width="1.6"
						stroke-linecap="round"
						fill="none"
					/>
					<text x="54" y="73" fill="#fafafa" font-size="11" font-family="system-ui, sans-serif" font-weight="600">
						Schedule Trigger
					</text>
					<text x="54" y="89" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						Cron · month-end
					</text>
				</g>

				<!-- 2 Ledger -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="188" y="46" width="152" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="188" y="46" width="5" height="64" rx="2" fill="#2563eb" />
					<rect x="214" y="66" width="24" height="24" rx="5" fill="#1e3a8a" stroke="#3b82f6" />
					<text x="220" y="82" fill="#93c5fd" font-size="11" font-family="system-ui">▤</text>
					<text x="246" y="73" fill="#fafafa" font-size="11" font-family="system-ui, sans-serif" font-weight="600">
						Ledger pull
					</text>
					<text x="246" y="89" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						Balances &amp; journals
					</text>
				</g>

				<!-- 3 Reconcile (extra output downward for branch) -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="368" y="46" width="152" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="368" y="46" width="5" height="64" rx="2" fill="#ca8a04" />
					<rect x="394" y="66" width="24" height="24" rx="5" fill="#422006" stroke="#eab308" />
					<text x="402" y="82" fill="#fde047" font-size="10" font-family="ui-monospace, monospace"
						>{'{ }'}</text
					>
					<text x="426" y="73" fill="#fafafa" font-size="11" font-family="system-ui, sans-serif" font-weight="600">
						Reconcile &amp; flag
					</text>
					<text x="426" y="89" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						Variances · rules
					</text>
				</g>

				<!-- 4 AI -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="548" y="46" width="152" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="548" y="46" width="5" height="64" rx="2" fill="#7c3aed" />
					<rect x="574" y="66" width="24" height="24" rx="5" fill="#3b0764" stroke="#a78bfa" />
					<text x="580" y="82" fill="#c4b5fd" font-size="11" font-family="system-ui">✦</text>
					<text x="606" y="73" fill="#fafafa" font-size="11" font-family="system-ui, sans-serif" font-weight="600">
						AI: commentary
					</text>
					<text x="606" y="89" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						First-pass narrative
					</text>
				</g>

				<!-- 5 Finance -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="728" y="46" width="152" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="728" y="46" width="5" height="64" rx="2" fill="#db2777" />
					<rect x="754" y="66" width="24" height="24" rx="5" fill="#500724" stroke="#f472b6" />
					<text x="762" y="82" fill="#fbcfe8" font-size="11" font-family="system-ui">✓</text>
					<text x="786" y="73" fill="#fafafa" font-size="11" font-family="system-ui, sans-serif" font-weight="600">
						Finance review
					</text>
					<text x="786" y="89" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						Judgement · sign-off
					</text>
				</g>

				<!-- 6 Publish (green) -->
				<g filter="url(#n8n-node-shadow)">
					<rect x="908" y="46" width="84" height="64" rx="10" fill="#18181b" stroke="#3f3f46" />
					<rect x="908" y="46" width="5" height="64" rx="2" fill="#059669" />
					<text x="922" y="76" fill="#fafafa" font-size="10.5" font-family="system-ui, sans-serif" font-weight="600">
						Review pack
					</text>
					<text x="922" y="92" fill="#a1a1aa" font-size="9" font-family="system-ui, sans-serif">
						Leadership
					</text>
				</g>

				<!-- Exception branch node -->
				<g opacity="0.92" filter="url(#n8n-node-shadow)">
					<rect x="344" y="158" width="152" height="36" rx="8" fill="#18181b" stroke="#52525b" stroke-dasharray="3 2" />
					<rect x="344" y="158" width="4" height="36" rx="2" fill="#64748b" />
					<text x="356" y="180" fill="#d4d4d8" font-size="10" font-family="system-ui, sans-serif" font-weight="600">
						Exception queue
					</text>
				</g>
			</svg>
		</div>
		<p class="mt-1 text-center text-[10px] text-zinc-600 sm:text-xs">
			Illustrative canvas, inspired by workflow tools; not affiliated with any vendor.
		</p>
	</div>
</div>
