<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
	}
	let { class: className = '' }: Props = $props();

	let now = $state('');

	onMount(() => {
		const fmt = new Intl.DateTimeFormat('en-AU', {
			timeZone: 'Australia/Sydney',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		});
		const tick = () => (now = fmt.format(new Date()));
		tick();
		const id = setInterval(tick, 1_000);
		return () => clearInterval(id);
	});
</script>

{#if now}
	<time class="tabular {className}" datetime={new Date().toISOString()}>{now}</time>
{/if}
