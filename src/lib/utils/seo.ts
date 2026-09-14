import { site } from '$lib/site';

export const BASE_URL = site.url;
export const SITE_NAME = site.name;

export function ogImageUrl(page: string): string {
	return `${BASE_URL}/og-image?page=${encodeURIComponent(page)}`;
}

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: site.name,
	jobTitle: 'PhD Candidate',
	affiliation: {
		'@type': 'Organization',
		name: site.university,
		department: 'aid-lab, School of Computer Science'
	},
	alumniOf: [
		{
			'@type': 'EducationalOrganization',
			name: site.university
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
	email: site.email,
	sameAs: site.profiles.map((p) => p.href),
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Sydney',
		addressRegion: 'NSW',
		postalCode: '2008',
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
