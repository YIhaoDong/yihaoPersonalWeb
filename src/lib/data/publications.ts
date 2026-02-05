export interface Publication {
	id: number;
	title: string;
	authors: string;
	venue: string;
	year: number;
	doi: string;
	pages: string;
	type: 'conference' | 'journal' | 'preprint';
	isFirstAuthor: boolean;
}

export const publications: Publication[] = [
	{
		id: 1,
		title: 'TactDeform: Finger Pad Deformation Inspired Spatial Tactile Feedback for Virtual Geometry Exploration',
		authors: 'Yihao Dong, Praneeth Bimsara Perera, Chin-Teng Lin, Craig T Jin, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI \'26)',
		year: 2026,
		doi: '10.1145/3772318.3791699',
		pages: '16 pages',
		type: 'conference',
		isFirstAuthor: true
	},
	{
		id: 2,
		title: 'SRL Proxemics: Spatial Guidelines for Supernumerary Robotic Limbs in Near-Body Interactions',
		authors: 'Hongyu Zhou, Chia-An Fan, Yihao Dong, Shuto Takashita, Masahiko Inami, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI \'26)',
		year: 2026,
		doi: '10.1145/3772318.3790532',
		pages: '22 pages',
		type: 'conference',
		isFirstAuthor: false
	},
	{
		id: 3,
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
		id: 4,
		title: 'Juggling Extra Limbs: Identifying Control Strategies for Supernumerary Multi-Arms in Virtual Reality',
		authors: 'Hongyu Zhou, Tom Kip, Yihao Dong, Andrea Bianchi, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI \'25)',
		year: 2025,
		doi: '10.1145/3706598.3713647',
		pages: '16 pages',
		type: 'conference',
		isFirstAuthor: false
	},
	{
		id: 5,
		title: 'A Survey on Methodological Approaches to Collaborative Embodiment in Virtual Reality',
		authors: 'Hongyu Zhou, Yihao Dong, Masahiko Inami, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'arXiv preprint arXiv:2507.18877',
		year: 2025,
		doi: '10.48550/arXiv.2507.18877',
		pages: 'July 2025',
		type: 'preprint',
		isFirstAuthor: false
	}
];
