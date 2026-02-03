import { prisma } from "../../../libs/prisma"
import { RegisterDTO } from "../schema/auth.schema"


    export class PrismaAuthRepository {
        async findByEmail(email:string){
            return prisma.user.findUnique({
                where:{email}
            })

        }

        async create(data:Omit<RegisterDTO, "confirmPassword">){
            return prisma.user.create({data,
                select:{
                    id:true,
                    name:true,
                    email:true,
                    dataNascimento:true,
                    createdAt:true
                }
            })
        }
    }