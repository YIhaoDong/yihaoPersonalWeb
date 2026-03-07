export interface Course {
	code: string;
	name: string;
	semester: string;
	year: number;
	role: 'Tutor' | 'Teaching Assistant' | 'Honours Project Examiner' | 'Co-coordinator';
}

export const courses: Course[] = [
	{
		code: 'COMP9001',
		name: 'Introduction to Programming',
		semester: 'S1',
		year: 2026,
		role: 'Co-coordinator'
	},
	{
		code: 'COMP9123',
		name: 'Data Structures and Algorithms',
		semester: 'S1',
		year: 2026,
		role: 'Tutor'
	},
	{
		code: 'INFO4999',
		name: 'Computer Science Honours',
		semester: 'S2',
		year: 2025,
		role: 'Honours Project Examiner'
	},
	{
		code: 'INFO4999',
		name: 'Computer Science Honours',
		semester: 'S2',
		year: 2024,
		role: 'Honours Project Examiner'
	},
	{
		code: 'COMP5427',
		name: 'Usability Engineering',
		semester: 'S1',
		year: 2025,
		role: 'Teaching Assistant'
	},
	{
		code: 'INFO3315',
		name: 'Human-Computer Interaction',
		semester: 'S2',
		year: 2025,
		role: 'Teaching Assistant'
	},
	{
		code: 'INFO3315',
		name: 'Human-Computer Interaction',
		semester: 'S1',
		year: 2025,
		role: 'Tutor'
	},
	{
		code: 'ISYS2120',
		name: 'Data and Information Management',
		semester: 'S2',
		year: 2024,
		role: 'Tutor'
	},
	{
		code: 'COMP5338',
		name: 'Advanced Data Models',
		semester: 'S2',
		year: 2024,
		role: 'Tutor'
	},
	{
		code: 'INFO3315',
		name: 'Human-Computer Interaction',
		semester: 'S2',
		year: 2024,
		role: 'Tutor'
	},
	{
		code: 'ISYS2120',
		name: 'Data and Information Management',
		semester: 'S2',
		year: 2023,
		role: 'Tutor'
	}
];
