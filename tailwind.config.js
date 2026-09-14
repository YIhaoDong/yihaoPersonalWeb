/** @type {import('tailwindcss').Config} */
export default {
	future: { hoverOnlyWhenSupported: true },
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				paper: 'var(--paper)',
				'paper-2': 'var(--paper-2)',
				ink: 'var(--ink)',
				'ink-2': 'var(--ink-2)',
				'ink-3': 'var(--ink-3)',
				line: 'var(--line)',
				dot: 'var(--dot)',
				accent: 'var(--accent)',
				'accent-ink': 'var(--accent-ink)'
			},
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
