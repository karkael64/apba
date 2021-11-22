import type { SvelteComponentTyped } from "svelte";
import type { ButtonProps } from "../../atoms/buttons/Buttons.svelte";

declare class SectionSplash extends SvelteComponentTyped<{
	buttonList: ButtonProps[];
	backgroundImages: string[];
	height?: string;
	body?: string;
	className?: "left";
}> {}

export default SectionSplash;
