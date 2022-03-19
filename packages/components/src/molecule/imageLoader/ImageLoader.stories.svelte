<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import ImageLoader from "./ImageLoader.svelte";

	const rand = (min = 0, max = 200) => Math.floor(Math.random() * (max - min)) + min;
	const listImages = (count = 1, width = 640, height = 480) =>
		Array.from({ length: count }).map(() => `https://picsum.photos/seed/${rand()}/${width}/${height}`);
</script>

<Meta
	title="Molecule/ImageLoader"
	argTypes={{
		width: { defaultValue: 640, type: "number" },
		height: { defaultValue: 480, type: "number" },
		transitionDuration: { defaultValue: 0.6, type: "number" },
	}}
	component={ImageLoader} />

<Template let:args={{ count, width, height, transitionDuration }}>
	{#each listImages(count, width, height) as src}
		<ImageLoader {src} {width} {height} {transitionDuration} alt="Example" />
	{/each}
</Template>

<Story name="Single" args={{ count: 1 }} />
<Story name="Twelve" args={{ count: 12 }} />
