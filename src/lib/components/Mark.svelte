<script lang="ts">
	/**
	 * The site mark: a 3×3 electrode grid with the dots that spell a "Y" lit.
	 * With `morph`, hovering the surrounding `.group` rotates the grid 90°
	 * anticlockwise while the dots re-light as a "D", so the two changes read
	 * as one movement. The D pattern is stored pre-rotated so it ends upright.
	 */
	interface Props {
		size?: number;
		class?: string;
		morph?: boolean;
	}
	let { size = 22, class: className = '', morph = false }: Props = $props();

	const Y = new Set(['0,0', '2,0', '1,1', '1,2']);
	// rotate_ccw(D_pre) === D, where D = left column + (1,0), (1,2), (2,1)
	const D_PRE = new Set(['0,0', '1,0', '2,0', '0,1', '2,1', '1,2']);
</script>

<svg
	class="mark {className} {morph ? 'morph' : ''}"
	width={size}
	height={size}
	viewBox="0 0 30 30"
	aria-hidden="true"
	focusable="false"
>
	{#each [0, 1, 2] as y}
		{#each [0, 1, 2] as x}
			<circle
				class="dot {Y.has(`${x},${y}`) ? 'y' : ''} {D_PRE.has(`${x},${y}`) ? 'd' : ''}"
				cx={5 + x * 10}
				cy={5 + y * 10}
				r="3.4"
			/>
		{/each}
	{/each}
</svg>

<style>
	.dot {
		fill: var(--dot);
		transition: fill 320ms ease;
	}
	.dot.y {
		fill: var(--accent);
	}
	.morph {
		transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
	}
	:global(.group:hover) .morph,
	:global(.group:focus-visible) .morph {
		transform: rotate(-90deg);
	}
	:global(.group:hover) .morph .dot,
	:global(.group:focus-visible) .morph .dot {
		fill: var(--dot);
	}
	:global(.group:hover) .morph .dot.d,
	:global(.group:focus-visible) .morph .dot.d {
		fill: var(--accent);
	}
</style>
