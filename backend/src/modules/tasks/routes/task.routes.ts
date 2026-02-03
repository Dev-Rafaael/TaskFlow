import { Router } from "express";
import { MakeTaskController } from "../factories/make-tasks-controller";

const controller = MakeTaskController()

const routes = Router()

routes.get('/',(req,res)=>controller.list(req,res))
routes.post('/',(req,res)=>controller.create(req,res))
routes.patch('/:id',(req,res)=>controller.update(req,res))
routes.delete('/:id',(req,res)=>controller.delete(req,res))


export {routes as taskRoutes}