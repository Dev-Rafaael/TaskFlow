import { ProjectService } from "../service/project.service"


class FakeProjectRepository{
    private projects: any[] = []

    async create(data: any){
        const project = {id:'1',...data}
        this.projects.push(project)
        return project
    }
    async update(id:string,data:any){
        const index = this.projects.findIndex((u)=> u.id === id)

        if(index === -1){
            return null
        }
        this.projects[index]={
            ...this.projects[index],
            ...data
        }
    return this.projects[index]
    }
    async delete(id:number){
     this.projects = this.projects.filter((u)=> u.id !== id)
    }
}

describe('ProjectService - create', () => {
    let repo: FakeProjectRepository
    let service: ProjectService

    beforeEach(()=>{
        repo = new FakeProjectRepository()
        service = new ProjectService(repo as any)
    })
    it("should create a project", async () => {
        const projeto = await service.create({name:'Todo',description:'Criado Com Sucesso'})
    
        expect(projeto).toHaveProperty('id')
        expect(projeto.name).toBe('Todo')
    })

    it('should not create project without name ', async() => {
       await expect(service.create({name:"",description:'Otimo Projeto'})
    ).rejects.toThrow('Nome é Obrigatorio ')
    });

    it("should not allow duplicate project name for same user", async () => {
        const projeto = await service.create({name:'Todo',description:'Criado Com Sucesso'})

        await expect(service.create({name:'Todo',description:'Criado Com Sucesso'})
    ).rejects.toThrow('Name already exist')
    })

});

describe("ProjectService - update", () => {
    it("should update project data", async () => {})
it("should not update non-existing project", async () => {})
it("should not update project from another user", async () => {})
})
describe("ProjectService - delete", () => {
    it("should delete a project", async () => {})

it("should not delete non-existing project", async () => {})

it("should not delete project from another user", async () => {})

})
describe("ProjectService - list", () => {
    
it("should list all projects from user", async () => {})


it("should not list projects from other users", async () => {})


})
    
