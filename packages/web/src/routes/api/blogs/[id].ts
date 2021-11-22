import type { RequestHandler } from '@sveltejs/kit';
import { client, Blog } from '$lib/db';
import { objectPick } from '$lib/hooks';

const blogPickAttributes = (object: Blog & Record<string, unknown>): Omit<Blog, 'id'> =>
	objectPick(object, ['authorId', 'slug', 'title', 'body']);

export const get: RequestHandler<never, never, { blog: Blog }> = async ({ params: { id } }) => ({
	body: { blog: await client.blog.findUnique({ where: { id: parseInt(id) } }) }
});

export const patch: RequestHandler<never, Partial<Blog>, { blog: Blog }> = async ({
	params: { id },
	body: data
}) => ({
	body: {
		blog: await client.blog.update({
			where: { id: parseInt(id) },
			data: blogPickAttributes(data as Blog)
		})
	}
});

export const del: RequestHandler<never, never, { blog: Blog }> = async ({ params: { id } }) => ({
	body: { blog: await client.blog.delete({ where: { id: parseInt(id) } }) }
});