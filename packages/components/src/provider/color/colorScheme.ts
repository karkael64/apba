import { writable } from "svelte/store";
export const colorScheme = writable<"light" | "dark">(
	window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
);
