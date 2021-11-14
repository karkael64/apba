<script lang="ts">
	import ImageLoader from "../../molecule/imageLoader/ImageLoader.svelte";

	export let picturePosition = "top";
	export let pictureUrl: string;
	export let pictureAlt: string;
</script>

<div class={`thumb ${picturePosition}`}>
	<div class="picture">
		<ImageLoader src={pictureUrl} alt={pictureAlt} height="10em" width="10em" />
	</div>
	<div class="desc">
		<slot />
	</div>
</div>

<style>
	.thumb {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 1em;
		text-align: justify;
	}
	.thumb.left {
		flex-direction: row;
	}
	.thumb.right {
		flex-direction: row-reverse;
	}
	.thumb.bottom {
		flex-direction: column-reverse;
	}

	.picture {
		display: inline-block;
		border-radius: 50%;
		border: 1px solid var(--bonus);
		box-shadow: 0 0 1em 0.5em var(--minus);
		background: var(--bonus);
		width: fit-content;
		overflow: hidden;
		margin: 1em;
	}

	.desc {
		width: 20em;
	}
</style>
