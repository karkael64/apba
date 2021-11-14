<script>
	import { objectToStyleString } from "../../../common/style";

	export let src;
	export let alt;
	export let transitionDuration = 0.6;
	export let filter;

	import { onMount } from "svelte";

	let loaded = false;
	let thisImage;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	{src}
	{alt}
	loading="lazy"
	class:loaded
	bind:this={thisImage}
	style={objectToStyleString({ transitionDuration: `${transitionDuration}s`, filter })} />

<style>
	img {
		line-height: 1em;
		opacity: 0;
		transition: opacity 600ms ease-out;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	img.loaded {
		opacity: 1;
	}
</style>
