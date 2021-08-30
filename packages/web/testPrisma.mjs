import { PrismaClient } from "../prisma/client/index.js";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const testPrisma = async () => {
	const client = new PrismaClient();
	console.log(await client.user.findMany());
};

testPrisma()
	.then(() => {
		console.log("✔ PostgreSQL server working");
		process.exit(0);
	})
	.catch((err) => {
		console.log("➜ process.env.DATABASE_URL", process.env.DATABASE_URL);
		console.error("✘ PostgreSQL server not working!", err);
		process.exit(1);
	});
