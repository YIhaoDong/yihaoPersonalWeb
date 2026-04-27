import type { RequestHandler } from './$types';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

type SatoriFont = Parameters<typeof satori>[1]['fonts'][number];
let fontCache: SatoriFont[] | null = null;

async function getFonts(fetch: typeof globalThis.fetch): Promise<SatoriFont[]> {
	if (fontCache) return fontCache;
	const [r400, r700] = await Promise.all([
		fetch('/fonts/inter-400.woff'),
		fetch('/fonts/inter-700.woff')
	]);
	fontCache = [
		{ name: 'Inter', data: await r400.arrayBuffer(), weight: 400, style: 'normal' },
		{ name: 'Inter', data: await r700.arrayBuffer(), weight: 700, style: 'normal' }
	];
	return fontCache;
}

function buildElement(page: string) {
	const isHome = page === 'Home' || page === '';

	const children: object[] = [
		{
			type: 'div',
			props: {
				style: {
					fontSize: isHome ? 80 : 64,
					fontWeight: 700,
					color: '#0f172a',
					lineHeight: 1,
					letterSpacing: '-2px'
				},
				children: 'Yihao Dong'
			}
		},
		{
			type: 'div',
			props: {
				style: {
					width: '80px',
					height: '4px',
					backgroundColor: '#2563eb',
					marginTop: '24px',
					marginBottom: isHome ? '28px' : '20px'
				}
			}
		}
	];

	if (!isHome) {
		children.push({
			type: 'div',
			props: {
				style: {
					fontSize: 44,
					fontWeight: 700,
					color: '#2563eb',
					marginBottom: '20px'
				},
				children: page
			}
		});
	}

	children.push(
		{
			type: 'div',
			props: {
				style: { fontSize: 26, color: '#475569', fontWeight: 400 },
				children: 'PhD Candidate · Human-Computer Interaction'
			}
		},
		{
			type: 'div',
			props: {
				style: { fontSize: 22, color: '#94a3b8', fontWeight: 400, marginTop: '8px' },
				children: 'The University of Sydney · aid-lab'
			}
		}
	);

	return {
		type: 'div',
		props: {
			style: {
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#ffffff',
				fontFamily: 'Inter'
			},
			children: [
				{
					type: 'div',
					props: {
						style: { width: '100%', height: '8px', backgroundColor: '#1d4ed8' }
					}
				},
				{
					type: 'div',
					props: {
						style: {
							display: 'flex',
							flexDirection: 'column',
							flex: 1,
							padding: '60px 80px',
							justifyContent: 'center'
						},
						children
					}
				},
				{
					type: 'div',
					props: {
						style: { padding: '0 80px 40px', display: 'flex', justifyContent: 'flex-end' },
						children: {
							type: 'div',
							props: {
								style: { fontSize: 20, color: '#2563eb', fontWeight: 400 },
								children: 'yihaodong.me'
							}
						}
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

	const resvg = new Resvg(svg);
	const png = resvg.render().asPng();

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=86400, s-maxage=86400'
		}
	});
};
