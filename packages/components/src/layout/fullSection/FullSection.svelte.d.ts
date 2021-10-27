import type { SvelteComponentTyped } from "svelte";

declare class FullSection extends SvelteComponentTyped<{
	backgroundImage?: string;
	height?: string;
}> {}

export default FullSection;
