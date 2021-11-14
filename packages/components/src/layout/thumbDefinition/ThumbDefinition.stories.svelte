<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import ThumbDefinition from "./ThumbDefinition.svelte";
	import faker from "faker";
</script>

<Meta
	title="Layout/ThumbDefinition"
	component={ThumbDefinition}
	parameters={{ layout: "fullscreen" }}
	argTypes={{
		picturePosition: {
			control: "select",
			options: ["top", "left", "right", "bottom"],
			defaultValue: "top",
		},
	}} />

<Template let:args>
	<div style="display: flex; justify-content: center; align-items: flex-start; flex-wrap: wrap">
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
		<ThumbDefinition {...args} pictureUrl={faker.image.animals()}>{faker.lorem.paragraph()}</ThumbDefinition>
	</div>
</Template>

<Story name="Full" args={{}} />
