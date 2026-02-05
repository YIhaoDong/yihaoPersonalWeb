<script lang="ts">
	import { researchInterests } from '$lib/data/skills';
	import tactDeformImg from '$lib/assets/research/TactDeform.png';
	import justBeforeTouchImg from '$lib/assets/research/Ahs-JustBeforeTouch.png';

	const researchAreas = [
		{
			title: 'Extended Reality (XR/VR)',
			description: 'Investigating immersive technologies and their applications in enhancing human experiences and interactions in virtual and augmented environments.',
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
		},
		{
			title: 'Haptic Feedback',
			description: 'Exploring tactile and vibrotactile feedback mechanisms to create more immersive and intuitive interactions in virtual environments.',
			icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
		},
		{
			title: 'Gesture Tracking',
			description: 'Developing predictive algorithms for hand gesture recognition and tracking to reduce latency and improve interaction naturalness in XR systems.',
			icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
		},
		{
			title: 'Usability Engineering',
			description: 'Applying user-centered design principles and empirical evaluation methods to assess and improve the usability of interactive systems.',
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
		}
	];

	const thesisOverview = {
		title: 'Enhancing User Experience in Extended Reality through Predictive Hand Gesture Tracking',
		overview: 'My doctoral research investigates how predictive algorithms and proactive feedback can enhance user experiences in Extended Reality environments. The work focuses on reducing perceived latency and improving interaction naturalness through anticipatory systems that predict user intentions before physical actions are completed.',
		objectives: [
			'Develop predictive models for hand gesture tracking in VR/XR environments',
			'Investigate the role of proactive haptic feedback in shaping user perception',
			'Evaluate the impact of predictive interactions on user experience and task performance',
			'Establish design guidelines for implementing predictive interfaces in XR systems'
		],
		methodology: [
			'User studies and controlled experiments',
			'Quantitative and qualitative data analysis',
			'Iterative prototyping and evaluation',
			'Machine learning and predictive modeling'
		]
	};
</script>

<svelte:head>
	<title>Research - Yihao Dong</title>
	<meta name="description" content="Explore Yihao Dong's research in Extended Reality, haptic feedback, and predictive hand gesture tracking." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Research
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Advancing Human-Computer Interaction through innovative Extended Reality technologies
		</p>
	</div>
</section>

<!-- Research Vision -->
<section class="section-container pb-0">
	<div class="max-w-4xl mx-auto text-center">
		<blockquote class="text-2xl md:text-3xl font-serif italic text-blue-800 leading-relaxed mb-8">
			"I aim to eliminate the boundary between virtual and physical touch by leveraging 
			anticipatory algorithms and proactive multisensory feedback."
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
			<div class="group">
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
			</div>

			<!-- Project 2 -->
			<div class="group">
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
			</div>
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
				I am currently investigating how proactive vibrotactile cues can manipulate perceived haptic
				sensations in virtual reality, exploring the temporal boundaries of multisensory integration.
				My work aims to establish design principles for creating more responsive and natural XR interactions.
			</p>
			<p class="text-lg text-blue-100 leading-relaxed">
				Future research directions include exploring the role of multimodal feedback in complex XR tasks,
				investigating individual differences in perception and prediction, and developing adaptive systems
				that can personalize interactions based on user behavior and preferences.
			</p>
			<div class="mt-8 text-center">
				<a href="/publications" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block shadow-lg">
					View Publications
				</a>
			</div>
		</div>
	</div>
</section>
