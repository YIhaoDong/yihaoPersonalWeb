<script lang="ts">
	import { technicalSkills, professionalSkills } from '$lib/data/skills';

	const education = [
		{
			degree: 'Doctor of Philosophy',
			institution: 'The University of Sydney',
			department: 'Computer Science (Human-Computer Interaction)',
			period: 'July 2024 - July 2028 (Expected)',
			supervisor: 'Dr. Anusha Withana',
			thesis: 'Enhancing User Experience in Extended Reality through Predictive Hand Gesture Tracking',
			description: 'Researching innovative interaction paradigms for Extended Reality environments, focusing on predictive hand gesture tracking and haptic feedback to enhance user experience and reduce interaction latency.'
		},
		{
			degree: 'Bachelor of Advanced Computing (Honours)',
			institution: 'The University of Sydney',
			period: '2019 - 2024',
			honours: 'Honours Class I',
			major: 'Information Systems (Engineering)',
			description: 'Focused on Human-Computer Interaction with a strong foundation in software engineering, data management, and usability engineering.'
		},
		{
			degree: 'Bachelor of Commerce',
			institution: 'The University of Sydney',
			period: '2019 - 2024',
			major: 'Business Information Systems',
			description: 'Developed expertise in business process analysis, information systems strategy, and the intersection of technology and business.'
		}
	];

	const languages = [
		{ language: 'English', proficiency: 'Professional Working' },
		{ language: 'Chinese, Mandarin', proficiency: 'Native' }
	];
</script>

<svelte:head>
	<title>About - Yihao Dong</title>
	<meta name="description" content="Learn more about Yihao Dong, PhD candidate in Human-Computer Interaction at the University of Sydney." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16 border-b border-blue-100">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
			About Me
		</h1>
		<div class="flex justify-center gap-4">
			<a href="/CV_Yihao_Dong.pdf" target="_blank" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-md flex items-center text-sm">
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				Download Full CV (PDF)
			</a>
			<a href="https://scholar.google.com" target="_blank" class="bg-white text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors font-semibold border border-gray-300 shadow-sm flex items-center text-sm">
				Google Scholar
			</a>
		</div>
	</div>
</section>

<!-- Biography -->
<section class="section-container">
	<div class="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
		<div class="lg:w-2/3">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
			<div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
				<p class="mb-4">
					I am currently pursuing a PhD in the Department of Computer Science at the University of Sydney,
					under the supervision of <strong>Dr. Anusha Withana</strong> at the <a href="https://creation-lab.org/" target="_blank" class="text-blue-600 hover:underline">CREATION Lab</a>. 
					My doctoral research focuses on enhancing user experiences in Extended Reality (XR) environments through predictive
					hand gesture tracking and multimodal haptic feedback.
				</p>
				<p class="mb-4">
					My academic journey began with a unique dual degree program, earning both a <strong>Bachelor of Advanced
					Computing (Honours Class I)</strong> and a <strong>Bachelor of Commerce</strong> from the University of Sydney. This
					interdisciplinary background allows me to approach research problems from both technical and
					human-centered perspectives.
				</p>
				<p class="mb-4">
					Throughout my studies, I developed a strong interest in how Extended Reality technologies can transform 
					human-computer interaction. My work investigates how we can leverage predictive algorithms and 
					proactive feedback mechanisms to create more natural, intuitive, and responsive XR experiences.
				</p>
				<p>
					Beyond research, I am a passionate educator, teaching courses ranging from data management 
					to usability engineering, helping students bridge the gap between technical implementation 
					and user-centered design.
				</p>
			</div>
		</div>

		<!-- Interdisciplinary Highlight Card -->
		<div class="lg:w-1/3">
			<div class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl">
				<h3 class="text-xl font-bold mb-4 flex items-center">
					<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
					Unique Perspective
				</h3>
				<p class="text-blue-50 leading-relaxed mb-6">
					With a dual background in <strong>Advanced Computing</strong> and <strong>Commerce</strong>, I bridge the gap between deep technical implementation and human-centered business value.
				</p>
				<ul class="space-y-3 text-sm">
					<li class="flex items-center">
						<svg class="w-4 h-4 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
						</svg>
						Technical Feasibility
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
						</svg>
						User-Centered Design
					</li>
					<li class="flex items-center">
						<svg class="w-4 h-4 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
						</svg>
						Strategic Business Value
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Education Timeline -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
		<div class="max-w-4xl mx-auto space-y-8">
			{#each education as edu}
				<div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-blue-600">
					<div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
						<div class="flex-1">
							<h3 class="text-2xl font-bold text-gray-900 mb-2">
								{edu.degree}
							</h3>
							<p class="text-lg text-blue-600 font-semibold mb-1">
								{edu.institution}
							</p>
							{#if edu.department}
								<p class="text-gray-600 mb-1">
									{edu.department}
								</p>
							{/if}
							{#if edu.supervisor}
								<p class="text-gray-700 font-medium mb-1">
									Supervisor: <span class="text-gray-900">{edu.supervisor}</span>
								</p>
							{/if}
							{#if edu.honours}
								<p class="text-gray-700 font-medium">
									{edu.honours}
								</p>
							{/if}
							{#if edu.major}
								<p class="text-gray-700">
									Major: {edu.major}
								</p>
							{/if}
						</div>
						<div class="text-gray-600 font-medium mt-2 md:mt-0">
							{edu.period}
						</div>
					</div>
					{#if edu.thesis}
						<p class="text-gray-700 mb-2">
							<span class="font-semibold">Thesis:</span> {edu.thesis}
						</p>
					{/if}
					<p class="text-gray-600">
						{edu.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills -->
<section class="section-container">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>

		<!-- Technical Skills -->
		<div class="mb-12">
			<h3 class="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each technicalSkills as category}
					<div class="card">
						<h4 class="text-lg font-bold text-gray-900 mb-3">
							{category.category}
						</h4>
						<div class="flex flex-wrap gap-2">
							{#each category.skills as skill}
								<span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Professional Skills -->
		<div>
			<h3 class="text-2xl font-bold text-gray-900 mb-6">Professional Skills</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{#each professionalSkills as skill}
					<div class="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
						<svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						<span class="text-gray-700 font-medium">{skill}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Languages -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Languages</h2>
		<div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each languages as lang}
				<div class="bg-white rounded-lg shadow-md p-6 text-center">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						{lang.language}
					</h3>
					<p class="text-gray-600">
						{lang.proficiency}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
