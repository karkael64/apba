<script lang="ts">
	import { Color, Nav, Footer } from '$lib/components';
	import '../app.css';
</script>

<Color />
<Nav />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 314px);
	}
</style>
