import type { RequestHandler } from '@sveltejs/kit';
import { client, User } from '$lib/db';
import { objectPick } from '$lib/hooks';

const userPickAttributes = (object: User & Record<string, unknown>): Omit<User, 'id'> =>
	objectPick(object, ['email', 'levelId', 'name']);

export const get: RequestHandler<never, { user: User }> = async ({ params: { uid } }) => ({
	body: { user: await client.user.findUnique({ where: { id: parseInt(uid) } }) }
});

export const patch: RequestHandler<{ uid: string }, { user: User }> = async ({
	params: { uid },
	request
}) => ({
	body: {
		user: await client.user.update({
			where: { id: parseInt(uid) },
			data: userPickAttributes((await request.json()) as User)
		})
	}
});

export const del: RequestHandler<{ uid: string }, { user: User }> = async ({
	params: { uid }
}) => ({
	body: { user: await client.user.delete({ where: { id: parseInt(uid) } }) }
});
