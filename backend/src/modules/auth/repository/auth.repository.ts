
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export class PrismaAuthRepository {
    async findByEmail(email:string){
        return prisma.user.findUnique({
            where:{email}
        })

    }

    async create(data:any){
        return prisma.user.create({data})
    }
}