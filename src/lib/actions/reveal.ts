/**
 * Svelte action: fade/rise an element into view the first time it enters
 * the viewport. Adds nothing when the visitor prefers reduced motion, and
 * the element is fully visible without JavaScript because the hiding class
 * is only added here, on the client.
 */
export function reveal(node: HTMLElement, opts: { delay?: number } = {}) {
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		return;
	}

	node.classList.add('reveal');
	if (opts.delay) node.style.transitionDelay = `${opts.delay}ms`;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-revealed');
					io.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}
