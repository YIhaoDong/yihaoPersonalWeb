export const BASE_URL = 'https://yihaodong.me';
export const SITE_NAME = 'Yihao Dong';

export function ogImageUrl(page: string): string {
	return `${BASE_URL}/og-image?page=${encodeURIComponent(page)}`;
}

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Yihao Dong',
	jobTitle: 'PhD Candidate',
	affiliation: {
		'@type': 'Organization',
		name: 'The University of Sydney',
		department: 'aid-lab, Department of Computer Science'
	},
	alumniOf: [
		{
			'@type': 'EducationalOrganization',
			name: 'The University of Sydney'
		}
	],
	knowsAbout: [
		'Human-Computer Interaction',
		'Sensory Augmentation',
		'Haptic Feedback',
		'Vision Impairment',
		'Accessibility',
		'Assistive Technology'
	],
	email: 'yihao.dong@outlook.com',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Sydney',
		addressRegion: 'NSW',
		postalCode: '2000',
		addressCountry: 'AU'
	},
	url: BASE_URL
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: SITE_NAME,
	url: BASE_URL,
	description:
		'Personal academic website of Yihao Dong, PhD Candidate in Human-Computer Interaction at the University of Sydney'
};
