import { CreateProjectDTO } from "../dtos/create-project.dto"
import { DeleteProjectDTO } from "../dtos/delete-project.dto"
import { ListProjectDTO } from "../dtos/list-project.dto"
import { UpdateProjectDTO } from "../dtos/update-project.dto"

interface Project {
  id: string
  name: string
  description: string | null
  color: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
  isArchived: boolean
}
type CreateProjectRepositoryInput =
  CreateProjectDTO & { userId: string }

interface ProjectRepository {
  create(data: CreateProjectRepositoryInput): Promise<Project>
  findByUserId(userId: string): Promise<Project[]>
  findById(id: string): Promise<Project | null>
  update(projectId: string, data: UpdateProjectDTO): Promise<Project>
  delete(projectId: string): Promise<void>
}




export class ProjectService{
    constructor(private repo:ProjectRepository){}
   async create(
  data: CreateProjectDTO,
  userId: string
) {
  if (!data.name) {
    throw new Error('Name é obrigatório')
  }

  if (!userId) {
    throw new Error('UserId é obrigatório')
  }
const projectData: CreateProjectRepositoryInput = {
  name: data.name,
  description: data.description,
  color: data.color,
  userId
}

return this.repo.create(projectData)

}

    async list(userId:string){
      if(!userId)
        throw new Error('UserId é Obrigatorio')
      return  this.repo.findByUserId(userId)
    }
      async update({ projectId, userId, ...data }: UpdateProjectDTO){
      const project = await this.repo.findById(projectId)
      if(!project) throw new Error('Project not found')

      if(project.userId !== userId)
        throw new Error('Owner not found')

      return await this.repo.update(projectId, { projectId, userId, ...data })
    }

   async delete({ projectId, userId }: DeleteProjectDTO){
      const project = await this.repo.findById(projectId)
      if(!project) throw new Error('Project not found')

      if(project.userId !== userId)
        throw new Error('Owner not found')

      await this.repo.delete(projectId)
    }

}