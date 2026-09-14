/**
 * A single, tiny vibration pulse on devices that support it (Android
 * browsers, mostly). Silently does nothing elsewhere. Used only for the
 * home page dot field, where a "touch" metaphor earns it.
 */
export function pulse(ms = 10) {
	try {
		if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
			navigator.vibrate(ms);
		}
	} catch {
		/* ignore */
	}
}
