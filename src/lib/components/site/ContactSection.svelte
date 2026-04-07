<script lang="ts">
	type Accent = 'cyan' | 'amber';

	let {
		accent = 'cyan'
	}: {
		accent?: Accent;
	} = $props();

	const shell = $derived(
		accent === 'amber'
			? 'border-amber-500/25 bg-linear-to-br from-amber-500/10 via-[var(--color-surface-2)] to-violet-500/10'
			: 'border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-[var(--color-surface-2)] to-violet-500/10'
	);
	const glow = $derived(accent === 'amber' ? 'bg-amber-400/15' : 'bg-cyan-400/20');
	const focus = $derived(
		accent === 'amber'
			? 'focus:border-amber-500/50 focus:ring-amber-400/20'
			: 'focus:border-cyan-500/50 focus:ring-cyan-400/20'
	);
	const btnPrimary = $derived(
		accent === 'amber'
			? 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
			: 'bg-white text-zinc-950 hover:bg-zinc-100'
	);

	const formspreeAction = 'https://formspree.io/f/xdalawzp';
</script>

<section id="contact" class="scroll-mt-24 pb-24">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<div class="relative overflow-hidden rounded-3xl border p-10 sm:p-12 {shell}">
			<div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full {glow} blur-3xl"></div>
			<h2 class="relative font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-3xl">
				Get in touch
			</h2>
			<p class="relative mt-3 text-zinc-400">
				Tell me what you’re trying to achieve and what’s getting in the way. I’ll reply with the most sensible next step
				(and whether an assessment, a pilot, or a workshop is the right fit).
			</p>

			<form
				method="POST"
				action={formspreeAction}
				class="relative mt-8 space-y-5"
			>
				<div class="grid gap-5 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="cn-name" class="text-sm font-medium text-zinc-300">Name</label>
						<input
							id="cn-name"
							name="name"
							type="text"
							autocomplete="name"
							required
							maxlength="200"
							class="w-full rounded-xl border border-white/10 bg-[var(--color-surface-0)]/80 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition {focus} focus:ring-2"
							placeholder="Your name"
						/>
					</div>
					<div class="space-y-2">
						<label for="cn-email" class="text-sm font-medium text-zinc-300">Work email</label>
						<input
							id="cn-email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="w-full rounded-xl border border-white/10 bg-[var(--color-surface-0)]/80 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition {focus} focus:ring-2"
							placeholder="you@company.com"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="cn-company" class="text-sm font-medium text-zinc-300"
						>Company <span class="font-normal text-zinc-600">(optional)</span></label
					>
					<input
						id="cn-company"
						name="company"
						type="text"
						autocomplete="organization"
						maxlength="200"
						class="w-full rounded-xl border border-white/10 bg-[var(--color-surface-0)]/80 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition {focus} focus:ring-2"
						placeholder="Organisation name"
					/>
				</div>
				<div class="space-y-2">
					<label for="cn-message" class="text-sm font-medium text-zinc-300">Context &amp; details</label>
					<textarea
						id="cn-message"
						name="message"
						rows="5"
						required
						minlength="10"
						maxlength="10000"
						class="w-full resize-y rounded-xl border border-white/10 bg-[var(--color-surface-0)]/80 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition {focus} focus:ring-2"
						placeholder="Problem, team size, outcome you want, timing…"
					></textarea>
				</div>
				<div class="flex flex-wrap items-center gap-4 pt-2">
					<button
						type="submit"
						class="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition {btnPrimary}"
					>
						Get in Touch
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
