import { prisma } from "../../../libs/prisma"
import { CreateProjectDTO } from "../dtos/create-project.dto"
import { UpdateProjectDTO } from "../dtos/update-project.dto"

interface CreateProjectRepositoryInput extends CreateProjectDTO {
  userId: string
}

export class PrismaProjectRepository{
   async create (data:CreateProjectRepositoryInput){
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

  async update (projectId:string,data:UpdateProjectDTO){
    return prisma.project.update({
        where: {id:projectId},
        data
    })
  }
 async delete(projectId: string): Promise<void> {
  await prisma.project.delete({
    where: { id: projectId }
  })
}
}
