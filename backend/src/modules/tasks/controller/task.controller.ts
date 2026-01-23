
import { TaskService } from "../service/task.service";

export class TaskController {
    constructor(private taskService:TaskService){}
    async create(req:any,res:any){
      try {
        const data = req.body
        const task = await this.taskService.create(data)
        return res.status(201).json({task})
      } catch (error:any) {
        return res.status(400).json({msg:error.message})
      }
    }

    async list(req:any,res:any){
        try {
            const {projectId,userId} = req.body
            const tasks = await this.taskService.listByProject({projectId,userId})
            return res.status(200).json({tasks})
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }    
    }
    async update(req:any,res:any){
       try {
    
        const updated = await this.taskService.update({ 
            taskId: req.params.id,
            userId: req.body.userId,
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            dueDate: req.body.dueDate,
            status: req.body.status,
            completedAt: req.body.completedAt        
       })
       return res.status(200).json({updated})

    } catch (error:any) {
        return res.status(400).json({msg:error.message})
       }
    }

    async delete(req:any,res:any){
      try {
        const taskId = req.params.id
        const userId = req.body.userId
        await this.taskService.delete({taskId,userId})

        return res.status(200).json({msg:'Deletado Com Sucesso'})
      } catch (error:any) {
        return res.status(400).json({msg:error.message})
      }
    }

}