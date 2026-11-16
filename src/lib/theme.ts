/**
 * The theme always follows the browser / system colour scheme; there is no
 * manual switch. The CSS does the work (see the `prefers-color-scheme` block
 * in app.css). This helper is only for things painted from script, such as
 * the hero canvas, which need to know when the scheme flips.
 */
export function onThemeChange(fn: () => void): () => void {
	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	mq.addEventListener('change', fn);
	return () => mq.removeEventListener('change', fn);
}
