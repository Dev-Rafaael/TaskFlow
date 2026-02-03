import { prisma } from "../../../libs/prisma"


export class PrismaUserRepository{

async findByUserId (userId:string){
  return await prisma.user.findMany({
    where:{id:userId}
  })
}
async findById(id:string){
 return await prisma.user.findUnique({
  where:{id}
 })
}

  async update (id:string,data:any){
    return await prisma.user.update({
      where:{id},
      data
    })
  }

}
