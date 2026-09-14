<script lang="ts">
	import { page } from '$app/state';
	import Mark from './Mark.svelte';

	let open = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();

	const nav = [
		{ href: '/research', label: 'Research' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/teaching', label: 'Teaching' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		const p = page.url.pathname;
		return p === href || p.startsWith(href + '/');
	}

	// Close the menu whenever the route changes.
	$effect(() => {
		void page.url.pathname;
		open = false;
	});

	// Lock background scroll while the mobile menu is open.
	$effect(() => {
		if (typeof document === 'undefined') return;
		document.documentElement.classList.toggle('overflow-hidden', open);
		return () => document.documentElement.classList.remove('overflow-hidden');
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			menuButton?.focus();
		}
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header
	class="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70"
	style="height: var(--header-h)"
>
	<nav aria-label="Primary" class="wrap flex h-full items-center justify-between gap-6">
		<a
			href="/"
			class="group flex items-center gap-3 font-display text-[1.35rem] leading-none text-ink"
			aria-label="Yihao Dong, home"
		>
			<Mark morph />
			<span class="display-italic">Yihao Dong</span>
		</a>

		<ul class="hidden items-center gap-7 md:flex">
			{#each nav as item}
				<li>
					<a
						href={item.href}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="relative py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-ink"
					>
						{item.label}
						{#if isActive(item.href)}
							<span
								class="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
								aria-hidden="true"
							></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<button
				bind:this={menuButton}
				type="button"
				class="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2 md:hidden"
				onclick={() => (open = !open)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				aria-controls="mobile-menu"
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M4 8h16M4 16h16" />
					{/if}
				</svg>
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div
		id="mobile-menu"
		class="dotgrid fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-paper md:hidden"
		style="top: var(--header-h)"
	>
		<ul class="wrap flex flex-col py-8">
			{#each nav as item, i}
				<li class="border-b border-line">
					<a
						href={item.href}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="flex items-baseline justify-between py-5 text-ink"
					>
						<span class="display text-[2.4rem]">{item.label}</span>
						<span class="font-mono text-xs text-ink-3">0{i + 1}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
