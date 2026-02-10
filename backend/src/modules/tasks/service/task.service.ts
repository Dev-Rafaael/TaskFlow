import { CreateTaskDTO } from "../dtos/create-task.dto";
import { DeleteTaskDTO } from "../dtos/delete-task.dto";
import { ListTasksByProjectDTO } from "../dtos/list-task.dto";
import { UpdateTaskDTO } from "../dtos/update-task.dto";
import { Task } from "@prisma/client"


type CreateTaskRepositoryInput =
  CreateTaskDTO & {projectId:string, userId: string }

export interface TaskRepository{
 create(data: CreateTaskRepositoryInput): Promise<Task>
  update(taskId: string, data: Partial<Task>): Promise<Task>
  delete(taskId: string): Promise<void>
  findByUserId(userId: string): Promise<Task[]>
  findByProject(projectId: string, userId: string): Promise<Task[]>
  findById(id: string): Promise<Task | null>
 
}
export class TaskService {
  constructor(private repo: TaskRepository) {}

  async create(data: CreateTaskDTO,userId:string,projectId:string) {
    if (!data.title) throw new Error("Title is required");
    if (!userId) throw new Error("UserId is required");
 const projectTask = {
   ...data,
    userId,
    projectId
  };
  return this.repo.create(projectTask)
  }
async findByProject({ projectId,userId }: ListTasksByProjectDTO) {
  if (!userId) throw new Error("UserId is required");
  if (!projectId) throw new Error("projectId is required");

  return this.repo.findByProject(projectId,userId);
}



async update({ taskId, userId, ...data }: UpdateTaskDTO) {
  const task = await this.repo.findById(taskId)

  if (!task) throw new Error("Task not found")
  if (task.userId !== userId) throw new Error("Owner not found")

  const updateData: any = { ...data }

  if (data.status === "DONE") {
    updateData.completedAt = new Date()
  }

  if (data.status && data.status !== "DONE") {
    updateData.completedAt = null
  }

  return this.repo.update(taskId, updateData)
}

  async delete({ taskId, userId }: DeleteTaskDTO) {
    const task = await this.repo.findById(taskId)
    if(!task) throw new Error("Task not found");
    if(task.userId !== userId)throw new Error("Owner not found");

     await this.repo.delete( taskId )
  }
}
