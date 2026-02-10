import { Task } from "@prisma/client"
import { prisma } from "../../../libs/prisma"
import { CreateTaskDTO, TaskDTO } from "../schema/task.schema"
import { TaskRepository } from "../service/task.service"

interface CreateTaskRepositoryInput extends CreateTaskDTO {
  projectId: string
  userId: string
}

export class PrismaTasksRepository implements TaskRepository
{
async create(data: CreateTaskRepositoryInput): Promise<Task> {
  return prisma.task.create({ data })

}
async findByUserId (userId:string){
    return prisma.task.findMany({
        where: {userId}
    })
}
async findById(id:string){
    return await prisma.task.findUnique({
        where: {id}
    })
}
findByProject(projectId: string, userId: string) {
  return prisma.task.findMany({
    where: {
      projectId,
      userId
    }
  })
}

  async update (taskId: string, data: Partial<Task>){
    return await prisma.task.update({
        where:{id:taskId},
        data
    })
  }
  async delete (taskId:string){
   await prisma.task.delete({
    where:{id:taskId}
   })
  }
}
