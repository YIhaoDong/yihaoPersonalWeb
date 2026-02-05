<script lang="ts">
	import { researchInterests } from '$lib/data/skills';
	import { publications } from '$lib/data/publications';
	import profileImg from '$lib/assets/home_profileImage.jpeg';
</script>

<svelte:head>
	<title>Yihao Dong - PhD Researcher in Human-Computer Interaction</title>
	<meta name="description" content="Yihao Dong is a PhD candidate at the University of Sydney researching Extended Reality, haptic feedback, and predictive hand gesture tracking." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
	<div class="section-container">
		<div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
			<!-- Profile Image -->
			<div class="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500 bg-gray-100">
				<img src={profileImg} alt="Yihao Dong" class="w-full h-full object-cover" />
			</div>

			<div class="flex-1 text-center md:text-left">
				<h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
					Yihao Dong
				</h1>
				<p class="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
					PhD Candidate (Expected 2028)
				</p>
				<p class="text-xl text-gray-700 mb-4">
					Human-Computer Interaction • The University of Sydney
				</p>
				<p class="text-lg text-gray-600 max-w-2xl mb-12">
					Enhancing User Experience in Extended Reality through Predictive Hand Gesture Tracking and Multimodal Feedback.
				</p>

				<div class="flex flex-wrap justify-center md:justify-start gap-4">
					<a href="/research" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md flex items-center">
						View Research
					</a>
					<a href="/CV_Yihao_Dong.pdf" target="_blank" class="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-blue-600 flex items-center">
						<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
						Download CV
					</a>
					<a href="/publications" class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold border border-gray-300">
						Publications
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- News Section -->
<section class="py-12 bg-blue-50">
	<div class="section-container">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
				<span class="mr-3">📢</span> Latest News
			</h2>
			<div class="space-y-4">
				<div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 flex items-start gap-4">
					<span class="text-sm font-bold text-blue-600 whitespace-nowrap mt-1">FEB 2026</span>
					<p class="text-gray-700">🚀 Two papers accepted at <strong>CHI '26</strong> in Barcelona! Looking forward to presenting <em>TactDeform</em> and <em>SRL Proxemics</em>.</p>
				</div>
				<div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-300 flex items-start gap-4">
					<span class="text-sm font-bold text-blue-600 whitespace-nowrap mt-1">NOV 2025</span>
					<p class="text-gray-700">🏆 Awarded the <strong>Best Early PhD Project</strong> in 2025 at the University of Sydney School of Computer Science Research Showcase.</p>
				</div>
				<div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300 flex items-start gap-4 opacity-75">
					<span class="text-sm font-bold text-gray-500 whitespace-nowrap mt-1">MAR 2025</span>
					<p class="text-gray-700">📖 <em>Just Before Touch</em> published at <strong>Augmented Humans (AHs '25)</strong>.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quick Introduction -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="section-heading text-center">About Me</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			I am a PhD candidate in the Department of Computer Science at the University of Sydney,
			specializing in Human-Computer Interaction. My research focuses on enhancing user experiences
			in Extended Reality (XR) environments through predictive hand gesture tracking and haptic feedback.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-8">
			With a dual background in Advanced Computing (Honours Class I) and Commerce, I bring both
			technical expertise and business acumen to my research. I'm passionate about creating intuitive,
			natural, and accessible interaction paradigms for immersive technologies.
		</p>
		<div class="text-center">
			<a href="/about" class="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
				Learn more about me
				<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Research Interests -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="section-heading text-center">Research Interests</h2>
		<div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
			{#each researchInterests as interest}
				<span class="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-200">
					{interest}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- Recent Publications -->
<section class="section-container">
	<div class="max-w-5xl mx-auto">
		<h2 class="section-heading text-center">Recent Publications</h2>
		<div class="space-y-6">
			{#each publications.slice(0, 3) as pub}
				<div class="card">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						{pub.title}
					</h3>
					<p class="text-gray-700 mb-2">
						{pub.authors}
					</p>
					<p class="text-gray-600 mb-3">
						<span class="font-semibold">{pub.venue}</span> • {pub.year} • {pub.pages}
					</p>
					<div class="flex flex-wrap gap-3">
						<a
							href="https://doi.org/{pub.doi}"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
						>
							<svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
							DOI: {pub.doi}
						</a>
						{#if pub.isFirstAuthor}
							<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
								First Author
							</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<div class="text-center mt-8">
			<a href="/publications" class="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
				View all publications
				<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="bg-blue-600 text-white py-16">
	<div class="section-container text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-4">
			Let's Connect
		</h2>
		<p class="text-xl mb-8 text-blue-100">
			Interested in collaboration or have questions about my research?
		</p>
		<a href="/contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block shadow-lg">
			Contact Me
		</a>
	</div>
</section>
