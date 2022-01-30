import type { ButtonProps } from "../../atoms/buttons/Buttons.svelte";
import type { SectionSplashProps } from "./SectionSplash.svelte";
import type { AnyObject } from "../../common/ambient";
import type { JSONSchemaFromType } from "../../common/jsonSchema";
import { expectBetween, expectString, expectStringList, isValid, hasErrors } from "../../common/jsonSchema";

const schemaButton: JSONSchemaFromType<ButtonProps> = {
	properties: {
		color: expectBetween(["primary", "secondary"]),
		href: expectString(),
		text: expectString(),
	},
	required: [],
};

const schemaSectionSplash: JSONSchemaFromType<SectionSplashProps> = {
	properties: {
		backgroundImages: expectStringList(),
		buttonList: { type: "array", items: schemaButton },
		body: expectString(),
		height: expectString(),
		variant: expectBetween(["left"]),
	},
	required: ["buttonList", "backgroundImages"],
};

export const isValidSectionSplash = (obj: AnyObject): obj is SectionSplashProps => isValid(obj, schemaSectionSplash);
export const hasErrorsSectionSplash = (obj: AnyObject) => hasErrors(obj, schemaSectionSplash);
