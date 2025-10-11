export interface Project {
	id: number;
	title: string;
	year: number;
	description: string;
	responsibilities: string[];
	outcomes: string;
	technologies?: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Analysing the Current Landscape of FemTech Solutions',
		year: 2022,
		description: 'Academic project analyzing FemTech solutions to understand the current market and identify opportunities for innovation.',
		responsibilities: [
			'Gathered project goals and requirements from clients',
			'Led the team to develop a comprehensive project plan with three phases, key milestones and success criteria',
			'Implemented the project based on the Agile manifesto using web scripting, data mining and data analysis',
			'Continually communicated and collaborated with the client, adapting to new and changed requirements',
			'Hosted, managed and documented more than 21 meetings with clients and domain experts'
		],
		outcomes: 'Achieved excellent client satisfaction and high-distinction results',
		technologies: ['Python', 'Web Scraping', 'Data Mining', 'Data Analysis']
	},
	{
		id: 2,
		title: 'Using AI with Digital Twins to Provide Real-time Situational Views',
		year: 2022,
		description: 'Research project exploring the integration of AI and Digital Twin technologies to provide real-time situational awareness.',
		responsibilities: [
			'Researched state-of-the-art technologies such as AI and Digital Twins',
			'Analysed current applications and potential usages of the technologies',
			'Combined the benefits of the technologies and designed a unique implementation to meet requirements',
			'Presented the final implementation to domain experts'
		],
		outcomes: 'Received distinction results and positive feedback from domain experts',
		technologies: ['AI', 'Digital Twins', 'Real-time Systems']
	},
	{
		id: 3,
		title: 'Business Information Systems in Practice',
		year: 2022,
		description: 'Consulting project to optimize business processes through information systems analysis and redesign.',
		responsibilities: [
			'Observed and analysed client needs and potential improvements',
			'Developed a new solution to optimise the business process',
			'Validated the solution using secondary research and consulted domain experts for opinions',
			'Prototyped and evaluated the software solution and new workflow',
			'Reflected on overall team collaboration and achievements'
		],
		outcomes: 'Successfully delivered optimized business process solution',
		technologies: ['Business Process Modeling', 'Software Prototyping', 'Systems Analysis']
	}
];
