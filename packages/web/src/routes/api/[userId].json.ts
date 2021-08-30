import type { RequestHandler } from "@sveltejs/kit";
import { client, User } from "$lib/db";

export const get: RequestHandler<never, never, { user: User }> = async ({ params: { userId } }) => {
	const id = parseInt(userId);
	const user = await client.user.findFirst({ where: { id } });
	return { body: { user } };
};
