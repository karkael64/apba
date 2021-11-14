<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		color: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
		shape: {
			control: {
				type: "select",
				options: ["square", "round", "circle"],
			},
		},
	}} />

<Template let:args>
	<Button {...args} on:click={args.onClick}>{args.label}</Button>
</Template>

<Story
	name="Primary"
	args={{
		color: "primary",
		label: "Button",
	}} />

<Story
	name="Secondary"
	args={{
		label: "Button",
	}} />

<Story
	name="Square"
	args={{
		shape: "square",
		label: "Button",
	}} />

<Story
	name="Circle"
	args={{
		shape: "circle",
		label: "Button",
	}} />
