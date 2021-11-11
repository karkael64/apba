<script lang="ts">
	import { Lang, Color, Button, Nav } from '$lib/components';
	import '../app.css';
</script>

<Lang />
<Color />
<Nav />
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
