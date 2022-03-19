<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import type { GalleryPicture } from "./Gallery.svelte";
	import Gallery from "./Gallery.svelte";
	import faker from "faker";

	const fakePicture = (): GalleryPicture => ({
		alt: faker.random.words(3),
		src: faker.image.nightlife(),
	});

	const fakePictures = (length = 3) => Array.from({ length }, fakePicture);
</script>

<Meta
	title="Molecule/Gallery"
	component={Gallery}
	argTypes={{
		count: { defaultValue: 3, type: "number" },
	}} />

<Template let:args={{ count }}>
	<Gallery pictures={fakePictures(count)} />
</Template>

<Story name="Default" args={{ count: 3 }} />
