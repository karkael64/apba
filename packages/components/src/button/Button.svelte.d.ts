import type { SvelteComponentTyped } from "svelte";

declare class Button extends SvelteComponentTyped<
  {
    primary?: boolean;
    size?: "small" | "medium" | "large";
    label: string;
  },
  {
    click: Event;
  }
> {}

export default Button;
