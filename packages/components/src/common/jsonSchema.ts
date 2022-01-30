import { JSONSchema7, mustBeValid, validate } from "json-schema";
import type { AnyObject } from "./ambient";

export type JSONSchemaFromType<T extends AnyObject> = JSONSchema7 & {
	properties: {
		[k in keyof T]: JSONSchema7;
	};
	required: (keyof T)[];
};

export const hasErrors = (obj: AnyObject, schema: JSONSchema7) => validate(obj, schema)["errors"];
export const isValid = (obj: AnyObject, schema: JSONSchema7) => validate(obj, schema)["valid"];
export const shouldBe = (obj: AnyObject, schema: JSONSchema7): boolean => {
	mustBeValid(validate(obj, schema));
	return true;
};

export const expectString = (): JSONSchema7 => ({ type: "string" });
export const expectBetween = (anyOf: (string | number | boolean | null)[]): JSONSchema7 => ({ enum: anyOf });
export const expectStringList = (): JSONSchema7 => ({ type: "array", items: { type: "string" } });
