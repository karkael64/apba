import type { SvelteComponentTyped } from "svelte";

declare class Button extends SvelteComponentTyped<
	{
		href?: string;
		color?: "primary" | "secondary";
		shape?: "square" | "round" | "circle";
	},
	{
		click: Event;
	},
	{
		default: string | SvelteComponentTyped;
	}
> {}

export default Button;
