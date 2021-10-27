import { SvelteComponentTyped } from "svelte";

declare class Lang extends SvelteComponentTyped<
  { buildRoute?(langCode: string): string },
  {},
  { test: SvelteComponentTyped }
> {}

export default Lang;
