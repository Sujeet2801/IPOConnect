import { PrismaClient } from "../generated/prisma/index.js";

const golbalForPrisma = globalThis;

export const db = golbalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") golbalForPrisma.prisma = db;