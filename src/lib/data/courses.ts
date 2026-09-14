export type Role = 'Tutor' | 'Teaching Assistant' | 'Honours Project Examiner' | 'Associate Lecturer';

export interface Course {
	code: string;
	name: string;
	semester: 'S1' | 'S2';
	year: number;
	role: Role;
}

export const courses: Course[] = [
	{ code: 'COMP5216', name: 'Mobile Computing', semester: 'S2', year: 2026, role: 'Associate Lecturer' },
	{ code: 'COMP9001', name: 'Introduction to Programming', semester: 'S1', year: 2026, role: 'Associate Lecturer' },
	{ code: 'COMP9123', name: 'Data Structures and Algorithms', semester: 'S1', year: 2026, role: 'Associate Lecturer' },
	{ code: 'INFO4999', name: 'Computer Science Honours', semester: 'S1', year: 2026, role: 'Honours Project Examiner' },
	{ code: 'INFO4999', name: 'Computer Science Honours', semester: 'S2', year: 2025, role: 'Honours Project Examiner' },
	{ code: 'INFO4999', name: 'Computer Science Honours', semester: 'S2', year: 2024, role: 'Honours Project Examiner' },
	{ code: 'COMP5427', name: 'Usability Engineering', semester: 'S1', year: 2025, role: 'Teaching Assistant' },
	{ code: 'INFO3315', name: 'Human-Computer Interaction', semester: 'S2', year: 2025, role: 'Teaching Assistant' },
	{ code: 'INFO3315', name: 'Human-Computer Interaction', semester: 'S1', year: 2025, role: 'Tutor' },
	{ code: 'ISYS2120', name: 'Data and Information Management', semester: 'S2', year: 2024, role: 'Tutor' },
	{ code: 'COMP5338', name: 'Advanced Data Models', semester: 'S2', year: 2024, role: 'Tutor' },
	{ code: 'INFO3315', name: 'Human-Computer Interaction', semester: 'S2', year: 2024, role: 'Tutor' },
	{ code: 'ISYS2120', name: 'Data and Information Management', semester: 'S2', year: 2023, role: 'Tutor' }
];

/** Short labels for the semester grid and its legend. */
export const roleMeta: Record<Role, { short: string; weight: number }> = {
	'Associate Lecturer': { short: 'Associate Lecturer', weight: 4 },
	'Honours Project Examiner': { short: 'Examiner', weight: 3 },
	'Teaching Assistant': { short: 'Head tutor', weight: 2 },
	Tutor: { short: 'Tutor', weight: 1 }
};

export interface Appointment {
	title: string;
	org: string;
	period: string;
	detail: string;
}

export const appointments: Appointment[] = [
	{
		title: 'Associate Lecturer (PhD Teaching Fellow)',
		org: 'School of Computer Science, The University of Sydney',
		period: 'Oct 2025 – present',
		detail:
			'Teaching COMP9001 Introduction to Programming, COMP9123 Data Structures and Algorithms and COMP5216 Mobile Computing to postgraduate cohorts.'
	},
	{
		title: 'Casual Academic',
		org: 'School of Computer Science, The University of Sydney',
		period: 'Jun 2023 – present',
		detail:
			'Tutor, head tutor and Honours project examiner across human-computer interaction, usability engineering and data management units.'
	}
];

export interface GuestLecture {
	unit: string;
	level: string;
	year: number;
	topic?: string;
}

export const guestLectures: GuestLecture[] = [
	{ unit: 'Usability Engineering', level: 'Postgraduate', year: 2026 },
	{
		unit: 'Human-Computer Interaction',
		level: 'Undergraduate',
		year: 2025,
		topic: 'Extended reality and haptics, from theory to the lab'
	}
];
