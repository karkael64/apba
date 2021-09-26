import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import dotenv from 'dotenv';
dotenv.config();

import type { PrismaPromise } from '@prisma/client';

export const client = new PrismaClient();

export const dbTransaction = <T>(promises: PrismaPromise<T>[]): Promise<T[]> =>
	client.$transaction(promises);
