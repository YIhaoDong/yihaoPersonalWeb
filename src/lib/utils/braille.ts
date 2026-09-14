/**
 * Grade 1 (uncontracted) Braille, letter by letter.
 * Each cell is described by the dot numbers that are raised:
 *
 *   1 4
 *   2 5
 *   3 6
 */
const LETTERS: Record<string, number[]> = {
	a: [1],
	b: [1, 2],
	c: [1, 4],
	d: [1, 4, 5],
	e: [1, 5],
	f: [1, 2, 4],
	g: [1, 2, 4, 5],
	h: [1, 2, 5],
	i: [2, 4],
	j: [2, 4, 5],
	k: [1, 3],
	l: [1, 2, 3],
	m: [1, 3, 4],
	n: [1, 3, 4, 5],
	o: [1, 3, 5],
	p: [1, 2, 3, 4],
	q: [1, 2, 3, 4, 5],
	r: [1, 2, 3, 5],
	s: [2, 3, 4],
	t: [2, 3, 4, 5],
	u: [1, 3, 6],
	v: [1, 2, 3, 6],
	w: [2, 4, 5, 6],
	x: [1, 3, 4, 6],
	y: [1, 3, 4, 5, 6],
	z: [1, 3, 5, 6]
};

const CAPITAL = [6];
const NUMBER = [3, 4, 5, 6];
const DIGITS = 'jabcdefghi'; // 0 → j, 1 → a … 9 → i

export interface BrailleCell {
	/** Six booleans in dot order 1..6 */
	dots: boolean[];
	/** The source character this cell (or cell group) stands for */
	char: string;
}

function cell(nums: number[], char: string): BrailleCell {
	return { dots: [1, 2, 3, 4, 5, 6].map((n) => nums.includes(n)), char };
}

/** Convert a short Latin string to Braille cells. Unknown characters become a blank cell. */
export function toBraille(text: string): BrailleCell[] {
	const out: BrailleCell[] = [];
	let inNumber = false;
	for (const raw of text) {
		const lower = raw.toLowerCase();
		if (raw === ' ') {
			out.push(cell([], ' '));
			inNumber = false;
		} else if (/[0-9]/.test(raw)) {
			if (!inNumber) {
				out.push(cell(NUMBER, '#'));
				inNumber = true;
			}
			out.push(cell(LETTERS[DIGITS[Number(raw)]], raw));
		} else if (LETTERS[lower]) {
			inNumber = false;
			if (raw !== lower) out.push(cell(CAPITAL, '^'));
			out.push(cell(LETTERS[lower], raw));
		} else {
			inNumber = false;
			out.push(cell([], raw));
		}
	}
	return out;
}
