export const objectReduce = <T, R>(
	obj: T,
	reducer: (acc: R, item: T[keyof T], key: keyof T, all: T) => R,
	init: R
): R => (Object.keys(obj) as (keyof T)[]).reduce((acc, key) => reducer(acc, obj[key], key, obj), init);

export const objectMap = <T, R>(obj: T, mapper: (item: T[keyof T], key: keyof T, all: T) => R): Record<keyof T, R> =>
	objectReduce(
		obj,
		(acc, item, key) => {
			acc[key] = mapper(item, key, obj);
			return acc;
		},
		{} as Record<keyof T, R>
	);
