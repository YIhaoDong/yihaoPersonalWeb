/**
 * Colours come from the CSS custom properties in src/app.css, which is what
 * lets the light and dark themes share every utility. A plain utility
 * (`bg-paper`) compiles to the bare variable; one with an opacity modifier
 * (`bg-paper/85`) compiles to a color-mix, because Tailwind cannot put an
 * alpha channel on an opaque `var()` by itself and would drop the class.
 */
const token =
	(name) =>
	({ opacityValue }) =>
		opacityValue === undefined
			? `var(--${name})`
			: `color-mix(in srgb, var(--${name}) calc(${opacityValue} * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
export default {
	future: { hoverOnlyWhenSupported: true },
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// Without these, Tailwind would route every colour through a --tw-*-opacity
	// variable; opacity is expressed with the `/NN` modifier instead.
	corePlugins: {
		backgroundOpacity: false,
		textOpacity: false,
		borderOpacity: false,
		divideOpacity: false,
		placeholderOpacity: false,
		ringOpacity: false
	},
	theme: {
		extend: {
			colors: Object.fromEntries(
				['paper', 'paper-2', 'ink', 'ink-2', 'ink-3', 'line', 'dot', 'accent', 'accent-ink'].map((name) => [
					name,
					token(name)
				])
			),
			// Borders with no colour class fall back to the hairline token, not Tailwind's light grey.
			borderColor: { DEFAULT: 'var(--line)' },
			fontFamily: {
				display: ['"Fraunces Variable"', 'Georgia', '"Times New Roman"', 'serif'],
				sans: ['"Instrument Sans Variable"', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
			},
			maxWidth: {
				site: '76rem',
				measure: '38rem'
			},
			transitionTimingFunction: {
				out: 'cubic-bezier(0.22, 1, 0.36, 1)'
			}
		}
	},
	plugins: []
};
