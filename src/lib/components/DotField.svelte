<script lang="ts">
	/**
	 * The hero's tactile dot field. A lattice of dots behaves like an
	 * electro-tactile array under a finger: dots near the pointer swell,
	 * warm to the accent colour and are pushed outward, the way skin
	 * deforms around a contact. On touch devices a press also gives a
	 * 10 ms vibration pulse. With reduced motion the field is static.
	 */
	import { onMount } from 'svelte';
	import { pulse } from '$lib/utils/haptics';

	interface Props {
		class?: string;
	}
	let { class: className = '' }: Props = $props();

	let canvas: HTMLCanvasElement;

	function hexToRgb(hex: string): [number, number, number] {
		let h = hex.trim().replace('#', '');
		if (h.length === 3) h = h.split('').map((c) => c + c).join('');
		const n = parseInt(h, 16);
		return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const SPACING = 22;
		const RADIUS = 140;

		let w = 0;
		let h = 0;
		let dots: { x: number; y: number; t: number }[] = [];
		let px = -1e4;
		let py = -1e4;
		let pressing = false;
		let lastMove = 0;
		let raf = 0;
		let visible = true;
		let base: [number, number, number] = [200, 195, 178];
		let hot: [number, number, number] = [240, 138, 36];

		const readColors = () => {
			const cs = getComputedStyle(canvas);
			base = hexToRgb(cs.getPropertyValue('--dot') || '#cbc3b2');
			hot = hexToRgb(cs.getPropertyValue('--accent') || '#f08a24');
		};

		const build = () => {
			dots = [];
			const cols = Math.ceil(w / SPACING) + 1;
			const rows = Math.ceil(h / SPACING) + 1;
			const ox = (w - (cols - 1) * SPACING) / 2;
			const oy = (h - (rows - 1) * SPACING) / 2;
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					dots.push({ x: ox + c * SPACING, y: oy + r * SPACING, t: 0 });
				}
			}
		};

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			build();
			readColors();
			if (reduce) draw(0);
		};

		const mix = (t: number) => {
			const r = Math.round(base[0] + (hot[0] - base[0]) * t);
			const g = Math.round(base[1] + (hot[1] - base[1]) * t);
			const b = Math.round(base[2] + (hot[2] - base[2]) * t);
			return `rgb(${r} ${g} ${b})`;
		};

		const draw = (time: number) => {
			ctx.clearRect(0, 0, w, h);
			const idle = time - lastMove > 2500;
			// A slow wandering "scan" keeps the field alive when nobody touches it.
			const rx = w * 0.5 + Math.cos(time / 4200) * w * 0.38;
			const ry = h * 0.5 + Math.sin(time / 5600) * h * 0.32;
			const gain = pressing ? 1.3 : 1;

			for (const d of dots) {
				const dx = d.x - px;
				const dy = d.y - py;
				const dist = Math.hypot(dx, dy);
				let target = 0;
				if (dist < RADIUS) {
					const k = 1 - dist / RADIUS;
					target = k * k * gain;
				}
				if (idle && !reduce) {
					const di = Math.hypot(d.x - rx, d.y - ry);
					if (di < 120) {
						const k = 1 - di / 120;
						target = Math.max(target, k * k * 0.5);
					}
				}
				d.t += (target - d.t) * 0.16;
				if (d.t < 0.004) d.t = 0;
				const t = Math.min(d.t, 1);

				let ox = 0;
				let oy = 0;
				if (dist < RADIUS && dist > 0.001) {
					const push = (1 - dist / RADIUS) * 7 * gain;
					ox = (dx / dist) * push;
					oy = (dy / dist) * push;
				}

				ctx.beginPath();
				ctx.arc(d.x + ox, d.y + oy, 1.35 + t * 3.4, 0, Math.PI * 2);
				ctx.fillStyle = t > 0.02 ? mix(Math.min(1, t * 1.5)) : mix(0);
				ctx.fill();
			}
		};

		const loop = (time: number) => {
			draw(time);
			raf = requestAnimationFrame(loop);
		};

		const start = () => {
			if (reduce || raf || !visible || document.hidden) return;
			raf = requestAnimationFrame(loop);
		};
		const stop = () => {
			if (raf) cancelAnimationFrame(raf);
			raf = 0;
		};

		const onMove = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			px = e.clientX - rect.left;
			py = e.clientY - rect.top;
			lastMove = performance.now();
		};
		const onLeave = () => {
			px = -1e4;
			py = -1e4;
		};
		const onDown = (e: PointerEvent) => {
			pressing = true;
			onMove(e);
			if (e.pointerType === 'touch') pulse(10);
		};
		const onUp = () => {
			pressing = false;
		};

		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);

		const io = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			visible ? start() : stop();
		});
		io.observe(canvas);

		const onVisibility = () => (document.hidden ? stop() : start());
		document.addEventListener('visibilitychange', onVisibility);

		const mo = new MutationObserver(readColors);
		mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		const host = canvas.parentElement ?? canvas;
		host.addEventListener('pointermove', onMove);
		host.addEventListener('pointerdown', onDown);
		host.addEventListener('pointerleave', onLeave);
		window.addEventListener('pointerup', onUp);
		window.addEventListener('pointercancel', onUp);

		start();

		return () => {
			stop();
			ro.disconnect();
			io.disconnect();
			mo.disconnect();
			document.removeEventListener('visibilitychange', onVisibility);
			host.removeEventListener('pointermove', onMove);
			host.removeEventListener('pointerdown', onDown);
			host.removeEventListener('pointerleave', onLeave);
			window.removeEventListener('pointerup', onUp);
			window.removeEventListener('pointercancel', onUp);
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none h-full w-full {className}" aria-hidden="true"></canvas>
