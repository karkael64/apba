import { camelToKebab } from "./string";

export type CSSObject = Partial<Record<keyof CSSStyleDeclaration, string | number>>;
export type CSSObjectRule = Record<string, CSSObject>;

export const objectToStyleString = (obj: CSSObject) =>
	Object.entries(obj)
		.reduce((acc, [field, value]) => {
			if (typeof value === "string" || typeof value === "number") {
				acc.push(`  ${camelToKebab(field)}: ${value}`);
			}
			return acc;
		}, [])
		.join(";\n");
