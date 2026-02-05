<script lang="ts">
	import profileImg from '$lib/assets/card_profileImage.jpeg';

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
				<div class="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-10 text-center relative">
					<div class="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
						<img src={profileImg} alt="Yihao Dong" class="w-full h-full object-cover" />
					</div>
					<h1 class="text-3xl font-bold text-white mb-1">Yihao Dong</h1>
					<p class="text-blue-100 text-sm font-medium">PhD Candidate @ University of Sydney</p>
					
					<div class="mt-6 flex flex-col gap-3 max-w-xs mx-auto">
						<a href="/" class="w-full bg-white text-blue-600 px-4 py-3 rounded-full text-sm font-bold shadow-md hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
							Visit My Full Website
						</a>
						<a 
							href="https://www.linkedin.com/in/yihao-dong/" 
							target="_blank" 
							rel="noopener noreferrer"
							class="w-full bg-[#0077b5] text-white px-4 py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#006396] transition-all flex items-center justify-center gap-2"
						>
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
							</svg>
							Connect on LinkedIn
						</a>
					</div>
				</div>

				<!-- Explore Section -->
				<div class="px-8 pt-8 pb-6 border-b border-gray-100">
					<h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">Explore My Work</h3>
					<div class="grid grid-cols-3 gap-3">
						<a href="/research" class="flex flex-col items-center p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group">
							<div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
								<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.34a2 2 0 01-1.783 0l-.691-.34a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.691-.34a2 2 0 011.783 0l.691.34a6 6 0 003.86.517l2.387-.477a2 2 0 001.022-.547l1.16-1.16a2 2 0 000-2.828l-1.16-1.16z" />
								</svg>
							</div>
							<span class="text-[10px] font-bold text-blue-700 uppercase tracking-tight">Research</span>
						</a>
						<a href="/publications" class="flex flex-col items-center p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors group">
							<div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
								<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<span class="text-[10px] font-bold text-indigo-700 uppercase tracking-tight">Papers</span>
						</a>
						<a href="/teaching" class="flex flex-col items-center p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group">
							<div class="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
								<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
								</svg>
							</div>
							<span class="text-[10px] font-bold text-green-700 uppercase tracking-tight">Teaching</span>
						</a>
					</div>
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
