import type { SvelteComponentTyped } from "svelte";

declare class FullSection extends SvelteComponentTyped<{
	backgroundImage?: string;
	backgroundFilter?: string;
	height?: string;
}> {}

export default FullSection;
