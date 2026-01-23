import { CreateTaskDTO } from "../dtos/create-task.dto";
import { DeleteTaskDTO } from "../dtos/delete-task.dto";
import { ListTasksByProjectDTO } from "../dtos/list-task.dto";
import { UpdateTaskDTO } from "../dtos/update-task.dto";


export class TaskService {
  constructor(private repo: any) {}

  async create({ title, userId, projectId, description, priority }: CreateTaskDTO) {
    if (!title) throw new Error("Title is required");
    if (!userId) throw new Error("UserId is required");
     if (!projectId) throw new Error("ProjectId is required");
   return await this.repo.create({
    title,
    description,
    priority,
    projectId,
    userId,
  });
  }
async listByProject({ projectId, userId }: ListTasksByProjectDTO) {
  if (!userId) throw new Error("UserId is required");
  if (!projectId) throw new Error("ProjectId is required");

  return this.repo.findByProjectId(projectId, userId);
}



  async update({ taskId,userId, ...data }: UpdateTaskDTO) {
    const task = await this.repo.findById(taskId)

    if(!task)throw new Error("Task not found");
    if(task.userId !== userId)throw new Error("Owner not found");

     if (data.status === "DONE") {
      data.completedAt = new Date();
    }

    if (data.status && data.status !== "DONE") {
      data.completedAt = null;
    }
    return await this.repo.update(taskId,data)

  }
  async delete({ taskId, userId }: DeleteTaskDTO) {
    const task = await this.repo.findById(taskId)
    if(!task) throw new Error("Task not found");
    if(task.userId !== userId)throw new Error("Owner not found");

     await this.repo.delete(taskId)
  }
}
