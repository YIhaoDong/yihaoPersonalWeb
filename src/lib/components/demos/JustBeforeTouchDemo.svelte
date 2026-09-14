<script lang="ts">
	/**
	 * Interactive sketch of "Just Before Touch": a vibrotactile cue fired a
	 * short moment *before* visual contact changes how the contact feels.
	 * Drag the lead time, pick an envelope, press play. On phones that
	 * support it the cue is a real vibration pulse.
	 */
	import { onDestroy } from 'svelte';
	import { pulse } from '$lib/utils/haptics';

	type Profile = 'decreasing' | 'flat' | 'increasing';

	let lead = $state(100); // ms before contact
	let profile = $state<Profile>('decreasing');
	let t = $state(0); // virtual time in ms, 0..TOTAL
	let playing = $state(false);
	let cued = $state(false);

	const TOTAL = 800;
	const CONTACT = 600;
	const SPEED = 0.55; // virtual ms per real ms (slowed for legibility)

	const cueAt = $derived(CONTACT - lead);
	const progress = $derived(Math.min(t, CONTACT) / CONTACT);
	const cueActive = $derived(t >= cueAt && t < cueAt + 140);
	const contacted = $derived(t >= CONTACT);

	// Illustrative only: longer lead + decreasing envelope → reads softer.
	const softness = $derived.by(() => {
		const base = Math.min(1, lead / 150);
		const k = profile === 'decreasing' ? 1 : profile === 'flat' ? 0.6 : 0.3;
		return base * k;
	});
	const softLabel = $derived(softness > 0.62 ? 'softer' : softness > 0.3 ? 'in between' : 'firmer');

	let raf = 0;
	let last = 0;
	let timer: ReturnType<typeof setTimeout> | undefined;

	function stop() {
		if (raf) cancelAnimationFrame(raf);
		raf = 0;
		if (timer) clearTimeout(timer);
		timer = undefined;
		playing = false;
	}

	function play() {
		stop();
		t = 0;
		cued = false;
		playing = true;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduce) {
			// Three discrete states instead of continuous motion.
			t = Math.max(0, cueAt - 200);
			timer = setTimeout(() => {
				t = cueAt + 10;
				pulse(20);
				timer = setTimeout(() => {
					t = TOTAL;
					playing = false;
				}, 900);
			}, 700);
			return;
		}

		last = performance.now();
		const step = (now: number) => {
			const dt = (now - last) * SPEED;
			last = now;
			t = Math.min(TOTAL, t + dt);
			if (!cued && t >= cueAt) {
				cued = true;
				pulse(20);
			}
			if (t < TOTAL) raf = requestAnimationFrame(step);
			else playing = false;
		};
		raf = requestAnimationFrame(step);
	}

	onDestroy(stop);

	// Scene geometry
	const X0 = 70;
	const X1 = 400;
	const handX = $derived(X0 + (X1 - X0) * progress);
	const timelineX = (ms: number) => 70 + (ms / TOTAL) * 460;

	const envelope: Record<Profile, string> = {
		decreasing: 'M0 6 L4 2 L36 22 L60 22',
		flat: 'M0 22 L4 8 L48 8 L52 22 L60 22',
		increasing: 'M0 22 L36 6 L40 2 L44 22 L60 22'
	};
</script>

<div class="border border-line bg-paper">
	<div class="p-5 sm:p-7">
		<svg viewBox="0 0 600 240" class="w-full" role="img" aria-label="A hand approaches a ball; a vibration cue fires {lead} milliseconds before contact.">
			<!-- ground line -->
			<path d="M40 150 H560" stroke="var(--line)" stroke-width="1.2" />

			<!-- ball -->
			<circle cx="440" cy="118" r="30" fill={contacted ? 'var(--accent)' : 'var(--paper-2)'} stroke="var(--ink)" stroke-width="1.6" style="transition: fill 120ms linear" />
			<text x="440" y="122" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="var(--ink-2)" letter-spacing="0.5">
				{contacted ? softLabel.toUpperCase() : 'TARGET'}
			</text>

			<!-- cue rings -->
			{#if cueActive}
				<g>
					<circle cx={handX} cy="118" r="34" fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.9" />
					<circle cx={handX} cy="118" r="46" fill="none" stroke="var(--accent)" stroke-width="1.5" opacity="0.5" />
					<circle cx={handX} cy="118" r="58" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.25" />
				</g>
			{/if}

			<!-- hand / controller -->
			<g transform="translate({handX} 118)">
				<rect x="-26" y="-14" width="42" height="28" rx="10" fill="var(--paper-2)" stroke="var(--ink)" stroke-width="1.6" />
				<circle cx="10" cy="0" r="3" fill="var(--ink)" />
				<path d="M-26 0 H-46" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" />
			</g>

			<!-- timeline -->
			<path d="M70 200 H530" stroke="var(--ink-2)" stroke-width="1.4" />
			<path d="M524 195 L530 200 L524 205" fill="none" stroke="var(--ink-2)" stroke-width="1.4" />
			<text x="536" y="204" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-3)">t</text>

			<!-- playhead -->
			<line x1={timelineX(t)} x2={timelineX(t)} y1="188" y2="212" stroke="var(--ink-3)" stroke-width="1" />

			<!-- cue tick -->
			<g transform="translate({timelineX(cueAt)} 200)">
				<line y1="-10" y2="10" stroke="var(--accent)" stroke-width="3" />
				<text y="-16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--accent-ink)" letter-spacing="0.5">HAPTIC</text>
			</g>
			<!-- contact tick -->
			<g transform="translate({timelineX(CONTACT)} 200)">
				<rect x="-3" y="-10" width="6" height="20" fill="var(--ink)" />
				<text y="-16" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-2)" letter-spacing="0.5">VISUAL</text>
			</g>
			<!-- lead bracket -->
			<path d="M{timelineX(cueAt)} 222 V228 H{timelineX(CONTACT)} V222" fill="none" stroke="var(--ink-3)" stroke-width="1" />
			<text x={(timelineX(cueAt) + timelineX(CONTACT)) / 2} y="238" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-3)">{lead} ms</text>

			<!-- envelope box -->
			<g transform="translate(60 30)">
				<rect x="-8" y="-8" width="76" height="40" rx="3" fill="none" stroke="var(--line)" />
				<path d={envelope[profile]} fill="none" stroke="var(--accent-ink)" stroke-width="1.8" stroke-linejoin="round" />
				<text x="76" y="14" font-family="IBM Plex Mono, monospace" font-size="9" fill="var(--ink-3)" letter-spacing="0.5">{profile.toUpperCase()} ENVELOPE</text>
			</g>
		</svg>
	</div>

	<div class="grid gap-6 border-t border-line p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-7">
		<div class="space-y-5">
			<div>
				<label for="jbt-lead" class="eyebrow mb-2 block">Cue lead time · {lead} ms before contact</label>
				<input id="jbt-lead" type="range" min="0" max="200" step="10" bind:value={lead} class="range w-full" aria-valuetext="{lead} milliseconds" />
			</div>
			<fieldset>
				<legend class="eyebrow mb-3">Vibration envelope</legend>
				<div class="flex flex-wrap gap-2">
					{#each ['decreasing', 'flat', 'increasing'] as p}
						<label
							class="chip inline-flex cursor-pointer select-none items-center rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper {profile === p ? '' : 'border-line text-ink-2 hover:border-ink-3'}"
						>
							<input type="radio" name="profile" value={p} bind:group={profile} class="sr-only" />
							{p}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>
		<button type="button" class="btn btn-solid justify-center" onclick={play} disabled={playing} aria-live="off">
			{playing ? 'Playing…' : 'Play the touch'}
		</button>
	</div>

	<p class="border-t border-line px-5 py-4 text-[0.9rem] text-ink-2 sm:px-7" aria-live="polite">
		{#if contacted}
			With a {lead} ms lead and a {profile} envelope, this contact reads as <strong class="text-ink">{softLabel}</strong>.
		{:else}
			Press play. The haptic cue fires {lead} ms before the hand visibly reaches the target.
		{/if}
		<span class="block pt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-3">Illustrative. Measured effects are in the paper.</span>
	</p>
</div>

<style>
	.range {
		appearance: none;
		height: 2px;
		background: var(--line);
		outline-offset: 6px;
	}
	.range::-webkit-slider-thumb {
		appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--accent);
		border: 2px solid var(--paper);
		box-shadow: 0 0 0 1px var(--ink);
		cursor: pointer;
	}
	.range::-moz-range-thumb {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--accent);
		border: 2px solid var(--paper);
		box-shadow: 0 0 0 1px var(--ink);
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.6;
		cursor: default;
	}
</style>
