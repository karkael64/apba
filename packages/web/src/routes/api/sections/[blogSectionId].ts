import type { RequestHandler } from '@sveltejs/kit';
import { client, BlogSection } from '$lib/db';

export const get: RequestHandler<never, never, { blog: BlogSection }> = async ({
	params: { id }
}) => ({
	body: { blog: await client.blogSection.findUnique({ where: { id: parseInt(id) } }) }
});

export const patch: RequestHandler<
	never,
	Partial<BlogSection>,
	{ blogSection: BlogSection }
> = async ({ params: { blogSectionId }, request }) => {
	const { order, model, json } = await request.json();
	return {
		body: {
			blogSection: await client.blogSection.update({
				where: { id: parseInt(blogSectionId) },
				data: { order, model, json }
			})
		}
	};
};

export const del: RequestHandler<never, never, { blog: BlogSection }> = async ({
	params: { blogSectionId }
}) => ({
	body: { blog: await client.blogSection.delete({ where: { id: parseInt(blogSectionId) } }) }
});
