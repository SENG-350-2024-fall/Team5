import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const Prisma = globalThis.prismaGlobal ?? prismaClientSingleton()
try {
    Prisma.$connect()
} catch (error) {
    console.error("Error connecting db", error)
}

export default Prisma