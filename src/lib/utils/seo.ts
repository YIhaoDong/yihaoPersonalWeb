export interface SEOConfig {
	title: string;
	description: string;
	url?: string;
	image?: string;
	type?: 'website' | 'article' | 'profile';
}

export function generateSEOTags(config: SEOConfig) {
	const {
		title,
		description,
		url = 'https://yihaodong.com',
		image = 'https://yihaodong.com/og-image.jpg',
		type = 'website'
	} = config;

	return {
		title,
		description,
		canonical: url,
		openGraph: {
			type,
			url,
			title,
			description,
			image,
			siteName: 'Yihao Dong - PhD Researcher'
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			image
		}
	};
}

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Yihao Dong',
	jobTitle: 'PhD Candidate',
	affiliation: {
		'@type': 'Organization',
		name: 'The University of Sydney',
		department: 'AID lab, Department of Computer Science'
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
	url: 'https://yihaodong.com'
};
