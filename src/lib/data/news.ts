/**
 * News feed for the home page. Newest first.
 *
 * To add an item, prepend one line:
 *   { date: '2026-09', text: 'I will be at …, with <strong>bold</strong>, <em>italics</em> or <a href="/research">links</a> if you like.' }
 *
 * `date` is an ISO month (YYYY-MM). Items dated in a future month are
 * automatically tagged "Upcoming" on the home page, so write those in the
 * future tense ("I'll be at …, come say hello") and flip the verb afterwards.
 */
export interface NewsItem {
	date: string;
	/** Short, casual, first person. May contain simple HTML (strong, em, a). */
	text: string;
}

export const news: NewsItem[] = [
	{
		date: '2026-11',
		text: 'I’ve been selected as a <strong>2026 Google PhD Fellow</strong> in Human-Computer Interaction. <a href="https://goo.gle/phd-fellows-2026" target="_blank" rel="noopener noreferrer">Read Google’s announcement</a>.'
	},
	{
		date: '2026-04',
		text: 'I presented <em>TactDeform</em> at <strong>CHI ’26</strong> in Barcelona, both the paper and the interactive demo. Thank you to everyone who stopped by for a chat.'
	},
	{
		date: '2026-02',
		text: 'I have two papers accepted at <strong>CHI ’26</strong> in Barcelona! I’m looking forward to presenting <em>TactDeform</em> and <em>SRL Proxemics</em>.'
	},
	{
		date: '2025-11',
		text: 'I was awarded the <strong>Best Early PhD Project</strong> at the 2025 University of Sydney School of Computer Science Research Showcase.'
	},
	{
		date: '2025-10',
		text: 'I started as an <strong>Associate Lecturer (PhD Teaching Fellow)</strong>, teaching COMP9001 and COMP9123. <a href="/teaching">More on my teaching</a>.'
	},
	{
		date: '2025-04',
		text: 'Our paper <em>Juggling Extra Limbs</em> received an <strong>Honorable Mention</strong> at CHI ’25 in Yokohama, placing it in the top 5% of submissions.'
	},
	{
		date: '2025-03',
		text: 'My paper <em>Just Before Touch</em> was published at <strong>Augmented Humans (AHs ’25)</strong>. <a href="/research#just-before-touch">Try the demo</a>.'
	},
	{
		date: '2024-07',
		text: 'I started my PhD in the <strong>aid-lab</strong> at the University of Sydney, supervised by Associate Professor Anusha Withana.'
	}
];

/** True when the item's month is later than the current month. */
export function isUpcoming(iso: string, now = new Date()): boolean {
	const [y, m] = iso.split('-').map(Number);
	return y > now.getFullYear() || (y === now.getFullYear() && m > now.getMonth() + 1);
}

export function formatMonth(iso: string): string {
	const [y, m] = iso.split('-').map(Number);
	const d = new Date(Date.UTC(y, m - 1, 1));
	return d.toLocaleDateString('en-AU', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
