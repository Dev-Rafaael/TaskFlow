import { ProjectService } from "../service/project.service";

export class ProjectController {
    constructor(private projectService:ProjectService){}
    async create(req:any,res:any){
         
        try {
            const userId = '8d8d73b4-52fc-4037-820f-1a3f4ba0ca4f'
            const newProject = await this.projectService.create(req.body,userId)
            return res.status(201).json(newProject)
        } catch (error:any) {
            return res.status(400).json({msg: error.message})
        }
    }

    async list(req:any,res:any){
        try {
            const {userId} = req.user.id
            const projects = await this.projectService.list(userId)
            return res.status(200).json(projects)
        } catch (error:any) {
            return res.status(400).json({msg: error.message})
        }
    }
    async update(req:any,res:any){
        try {
           const updated = await this.projectService.update({
            projectId: req.params.id,
            userId: req.body.userId,
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
           }) 
           return res.status(200).json(updated)
        } catch (error:any) {
            return res.status(400).json({msg:error.message})
        }
    }

    async delete(req:any,res:any){
        try {
            const projectId = req.params.id
            const {userId} = req.body
            await this.projectService.delete({projectId,userId})
            return res.status(200).json({msg:'Deletado Com Sucesso'})
        } catch (error:any) {
            return res.status(400).json({msg: error.message})
        }
    }

}