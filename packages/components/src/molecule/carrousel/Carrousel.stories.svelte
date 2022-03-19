<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import type { CarrouselPicture } from "./Carrousel.svelte";
	import Carrousel from "./Carrousel.svelte";
	import faker from "faker";

	const fakePicture = (): CarrouselPicture => ({
		alt: faker.random.words(3),
		src: faker.image.nightlife(),
	});

	const fakePictures = (length = 3) => Array.from({ length }, fakePicture);
</script>

<Meta
	title="Molecule/Carrousel"
	component={Carrousel}
	argTypes={{
		count: { defaultValue: 3, type: "number" },
	}} />

<Template let:args={{ count }}>
	<Carrousel pictures={fakePictures(count)} />
</Template>

<Story name="Default" args={{ count: 3 }} />
