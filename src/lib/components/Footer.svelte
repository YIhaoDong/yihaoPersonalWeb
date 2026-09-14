<script lang="ts">
	import { site } from '$lib/site';
	import Mark from './Mark.svelte';
	import Clock from './Clock.svelte';

	const year = new Date().getFullYear();

	const explore = [
		{ label: 'Research', href: '/research' },
		{ label: 'Publications', href: '/publications' },
		{ label: 'Teaching', href: '/teaching' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'CV (PDF)', href: site.cv, external: true }
	];
</script>

<footer class="mt-24 border-t border-line">
	<div class="wrap py-14">
		<div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
			<div>
				<a href="/" class="inline-flex items-center gap-3 text-ink">
					<Mark />
					<span class="display-italic text-2xl">Yihao Dong</span>
				</a>
				<p class="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-2">
					PhD candidate in the aid-lab, School of Computer Science, The University of Sydney.
					Haptics and sensory augmentation for people with vision impairment.
				</p>
				<p class="mt-5 font-mono text-xs text-ink-3">
					<Clock /> Sydney time
				</p>
			</div>

			<div>
				<h2 class="eyebrow">Explore</h2>
				<ul class="mt-4 space-y-2.5">
					{#each explore as l}
						<li>
							<a
								href={l.href}
								class="link-quiet text-[0.95rem]"
								target={l.external ? '_blank' : undefined}
								rel={l.external ? 'noopener' : undefined}>{l.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h2 class="eyebrow">Elsewhere</h2>
				<ul class="mt-4 space-y-2.5">
					<li>
						<a href="mailto:{site.email}" class="link-quiet break-all text-[0.95rem]">{site.email}</a>
					</li>
					{#each site.profiles as p}
						<li>
							<a href={p.href} class="link-quiet text-[0.95rem]" target="_blank" rel="noopener noreferrer">{p.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div
			class="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} Yihao Dong</p>
			<p>Updated {site.lastUpdated}</p>
			<p>Set in Fraunces, Instrument Sans &amp; Plex Mono</p>
		</div>
	</div>
</footer>
