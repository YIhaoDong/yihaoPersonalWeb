<script lang="ts">
	import { courses } from '$lib/data/courses';

	// Group courses by role
	const coursesByRole = courses.reduce((acc, course) => {
		if (!acc[course.role]) {
			acc[course.role] = [];
		}
		acc[course.role].push(course);
		return acc;
	}, {} as Record<string, typeof courses>);

	const responsibilities = [
		'Conducted tutorial sessions for various classes, both with and without specific guidelines or instructions',
		'Engaged in regular meetings with student groups to offer ongoing formative feedback on their assignments on a weekly basis',
		'Evaluated a diverse range of assignments, encompassing reports, code projects, and websites',
		'Delivered insightful and constructive feedback to students to enhance their understanding and foster their academic progress'
	];

	const teachingPhilosophy = `I believe in creating an inclusive and engaging learning environment where students feel
	empowered to explore, question, and develop their understanding. My teaching approach combines theoretical foundations
	with practical applications, encouraging students to think critically about problems and develop creative solutions.
	I strive to make complex concepts accessible through clear explanations, real-world examples, and hands-on exercises.`;
</script>

<svelte:head>
	<title>Teaching - Yihao Dong</title>
	<meta name="description" content="Teaching experience and courses taught by Yihao Dong at the University of Sydney." />
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-blue-50 to-white py-16">
	<div class="section-container">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
			Teaching Experience
		</h1>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">
			Mentoring and educating the next generation of computer scientists
		</p>
	</div>
</section>

<!-- Overview -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
			<h2 class="text-2xl font-bold text-gray-900 mb-3">Teaching Philosophy</h2>
			<p class="text-gray-700 leading-relaxed">
				{teachingPhilosophy}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
			<div class="bg-white rounded-lg shadow-md p-6">
				<div class="text-4xl font-bold text-blue-600 mb-2">
					{courses.length}
				</div>
				<div class="text-gray-600 font-medium">
					Courses Taught
				</div>
			</div>
			<div class="bg-white rounded-lg shadow-md p-6">
				<div class="text-4xl font-bold text-green-600 mb-2">
					2+ Years
				</div>
				<div class="text-gray-600 font-medium">
					Teaching Experience
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Courses by Role -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Courses Taught</h2>

		<div class="max-w-5xl mx-auto space-y-12">
			{#each Object.entries(coursesByRole) as [role, roleCourses]}
				<div>
					<h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<span class="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3">
							{role}
						</span>
					</h3>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						{#each roleCourses as course}
							<div class="card hover:shadow-xl transition-shadow duration-300">
								<div class="flex items-start justify-between mb-3">
									<div>
										<h4 class="text-xl font-bold text-gray-900 mb-1">
											{course.code}
										</h4>
										<p class="text-gray-700 font-medium">
											{course.name}
										</p>
									</div>
									<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2">
										{course.semester} {course.year}
									</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Responsibilities -->
<section class="section-container">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Key Responsibilities</h2>
		<div class="space-y-4">
			{#each responsibilities as responsibility}
				<div class="flex items-start space-x-4 bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
					<svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p class="text-gray-700 text-lg">
						{responsibility}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Course Details Table -->
<section class="bg-gray-50 py-16">
	<div class="section-container">
		<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Teaching Record</h2>
		<div class="max-w-5xl mx-auto overflow-x-auto">
			<table class="w-full bg-white rounded-lg shadow-md overflow-hidden">
				<thead class="bg-blue-600 text-white">
					<tr>
						<th class="px-6 py-4 text-left font-semibold">Course Code</th>
						<th class="px-6 py-4 text-left font-semibold">Course Name</th>
						<th class="px-6 py-4 text-left font-semibold">Semester</th>
						<th class="px-6 py-4 text-left font-semibold">Role</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					{#each courses.sort((a, b) => {
						if (b.year !== a.year) return b.year - a.year;
						return b.semester.localeCompare(a.semester);
					}) as course, index}
						<tr class="{index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors">
							<td class="px-6 py-4 font-mono text-blue-600 font-semibold">
								{course.code}
							</td>
							<td class="px-6 py-4 text-gray-900">
								{course.name}
							</td>
							<td class="px-6 py-4 text-gray-700">
								{course.semester} {course.year}
							</td>
							<td class="px-6 py-4">
								<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
									{course.role}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section-container">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-3xl font-bold text-gray-900 mb-4">
			Interested in Working Together?
		</h2>
		<p class="text-lg text-gray-600 mb-8">
			I'm always happy to discuss teaching opportunities, mentoring, or academic collaboration.
		</p>
		<a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block shadow-md">
			Get in Touch
		</a>
	</div>
</section>
