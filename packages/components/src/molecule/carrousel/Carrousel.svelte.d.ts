import type { SvelteComponentTyped } from "svelte";

export type CarrouselPicture = {
	src: string;
	alt: string;
};

declare class Carrousel extends SvelteComponentTyped<{
	pictures: CarrouselPicture[];
	/** milliseconds */
	duration?: number;
	height?: string | number;
}> {}

export default Carrousel;
