import type { RequestHandler } from './$types';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

type SatoriFont = Parameters<typeof satori>[1]['fonts'][number];
let fontCache: SatoriFont[] | null = null;

const PAPER = '#f5f5f7';
const INK = '#1d1d1f';
const INK2 = '#454a56';
const INK3 = '#646976';
const DOT = '#c7cbd4';
const ACCENT = '#f08a24';
const ACCENT_INK = '#a8480a';

async function getFonts(fetch: typeof globalThis.fetch): Promise<SatoriFont[]> {
	if (fontCache) return fontCache;
	const [display, displayItalic, body] = await Promise.all([
		fetch('/fonts/fraunces-latin-700-normal.woff'),
		fetch('/fonts/fraunces-latin-400-italic.woff'),
		fetch('/fonts/inter-400.woff')
	]);
	fontCache = [
		{ name: 'Fraunces', data: await display.arrayBuffer(), weight: 700, style: 'normal' },
		{ name: 'Fraunces', data: await displayItalic.arrayBuffer(), weight: 400, style: 'italic' },
		{ name: 'Inter', data: await body.arrayBuffer(), weight: 400, style: 'normal' }
	];
	return fontCache;
}

/** A 3×3 dot grid with a "Y" lit, scaled up as a decorative mark. */
function mark(size: number) {
	const lit = new Set(['0,0', '2,0', '1,1', '1,2']);
	const gap = Math.round(size * 0.7);
	const cells: object[] = [];
	for (let y = 0; y < 3; y++) {
		for (let x = 0; x < 3; x++) {
			cells.push({
				type: 'div',
				props: {
					style: {
						width: size,
						height: size,
						borderRadius: '50%',
						backgroundColor: lit.has(`${x},${y}`) ? ACCENT : DOT,
						margin: `${gap / 2}px`
					}
				}
			});
		}
	}
	return {
		type: 'div',
		props: {
			style: {
				display: 'flex',
				flexWrap: 'wrap',
				width: (size + gap) * 3
			},
			children: cells
		}
	};
}

/** A wide field of faint dots with a warm pressure blob, echoing the site hero. */
function field() {
	const cols = 30;
	const rows = 9;
	const cx = 24;
	const cy = 4;
	const dots: object[] = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const d = Math.hypot(c - cx, (r - cy) * 1.4);
			const t = Math.max(0, 1 - d / 5);
			const size = 6 + t * 10;
			dots.push({
				type: 'div',
				props: {
					style: {
						width: size,
						height: size,
						borderRadius: '50%',
						backgroundColor: t > 0.05 ? ACCENT : DOT,
						opacity: t > 0.05 ? 0.35 + t * 0.65 : 1,
						margin: `${(16 - size) / 2}px`
					}
				}
			});
		}
	}
	return {
		type: 'div',
		props: {
			style: {
				position: 'absolute',
				right: 40,
				top: 40,
				width: cols * 24,
				display: 'flex',
				flexWrap: 'wrap'
			},
			children: dots
		}
	};
}

function buildElement(page: string) {
	const isHome = page === 'Home' || page === '';

	return {
		type: 'div',
		props: {
			style: {
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				backgroundColor: PAPER,
				position: 'relative',
				padding: '64px 72px',
				fontFamily: 'Inter'
			},
			children: [
				field(),
				{
					type: 'div',
					props: {
						style: { position: 'absolute', left: 72, top: 64, display: 'flex' },
						children: mark(14)
					}
				},
				{
					type: 'div',
					props: {
						style: {
							fontFamily: 'Inter',
							fontSize: 22,
							letterSpacing: '3px',
							textTransform: 'uppercase',
							color: INK3,
							marginBottom: 18
						},
						children: isHome ? 'PhD candidate · aid-lab · The University of Sydney' : page
					}
				},
				{
					type: 'div',
					props: {
						style: {
							display: 'flex',
							alignItems: 'baseline',
							fontFamily: 'Fraunces',
							fontSize: isHome ? 128 : 104,
							lineHeight: 1,
							letterSpacing: '-3px',
							color: INK
						},
						children: [
							{ type: 'span', props: { style: { fontWeight: 700 }, children: 'Yihao ' } },
							{
								type: 'span',
								props: { style: { fontStyle: 'italic', fontWeight: 400, color: ACCENT_INK }, children: 'Dong' }
							}
						]
					}
				},
				{
					type: 'div',
					props: {
						style: {
							marginTop: 28,
							fontSize: 28,
							color: INK2,
							maxWidth: 900,
							lineHeight: 1.3
						},
						children: isHome
							? 'Haptic interfaces that let people with vision impairment feel the shape of the world.'
							: 'Haptics · sensory augmentation · human-computer interaction'
					}
				},
				{
					type: 'div',
					props: {
						style: {
							position: 'absolute',
							right: 72,
							bottom: 64,
							fontSize: 22,
							color: ACCENT_INK,
							letterSpacing: '1px'
						},
						children: 'yihaodong.me'
					}
				}
			]
		}
	};
}

export const GET: RequestHandler = async (event) => {
	const page = event.url.searchParams.get('page') ?? 'Home';
	const fonts = await getFonts(event.fetch);

	const svg = await satori(buildElement(page) as Parameters<typeof satori>[0], {
		width: 1200,
		height: 630,
		fonts
	});

	const png = new Resvg(svg).render().asPng();

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=86400, s-maxage=86400'
		}
	});
};
