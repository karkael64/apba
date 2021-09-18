import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Client } = pkg;

export const testPsql = () =>
	new Promise((resolve, reject) => {
		const client = new Client({
			connectionString: process.env.DATABASE_URL,
			ssl: false,
		});

		client
			.connect()
			.then(() =>
				client.query(
					"SELECT table_schema, table_name FROM information_schema.tables;",
					(err, res) => {
						client.end();
						if (err) return reject(err);
						console.log(`✔ server is reachable.`);

						if (res.rows?.length) {
							const grouped = res.rows.reduce((acc, row) => {
								if (!acc[row.table_schema]) {
									acc[row.table_schema] = [];
								}
								acc[row.table_schema].push(row.table_name);
								return acc;
							}, {});

							console.log(
								`✔ tables found (${res.rows?.length} items):`,
								grouped
							);

							return resolve();
						}

						console.error(
							`✘ no public table found, please load your schema with \`prisma db push\`.`
						);
						reject();
					}
				)
			)
			.catch(reject);
	});

testPsql()
	.then(() => {
		console.log("✔ PostgreSQL server working");
		process.exit(0);
	})
	.catch((err) => {
		console.log("➜ process.env.DATABASE_URL", process.env.DATABASE_URL);
		console.error("✘ PostgreSQL server not working!", err);
		process.exit(1);
	});
