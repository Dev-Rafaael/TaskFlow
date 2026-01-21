
interface CreateProjectDTO {
  name: string
  description?: string
  color?: string
  userId: string
}


export class ProjectService{
    constructor(private repo:any){}
    async create({name,description}:any){}
    async update(){}
    async delete(){}
}