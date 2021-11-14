let picturePosition = "top";
let pictureUrl: string;
let pictureAlt: string;
import type { SvelteComponentTyped } from "svelte";

declare class FullSection extends SvelteComponentTyped<{
	picturePosition?: "top" | "right" | "bottom" | "left";
	pictureUrl: string;
	pictureAlt: string;
	pictureSize?: string;
}> {}

export default FullSection;
