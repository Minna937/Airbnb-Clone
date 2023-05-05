//using Prisma with Next.js 13, write this to prevent next hot reloading
//globalThis is not affected if we are not in production mode (meaning in development mode)
// or import PrismaClient everywhere

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production')
    globalThis.prisma = client;

export default client;