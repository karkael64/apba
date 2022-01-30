<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ error, status }) => {
		console.log({ error })
		if (status === 404) {
			return { props: { title: "La page n'existe pas" } };
		}
		return { props: { title: `${error.message}` } };
	}
</script>

<script lang="ts">
	import { Button } from 'components';
	export let title: string;
	const goBack = () => window.history.back();
</script>

<h1>{title}</h1>
<div>
	<div>
		<Button color="primary" on:click={goBack}>Page précédente</Button>
	</div>
	<div>
		<Button href="/">Accueil</Button>
	</div>
</div>

<style>
	div {
		display: flex;
	}
	div > *:not(:last-child) {
		margin-right: 1em;
	}
</style>
