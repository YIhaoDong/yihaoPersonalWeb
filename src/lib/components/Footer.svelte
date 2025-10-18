<script lang="ts">
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: 'Email', href: 'mailto:yihao.dong@sydney.edu.au', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
		{ name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=y9KUBZAAAAAJ', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
		{ name: 'ResearchGate', href: 'https://www.researchgate.net/scientific-contributions/Yihao-Dong-2311639364', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/yihao-dong/', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
		{ name: 'ORCID', href: 'https://orcid.org/0009-0009-0719-3670', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 4h1.5v1.5h-1.5V6zm0 3h5v1.5h-5V9zm0 3h5v1.5h-5v-1.5zm0 3h5v1.5h-5V15z' }
	];

	const quickLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Research', href: '/research' },
		{ label: 'Publications', href: '/publications' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<footer class="bg-gray-900 text-gray-300 mt-20">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- About Section -->
			<div>
				<h3 class="text-white text-lg font-bold mb-4">Yihao Dong</h3>
				<p class="text-sm">
					PhD Candidate in Human-Computer Interaction at the University of Sydney.
					Researching Extended Reality and predictive hand gesture tracking.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-white text-lg font-bold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each quickLinks as link}
						<li>
							<a href={link.href} class="text-sm hover:text-blue-400 transition-colors">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact & Social -->
			<div>
				<h3 class="text-white text-lg font-bold mb-4">Connect</h3>
				<div class="flex space-x-4 mb-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							class="hover:text-blue-400 transition-colors"
							aria-label={social.name}
							title={social.name}
						>
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d={social.icon} />
							</svg>
						</a>
					{/each}
				</div>
				<p class="text-sm">yihao.dong@sydney.edu.au</p>
				<p class="text-sm">Sydney, NSW 2000</p>
			</div>
		</div>

		<div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
			<p>&copy; {currentYear} Yihao Dong. All rights reserved.</p>
			<p class="mt-2 text-gray-500">Last updated: October 2025</p>
		</div>
	</div>
</footer>
