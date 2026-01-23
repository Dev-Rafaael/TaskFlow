import { CreateProjectDTO } from "../dtos/create-project.dto"
import { DeleteProjectDTO } from "../dtos/delete-project.dto"
import { ListProjectDTO } from "../dtos/list-project.dto"
import { UpdateProjectDTO } from "../dtos/update-project.dto"





export class ProjectService{
    constructor(private repo:any){}
    async create({name,description,color,userId}:CreateProjectDTO){
      if(!name){
        throw new Error('Name é Obrigatorio ')
      }
     
      if(!userId){
        throw new Error('UserId é Obrigatorio')
      }
      const project = await this.repo.create({name,description,color,userId})
      return project
    }
    async list({userId}:ListProjectDTO){
      if(!userId)
        throw new Error('UserId é Obrigatorio')
      return  this.repo.findByUserId(userId)
    }
    async update({ projectId, userId, ...data }: UpdateProjectDTO){
      const project = await this.repo.findById(projectId)
      if(!project) throw new Error('Project not found')

      if(project.userId !== userId) throw new Error('Owner not found')

        return this.repo.update(projectId,data)
    }
    async delete({ projectId, userId }: DeleteProjectDTO){
      const project = await this.repo.findById(projectId)
      if(!project) throw new Error('Project not found')

      if(project.userId !== userId) throw new Error('Owner not found')

        await this.repo.delete(projectId)
    }
}