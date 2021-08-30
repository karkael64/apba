<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Button } from "components";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>to your new<br />SvelteKit app</h1>
	<h2>try editing <strong>src/routes/index.svelte</strong></h2>
	<Button label="ok" on:click={() => console.log("clicked")} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
