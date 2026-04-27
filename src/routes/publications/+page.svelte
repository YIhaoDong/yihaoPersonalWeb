<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { publications } from '$lib/data/publications';
	import SEO from '$lib/components/SEO.svelte';
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

	let selectedYear = $state<number | 'all'>('all');
	let selectedType = $state<string>('all');
	let copiedId = $state<number | null>(null);
	let highlightedId = $state<string | null>(null);

	afterNavigate(({ to }) => {
		const hash = to?.url?.hash ?? '';
		if (hash.startsWith('#pub-')) {
			highlightedId = hash.slice(1);
			setTimeout(() => {
				const el = document.getElementById(hash.slice(1));
				if (el) {
					const top = el.getBoundingClientRect().top + window.scrollY - 80;
					window.scrollTo({ top, behavior: 'smooth' });
				}
			}, 50);
		}
	});

	const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
	const types = [...new Set(publications.map(p => p.type))];

	function filteredPublications() {
		return publications.filter(pub => {
			const yearMatch = selectedYear === 'all' || pub.year === selectedYear;
			const typeMatch = selectedType === 'all' || pub.type === selectedType;
			return yearMatch && typeMatch;
		}).sort((a, b) => b.year - a.year);
	}

	function generateBibtex(pub: typeof publications[0]): string {
		const id = pub.authors.split(',')[0].split(' ').pop() + pub.year;
		let type = 'article';
		let venueField = 'journal';

		if (pub.type === 'conference') {
			type = 'inproceedings';
			venueField = 'booktitle';
		} else if (pub.type === 'preprint') {
			type = 'article';
			venueField = 'journal';
		}

		return `@${type}{${id},
  title={${pub.title}},
  author={${pub.authors}},
  ${venueField}={${pub.venue}},
  year={${pub.year}},
  pages={${pub.pages}},
  doi={${pub.doi}}
}`;
	}

	async function copyBibtex(pub: typeof publications[0]) {
		const bibtex = generateBibtex(pub);
		try {
			await navigator.clipboard.writeText(bibtex);
			copiedId = pub.id;
			// Reset after 2 seconds
			setTimeout(() => {
				copiedId = null;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
			alert('Failed to copy to clipboard');
		}
	}

	function downloadBibtex(pub: typeof publications[0]) {
		const bibtex = generateBibtex(pub);
		// Use data URI instead of blob for better compatibility
		const dataStr = 'data:text/plain;charset=utf-8,' + encodeURIComponent(bibtex);
		const a = document.createElement('a');
		a.href = dataStr;
		a.download = `${pub.authors.split(',')[0].split(' ').pop()}${pub.year}.bib`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
</script>

<SEO
	title="Publications - Yihao Dong"
	description="Academic publications by Yihao Dong including CHI and Augmented Humans papers on haptics, sensory augmentation, and human-computer interaction."
	path="/publications"
	page="Publications"
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(publicationsSchema)}</script>`}
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Publications
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
			Peer-reviewed research in top HCI venues
		</p>
		<!-- <div class="flex justify-center gap-6">
			<a href="https://scholar.google.com/citations?user=y9KUBZAAAAAJ" target="_blank" class="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors font-semibold border border-gray-300 shadow-sm flex items-center text-sm">
				Google Scholar
			</a>
		</div> -->
	</div>
</section>

<!-- Filters -->
<section class="section-container pt-8">
	<div class="max-w-5xl mx-auto">
		<div class="bg-white rounded-lg shadow-sm p-6 mb-8">
			<div class="flex flex-col md:flex-row gap-4">
				<div class="flex-1">
					<label for="year-filter" class="block text-sm font-medium text-gray-700 mb-2">
						Filter by Year
					</label>
					<select
						id="year-filter"
						bind:value={selectedYear}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="all">All Years</option>
						{#each years as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
				</div>

				<div class="flex-1">
					<label for="type-filter" class="block text-sm font-medium text-gray-700 mb-2">
						Filter by Type
					</label>
					<select
						id="type-filter"
						bind:value={selectedType}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="all">All Types</option>
						{#each types as type}
							<option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>

		<!-- Publication Count -->
		<div class="mb-6">
			<p class="text-gray-600">
				Showing <span class="font-semibold text-gray-900">{filteredPublications().length}</span>
				{filteredPublications().length === 1 ? 'publication' : 'publications'}
			</p>
		</div>

		<!-- Publications List -->
		<div class="space-y-8">
			{#each filteredPublications() as pub, index}
				<article id="pub-{pub.id}" class="card hover:shadow-xl transition-shadow duration-300 scroll-mt-20" class:pub-highlighted={highlightedId === `pub-${pub.id}`}>
					<!-- Publication Number -->
					<div class="flex items-start gap-6">
						<div class="hidden md:flex bg-blue-100 text-blue-700 font-bold text-lg w-12 h-12 rounded-full items-center justify-center flex-shrink-0">
							{index + 1}
						</div>

						<div class="flex-1">
							<!-- Title -->
							<h2 class="text-2xl font-bold text-gray-900 mb-3 leading-tight">
								{pub.title}
							</h2>

							<!-- Authors -->
							<p class="text-gray-700 mb-2 text-lg">
								{#each pub.authors.split(', ') as author, i}
									{#if author.trim() === 'Yihao Dong'}
										<span class="font-semibold text-blue-600">{author}</span>{i < pub.authors.split(', ').length - 1 ? ', ' : ''}
									{:else}
										{author}{i < pub.authors.split(', ').length - 1 ? ', ' : ''}
									{/if}
								{/each}
							</p>

							<!-- Venue and Details -->
							<p class="text-gray-600 mb-4">
								<span class="font-semibold">{pub.venue}</span>
								<span class="mx-2">•</span>
								<span>{pub.year}</span>
								<span class="mx-2">•</span>
								<span>{pub.pages}</span>
							</p>

							<!-- Badges and Links -->
							<div class="flex flex-wrap gap-3">
								<!-- DOI Link -->
								<a
									href="https://doi.org/{pub.doi}"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
								>
									<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									View Paper
								</a>

								<!-- ArXiv Button (for preprints) -->
								{#if pub.type === 'preprint'}
									<a
										href="https://arxiv.org/abs/{pub.doi.split('/').pop()}"
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
									>
										<span class="mr-1.5 font-bold">arXiv</span>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								{/if}

								<!-- BibTeX Button Group -->
								<div class="inline-flex rounded-lg border border-gray-300 overflow-hidden">
									<!-- Copy Button -->
									<button
										onclick={() => copyBibtex(pub)}
										class="inline-flex items-center px-3 py-2 bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium border-r border-gray-300"
										title="Copy BibTeX to clipboard"
									>
										{#if copiedId === pub.id}
											<svg class="w-4 h-4 mr-1.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
											</svg>
											<span class="text-green-600 text-sm">Copied!</span>
										{:else}
											<svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
											</svg>
											<span class="text-sm font-bold">BibTex</span>
										{/if}
									</button>

									<!-- Download Button -->
									<button
										onclick={() => downloadBibtex(pub)}
										class="inline-flex items-center px-3 py-2 bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium"
										title="Download BibTeX as .bib file"
									>
										<svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
										</svg>
										<span class="text-sm">.bib</span>
									</button>
								</div>

								<!-- First Author Badge -->
								{#if pub.isFirstAuthor}
									<span class="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200">
										<svg class="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										First Author
									</span>
								{/if}

								<!-- Type Badge -->
								<span class="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold border border-gray-200 capitalize">
									{pub.type}
								</span>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Empty State -->
		{#if filteredPublications().length === 0}
			<div class="text-center py-12">
				<svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				<p class="text-gray-600 text-lg">No publications found matching your filters.</p>
			</div>
		{/if}
	</div>
</section>

<!-- Statistics -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Publication Statistics</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<div class="text-4xl font-bold text-blue-600 mb-2">
						{publications.length}
					</div>
					<div class="text-gray-600 font-medium">
						Total Publications
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<div class="text-4xl font-bold text-green-600 mb-2">
						{publications.filter(p => p.isFirstAuthor).length}
					</div>
					<div class="text-gray-600 font-medium">
						First Author
					</div>
				</div>
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<div class="text-4xl font-bold text-purple-600 mb-2">
						{years.length}
					</div>
					<div class="text-gray-600 font-medium">
						Active Years
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes highlight-fade {
		0%   { box-shadow: 0 0 0 3px rgb(59 130 246), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); background-color: rgb(239 246 255); }
		60%  { box-shadow: 0 0 0 3px rgb(59 130 246), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); background-color: rgb(239 246 255); }
		100% { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); background-color: rgb(255 255 255); }
	}

	:global(.pub-highlighted) {
		animation: highlight-fade 2.5s ease-out forwards;
	}
</style>
