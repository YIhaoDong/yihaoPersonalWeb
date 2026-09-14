export interface Publication {
	id: number;
	title: string;
	authors: string;
	venue: string;
	/** Short label for tight layouts, e.g. CHI ’26 */
	venueShort: string;
	year: number;
	doi: string;
	pages: string;
	type: 'conference' | 'journal' | 'preprint';
	isFirstAuthor: boolean;
	/** One or two sentences in plain language. */
	teaser: string;
	award?: string;
	/** Public code repository */
	code?: string;
	/** Anchor of the matching project on /research */
	project?: string;
	/** BibTeX record as issued by Crossref/DataCite for the DOI. */
	bibtex: string;
}

export const publications: Publication[] = [
	{
		id: 1,
		title:
			'TactDeform: Finger Pad Deformation Inspired Spatial Tactile Feedback for Virtual Geometry Exploration',
		authors: 'Yihao Dong, Praneeth Bimsara Perera, Chin-Teng Lin, Craig T Jin, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI ’26)',
		venueShort: 'CHI ’26',
		year: 2026,
		doi: '10.1145/3772318.3791699',
		pages: '16 pages',
		type: 'conference',
		isFirstAuthor: true,
		teaser:
			'Vibration alone cannot convey edges, corners or texture. TactDeform drives a high-density electro-tactile array on the finger pad to emulate how skin deforms against virtual geometry.',
		project: 'tactdeform',
		bibtex: `@inproceedings{Dong_2026,
  series    = {CHI ’26},
  title     = {TactDeform: Finger Pad Deformation Inspired Spatial Tactile Feedback for Virtual Geometry Exploration},
  doi       = {10.1145/3772318.3791699},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  publisher = {ACM},
  author    = {Dong, Yihao and Perera, Praneeth Bimsara and Lin, Chin-Teng and Jin, Craig T and Withana, Anusha},
  year      = {2026},
  month     = {Apr},
  pages     = {1–16}
}`
	},
	{
		id: 2,
		title:
			'SRL Proxemics: Spatial Guidelines for Supernumerary Robotic Limbs in Near-Body Interactions',
		authors:
			'Hongyu Zhou, Chia-An Fan, Yihao Dong, Shuto Takashita, Masahiko Inami, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI ’26)',
		venueShort: 'CHI ’26',
		year: 2026,
		doi: '10.1145/3772318.3790532',
		pages: '21 pages',
		type: 'conference',
		isFirstAuthor: false,
		teaser:
			'Where should an extra robotic limb operate around the body? Spatial guidelines for supernumerary robotic limbs in near-body interaction.',
		bibtex: `@inproceedings{Zhou_2026,
  series    = {CHI ’26},
  title     = {SRL Proxemics: Spatial Guidelines for Supernumerary Robotic Limbs in Near-Body Interactions},
  doi       = {10.1145/3772318.3790532},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  publisher = {ACM},
  author    = {Zhou, Hongyu and Fan, Chia-An and Dong, Yihao and Takashita, Shuto and Inami, Masahiko and Sarsenbayeva, Zhanna and Withana, Anusha},
  year      = {2026},
  month     = {Apr},
  pages     = {1–21}
}`
	},
	{
		id: 3,
		title:
			'Just Before Touch: Manipulating Perceived Haptic Sensations through Proactive Vibrotactile Cues in Virtual Reality',
		authors: 'Yihao Dong, Pamuditha Somarathne, Craig T Jin, Juno Kim, Andrea Bianchi, Anusha Withana',
		venue: 'Augmented Humans International Conference (AHs ’25)',
		venueShort: 'AHs ’25',
		year: 2025,
		doi: '10.1145/3745900.3746097',
		pages: '13 pages',
		type: 'conference',
		isFirstAuthor: true,
		teaser:
			'A vibrotactile cue fired about 100 ms before visual contact changes what a virtual touch feels like. Proactive haptics as a way to shape perceived softness.',
		code: 'https://github.com/aid-lab-org/JustBeforeTouch-ProactiveHaptics',
		project: 'just-before-touch',
		bibtex: `@inproceedings{Dong_2025,
  series    = {AHs ’25},
  title     = {Just Before Touch: Manipulating Perceived Haptic Sensations through Proactive Vibrotactile Cues in Virtual Reality},
  doi       = {10.1145/3745900.3746097},
  booktitle = {Proceedings of the Augmented Humans International Conference 2025},
  publisher = {ACM},
  author    = {Dong, Yihao and Somarathne, Pamuditha and Jin, Craig T and Kim, Juno and Bianchi, Andrea and Withana, Anusha},
  year      = {2025},
  month     = {Mar},
  pages     = {79–91}
}`
	},
	{
		id: 4,
		title:
			'Juggling Extra Limbs: Identifying Control Strategies for Supernumerary Multi-Arms in Virtual Reality',
		authors: 'Hongyu Zhou, Tom Kip, Yihao Dong, Andrea Bianchi, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'CHI Conference on Human Factors in Computing Systems (CHI ’25)',
		venueShort: 'CHI ’25',
		year: 2025,
		doi: '10.1145/3706598.3713647',
		pages: '16 pages',
		type: 'conference',
		isFirstAuthor: false,
		teaser:
			'How do people control several extra virtual arms at once? Identifying the control strategies that work for supernumerary multi-arms in VR.',
		award: 'Honorable Mention · Top 5%',
		bibtex: `@inproceedings{Zhou_2025,
  series    = {CHI ’25},
  title     = {Juggling Extra Limbs: Identifying Control Strategies for Supernumerary Multi-Arms in Virtual Reality},
  doi       = {10.1145/3706598.3713647},
  booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  publisher = {ACM},
  author    = {Zhou, Hongyu and Kip, Tom and Dong, Yihao and Bianchi, Andrea and Sarsenbayeva, Zhanna and Withana, Anusha},
  year      = {2025},
  month     = {Apr},
  pages     = {1–16}
}`
	},
	{
		id: 5,
		title: 'A Survey on Methodological Approaches to Collaborative Embodiment in Virtual Reality',
		authors: 'Hongyu Zhou, Yihao Dong, Masahiko Inami, Zhanna Sarsenbayeva, Anusha Withana',
		venue: 'arXiv preprint arXiv:2507.18877',
		venueShort: 'arXiv',
		year: 2025,
		doi: '10.48550/arXiv.2507.18877',
		pages: 'July 2025',
		type: 'preprint',
		isFirstAuthor: false,
		teaser:
			'A survey of how researchers study collaborative embodiment in virtual reality, and where the methods still disagree.',
		bibtex: `@misc{Zhou_2025_arXiv,
  doi       = {10.48550/ARXIV.2507.18877},
  author    = {Zhou, Hongyu and Dong, Yihao and Inami, Masahiko and Sarsenbayeva, Zhanna and Withana, Anusha},
  title     = {A Survey on Methodological Approaches to Collaborative Embodiment in Virtual Reality},
  publisher = {arXiv},
  year      = {2025}
}`
	}
];

export function bibtex(pub: Publication): string {
	return pub.bibtex;
}
