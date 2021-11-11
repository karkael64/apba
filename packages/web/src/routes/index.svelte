<script context="module" lang="ts">
	import { Button, FullSection } from 'components';

	export const prerender = true;
</script>

<svelte:head>
	<title>APBA - Accueil</title>
</svelte:head>

<FullSection backgroundImage="index.jpg" height="60vh">
	<div class="wrapper">
		<div class="splash">
			<span>
				Bienvenue sur le site web de <h1>APBA</h1>
				<small>Association des Parents du Bois l'Abbé (Champigny-sur-Marne)</small>
			</span>
			<div class="buttons">
				<a href="/infos" class="left-button">Vous êtes un parent du Bois l'Abbé</a>
				<a href="/login" class="right-button">Vous êtes déjà inscrit</a>
			</div>
		</div>
	</div>
</FullSection>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.splash {
		position: absolute;
		bottom: 5em;
		right: 10em;
		background: var(--negative);
		color: var(--positive);
		width: 40em;
		height: 9em;
		padding: 0 3em;
		border-radius: 1em;
	}

	span {
		display: inline-block;
		font-size: 2em;
		margin: 1em 0;
	}

	span > h1 {
		display: inline-block;
		font-size: 1em;
		margin: 0;
		padding: 0;
	}

	span > small {
		display: block;
		font-size: 0.7em;
		font-style: italic;
		opacity: 0.6;
	}

	.buttons {
		display: flex;
		position: absolute;
		right: -5em;
	}

	.buttons > *:first-child {
		border-radius: 1em 0 0 1em;
	}

	.buttons > *:last-child {
		border-radius: 0 1em 1em 0;
	}

	.left-button,
	.right-button {
		font-weight: 600;
		padding: 1em 2em;
		cursor: pointer;
		user-select: none;
	}

	.left-button {
		background-color: var(--primary);
	}

	.right-button {
		background-color: var(--secondary);
	}
</style>
