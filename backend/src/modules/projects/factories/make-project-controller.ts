import { ProjectController } from "../controller/project.controller";
import { PrismaProjectRepository } from "../repository/project.repository";
import { ProjectService } from "../service/project.service";


export function makeProjectController(){
const repo = new PrismaProjectRepository
const service = new ProjectService(repo)
return new ProjectController(service)
}