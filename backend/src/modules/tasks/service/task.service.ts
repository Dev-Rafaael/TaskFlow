interface CreateTaskDTO {
  title: string
  description?: string
  priority?: "LOW" | "MEDIUM" | "HIGH"
  dueDate?: Date

  projectId: string
  userId: string
}
interface UpdateTaskDTO {
  taskId: string
  userId: string

  title?: string
  description?: string
  priority?: "LOW" | "MEDIUM" | "HIGH"
  dueDate?: Date
  status?: "TODO" | "DOING" | "DONE"
}
interface DeleteTaskDTO {
  taskId: string
  userId: string
}
interface ListTasksByProjectDTO {
  projectId: string
  userId: string
}


export class TaskService{
constructor(private repo:any){}

async create(data:any){}
async list(userId:string){}
async update(taskId:string,data:any){}
async delete(taskId:string,userId:string){}
}