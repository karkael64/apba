import { client } from "./client.mjs";
import { seedUser } from "./user.mjs";
import { seedUserLevel } from "./userLevel.mjs";

const scenario = async () => {
	await seedUserLevel();
	await seedUser();

	console.log({
		userLevels: await client.userLevel.findMany(),
		users: await client.user.findMany(),
	});
};

scenario()
	.then(() => {
		console.log("✔ Seeded");
		process.exit(0);
	})
	.catch((err) => {
		console.log("➜ process.env.DATABASE_URL", process.env.DATABASE_URL);
		console.error("✘ PostgreSQL server not working!", err);
		process.exit(1);
	});
