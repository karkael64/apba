import type { SvelteComponentTyped } from "svelte";

declare class ImageLoader extends SvelteComponentTyped<{
	src: string;
	alt: string;
	width?: string | number;
	height?: string | number;
	transitionDuration?: number;
}> {}

export default ImageLoader;
