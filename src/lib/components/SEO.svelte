<script lang="ts">
	import { BASE_URL, SITE_NAME } from '$lib/utils/seo';

	interface Props {
		title: string;
		description: string;
		path: string;
		page?: string;
		type?: 'website' | 'article' | 'profile';
	}

	let { title, description, path, page, type = 'website' }: Props = $props();

	const canonical = `${BASE_URL}${path}`;
	const ogImage = `${BASE_URL}/og-image?page=${encodeURIComponent(page ?? 'Home')}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:site_name" content={SITE_NAME} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
