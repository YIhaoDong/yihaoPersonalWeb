<script lang="ts">
	let isMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/research', label: 'Research' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/teaching', label: 'Teaching' },
		// { href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
	<nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo/Name -->
			<a href="/" class="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
				Yihao Dong
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if isMenuOpen}
			<div class="md:hidden pb-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
						onclick={toggleMenu}
					>
						{link.label}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>
