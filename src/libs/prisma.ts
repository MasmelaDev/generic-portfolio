import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE !== "production") global.prisma = prisma;

export const db = prisma;
