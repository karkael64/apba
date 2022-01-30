import type { RequestHandler } from '@sveltejs/kit';
import { client, User } from '$lib/db';

export const get: RequestHandler<never, never, { users: User[] }> = async () => ({
	body: { users: await client.user.findMany() }
});

export const post: RequestHandler<never, { user: User }> = async ({ request }) => {
	const {
		user: { email, levelId, name }
	} = await request.json();
	const cookie = request.headers.get('cookie');

	if (!cookie) {
		return { status: 403 };
	}

	try {
		const user = await client.user.create({ data: { email, levelId, name } });

		const { id } = user;

		return {
			status: 302,
			headers: {
				location: `/api/users/${id}`
			}
		};
	} catch (e) {
		return {
			status: 400,
			body: { message: `${e}` }
		};
	}
};
