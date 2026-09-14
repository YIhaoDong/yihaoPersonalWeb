export interface ToolGroup {
	label: string;
	items: string[];
}

/** What actually gets used in the lab, grouped by purpose. */
export const toolbox: ToolGroup[] = [
	{
		label: 'Studying people',
		items: [
			'Perceptual and psychophysical user studies',
			'Qualitative interviews and field work',
			'Usability evaluation',
			'Statistics in R and Python'
		]
	},
	{
		label: 'Building interfaces',
		items: [
			'Electro-tactile and vibrotactile hardware',
			'Wearable prototyping',
			'Unity and VR headsets',
			'Python, TypeScript, Java, SQL'
		]
	},
	{
		label: 'Thinking about systems',
		items: [
			'Human-computer interaction and accessibility',
			'Information systems and business analysis',
			'Web engineering (this site is SvelteKit)'
		]
	}
];

export const researchInterests: string[] = [
	'Sensory augmentation',
	'Haptic feedback',
	'Vision impairment and accessibility',
	'Assistive technology',
	'Multisensory perception',
	'Wearable computing',
	'Extended reality'
];
