import type { SvelteComponentTyped } from "svelte";

declare class Button extends SvelteComponentTyped<
	{
		list: {
			href?: string;
			color?: "primary" | "secondary";
			text?: string;
		}[];
	},
	{
		click: Event;
	},
	{
		default: string | SvelteComponentTyped;
	}
> {}

export default Button;
