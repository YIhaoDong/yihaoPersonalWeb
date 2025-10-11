export interface SkillCategory {
	category: string;
	skills: string[];
}

export const technicalSkills: SkillCategory[] = [
	{
		category: 'Programming Languages',
		skills: ['Python', 'Java', 'JavaScript', 'SQL', 'R']
	},
	{
		category: 'Web Development',
		skills: ['Website Design', 'Frontend Development', 'Backend Maintenance', 'Responsive Design']
	},
	{
		category: 'Data & Analysis',
		skills: ['Data Analysis', 'Information Management', 'Data Mining', 'Business Intelligence']
	},
	{
		category: 'Research & Design',
		skills: ['Human-Computer Interaction', 'Usability Engineering', 'User Experience Design', 'Research Methodologies']
	},
	{
		category: 'Software Engineering',
		skills: ['Algorithm Design', 'Software Architecture', 'Agile Development', 'Project Management']
	}
];

export const professionalSkills: string[] = [
	'Working in High Performing Teams',
	'Communication and Presentation',
	'Time Management and Multitasking',
	'Adaptability and Flexibility',
	'Relationship Building and Management',
	'Critical Thinking and Problem-Solving'
];

export const researchInterests: string[] = [
	'Extended Reality (XR/VR)',
	'Human-Computer Interaction',
	'Haptic Feedback',
	'Gesture Tracking',
	'Usability Engineering',
	'User Experience',
	'Predictive Interfaces',
	'Multisensory Perception'
];
