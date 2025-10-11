export interface Course {
	code: string;
	name: string;
	semester: string;
	year: number;
	role: 'Tutor' | 'Teaching Assistant' | 'Honours Project Examiner';
}

export const courses: Course[] = [
	{
		code: 'COMP5427',
		name: 'Usability Engineering',
		semester: 'S1',
		year: 2025,
		role: 'Teaching Assistant'
	},
	{
		code: 'INFO4999',
		name: 'Computer Science Honours',
		semester: 'S2',
		year: 2024,
		role: 'Honours Project Examiner'
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
