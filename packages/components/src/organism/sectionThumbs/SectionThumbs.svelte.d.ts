import type { SvelteComponentTyped } from "svelte";
import type { ButtonProps } from "../../atoms/buttons/Buttons.svelte";

export type Thumb = {
	pictureUrl: string;
	pictureAlt: string;
	buttonHref?: string;
	buttonLabel?: string;
	buttonColor?: "primary" | "secondary";
	body?: string;
};

declare class SectionSplash extends SvelteComponentTyped<{ thumbs: Thumb[] }> {}

export default SectionSplash;
