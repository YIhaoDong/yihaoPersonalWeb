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
</script>

<svelte:head>
	<title>Yihao Dong - Contact Card</title>
	<meta name="description" content="Save Yihao Dong's contact information to your device" />
	<meta property="og:title" content="Yihao Dong - Contact Card" />
	<meta property="og:description" content="PhD Candidate in Human-Computer Interaction at University of Sydney" />
	<meta property="og:type" content="profile" />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-12 min-h-screen flex items-center">
	<div class="section-container w-full">
		<div class="max-w-2xl mx-auto">
			<!-- Contact Preview Card -->
			<div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
				<!-- Profile Header -->
				<div class="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-12 text-center">
					<div class="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center text-5xl font-bold text-blue-600">
						YD
					</div>
					<h1 class="text-3xl font-bold text-white mb-2">Yihao Dong</h1>
					<p class="text-blue-100 text-lg">PhD Candidate in Human-Computer Interaction</p>
					<p class="text-blue-100 mt-1">University of Sydney</p>
				</div>

				<!-- Contact Information -->
				<div class="px-8 py-8 space-y-6">
					<!-- Email -->
					<div class="flex items-start space-x-4">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</h3>
							<a href="mailto:yihao.dong@sydney.edu.au" class="text-gray-900 hover:text-blue-600 transition-colors">
								yihao.dong@sydney.edu.au
							</a>
						</div>
					</div>

					<!-- Phone -->
					<div class="flex items-start space-x-4">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</h3>
							<a href="tel:+61478092618" class="text-gray-900 hover:text-blue-600 transition-colors">
								+61 478 092 618
							</a>
						</div>
					</div>

					<!-- Location -->
					<div class="flex items-start space-x-4">
						<div class="bg-blue-100 p-3 rounded-lg flex-shrink-0">
							<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Location</h3>
							<p class="text-gray-900">School of Computer Science</p>
							<p class="text-gray-900">University of Sydney</p>
							<p class="text-gray-600 text-sm">1 Cleveland St</p>
							<p class="text-gray-600 text-sm">Sydney NSW 2008</p>
							<p class="text-gray-600 text-sm">Australia</p>
						</div>
					</div>

					<!-- Academic Profiles Preview -->
					<div class="pt-4 border-t border-gray-200">
						<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Academic Profiles</h3>
						<div class="flex flex-wrap gap-2">
							<a href="https://scholar.google.com/citations?user=y9KUBZAAAAAJ" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
								Google Scholar
							</a>
							<a href="https://www.linkedin.com/in/yihao-dong/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
								LinkedIn
							</a>
							<a href="https://orcid.org/0009-0009-0719-3670" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
								ORCID
							</a>
							<a href="https://www.researchgate.net/scientific-contributions/Yihao-Dong-2311639364" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
								ResearchGate
							</a>
							<a href="https://dl.acm.org/profile/99661566898" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
								ACM Digital Library
							</a>
						</div>
					</div>
				</div>

				<!-- Action Button -->
				<div class="px-8 pb-8">
					<button
						onclick={downloadVCard}
						class="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0l-4-4m4 4l4-4" />
						</svg>
						<span>Download Contact Card</span>
					</button>
				</div>
			</div>

			<!-- Instructions -->
			<div class="mt-8 bg-blue-50 rounded-lg p-6">
				<h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center">
					<svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					How to Save Contact
				</h3>
				<ul class="space-y-2 text-gray-700">
					<li class="flex items-start">
						<span class="font-bold mr-2">1.</span>
						<span>Click "Download Contact Card" button above</span>
					</li>
					<li class="flex items-start">
						<span class="font-bold mr-2">2.</span>
						<span>A vCard file (Yihao_Dong.vcf) will be downloaded</span>
					</li>
					<li class="flex items-start">
						<span class="font-bold mr-2">3.</span>
						<span>Open the file to import the contact into your device's contacts app</span>
					</li>
					<li class="flex items-start">
						<span class="font-bold mr-2">4.</span>
						<span>Works with iPhone, Android, Outlook, Gmail, and most contact applications</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
