<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** Two-digit index shown in the eyebrow, e.g. "01" */
		index: string;
		label: string;
		title?: string;
		/** Optional trailing link or content on the right */
		aside?: Snippet;
		class?: string;
	}
	let { index, label, title, aside, class: className = '' }: Props = $props();
</script>

<div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-t border-line pt-4 {className}">
	<div>
		<p class="eyebrow"><span class="text-accent-ink">{index}</span> — {label}</p>
		{#if title}
			<h2 class="display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">{title}</h2>
		{/if}
	</div>
	{#if aside}
		<div class="pb-1">{@render aside()}</div>
	{/if}
</div>
