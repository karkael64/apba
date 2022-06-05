import type { RequestHandler } from '@sveltejs/kit';
import { client, Blog, BlogSection } from '$lib/db';
import { objectPick } from '$lib/hooks';

const blogPickAttributes = (object: Blog & Record<string, unknown>): Omit<Blog, 'id'> =>
	objectPick(object, ['authorId', 'slug', 'title', 'body']);

export const get: RequestHandler<never, { blog: Blog & { sections: BlogSection[] } }> = async ({
	params: { blogId: slug }
}) => {
	console.log({ client });
	const id = parseInt(slug);
	if (isNaN(id)) {
		return {
			body: {
				blog: await client.blog.findFirst({ where: { slug }, include: { sections: true } })
			}
		};
	}

	return {
		body: {
			blog: await client.blog.findUnique({ where: { id }, include: { sections: true } })
		}
	};
};

export const patch: RequestHandler<{ slug: string }, { blog: Blog }> = async ({
	params: { slug: id },
	request
}) => ({
	body: {
		blog: await client.blog.update({
			where: { id: parseInt(id) },
			data: blogPickAttributes((await request.json()) as Blog)
		})
	}
});

export const del: RequestHandler<never, { blog: Blog }> = async ({ params: { slug: id } }) => ({
	body: { blog: await client.blog.delete({ where: { id: parseInt(id) } }) }
});
