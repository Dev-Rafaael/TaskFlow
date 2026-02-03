import { prisma } from "../../../libs/prisma"



export class PrismaProjectRepository{
   async create (data:any){
    return prisma.project.create({data})
}
async findByUserId (userId:string){
    return prisma.project.findMany({
        where: {userId}
    })
}
async findById(id:string){
    return prisma.project.findUnique({
        where:{id}
    })
}

  async update (id:string,data:any){
    return prisma.project.update({
        where: {id},
        data
    })
  }
  async delete (id:string){
    return prisma.project.delete({
        where: {id}
    })
  }
}
