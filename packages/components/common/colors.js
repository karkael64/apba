import { objectMap } from "./object";
import { camelToKebab } from "./string";

// https://coolors.co/9e0031-8e0045-770058-600047-44001a
const positive = "#000000";
const minus = "#c8c8c8";
const medium = "#a1a1a1";
const bonus = "#666666";
const negative = "#ffffff";
const primary = "#9e0031"; // vividBurgundy
const secondary = "#770058"; // byzantium
const pansyPurple = "#8e0045"; // pansyPurple
const tyrianPurple = "#600047"; // tyrianPurple
const darkSienna = "#44001a"; // darkSienna

// brightness +30%
const positiveLight = "#ffffff";
const minusLight = "#666666";
const mediumLight = "#a1a1a1";
const bonusLight = "#c8c8c8";
const negativeLight = "#000000";
const primaryLight = "#ff2c6f";
const secondaryLight = "#ff13c0";
const pansyPurpleLight = "#ff238d";
const tyrianPurpleLight = "#ff07bd";
const darkSiennaLight = "#f4005d";

export const colors = {
	positive,
	bonus,
	medium,
	minus,
	negative,
	primary,
	secondary,
	pansyPurple,
	tyrianPurple,
	darkSienna,
	positiveLight,
	bonusLight,
	mediumLight,
	minusLight,
	negativeLight,
	primaryLight,
	pansyPurpleLight,
	secondaryLight,
	tyrianPurpleLight,
	darkSiennaLight,
};

export const dark = {
	positive,
	bonus,
	medium,
	minus,
	negative,
	primary,
	secondary,
	pansyPurple,
	tyrianPurple,
	darkSienna,
};

export const light = {
	positive: positiveLight,
	bonus: bonusLight,
	medium: mediumLight,
	minus: minusLight,
	negative: negativeLight,
	primary: primaryLight,
	secondary: secondaryLight,
	pansyPurple: pansyPurpleLight,
	tyrianPurple: tyrianPurpleLight,
	darkSienna: darkSiennaLight,
};

export const darkVar = objectMap(dark, (_, key) => `var(--${camelToKebab(key)})`);
export const lightVar = objectMap(light, (_, key) => `var(--${camelToKebab(key)})`);
