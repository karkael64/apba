<script lang="ts">
	import type { CSSObject } from "../../../common/style";
	import { objectToStyleString } from "../../../common/style";

	export let backgroundImage: string;
	export let height = "100vh";

	$: styles = {
		backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
		height,
	} as CSSObject;
</script>

<section style={objectToStyleString(styles)}>
	<slot />
</section>

<style>
	section {
		width: 100%;
		height: 100vh;
		background-color: white;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-clip: padding-box;
	}
</style>
