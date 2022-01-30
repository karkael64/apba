type ColorName =
	| "positive"
	| "bonus"
	| "medium"
	| "minus"
	| "negative"
	| "primary"
	| "secondary"
	| "sinopia"
	| "burntSienna";

type ColorLightName = `${ColorName}Light`;

export const colors: Record<ColorName | ColorLightName, string>;
export const dark: Record<ColorName, string>;
export const light: Record<ColorLightName, string>;
export const darkVar: Record<ColorName, string>;
export const lightVar: Record<ColorLightName, string>;
