import type { RequestHandler } from './$types';
import { BASE_URL } from '$lib/utils/seo';

const routes = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/research', priority: '0.8', changefreq: 'monthly' },
	{ path: '/publications', priority: '0.9', changefreq: 'monthly' },
	{ path: '/teaching', priority: '0.7', changefreq: 'monthly' },
	{ path: '/contact', priority: '0.6', changefreq: 'yearly' },
	{ path: '/card', priority: '0.5', changefreq: 'yearly' }
];

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = routes
		.map(
			({ path, priority, changefreq }) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
		)
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
