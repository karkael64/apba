<script lang="ts">
	import type { CSSObject } from "../../../common/style";
	import { objectToStyleString } from "../../../common/style";
	import ImageLoader from "../../molecule/imageLoader/ImageLoader.svelte";

	export let backgroundImage: string;
	export let backgroundFilter: string;
	export let height: string;

	$: styles = { height } as CSSObject;
</script>

<section style={objectToStyleString(styles)}>
	{#if backgroundImage}
		<div class="covered">
			<ImageLoader src={backgroundImage} alt="Fond de section" height={height || "100vh"} filter={backgroundFilter} />
		</div>
	{/if}
	<slot />
</section>

<style>
	section {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.covered {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
