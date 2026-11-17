<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import TactDeformDemo from '$lib/components/demos/TactDeformDemo.svelte';
	import JustBeforeTouchDemo from '$lib/components/demos/JustBeforeTouchDemo.svelte';
	import Braille from '$lib/components/Braille.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { publications } from '$lib/data/publications';
	import { researchInterests } from '$lib/data/skills';
	import { site } from '$lib/site';

	const tactdeform = publications.find((p) => p.project === 'tactdeform')!;
	const jbt = publications.find((p) => p.project === 'just-before-touch')!;

	const objectives = [
		'Design haptic metaphors that communicate spatial information intuitively.',
		'Build wearable sensory-augmentation systems that survive real-world navigation.',
		'Measure how people adapt to sensory substitution over time, not just in a first session.',
		'Turn the findings into design guidelines for accessible multisensory interfaces.'
	];
	const methods = [
		'User-centred design with the vision-impairment community.',
		'Qualitative interviews and field studies.',
		'Iterative prototyping of wearable haptic hardware.',
		'Quantitative evaluation of spatial awareness and navigation performance.'
	];
</script>

<SEO
	title="Research · Yihao Dong"
	description="Haptics, sensory augmentation and assistive technology for people with vision impairment. Try interactive sketches of TactDeform and Just Before Touch."
	path="/research"
	page="Research"
/>

<!-- Title -->
<section class="wrap pb-16 pt-16 sm:pt-24">
	<p class="eyebrow"><span class="text-accent-ink">01</span> — Research</p>
	<h1 class="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)] text-ink">
		Can touch carry what sight usually does?
	</h1>
	<div class="mt-10 grid gap-8 lg:grid-cols-12">
		<p class="prose-t lg:col-span-7">
			That is the question my PhD keeps returning to. People with vision impairment build a
			picture of a room from sound, memory and the tip of a cane. I want to add a channel: wearable
			haptic interfaces that render the <em>shape</em> of nearby space on the skin, clearly enough to
			act on and quietly enough to wear all day. Getting there runs through skin mechanics, wearable
			hardware and a great many user studies.
		</p>
		<div class="lg:col-span-4 lg:col-start-9">
			<dl class="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5 text-sm">
				<div>
					<dt class="eyebrow">Lab</dt>
					<dd class="mt-1 text-ink"><a href={site.labUrl} class="link" target="_blank" rel="noopener noreferrer">{site.lab}</a></dd>
				</div>
				<div>
					<dt class="eyebrow">Supervisor</dt>
					<dd class="mt-1 text-ink"><a href={site.supervisorUrl} target="_blank" rel="noopener noreferrer" class="link">{site.supervisor}</a></dd>
				</div>
				<div>
					<dt class="eyebrow">Started</dt>
					<dd class="mt-1 text-ink">July 2024</dd>
				</div>
				<div>
					<dt class="eyebrow">Expected</dt>
					<dd class="mt-1 text-ink">July 2028</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!-- Thesis -->
<section class="wrap section pt-0" aria-labelledby="thesis-title">
	<SectionHead index="02" label="The thesis" />
	<div class="split mt-10">
		<div>
			<h2 id="thesis-title" class="display text-[1.75rem] leading-tight text-ink">
				Sensory augmentation for vision impairment through haptics
			</h2>
			<div class="mt-6 flex items-center gap-3 text-ink">
				<Braille text="shape" size={5} />
				<span class="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">“shape”</span>
			</div>
		</div>
		<div class="grid gap-10 sm:grid-cols-2">
			<div use:reveal>
				<h3 class="eyebrow">What I'm trying to do</h3>
				<ol class="mt-4 space-y-3">
					{#each objectives as o, i}
						<li class="grid grid-cols-[1.6rem_1fr] gap-2 text-[0.95rem] leading-relaxed text-ink-2">
							<span class="font-mono text-xs text-accent-ink">0{i + 1}</span>
							<span>{o}</span>
						</li>
					{/each}
				</ol>
			</div>
			<div use:reveal={{ delay: 80 }}>
				<h3 class="eyebrow">How</h3>
				<ul class="mt-4 space-y-3">
					{#each methods as m}
						<li class="grid grid-cols-[1.6rem_1fr] gap-2 text-[0.95rem] leading-relaxed text-ink-2">
							<span class="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-accent"></span>
							<span>{m}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- TactDeform -->
<section id="tactdeform" class="scroll-mt-24 border-t border-line bg-paper-2/60" aria-labelledby="td-title">
	<div class="wrap section">
		<SectionHead index="03" label="Project">
			{#snippet aside()}
				<a href="/publications#pub-{tactdeform.id}" class="link text-sm">{tactdeform.venueShort} · paper</a>
			{/snippet}
		</SectionHead>
		<div class="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
			<div class="lg:col-span-5">
				<h2 id="td-title" class="display text-[clamp(2.2rem,5vw,3.6rem)] text-ink">TactDeform</h2>
				<p class="mt-3 text-lg leading-snug text-ink">Finger-pad deformation as a design language for spatial tactile feedback.</p>
				<div class="prose-t mt-6">
					<p>
						When you run a finger over a cube, your skin does different things at a face, an edge and a
						corner. Vibration motors flatten all of that into a buzz. TactDeform parametrically emulates
						the <em>deformation</em> of the finger pad on a high-density electro-tactile array, so virtual
						geometry can be explored by touch: faces spread, edges draw a line that widens, corners stay
						sharp, and textures slide past in 2 mm steps.
					</p>
					<p>
						Try it. Pick a feature, then press in or slide along.
					</p>
				</div>
				<p class="mt-6 text-sm text-ink-2">{tactdeform.authors}</p>
				<div class="mt-5 flex flex-wrap gap-3">
					<a href="https://doi.org/{tactdeform.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-solid">Read the paper</a>
					<a href="/publications#pub-{tactdeform.id}" class="btn btn-ghost">Cite</a>
				</div>
			</div>
			<div class="lg:col-span-7" use:reveal>
				<TactDeformDemo />
			</div>
		</div>
	</div>
</section>

<!-- Just Before Touch -->
<section id="just-before-touch" class="scroll-mt-24 border-t border-line" aria-labelledby="jbt-title">
	<div class="wrap section">
		<SectionHead index="04" label="Project">
			{#snippet aside()}
				<a href="/publications#pub-{jbt.id}" class="link text-sm">{jbt.venueShort} · paper</a>
			{/snippet}
		</SectionHead>
		<div class="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
			<div class="lg:order-2 lg:col-span-5">
				<h2 id="jbt-title" class="display text-[clamp(2.2rem,5vw,3.6rem)] text-ink">Just Before Touch</h2>
				<p class="mt-3 text-lg leading-snug text-ink">Proactive haptics: a cue that arrives before the contact does.</p>
				<div class="prose-t mt-6">
					<p>
						Haptic feedback in VR is almost always reactive: you touch, then you feel. We asked what
						happens if the vibration arrives a little <em>early</em>. A short vibrotactile cue about 100 ms
						before visual contact, with the right amplitude envelope, changes the perceived material of the
						contact. It is a cheap, actuator-free way to widen the range of sensations a controller can give.
					</p>
					<p>Set the lead time and the envelope, then play. On phones that support it, the cue really vibrates.</p>
				</div>
				<p class="mt-6 text-sm text-ink-2">{jbt.authors}</p>
				<div class="mt-5 flex flex-wrap gap-3">
					<a href="https://doi.org/{jbt.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-solid">Read the paper</a>
					{#if jbt.code}
						<a href={jbt.code} target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Code</a>
					{/if}
				</div>
			</div>
			<div class="lg:order-1 lg:col-span-7" use:reveal>
				<JustBeforeTouchDemo />
			</div>
		</div>
	</div>
</section>

<!-- Interests -->
<section class="border-t border-line" aria-labelledby="interests-title">
	<div class="wrap section">
		<SectionHead index="05" label="Interests" />
		<h2 id="interests-title" class="sr-only">Research interests</h2>
		<p class="display mt-8 max-w-5xl text-[clamp(1.5rem,3.4vw,2.6rem)] leading-tight text-ink">
			{#each researchInterests as ri, i}
				<span>{ri}</span>{#if i < researchInterests.length - 1}<span class="mx-3 text-accent" aria-hidden="true">·</span>{/if}
			{/each}
		</p>
		<div class="mt-10 flex flex-wrap items-center gap-4">
			<a href="/publications" class="btn btn-solid">All publications</a>
			<a href="/contact" class="link text-sm">Interested in collaborating?</a>
		</div>
	</div>
</section>
