import type { SvelteComponentTyped } from "svelte";

declare class Intersection extends SvelteComponentTyped<{
	once?: boolean;
	width?: string | number;
	height?: string | number;
}> {}

export default Intersection;
