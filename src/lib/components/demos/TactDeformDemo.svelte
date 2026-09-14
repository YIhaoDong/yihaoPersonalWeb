<script lang="ts">
	/**
	 * Interactive sketch of the TactDeform idea: the pattern on a 6×6
	 * electro-tactile array changes with the geometry under the finger and
	 * with how far the finger has pressed in (or slid along).
	 */
	type Feature = 'face' | 'edge' | 'corner' | 'smooth' | 'rough' | 'rougher';

	const features: { id: Feature; label: string }[] = [
		{ id: 'face', label: 'Face' },
		{ id: 'edge', label: 'Edge' },
		{ id: 'corner', label: 'Corner' },
		{ id: 'smooth', label: 'Smooth' },
		{ id: 'rough', label: 'Rough' },
		{ id: 'rougher', label: 'Rougher' }
	];

	const captions: Record<Feature, { before: string; during: string }> = {
		face: {
			before: 'Approaching a face: nothing on the array until the fingertip arrives.',
			during: 'In contact with a face: the pattern starts at the centre and spreads outward as a ring, the way skin flattens against a flat surface.'
		},
		edge: {
			before: 'Approaching an edge: nothing on the array until the fingertip arrives.',
			during: 'In contact with an edge: a band that widens along the ridge as the finger presses in.'
		},
		corner: {
			before: 'Approaching a corner: nothing on the array until the fingertip arrives.',
			during: 'In contact with a corner: a small point, with only the diagonals joining under pressure.'
		},
		smooth: {
			before: '',
			during: 'Sliding on a smooth surface: a broad, even patch repeats every 2 mm of travel.'
		},
		rough: {
			before: '',
			during: 'Sliding on a rough surface: three stripe patterns step one column to the left every 2 mm, then loop.'
		},
		rougher: {
			before: '',
			during: 'Sliding on a rougher surface: wider stripes with wider gaps, stepping across the array every 2 mm.'
		}
	};

	let feature = $state<Feature>('edge');
	let amount = $state(0.55);

	const COLS = 6;
	const ROWS = 6;
	const PITCH = 20;
	/** The four corner electrodes are absent, as on the real array. */
	const isCorner = (c: number, r: number) => (c === 0 || c === COLS - 1) && (r === 0 || r === ROWS - 1);
	const isSlide = $derived(feature === 'smooth' || feature === 'rough' || feature === 'rougher');

	/** Fraction of the slider spent approaching before the fingertip touches. */
	const TOUCH_AT = 0.3;
	/** 0..1 pressure once in contact, or -1 while still approaching. */
	const press = $derived(isSlide ? 1 : amount < TOUCH_AT ? -1 : (amount - TOUCH_AT) / (1 - TOUCH_AT));
	const inContact = $derived(press >= 0);

	const eq = (a: number, b: number) => Math.abs(a - b) < 1e-6;

	/**
	 * Which electrodes are on for a given feature, transcribed from the pattern
	 * legend on the CHI ’26 poster. dx/dy are offsets from the array centre
	 * (±0.5, ±1.5, ±2.5). `p` is pressure for geometry, slide position for textures.
	 */
	function intensity(c: number, r: number, f: Feature, p: number, slide: number): number {
		const dx = c - (COLS - 1) / 2;
		const dy = r - (ROWS - 1) / 2;
		const cheb = Math.max(Math.abs(dx), Math.abs(dy));
		const man = Math.abs(dx) + Math.abs(dy);
		const centre = eq(cheb, 0.5);
		const innerRows = r >= 1 && r <= 4;

		switch (f) {
			case 'face': {
				if (p < 0) return 0;
				// Five frames: an expanding ring from the centre to the perimeter.
				const frame = Math.min(4, Math.floor(p * 5));
				const rings = [centre, eq(man, 2), eq(cheb, 1.5), eq(man, 3), eq(cheb, 2.5)];
				return rings[frame] ? 1 : 0;
			}
			case 'edge': {
				if (p < 0) return 0;
				// Three frames: a two-row band that widens 2 → 4 → 6 columns.
				const frame = Math.min(2, Math.floor(p * 3));
				return eq(Math.abs(dy), 0.5) && Math.abs(dx) <= 0.5 + frame + 1e-6 ? 1 : 0;
			}
			case 'corner': {
				if (p < 0) return 0;
				// Two frames: the centre block, then the centre plus four diagonals.
				const frame = Math.min(1, Math.floor(p * 2));
				if (centre) return 1;
				return frame === 1 && eq(Math.abs(dx), 1.5) && eq(Math.abs(dy), 1.5) ? 1 : 0;
			}
			case 'smooth': {
				// A solid 4×4 block that re-fires every 2 mm of travel.
				if (!(innerRows && c >= 1 && c <= 4)) return 0;
				const phase = (slide * 4) % 1;
				return 0.55 + 0.45 * (1 - phase);
			}
			case 'rough': {
				// Three stripe patterns, each one column further left, looping every 2 mm.
				if (!innerRows) return 0;
				const step = Math.floor(slide * 6) % 3;
				const on = [
					[2, 4, 5],
					[1, 3, 4],
					[0, 2, 3]
				][step];
				return on.includes(c) ? 1 : 0;
			}
			case 'rougher': {
				// Two-wide stripes with two-wide gaps, shifting one column left every 2 mm.
				if (!innerRows) return 0;
				const step = Math.floor(slide * 6) % 4;
				return (c + step) % 4 < 2 ? 1 : 0;
			}
		}
	}

	const grid = $derived(
		Array.from({ length: ROWS }, (_, r) =>
			Array.from({ length: COLS }, (_, c) => intensity(c, r, feature, press, amount))
		)
	);

	// Finger illustration geometry. The fingertip sits 25 units below the
	// finger origin, so it meets the surface exactly at TOUCH_AT.
	const surfaceY: Record<Feature, number> = { face: 120, edge: 100, corner: 100, smooth: 120, rough: 120, rougher: 120 };
	const fingerY = $derived.by(() => {
		if (isSlide) return 92;
		const restY = surfaceY[feature] - 25;
		if (amount < TOUCH_AT) return 20 + (amount / TOUCH_AT) * (restY - 20);
		return restY + press * 5;
	});
	const fingerX = $derived(isSlide ? 40 + amount * 120 : 100);

	const surfacePath: Record<Feature, string> = {
		face: 'M20 120 H180',
		edge: 'M20 140 L100 100 L180 140',
		corner: 'M40 150 L100 100 L160 150 M100 100 L100 150',
		smooth: 'M20 118 C 60 112, 80 126, 120 118 S 160 112, 180 120',
		rough: 'M20 122 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8 l10 -8 l10 8',
		rougher: 'M20 126 l20 -14 l20 14 l20 -14 l20 14 l20 -14 l20 14 l20 -14 l20 14'
	};

	function onSliderKey(e: KeyboardEvent) {
		// Let the native range handle arrows; add Home/End for convenience.
		if (e.key === 'Home') amount = 0;
		if (e.key === 'End') amount = 1;
	}
</script>

<div class="border border-line bg-paper">
	<div class="grid gap-8 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
		<!-- Scene -->
		<svg viewBox="0 0 200 170" class="mx-auto w-full max-w-[22rem]" role="img" aria-label="A finger over a {feature} surface">
			<path d={surfacePath[feature]} fill="none" stroke="var(--ink-2)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" />
			<!-- contact glow -->
			{#if inContact}
				<ellipse
					cx={fingerX}
					cy={isSlide ? 120 : surfaceY[feature]}
					rx={isSlide ? 8 : 4 + press * 10}
					ry={3}
					fill="var(--accent)"
					opacity={isSlide ? 0.7 : 0.35 + press * 0.55}
				/>
			{/if}
			<!-- finger -->
			<g style="transition: transform 90ms linear" transform="translate({fingerX} {fingerY})">
				<path
					d="M-11 -70 V 14 a11 11 0 0 0 22 0 V -70 Z"
					fill="var(--paper-2)"
					stroke="var(--ink)"
					stroke-width="1.6"
				/>
				<path d="M-6 -60 V 0" stroke="var(--line)" stroke-width="1.2" />
			</g>
			<!-- axis label -->
			<text x="20" y="164" font-family="IBM Plex Mono, monospace" font-size="7" fill="var(--ink-3)" letter-spacing="0.6">
				{isSlide ? 'SLIDING →' : inContact ? 'PRESSING ↓' : 'APPROACHING ↓'}
			</text>
		</svg>

		<!-- Electrode grid -->
		<figure class="mx-auto">
			<svg
				width={COLS * PITCH}
				height={ROWS * PITCH}
				viewBox="0 0 {COLS * PITCH} {ROWS * PITCH}"
				class="h-auto w-[132px] sm:w-[150px]"
				role="img"
				aria-label="Electrode array showing the {feature} pattern"
			>
				{#each grid as row, r}
					{#each row as v, c}
						{#if !isCorner(c, r)}
						<circle cx={c * PITCH + PITCH / 2} cy={r * PITCH + PITCH / 2} r="6" fill="var(--dot)" />
						<circle
							cx={c * PITCH + PITCH / 2}
							cy={r * PITCH + PITCH / 2}
							r={6 + v * 1.5}
							fill="var(--accent)"
							opacity={v}
							style="transition: opacity 120ms linear, r 120ms linear"
						/>
						{/if}
					{/each}
				{/each}
			</svg>
			<figcaption class="mt-3 text-center font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-ink-3">
				<span class="block">6 × 6 array</span>
				<span class="block">32 electrodes</span>
			</figcaption>
		</figure>
	</div>

	<!-- Controls -->
	<div class="border-t border-line p-5 sm:p-7">
		<fieldset>
			<legend class="eyebrow mb-3">Geometry under the finger</legend>
			<div class="flex flex-wrap gap-2">
				{#each features as f}
					<label
						class="cursor-pointer select-none rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper {feature === f.id ? '' : 'border-line text-ink-2 hover:border-ink-3'}"
					>
						<input type="radio" name="feature" value={f.id} bind:group={feature} class="sr-only" />
						{f.label}
					</label>
				{/each}
			</div>
		</fieldset>

		<div class="mt-5">
			<label for="td-amount" class="eyebrow mb-2 block">{isSlide ? 'Slide position' : inContact ? 'Finger pressure' : 'Finger approach'}</label>
			<input
				id="td-amount"
				type="range"
				min="0"
				max="1"
				step="0.01"
				bind:value={amount}
				onkeydown={onSliderKey}
				aria-valuetext="{Math.round(amount * 100)} percent"
				class="range w-full"
			/>
		</div>

		<p class="mt-4 text-[0.95rem] text-ink-2" aria-live="polite">{inContact ? captions[feature].during : captions[feature].before}</p>
	</div>
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
</style>
