export interface Award {
	year: string;
	title: string;
	detail: string;
}

export const awards: Award[] = [
	{
		year: '2025',
		title: 'Honorable Mention, CHI 2025',
		detail: 'For “Juggling Extra Limbs” (Zhou et al.). Top 5% of submissions.'
	},
	{
		year: '2025',
		title: 'Best Early PhD Project',
		detail: 'School of Computer Science Research Showcase, The University of Sydney.'
	},
	{
		year: '2024–28',
		title: 'Faculty of Engineering Research Scholarship',
		detail: 'The University of Sydney.'
	},
	{
		year: '2024',
		title: 'Undergraduate High Honour Roll',
		detail: 'School of Computer Science, The University of Sydney.'
	}
];

export interface ServiceItem {
	role: string;
	where: string;
}

export const service: ServiceItem[] = [
	{ role: 'External reviewer', where: 'CHI 2026, ISMAR 2026' },
	{ role: 'Student volunteer', where: 'Augmented Humans 2025' },
	{ role: 'Guest lecturer', where: 'Usability Engineering (2026), Human-Computer Interaction (2025)' }
];
