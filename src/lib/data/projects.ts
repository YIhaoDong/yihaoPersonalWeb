export interface Project {
	id: number;
	title: string;
	year: number;
	description: string;
	responsibilities: string[];
	outcomes: string;
	technologies?: string[];
	category: 'Research Prototype' | 'Software Engineering' | 'Consulting';
	github?: string;
	demo?: string;
	specs?: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Analysing the Current Landscape of FemTech Solutions',
		year: 2022,
		category: 'Software Engineering',
		description: 'Academic project analyzing FemTech solutions to understand the current market and identify opportunities for innovation.',
		responsibilities: [
			'Gathered project goals and requirements from clients',
			'Led the team to develop a comprehensive project plan with three phases',
			'Implemented the project using web scripting, data mining and data analysis',
			'Continually communicated and collaborated with the client'
		],
		outcomes: 'Achieved excellent client satisfaction and high-distinction results',
		technologies: ['Python', 'Web Scraping', 'Data Mining', 'Data Analysis'],
		github: 'https://github.com/yihaodong'
	},
	{
		id: 2,
		title: 'Using AI with Digital Twins for Real-time Views',
		year: 2022,
		category: 'Research Prototype',
		description: 'Research project exploring the integration of AI and Digital Twin technologies to provide real-time situational awareness.',
		responsibilities: [
			'Researched state-of-the-art technologies such as AI and Digital Twins',
			'Analysed current applications and potential usages',
			'Designed a unique implementation to meet requirements'
		],
		outcomes: 'Received distinction results and positive feedback from domain experts',
		technologies: ['AI', 'Digital Twins', 'Real-time Systems'],
		specs: ['Unity', 'Azure Digital Twins', 'PyTorch']
	},
	{
		id: 3,
		title: 'Business Information Systems in Practice',
		year: 2022,
		category: 'Consulting',
		description: 'Consulting project to optimize business processes through information systems analysis and redesign.',
		responsibilities: [
			'Observed and analysed client needs and potential improvements',
			'Developed a new solution to optimise the business process',
			'Prototyped and evaluated the software solution'
		],
		outcomes: 'Successfully delivered optimized business process solution',
		technologies: ['BPMN', 'Software Prototyping', 'Systems Analysis']
	}
];
