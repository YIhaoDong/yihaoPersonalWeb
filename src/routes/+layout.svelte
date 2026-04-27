<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { personSchema, websiteSchema, BASE_URL } from '$lib/utils/seo';
	import { page } from '$app/state';

	let { children } = $props();

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
		const items: object[] = [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }
		];
		if (pathname !== '/') {
			const segment = pathname.replace(/^\//, '').split('/')[0];
			const label = PAGE_LABELS[segment] ?? segment;
			items.push({ '@type': 'ListItem', position: 2, name: label, item: `${BASE_URL}${pathname}` });
		}
		return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Yihao Dong" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<Footer />
</div>
