<script lang="ts">
	import type { ButtonProps } from "../../atoms/buttons/Buttons.svelte";
	import Buttons from "../../atoms/buttons/Buttons.svelte";
	import FullSection from "../../layout/fullSection/FullSection.svelte";
	import { ImageLoader } from "../../molecule";

	export let buttonList: ButtonProps[];
	export let backgroundImages: string[];
	export let height = "80vh";
	export let body = "";
	export let className = "";
</script>

<FullSection {height}>
	<div class="split-background">
		{#each backgroundImages as backgroundImage}
			<ImageLoader src={backgroundImage} alt="" />
		{/each}
	</div>
	<div class={`splash ${className}`}>
		{@html body}
		<Buttons list={buttonList} />
	</div>
</FullSection>

<style>
	.splash {
		position: absolute;
		bottom: 5em;
		right: 10em;
		background: linear-gradient(var(--negative), var(--minus));
		color: var(--positive);
		width: 40em;
		padding: 2em 3em;
		border-radius: 1em;
	}

	.splash.left {
		left: 10em;
		right: auto;
	}

	.split-background {
		display: flex;
		height: 100%;
	}
</style>
