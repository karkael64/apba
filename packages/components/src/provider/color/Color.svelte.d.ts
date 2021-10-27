import type { SvelteComponentTyped } from "svelte";

declare class Color extends SvelteComponentTyped<
	{ defaultColorScheme?: "light" | "dark" },
	{},
	{ default: SvelteComponent }
> {}

export default Color;
