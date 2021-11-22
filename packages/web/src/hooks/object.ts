export const objectPick = <T extends Record<string, unknown>, K extends string = keyof T & string>(
	object: T,
	keys: K[]
) =>
	keys.reduce((acc, key) => {
		if (key in object) {
			acc[key] = object[key];
		}
		return acc;
	}, {} as Pick<T, K>);
