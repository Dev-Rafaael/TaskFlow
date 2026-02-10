
import { TaskService } from "../service/task.service";
import { createTaskSchema } from '../schema/task.schema';

export class TaskController {
    constructor(private taskService:TaskService){}
    async create(req:any,res:any){
      try {
        const userId = '8d8d73b4-52fc-4037-820f-1a3f4ba0ca4f'
        const projectId = 'b49051ca-d0fe-4e97-b6a8-b1feee6de719'
        const data = createTaskSchema.parse(req.body)
        const task = await this.taskService.create(data,userId,projectId)
        return res.status(201).json(task)
      } catch (error:any) {
        return res.status(400).json({msg:error.message})
      } 
    }

    async list(req:any,res:any){
        try {
            const taskId = req.body
                    const userId = '8d8d73b4-52fc-4037-820f-1a3f4ba0ca4f'

            const tasks = await this.taskService.findByProject({
        projectId: 'b49051ca-d0fe-4e97-b6a8-b1feee6de719',
        userId
      })

            return res.status(200).json(tasks)
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }    
    }
    async update(req:any,res:any){
       try {
    
        const updated = await this.taskService.update({ 
            taskId: req.body,
            userId: '8d8d73b4-52fc-4037-820f-1a3f4ba0ca4f',
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            dueDate: req.body.dueDate,
            status: req.body.status,   
       })
       return res.status(200).json(updated)

    } catch (error:any) {
        return res.status(400).json({msg:error.message})
       }
    }

    async delete(req:any,res:any){
      try {
        const taskId = req.params.id
      const userId = '8d8d73b4-52fc-4037-820f-1a3f4ba0ca4f'

        await this.taskService.delete({taskId,userId})
        return res.status(200).json({msg:'Deletado Com Sucesso'})
      } catch (error:any) {
        return res.status(400).json({msg:error.message})
      }
    }

}