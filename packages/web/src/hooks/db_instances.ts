import { PrismaClient, PrismaPromise } from 'prisma';

export const client = new PrismaClient();

export const dbTransaction = <T>(promises: PrismaPromise<T>[]): Promise<T[]> =>
	client.$transaction(promises);
