<script lang="ts">
	/**
	 * Every semester taught, as a grid: columns are semesters, rows are
	 * units, and the mark in each cell encodes the role. Rendered as a real
	 * table so the same information reads well with a screen reader.
	 */
	import { courses, roleMeta, type Role } from '$lib/data/courses';

	interface Sem {
		year: number;
		s: 'S1' | 'S2';
		key: string;
	}

	// Build the continuous list of semesters between the first and last taught.
	const ordered = [...courses].sort((a, b) => a.year - b.year || a.semester.localeCompare(b.semester));
	const first = ordered[0];
	const last = ordered[ordered.length - 1];
	const semesters: Sem[] = [];
	for (let y = first.year; y <= last.year; y++) {
		for (const s of ['S1', 'S2'] as const) {
			if (y === first.year && s < first.semester) continue;
			if (y === last.year && s > last.semester) continue;
			semesters.push({ year: y, s, key: `${s} ${y}` });
		}
	}

	// Rows: unique units, ordered by first appearance (earliest first), with
	// the most senior role reached shown in the row label.
	const units = new Map<string, { code: string; name: string; firstIndex: number }>();
	for (const c of ordered) {
		if (!units.has(c.code)) {
			units.set(c.code, {
				code: c.code,
				name: c.name,
				firstIndex: semesters.findIndex((s) => s.year === c.year && s.s === c.semester)
			});
		}
	}
	const rows = [...units.values()].sort((a, b) => b.firstIndex - a.firstIndex);

	function cell(code: string, sem: Sem): Role | null {
		const hit = courses.find((c) => c.code === code && c.year === sem.year && c.semester === sem.s);
		return hit?.role ?? null;
	}

	const legend = (Object.entries(roleMeta) as [Role, { short: string; weight: number }][]).sort(
		(a, b) => a[1].weight - b[1].weight
	);

	// Newest semester first, for the stacked list used on small screens.
	const bySemester = [...semesters]
		.reverse()
		.map((sem) => ({
			sem,
			items: courses
				.filter((c) => c.year === sem.year && c.semester === sem.s)
				.sort((a, b) => roleMeta[b.role].weight - roleMeta[a.role].weight || a.code.localeCompare(b.code))
		}))
		.filter((g) => g.items.length > 0);
</script>

<!-- Small screens: one block per semester, newest first -->
<ol class="divide-y divide-line border-y border-line md:hidden">
	{#each bySemester as { sem, items }}
		<li class="grid grid-cols-[4rem_1fr] gap-4 py-5">
			<div class="font-mono text-xs leading-snug text-ink-3">
				<span class="block text-ink">{sem.s}</span>
				<span class="block tabular">{sem.year}</span>
			</div>
			<ul class="space-y-3.5">
				{#each items as c}
					<li class="flex items-start gap-3">
						<span class="mark w{roleMeta[c.role].weight} mt-[0.3rem] h-3.5 w-3.5 shrink-0 rounded-full" aria-hidden="true"></span>
						<a href="https://www.sydney.edu.au/units/{c.code}" target="_blank" rel="noopener noreferrer" class="group block">
							<span class="font-mono text-xs text-ink group-hover:text-accent-ink">{c.code}</span>
							<span class="block text-[0.92rem] leading-snug text-ink-2">{c.name}</span>
							<span class="mt-0.5 block font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-3">{roleMeta[c.role].short}</span>
						</a>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ol>

<!-- Wide screens: the full grid -->
<div class="relative hidden overflow-x-auto md:block">
	<table class="w-full min-w-[38rem] border-collapse text-left">
		<caption class="sr-only">Units taught by semester and role</caption>
		<thead>
			<tr>
				<th scope="col" class="eyebrow stick sticky left-0 z-[1] pb-4 pr-4 font-normal">Unit</th>
				{#each semesters as sem}
					<th scope="col" class="pb-4 text-center font-mono text-xs font-normal text-ink-3">
						<span class="block">{sem.s}</span>
						<span class="block tabular">{sem.year}</span>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr class="border-t border-line">
					<th scope="row" class="stick sticky left-0 z-[1] w-[11rem] max-w-[11rem] py-3 pr-4 font-normal sm:w-auto sm:max-w-none">
						<a href="https://www.sydney.edu.au/units/{row.code}" target="_blank" rel="noopener noreferrer" class="group block">
							<span class="font-mono text-xs text-ink group-hover:text-accent-ink">{row.code}</span>
							<span class="block text-[0.9rem] leading-snug text-ink-2">{row.name}</span>
						</a>
					</th>
					{#each semesters as sem}
						{@const role = cell(row.code, sem)}
						<td class="py-3 text-center align-middle">
							{#if role}
								<span
									class="mark w{roleMeta[role].weight} mx-auto block h-4 w-4 rounded-full"
									title="{row.code} · {sem.key} · {roleMeta[role].short}"
								></span>
								<span class="sr-only">{roleMeta[role].short}</span>
							{:else}
								<span class="mx-auto block h-1.5 w-1.5 rounded-full bg-dot" aria-hidden="true"></span>
								<span class="sr-only">—</span>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<ul class="mt-6 hidden flex-wrap gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 md:flex" aria-label="Legend">
	{#each legend as [role, meta]}
		<li class="flex items-center gap-2">
			<span class="mark w{meta.weight} block h-3.5 w-3.5 rounded-full" aria-hidden="true"></span>
			{meta.short}
		</li>
	{/each}
</ul>

<style>
	/* Sticky first column needs an opaque background matching the section surface. */
	.stick {
		background: color-mix(in srgb, var(--paper-2) 60%, var(--paper));
		box-shadow: 1px 0 0 var(--line);
	}
	.mark.w1 {
		background: transparent;
		box-shadow: inset 0 0 0 2px var(--ink-3);
	}
	.mark.w2 {
		background: color-mix(in srgb, var(--ink) 40%, var(--paper));
	}
	.mark.w3 {
		background: var(--ink);
	}
	.mark.w4 {
		background: var(--accent);
	}
</style>
