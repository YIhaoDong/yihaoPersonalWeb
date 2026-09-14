<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Mark from '$lib/components/Mark.svelte';
	import { site, downloadVCard } from '$lib/site';
	import profileImg from '$lib/assets/card_profileImage.jpeg';

	const explore = [
		{ label: 'Research', href: '/research' },
		{ label: 'Papers', href: '/publications' },
		{ label: 'Teaching', href: '/teaching' }
	];
</script>

<SEO
	title="Yihao Dong · Contact card"
	description="Digital contact card for Yihao Dong, PhD Candidate in Human-Computer Interaction at the University of Sydney. Save the details to your device."
	path="/card"
	page="Contact card"
	type="profile"
/>

<div class="dotgrid min-h-screen px-4 py-8 sm:py-14">
	<div class="mx-auto max-w-md border border-line bg-paper">
		<div class="flex items-center justify-between border-b border-line px-6 py-4">
			<a href="/" class="flex items-center gap-2 text-ink" aria-label="Yihao Dong, home">
				<Mark size={18} />
				<span class="display-italic text-lg">Yihao Dong</span>
			</a>
			<span class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-3">Contact card</span>
		</div>

		<div class="px-6 pt-8">
			<div class="mx-auto h-28 w-28 overflow-hidden rounded-full border border-line bg-paper-2">
				<img src={profileImg} alt="Portrait of Yihao Dong" class="h-full w-full object-cover object-top" width="1772" height="1772" />
			</div>
			<h1 class="display mt-6 text-center text-4xl text-ink">Yihao Dong</h1>
			<p class="mt-2 text-center text-[0.95rem] text-ink-2">{site.role}</p>
			<p class="text-center font-mono text-xs text-ink-3">{site.lab} · {site.university}</p>
		</div>

		<div class="grid gap-2 px-6 pt-7">
			<button type="button" class="btn btn-solid justify-center" onclick={downloadVCard}>Save contact</button>
			<a href="/" class="btn btn-ghost justify-center">Visit the website</a>
			<a href={site.profiles.find((p) => p.name === 'LinkedIn')?.href} target="_blank" rel="noopener noreferrer" class="btn btn-ghost justify-center">LinkedIn</a>
		</div>

		<dl class="mt-8 divide-y divide-line border-y border-line px-6">
			<div class="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5">
				<dt class="eyebrow pt-0.5">Email</dt>
				<dd><a href="mailto:{site.email}" class="link break-all text-[0.95rem]">{site.email}</a></dd>
			</div>
			<div class="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5">
				<dt class="eyebrow pt-0.5">Phone</dt>
				<dd><a href="tel:{site.phoneTel}" class="link text-[0.95rem]">{site.phone}</a></dd>
			</div>
			<div class="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5">
				<dt class="eyebrow pt-0.5">Office</dt>
				<dd class="text-[0.95rem] text-ink-2">
					{#each site.address.lines as l}<span class="block">{l}</span>{/each}
				</dd>
			</div>
		</dl>

		<div class="px-6 py-6">
			<p class="eyebrow">Explore</p>
			<div class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
				{#each explore as e}
					<a href={e.href} class="link text-[0.95rem]">{e.label}</a>
				{/each}
			</div>
			<p class="eyebrow mt-6">Profiles</p>
			<div class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
				{#each site.profiles.filter((p) => p.name !== 'LinkedIn') as p}
					<a href={p.href} target="_blank" rel="noopener noreferrer" class="link text-[0.95rem]">{p.name}</a>
				{/each}
			</div>
		</div>

		<p class="border-t border-line px-6 py-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-3">
			Save contact downloads a .vcf you can open in your contacts app.
		</p>
	</div>
</div>
