<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import SEO from '$lib/components/SEO.svelte';
	import { publications, bibtex, type Publication } from '$lib/data/publications';
	import { site } from '$lib/site';
	import { BASE_URL } from '$lib/utils/seo';

	const publicationsSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Publications by Yihao Dong',
		url: `${BASE_URL}/publications`,
		itemListElement: publications.map((pub, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			item: {
				'@type': 'ScholarlyArticle',
				name: pub.title,
				author: pub.authors.split(', ').map((a) => ({ '@type': 'Person', name: a.trim() })),
				datePublished: pub.year.toString(),
				url: `https://doi.org/${pub.doi}`,
				identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: pub.doi },
				isPartOf: {
					'@type': pub.type === 'conference' ? 'ScholarlyEvent' : 'Periodical',
					name: pub.venue
				}
			}
		}))
	};

	type Filter = 'all' | 'first' | number;
	const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
	const firstCount = publications.filter((p) => p.isFirstAuthor).length;

	let filter = $state<Filter>('all');
	let openCite = $state<number | null>(null);
	let copied = $state<number | null>(null);
	let highlighted = $state<number | null>(null);

	const visible = $derived(
		publications
			.filter((p) => (filter === 'all' ? true : filter === 'first' ? p.isFirstAuthor : p.year === filter))
			.sort((a, b) => b.year - a.year || a.id - b.id)
	);

	const groups = $derived.by(() => {
		const m = new Map<number, Publication[]>();
		for (const p of visible) {
			if (!m.has(p.year)) m.set(p.year, []);
			m.get(p.year)!.push(p);
		}
		return [...m.entries()];
	});

	afterNavigate(({ to }) => {
		const hash = to?.url?.hash ?? '';
		const m = hash.match(/^#pub-(\d+)$/);
		if (!m) return;
		const id = Number(m[1]);
		filter = 'all';
		highlighted = id;
		setTimeout(() => {
			document.getElementById(`pub-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 40);
		setTimeout(() => (highlighted = null), 2600);
	});

	async function copy(pub: Publication) {
		try {
			await navigator.clipboard.writeText(bibtex(pub));
			copied = pub.id;
			setTimeout(() => (copied = null), 1800);
		} catch {
			copied = null;
		}
	}

	function download(pub: Publication) {
		const a = document.createElement('a');
		a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(bibtex(pub));
		a.download = `${pub.authors.split(',')[0].trim().split(' ').pop()?.toLowerCase()}${pub.year}.bib`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	function authorsOf(pub: Publication) {
		return pub.authors.split(', ');
	}

	const chips: { id: Filter; label: string }[] = [
		{ id: 'all', label: `All · ${publications.length}` },
		{ id: 'first', label: `First author · ${firstCount}` },
		...years.map((y) => ({ id: y as Filter, label: String(y) }))
	];
</script>

<SEO
	title="Publications · Yihao Dong"
	description="Papers by Yihao Dong at CHI and Augmented Humans on haptics, sensory augmentation and human-computer interaction, with BibTeX for each."
	path="/publications"
	page="Publications"
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(publicationsSchema)}</script>`}
</svelte:head>

<section class="wrap pb-10 pt-16 sm:pt-24">
	<p class="eyebrow"><span class="text-accent-ink">02</span> — Publications</p>
	<h1 class="display mt-6 text-[clamp(2.6rem,7vw,5.6rem)] text-ink">The record</h1>
	<p class="prose-t mt-8 max-w-measure">
		Peer-reviewed work on haptics, sensory augmentation and human-computer interaction.
	</p>
</section>

<section class="wrap" aria-labelledby="list-title">
	<h2 id="list-title" class="sr-only">Publication list</h2>

	<!-- Filters -->
	<div class="sticky top-[var(--header-h)] z-10 -mx-5 border-y border-line bg-paper/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filter publications">
			{#each chips as c}
				<button
					type="button"
					onclick={() => (filter = c.id)}
					aria-pressed={filter === c.id}
					class="chip rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors {filter === c.id
						? 'border-ink bg-ink text-paper'
						: 'border-line text-ink-2 hover:border-ink-3 hover:text-ink'}"
				>
					{c.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- List -->
	<div class="mt-2">
		{#each groups as [year, pubs] (year)}
			<div class="grid gap-4 border-b border-line py-10 lg:grid-cols-[8rem_1fr] lg:gap-10">
				<div class="lg:sticky lg:top-[calc(var(--header-h)+4rem)] lg:self-start">
					<p class="display text-[2.4rem] text-ink lg:text-[3rem]">{year}</p>
					<p class="font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
						{pubs.length} {pubs.length === 1 ? 'paper' : 'papers'}
					</p>
				</div>
				<ol class="space-y-12">
					{#each pubs as pub (pub.id)}
						<li
							id="pub-{pub.id}"
							class="relative scroll-mt-32 pl-7 transition-colors duration-500 {highlighted === pub.id ? 'pub-hit' : ''}"
						>
							<span
								class="absolute left-0 top-[0.55rem] h-3 w-3 rounded-full border-2 {pub.isFirstAuthor
									? 'border-accent bg-accent'
									: 'border-ink-3 bg-transparent'}"
								aria-hidden="true"
							></span>

							<p class="font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
								{pub.venueShort} · {pub.type}{pub.pages ? ` · ${pub.pages}` : ''}
								{#if pub.isFirstAuthor}<span class="text-accent-ink"> · first author</span>{/if}
								{#if pub.award}<span class="text-accent-ink"> · {pub.award}</span>{/if}
							</p>

							<h3 class="display mt-3 text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight text-ink">
								<a href="https://doi.org/{pub.doi}" target="_blank" rel="noopener noreferrer" class="hover:text-accent-ink transition-colors">
									{pub.title}
								</a>
							</h3>

							<p class="mt-3 text-[0.95rem] text-ink-2">
								{#each authorsOf(pub) as a, i}
									{#if a.trim() === site.name}<span class="font-semibold text-ink">{a}</span>{:else}{a}{/if}{#if i < authorsOf(pub).length - 1}{', '}{/if}
								{/each}
							</p>
							<p class="mt-1 text-[0.85rem] text-ink-3">{pub.venue}</p>
							<p class="mt-3 max-w-measure text-[0.95rem] leading-relaxed text-ink-2">{pub.teaser}</p>

							<div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
								<a href="https://doi.org/{pub.doi}" target="_blank" rel="noopener noreferrer" class="link">DOI</a>
								{#if pub.type === 'preprint'}
									<a href="https://arxiv.org/abs/{pub.doi.split('/').pop()?.replace('arXiv.', '')}" target="_blank" rel="noopener noreferrer" class="link">arXiv</a>
								{/if}
								{#if pub.code}
									<a href={pub.code} target="_blank" rel="noopener noreferrer" class="link">Code</a>
								{/if}
								{#if pub.project}
									<a href="/research#{pub.project}" class="link">Demo</a>
								{/if}
								<button
									type="button"
									class="link"
									onclick={() => (openCite = openCite === pub.id ? null : pub.id)}
									aria-expanded={openCite === pub.id}
									aria-controls="cite-{pub.id}"
								>
									{openCite === pub.id ? 'Hide BibTeX' : 'BibTeX'}
								</button>
							</div>

							{#if openCite === pub.id}
								<div id="cite-{pub.id}" class="mt-4 border border-line bg-paper-2/70">
									<pre class="overflow-x-auto p-4 font-mono text-[0.78rem] leading-relaxed text-ink-2">{bibtex(pub)}</pre>
									<div class="flex flex-wrap gap-2 border-t border-line p-3">
										<button type="button" class="btn btn-solid" onclick={() => copy(pub)}>
											{copied === pub.id ? 'Copied' : 'Copy'}
										</button>
										<button type="button" class="btn btn-ghost" onclick={() => download(pub)}>Download .bib</button>
									</div>
								</div>
							{/if}
						</li>
					{/each}
				</ol>
			</div>
		{/each}

		{#if visible.length === 0}
			<p class="py-16 text-center text-ink-2">Nothing matches that filter.</p>
		{/if}
	</div>

	<p class="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
		Also on
		{#each site.profiles.filter((p) => ['Google Scholar', 'ORCID', 'ACM Digital Library'].includes(p.name)) as p, i}
			<a href={p.href} target="_blank" rel="noopener noreferrer" class="link">{p.name}</a>{i < 2 ? ' · ' : ''}
		{/each}
	</p>
</section>

<style>
	.pub-hit {
		box-shadow: -1.75rem 0 0 -1.5rem var(--accent);
	}
</style>
