import type { SvelteComponentTyped } from "svelte";
import type { ButtonProps } from "../../atoms/buttons/Buttons.svelte";

export type SectionSplashProps = {
	buttonList: ButtonProps[];
	backgroundImages: string[];
	height?: string;
	body?: string;
	variant?: "left";
};

declare class SectionSplash extends SvelteComponentTyped<SectionSplashProps> {}

export default SectionSplash;
