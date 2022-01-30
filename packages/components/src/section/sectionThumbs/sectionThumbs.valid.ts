import type { AnyObject } from "../../common/ambient";
import type { JSONSchemaFromType } from "../../common/jsonSchema";
import type { Thumb, SectionThumbsProps } from "./SectionThumbs.svelte";
import { expectBetween, expectString, hasErrors, isValid } from "../../common/jsonSchema";

const schemaThumb: JSONSchemaFromType<Thumb> = {
	properties: {
		pictureUrl: expectString(),
		pictureAlt: expectString(),
		body: expectString(),
		buttonHref: expectString(),
		buttonLabel: expectString(),
		buttonColor: expectBetween(["primary", "secondary"]),
	},
	required: ["pictureUrl", "pictureAlt"],
};

const schemaSectionThumbs: JSONSchemaFromType<SectionThumbsProps> = {
	properties: {
		thumbs: { type: "array", items: schemaThumb },
	},
	required: ["thumbs"],
};

export const isValidSectionThumbs = (obj: AnyObject): obj is SectionThumbsProps => isValid(obj, schemaSectionThumbs);
export const hasErrorsSectionThumbs = (obj: AnyObject) => hasErrors(obj, schemaSectionThumbs);
