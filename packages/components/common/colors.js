import { objectMap } from "./object";
import { camelToKebab } from "./string";

const negative = "#212529";
const minus = "#343a40";
const medium = "#6c757d";
const bonus = "#ced4da";
const positive = "#e9ecef";
// https://coolors.co/9e0031-8e0045-770058-600047-44001a
const primary = "#9e0031"; // vividBurgundy
const secondary = "#770058"; // byzantium
const pansyPurple = "#8e0045"; // pansyPurple
const tyrianPurple = "#600047"; // tyrianPurple
const darkSienna = "#44001a"; // darkSienna

// brightness +30%
const negativeLight = "#f8f9fa";
const minusLight = "#e9ecef";
const mediumLight = "#ced4da";
const bonusLight = "#6c757d";
const positiveLight = "#343a40";
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
