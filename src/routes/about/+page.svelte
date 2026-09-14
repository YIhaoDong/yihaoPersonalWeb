<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import Braille from '$lib/components/Braille.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/site';
	import { awards, service } from '$lib/data/awards';
	import { toolbox } from '$lib/data/skills';
	import profileImg from '$lib/assets/card_profileImage.jpeg';

	const path = [
		{ year: '2019', title: 'Started a double degree at the University of Sydney', detail: 'Bachelor of Advanced Computing (Information Systems, Engineering) and Bachelor of Commerce (Business Information Systems).' },
		{ year: '2023', title: 'First tutorials', detail: 'Began tutoring Data and Information Management as a casual academic.' },
		{ year: '2024', title: 'Graduated, Honours Class I', detail: 'Honours in Human-Computer Interaction; Undergraduate High Honour Roll.' },
		{ year: '2024', title: 'PhD begins at the aid-lab', detail: `July. Supervised by ${site.supervisor}, supported by a Faculty of Engineering Research Scholarship.` },
		{ year: '2025', title: 'First first-author paper', detail: 'Just Before Touch at Augmented Humans ’25; CHI ’25 Honorable Mention as co-author; Best Early PhD Project at the School showcase.' },
		{ year: '2025', title: 'Associate Lecturer', detail: 'October. PhD Teaching Fellow, teaching COMP9001 and COMP9123.' },
		{ year: '2026', title: 'Two papers at CHI ’26', detail: 'TactDeform (first author) and SRL Proxemics, presented in Barcelona.' },
		{ year: '2028', title: 'PhD, expected', detail: 'July.' }
	];
</script>

<SEO
	title="About · Yihao Dong"
	description="Yihao Dong: PhD candidate in HCI at the University of Sydney, with a background in Advanced Computing and Commerce, researching haptics and sensory augmentation."
	path="/about"
	page="About"
/>

<section class="wrap pb-16 pt-16 sm:pt-24">
	<p class="eyebrow"><span class="text-accent-ink">04</span> — About</p>
	<div class="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-16">
		<div class="lg:col-span-7">
			<h1 class="display text-[clamp(2.6rem,7vw,5.6rem)] text-ink">
				Yihao Dong, <em class="italic">in a few paragraphs</em>
			</h1>
			<div class="prose-t mt-10 max-w-measure">
				<p>
					I grew up speaking Mandarin and now live and work in Sydney, where I've spent the better part
					of a decade at the University of Sydney: first as an undergraduate juggling a computing degree
					with a commerce one, then as a tutor, and since July 2024 as a PhD candidate in the
					<a href={site.labUrl} target="_blank" rel="noopener noreferrer">aid-lab</a> with <a href={site.supervisorUrl} target="_blank" rel="noopener noreferrer">{site.supervisor}</a>.
				</p>
				<p>
					My research is about <em>touch as a channel for spatial information</em>. Sighted people take in
					the layout of a room in a glance; I'm interested in what a wearable haptic interface would have
					to do to offer something comparable to someone who cannot see, and in the perceptual questions
					underneath that: how skin encodes shape, how early a cue can arrive and still feel like part of
					a touch, and how much of this the brain will learn to use.
				</p>
				<p>
					The commerce half of my degree shows up more than I expected. I care about whether a thing is
					usable and worth building, not only whether it works, and I like the parts of research that
					involve sitting with people and finding out what they need.
				</p>
			</div>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href={site.cv} target="_blank" rel="noopener" class="btn btn-solid">CV (PDF)</a>
				<a href="/contact" class="btn btn-ghost">Get in touch</a>
			</div>
		</div>
		<figure class="lg:col-span-4 lg:col-start-9" use:reveal>
			<div class="aspect-[4/5] overflow-hidden border border-line bg-paper-2">
				<img
					src={profileImg}
					alt="Portrait of Yihao Dong."
					width="1772"
					height="1772"
					class="h-full w-full object-cover object-top"
					loading="eager"
				/>
			</div>
			<figcaption class="mt-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">
				<span>Sydney · 2026</span>
				<span class="flex items-center gap-2 text-ink">
					<Braille text="hello" size={4} />
					<span>“hello”</span>
				</span>
			</figcaption>
		</figure>
	</div>
</section>

<!-- Path -->
<section class="border-t border-line bg-paper-2/60" aria-labelledby="path-title">
	<div class="wrap section">
		<SectionHead index="01" label="The path" />
		<h2 id="path-title" class="sr-only">Timeline</h2>
		<ol class="mt-10 border-l border-line">
			{#each path as step, i}
				<li use:reveal={{ delay: Math.min(i * 40, 200) }} class="relative grid gap-2 py-5 pl-8 sm:grid-cols-[6rem_1fr] sm:gap-8">
					<span
						class="absolute -left-[5px] top-[1.75rem] h-[9px] w-[9px] rounded-full {i === path.length - 1 ? 'border-2 border-accent bg-paper' : 'bg-accent'}"
						aria-hidden="true"
					></span>
					<p class="display text-2xl text-ink">{step.year}</p>
					<div>
						<h3 class="text-lg leading-snug text-ink">{step.title}</h3>
						<p class="mt-1 max-w-measure text-[0.95rem] leading-relaxed text-ink-2">{step.detail}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Awards & service -->
<section class="border-t border-line" aria-labelledby="awards-title">
	<div class="wrap section">
		<SectionHead index="02" label="Recognition & service" />
		<h2 id="awards-title" class="sr-only">Awards and service</h2>
		<div class="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
			<div use:reveal>
				<h3 class="eyebrow">Awards</h3>
				<ul class="mt-4 divide-y divide-line border-y border-line">
					{#each awards as a}
						<li class="grid grid-cols-[5rem_1fr] gap-4 py-4">
							<span class="font-mono text-xs tabular text-ink-3">{a.year}</span>
							<div>
								<p class="text-ink">{a.title}</p>
								<p class="text-[0.88rem] text-ink-3">{a.detail}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div use:reveal={{ delay: 80 }}>
				<h3 class="eyebrow">Service</h3>
				<ul class="mt-4 divide-y divide-line border-y border-line">
					{#each service as s}
						<li class="py-4">
							<p class="text-ink">{s.role}</p>
							<p class="text-[0.88rem] text-ink-3">{s.where}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Toolbox -->
<section class="border-t border-line" aria-labelledby="tools-title">
	<div class="wrap section">
		<SectionHead index="03" label="Toolbox" />
		<h2 id="tools-title" class="sr-only">Skills and tools</h2>
		<div class="mt-10 grid gap-10 md:grid-cols-3">
			{#each toolbox as group, i}
				<div use:reveal={{ delay: i * 60 }}>
					<h3 class="display text-2xl text-ink">{group.label}</h3>
					<ul class="mt-4 space-y-2 border-t border-line pt-4">
						{#each group.items as item}
							<li class="text-[0.95rem] text-ink-2">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<p class="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
			Languages · English · Mandarin Chinese
		</p>
	</div>
</section>
