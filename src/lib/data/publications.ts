export interface Publication {
	id: number;
	title: string;
	authors: string;
	venue: string;
	year: number;
	doi: string;
	pages: string;
	type: 'conference' | 'journal';
	isFirstAuthor: boolean;
}

export const publications: Publication[] = [
	{
		id: 1,
		title: 'Just Before Touch: Manipulating Perceived Haptic Sensations through Proactive Vibrotactile Cues in Virtual Reality',
		authors: 'Yihao Dong, Pamuditha Somarathne, Craig Jin, Juno Kim, Andrea Bianchi, Anusha Withana',
		venue: 'Augmented Humans International Conference (AHs \'25)',
		year: 2025,
		doi: '10.1145/3745900.3746097',
		pages: '13 pages',
		type: 'conference',
		isFirstAuthor: true
	},
	{
		id: 2,
		title: 'Juggling Extra Limbs: Identifying Control Strategies for Supernumerary Multi-Arms in Virtual Reality',
		authors: 'Hongyu Zhou, Tom Kip, Yihao Dong, Andrea Bianchi, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI \'25)',
		year: 2025,
		doi: '10.1145/3706598.3713647',
		pages: '16 pages',
		type: 'conference',
		isFirstAuthor: false
	}
];
