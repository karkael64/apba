<script lang="ts">
	import { onMount } from "svelte";

	import { dark, light } from "../../common/colors";
	import { objectReduce } from "../../common/object";
	import { colorScheme } from "./colorScheme";

	export let defaultColorScheme: "light" | "dark" | undefined;

	let el: HTMLStyleElement;

	const colorsToCssVar = (obj: Record<string, string>) =>
		objectReduce(obj, (acc, item, key) => `${acc}\n--${key}: ${item};`, "");

	let index: number;

	onMount(() => {
		colorScheme.subscribe((value) => {
			if (!el) {
				return;
			}
			if (index !== undefined) {
				el.sheet.deleteRule(index);
			}
			if (value === "light") {
				index = el.sheet.insertRule(`:root {${colorsToCssVar(light)}\n}`);
				localStorage.setItem("color-scheme", "light");
			} else if (value === "dark") {
				index = el.sheet.insertRule(`:root {${colorsToCssVar(dark)}\n}`);
				localStorage.setItem("color-scheme", "dark");
			} else {
				const localStorageColorScheme = localStorage.getItem("color-scheme") as "light" | "dark";
				const userPreferColorScheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
				const setColorScheme = defaultColorScheme || localStorageColorScheme || userPreferColorScheme;
				colorScheme.set(setColorScheme === "light" ? "light" : "dark");
			}
		});
	});
</script>

<svelte:head>
	<style bind:this={el}></style>
</svelte:head>

<slot />
