<script>
	export let src;
	export let alt;
	export let width = "auto";
	export let height = "auto";
	export let transitionDuration = 0.6;

	import IntersectionObserver from "../../layout/intersectionObserver/IntersectionObserver.svelte";
	import Image from "../../atoms/image/Image.svelte";
</script>

<IntersectionObserver once={true} {width} {height} let:intersecting>
	{#if intersecting}
		<Image {alt} {src} {transitionDuration} />
	{/if}
</IntersectionObserver>
