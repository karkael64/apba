import type { RequestHandler } from "@sveltejs/kit";
import { nowJSON } from "$lib/date";

export const get: RequestHandler<never, never, { date: string }> = async () => {
	return { body: { date: nowJSON() } };
};
