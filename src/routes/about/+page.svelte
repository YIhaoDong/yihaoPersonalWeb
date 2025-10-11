<script lang="ts">
	import { technicalSkills, professionalSkills } from '$lib/data/skills';

	const education = [
		{
			degree: 'Doctor of Philosophy',
			institution: 'The University of Sydney',
			department: 'Computer Science (Human-Computer Interaction)',
			period: 'July 2024 - July 2028 (Expected)',
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
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			About Me
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Researcher, educator, and innovator in Human-Computer Interaction
		</p>
	</div>
</section>

<!-- Biography -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
		<div class="prose prose-lg max-w-none">
			<p class="text-gray-700 leading-relaxed mb-4">
				I am currently pursuing a PhD in the Department of Computer Science at the University of Sydney,
				under the supervision of leading researchers in Human-Computer Interaction. My doctoral research
				focuses on enhancing user experiences in Extended Reality (XR) environments through predictive
				hand gesture tracking and multimodal haptic feedback.
			</p>
			<p class="text-gray-700 leading-relaxed mb-4">
				My academic journey began with a unique dual degree program, earning both a Bachelor of Advanced
				Computing (Honours Class I) and a Bachelor of Commerce from the University of Sydney. This
				interdisciplinary background allows me to approach research problems from both technical and
				human-centered perspectives, considering not only the technological feasibility but also the
				practical implications and user needs.
			</p>
			<p class="text-gray-700 leading-relaxed mb-4">
				Throughout my studies, I developed a strong interest in Extended Reality technologies and their
				potential to transform how we interact with digital information. My research investigates how
				we can leverage predictive algorithms and proactive feedback mechanisms to create more natural,
				intuitive, and responsive XR experiences. This work has resulted in publications at premier
				HCI venues including CHI and Augmented Humans conferences.
			</p>
			<p class="text-gray-700 leading-relaxed">
				Beyond research, I am passionate about teaching and mentoring. Since 2023, I have been actively
				involved in teaching various courses ranging from data management to usability engineering,
				helping students develop both technical skills and critical thinking abilities.
			</p>
		</div>
	</div>
</section>

<!-- Education Timeline -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
		<div class="max-w-4xl mx-auto space-y-8">
			{#each education as edu}
				<div class="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
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
