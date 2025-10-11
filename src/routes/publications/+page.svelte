<script lang="ts">
	import { publications } from '$lib/data/publications';

	let selectedYear = $state<number | 'all'>('all');
	let selectedType = $state<string>('all');
	let copiedId = $state<number | null>(null);

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
		const type = pub.type === 'conference' ? 'inproceedings' : 'article';

		return `@${type}{${id},
  title={${pub.title}},
  author={${pub.authors}},
  booktitle={${pub.venue}},
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

<svelte:head>
	<title>Publications - Yihao Dong</title>
	<meta name="description" content="Academic publications by Yihao Dong in Human-Computer Interaction, Extended Reality, and haptic feedback." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Publications
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Peer-reviewed research in top HCI venues
		</p>
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
				<article class="card hover:shadow-xl transition-shadow duration-300">
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
									class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
								>
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									View Paper
								</a>

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
											<span class="text-sm">BibTex</span>
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
								<!-- {#if pub.isFirstAuthor}
									<span class="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
										<svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
										</svg>
										First Author
									</span>
								{/if} -->

								<!-- Conference Badge -->
								<!-- <span class="inline-flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-200 capitalize">
									{pub.type}
								</span> -->
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
