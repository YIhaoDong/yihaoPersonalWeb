<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import DotField from '$lib/components/DotField.svelte';
	import Braille from '$lib/components/Braille.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { colourOnArrive } from '$lib/actions/colour';
	import { site } from '$lib/site';
	import { news, formatMonth, isUpcoming } from '$lib/data/news';
	import { publications } from '$lib/data/publications';
	import profileImg from '$lib/assets/home_profileImage.jpeg';
	import tactDeformImg from '$lib/assets/research/tactdeform.jpg';
	import jbtImg from '$lib/assets/research/just-before-touch.jpg';

	const featured = [
		{
			id: 'tactdeform',
			title: 'TactDeform',
			venue: 'CHI ’26',
			img: tactDeformImg,
			alt: 'TactDeform poster: a finger exploring a wireframe teapot while an electrode grid renders faces, edges and corners.',
			lead: 'Finger-pad deformation as a design language for spatial tactile feedback.',
			body: 'Vibration alone cannot convey edges, corners or texture. TactDeform drives a high-density electro-tactile array on the finger pad to emulate how skin deforms against virtual geometry.'
		},
		{
			id: 'just-before-touch',
			title: 'Just Before Touch',
			venue: 'AHs ’25',
			img: jbtImg,
			alt: 'Just Before Touch poster: a controller approaching a ball on a timeline, with a haptic cue 100 milliseconds before visual contact.',
			lead: 'Proactive haptics: a cue that arrives before the contact does.',
			body: 'A vibrotactile pulse fired about 100 ms before visual contact changes what a virtual touch feels like, which opens a cheap way to shape perceived softness in VR.'
		}
	];

	const recent = publications.slice(0, 3);
</script>

<SEO
	title="Yihao Dong · Haptics and sensory augmentation, University of Sydney"
	description="Yihao Dong is a PhD candidate in the aid-lab at the University of Sydney, building haptic interfaces that let people with vision impairment feel the shape of the world around them."
	path="/"
	page="Home"
	type="profile"
/>

<!-- Hero -->
<section
	class="relative flex min-h-[calc(100svh-var(--header-h))] items-end overflow-hidden border-b border-line"
	aria-labelledby="hero-title"
>
	<DotField class="absolute inset-0" />
	<div class="wrap relative pb-14 pt-28 sm:pb-20 sm:pt-36">
		<p class="eyebrow">PhD candidate · {site.lab} · {site.university}</p>
		<h1 id="hero-title" class="display mt-6 text-[clamp(3.6rem,12vw,10.5rem)] text-ink">
			Yihao <em class="italic text-accent-ink">Dong</em>
		</h1>
		<div class="mt-10 grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
			<p class="max-w-measure text-xl leading-snug text-ink-2 sm:text-2xl">
				{site.thesis}
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="/research" class="btn btn-solid">See the research</a>
				<a href={site.cv} target="_blank" rel="noopener" class="btn btn-ghost">CV (PDF)</a>
			</div>
		</div>
		<div class="mt-12 flex flex-wrap items-center gap-4 text-ink">
			<Braille text="touch" size={6} />
			<p class="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">
				“touch”, in Braille
			</p>
		</div>
	</div>
</section>

<!-- 01 News -->
<section class="section" aria-labelledby="news-title">
	<div class="wrap">
		<SectionHead index="01" label="News" />
		<h2 id="news-title" class="sr-only">News</h2>
		<ol class="mt-8 divide-y divide-line border-b border-line">
			{#each news as item, i}
				<li use:reveal={{ delay: Math.min(i * 50, 200) }} class="grid gap-1.5 py-4 sm:grid-cols-[7rem_1fr] sm:gap-8">
					<div class="pt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
						<time datetime={item.date}>{formatMonth(item.date)}</time>
						{#if isUpcoming(item.date)}
							<span class="mt-1 flex items-center gap-1.5 text-accent-ink">
								<span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>Upcoming
							</span>
						{/if}
					</div>
					<p class="prose-t text-[1rem] leading-relaxed">
						{@html item.text}
					</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- 02 Hello -->
<section class="section pt-0" aria-labelledby="hello-title">
	<div class="wrap">
		<SectionHead index="02" label="Hello" />
		<div class="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
			<figure use:reveal class="group relative lg:col-span-5">
				<div class="relative aspect-[4/5] overflow-hidden border border-line bg-paper-2">
					<img
						src={profileImg}
						alt="Yihao Dong, standing against a plain grey background in a dark jacket and glasses."
						width="886"
						height="886"
						class="tint h-full w-full object-cover object-top"
						loading="lazy"
						use:colourOnArrive
					/>
				</div>
				<figcaption class="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">
					Sydney, 2026
				</figcaption>
			</figure>
			<div use:reveal={{ delay: 80 }} class="lg:col-span-7">
				<h2 id="hello-title" class="display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
					I make interfaces you can <em class="italic">feel</em>.
				</h2>
				<div class="prose-t mt-8 max-w-measure">
					<p>
						I'm a PhD candidate in the <a href={site.labUrl} target="_blank" rel="noopener noreferrer">aid-lab</a>
						at the University of Sydney, working with <a href={site.supervisorUrl} target="_blank" rel="noopener noreferrer">{site.supervisor}</a>. My research asks whether touch can
						carry the spatial information that sight usually does: I design wearable haptic interfaces so that
						people with vision impairment can perceive the shape of the space around them, and I run the
						studies that find out whether it works.
					</p>
					<p>
						Before the PhD I finished a double degree in Advanced Computing (Honours Class I) and Commerce,
						which is why I care as much about whether something is <em>usable and worth building</em> as
						about whether it works on the bench.
					</p>
					<p>
						I also teach. Since late 2025 I've been an Associate Lecturer in the School of Computer Science,
						teaching programming, algorithms and mobile computing to postgraduate students.
					</p>
				</div>
				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/about" class="btn btn-ghost">About me</a>
					<a href="/teaching" class="btn btn-ghost">Teaching</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 03 Selected work -->
<section class="section border-t border-line bg-paper-2/60" aria-labelledby="work-title">
	<div class="wrap">
		<SectionHead index="03" label="Selected work" title="Two things you can try">
			{#snippet aside()}
				<a href="/research" class="link text-sm">All research</a>
			{/snippet}
		</SectionHead>
		<h2 id="work-title" class="sr-only">Selected work</h2>

		<div class="mt-12 space-y-16">
			{#each featured as f, i}
				<article use:reveal class="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
					<a
						href="/research#{f.id}"
						class="group press block overflow-hidden border border-line bg-paper lg:col-span-7 {i % 2 ? 'lg:order-2' : ''}"
						aria-label="Try the {f.title} demo"
					>
						<img
							src={f.img}
							alt={f.alt}
							width="1600"
							height="900"
							loading="lazy"
							class="tint aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
							use:colourOnArrive
						/>
					</a>
					<div class="lg:col-span-5 {i % 2 ? 'lg:order-1' : ''}">
						<p class="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">{f.venue} · first author</p>
						<h3 class="display mt-3 text-[clamp(1.9rem,3.5vw,2.6rem)] text-ink">{f.title}</h3>
						<p class="mt-4 text-lg leading-snug text-ink">{f.lead}</p>
						<p class="mt-3 text-[0.98rem] leading-relaxed text-ink-2">{f.body}</p>
						<a href="/research#{f.id}" class="btn btn-solid mt-6">Try the demo</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- 04 Writing -->
<section class="section" aria-labelledby="writing-title">
	<div class="wrap">
		<SectionHead index="04" label="Recent papers">
			{#snippet aside()}
				<a href="/publications" class="link text-sm">All {publications.length} publications</a>
			{/snippet}
		</SectionHead>
		<h2 id="writing-title" class="sr-only">Recent papers</h2>
		<ul class="mt-8 divide-y divide-line border-b border-line">
			{#each recent as pub, i}
				<li use:reveal={{ delay: i * 60 }} class="grid gap-3 py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
					<p class="font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
						{pub.venueShort}
					</p>
					<div>
						<h3 class="text-lg leading-snug text-ink">
							<a href="/publications#pub-{pub.id}" class="link">{pub.title}</a>
						</h3>
						<p class="mt-2 text-[0.95rem] text-ink-2">{pub.teaser}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- 05 Reach -->
<section class="section pt-0" aria-labelledby="reach-title">
	<div class="wrap">
		<SectionHead index="05" label="Reach" />
		<div class="mt-8 grid items-end gap-8 lg:grid-cols-12">
			<h2 id="reach-title" class="display text-[clamp(2.4rem,6vw,5rem)] text-ink lg:col-span-8">
				Working on haptics, accessibility or XR? <em class="italic">Say hello.</em>
			</h2>
			<div class="lg:col-span-4 lg:justify-self-end">
				<a href="mailto:{site.email}" class="link break-all text-lg">{site.email}</a>
				<p class="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-3">
					Or <a href="/contact" class="link">every other way</a>
				</p>
			</div>
		</div>
	</div>
</section>
