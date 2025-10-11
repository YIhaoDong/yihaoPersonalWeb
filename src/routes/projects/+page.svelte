<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects - Yihao Dong</title>
	<meta name="description" content="Academic and research projects by Yihao Dong at the University of Sydney." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Academic Projects
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Interdisciplinary projects applying research and innovation to real-world challenges
		</p>
	</div>
</section>

<!-- Projects List -->
<section class="section-container">
	<div class="max-w-5xl mx-auto space-y-12">
		{#each projects as project}
			<article class="card hover:shadow-xl transition-all duration-300">
				<!-- Project Header -->
				<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
					<div class="flex-1">
						<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
							{project.title}
						</h2>
						<p class="text-blue-600 font-semibold text-lg">
							The University of Sydney
						</p>
					</div>
					<span class="mt-2 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg self-start">
						{project.year}
					</span>
				</div>

				<!-- Project Description -->
				<p class="text-gray-700 text-lg leading-relaxed mb-6">
					{project.description}
				</p>

				<!-- Technologies Used -->
				{#if project.technologies && project.technologies.length > 0}
					<div class="mb-6">
						<h3 class="text-lg font-bold text-gray-900 mb-3">Technologies Used</h3>
						<div class="flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-sm font-medium">
									{tech}
								</span>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Key Responsibilities -->
				<div class="mb-6">
					<h3 class="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h3>
					<ul class="space-y-2">
						{#each project.responsibilities as responsibility}
							<li class="flex items-start">
								<svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span class="text-gray-700">{responsibility}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Outcomes -->
				<div class="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
					<h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center">
						<svg class="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
						</svg>
						Outcomes & Achievements
					</h3>
					<p class="text-gray-700">
						{project.outcomes}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- Project Statistics -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Project Impact</h2>
		<div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
			<div class="bg-white rounded-lg shadow-md p-6 text-center">
				<div class="text-4xl font-bold text-blue-600 mb-2">
					{projects.length}
				</div>
				<div class="text-gray-600 font-medium">
					Academic Projects
				</div>
			</div>
			<div class="bg-white rounded-lg shadow-md p-6 text-center">
				<div class="text-4xl font-bold text-green-600 mb-2">
					21+
				</div>
				<div class="text-gray-600 font-medium">
					Client Meetings
				</div>
			</div>
			<div class="bg-white rounded-lg shadow-md p-6 text-center">
				<div class="text-4xl font-bold text-purple-600 mb-2">
					100%
				</div>
				<div class="text-gray-600 font-medium">
					Success Rate
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Skills Developed -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Skills Developed Through Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="card">
				<h3 class="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
				<ul class="space-y-2">
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Web Scraping & Data Mining
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						AI & Machine Learning Applications
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Software Prototyping & Development
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Data Analysis & Visualization
					</li>
				</ul>
			</div>

			<div class="card">
				<h3 class="text-xl font-bold text-gray-900 mb-4">Professional Skills</h3>
				<ul class="space-y-2">
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Client Relationship Management
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Agile Project Management
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Requirements Gathering & Analysis
					</li>
					<li class="flex items-center text-gray-700">
						<svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Team Leadership & Collaboration
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
