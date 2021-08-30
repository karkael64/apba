import dotenv from "dotenv";
dotenv.config();

import { PrismaClient, PrismaPromise } from "./import";

export const client = new PrismaClient();

export const dbTransaction = <T>(promises: PrismaPromise<T>[]): Promise<T[]> =>
	client.$transaction(promises);
