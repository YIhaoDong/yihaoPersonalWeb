<script lang="ts">
	function generateVCard(): string {
		const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Yihao Dong
N:Dong;Yihao;;;
TITLE:PhD Candidate in Human-Computer Interaction
ORG:University of Sydney
EMAIL;TYPE=INTERNET:yihao.dong@sydney.edu.au
TEL;TYPE=CELL:+61478092618
ADR;TYPE=WORK:;;School of Computer Science, University of Sydney, 1 Cleveland St;Sydney;NSW;2008;Australia
URL:https://scholar.google.com/citations?user=y9KUBZAAAAAJ
URL:https://www.linkedin.com/in/yihao-dong/
URL:https://orcid.org/0009-0009-0719-3670
URL:https://www.researchgate.net/scientific-contributions/Yihao-Dong-2311639364
URL:https://dl.acm.org/profile/99661566898
NOTE:PhD Candidate researching Extended Reality and predictive hand gesture tracking at the University of Sydney.
END:VCARD`;
		return vCard;
	}

	function downloadVCard() {
		const vCard = generateVCard();
		const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'Yihao_Dong.vcf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
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
			value: 'School of Computer Science, University of Sydney<br>1 Cleveland St Sydney NSW 2008',
			href: 'https://maps.apple/p/5xitdGQSXAHeCZ'
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
	<div class="max-w-4xl mx-auto">
		<!-- Contact Information -->
		<div>
			<h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>
			<p class="text-gray-700 mb-8 leading-relaxed text-center max-w-2xl mx-auto">
				Feel free to reach out through any of the following channels. I typically respond within
				1-2 business days.
			</p>

			<!-- Quick Action Button -->
			<div class="mb-12 flex justify-center">
				<button
					onclick={downloadVCard}
					class="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0l-4-4m4 4l4-4" />
					</svg>
					<span>Download Contact Card</span>
				</button>
			</div>

			<!-- Contact Details -->
			<div class="space-y-6 mb-12 max-w-2xl mx-auto">
				{#each contactInfo as info}
					<div class="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={info.icon} />
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900 mb-1">{info.label}</h3>
							{#if info.href}
								<a href={info.href} class="text-blue-600 hover:text-blue-700 transition-colors">
									{@html info.value}
								</a>
							{:else}
								<p class="text-gray-600">{@html info.value}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- Academic Profiles -->
			<div class="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
				<h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Academic Profiles</h3>
				<div class="space-y-3">
					{#each academicProfiles as profile}
						{#if profile.available}
							<a
								href={profile.href}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
							>
								<span class="text-gray-700 font-medium">{profile.name}</span>
								<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</a>
						{:else}
							<div class="flex items-center justify-between p-4 bg-white rounded-lg opacity-60">
								<span class="text-gray-500 font-medium">{profile.name}</span>
								<span class="text-xs text-gray-400">Coming Soon</span>
							</div>
						{/if}
					{/each}
				</div>
			</div>
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
		</div>
	</div>
</section>
