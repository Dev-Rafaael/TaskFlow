import { TaskController } from "../controller/task.controller";
import { PrismaTasksRepository } from "../repository/tasks.repository";
import { TaskService } from "../service/task.service";



export function MakeTaskController(){
const repo = new PrismaTasksRepository()
const service = new TaskService(repo)
return new TaskController(service)
}