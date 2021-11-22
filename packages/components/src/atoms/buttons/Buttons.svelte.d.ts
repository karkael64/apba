import type { SvelteComponentTyped } from "svelte";

export type ButtonProps = {
	href?: string;
	color?: "primary" | "secondary";
	text?: string;
};

declare class Buttons extends SvelteComponentTyped<
	{ list: ButtonProps[] },
	{ click: Event },
	{ default: string | SvelteComponentTyped }
> {}

export default Buttons;
