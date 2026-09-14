<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import Clock from '$lib/components/Clock.svelte';
	import Braille from '$lib/components/Braille.svelte';
	import { site, downloadVCard } from '$lib/site';

	const channels = [
		{ label: 'Email', value: site.email, href: `mailto:${site.email}`, note: 'Best for anything that needs a real answer.' },
		{ label: 'Phone', value: site.phone, href: `tel:${site.phoneTel}`, note: 'Sydney hours.' },
		{ label: 'Office', value: site.address.lines.slice(0, 3).join(', '), href: site.address.map, note: 'School of Computer Science, Darlington campus.', external: true }
	];
</script>

<SEO
	title="Contact · Yihao Dong"
	description="Write to Yihao Dong about haptics, accessibility, sensory augmentation or XR research, student projects in the aid-lab, or collaboration."
	path="/contact"
	page="Contact"
/>

<section class="wrap pb-16 pt-16 sm:pt-24">
	<p class="eyebrow"><span class="text-accent-ink">05</span> — Contact</p>
	<h1 class="display mt-6 text-[clamp(2.6rem,7vw,5.6rem)] text-ink">Say <em class="italic text-accent-ink">hello</em>.</h1>
	<div class="mt-10 grid gap-10 lg:grid-cols-12">
		<div class="prose-t lg:col-span-7">
			<p>
				Write to me about haptics, accessibility, sensory augmentation or XR, about a paper of mine you
				have questions on, or if you're a student thinking about a project in the aid-lab. I read
				everything and usually reply within one or two working days.
			</p>
			<p>
				It is currently <Clock class="text-ink" /> in Sydney, which is where I am.
			</p>
		</div>
		<div class="lg:col-span-4 lg:col-start-9">
			<button type="button" class="btn btn-solid w-full justify-center sm:w-auto" onclick={downloadVCard}>
				Save my contact card
			</button>
			<p class="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">
				.vcf · works with iPhone, Android and Outlook
			</p>
		</div>
	</div>
</section>

<section class="wrap section pt-0" aria-labelledby="channels-title">
	<SectionHead index="01" label="Channels" />
	<h2 id="channels-title" class="sr-only">Contact channels</h2>
	<ul class="mt-6 divide-y divide-line border-b border-line">
		{#each channels as c}
			<li class="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
				<p class="eyebrow pt-1.5">{c.label}</p>
				<div>
					<a
						href={c.href}
						class="link text-lg"
						target={c.external ? '_blank' : undefined}
						rel={c.external ? 'noopener noreferrer' : undefined}>{c.value}</a
					>
					<p class="mt-1 text-[0.9rem] text-ink-3">{c.note}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<section class="wrap section pt-0" aria-labelledby="profiles-title">
	<SectionHead index="02" label="Profiles" />
	<h2 id="profiles-title" class="sr-only">Academic profiles</h2>
	<ul class="mt-6 grid gap-x-10 sm:grid-cols-2">
		{#each site.profiles as p}
			<li class="border-b border-line">
				<a
					href={p.href}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-between py-4 text-ink transition-colors hover:text-accent-ink"
				>
					<span>{p.name}</span>
					<span class="font-mono text-xs text-ink-3 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-ink">
		<Braille text="thanks" size={5} />
		<span class="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">“thanks”, for reading this far</span>
	</div>
</section>
