<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Carrousel, { CarrouselPicture } from "./Carrousel.svelte";
	import faker from "faker";

	const fakePicture = (): CarrouselPicture => ({
		alt: faker.random.words(3),
		src: faker.image.nightlife(),
	});

	const fakePictures = () => Array.from({ length: 3 }, fakePicture);
</script>

<Meta title="Molecule/Carrousel" component={Carrousel} />

<Template let:args={{ pictures }}>
	<Carrousel {pictures} />
</Template>

<Story name="Default" args={{ pictures: fakePictures() }} />
