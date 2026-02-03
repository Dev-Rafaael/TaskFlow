import { UserController } from "../controller/user.controller"
import { PrismaUserRepository } from "../repository/user.repository"
import { UserService } from "../service/user.service"




export function MakeUserController(){
const repo = new PrismaUserRepository()
const service = new UserService(repo)
return new UserController(service)
}