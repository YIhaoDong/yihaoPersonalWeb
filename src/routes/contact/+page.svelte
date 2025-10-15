<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	function validateEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		formStatus = 'submitting';

		// Validate form
		if (!formData.name || !formData.email || !formData.subject || !formData.message) {
			formStatus = 'error';
			errorMessage = 'Please fill in all fields.';
			return;
		}

		if (!validateEmail(formData.email)) {
			formStatus = 'error';
			errorMessage = 'Please enter a valid email address.';
			return;
		}

		// Simulate form submission (replace with actual backend integration)
		setTimeout(() => {
			formStatus = 'success';
			formData = { name: '', email: '', subject: '', message: '' };

			// Reset success message after 5 seconds
			setTimeout(() => {
				formStatus = 'idle';
			}, 5000);
		}, 1000);
	}

	const contactInfo = [
		{
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			label: 'Email',
			value: 'yihao.dong@sydney.edu.au',
			href: 'mailto:yihao.dong@sydney.edu.au'
		},
		{
			icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
			label: 'Phone',
			value: '+61 478 092 618',
			href: 'tel:+61478092618'
		},
		{
			icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
			label: 'Location',
			value: 'Sydney, NSW 2000',
			href: null
		}
	];

	const academicProfiles = [
		{ name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=y9KUBZAAAAAJ', available: true },
		{ name: 'ResearchGate', href: 'https://www.researchgate.net/scientific-contributions/Yihao-Dong-2311639364', available: true },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/yihao-dong/', available: true },
		{ name: 'ORCID', href: 'https://orcid.org/0009-0009-0719-3670', available: true },
		{ name: 'ACM Digital Library', href: 'https://dl.acm.org/profile/99661566898', available: true }
	];
</script>

<svelte:head>
	<title>Contact - Yihao Dong</title>
	<meta name="description" content="Get in touch with Yihao Dong for research collaboration, academic inquiries, or general questions." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Get in Touch
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			I'm always open to discussing research collaboration, academic opportunities, or answering questions
		</p>
	</div>
</section>

<!-- Contact Section -->
<section class="section-container">
	<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
		<!-- Contact Information -->
		<div>
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
			<p class="text-gray-700 mb-8 leading-relaxed">
				Feel free to reach out through any of the following channels. I typically respond within
				1-2 business days.
			</p>

			<!-- Contact Details -->
			<div class="space-y-6 mb-8">
				{#each contactInfo as info}
					<div class="flex items-start space-x-4">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={info.icon} />
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900 mb-1">{info.label}</h3>
							{#if info.href}
								<a href={info.href} class="text-blue-600 hover:text-blue-700 transition-colors">
									{info.value}
								</a>
							{:else}
								<p class="text-gray-600">{info.value}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- Academic Profiles -->
			<div class="bg-gray-50 rounded-lg p-6">
				<h3 class="text-xl font-bold text-gray-900 mb-4">Academic Profiles</h3>
				<div class="space-y-3">
					{#each academicProfiles as profile}
						{#if profile.available}
							<a
								href={profile.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
							>
								<span class="text-gray-700 font-medium">{profile.name}</span>
								<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						{:else}
							<div class="flex items-center justify-between p-3 bg-white rounded-lg opacity-60">
								<span class="text-gray-500 font-medium">{profile.name}</span>
								<span class="text-xs text-gray-400">Coming Soon</span>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- Contact Form -->
		<div>
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>

			<form onsubmit={handleSubmit} class="space-y-6">
				<!-- Name -->
				<div>
					<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
						Name *
					</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
						placeholder="Your name"
					/>
				</div>

				<!-- Email -->
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
						Email *
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
						placeholder="your.email@example.com"
					/>
				</div>

				<!-- Subject -->
				<div>
					<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
						Subject *
					</label>
					<input
						type="text"
						id="subject"
						bind:value={formData.subject}
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
						placeholder="What is this about?"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
						Message *
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="6"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
						placeholder="Your message..."
					></textarea>
				</div>

				<!-- Status Messages -->
				{#if formStatus === 'success'}
					<div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
						<div class="flex items-center">
							<svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<p class="text-green-700 font-medium">
								Thank you! Your message has been sent successfully.
							</p>
						</div>
					</div>
				{/if}

				{#if formStatus === 'error'}
					<div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
						<div class="flex items-center">
							<svg class="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<p class="text-red-700 font-medium">
								{errorMessage}
							</p>
						</div>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					disabled={formStatus === 'submitting'}
					class="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
				>
					{#if formStatus === 'submitting'}
						<svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Sending...
					{:else}
						Send Message
					{/if}
				</button>

				<p class="text-sm text-gray-500 text-center">
					* Required fields
				</p>
			</form>
		</div>
	</div>
</section>

<!-- Office Hours / Alternative Contact -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold text-gray-900 mb-6">Research Collaboration</h2>
			<p class="text-lg text-gray-700 mb-6 leading-relaxed">
				I'm particularly interested in collaborations related to Extended Reality, haptic feedback,
				gesture tracking, and human-computer interaction. If you have a project idea or research
				opportunity, please don't hesitate to reach out.
			</p>
			<div class="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-lg">
				<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<p class="text-gray-700">
					Response time: Typically within 1-2 business days
				</p>
			</div>
		</div>
	</div>
</section>
