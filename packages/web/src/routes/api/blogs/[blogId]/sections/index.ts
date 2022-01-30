import { client, BlogSection } from '$lib/db';
import { isModelName, modelErrors } from 'components';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<never, never, { blogSections: BlogSection[] }> = async ({
	params: { blogId }
}) => ({
	body: { blogSections: await client.blogSection.findMany({ where: { blogId: parseInt(blogId) } }) }
});

export const post: RequestHandler<never, Partial<BlogSection>, string> = async ({
	params: { blogId: rawBlogId },
	request
}) => {
	const blogId = parseInt(rawBlogId);
	const blog = await client.blog.findUnique({ where: { id: blogId } });
	if (!blog) {
		return { status: 400, body: `Blog id=${blogId} is not reachable` };
	}
	const { order, model, json: jsonRaw } = await request.json();
	if (!isModelName(model)) {
		return { status: 400, body: `Model name=${model} is not reachable` };
	}
	const json = typeof jsonRaw === 'string' ? jsonRaw : JSON.stringify(jsonRaw);
	const errors = modelErrors[model]?.(JSON.parse(json));
	if (errors.length) {
		return {
			status: 400,
			body: `JSON does not match model name=${model} on attributes=${JSON.stringify(errors)}`
		};
	}
	const blogSection = await client.blogSection.create({
		data: { blogId, order, model, json }
	});
	if (blogSection) {
		return { status: 302, headers: { location: `./${blogSection.id}` } };
	}
};
