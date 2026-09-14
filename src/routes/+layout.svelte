<script lang="ts">
	import '@fontsource-variable/fraunces/opsz.css';
	import '@fontsource-variable/fraunces/opsz-italic.css';
	import '@fontsource-variable/instrument-sans';
	import '@fontsource-variable/instrument-sans/wght-italic.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import '../app.css';

	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { personSchema, websiteSchema, BASE_URL } from '$lib/utils/seo';

	let { children } = $props();

	// Cross-fade between pages with the View Transitions API where available.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const PAGE_LABELS: Record<string, string> = {
		about: 'About',
		research: 'Research',
		publications: 'Publications',
		teaching: 'Teaching',
		contact: 'Contact',
		card: 'Card'
	};

	const breadcrumbSchema = $derived.by(() => {
		const pathname = page.url.pathname;
		const items: object[] = [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }];
		if (pathname !== '/') {
			const segment = pathname.replace(/^\//, '').split('/')[0];
			const label = PAGE_LABELS[segment] ?? segment;
			items.push({ '@type': 'ListItem', position: 2, name: label, item: `${BASE_URL}${pathname}` });
		}
		return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
	});

	const isCard = $derived(page.url.pathname === '/card');
</script>

<svelte:head>
	<meta name="author" content="Yihao Dong" />
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
>
	Skip to main content
</a>

<div class="flex min-h-screen flex-col">
	{#if !isCard}
		<Header />
	{/if}
	<main id="main-content" class="flex-grow">
		{@render children?.()}
	</main>
	{#if !isCard}
		<Footer />
	{/if}
</div>
