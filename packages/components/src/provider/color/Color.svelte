<script lang="ts">
	import { onMount } from "svelte";

	import { dark, light } from "../../../common/colors";
	import { objectReduce } from "../../../common/object";
	import { colorScheme } from "./colorScheme";

	export let defaultColorScheme: "light" | "dark" | undefined;

	if (defaultColorScheme) {
		colorScheme.set(defaultColorScheme);
	}

	let el: HTMLStyleElement;

	const colorsToCssVar = (obj: Record<string, string>) =>
		objectReduce(obj, (acc, item, key) => `${acc}\n--${key}: ${item};`, "");

	let index: number;

	onMount(() => {
		colorScheme.subscribe((value) => {
			if (index !== undefined) {
				el.sheet.deleteRule(index);
			}
			if (value === "light") {
				index = el.sheet.insertRule(`:root {${colorsToCssVar(light)}\n}`);
			} else {
				index = el.sheet.insertRule(`:root {${colorsToCssVar(dark)}\n}`);
			}
		});
	});
</script>

<svelte:head>
	<style bind:this={el}></style>
</svelte:head>

<slot />
