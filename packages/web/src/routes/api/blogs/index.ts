import { client, Blog } from '$lib/db';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	const { authorId, body, slug, title } = (await request.json()) as Blog;
	return { body: { blog: await client.blog.create({ data: { authorId, body, slug, title } }) } };
};
