import type { SvelteComponentTyped } from "svelte";

export type GalleryPicture = {
	src: string;
	alt: string;
};

declare class Gallery extends SvelteComponentTyped<{ pictures: GalleryPicture[] }> {}

export default Gallery;
