import type { RequestHandler } from '@sveltejs/kit';
import { client, User } from '$lib/db';
import { getSession } from '../../../hooks';

const objectPick = <T extends Record<string, unknown>, K extends string = keyof T & string>(
	object: T,
	keys: K[]
) =>
	keys.reduce((acc, key) => {
		if (key in object) {
			acc[key] = object[key];
		}
		return acc;
	}, {} as Pick<T, K>);

const userPickAttributes = (object: User & Record<string, unknown>): Omit<User, 'id'> =>
	objectPick(object, ['email', 'levelId', 'name']);

export const get: RequestHandler<never, never, { user: User }> = async ({ params: { uid } }) => ({
	body: { user: await client.user.findUnique({ where: { id: parseInt(uid) } }) }
});

export const patch: RequestHandler<never, Partial<User>, { user: User }> = async ({
	params: { uid },
	body: data
}) => ({
	body: {
		user: await client.user.update({
			where: { id: parseInt(uid) },
			data: userPickAttributes(data as User)
		})
	}
});

export const del: RequestHandler<never, never, { user: User }> = async ({ params: { uid } }) => ({
	body: { user: await client.user.delete({ where: { id: parseInt(uid) } }) }
});
