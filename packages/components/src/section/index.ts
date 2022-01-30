export { default as SectionSplash } from "./sectionSplash/SectionSplash.svelte";
export { default as SectionThumbs } from "./sectionThumbs/SectionThumbs.svelte";

import { hasErrorsSectionSplash, isValidSectionSplash } from "./sectionSplash/sectionSplash.valid";
import { hasErrorsSectionThumbs, isValidSectionThumbs } from "./sectionThumbs/sectionThumbs.valid";

export const modelValidation = { SectionSplash: isValidSectionSplash, SectionThumbs: isValidSectionThumbs };
export const modelErrors = { SectionSplash: hasErrorsSectionSplash, SectionThumbs: hasErrorsSectionThumbs };
export const isModelName = (el: string): el is keyof typeof modelValidation => el in modelValidation;
