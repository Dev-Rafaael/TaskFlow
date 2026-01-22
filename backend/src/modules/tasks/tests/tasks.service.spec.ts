import { TaskService } from "../service/task.service";

class FakeTaskRepository{
    private tasks: any[]=[];

    async create(data:any){

    }
async findByUserId(userId:string){
    return this.tasks.filter((i)=> i.userId === userId)
}
async findById(id:string){
    return this.tasks.find((e)=> e.id === id)
}
async update(id:string,data:any){
    const index = this.tasks.findIndex(p => p.id === id);
    if(index === -1) return null

    this.tasks[index]={
        ...this.tasks[index],
        ...data,
    };
    return this.tasks[index]
}
async delete(id:string){
    this.tasks = this.tasks.filter((i)=> i.id !== id) 
}
}

describe('Name of the group', () => {
    let repo:FakeTaskRepository
    let service:TaskService

    beforeEach(()=>{
        repo = new FakeTaskRepository()
        service = new TaskService(repo)
    })
    it('should ', () => {
        
    });
});