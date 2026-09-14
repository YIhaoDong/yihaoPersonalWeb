<script lang="ts">
	import { toBraille } from '$lib/utils/braille';

	interface Props {
		text: string;
		/** dot diameter in px */
		size?: number;
		class?: string;
		/** If true, filled dots use the accent colour */
		accent?: boolean;
	}

	let { text, size = 5, class: className = '', accent = true }: Props = $props();

	const cells = $derived(toBraille(text));
	const gap = $derived(size * 0.9);
	const cellW = $derived(size * 2 + gap);
	const cellH = $derived(size * 3 + gap * 2);
	const cellGap = $derived(size * 1.6);
	const width = $derived(cells.length * cellW + (cells.length - 1) * cellGap);
</script>

<svg
	class={className}
	width={width}
	height={cellH}
	viewBox="0 0 {width} {cellH}"
	role="img"
	aria-label="“{text}” written in Braille"
>
	{#each cells as c, i}
		{@const x0 = i * (cellW + cellGap)}
		{#each c.dots as on, d}
			{@const col = d < 3 ? 0 : 1}
			{@const row = d % 3}
			<circle
				cx={x0 + size / 2 + col * (size + gap)}
				cy={size / 2 + row * (size + gap)}
				r={size / 2}
				fill={on ? (accent ? 'var(--accent)' : 'currentColor') : 'var(--dot)'}
			/>
		{/each}
	{/each}
</svg>
