import { Router } from "express";
import { MakeUserController } from "../factories/make-user-controller";


const controller = MakeUserController()

const routes = Router()

routes.get('/',(req,res)=>controller.list(req,res))
routes.patch('/:id',(req,res)=>controller.update(req,res))
routes.patch('/password/:id',(req,res)=>controller.updatePassword(req,res))



export {routes as userRoutes}