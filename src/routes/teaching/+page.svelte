<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import SemesterGrid from '$lib/components/SemesterGrid.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { courses, appointments, guestLectures } from '$lib/data/courses';

	const unitCount = new Set(courses.map((c) => c.code)).size;
	const semesterCount = new Set(courses.map((c) => `${c.semester}${c.year}`)).size;
	const firstYear = Math.min(...courses.map((c) => c.year));
</script>

<SEO
	title="Teaching · Yihao Dong"
	description="Teaching at the University of Sydney since 2023: tutorials in HCI, usability engineering and data management, and postgraduate programming, algorithms and mobile computing as an Associate Lecturer."
	path="/teaching"
	page="Teaching"
/>

<section class="wrap pb-16 pt-16 sm:pt-24">
	<p class="eyebrow"><span class="text-accent-ink">03</span> — Teaching</p>
	<h1 class="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)] text-ink">
		Teaching is where I find out whether I understand something.
	</h1>
	<p class="prose-t mt-8 max-w-measure">
		Since {firstYear} I've taught {unitCount} units across {semesterCount} semesters at the University of
		Sydney, starting with database tutorials and now teaching postgraduate programming,
		algorithms and mobile computing as an Associate Lecturer. Most of that time is spent in tutorials and on feedback, which is where the learning
		actually happens.
	</p>
</section>

<!-- Appointments -->
<section class="wrap section pt-0" aria-labelledby="roles-title">
	<SectionHead index="01" label="Roles" />
	<h2 id="roles-title" class="sr-only">Current roles</h2>
	<ul class="mt-8 divide-y divide-line border-b border-line">
		{#each appointments as a, i}
			<li use:reveal={{ delay: i * 60 }} class="grid gap-3 py-6 lg:grid-cols-[14rem_1fr] lg:gap-16">
				<p class="font-mono text-xs uppercase tracking-[0.14em] text-ink-3">{a.period}</p>
				<div>
					<h3 class="text-xl leading-snug text-ink">{a.title}</h3>
					<p class="mt-1 text-[0.9rem] text-ink-3">{a.org}</p>
					<p class="mt-3 max-w-measure text-[0.95rem] leading-relaxed text-ink-2">{a.detail}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<!-- Grid -->
<section class="border-t border-line bg-paper-2/60" aria-labelledby="grid-title">
	<div class="wrap section">
		<SectionHead index="02" label="Every semester" title="The record, semester by semester" />
		<h2 id="grid-title" class="sr-only">Semester grid</h2>
		<p class="mt-6 max-w-measure text-[0.95rem] leading-relaxed text-ink-2">
			One mark per unit per semester, coloured by role. Unit codes link to the University handbook.
		</p>
		<div class="mt-10" use:reveal>
			<SemesterGrid />
		</div>
	</div>
</section>

<!-- Beyond the classroom -->
<section class="border-t border-line" aria-labelledby="beyond-title">
	<div class="wrap section">
		<SectionHead index="03" label="Beyond tutorials" />
		<h2 id="beyond-title" class="sr-only">Guest lectures and mentoring</h2>
		<div class="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
			<div use:reveal>
				<h3 class="eyebrow">Guest lectures</h3>
				<ul class="mt-4 divide-y divide-line border-y border-line">
					{#each guestLectures as g}
						<li class="grid grid-cols-[4rem_1fr] gap-4 py-4">
							<span class="font-mono text-xs tabular text-ink-3">{g.year}</span>
							<div>
								<p class="text-ink">{g.unit}</p>
								<p class="text-[0.88rem] text-ink-3">{g.level}{g.topic ? ` · ${g.topic}` : ''}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div use:reveal={{ delay: 80 }}>
				<h3 class="eyebrow">Mentoring</h3>
				<p class="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
					I work with Honours and undergraduate research students in the aid-lab on VR prototyping,
					experimental design, data collection and running user studies, and I examine Honours projects
					for the School of Computer Science. If you're a student thinking about a project in haptics or
					accessibility, <a href="/contact" class="link">write to me</a>.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Philosophy -->
<section class="border-t border-line" aria-labelledby="phil-title">
	<div class="wrap section">
		<SectionHead index="04" label="How I teach" />
		<h2 id="phil-title" class="sr-only">Teaching philosophy</h2>
		<div class="mt-8 grid gap-8 lg:grid-cols-12">
			<blockquote class="display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight text-ink lg:col-span-9">
				Start from a concrete problem. Let people get stuck for a while, then name the idea that gets
				them out. Give feedback early and often, because that is where most of the learning happens. And
				aim for students who leave knowing how to ask a <em class="italic text-accent-ink">good question</em>,
				not just remembering my answer.
			</blockquote>
		</div>
	</div>
</section>
