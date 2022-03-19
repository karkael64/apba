<script lang="ts">
	import ImageLoader from "../imageLoader/ImageLoader.svelte";

	type GalleryPicture = {
		src: string;
		alt: string;
	};

	export let pictures: GalleryPicture[] = [];
</script>

<div class="gallery">
	{#each pictures as { src, alt } (src)}
		<div class="picture">
			<ImageLoader {src} {alt} width="20em" height="20em" />
		</div>
	{/each}
</div>

<style>
	.gallery {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.picture {
		display: inline-block;
		border-radius: 50%;
		border: 1px solid var(--bonus);
		box-shadow: 0 0 1em 0.5em var(--minus);
		background: var(--bonus);
		width: fit-content;
		overflow: hidden;
		margin: 4em;
	}
</style>
