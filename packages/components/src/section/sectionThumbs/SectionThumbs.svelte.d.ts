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

export type SectionThumbsProps = { thumbs: Thumb[] };

declare class SectionThumbs extends SvelteComponentTyped<SectionThumbsProps> {}

export default SectionThumbs;
