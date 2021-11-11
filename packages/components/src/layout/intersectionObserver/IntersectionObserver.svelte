<script lang="ts">
	import { objectToStyleString } from "../../../common/style";

	import { onMount } from "svelte";
	export let once = false;
	export let width = "auto";
	export let height = "auto";
	let intersecting = false;

	let container;
	onMount(() => {
		if (typeof IntersectionObserver !== "undefined") {
			const observer = new IntersectionObserver((entries) => {
				intersecting = entries[0].isIntersecting;
				if (intersecting && once) {
					observer.unobserve(container);
				}
			});
			observer.observe(container);
			return () => observer.unobserve(container);
		}

		const handler = () => {
			const bcr = container.getBoundingClientRect();
			intersecting = bcr.bottom > 0 && bcr.right > 0 && bcr.top < window.innerHeight && bcr.left < window.innerWidth;
			if (intersecting && once) {
				window.removeEventListener("scroll", handler);
			}
		};
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	});

	const size = (value: string | number) => (typeof value === "number" ? `${value}px` : value);
</script>

<div bind:this={container} style={objectToStyleString({ width: size(width), height: size(height) })}>
	<slot {intersecting} />
</div>
