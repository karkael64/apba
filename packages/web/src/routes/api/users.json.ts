import type { RequestHandler } from "@sveltejs/kit";
import { client, User } from "$lib/db";

export const get: RequestHandler<never, never, { users: User[] }> = async () => {
	const users = await client.user.findMany();
	return { body: { users } };
};
