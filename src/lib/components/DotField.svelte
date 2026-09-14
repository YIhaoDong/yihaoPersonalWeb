<script lang="ts">
	/**
	 * The hero's tactile dot field. A lattice of dots behaves like an
	 * electro-tactile array under a finger: dots near the contact point swell,
	 * warm to the accent colour and are pushed outward, the way skin deforms
	 * around a touch.
	 *
	 * Pointer devices: the contact point follows the mouse; when idle it
	 * wanders slowly on its own.
	 *
	 * Touch devices: there is no hover, so the contact point is driven by
	 * scrolling (it travels down the field as the page scrolls), nudged by
	 * device tilt where that is available without a permission prompt, and
	 * taken over by the finger while it is actually on the field. A press
	 * gives a 10 ms vibration pulse.
	 *
	 * With reduced motion the field is static.
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
		const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
		const SPACING = 22;
		const RADIUS = 140;

		let w = 0;
		let h = 0;
		let dots: { x: number; y: number; t: number }[] = [];
		let px = -1e4;
		let py = -1e4;
		let pressing = false;
		let touching = false;
		let lastMove = 0;
		let raf = 0;
		let visible = true;
		let base: [number, number, number] = [199, 203, 212];
		let hot: [number, number, number] = [240, 138, 36];

		// Touch-mode drivers
		let scrollT = 0; // 0 at top of page → 1 when the hero has scrolled past
		let tiltX = 0; // -1..1 from device gamma
		let tiltY = 0; // -1..1 from device beta
		let vx = 0; // virtual contact point (smoothed)
		let vy = 0;

		const readColors = () => {
			const cs = getComputedStyle(canvas);
			base = hexToRgb(cs.getPropertyValue('--dot') || '#c7cbd4');
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
			vx = w * 0.5;
			vy = h * 0.3;
			if (reduce) draw(0);
		};

		const mix = (t: number) => {
			const r = Math.round(base[0] + (hot[0] - base[0]) * t);
			const g = Math.round(base[1] + (hot[1] - base[1]) * t);
			const b = Math.round(base[2] + (hot[2] - base[2]) * t);
			return `rgb(${r} ${g} ${b})`;
		};

		/** On touch devices, derive the contact point from scroll, tilt and a slow drift. */
		const updateVirtual = (time: number) => {
			const driftX = Math.sin(time / 3800) * w * 0.08;
			const driftY = Math.cos(time / 4600) * h * 0.05;
			const targetX = w * 0.5 + tiltX * w * 0.32 + driftX;
			const targetY = h * 0.28 + scrollT * h * 0.95 + tiltY * h * 0.18 + driftY;
			vx += (targetX - vx) * 0.12;
			vy += (targetY - vy) * 0.12;
			px = vx;
			py = vy;
		};

		const draw = (time: number) => {
			ctx.clearRect(0, 0, w, h);
			if (coarse && !touching && !reduce) updateVirtual(time);

			const idle = !coarse && time - lastMove > 2500;
			// On pointer devices a slow wandering "scan" keeps the field alive when nobody touches it.
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

		const setPointer = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			px = e.clientX - rect.left;
			py = e.clientY - rect.top;
			lastMove = performance.now();
		};
		const onMove = (e: PointerEvent) => {
			if (e.pointerType === 'touch' && !touching) return;
			setPointer(e);
		};
		const onLeave = () => {
			if (coarse) return;
			px = -1e4;
			py = -1e4;
		};
		const onDown = (e: PointerEvent) => {
			pressing = true;
			if (e.pointerType === 'touch') {
				touching = true;
				pulse(10);
			}
			setPointer(e);
		};
		const onUp = () => {
			pressing = false;
			if (touching) {
				touching = false;
				// Hand back to the virtual point smoothly from where the finger left.
				vx = px;
				vy = py;
			}
		};

		const onScroll = () => {
			const rect = canvas.getBoundingClientRect();
			// 0 when the field's top is at the top of the viewport, 1 when it has scrolled its own height.
			scrollT = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
		};

		const onOrientation = (e: DeviceOrientationEvent) => {
			if (e.gamma == null || e.beta == null) return;
			const clamp = (v: number) => Math.max(-1, Math.min(1, v));
			tiltX = clamp(e.gamma / 30);
			tiltY = clamp((e.beta - 45) / 35);
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

		const host = canvas.parentElement ?? canvas;
		host.addEventListener('pointermove', onMove);
		host.addEventListener('pointerdown', onDown);
		host.addEventListener('pointerleave', onLeave);
		window.addEventListener('pointerup', onUp);
		window.addEventListener('pointercancel', onUp);

		let tiltAttached = false;
		if (coarse) {
			// Let vertical scrolling through while horizontal drags reach the field.
			(host as HTMLElement).style.touchAction = 'pan-y';
			window.addEventListener('scroll', onScroll, { passive: true });
			onScroll();
			// Tilt only where it works without a permission prompt (iOS requires one; skip it there).
			const DOE = (window as unknown as { DeviceOrientationEvent?: { requestPermission?: unknown } })
				.DeviceOrientationEvent;
			if (DOE && typeof DOE.requestPermission !== 'function') {
				window.addEventListener('deviceorientation', onOrientation, { passive: true });
				tiltAttached = true;
			}
		}

		start();

		return () => {
			stop();
			ro.disconnect();
			io.disconnect();
			document.removeEventListener('visibilitychange', onVisibility);
			host.removeEventListener('pointermove', onMove);
			host.removeEventListener('pointerdown', onDown);
			host.removeEventListener('pointerleave', onLeave);
			window.removeEventListener('pointerup', onUp);
			window.removeEventListener('pointercancel', onUp);
			window.removeEventListener('scroll', onScroll);
			if (tiltAttached) window.removeEventListener('deviceorientation', onOrientation);
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none h-full w-full {className}" aria-hidden="true"></canvas>
