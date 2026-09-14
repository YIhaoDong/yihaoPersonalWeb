/**
 * Svelte action for images that rest in greyscale and gain colour.
 *
 * Pointer devices: nothing to do here; CSS handles `.group:hover .tint`.
 * Touch devices: there is no hover, so the image gains colour once it is
 * well inside the viewport, and keeps it. With reduced motion the image is
 * shown in colour straight away.
 */
export function colourOnArrive(node: HTMLElement) {
	const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduce) {
		node.classList.add('is-colour');
		return;
	}
	if (!coarse || !('IntersectionObserver' in window)) return;

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-colour');
					io.disconnect();
				}
			}
		},
		// Fire when the image is roughly centred, not the moment its edge appears.
		{ rootMargin: '-30% 0px -30% 0px', threshold: 0.2 }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}
