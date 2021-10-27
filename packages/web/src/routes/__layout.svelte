<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { Lang, Color, Button } from '$lib/components';
	import '../app.css';
</script>

<Lang />
<Color />
<Header />
<main>
	<slot />
</main>
<footer>
	<Button color="primary">yeah</Button>
	<Button>noh</Button>
	<p>
		visit
		<a href="https://kit.svelte.dev">kit.svelte.dev</a>
		to learn SvelteKit
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
