
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export class PrismaTasksRepository{
   async create (data:any){
    return await prisma.task.create(data)
}
async findByUserId (userId:string){
 return await prisma.task.findMany({
    where: {userId}
 })
}
async findById(id:string){
    return await prisma.task.findUnique({
        where: {id}
    })
}

  async update (id:string,data:any){
    return await prisma.task.update({
        where:{id},
        data
    })
  }
  async delete (id:string){
   await prisma.task.delete({
    where:{id}
   })
  }
}
