/**
 * Single source of truth for personal details used across pages,
 * the footer, the contact card, the vCard and structured data.
 */
export const site = {
	name: 'Yihao Dong',
	url: 'https://yihaodong.me',
	role: 'PhD Candidate in Human-Computer Interaction',
	lab: 'aid-lab',
	labUrl: 'https://www.aid-lab.org/team/yihao-dong',
	university: 'The University of Sydney',
	supervisor: 'Associate Professor Anusha Withana',
	supervisorUrl: 'https://profiles.sydney.edu.au/anusha.withana',
	email: 'yihao.dong@sydney.edu.au',
	phone: '+61 478 092 618',
	phoneTel: '+61478092618',
	address: {
		lines: ['School of Computer Science', 'The University of Sydney', '1 Cleveland St, Sydney NSW 2008', 'Australia'],
		map: 'https://maps.apple/p/5xitdGQSXAHeCZ'
	},
	cv: '/CV_Yihao_Dong.pdf',
	lastUpdated: 'November 2026',
	profiles: [
		{ name: 'University of Sydney profile', href: 'https://profiles.sydney.edu.au/yihao.dong' },
		{ name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=y9KUBZAAAAAJ' },
		{ name: 'ORCID', href: 'https://orcid.org/0009-0009-0719-3670' },
		{ name: 'ACM Digital Library', href: 'https://dl.acm.org/profile/99661566898' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/yihao-dong/' },
		{ name: 'aid-lab profile', href: 'https://www.aid-lab.org/team/yihao-dong' }
	],
	/** One-sentence thesis of the research, used in several places. */
	thesis:
		'I build haptic interfaces that let people with vision impairment feel the shape of the world around them.'
} as const;

export function buildVCard(): string {
	return [
		'BEGIN:VCARD',
		'VERSION:3.0',
		`FN:${site.name}`,
		'N:Dong;Yihao;;;',
		`TITLE:${site.role}`,
		`ORG:${site.university}`,
		`EMAIL;TYPE=INTERNET:${site.email}`,
		`TEL;TYPE=CELL:${site.phoneTel}`,
		'ADR;TYPE=WORK:;;School of Computer Science, University of Sydney, 1 Cleveland St;Sydney;NSW;2008;Australia',
		`URL:${site.url}`,
		...site.profiles.filter((p) => p.name !== 'aid-lab profile').map((p) => `URL:${p.href}`),
		'NOTE:PhD Candidate researching sensory augmentation and haptics for people with vision impairment at the University of Sydney.',
		'END:VCARD'
	].join('\n');
}

export function downloadVCard() {
	const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = 'Yihao_Dong.vcf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
