<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import FullSection from "./FullSection.svelte";
	import faker from "faker";
</script>

<Meta title="Layout/FullSection" component={FullSection} parameters={{ layout: "fullscreen" }} />

<Template let:args>
	<FullSection {...args} backgroundImage={faker.image.animals()} />
	<FullSection {...args} backgroundImage={faker.image.animals()} />
	<FullSection {...args} backgroundImage={faker.image.animals()} />
	<FullSection {...args} backgroundImage={faker.image.animals()} />
</Template>

<Story name="Full" args={{}} />
<Story name="Height90" args={{ height: "90vh" }} />
