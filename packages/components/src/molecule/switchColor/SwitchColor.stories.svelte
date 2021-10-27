<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import SwitchColor from "./SwitchColor.svelte";
	import faker from "faker";
</script>

<Meta title="Molecule/SwitchColor" component={SwitchColor} />

<Template let:args>
	<SwitchColor {...args} backgroundImage={faker.image.animals()} />
</Template>

<Story name="Default" />
