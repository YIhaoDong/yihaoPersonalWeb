<script lang="ts">
	import { researchInterests } from '$lib/data/skills';
	import tactDeformImg from '$lib/assets/research/TactDeform.png';
	import justBeforeTouchImg from '$lib/assets/research/Ahs-JustBeforeTouch.png';
	import SEO from '$lib/components/SEO.svelte';

	const researchAreas = [
		{
			title: 'Sensory Augmentation',
			description: 'Investigating how wearable technologies can expand human perception, particularly for individuals with sensory impairments.',
			icon: 'M13 10V3L4 14h7v7l9-11h-7z'
		},
		{
			title: 'Haptic Feedback',
			description: 'Exploring tactile and vibrotactile feedback mechanisms to communicate environmental information and enhance spatial awareness.',
			icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
		},
		{
			title: 'Assistive Technology',
			description: 'Designing and developing interactive systems that empower people with vision impairment to navigate and understand their surroundings.',
			icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
		},
		{
			title: 'Multisensory Perception',
			description: 'Studying how the brain integrates information from different senses and how to leverage this for effective sensory substitution.',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		}
	];

	const thesisOverview = {
		title: 'Sensory Augmentation for Vision Impairment through Haptics',
		overview: 'My doctoral research investigates how sensory augmentation and haptic feedback can help people with vision impairment understand their environment. The work focuses on developing wearable systems that translate visual and spatial information into intuitive tactile sensations, enabling more independent navigation and interaction.',
		objectives: [
			'Design intuitive haptic metaphors for communicating spatial information',
			'Develop wearable sensory augmentation systems for real-world navigation',
			'Investigate the long-term cognitive impact of using sensory substitution devices',
			'Establish design guidelines for accessible multisensory interfaces'
		],
		methodology: [
			'User-centered design with the vision impairment community',
			'Qualitative interviews and field studies',
			'Iterative prototyping of wearable haptic devices',
			'Quantitative evaluation of spatial awareness and navigation performance'
		]
	};
</script>

<SEO
	title="Research - Yihao Dong"
	description="Explore Yihao Dong's research in sensory augmentation, haptic feedback, and assistive technology for vision impairment at the University of Sydney."
	path="/research"
	page="Research"
/>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Research
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Advancing Human-Computer Interaction through Sensory Augmentation and Assistive Technologies
		</p>
	</div>
</section>

<!-- Research Vision -->
<section class="section-container pb-0">
	<div class="max-w-4xl mx-auto text-center">
		<blockquote class="text-2xl md:text-3xl font-serif italic text-blue-800 leading-relaxed mb-8">
			"I aim to empower individuals with sensory impairments by creating intuitive, 
			haptic-based sensory augmentation systems that bridge the gap between the environment and perception."
		</blockquote>
		<div class="w-24 h-1 bg-blue-600 mx-auto"></div>
	</div>
</section>

<!-- Featured Projects -->
<section class="section-container">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Research Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<!-- Project 1 -->
			<a href="/publications#pub-1" class="group block cursor-pointer">
				<div class="relative overflow-hidden rounded-2xl shadow-lg mb-6 bg-gray-100 aspect-video flex items-center justify-center border border-gray-100">
					<img src={tactDeformImg} alt="TactDeform System" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
					<div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
						CHI '26
					</div>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">TactDeform</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Finger pad deformation inspired spatial tactile feedback for virtual geometry exploration.
					A system that mimics the natural deformation of the finger pad to provide high-fidelity haptic sensations.
				</p>
			</a>

			<!-- Project 2 -->
			<a href="/publications#pub-3" class="group block cursor-pointer">
				<div class="relative overflow-hidden rounded-2xl shadow-lg mb-6 bg-gray-100 aspect-video flex items-center justify-center border border-gray-100">
					<img src={justBeforeTouchImg} alt="Just Before Touch System" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
					<div class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
						AHs '25
					</div>
				</div>
				<h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Just Before Touch</h3>
				<p class="text-gray-700 leading-relaxed mb-4">
					Manipulating perceived haptic sensations through proactive vibrotactile cues.
					Using anticipatory feedback to "prime" the user's nervous system before actual physical contact.
				</p>
			</a>
		</div>
	</div>
</section>

<!-- PhD Thesis Overview -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-6">PhD Thesis</h2>
		<div class="card bg-blue-50 border-l-4 border-blue-600">
			<h3 class="text-2xl font-bold text-gray-900 mb-4">
				{thesisOverview.title}
			</h3>
			<p class="text-gray-700 leading-relaxed mb-6">
				{thesisOverview.overview}
			</p>

			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h4 class="text-lg font-bold text-gray-900 mb-3">Research Objectives</h4>
					<ul class="space-y-2">
						{#each thesisOverview.objectives as objective}
							<li class="flex items-start">
								<svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
								<span class="text-gray-700">{objective}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h4 class="text-lg font-bold text-gray-900 mb-3">Methodology</h4>
					<ul class="space-y-2">
						{#each thesisOverview.methodology as method}
							<li class="flex items-start">
								<svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
								<span class="text-gray-700">{method}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Research Areas -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Research Areas</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
			{#each researchAreas as area}
				<div class="card hover:scale-105 transition-transform duration-300">
					<div class="flex items-start space-x-4">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={area.icon} />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">
								{area.title}
							</h3>
							<p class="text-gray-600">
								{area.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Research Interests Tags -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Research Interests</h2>
		<div class="flex flex-wrap justify-center gap-3">
			{#each researchInterests as interest}
				<span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
					{interest}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- Current & Future Work -->
<section class="bg-blue-600 text-white py-16">
	<div class="section-container">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-6 text-center">Current & Future Work</h2>
			<p class="text-lg text-blue-100 mb-6 leading-relaxed">
				I am currently investigating how wearable haptic devices can provide real-time spatial awareness 
				for people with vision impairment, focusing on the design of intuitive haptic metaphors.
				My work aims to establish a framework for effective sensory augmentation that minimizes cognitive load.
			</p>
			<p class="text-lg text-blue-100 leading-relaxed">
				Future research directions include exploring the potential of multimodal sensory substitution 
				(combining haptics and audio), longitudinal studies on neural plasticity and device adaptation, 
				and the development of context-aware assistive systems that leverage computer vision and AI.
			</p>
			<div class="mt-8 text-center">
				<a href="/publications" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block shadow-lg">
					View Publications
				</a>
			</div>
		</div>
	</div>
</section>
