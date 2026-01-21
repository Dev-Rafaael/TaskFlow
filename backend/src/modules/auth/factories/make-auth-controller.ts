import { AuthController } from "../controller/auth.controller"
import { PrismaAuthRepository } from "../repository/auth.repository"
import { AuthService } from "../service/auth.service"




export function makeAuthController(){
const repo = new PrismaAuthRepository
const service = new AuthService(repo)
return new AuthController(service)
}