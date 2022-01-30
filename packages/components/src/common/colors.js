import { objectMap } from "./object";
import { camelToKebab } from "./string";

const negative = "#212529";
const minus = "#343a40";
const medium = "#6c757d";
const bonus = "#ced4da";
const positive = "#e9ecef";
// https://coolors.co/d70a18-a60000-940f20-790f1f
const primary = "#d70a18"; // maximumRed
const secondary = "#a60000"; // rufous
const sinopia = "#940f20"; // carmine
const burntSienna = "#790f1f"; // burgundy

// brightness +30%
const negativeLight = "#f8f9fa";
const minusLight = "#e9ecef";
const mediumLight = "#ced4da";
const bonusLight = "#6c757d";
const positiveLight = "#343a40";
// https://coolors.co/f6656e-ff0000-da1e37-b21e35
const primaryLight = "#f6656e"; // fieryRose
const secondaryLight = "#ff0000"; // red
const sinopiaLight = "#da1e37"; // crimson
const burntSiennaLight = "#b21e35"; // redNCS

export const colors = {
	positive,
	bonus,
	medium,
	minus,
	negative,

	primary,
	secondary,
	sinopia,
	burntSienna,

	positiveLight,
	bonusLight,
	mediumLight,
	minusLight,
	negativeLight,

	primaryLight,
	secondaryLight,
	sinopiaLight,
	burntSiennaLight,
};

export const dark = {
	positive,
	bonus,
	medium,
	minus,
	negative,
	primary,
	secondary,
	sinopia,
	burntSienna,
};

export const light = {
	positive: positiveLight,
	bonus: bonusLight,
	medium: mediumLight,
	minus: minusLight,
	negative: negativeLight,
	primary: primaryLight,
	secondary: secondaryLight,
	sinopia: sinopiaLight,
	burntSienna: burntSiennaLight,
};

export const darkVar = objectMap(dark, (_, key) => `var(--${camelToKebab(key)})`);
export const lightVar = objectMap(light, (_, key) => `var(--${camelToKebab(key)})`);
