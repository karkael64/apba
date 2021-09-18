import { client } from "./client.mjs";

const users = [
	{
		id: 1,
		name: "admin",
		email: "karkael@gmail.com",
		levelId: 1,
	},
	{
		id: 2,
		name: "contributor",
		email: "karkael2@gmail.com",
		levelId: 2,
	},
];

export const seedUser = () =>
	Promise.all(
		users.map(({ id, ...userBody }) =>
			client.user.upsert({
				where: {
					id,
				},
				update: {
					...userBody,
				},
				create: {
					id,
					...userBody,
				},
			})
		)
	);
